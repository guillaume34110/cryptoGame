(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),l=r(13),o=r.n(l),i=r(4),s=r(2),y=r(10),p=["bitcoin","ada","ether","bnb"],d=r(1),u=function(e){var t=e.stateDatas,r=e.setStateDatas,n=Object(s.f)();return Object(a.useEffect)((function(){console.log("what"),clearInterval()}),[]),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("h1",{children:"CryptoGame"}),Object(d.jsxs)("div",{className:"main-section",children:[Object(d.jsx)("div",{className:"left-section",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Wallet :"}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[t.playerMonney,"$"]})})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"crypto",children:"Crypto :"}),Object(d.jsxs)("select",{id:"crypto",onChange:function(e){r({playerMonney:t.playerMonney,cryptoUnit:e.target.value})},children:["$",p.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(d.jsx)("div",{className:"play",onClick:function(){n("/playground")},children:Object(d.jsx)("p",{children:"Play"})})]})},j=r(5),h=r(14),b=function(e,t){n&&n.destroy();for(var r=[],a=[],c=0;c<e.length;c++)r.push(c),a.push(t);var l=Math.min.apply(Math,Object(j.a)(e))-Math.max.apply(Math,Object(j.a)(e))/1e3;l<0&&(l=0);var o=Math.max.apply(Math,Object(j.a)(e))+Math.max.apply(Math,Object(j.a)(e))/1e3;n=new h.a(document.getElementById("line-chart"),{type:"line",options:{animation:!1,pointBorderWidth:0,pointRadius:0,hoverBorderWidth:0,hoverRadius:0,scales:{xAxis:{display:!1},yAxis:{min:l,max:o,grid:{drawBorder:!1},ticks:{beginAtZero:!1,fontSize:15,fontColor:"lightgrey",maxTicksLimit:5,padding:25}},yAxis1:{type:"linear",display:!1,position:"right",min:l,max:o,grid:{drawBorder:!1},ticks:{beginAtZero:!1,fontSize:15,fontColor:"red",maxTicksLimit:1,padding:25}}},plugins:{legend:{display:!1},tooltip:{display:!1,enabled:!1,mode:"single"}}},data:{labels:r,datasets:[{tooltip:!1,data:e,label:"crytpo",borderColor:"#3e95cd",fill:!1,yAxisID:"yAxis"},{tooltip:!1,data:a,label:"crytpo2",borderColor:"red",fill:!1,yAxisID:"yAxis1"}]}})},O=r(8),f=r.n(O),x=r(11),m=function(e,t,r,a){if(document.querySelector(".playground-main")){for(var c=r;c<500+r;c++)e.push(t[c]);e.slice(r,500+r),l=e,o=a.tickPriceData,n.data&&(n.destroy(),b(l,o))}var l,o},g=function(e,t,r){var n=e[e.length-1];r[0]=n,t(n)},v=function(){var e=Object(x.a)(f.a.mark((function e(t,r,n,a,c,l){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===r.playerMonney&&(o=r.playerCrypto*c[0]*l,r.playerMonney=r.playerCrypto*c[0],r.playerMonney<0&&(r.playerMonney=-1*r.playerMonney),r.playerMonney=r.playerMonney-o),t({playerMonney:r.playerMonney,cryptoUnit:r.cryptoUnit}),clearInterval(a),n("/");case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,a,c,l){return e.apply(this,arguments)}}(),S=r.p+"static/media/BTC.82585eb7.txt",M=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(S).then((function(e){return e.text()})).then((function(e){var r=JSON.parse(e);C(t,r)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e,t){var r=t.array,n=Math.random()*(r.length-1e4);e(r=r.slice(n,n+1e4))},P=0,B=[0],k=.004,D={sellShort:"Buy Short",longSell:"Buy Long",orderPrice:0,tickPriceData:0,playerCrypto:0,playerCurrentFee:0,playerMonney:0,cryptoUnit:"btc"},N=function(e){var t=e.stateDatas,r=e.setStateDatas,c=Object(a.useState)(),l=Object(i.a)(c,2),o=l[0],y=l[1],p=Object(a.useState)(0),u=Object(i.a)(p,2),j=u[0],h=u[1],O=Object(a.useState)(0),f=Object(i.a)(O,2),x=f[0],S=f[1],C=Object(a.useState)("Buy Short"),N=Object(i.a)(C,2),w=N[0],F=N[1],I=Object(a.useState)("Buy Long"),L=Object(i.a)(I,2),A=L[0],U=L[1],E=Object(a.useState)("transparent"),T=Object(i.a)(E,2),$=T[0],J=T[1],W=Object(a.useState)(0),q=Object(i.a)(W,2),z=q[0],G=q[1],R=Object(a.useState)(0),Z=Object(i.a)(R,2),H=Z[0],K=Z[1],Q=Object(a.useState)(0),V=Object(i.a)(Q,2),X=V[0],Y=V[1],_=Object(a.useState)(0),ee=Object(i.a)(_,2),te=ee[0],re=ee[1],ne=Object(s.f)();Object(a.useEffect)((function(){M(y)}),[]),Object(a.useEffect)((function(){if(o){for(var e=[],r=0;r<500;r++)e.push(o[r]);P=0,re(0),g(e,S,B),b(e,B[0]),D.playerMonney=t.playerMonney,D.cryptoUnit=t.cryptoUnit,h(t.playerMonney),ae()}}),[o]);var ae=function(){var e=setInterval((function(){document.querySelector(".playground-main")||(n.destroy(),clearInterval(e)),P++,re(P);var t,a,c=[];m(c,o,P,D),g(c,S,B),a=B,0===(t=D).orderPrice?t.tickPriceData=a[0]:t.tickPriceData=t.orderPrice,function(e,t,r){""===t.longSell?(e[0]>t.orderPrice&&r("green"),e[0]<=t.orderPrice&&r("red")):""===t.sellShort?(e[0]>t.orderPrice&&r("red"),e[0]<=t.orderPrice&&r("green")):r("transparent")}(B,D,J),function(e,t,r,n){r.orderPrice>0&&""===r.longSell?e((t[0]-r.orderPrice)*r.playerCrypto-r.playerCurrentFee-r.playerCrypto*t[0]*n):r.orderPrice>0&&""===r.sellShort?e((r.orderPrice-t[0])*-r.playerCrypto-r.playerCurrentFee- -r.playerCrypto*t[0]*n):e(0)}(Y,B,D,k),P>=1e4&&v(r,D,ne,e,B,k)}),200);return function(){return clearInterval(e)}};return Object(d.jsxs)("main",{className:" playground-main",children:[Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"current-price",children:["current price :",x,"$"]}),Object(d.jsxs)("h2",{className:"order "+$,children:["Order at : ",H]}),Object(d.jsxs)("h2",{className:"gain",children:["Gain : ",X,"$"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"user-money",children:["monney : ",j," $ / ",z," ",t.cryptoUnit]}),Object(d.jsx)("h2",{children:" fee : 0.004% "}),Object(d.jsxs)("h2",{className:"index",children:[te,"/10000"]})]})]}),Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)("canvas",{id:"line-chart",width:"800",height:"450"})}),Object(d.jsxs)("section",{className:"buy-sell",children:[Object(d.jsx)("div",{className:"sell-btn btn",onClick:function(){if(D.playerMonney>0){D.playerCurrentFee=t.playerMonney*k;var e=(t.playerMonney-t.playerMonney*k)/x;G(e),D.playerCrypto=e,D.playerMonney=0,h(0),F("Sell"),D.sellShort="Sell",U(""),D.longSell="",K(x),D.orderPrice=x}else 0===D.playerMonney&&z<0&&(D.playerMonney=-(z*x-z*x*k),h(D.playerMonney),G(0),D.playerCrypto=0,F("Buy Short"),D.sellShort="Buy Short",U("Buy Long"),D.longSell="Buy Long",K(0),D.orderPrice=0)},children:A}),Object(d.jsx)("div",{className:"buy-btn btn",onClick:function(){if(0===D.playerMonney&&z>0)D.playerMonney=z*x-z*x*k,h(D.playerMonney),G(0),D.playerCrypto=0,F("Buy Short"),D.sellShort="Buy Short",U("Buy Long"),D.longSell="Buy Long",K(0),D.orderPrice=0;else if(D.playerMonney>0&&0===z){D.playerCurrentFee=t.playerMonney*k;var e=-(t.playerMonney-t.playerMonney*k)/x;G(e),D.playerCrypto=e,D.playerMonney=0,h(0),F(""),D.sellShort="",U("Sell"),D.longSell="Sell",K(x),D.orderPrice=x}},children:w})]})]})},w=(r(21),function(){var e=Object(a.useState)({playerMonney:1e3,cryptoUnit:"btc"}),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",element:Object(d.jsx)(u,{stateDatas:r,setStateDatas:n})}),Object(d.jsx)(s.a,{path:"/playground",element:Object(d.jsx)(N,{stateDatas:r,setStateDatas:n})})]})})});var F=function(){return Object(d.jsx)(y.a,{children:Object(d.jsx)(w,{})})},I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,23)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;r(e),n(e),a(e),c(e),l(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.2988df8e.chunk.js.map