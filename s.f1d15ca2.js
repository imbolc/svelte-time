var app=function(){"use strict";function t(){}function n(t){return t()}function a(){return Object.create(null)}function e(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n}function i(n){return n&&s(n.destroy)?n.destroy:t}function r(t,n){t.appendChild(n)}function p(t,n,a){t.insertBefore(n,a||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function m(){return u(" ")}function d(t,n,a){null==a?t.removeAttribute(n):t.getAttribute(n)!==a&&t.setAttribute(n,a)}let f;function h(t){f=t}const g=[],k=[],$=[],v=[],y=Promise.resolve();let M=!1;function T(t){$.push(t)}let D=!1;const w=new Set;function b(){if(!D){D=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];h(n),Y(n.$$)}for(h(null),g.length=0;k.length;)k.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];w.has(n)||(w.add(n),n())}$.length=0}while(g.length);for(;v.length;)v.pop()();M=!1,D=!1,w.clear()}}function Y(t){if(null!==t.fragment){t.update(),e(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const S=new Set;function x(t,n){t&&t.i&&(S.delete(t),t.i(n))}function H(t,n,a,e){if(t&&t.o){if(S.has(t))return;S.add(t),undefined.c.push((()=>{S.delete(t),e&&(a&&t.d(1),e())})),t.o(n)}}function _(t){t&&t.c()}function L(t,a,o,i){const{fragment:r,on_mount:p,on_destroy:c,after_update:l}=t.$$;r&&r.m(a,o),i||T((()=>{const a=p.map(n).filter(s);c?c.push(...a):e(a),t.$$.on_mount=[]})),l.forEach(T)}function O(t,n){const a=t.$$;null!==a.fragment&&(e(a.on_destroy),a.fragment&&a.fragment.d(n),a.on_destroy=a.fragment=null,a.ctx=[])}function C(t,n){-1===t.$$.dirty[0]&&(g.push(t),M||(M=!0,y.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(n,s,o,i,r,p,l=[-1]){const u=f;h(n);const m=n.$$={fragment:null,ctx:null,props:p,update:t,not_equal:r,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:l,skip_bound:!1};let d=!1;if(m.ctx=o?o(n,s.props||{},((t,a,...e)=>{const s=e.length?e[0]:a;return m.ctx&&r(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),d&&C(n,t)),a})):[],m.update(),d=!0,e(m.before_update),m.fragment=!!i&&i(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();s.intro&&x(n.$$.fragment),L(n,s.target,s.anchor,s.customElement),b()}h(u)}class A{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var I=1e3,N=6e4,E=36e5,q="millisecond",U="second",W="minute",P="hour",G="day",B="week",F="month",J="quarter",R="year",V="date",Z="Invalid Date",z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},X=function(t,n,a){var e=String(t);return!e||e.length>=n?t:""+Array(n+1-e.length).join(a)+t},tt={s:X,z:function(t){var n=-t.utcOffset(),a=Math.abs(n),e=Math.floor(a/60),s=a%60;return(n<=0?"+":"-")+X(e,2,"0")+":"+X(s,2,"0")},m:function t(n,a){if(n.date()<a.date())return-t(a,n);var e=12*(a.year()-n.year())+(a.month()-n.month()),s=n.clone().add(e,F),o=a-s<0,i=n.clone().add(e+(o?-1:1),F);return+(-(e+(a-s)/(o?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:F,y:R,w:B,d:G,D:V,h:P,m:W,s:U,ms:q,Q:J}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},nt="en",at={};at[nt]=K;var et=function(t){return t instanceof rt},st=function(t,n,a){var e;if(!t)return nt;if("string"==typeof t)at[t]&&(e=t),n&&(at[t]=n,e=t);else{var s=t.name;at[s]=t,e=s}return!a&&e&&(nt=e),e||!a&&nt},ot=function(t,n){if(et(t))return t.clone();var a="object"==typeof n?n:{};return a.date=t,a.args=arguments,new rt(a)},it=tt;it.l=st,it.i=et,it.w=function(t,n){return ot(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var rt=function(){function t(t){this.$L=st(t.locale,null,!0),this.parse(t)}var n=t.prototype;return n.parse=function(t){this.$d=function(t){var n=t.date,a=t.utc;if(null===n)return new Date(NaN);if(it.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var e=n.match(z);if(e){var s=e[2]-1||0,o=(e[7]||"0").substring(0,3);return a?new Date(Date.UTC(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)):new Date(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return it},n.isValid=function(){return!(this.$d.toString()===Z)},n.isSame=function(t,n){var a=ot(t);return this.startOf(n)<=a&&a<=this.endOf(n)},n.isAfter=function(t,n){return ot(t)<this.startOf(n)},n.isBefore=function(t,n){return this.endOf(n)<ot(t)},n.$g=function(t,n,a){return it.u(t)?this[n]:this.set(a,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,n){var a=this,e=!!it.u(n)||n,s=it.p(t),o=function(t,n){var s=it.w(a.$u?Date.UTC(a.$y,n,t):new Date(a.$y,n,t),a);return e?s:s.endOf(G)},i=function(t,n){return it.w(a.toDate()[t].apply(a.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(n)),a)},r=this.$W,p=this.$M,c=this.$D,l="set"+(this.$u?"UTC":"");switch(s){case R:return e?o(1,0):o(31,11);case F:return e?o(1,p):o(0,p+1);case B:var u=this.$locale().weekStart||0,m=(r<u?r+7:r)-u;return o(e?c-m:c+(6-m),p);case G:case V:return i(l+"Hours",0);case P:return i(l+"Minutes",1);case W:return i(l+"Seconds",2);case U:return i(l+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,n){var a,e=it.p(t),s="set"+(this.$u?"UTC":""),o=(a={},a[G]=s+"Date",a[V]=s+"Date",a[F]=s+"Month",a[R]=s+"FullYear",a[P]=s+"Hours",a[W]=s+"Minutes",a[U]=s+"Seconds",a[q]=s+"Milliseconds",a)[e],i=e===G?this.$D+(n-this.$W):n;if(e===F||e===R){var r=this.clone().set(V,1);r.$d[o](i),r.init(),this.$d=r.set(V,Math.min(this.$D,r.daysInMonth())).$d}else o&&this.$d[o](i);return this.init(),this},n.set=function(t,n){return this.clone().$set(t,n)},n.get=function(t){return this[it.p(t)]()},n.add=function(t,n){var a,e=this;t=Number(t);var s=it.p(n),o=function(n){var a=ot(e);return it.w(a.date(a.date()+Math.round(n*t)),e)};if(s===F)return this.set(F,this.$M+t);if(s===R)return this.set(R,this.$y+t);if(s===G)return o(1);if(s===B)return o(7);var i=(a={},a[W]=N,a[P]=E,a[U]=I,a)[s]||1,r=this.$d.getTime()+t*i;return it.w(r,this)},n.subtract=function(t,n){return this.add(-1*t,n)},n.format=function(t){var n=this;if(!this.isValid())return Z;var a=t||"YYYY-MM-DDTHH:mm:ssZ",e=it.z(this),s=this.$locale(),o=this.$H,i=this.$m,r=this.$M,p=s.weekdays,c=s.months,l=function(t,e,s,o){return t&&(t[e]||t(n,a))||s[e].substr(0,o)},u=function(t){return it.s(o%12||12,t,"0")},m=s.meridiem||function(t,n,a){var e=t<12?"AM":"PM";return a?e.toLowerCase():e},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:it.s(r+1,2,"0"),MMM:l(s.monthsShort,r,c,3),MMMM:l(c,r),D:this.$D,DD:it.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,p,2),ddd:l(s.weekdaysShort,this.$W,p,3),dddd:p[this.$W],H:String(o),HH:it.s(o,2,"0"),h:u(1),hh:u(2),a:m(o,i,!0),A:m(o,i,!1),m:String(i),mm:it.s(i,2,"0"),s:String(this.$s),ss:it.s(this.$s,2,"0"),SSS:it.s(this.$ms,3,"0"),Z:e};return a.replace(Q,(function(t,n){return n||d[t]||e.replace(":","")}))},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,n,a){var e,s=it.p(n),o=ot(t),i=(o.utcOffset()-this.utcOffset())*N,r=this-o,p=it.m(this,o);return p=(e={},e[R]=p/12,e[F]=p,e[J]=p/3,e[B]=(r-i)/6048e5,e[G]=(r-i)/864e5,e[P]=r/E,e[W]=r/N,e[U]=r/I,e)[s]||r,a?p:it.a(p)},n.daysInMonth=function(){return this.endOf(F).$D},n.$locale=function(){return at[this.$L]},n.locale=function(t,n){if(!t)return this.$L;var a=this.clone(),e=st(t,n,!0);return e&&(a.$L=e),a},n.clone=function(){return it.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},t}(),pt=rt.prototype;ot.prototype=pt,[["$ms",q],["$s",U],["$m",W],["$H",P],["$W",G],["$M",F],["$y",R],["$D",V]].forEach((function(t){pt[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),ot.extend=function(t,n){return t.$i||(t(n,rt,ot),t.$i=!0),ot},ot.locale=st,ot.isDayjs=et,ot.unix=function(t){return ot(1e3*t)},ot.en=at[nt],ot.Ls=at,ot.p={};function ct(n){let a,e;return{c(){a=l("time"),e=u(n[0]),d(a,"title",n[2]),d(a,"datetime",n[1])},m(t,n){p(t,a,n),r(a,e)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0]),4&n&&d(a,"title",t[2]),2&n&&d(a,"datetime",t[1])},i:t,o:t,d(t){t&&c(a)}}}function lt(t,n,a){let e,{timestamp:s=(new Date).toISOString()}=n,{format:o="MMM DD, YYYY"}=n,{relative:i=!1}=n,{formatted:r=""}=n;return t.$$set=t=>{"timestamp"in t&&a(1,s=t.timestamp),"format"in t&&a(3,o=t.format),"relative"in t&&a(4,i=t.relative),"formatted"in t&&a(0,r=t.formatted)},t.$$.update=()=>{26&t.$$.dirty&&a(0,r=i?ot(s).from():ot(s).format(o)),18&t.$$.dirty&&a(2,e=i?s:void 0)},[r,s,e,o,i]}ot.extend((function(t,n,a){t=t||{};var e=n.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,n,a,s){return e.fromToBase(t,n,a,s)}a.en.relativeTime=s,e.fromToBase=function(n,e,o,i,r){for(var p,c,l,u=o.$locale().relativeTime||s,m=t.thresholds||[{l:"s",r:44,d:U},{l:"m",r:89},{l:"mm",r:44,d:W},{l:"h",r:89},{l:"hh",r:21,d:P},{l:"d",r:35},{l:"dd",r:25,d:G},{l:"M",r:45},{l:"MM",r:10,d:F},{l:"y",r:17},{l:"yy",d:R}],d=m.length,f=0;f<d;f+=1){var h=m[f];h.d&&(p=i?a(n).diff(o,h.d,!0):o.diff(n,h.d,!0));var g=(t.rounding||Math.round)(Math.abs(p));if(l=p>0,g<=h.r||!h.r){g<=1&&f>0&&(h=m[f-1]);var k=u[h.l];r&&(g=r(""+g)),c="string"==typeof k?k.replace("%d",g):k(g,e,h.l,l);break}}if(e)return c;var $=l?u.future:u.past;return"function"==typeof $?$(c):$.replace("%s",c)},e.to=function(t,n){return o(t,n,this,!0)},e.from=function(t,n){return o(t,n,this)};var i=function(t){return t.$u?a.utc():a()};e.toNow=function(t){return this.to(i(this),t)},e.fromNow=function(t){return this.from(i(this),t)}}));class ut extends A{constructor(t){super(),j(this,t,lt,ct,o,{timestamp:1,format:3,relative:4,formatted:0})}}function mt(t,n={}){function a(t,n={}){const a=n.timestamp||(new Date).toISOString(),e=n.format||"MMM DD, YYYY",s=!0===n.relative,o=s?ot(a).from():ot(a).format(e);s&&t.setAttribute("title",a),t.innerText=o}return a(t,n),{update(n={}){a(t,n)}}}function dt(n){let a,s,o,u,f,h,g,k,$,v,y,M,T,D,w,b,Y,S,C,j,A,I,N,E,q,U,W,P,G,B,F,J,R,V,Z,z,Q,K,X,tt,nt,at,et,st,ot,it,rt,pt,ct,lt,dt,ft,ht,gt,kt,$t,vt,yt,Mt,Tt,Dt,wt,bt,Yt,St,xt,Ht,_t,Lt,Ot,Ct,jt,At,It,Nt,Et,qt,Ut,Wt,Pt,Gt,Bt,Ft,Jt,Rt,Vt,Zt,zt,Qt,Kt,Xt,tn,nn,an,en,sn,on,rn;return J=new ut({}),K=new ut({props:{timestamp:"2020-02-01"}}),tt=new ut({props:{timestamp:new Date}}),at=new ut({props:{timestamp:1e10}}),pt=new ut({props:{timestamp:"2020-02-01",format:"dddd @ h:mm A · MMMM D, YYYY"}}),lt=new ut({props:{timestamp:new Date,format:"YYYY/MM/DD"}}),ft=new ut({props:{timestamp:1e10,format:"ddd"}}),Tt=new ut({props:{relative:!0}}),wt=new ut({props:{relative:!0,timestamp:"2021-02-02"}}),Yt=new ut({props:{relative:!0,timestamp:1e10}}),{c(){a=l("main"),s=l("h1"),s.textContent="svelte-time",o=m(),u=l("p"),u.innerHTML='<a href="https://npmjs.com/package/svelte-time"><img src="https://img.shields.io/npm/v/svelte-time.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',f=m(),h=l("p"),h.innerHTML='<a href="https://github.com/metonym/svelte-time">GitHub repo</a>',g=m(),k=l("blockquote"),k.innerHTML='<p>Svelte component and action to format a timestamp using <a href="https://github.com/iamkun/dayjs">day.js</a></p>',$=m(),v=l("p"),v.innerHTML='This utility wraps the date-time library <a href="https://github.com/iamkun/dayjs">day.js</a> in a declarative Svelte component and action.',y=m(),M=l("p"),M.innerHTML="<strong>Use cases</strong>",T=m(),D=l("ul"),D.innerHTML="<li>display a formatted timestamp within the semantic <code>time</code> element</li> \n<li>display the relative time in a human-readable format (e.g., “4 days ago”)</li>",w=m(),b=l("hr"),Y=m(),S=l("p"),S.innerHTML="<strong>Table of Contents</strong>",C=l("ul"),C.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#time-component">Time component</a></li> \n<li><a href="#relative-time">Relative time</a></li> \n<li><a href="#sveltetime-action">svelteTime action</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#props">Props</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',j=m(),A=l("h2"),A.textContent="Install",I=m(),N=l("pre"),E=m(),q=l("h2"),q.textContent="Usage",U=m(),W=l("h3"),W.textContent="Time component",P=m(),G=l("p"),G.innerHTML="The displayed time defaults to <code>new Date().toISOString()</code> and is formatted as <code>&quot;MMM DD, YYYY&quot;</code>.",B=m(),F=l("div"),_(J.$$.fragment),R=l("pre"),V=m(),Z=l("p"),Z.innerHTML="The <code>timestamp</code> prop can be any of the following <code>dayjs</code> values: <code>string | number | Date | Dayjs</code>.",z=m(),Q=l("div"),_(K.$$.fragment),X=m(),_(tt.$$.fragment),nt=m(),_(at.$$.fragment),et=l("pre"),st=m(),ot=l("p"),ot.innerHTML='Use the <code>format</code> prop to format the timestamp. Refer to the <a href="https://day.js.org/docs/en/display/format">dayjs format documentation</a> for a list of available formats.',it=m(),rt=l("div"),_(pt.$$.fragment),ct=m(),_(lt.$$.fragment),dt=m(),_(ft.$$.fragment),ht=l("pre"),gt=m(),kt=l("h3"),kt.textContent="Relative time",$t=m(),vt=l("p"),vt.innerHTML="Set the <code>relative</code> prop value to <code>true</code> for the relative time displayed in a human-readable format.",yt=m(),Mt=l("div"),_(Tt.$$.fragment),Dt=m(),_(wt.$$.fragment),bt=m(),_(Yt.$$.fragment),St=l("pre"),xt=m(),Ht=l("h3"),Ht.textContent="svelteTime action",_t=m(),Lt=l("p"),Lt.innerHTML="Use the <code>svelteTime</code> action to format a timestamp in a raw HTML element.",Ot=m(),Ct=l("div"),jt=l("time"),At=m(),It=l("time"),Nt=m(),Et=l("time"),qt=l("pre"),Ut=m(),Wt=l("h2"),Wt.textContent="API",Pt=m(),Gt=l("h3"),Gt.textContent="Props",Bt=m(),Ft=l("table"),Ft.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">timestamp</td> \n<td style="text-align:left"><code>string</code> | <code>number</code> | <code>Date</code> | <code>Dayjs</code> (default: <code>new Date().toISOString()</code>)</td></tr> \n<tr><td style="text-align:left">format</td> \n<td style="text-align:left"><code>string</code> (default <code>&quot;MMM DD, YYYY&quot;</code>) See <a href="https://day.js.org/docs/en/display/format">dayjs format documentation</a></td></tr> \n<tr><td style="text-align:left">relative</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">formatted</td> \n<td style="text-align:left"><code>string</code> (default <code>&quot;&quot;</code>)</td></tr></tbody>',Jt=m(),Rt=l("h2"),Rt.textContent="TypeScript",Vt=m(),Zt=l("p"),Zt.textContent="Svelte version 3.31 or greater is required to use this component with TypeScript.",zt=m(),Qt=l("h2"),Qt.textContent="Changelog",Kt=m(),Xt=l("p"),Xt.innerHTML='<a href="https://github.com/metonym/svelte-time/tree/master/CHANGELOG.md">CHANGELOG.md</a>',tn=m(),nn=l("h2"),nn.textContent="License",an=m(),en=l("p"),en.innerHTML='<a href="https://github.com/metonym/svelte-time/tree/master/LICENSE">MIT</a>',d(s,"id","svelte-time"),d(A,"id","install"),d(N,"class","language-bash"),d(q,"id","usage"),d(W,"id","time-component"),d(F,"class","code-fence"),d(R,"class","language-svelte"),d(R,"data-svelte",""),d(Q,"class","code-fence"),d(et,"class","language-svelte"),d(et,"data-svelte",""),d(rt,"class","code-fence"),d(ht,"class","language-svelte"),d(ht,"data-svelte",""),d(kt,"id","relative-time"),d(Mt,"class","code-fence"),d(St,"class","language-svelte"),d(St,"data-svelte",""),d(Ht,"id","sveltetime-action"),d(Ct,"class","code-fence"),d(qt,"class","language-svelte"),d(qt,"data-svelte",""),d(Wt,"id","api"),d(Gt,"id","props"),d(Rt,"id","typescript"),d(Qt,"id","changelog"),d(nn,"id","license"),d(a,"class","markdown-body")},m(t,n){p(t,a,n),r(a,s),r(a,o),r(a,u),r(a,f),r(a,h),r(a,g),r(a,k),r(a,$),r(a,v),r(a,y),r(a,M),r(a,T),r(a,D),r(a,w),r(a,b),r(a,Y),r(a,S),r(a,C),r(a,j),r(a,A),r(a,I),r(a,N),N.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-time\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-time\n',r(a,E),r(a,q),r(a,U),r(a,W),r(a,P),r(a,G),r(a,B),r(a,F),L(J,F,null),r(a,R),R.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Time <span class="token keyword">from</span> <span class="token string">"svelte-time"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token punctuation">/></span></span>\n',r(a,V),r(a,Z),r(a,z),r(a,Q),L(K,Q,null),r(Q,X),L(tt,Q,null),r(Q,nt),L(at,Q,null),r(a,et),et.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2020-02-01<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',r(a,st),r(a,ot),r(a,it),r(a,rt),L(pt,rt,null),r(rt,ct),L(lt,rt,null),r(rt,dt),L(ft,rt,null),r(a,ht),ht.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2020-02-01<span class="token punctuation">"</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dddd @ h:mm A · MMMM D, YYYY<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>YYYY/MM/DD<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ddd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',r(a,gt),r(a,kt),r(a,$t),r(a,vt),r(a,yt),r(a,Mt),L(Tt,Mt,null),r(Mt,Dt),L(wt,Mt,null),r(Mt,bt),L(Yt,Mt,null),r(a,St),St.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2021-02-02<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',r(a,xt),r(a,Ht),r(a,_t),r(a,Lt),r(a,Ot),r(a,Ct),r(Ct,jt),r(Ct,At),r(Ct,It),r(Ct,Nt),r(Ct,Et),r(a,qt),qt.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> svelteTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-time"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name"><span class="token namespace">use:</span>svelteTime</span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span>\n  <span class="token attr-name"><span class="token namespace">use:</span>svelteTime=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    timestamp<span class="token operator">:</span> <span class="token string">"2021-02-02"</span><span class="token punctuation">,</span>\n    format<span class="token operator">:</span> <span class="token string">"dddd @ h:mm A · MMMM D, YYYY"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span>\n  <span class="token attr-name"><span class="token namespace">use:</span>svelteTime=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    relative<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    timestamp<span class="token operator">:</span> <span class="token string">"2021-02-02"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',r(a,Ut),r(a,Wt),r(a,Pt),r(a,Gt),r(a,Bt),r(a,Ft),r(a,Jt),r(a,Rt),r(a,Vt),r(a,Zt),r(a,zt),r(a,Qt),r(a,Kt),r(a,Xt),r(a,tn),r(a,nn),r(a,an),r(a,en),sn=!0,on||(rn=[i(mt.call(null,jt)),i(mt.call(null,It,{timestamp:"2021-02-02",format:"dddd @ h:mm A · MMMM D, YYYY"})),i(mt.call(null,Et,{relative:!0,timestamp:"2021-02-02"}))],on=!0)},p:t,i(t){sn||(x(J.$$.fragment,t),x(K.$$.fragment,t),x(tt.$$.fragment,t),x(at.$$.fragment,t),x(pt.$$.fragment,t),x(lt.$$.fragment,t),x(ft.$$.fragment,t),x(Tt.$$.fragment,t),x(wt.$$.fragment,t),x(Yt.$$.fragment,t),sn=!0)},o(t){H(J.$$.fragment,t),H(K.$$.fragment,t),H(tt.$$.fragment,t),H(at.$$.fragment,t),H(pt.$$.fragment,t),H(lt.$$.fragment,t),H(ft.$$.fragment,t),H(Tt.$$.fragment,t),H(wt.$$.fragment,t),H(Yt.$$.fragment,t),sn=!1},d(t){t&&c(a),O(J),O(K),O(tt),O(at),O(pt),O(lt),O(ft),O(Tt),O(wt),O(Yt),on=!1,e(rn)}}}return new class extends A{constructor(t){super(),j(this,t,null,dt,o,{})}}({target:document.body})}();
