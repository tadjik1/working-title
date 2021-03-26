import {
  Clock,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  PlaneGeometry,
  ShaderMaterial,
  VideoTexture,
  DoubleSide,
  Mesh,
} from "three";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";

const CONSTRAINTS_VIDEO_WIDTH = 640;
const CONSTRAINTS_VIDEO_HEIGHT = 480;
const CONSTRAINTS_VIDEO_FRAME_RATE = 25;

export default class Renderer {
  private canvas: HTMLCanvasElement;
  private video: HTMLVideoElement;
  private readonly width: number = CONSTRAINTS_VIDEO_WIDTH;
  private readonly height: number = CONSTRAINTS_VIDEO_HEIGHT;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private clock: Clock;
  private stream: MediaStream | undefined;
  private camera: PerspectiveCamera;
  private material: ShaderMaterial | undefined;
  
  constructor() {
    this.video = document.createElement("video");
    this.video.autoplay = true;
    
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    this.scene = new Scene();
    
    this.camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.z = 1;
    
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    
    this.clock = new Clock();
    
    this.render = this.render.bind(this);
  }
  
  async getStream(): Promise<MediaStream> {
    const media = await this.getUserMedia();
    
    const audioTracks = media.getAudioTracks();
    
    this.video.srcObject = new MediaStream(media.getVideoTracks());
    
    await Promise.race([
      new Promise((_, reject) =>
        setTimeout(reject, 2000, new Error('"loadedmetadata" timeout error'))
      ),
      new Promise((resolve) => {
        this.video.onloadeddata = resolve;
      }),
    ]);
    
    const geometry = new PlaneGeometry(1, 0.75, 32, 32);
    this.material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: new VideoTexture(this.video) },
      },
      side: DoubleSide,
    });
    const mesh = new Mesh(geometry, this.material);
    this.scene.add(mesh);
    
    requestAnimationFrame(this.render);
    
    // @ts-ignore
    this.stream = this.canvas.captureStream(CONSTRAINTS_VIDEO_FRAME_RATE);
    
    audioTracks.forEach((track) => {
      // @ts-ignore
      this.stream.addTrack(track);
    });
    
    // @ts-ignore
    return this.stream;
  }
  
  getUserMedia(): Promise<MediaStream> {
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia({
        video: {
          width: CONSTRAINTS_VIDEO_WIDTH,
          height: CONSTRAINTS_VIDEO_HEIGHT,
          frameRate: CONSTRAINTS_VIDEO_FRAME_RATE,
        },
        audio: true,
      });
    }
    
    const error = new Error(
      "No navigator.mediaDevices, make sure you are on HTTPS/localhost"
    );
    error.name = "NoMediaDevices";
    return Promise.reject(error);
  }
  
  render() {
    requestAnimationFrame(this.render);
    // @ts-ignore
    this.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
  }
}
