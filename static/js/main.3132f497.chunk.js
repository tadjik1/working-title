(this["webpackJsonpworking-title"]=this["webpackJsonpworking-title"]||[]).push([[0],{370:function(e,t){},371:function(e,t){},379:function(e,t){},389:function(e,t){},390:function(e,t){},391:function(e,t){},399:function(e,t){},433:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var r,c=n(7),a=n.n(c),o=n(54),i=n.n(o),s=n(234),u=n(56),l=n(470),d=n(347),f=Object(d.a)({palette:{type:"dark"}}),b=n(6),h=n(464),j=n(462),m=Object(c.createContext)({stream:null,setStream:function(){}}),p=Object(c.createContext)(null),g=n(4),O=n.n(g),v=n(12),x=n(5),w=n(11),k=(n(434),n(341));!function(e){e[e.BLUR=0]="BLUR",e[e.BACKGROUND=1]="BACKGROUND"}(r||(r={}));var y=255<<24,C=function(){function e(t){Object(x.a)(this,e),this.options=void 0,this.net=void 0,this.inited=void 0,this.raf=void 0,this.background=void 0,this.options=t,this.net=null,this.raf=null,this.inited=!1,this.background=new Uint32Array(1)}return Object(w.a)(e,[{key:"load",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,new Promise((function(e){var n=new Image;n.onload=function(){var r=document.createElement("canvas"),c=n.width,a=n.height;r.width=c,r.height=a;var o=r.getContext("2d");if(o){o.drawImage(n,0,0);var i=o.getImageData(0,0,c,a).data;t.background=new Uint32Array(i.buffer),e()}},n.src="".concat("/working-title","/background.jpeg")}));case 3:return console.time("load model"),e.next=6,k.a(this.options);case 6:this.net=e.sent,this.inited=!0,console.timeEnd("load model");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stop",value:function(){cancelAnimationFrame(this.raf)}},{key:"process",value:function(){var e=Object(v.a)(O.a.mark((function e(t,n){var c,a,o,i,s,u,l,d,f,b;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b=function(){return(b=Object(v.a)(O.a.mark((function e(){var t,s,l,b,h,j,m,p;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.drawImage(a,0,0,o,i),t=u.getImageData(0,0,o,i),e.next=4,c.net.segmentPerson(t,{flipHorizontal:!0,internalResolution:"medium",segmentationThreshold:.7});case 4:for(s=e.sent,l=new ArrayBuffer(t.data.length),b=new Uint8ClampedArray(l),h=new Uint32Array(l),j=new Uint32Array(t.data.buffer),m=0;m<s.data.length;m++)p=0===s.data[m],h[m]=p?n===r.BACKGROUND?c.background[m]:y:j[m];d.putImageData(new ImageData(b,o,i),0,0),c.raf=requestAnimationFrame(f);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)},f=function(){return b.apply(this,arguments)},this.net){e.next=4;break}throw new Error("net is not ready");case 4:if(this.background){e.next=6;break}throw new Error("no background");case 6:return this.raf&&(this.stop(),this.raf=null),c=this,(a=document.createElement("video")).muted=!0,a.srcObject=t,e.next=13,new Promise((function(e){a.addEventListener("loadedmetadata",(function(){a.play(),e()}))}));case 13:if(o=a.videoWidth,i=a.videoHeight,(s=document.createElement("canvas")).width=o,s.height=i,u=s.getContext("2d")){e.next=21;break}throw new Error("failed to get context from canvas");case 21:if((l=document.createElement("canvas")).width=o,l.height=i,d=l.getContext("2d")){e.next=27;break}throw new Error("failed to get context from canvas");case 27:return this.raf=requestAnimationFrame(f),e.abrupt("return",l.captureStream(25));case 29:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),S=n(38),E=Object(j.a)({container:{width:"100vw",height:"100vh",position:"relative"}}),D=function(e){var t=e.children,n=E(),r=Object(c.useState)(null),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(c.useMemo)((function(){return new C({architecture:"ResNet50",outputStride:16,quantBytes:2})}),[]);return Object(S.jsx)(p.Provider,{value:s,children:Object(S.jsx)(m.Provider,{value:{stream:o,setStream:i},children:Object(S.jsx)(h.a,{container:!0,className:n.container,children:t})})})},R=n(348),N=n(466),I=n(467),T=n(468),A=n(472),P=n(473),U=n(469),B=n(344),L=n.n(B),F=n(349),z=n(343);console.log("ws server:","wss://working-title-webrtc.herokuapp.com");var G=Object(z.io)("wss://working-title-webrtc.herokuapp.com");G.on("connect",(function(){return console.log("connect")})),G.on("reconnect",(function(){return console.log("reconnect")})),G.on("disconnect",(function(){return console.log("disconnect")})),G.on("connect_error",(function(e){return console.log("connect_error",e)}));var K=G;function q(e){var t=e.event,n=Object(F.a)(e,["event"]);return new Promise((function(e){G.emit(t,n,e)}))}var J=n(190),M=n.n(J),H=n(345),W=n.n(H),_=n(346),Y=n.n(_);function Q(){return navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:{width:320,height:240,frameRate:25},audio:!0}).then((function(e){return e}),(function(e){switch(e.name){case"NotFoundError":alert("Unable to open your call because no camera and/or microphone were found.");break;case"SecurityError":case"PermissionDeniedError":alert("You can not use video conference w/o granting access to the camera and/or microphone.");break;default:alert("Error opening your camera and/or microphone: "+e.message)}throw e})):Promise.resolve(null)}var V=Object(j.a)((function(e){return{title:{marginBottom:e.spacing(2)},actions:{marginTop:e.spacing(2)},create:{marginRight:e.spacing(2)},join:{marginLeft:e.spacing(2)},video:{width:"640px",height:"480px",backgroundColor:"rgb(0, 0, 0)"},player:{width:"100%",height:"100%"},button:{margin:e.spacing(1)}}}));var X=function(){var e=V(),t=Object(u.f)(),n=Object(c.useState)(""),a=Object(b.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(!1),l=Object(b.a)(s,2),d=l[0],f=l[1],j=Object(c.useState)(!0),g=Object(b.a)(j,2),x=g[0],w=g[1],k=Object(c.useState)(!1),y=Object(b.a)(k,2),C=y[0],E=y[1],D=Object(c.useState)(!0),B=Object(b.a)(D,2),F=B[0],z=B[1],G=Object(c.useState)(!1),K=Object(b.a)(G,2),J=K[0],H=K[1],_=Object(c.useState)(!1),X=Object(b.a)(_,2),Z=X[0],$=X[1],ee=Object(c.useContext)(p),te=Object(c.useRef)(null),ne=Object(c.useContext)(m),re=ne.stream,ce=ne.setStream;Object(c.useEffect)((function(){re||Q().then((function(e){ce(e)})).catch(console.error)}),[]),Object(c.useEffect)((function(){re&&te.current&&(te.current.srcObject=re)}),[re]),Object(c.useEffect)((function(){ee&&(ee.inited?z(!1):ee.load().then((function(){return z(!1)})))}),[]),Object(c.useEffect)((function(){E(!1),o.length?f(!0):f(!1)}),[o]);var ae=Object(c.useCallback)(Object(v.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q({event:"join",room:o});case 2:e.sent?t.push("/".concat(o)):E(!0);case 4:case"end":return e.stop()}}),e)}))),[t,o]),oe=Object(c.useCallback)(Object(v.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(R.a)(),e.next=3,q({event:"create",room:n});case 3:e.sent&&t.push("/".concat(n));case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(S.jsxs)(h.a,{container:!0,children:[Object(S.jsx)(h.a,{container:!0,item:!0,sm:6,alignItems:"center",justify:"flex-end",children:Object(S.jsxs)(h.a,{container:!0,item:!0,sm:10,direction:"column",children:[Object(S.jsxs)(h.a,{container:!0,direction:"column",className:e.title,children:[Object(S.jsx)(N.a,{variant:"h5",children:"The most secure video conference powered by WebRTC"}),Object(S.jsx)(N.a,{variant:"subtitle1",children:"Create new room or join the existing one"})]}),Object(S.jsx)(I.a,{}),Object(S.jsxs)(h.a,{container:!0,item:!0,className:e.actions,children:[Object(S.jsx)(T.a,{disabled:x,variant:"contained",className:e.create,startIcon:Object(S.jsx)(L.a,{}),onClick:oe,children:"New room"}),Object(S.jsx)(A.a,{error:C,disabled:x,variant:"outlined",label:"Enter room id",value:o,onChange:function(e){return i(e.target.value)}}),d&&Object(S.jsx)(T.a,{disabled:x,className:e.join,onClick:ae,children:"Join"})]})]})}),Object(S.jsxs)(h.a,{container:!0,item:!0,sm:6,justify:"center",alignItems:"center",direction:"column",children:[Object(S.jsxs)(P.a,{className:e.video,color:"text.primary",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[x&&Object(S.jsx)(M.a,{fontSize:"large"}),Object(S.jsx)("video",{ref:te,onLoadedData:function(){return w(!1)},className:e.player,style:{display:x?"none":"block"},muted:!0,autoPlay:!0})]}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(U.a,{color:J?"primary":"default",className:e.button,disabled:F,onClick:function(){ee&&re&&ee.inited&&(H(!J),$(!1),J?Q().then(ce):ee.process(re,r.BLUR).then(ce))},children:Object(S.jsx)(W.a,{fontSize:"large"})}),Object(S.jsx)(U.a,{color:Z?"primary":"default",className:e.button,disabled:F,onClick:function(){ee&&re&&ee.inited&&(H(!1),$(!Z),Z?Q().then(ce):ee.process(re,r.BACKGROUND).then(ce))},children:Object(S.jsx)(Y.a,{fontSize:"large"})})]})]})]})};var Z=Object(j.a)({remote:{position:"relative",width:"640px",height:"480px",backgroundColor:"rgb(0, 0, 0)"},local:{position:"absolute",top:"-120px",right:"-160px",width:"320px",height:"240px",backgroundColor:"rgb(0, 0, 0)",border:"1px solid white"},video:{width:"100%",height:"100%"}});var $=function(){var e=Z(),t=Object(u.g)(),n=Object(u.f)(),r=Object(c.useState)(!1),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(c.useState)(!0),l=Object(b.a)(s,2),d=l[0],f=l[1],j=Object(c.useState)(!0),p=Object(b.a)(j,2),g=p[0],x=p[1],w=Object(c.useContext)(m),k=w.stream,y=w.setStream,C=Object(c.useRef)(null),E=Object(c.useRef)(null),D=Object(c.useCallback)((function(){E.current&&E.current.removeAttribute("srcObject")}),[]);Object(c.useEffect)((function(){q({event:"join",room:t.id}).then((function(e){e?i(!0):n.push("/")}))}),[]),Object(c.useEffect)((function(){o&&(k&&C.current?C.current.srcObject=k:Q().then((function(e){e&&(C.current&&(C.current.srcObject=e),y(e))})).catch(console.error))}),[o]);var R=function(e){var t=Object(c.useRef)(null),n=Object(c.useCallback)((function(){t.current&&(t.current.ontrack=null,t.current.onremovetrack=null,t.current.onicecandidate=null,t.current.oniceconnectionstatechange=null,t.current.onsignalingstatechange=null,t.current.onicegatheringstatechange=null,t.current.onnegotiationneeded=null,t.current.close(),t.current=null)}),[]),r=Object(c.useCallback)((function(t){e.handleTrackEvent(t)}),[]),a=Object(c.useCallback)(Object(v.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.current.createOffer();case 4:return n=e.sent,e.next=7,t.current.setLocalDescription(n);case 7:return e.next=9,q({event:"call",offer:t.current.localDescription});case 9:case"end":return e.stop()}}),e)}))),[]),o=Object(c.useCallback)(function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.candidate){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q({event:"candidate",candidate:t.candidate});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),i=Object(c.useCallback)((function(){var r;if(t.current){var c=null===(r=t.current)||void 0===r?void 0:r.iceConnectionState;switch(c){case"closed":case"failed":case"disconnected":n()}e.handleICEConnectionStateChangeEvent(c)}}),[]),s=Object(c.useCallback)((function(){if(t.current){var r=t.current.signalingState;switch(r){case"closed":n()}e.handleSignalingStateChangeEvent(r)}}),[]),u=Object(c.useCallback)((function(){var e=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});return e.onnegotiationneeded=a,e.ontrack=r,e.onicecandidate=o,e.oniceconnectionstatechange=i,e.onsignalingstatechange=s,e.onremovetrack=function(e){return console.log("onremovetrack",e)},e.onicegatheringstatechange=function(){return console.log("onicegatheringstatechange")},e}),[]);return Object(c.useEffect)((function(){if(e.stream)return K.on("call",n),K.on("answer",c),K.on("candidate",o),function(){K.off("call",n),K.off("answer",c),K.off("candidate",o)};function n(e){return r.apply(this,arguments)}function r(){return(r=Object(v.a)(O.a.mark((function n(r){var c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("call",r),t.current=u(),n.next=4,t.current.setRemoteDescription(new RTCSessionDescription(r.offer));case 4:return e.stream.getTracks().forEach((function(n){return t.current.addTrack(n,e.stream)})),n.next=7,t.current.createAnswer();case 7:return c=n.sent,n.next=10,t.current.setLocalDescription(new RTCSessionDescription(c));case 10:return n.next=12,q({event:"answer",answer:t.current.localDescription});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(e){return a.apply(this,arguments)}function a(){return(a=Object(v.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("answer",n),t.current){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.current.setRemoteDescription(new RTCSessionDescription(n.answer));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return i.apply(this,arguments)}function i(){return(i=Object(v.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("candidate",n),t.current){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.current.addIceCandidate(n.candidate);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[e.stream]),{call:function(){t.current=u(),e.stream.getTracks().forEach((function(n){return t.current.addTrack(n,e.stream)}))},close:n}}({stream:k,handleTrackEvent:function(e){E.current&&(E.current.srcObject=e.streams[0])},handleICEConnectionStateChangeEvent:function(e){switch(e){case"closed":case"failed":case"disconnected":D();break;default:console.log(e)}},handleSignalingStateChangeEvent:function(e){switch(e){case"closed":D();break;default:console.log(e)}}});return Object(c.useEffect)((function(){d||q({event:"participants",room:t.id}).then((function(e){console.log("participants",e),e.length&&R.call()})).catch(console.error)}),[d]),Object(S.jsx)(h.a,{container:!0,alignItems:"center",justify:"center",children:Object(S.jsx)(h.a,{container:!0,item:!0,sm:10,direction:"column",justify:"center",children:Object(S.jsx)(h.a,{container:!0,justify:"center",children:Object(S.jsxs)(P.a,{className:e.remote,color:"text.primary",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[g&&Object(S.jsx)(M.a,{fontSize:"large"}),Object(S.jsx)("video",{ref:E,onLoadedData:function(){return x(!1)},className:e.video,style:{display:g?"none":"block"},autoPlay:!0}),Object(S.jsxs)(P.a,{className:e.local,color:"text.primary",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[d&&Object(S.jsx)(M.a,{fontSize:"large"}),Object(S.jsx)("video",{ref:C,onLoadedData:function(){return f(!1)},className:e.video,style:{display:d?"none":"block"},muted:!0,autoPlay:!0})]})]})})})})},ee=function(e){e&&n.e(3).then(n.bind(null,475)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},te=(n(433),n(471));i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsxs)(l.a,{theme:f,children:[Object(S.jsx)(te.a,{}),Object(S.jsx)(D,{children:Object(S.jsx)(s.a,{children:Object(S.jsxs)(u.c,{children:[Object(S.jsx)(u.a,{exact:!0,path:"/",children:Object(S.jsx)(X,{})}),Object(S.jsx)(u.a,{path:"/:id",children:Object(S.jsx)($,{})})]})})})]})}),document.getElementById("root")),ee()}},[[435,1,2]]]);
//# sourceMappingURL=main.3132f497.chunk.js.map