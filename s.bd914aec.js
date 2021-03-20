var app=function(){"use strict";function t(){}function n(t,n){for(const a in n)t[a]=n[a];return t}function a(t){return t()}function e(){return Object.create(null)}function s(t){t.forEach(a)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n}function r(t,n){const a={};n=new Set(n);for(const e in t)n.has(e)||"$"===e[0]||(a[e]=t[e]);return a}function p(n){return n&&o(n.destroy)?n.destroy:t}function c(t,n){t.appendChild(n)}function l(t,n,a){t.insertBefore(n,a||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function f(){return m(" ")}function h(t,n,a){null==a?t.removeAttribute(n):t.getAttribute(n)!==a&&t.setAttribute(n,a)}function g(t,n){const a=Object.getOwnPropertyDescriptors(t.__proto__);for(const e in n)null==n[e]?t.removeAttribute(e):"style"===e?t.style.cssText=n[e]:"__value"===e?t.value=t[e]=n[e]:a[e]&&a[e].set?t[e]=n[e]:h(t,e,n[e])}let k;function $(t){k=t}function v(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}const y=[],M=[],T=[],b=[],w=Promise.resolve();let D=!1;function S(t){T.push(t)}let Y=!1;const x=new Set;function L(){if(!Y){Y=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];$(n),H(n.$$)}for($(null),y.length=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];x.has(n)||(x.add(n),n())}T.length=0}while(y.length);for(;b.length;)b.pop()();D=!1,Y=!1,x.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const _=new Set;function O(t,n){t&&t.i&&(_.delete(t),t.i(n))}function j(t,n,a,e){if(t&&t.o){if(_.has(t))return;_.add(t),undefined.c.push((()=>{_.delete(t),e&&(a&&t.d(1),e())})),t.o(n)}}function C(t){t&&t.c()}function A(t,n,e,i){const{fragment:r,on_mount:p,on_destroy:c,after_update:l}=t.$$;r&&r.m(n,e),i||S((()=>{const n=p.map(a).filter(o);c?c.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(S)}function I(t,n){const a=t.$$;null!==a.fragment&&(s(a.on_destroy),a.fragment&&a.fragment.d(n),a.on_destroy=a.fragment=null,a.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(y.push(t),D||(D=!0,w.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(n,a,o,i,r,p,c=[-1]){const l=k;$(n);const d=n.$$={fragment:null,ctx:null,props:p,update:t,not_equal:r,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=o?o(n,a.props||{},((t,a,...e)=>{const s=e.length?e[0]:a;return d.ctx&&r(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),m&&N(n,t)),a})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();a.intro&&O(n.$$.fragment),A(n,a.target,a.anchor,a.customElement),L()}$(l)}class U{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var q=1e3,P=6e4,W=36e5,z="millisecond",F="second",G="minute",R="hour",B="day",J="week",V="month",Z="quarter",Q="year",K="date",X="Invalid Date",tt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,nt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,at={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},et=function(t,n,a){var e=String(t);return!e||e.length>=n?t:""+Array(n+1-e.length).join(a)+t},st={s:et,z:function(t){var n=-t.utcOffset(),a=Math.abs(n),e=Math.floor(a/60),s=a%60;return(n<=0?"+":"-")+et(e,2,"0")+":"+et(s,2,"0")},m:function t(n,a){if(n.date()<a.date())return-t(a,n);var e=12*(a.year()-n.year())+(a.month()-n.month()),s=n.clone().add(e,V),o=a-s<0,i=n.clone().add(e+(o?-1:1),V);return+(-(e+(a-s)/(o?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:V,y:Q,w:J,d:B,D:K,h:R,m:G,s:F,ms:z,Q:Z}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},ot="en",it={};it[ot]=at;var rt=function(t){return t instanceof ut},pt=function(t,n,a){var e;if(!t)return ot;if("string"==typeof t)it[t]&&(e=t),n&&(it[t]=n,e=t);else{var s=t.name;it[s]=t,e=s}return!a&&e&&(ot=e),e||!a&&ot},ct=function(t,n){if(rt(t))return t.clone();var a="object"==typeof n?n:{};return a.date=t,a.args=arguments,new ut(a)},lt=st;lt.l=pt,lt.i=rt,lt.w=function(t,n){return ct(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var ut=function(){function t(t){this.$L=pt(t.locale,null,!0),this.parse(t)}var n=t.prototype;return n.parse=function(t){this.$d=function(t){var n=t.date,a=t.utc;if(null===n)return new Date(NaN);if(lt.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var e=n.match(tt);if(e){var s=e[2]-1||0,o=(e[7]||"0").substring(0,3);return a?new Date(Date.UTC(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)):new Date(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return lt},n.isValid=function(){return!(this.$d.toString()===X)},n.isSame=function(t,n){var a=ct(t);return this.startOf(n)<=a&&a<=this.endOf(n)},n.isAfter=function(t,n){return ct(t)<this.startOf(n)},n.isBefore=function(t,n){return this.endOf(n)<ct(t)},n.$g=function(t,n,a){return lt.u(t)?this[n]:this.set(a,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,n){var a=this,e=!!lt.u(n)||n,s=lt.p(t),o=function(t,n){var s=lt.w(a.$u?Date.UTC(a.$y,n,t):new Date(a.$y,n,t),a);return e?s:s.endOf(B)},i=function(t,n){return lt.w(a.toDate()[t].apply(a.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(n)),a)},r=this.$W,p=this.$M,c=this.$D,l="set"+(this.$u?"UTC":"");switch(s){case Q:return e?o(1,0):o(31,11);case V:return e?o(1,p):o(0,p+1);case J:var u=this.$locale().weekStart||0,d=(r<u?r+7:r)-u;return o(e?c-d:c+(6-d),p);case B:case K:return i(l+"Hours",0);case R:return i(l+"Minutes",1);case G:return i(l+"Seconds",2);case F:return i(l+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,n){var a,e=lt.p(t),s="set"+(this.$u?"UTC":""),o=(a={},a[B]=s+"Date",a[K]=s+"Date",a[V]=s+"Month",a[Q]=s+"FullYear",a[R]=s+"Hours",a[G]=s+"Minutes",a[F]=s+"Seconds",a[z]=s+"Milliseconds",a)[e],i=e===B?this.$D+(n-this.$W):n;if(e===V||e===Q){var r=this.clone().set(K,1);r.$d[o](i),r.init(),this.$d=r.set(K,Math.min(this.$D,r.daysInMonth())).$d}else o&&this.$d[o](i);return this.init(),this},n.set=function(t,n){return this.clone().$set(t,n)},n.get=function(t){return this[lt.p(t)]()},n.add=function(t,n){var a,e=this;t=Number(t);var s=lt.p(n),o=function(n){var a=ct(e);return lt.w(a.date(a.date()+Math.round(n*t)),e)};if(s===V)return this.set(V,this.$M+t);if(s===Q)return this.set(Q,this.$y+t);if(s===B)return o(1);if(s===J)return o(7);var i=(a={},a[G]=P,a[R]=W,a[F]=q,a)[s]||1,r=this.$d.getTime()+t*i;return lt.w(r,this)},n.subtract=function(t,n){return this.add(-1*t,n)},n.format=function(t){var n=this;if(!this.isValid())return X;var a=t||"YYYY-MM-DDTHH:mm:ssZ",e=lt.z(this),s=this.$locale(),o=this.$H,i=this.$m,r=this.$M,p=s.weekdays,c=s.months,l=function(t,e,s,o){return t&&(t[e]||t(n,a))||s[e].substr(0,o)},u=function(t){return lt.s(o%12||12,t,"0")},d=s.meridiem||function(t,n,a){var e=t<12?"AM":"PM";return a?e.toLowerCase():e},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:lt.s(r+1,2,"0"),MMM:l(s.monthsShort,r,c,3),MMMM:l(c,r),D:this.$D,DD:lt.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,p,2),ddd:l(s.weekdaysShort,this.$W,p,3),dddd:p[this.$W],H:String(o),HH:lt.s(o,2,"0"),h:u(1),hh:u(2),a:d(o,i,!0),A:d(o,i,!1),m:String(i),mm:lt.s(i,2,"0"),s:String(this.$s),ss:lt.s(this.$s,2,"0"),SSS:lt.s(this.$ms,3,"0"),Z:e};return a.replace(nt,(function(t,n){return n||m[t]||e.replace(":","")}))},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,n,a){var e,s=lt.p(n),o=ct(t),i=(o.utcOffset()-this.utcOffset())*P,r=this-o,p=lt.m(this,o);return p=(e={},e[Q]=p/12,e[V]=p,e[Z]=p/3,e[J]=(r-i)/6048e5,e[B]=(r-i)/864e5,e[R]=r/W,e[G]=r/P,e[F]=r/q,e)[s]||r,a?p:lt.a(p)},n.daysInMonth=function(){return this.endOf(V).$D},n.$locale=function(){return it[this.$L]},n.locale=function(t,n){if(!t)return this.$L;var a=this.clone(),e=pt(t,n,!0);return e&&(a.$L=e),a},n.clone=function(){return lt.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},t}(),dt=ut.prototype;ct.prototype=dt,[["$ms",z],["$s",F],["$m",G],["$H",R],["$W",B],["$M",V],["$y",Q],["$D",K]].forEach((function(t){dt[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),ct.extend=function(t,n){return t.$i||(t(n,ut,ct),t.$i=!0),ct},ct.locale=pt,ct.isDayjs=rt,ct.unix=function(t){return ct(1e3*t)},ct.en=it[ot],ct.Ls=it,ct.p={};function mt(a){let e,s,o=[a[3],{title:a[2]},{datetime:a[1]}],i={};for(let t=0;t<o.length;t+=1)i=n(i,o[t]);return{c(){e=d("time"),s=m(a[0]),g(e,i)},m(t,n){l(t,e,n),c(e,s)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(s,t[0]),g(e,i=function(t,n){const a={},e={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],r=n[o];if(r){for(const t in i)t in r||(e[t]=1);for(const t in r)s[t]||(a[t]=r[t],s[t]=1);t[o]=r}else for(const t in i)s[t]=1}for(const t in e)t in a||(a[t]=void 0);return a}(o,[8&n&&t[3],4&n&&{title:t[2]},2&n&&{datetime:t[1]}]))},i:t,o:t,d(t){t&&u(e)}}}function ft(t,a,e){let s;const o=["timestamp","format","relative","live","formatted"];let i,p=r(a,o),{timestamp:c=(new Date).toISOString()}=a,{format:l="MMM DD, YYYY"}=a,{relative:u=!1}=a,{live:d=!1}=a,{formatted:m=""}=a;return v((()=>(u&&!1!==d&&(i=setInterval((()=>{e(0,m=ct(c).from())}),Math.abs("number"==typeof d?d:6e4))),()=>{"number"==typeof i&&clearInterval(i)}))),t.$$set=t=>{a=n(n({},a),function(t){const n={};for(const a in t)"$"!==a[0]&&(n[a]=t[a]);return n}(t)),e(3,p=r(a,o)),"timestamp"in t&&e(1,c=t.timestamp),"format"in t&&e(4,l=t.format),"relative"in t&&e(5,u=t.relative),"live"in t&&e(6,d=t.live),"formatted"in t&&e(0,m=t.formatted)},t.$$.update=()=>{50&t.$$.dirty&&e(0,m=u?ct(c).from():ct(c).format(l)),34&t.$$.dirty&&e(2,s=u?c:void 0)},[m,c,s,p,l,u,d]}ct.extend((function(t,n,a){t=t||{};var e=n.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,n,a,s){return e.fromToBase(t,n,a,s)}a.en.relativeTime=s,e.fromToBase=function(n,e,o,i,r){for(var p,c,l,u=o.$locale().relativeTime||s,d=t.thresholds||[{l:"s",r:44,d:F},{l:"m",r:89},{l:"mm",r:44,d:G},{l:"h",r:89},{l:"hh",r:21,d:R},{l:"d",r:35},{l:"dd",r:25,d:B},{l:"M",r:45},{l:"MM",r:10,d:V},{l:"y",r:17},{l:"yy",d:Q}],m=d.length,f=0;f<m;f+=1){var h=d[f];h.d&&(p=i?a(n).diff(o,h.d,!0):o.diff(n,h.d,!0));var g=(t.rounding||Math.round)(Math.abs(p));if(l=p>0,g<=h.r||!h.r){g<=1&&f>0&&(h=d[f-1]);var k=u[h.l];r&&(g=r(""+g)),c="string"==typeof k?k.replace("%d",g):k(g,e,h.l,l);break}}if(e)return c;var $=l?u.future:u.past;return"function"==typeof $?$(c):$.replace("%s",c)},e.to=function(t,n){return o(t,n,this,!0)},e.from=function(t,n){return o(t,n,this)};var i=function(t){return t.$u?a.utc():a()};e.toNow=function(t){return this.to(i(this),t)},e.fromNow=function(t){return this.from(i(this),t)}}));class ht extends U{constructor(t){super(),E(this,t,ft,mt,i,{timestamp:1,format:4,relative:5,live:6,formatted:0})}}function gt(t,n={}){let a;function e(t,n={}){const e=n.timestamp||(new Date).toISOString(),s=n.format||"MMM DD, YYYY",o=!0===n.relative,i=!0===n.live,r=o?ct(e).from():ct(e).format(s);o&&(t.setAttribute("title",e),!1!==i&&(a=setInterval((()=>{t.innerText=ct(e).from()}),Math.abs("number"==typeof i?i:6e4)))),t.innerText=r}return e(t,n),{update(n={}){e(t,n)},destroy(){"number"==typeof a&&clearInterval(a)}}}function kt(n){let a,e,o,i,r,m,g,k,$,v,y,M,T,b,w,D,S,Y,x,L,H,_,N,E,U,q,P,W,z,F,G,R,B,J,V,Z,Q,K,X,tt,nt,at,et,st,ot,it,rt,pt,ct,lt,ut,dt,mt,ft,kt,$t,vt,yt,Mt,Tt,bt,wt,Dt,St,Yt,xt,Lt,Ht,_t,Ot,jt,Ct,At,It,Nt,Et,Ut,qt,Pt,Wt,zt,Ft,Gt,Rt,Bt,Jt,Vt,Zt,Qt,Kt,Xt,tn,nn,an,en,sn,on,rn,pn,cn,ln,un,dn,mn,fn,hn,gn,kn,$n,vn,yn,Mn,Tn,bn,wn,Dn,Sn,Yn,xn,Ln;return J=new ht({}),tt=new ht({props:{timestamp:"2020-02-01"}}),at=new ht({props:{timestamp:new Date}}),st=new ht({props:{timestamp:1e10}}),lt=new ht({props:{timestamp:"2020-02-01",format:"dddd @ h:mm A · MMMM D, YYYY"}}),dt=new ht({props:{timestamp:new Date,format:"YYYY/MM/DD"}}),ft=new ht({props:{timestamp:1e10,format:"ddd"}}),wt=new ht({props:{relative:!0}}),St=new ht({props:{relative:!0,timestamp:"2021-02-02"}}),xt=new ht({props:{relative:!0,timestamp:1e10}}),It=new ht({props:{live:!0,relative:!0}}),Wt=new ht({props:{live:6e5,relative:!0}}),{c(){a=d("main"),e=d("h1"),e.textContent="svelte-time",o=f(),i=d("p"),i.innerHTML='<a href="https://npmjs.com/package/svelte-time"><img src="https://img.shields.io/npm/v/svelte-time.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',r=f(),m=d("p"),m.innerHTML='<a href="https://github.com/metonym/svelte-time">GitHub repo</a>',g=f(),k=d("blockquote"),k.innerHTML='<p>Svelte component and action to format a timestamp using <a href="https://github.com/iamkun/dayjs">day.js</a></p>',$=f(),v=d("p"),v.innerHTML='This utility wraps the date-time library <a href="https://github.com/iamkun/dayjs">day.js</a> in a declarative Svelte component and action.',y=f(),M=d("p"),M.innerHTML="<strong>Use cases</strong>",T=f(),b=d("ul"),b.innerHTML="<li>display a formatted timestamp within the semantic <code>time</code> element</li> \n<li>display the relative time in a human-readable format (e.g., “4 days ago”)</li>",w=f(),D=d("p"),D.innerHTML='<strong>Try it in the <a href="https://svelte.dev/repl/00b3877edb80425b96bb41fb18059882?version=3.34.0">Svelte REPL</a></strong>',S=f(),Y=d("hr"),x=f(),L=d("p"),L.innerHTML="<strong>Table of Contents</strong>",H=d("ul"),H.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#time-component">Time component</a></li> \n<li><a href="#relative-time">Relative time</a></li> \n<li><a href="#live-updates">Live updates</a></li> \n<li><a href="#sveltetime-action">svelteTime action</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#props">Props</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',_=f(),N=d("h2"),N.textContent="Install",E=f(),U=d("pre"),q=f(),P=d("h2"),P.textContent="Usage",W=f(),z=d("h3"),z.textContent="Time component",F=f(),G=d("p"),G.innerHTML="The displayed time defaults to <code>new Date().toISOString()</code> and is formatted as <code>&quot;MMM DD, YYYY&quot;</code>.",R=f(),B=d("div"),C(J.$$.fragment),V=d("pre"),Z=f(),Q=d("p"),Q.innerHTML="The <code>timestamp</code> prop can be any of the following <code>dayjs</code> values: <code>string | number | Date | Dayjs</code>.",K=f(),X=d("div"),C(tt.$$.fragment),nt=f(),C(at.$$.fragment),et=f(),C(st.$$.fragment),ot=d("pre"),it=f(),rt=d("p"),rt.innerHTML='Use the <code>format</code> prop to format the timestamp. Refer to the <a href="https://day.js.org/docs/en/display/format">dayjs format documentation</a> for a list of available formats.',pt=f(),ct=d("div"),C(lt.$$.fragment),ut=f(),C(dt.$$.fragment),mt=f(),C(ft.$$.fragment),kt=d("pre"),$t=f(),vt=d("h3"),vt.textContent="Relative time",yt=f(),Mt=d("p"),Mt.innerHTML="Set the <code>relative</code> prop value to <code>true</code> for the relative time displayed in a human-readable format.",Tt=f(),bt=d("div"),C(wt.$$.fragment),Dt=f(),C(St.$$.fragment),Yt=f(),C(xt.$$.fragment),Lt=d("pre"),Ht=f(),_t=d("h3"),_t.textContent="Live updates",Ot=f(),jt=d("p"),jt.innerHTML="Set <code>live</code> to <code>true</code> for a live updating relative timestamp. The default refresh interval is 60 seconds.",Ct=f(),At=d("div"),C(It.$$.fragment),Nt=d("pre"),Et=f(),Ut=d("p"),Ut.innerHTML="To customize the interval, pass in a value (milliseconds) to <code>live</code>.",qt=f(),Pt=d("div"),C(Wt.$$.fragment),zt=d("pre"),Ft=f(),Gt=d("h3"),Gt.textContent="svelteTime action",Rt=f(),Bt=d("p"),Bt.innerHTML="Use the <code>svelteTime</code> action to format a timestamp in a raw HTML element.",Jt=f(),Vt=d("div"),Zt=d("time"),Qt=f(),Kt=d("time"),Xt=f(),tn=d("time"),nn=d("pre"),an=f(),en=d("p"),en.innerHTML="Similar to the <code>Time</code> component, the <code>live</code> prop only works with relative time.",sn=f(),on=d("div"),rn=d("time"),pn=d("pre"),cn=f(),ln=d("h2"),ln.textContent="API",un=f(),dn=d("h3"),dn.textContent="Props",mn=f(),fn=d("table"),fn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">timestamp</td> \n<td style="text-align:left"><code>string</code> | <code>number</code> | <code>Date</code> | <code>Dayjs</code> (default: <code>new Date().toISOString()</code>)</td></tr> \n<tr><td style="text-align:left">format</td> \n<td style="text-align:left"><code>string</code> (default <code>&quot;MMM DD, YYYY&quot;</code>) See <a href="https://day.js.org/docs/en/display/format">dayjs format documentation</a></td></tr> \n<tr><td style="text-align:left">relative</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">live</td> \n<td style="text-align:left"><code>boolean</code> | <code>number</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">formatted</td> \n<td style="text-align:left"><code>string</code> (default <code>&quot;&quot;</code>)</td></tr></tbody>',hn=f(),gn=d("h2"),gn.textContent="TypeScript",kn=f(),$n=d("p"),$n.textContent="Svelte version 3.31 or greater is required to use this component with TypeScript.",vn=f(),yn=d("h2"),yn.textContent="Changelog",Mn=f(),Tn=d("p"),Tn.innerHTML='<a href="https://github.com/metonym/svelte-time/tree/master/CHANGELOG.md">CHANGELOG.md</a>',bn=f(),wn=d("h2"),wn.textContent="License",Dn=f(),Sn=d("p"),Sn.innerHTML='<a href="https://github.com/metonym/svelte-time/tree/master/LICENSE">MIT</a>',h(e,"id","svelte-time"),h(N,"id","install"),h(U,"class","language-bash"),h(P,"id","usage"),h(z,"id","time-component"),h(B,"class","code-fence"),h(V,"class","language-svelte"),h(V,"data-svelte",""),h(X,"class","code-fence"),h(ot,"class","language-svelte"),h(ot,"data-svelte",""),h(ct,"class","code-fence"),h(kt,"class","language-svelte"),h(kt,"data-svelte",""),h(vt,"id","relative-time"),h(bt,"class","code-fence"),h(Lt,"class","language-svelte"),h(Lt,"data-svelte",""),h(_t,"id","live-updates"),h(At,"class","code-fence"),h(Nt,"class","language-svelte"),h(Nt,"data-svelte",""),h(Pt,"class","code-fence"),h(zt,"class","language-svelte"),h(zt,"data-svelte",""),h(Gt,"id","sveltetime-action"),h(Vt,"class","code-fence"),h(nn,"class","language-svelte"),h(nn,"data-svelte",""),h(on,"class","code-fence"),h(pn,"class","language-svelte"),h(pn,"data-svelte",""),h(ln,"id","api"),h(dn,"id","props"),h(gn,"id","typescript"),h(yn,"id","changelog"),h(wn,"id","license"),h(a,"class","markdown-body")},m(t,n){l(t,a,n),c(a,e),c(a,o),c(a,i),c(a,r),c(a,m),c(a,g),c(a,k),c(a,$),c(a,v),c(a,y),c(a,M),c(a,T),c(a,b),c(a,w),c(a,D),c(a,S),c(a,Y),c(a,x),c(a,L),c(a,H),c(a,_),c(a,N),c(a,E),c(a,U),U.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-time\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-time\n',c(a,q),c(a,P),c(a,W),c(a,z),c(a,F),c(a,G),c(a,R),c(a,B),A(J,B,null),c(a,V),V.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Time <span class="token keyword">from</span> <span class="token string">"svelte-time"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token punctuation">/></span></span>\n',c(a,Z),c(a,Q),c(a,K),c(a,X),A(tt,X,null),c(X,nt),A(at,X,null),c(X,et),A(st,X,null),c(a,ot),ot.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2020-02-01<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',c(a,it),c(a,rt),c(a,pt),c(a,ct),A(lt,ct,null),c(ct,ut),A(dt,ct,null),c(ct,mt),A(ft,ct,null),c(a,kt),kt.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2020-02-01<span class="token punctuation">"</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dddd @ h:mm A · MMMM D, YYYY<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>YYYY/MM/DD<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ddd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',c(a,$t),c(a,vt),c(a,yt),c(a,Mt),c(a,Tt),c(a,bt),A(wt,bt,null),c(bt,Dt),A(St,bt,null),c(bt,Yt),A(xt,bt,null),c(a,Lt),Lt.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token attr-name">timestamp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2021-02-02<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">relative</span> <span class="token attr-name">timestamp=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1e10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',c(a,Ht),c(a,_t),c(a,Ot),c(a,jt),c(a,Ct),c(a,At),A(It,At,null),c(a,Nt),Nt.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">live</span> <span class="token attr-name">relative</span> <span class="token punctuation">/></span></span>\n',c(a,Et),c(a,Ut),c(a,qt),c(a,Pt),A(Wt,Pt,null),c(a,zt),zt.innerHTML='<span class="token comment">&lt;!-- Update every 10 minutes --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">live=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">}</span></span> <span class="token attr-name">relative</span> <span class="token punctuation">/></span></span>\n',c(a,Ft),c(a,Gt),c(a,Rt),c(a,Bt),c(a,Jt),c(a,Vt),c(Vt,Zt),c(Vt,Qt),c(Vt,Kt),c(Vt,Xt),c(Vt,tn),c(a,nn),nn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> svelteTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-time"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name"><span class="token namespace">use:</span>svelteTime</span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span>\n  <span class="token attr-name"><span class="token namespace">use:</span>svelteTime=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    timestamp<span class="token operator">:</span> <span class="token string">"2021-02-02"</span><span class="token punctuation">,</span>\n    format<span class="token operator">:</span> <span class="token string">"dddd @ h:mm A · MMMM D, YYYY"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span>\n  <span class="token attr-name"><span class="token namespace">use:</span>svelteTime=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    relative<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    timestamp<span class="token operator">:</span> <span class="token string">"2021-02-02"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',c(a,an),c(a,en),c(a,sn),c(a,on),c(on,rn),c(a,pn),pn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span>\n  <span class="token attr-name"><span class="token namespace">use:</span>svelteTime=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    live<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    relative<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',c(a,cn),c(a,ln),c(a,un),c(a,dn),c(a,mn),c(a,fn),c(a,hn),c(a,gn),c(a,kn),c(a,$n),c(a,vn),c(a,yn),c(a,Mn),c(a,Tn),c(a,bn),c(a,wn),c(a,Dn),c(a,Sn),Yn=!0,xn||(Ln=[p(gt.call(null,Zt)),p(gt.call(null,Kt,{timestamp:"2021-02-02",format:"dddd @ h:mm A · MMMM D, YYYY"})),p(gt.call(null,tn,{relative:!0,timestamp:"2021-02-02"})),p(gt.call(null,rn,{live:!0,relative:!0}))],xn=!0)},p:t,i(t){Yn||(O(J.$$.fragment,t),O(tt.$$.fragment,t),O(at.$$.fragment,t),O(st.$$.fragment,t),O(lt.$$.fragment,t),O(dt.$$.fragment,t),O(ft.$$.fragment,t),O(wt.$$.fragment,t),O(St.$$.fragment,t),O(xt.$$.fragment,t),O(It.$$.fragment,t),O(Wt.$$.fragment,t),Yn=!0)},o(t){j(J.$$.fragment,t),j(tt.$$.fragment,t),j(at.$$.fragment,t),j(st.$$.fragment,t),j(lt.$$.fragment,t),j(dt.$$.fragment,t),j(ft.$$.fragment,t),j(wt.$$.fragment,t),j(St.$$.fragment,t),j(xt.$$.fragment,t),j(It.$$.fragment,t),j(Wt.$$.fragment,t),Yn=!1},d(t){t&&u(a),I(J),I(tt),I(at),I(st),I(lt),I(dt),I(ft),I(wt),I(St),I(xt),I(It),I(Wt),xn=!1,s(Ln)}}}return new class extends U{constructor(t){super(),E(this,t,null,kt,i,{})}}({target:document.body})}();
