(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),i=r(12),l=r.n(i),o=r(4),s=r(2),y=r(10),p=["bitcoin","ada","ether","bnb"],d=r(1),j=function(e){var t=e.stateDatas,r=e.setStateDatas,n=Object(s.f)();return Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("h1",{children:"CryptoGame"}),Object(d.jsxs)("div",{className:"main-section",children:[Object(d.jsx)("div",{className:"left-section",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Wallet :"}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[t.playerMonney,"$"]})})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"crypto",children:"Crypto :"}),Object(d.jsxs)("select",{id:"crypto",onChange:function(e){r({playerMonney:t.playerMonney,cryptoUnit:e.target.value})},children:["$",p.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(d.jsx)("div",{className:"play",onClick:function(){n("/playground")},children:Object(d.jsx)("p",{children:"Play"})})]})},u=r(5),h=r(14),b=function(e,t){for(var r=[],a=[],c=0;c<e.length;c++)r.push(c),a.push(t);var i=Math.min.apply(Math,Object(u.a)(e))-Math.max.apply(Math,Object(u.a)(e))/1e3;i<0&&(i=0);var l=Math.max.apply(Math,Object(u.a)(e))+Math.max.apply(Math,Object(u.a)(e))/1e3;n=new h.a(document.getElementById("line-chart"),{type:"line",options:{animation:!1,pointBorderWidth:0,pointRadius:0,hoverBorderWidth:0,hoverRadius:0,scales:{xAxis:{display:!1},yAxis:{min:i,max:l,grid:{drawBorder:!1},ticks:{beginAtZero:!1,fontSize:15,fontColor:"lightgrey",maxTicksLimit:5,padding:25}},yAxis1:{type:"linear",display:!1,position:"right",min:i,max:l,grid:{drawBorder:!1},ticks:{beginAtZero:!1,fontSize:15,fontColor:"red",maxTicksLimit:1,padding:25}}},plugins:{legend:{display:!1},tooltip:{display:!1,enabled:!1,mode:"single"}}},data:{labels:r,datasets:[{tooltip:!1,data:e,label:"crytpo",borderColor:"#3e95cd",fill:!1,yAxisID:"yAxis"},{tooltip:!1,data:a,label:"crytpo2",borderColor:"red",fill:!1,yAxisID:"yAxis1"}]}})},O=function(e,t,r,a){for(var c=r;c<500+r;c++)e.push(t[c]);e.slice(r,500+r),function(e,t){n.data&&(n.destroy(),b(e,t))}(e,a.tickPriceData)},x=function(e,t,r){var n=e[e.length-1];r[0]=n,t(n)},f=r(11),m=r.n(f),g=r(13),S=r.p+"static/media/BTC.82585eb7.txt",v=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(S).then((function(e){return e.text()})).then((function(e){var r=JSON.parse(e);t(r.array)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=0,M=[0],P=.004,B={sellShort:"Buy Short",longSell:"Buy Long",orderPrice:0,tickPriceData:0,playerCrypto:0,playerCurrentFee:0},D=function(e){var t=e.stateDatas,r=e.setStateDatas,n=Object(a.useState)(),c=Object(o.a)(n,2),i=c[0],l=c[1],s=Object(a.useState)(0),y=Object(o.a)(s,2),p=y[0],j=y[1],u=Object(a.useState)("Buy Short"),h=Object(o.a)(u,2),f=h[0],m=h[1],g=Object(a.useState)("Buy Long"),S=Object(o.a)(g,2),D=S[0],k=S[1],N=Object(a.useState)("transparent"),F=Object(o.a)(N,2),U=F[0],L=F[1],A=Object(a.useState)(0),w=Object(o.a)(A,2),I=w[0],T=w[1],$=Object(a.useState)(0),E=Object(o.a)($,2),J=E[0],W=E[1],z=Object(a.useState)(0),G=Object(o.a)(z,2),R=G[0],Z=G[1];Object(a.useEffect)((function(){v(l)}),[]),Object(a.useEffect)((function(){if(i){for(var e=[],t=0;t<500;t++)e.push(i[t]);x(e,j,M),b(e,M[0]),q()}}),[i]);var q=function(){var e=setInterval((function(){C++;var e=[];O(e,i,C,B),x(e,j,M),function(e,t){0===e.orderPrice?e.tickPriceData=t[0]:e.tickPriceData=e.orderPrice}(B,M),function(e,t,r){""===t.longSell?(e[0]>t.orderPrice&&r("green"),e[0]<=t.orderPrice&&r("red")):""===t.sellShort?(e[0]>t.orderPrice&&r("red"),e[0]<=t.orderPrice&&r("green")):r("transparent")}(M,B,L),function(e,t,r,n){r.orderPrice>0&&""===r.longSell?e((t[0]-r.orderPrice)*r.playerCrypto-r.playerCurrentFee-r.playerCrypto*t[0]*n):r.orderPrice>0&&""===r.sellShort?e((r.orderPrice-t[0])*-r.playerCrypto-r.playerCurrentFee- -r.playerCrypto*t[0]*n):e(0)}(Z,M,B,P)}),200);return function(){return clearInterval(e)}};return Object(d.jsxs)("main",{className:" playground-main",children:[Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"current-price",children:["current price :",p,"$"]}),Object(d.jsxs)("h2",{className:"order "+U,children:["Order at : ",J]}),Object(d.jsxs)("h2",{className:"gain",children:["Gain : ",R,"$"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"user-money",children:["monney : ",t.playerMonney," $ / ",I," ",t.cryptoUnit]}),Object(d.jsx)("h2",{children:" fee : 0.004% "})]})]}),Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)("canvas",{id:"line-chart",width:"800",height:"450"})}),Object(d.jsxs)("section",{className:"buy-sell",children:[Object(d.jsx)("div",{className:"sell-btn btn",onClick:function(){if(t.playerMonney>0){B.playerCurrentFee=t.playerMonney*P;var e=(t.playerMonney-t.playerMonney*P)/p;T(e),B.playerCrypto=e,r({playerMonney:0,cryptoUnit:t.cryptoUnit}),m("Sell"),B.sellShort="Sell",k(""),B.longSell="",W(p),B.orderPrice=p}else 0===t.playerMonney&&I<0&&(r({playerMonney:-(I*p-I*p*P),cryptoUnit:t.cryptoUnit}),T(0),B.playerCrypto=0,m("Buy Short"),B.sellShort="Buy Short",k("Buy Long"),B.longSell="Buy Long",W(0),B.orderPrice=0)},children:D}),Object(d.jsx)("div",{className:"buy-btn btn",onClick:function(){if(0===t.playerMonney&&I>0)r({playerMonney:I*p-I*p*P,cryptoUnit:t.cryptoUnit}),T(0),B.playerCrypto=0,m("Buy Short"),B.sellShort="Buy Short",k("Buy Long"),B.longSell="Buy Long",W(0),B.orderPrice=0;else if(t.playerMonney>0&&0===I){B.playerCurrentFee=t.playerMonney*P;var e=-(t.playerMonney-t.playerMonney*P)/p;T(e),B.playerCrypto=e,r({playerMonney:0,cryptoUnit:t.cryptoUnit}),m(""),B.sellShort="",k("Sell"),B.longSell="Sell",W(p),B.orderPrice=p}},children:f})]})]})},k=(r(21),function(){var e=Object(a.useState)({playerMonney:1e3,cryptoUnit:"btc"}),t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",element:Object(d.jsx)(j,{stateDatas:r,setStateDatas:n})}),Object(d.jsx)(s.a,{path:"/playground",element:Object(d.jsx)(D,{stateDatas:r,setStateDatas:n})})]})})});var N=function(){return Object(d.jsx)(y.a,{children:Object(d.jsx)(k,{})})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,23)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.f6d50dca.chunk.js.map