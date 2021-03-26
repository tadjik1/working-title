(this["webpackJsonpworking-title"]=this["webpackJsonpworking-title"]||[]).push([[0],{100:function(e,n,t){},101:function(e,n,t){},102:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(50),i=t.n(a),o=t(24),s=t(5),u=t(25),l=Object(r.createContext)(null),v=t(3),h=function(e){var n=e.stream,t=e.children;return Object(v.jsx)(l.Provider,{value:n,children:t})},d=t(4),p=t.n(d),x=t(7),f=t(0),m=t(1),g=t(15),b=function(){function e(){Object(f.a)(this,e),this.canvas=void 0,this.video=void 0,this.width=640,this.height=480,this.scene=void 0,this.renderer=void 0,this.clock=void 0,this.stream=void 0,this.camera=void 0,this.material=void 0,this.video=document.createElement("video"),this.video.autoplay=!0,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.scene=new g.f,this.camera=new g.d(45,this.width/this.height,.1,100),this.camera.position.z=1,this.renderer=new g.i({preserveDrawingBuffer:!0,canvas:this.canvas,antialias:!0,alpha:!0}),this.clock=new g.a,this.render=this.render.bind(this)}return Object(m.a)(e,[{key:"getStream",value:function(){var e=Object(x.a)(p.a.mark((function e(){var n,t,r,c,a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserMedia();case 2:return n=e.sent,t=n.getAudioTracks(),this.video.srcObject=new MediaStream(n.getVideoTracks()),e.next=7,Promise.race([new Promise((function(e,n){return setTimeout(n,2e3,new Error('"loadedmetadata" timeout error'))})),new Promise((function(e){a.video.onloadeddata=e}))]);case 7:return r=new g.e(1,.75,32,32),this.material=new g.g({vertexShader:"precision mediump float;\n\nvarying vec2 vUv;\nvarying float vWave;\nuniform float uTime;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v) {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n  // Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients: 7x7 points over a square, mapped onto an octahedron.\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  // Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n  dot(p2,x2), dot(p3,x3) ) );\n}\n\nvoid main() {\n  vUv = uv;\n\n  vec3 pos = position;\n  float noiseFreq = 3.5;\n  float noiseAmp = 0.15;\n  vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);\n  pos.z += snoise(noisePos) * noiseAmp;\n  vWave = pos.z;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n",fragmentShader:"precision mediump float;\n\nvarying vec2 vUv;\nvarying float vWave;\nuniform sampler2D uTexture;\n\nvoid main() {\n    float wave = vWave * 0.25;\n    float r = texture2D(uTexture, vUv).r;\n    float g = texture2D(uTexture, vUv).g;\n    float b = texture2D(uTexture, vUv + wave).b;\n    vec3 texture = vec3(r, g, b);\n    gl_FragColor = vec4(texture, 1.);\n}\n",uniforms:{uTime:{value:0},uTexture:{value:new g.h(this.video)}},side:g.b}),c=new g.c(r,this.material),this.scene.add(c),requestAnimationFrame(this.render),this.stream=this.canvas.captureStream(25),t.forEach((function(e){a.stream.addTrack(e)})),e.abrupt("return",this.stream);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserMedia",value:function(){if(navigator.mediaDevices)return navigator.mediaDevices.getUserMedia({video:{width:640,height:480,frameRate:25},audio:!0});var e=new Error("No navigator.mediaDevices, make sure you are on HTTPS/localhost");return e.name="NoMediaDevices",Promise.reject(e)}},{key:"render",value:function(){requestAnimationFrame(this.render),this.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.renderer.render(this.scene,this.camera)}}]),e}(),j=(t(61),function(e){var n=e.children,t=Object(r.useState)(null),c=Object(u.a)(t,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){(new b).getStream().then(i).catch(console.error)}),[]),Object(v.jsx)(h,{stream:a,children:Object(v.jsx)("main",{className:"app",children:n})})}),w=t(53),y=(t(62),t(54)),C=t(51);console.log("ws server:","wss://working-title-webrtc.herokuapp.com");var O=Object(C.io)("wss://working-title-webrtc.herokuapp.com");O.on("connect",(function(){return console.log("connect")})),O.on("reconnect",(function(){return console.log("reconnect")})),O.on("disconnect",(function(){return console.log("disconnect")})),O.on("connect_error",(function(e){return console.log("connect_error",e)}));var k=O;function E(e){var n=e.event,t=Object(y.a)(e,["event"]);return new Promise((function(e){O.emit(n,t,e)}))}var T=function(){var e=Object(s.f)(),n=Object(r.useContext)(l),t=Object(r.useRef)(null);Object(r.useEffect)((function(){n&&t.current&&(t.current.srcObject=n)}),[n,t]);var c=Object(r.useCallback)(Object(x.a)(p.a.mark((function n(){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(w.a)(),n.next=3,E({event:"create",room:t});case 3:n.sent&&e.push("/".concat(t));case 5:case"end":return n.stop()}}),n)}))),[]);return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"title",children:"The most secure video conferencing powered by WebRTC"}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)("button",{onClick:c,className:"button",children:"Host"}),Object(v.jsx)("p",{className:"subtitle",children:"Host your meeting and share the link"})]}),Object(v.jsx)("video",{className:"video",autoPlay:!0,muted:!0,controls:!1,ref:t})]})]})},S=(t(100),function(){function e(n){var t=this;Object(f.a)(this,e),this.pc=void 0,this.options=void 0,this.handleTrackEvent=function(e){t.options.handleTrackEvent(e)},this.handleNegotiationNeededEvent=Object(x.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pc){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.pc.createOffer();case 4:return n=e.sent,e.next=7,t.pc.setLocalDescription(n);case 7:return e.next=9,E({event:"call",offer:t.pc.localDescription});case 9:case"end":return e.stop()}}),e)}))),this.handleICECandidateEvent=function(){var e=Object(x.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.candidate){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,E({event:"candidate",candidate:n.candidate});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.handleICEConnectionStateChangeEvent=function(){if(t.pc){var e=t.pc.iceConnectionState;switch(e){case"closed":case"failed":case"disconnected":t.close()}t.options.handleICEConnectionStateChangeEvent(e)}},this.handleSignalingStateChangeEvent=function(){if(t.pc){var e=t.pc.signalingState;switch(e){case"closed":t.close()}t.options.handleSignalingStateChangeEvent(e)}},this.handleCall=function(){var e=Object(x.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("call",n),t.pc=t.createPeerConnection(),e.next=4,t.pc.setRemoteDescription(new RTCSessionDescription(n.offer));case 4:return t.options.stream.getTracks().forEach((function(e){return t.pc.addTrack(e,t.options.stream)})),e.next=7,t.pc.createAnswer();case 7:return r=e.sent,e.next=10,t.pc.setLocalDescription(new RTCSessionDescription(r));case 10:return e.next=12,E({event:"answer",answer:t.pc.localDescription});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.handleAnswer=function(){var e=Object(x.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("answer",n),t.pc){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.pc.setRemoteDescription(new RTCSessionDescription(n.answer));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.handleCandidate=function(){var e=Object(x.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("candidate",n),t.pc){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.pc.addIceCandidate(n.candidate);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.pc=null,this.options=n,k.on("call",this.handleCall),k.on("answer",this.handleAnswer),k.on("candidate",this.handleCandidate)}return Object(m.a)(e,[{key:"call",value:function(){var e=this;this.pc=this.createPeerConnection(),this.options.stream.getTracks().forEach((function(n){return e.pc.addTrack(n,e.options.stream)}))}},{key:"createPeerConnection",value:function(){var e=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});return e.onnegotiationneeded=this.handleNegotiationNeededEvent,e.ontrack=this.handleTrackEvent,e.onicecandidate=this.handleICECandidateEvent,e.oniceconnectionstatechange=this.handleICEConnectionStateChangeEvent,e.onsignalingstatechange=this.handleSignalingStateChangeEvent,e.onremovetrack=function(e){return console.log("onremovetrack",e)},e.onicegatheringstatechange=function(){return console.log("onicegatheringstatechange")},e}},{key:"close",value:function(){this.pc&&(this.pc.ontrack=null,this.pc.onremovetrack=null,this.pc.onicecandidate=null,this.pc.oniceconnectionstatechange=null,this.pc.onsignalingstatechange=null,this.pc.onicegatheringstatechange=null,this.pc.onnegotiationneeded=null,this.pc.close(),this.pc=null)}}]),e}()),z=void 0!==navigator.share;function D(){var e={title:"Working title",text:"Join me in video conference!",url:document.location.href};navigator.share(e).then(console.log).catch(console.error)}var N=function(){var e=Object(s.g)(),n=Object(s.f)(),t=Object(r.useContext)(l),c=Object(r.useRef)(null),a=Object(r.useRef)(null),i=Object(r.useCallback)((function(){c.current&&c.current.removeAttribute("srcObject")}),[]);return Object(r.useEffect)((function(){function r(){return(r=Object(x.a)(p.a.mark((function r(){var a,o;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=new S({stream:t,handleTrackEvent:function(e){console.log(c.current,e),c.current&&(c.current.srcObject=e.streams[0])},handleICEConnectionStateChangeEvent:function(e){switch(e){case"closed":case"failed":case"disconnected":i();break;default:console.log(e)}},handleSignalingStateChangeEvent:function(e){switch(e){case"closed":i();break;default:console.log(e)}}}),r.next=3,E({event:"join",room:e.id});case 3:return r.sent||n.push("/"),r.next=7,E({event:"participants",room:e.id});case 7:if(o=r.sent,console.log("participants",o),o.length){r.next=11;break}return r.abrupt("return");case 11:a.call();case 12:case"end":return r.stop()}}),r)})))).apply(this,arguments)}t&&a.current&&(a.current.srcObject=t,function(){return r.apply(this,arguments)}().catch(console.error))}),[t,a]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"videos",children:[Object(v.jsx)("video",{ref:c,autoPlay:!0,controls:!1,className:"remote"}),Object(v.jsx)("video",{ref:a,autoPlay:!0,controls:!1,muted:!0,className:"local"})]}),z&&Object(v.jsx)("button",{onClick:D,className:"button",children:"Share"})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};t(101);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(j,{children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{exact:!0,path:"/",children:Object(v.jsx)(T,{})}),Object(v.jsx)(s.a,{path:"/:id",children:Object(v.jsx)(N,{})})]})})})}),document.getElementById("root")),P()},61:function(e,n,t){},62:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.a6f7d78a.chunk.js.map