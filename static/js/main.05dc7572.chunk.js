(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){t.exports=a(32)},21:function(t,e,a){},30:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),h=a(33),s=(a(21),a(23),a(8)),o=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),m=a(9),d=a(10),u=a(12),f=a(11),v=a(13),g=(a(30),function(t){function e(){return Object(m.a)(this,e),Object(u.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"name-particles"},i.a.createElement("canvas",{id:"scene"})),i.a.createElement("div",{className:"table"},i.a.createElement("nav",{id:"nav-bar",className:"cl-effect-9"},i.a.createElement("a",Object(l.a)({className:"link",href:"https://github.com/gkeglevich",target:"_blank"},"className","link"),i.a.createElement("span",null,"GITHUB"),i.a.createElement("span",null,"For some projects")),i.a.createElement("a",Object(l.a)({className:"link",href:"https://www.linkedin.com/in/griffinkeglevich/",target:"_blank"},"className","link"),i.a.createElement("span",null,"LINKEDIN"),i.a.createElement("span",null,"For some particulars")),i.a.createElement("a",{className:"link",href:"https://medium.com/@griffinkeglevich",target:"_blank"},i.a.createElement("span",null,"MEDIUM"),i.a.createElement("span",null,"For some thoughts")))))}},{key:"componentDidMount",value:function(){var t=document.querySelector("#scene"),e=t.getContext("2d"),a=[],n=0,i=0,r=0,c=["#F5F5F5"],h="Griffin Keglevich",s=t.width=window.innerWidth,o=t.height=window.innerHeight;function l(t,e){this.x=Math.random()*s,this.y=Math.random()*o,this.dest={x:t,y:e},this.r=1*Math.random()+2,this.vx=20*(Math.random()-.5),this.vy=20*(Math.random()-.5),this.accX=0,this.accY=0,this.friction=.025*Math.random()+.94,this.color=c[Math.floor(6*Math.random())]}l.prototype.render=function(){this.accX=(this.dest.x-this.x)/1e3,this.accY=(this.dest.y-this.y)/1e3,this.vx+=this.accX,this.vy+=this.accY,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.r,2*Math.PI,!1),e.fill();var t=this.x-i,a=this.y-r;Math.sqrt(t*t+a*a)<14&&(this.accX=(this.x-i)/100,this.accY=(this.y-r)/100,this.vx+=this.accX,this.vy+=this.accY)},function(){s=t.width=window.innerWidth,o=t.height=window.innerHeight,e.clearRect(0,0,t.width,t.height),e.font="bold "+s/10+"px Helvetica",e.textAlign="center",e.fillText(h,s/2,o/2);var i=e.getImageData(0,0,s,o).data;e.clearRect(0,0,t.width,t.height),e.globalCompositeOperation="screen",a=[];for(var r=0;r<s;r+=Math.round(s/200))for(var c=0;c<o;c+=Math.round(s/200))i[4*(r+c*s)+3]>50&&a.push(new l(r,c));n=a.length}(),requestAnimationFrame(function i(r){requestAnimationFrame(i),e.clearRect(0,0,t.width,t.height);for(var c=0;c<n;c++)a[c].render()})}}]),e}(n.Component));c.a.render(i.a.createElement(o.a,{title:"Griffin Keglevich"},i.a.createElement(h.a,null,i.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.05dc7572.chunk.js.map