(function(){"use strict";var t={3697:function(t,e,n){var i=n(9242),r=(n(560),n(3396)),o=n(4870);const s=(0,o.qj)({questionCount:0,answerCount:0,completePercent:0,finishPageZIndex:-1,finishPageOpacity:0,timeLeft:4,timeTotal:8,timeWidth:"0%",operandA:12,operandB:9,product:108,productVisible:"auto",barColor:"#ddd",beginTimer(t){this.timeTotal=t,this.timeLeft=t,this.timeWidth="100%"},decreaseTimer(t){this.timeLeft-=t,this.timeWidth=`${Math.round(this.timeLeft/this.timeTotal*100,2)}%`}});var a=n(7139);const c={class:"math-question"},l={};var u=Object.assign(l,{__name:"MathQuestion",setup(t){return(t,e)=>((0,r.wg)(),(0,r.iD)("div",c,(0,a.zw)((0,o.SU)(s).operandA)+" × "+(0,a.zw)((0,o.SU)(s).operandB)+" ",1))}}),d=n(89);const p=(0,d.Z)(u,[["__scopeId","data-v-3d93635a"]]);var m=p;const f=t=>((0,r.dD)("data-v-75a098fe"),t=t(),(0,r.Cn)(),t),h={class:"timer-bar-container"},v=f((()=>(0,r._)("div",{class:"timer-bar-total"},null,-1))),g=["data-time-left"],w={methods:{computeStyle(){return`width: ${s.timeLeft/s.timeTotal*100}%;`}}};var b=Object.assign(w,{__name:"TimerBar",setup(t){return(0,i.sj)((t=>({a27f4e4a:(0,o.SU)(s).timeWidth,"30165cee":(0,o.SU)(s).barColor}))),window.state=s,(t,e)=>((0,r.wg)(),(0,r.iD)("div",h,[v,(0,r._)("div",{class:"timer-bar-current","data-time-left":(0,o.SU)(s).timeLeft},null,8,g)]))}});const _=(0,d.Z)(b,[["__scopeId","data-v-75a098fe"]]);var x=_;const C={class:"math-answer"},O={class:"disappearing"},A={};var S=Object.assign(A,{__name:"MathAnswer",setup(t){return(0,i.sj)((t=>({"4550934d":(0,o.SU)(s).productVisible}))),(t,e)=>((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",O,(0,a.zw)((0,o.SU)(s).product),1)]))}});const T=(0,d.Z)(S,[["__scopeId","data-v-f451e002"]]);var U=T;const j={class:"finish-page page-dialog main-panel"},k={class:"finish-page certificate-image"},y=(0,r._)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1278.000000 1280.000000",preserveAspectRatio:"xMidYMid meet"},[(0,r._)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"#00ff00",stroke:"none"},[(0,r._)("path",{d:"M6273 12604 l-251 -194 -264 157 c-144 86 -270 157 -279 157 -8 1\r\n                -111 -102 -228 -227 -154 -165 -218 -227 -229 -222 -171 65 -489 188 -528 204\r\n                l-52 20 -173 -265 c-99 -150 -180 -264 -189 -264 -8 0 -145 27 -304 60 -159\r\n                33 -295 60 -301 60 -6 0 -69 -130 -139 -290 l-129 -290 -191 8 c-105 4 -249 7\r\n                -320 7 l-130 0 -77 -299 c-43 -164 -81 -302 -86 -306 -4 -4 -145 -24 -313 -44\r\n                -168 -21 -308 -41 -311 -44 -3 -4 -18 -146 -33 -316 -14 -171 -28 -312 -31\r\n                -314 -2 -2 -137 -44 -301 -93 -163 -49 -299 -91 -302 -94 -4 -4 33 -521 43\r\n                -597 l5 -36 -285 -140 c-163 -81 -285 -147 -285 -154 0 -8 33 -146 74 -308 40\r\n                -162 72 -298 70 -302 -2 -3 -115 -86 -251 -183 -137 -98 -251 -181 -255 -184\r\n                -4 -4 47 -130 113 -281 65 -151 122 -284 125 -295 4 -16 -43 -67 -216 -240\r\n                -121 -121 -220 -224 -220 -229 0 -5 77 -127 170 -272 l171 -264 -186 -260\r\n                -186 -260 215 -235 215 -235 -33 -72 c-18 -40 -59 -125 -91 -188 -32 -63 -79\r\n                -161 -105 -216 l-47 -101 248 -194 c137 -107 248 -198 249 -203 0 -5 -38 -139\r\n                -85 -299 -47 -159 -85 -295 -85 -302 0 -6 123 -78 273 -160 149 -81 274 -150\r\n                276 -152 3 -2 -12 -145 -33 -319 -21 -173 -37 -316 -35 -318 2 -2 138 -49 301\r\n                -106 223 -77 298 -107 298 -119 3 -130 29 -614 34 -618 3 -4 144 -30 312 -59\r\n                169 -29 308 -54 309 -56 2 -2 32 -137 66 -300 34 -164 66 -303 70 -310 6 -10\r\n                82 -14 323 -17 l315 -3 105 -267 c58 -146 110 -278 115 -293 6 -16 15 -28 20\r\n                -28 5 0 145 22 312 49 166 28 306 48 311 45 4 -3 80 -126 168 -273 l161 -268\r\n                303 102 302 103 207 -243 207 -243 280 150 c154 82 284 147 290 143 5 -3 116\r\n                -96 246 -206 l237 -199 41 33 c34 28 123 96 452 349 7 5 110 -50 283 -153 149\r\n                -88 275 -159 279 -157 4 2 102 104 217 228 115 124 214 226 220 227 5 1 141\r\n                -49 300 -111 l290 -114 173 262 c95 143 179 262 187 264 9 2 151 -24 316 -58\r\n                165 -35 301 -61 303 -59 2 2 61 133 131 292 l128 288 201 -8 c110 -5 255 -8\r\n                320 -8 l119 0 76 297 c42 164 81 301 86 307 6 5 148 26 318 47 288 35 308 39\r\n                312 58 2 12 15 154 29 315 14 162 29 298 33 301 5 4 142 47 306 95 229 68 297\r\n                92 297 104 0 26 -39 521 -45 574 l-6 48 286 139 c157 76 285 144 285 150 0 6\r\n                -34 146 -75 312 -42 165 -74 302 -73 303 2 1 118 84 258 185 140 100 256 183\r\n                257 184 1 1 -52 126 -118 277 -66 150 -122 283 -125 294 -4 16 44 68 216 240\r\n                121 121 220 224 220 229 0 5 -77 127 -171 273 l-170 264 185 260 186 260 -202\r\n                222 c-112 122 -209 230 -216 239 -11 14 -8 27 24 90 20 40 83 168 139 285\r\n                l103 211 -249 194 c-136 106 -248 198 -249 205 0 7 38 142 85 300 47 158 85\r\n                293 85 299 0 7 -124 79 -275 160 -244 133 -274 152 -275 174 0 13 16 156 36\r\n                318 20 161 34 295 32 296 -1 2 -136 49 -298 105 -162 57 -296 104 -298 105 -1\r\n                2 -9 144 -17 316 -8 172 -18 316 -22 320 -4 4 -69 17 -143 29 -213 35 -474 82\r\n                -477 84 -2 3 -133 615 -133 624 0 1 -144 4 -321 5 l-320 3 -114 288 c-62 159\r\n                -116 291 -119 294 -3 3 -144 -17 -313 -45 -169 -28 -311 -48 -315 -46 -4 3\r\n                -80 126 -169 274 l-161 269 -302 -103 -302 -104 -208 244 -207 244 -62 -34\r\n                c-34 -19 -160 -86 -280 -151 -189 -101 -220 -115 -235 -103 -9 7 -116 96 -237\r\n                199 -121 102 -224 188 -230 191 -5 3 -123 -81 -262 -188z"})])],-1),Q={class:"complete-percent"},P=(0,r._)("h1",null,"Complete!",-1),M={};var q=Object.assign(M,{__name:"FinishPage",setup(t){return(t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"finish-page page-outer-container",style:(0,a.j5)({opacity:(0,o.SU)(s).finishPageOpacity,"z-index":(0,o.SU)(s).finishPageZIndex})},[(0,r._)("div",j,[(0,r._)("div",k,[y,(0,r._)("span",Q,(0,a.zw)((0,o.SU)(s).completePercent)+"%",1)]),P,(0,r._)("p",null,"You answered "+(0,a.zw)((0,o.SU)(s).answerCount)+" of "+(0,a.zw)((0,o.SU)(s).questionCount)+" questions!",1)])],4))}});const W=q;var z=W;const D={class:"parent-container"},L={class:"main-panel"},B={class:"button-panel"},I=!1;let N,Z,F,V,H=0,Y=12,$=0,E=12,G=1e4,R=2e3,J=0,K=[],X=0;for(let rt=H;rt<=Y;rt++)for(let t=$;t<=E;t++)K.push([rt,t]);N=K.length;const tt={name:"App",components:{TimerBar:x,MathQuestion:m,MathAnswer:U,FinishPage:z},methods:{nextQuestion(){console.log("Next"),J++,Z=!1,clearTimeout(F),this.setUpNextQuestion()},skipQuestion(){console.log("Skip"),Z=!1,s.timeWidth="0%",this.endQuestion()},correctAnswer(){Z=!1,J++,clearTimeout(F),F=setTimeout(this.setUpNextQuestion,R),window.nextHandle=F,s.barColor="#0f0",s.productVisible="auto"},stop(){console.log("Stop"),Z=!1,clearTimeout(F)},complete(){console.log("Complete"),s.barColor="#0f0",s.answerCount=J,s.questionCount=N,s.completePercent=Math.round(J/N*100)>>>0,s.finishPageZIndex=1,s.finishPageOpacity=1},setUpNextQuestion(){if(K.length<1)return void this.complete();let t=Math.random()*K.length>>>0;X+=t,X>=K.length&&(X-=K.length);let e=K.splice(X,1)[0];s.productVisible="0",s.operandA=e[0],s.operandB=e[1],s.product=e[0]*e[1]>>>0,s.barColor="#ddd",I&&(s.beginTimer(G),window.requestAnimationFrame(this.timerAdvance),V=Date.now(),Z=!0)},timerAdvance(){if(!Z)return;let t=Date.now();s.decreaseTimer(t-V),V=t,s.timeLeft<=0?this.endQuestion():window.requestAnimationFrame(this.timerAdvance)},endQuestion(){Z=!1,F=setTimeout(this.setUpNextQuestion,R),window.nextHandle=F,s.barColor="#f00",s.productVisible="auto"}},mounted(){this.setUpNextQuestion()}};var et=Object.assign(tt,{setup(t){return(t,e)=>((0,r.wg)(),(0,r.iD)("div",D,[(0,r._)("div",L,[(0,r.Wm)(x),(0,r.Wm)(m),(0,r.Wm)(U),(0,r._)("div",B,[(0,r._)("div",{class:"action-button next-question",onClick:e[0]||(e[0]=(...e)=>t.correctAnswer&&t.correctAnswer(...e))},"Got it!"),(0,r._)("div",{class:"action-button skip-question",onClick:e[1]||(e[1]=(...e)=>t.skipQuestion&&t.skipQuestion(...e))},"Skip"),(0,r._)("div",{class:"action-button stop",onClick:e[2]||(e[2]=(...e)=>t.stop&&t.stop(...e))},"Stop")])]),(0,r.Wm)(z)]))}});const nt=et;var it=nt;window.globalApp=(0,i.ri)(it).mount("#app"),console.log(window.globalApp)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],o=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(e&&e(i);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunktimes_practice"]=self["webpackChunktimes_practice"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3697)}));i=n.O(i)})();
//# sourceMappingURL=app.5cf55b1c.js.map