import{a as F,a9 as L,H as ae,T as ie,B as oe,u as D,ax as ce,X as le,o as z,f as he,c as ue,bf as de,r as fe,ag as ge,cv as me,h as pe,b as Y,ad as R,w as be,ay as ye,aI as Me,aJ as ke,N as ve,bA as Ee}from"./index-4a8cc517.js";const Se=a=>Object.keys(a).length===0,P=(a,e)=>a.push.apply(a,e),xe=(a,e)=>a.split("").map(s=>e[s]||s).join(""),A=a=>a.sort((e,t)=>e.i-t.i||e.j-t.j),G=a=>{const e={};let t=1;return a.forEach(s=>{e[s]=t,t+=1}),e};var De={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const U=2050,$=1e3,Te=De,Ae=10,we=1e4,V=10,H=50,Z=20,K=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ie=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Le=/^[A-Z\xbf-\xdf]+$/,X=/^[^a-z\xdf-\xff]+$/,Re=/^[a-z\xdf-\xff]+$/,_e=/^[^A-Z\xbf-\xdf]+$/,Ce=/[a-z\xdf-\xff]/,Pe=/[A-Z\xbf-\xdf]/,je=/[^A-Za-z\xbf-\xdf]/gi,Oe=/^\d+$/,O=new Date().getFullYear(),Ne={recentYear:/19\d\d|200\d|201\d|202\d/g};class We{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return A(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let r=n+5;r<=n+9&&!(r>=e.length);r+=1){const i=e.slice(n,+r+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:r,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=r=>Math.abs(r.year-O);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let i=r+3;i<=r+7&&!(i>=e.length);i+=1){const o=e.slice(r,+i+1||9e9);if(s.exec(o)){const c=[],l=o.length;if(Te[l].forEach(([d,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,d),10),parseInt(o.slice(d,p),10),parseInt(o.slice(p),10)]);m!=null&&c.push(m)}),c.length>0){let d=c[0],p=n(c[0]);c.slice(1).forEach(m=>{const u=n(m);u<p&&(d=m,p=u)}),t.push({pattern:"date",token:o,i:r,j:i,separator:"",year:d.year,month:d.month,day:d.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let r=0;r<n;r+=1){const i=e[r];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let r=0,i=e.length;r<i;r+=1){const o=e[r];if(o>99&&o<$||o>U)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[r,i]=t[n];if($<=r&&r<=U){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:r,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[r,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(r),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],r=n[0],i=n[1];if(r>=1&&r<=31&&i>=1&&i<=12)return{day:r,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const x=new Uint32Array(65536),ze=(a,e)=>{const t=a.length,s=e.length,n=1<<t-1;let r=-1,i=0,o=t,c=t;for(;c--;)x[a.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=x[e.charCodeAt(c)];const f=l|i;l|=(l&r)+r^r,i|=~(l|r),r&=l,i&n&&o++,r&n&&o--,i=i<<1|1,r=r<<1|~(f|i),i&=f}for(c=t;c--;)x[a.charCodeAt(c)]=0;return o},Ye=(a,e)=>{const t=e.length,s=a.length,n=[],r=[],i=Math.ceil(t/32),o=Math.ceil(s/32);for(let u=0;u<i;u++)r[u]=-1,n[u]=0;let c=0;for(;c<o-1;c++){let u=0,b=-1;const k=c*32,v=Math.min(32,s)+k;for(let g=k;g<v;g++)x[a.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const S=x[e.charCodeAt(g)],M=r[g/32|0]>>>g&1,E=n[g/32|0]>>>g&1,N=S|u,W=((S|E)&b)+b^b|S|E;let w=u|~(W|b),I=b&W;w>>>31^M&&(r[g/32|0]^=1<<g),I>>>31^E&&(n[g/32|0]^=1<<g),w=w<<1|M,I=I<<1|E,b=I|~(N|w),u=w&N}for(let g=k;g<v;g++)x[a.charCodeAt(g)]=0}let l=0,f=-1;const d=c*32,p=Math.min(32,s-d)+d;for(let u=d;u<p;u++)x[a.charCodeAt(u)]|=1<<u;let m=s;for(let u=0;u<t;u++){const b=x[e.charCodeAt(u)],k=r[u/32|0]>>>u&1,v=n[u/32|0]>>>u&1,g=b|l,S=((b|v)&f)+f^f|b|v;let M=l|~(S|f),E=f&S;m+=M>>>s-1&1,m-=E>>>s-1&1,M>>>31^k&&(r[u/32|0]^=1<<u),E>>>31^v&&(n[u/32|0]^=1<<u),M=M<<1|k,E=E<<1|v,f=E|~(g|M),l=M&g}for(let u=d;u<p;u++)x[a.charCodeAt(u)]=0;return m},Ge=(a,e)=>{if(a.length<e.length){const t=e;e=a,a=t}return e.length===0?a.length:a.length<=32?ze(a,e):Ye(a,e)},Ue=(a,e,t)=>{const s=a.length<=e.length,n=a.length<=t;return s||n?Math.ceil(a.length/4):t},$e=(a,e,t)=>{let s=0;const n=Object.keys(e).find(r=>{const i=Ue(a,r,t),o=Ge(a,r),c=o<=i;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var qe={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},_={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class Be{constructor(){this.matchers={},this.l33tTable=qe,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=_,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(_).forEach(s=>{if(s in e){const n=s;Object.keys(_[n]).forEach(r=>{r in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=this.getRankedDictionary(s),t[s]=this.getRankedDictionariesMaxWordSize(s)}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=this.dictionary[e].map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}getRankedDictionary(e){const t=this.dictionary[e];if(e==="userInputs"){const s=[];return t.forEach(n=>{const r=typeof n;(r==="string"||r==="number"||r==="boolean")&&s.push(n.toString().toLowerCase())}),G(s)}return G(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs"),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize("userInputs")}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}}const h=new Be;class Fe{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>({...s,token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class Ve{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,h.l33tTable)),n=Math.min(s.length,h.l33tMaxSubstitutions);for(let r=0;r<n;r+=1){const i=s[r];if(Se(i))break;const o=xe(e,i);this.defaultMatch({password:o}).forEach(l=>{const f=e.slice(l.i,+l.j+1||9e9);if(f.toLowerCase()!==l.matchedWord){const d={};Object.keys(i).forEach(m=>{const u=i[m];f.indexOf(m)!==-1&&(d[m]=u)});const p=Object.keys(d).map(m=>`${m} -> ${d[m]}`).join(", ");t.push({...l,l33t:!0,token:f,sub:d,subDisplay:p})}})}return t.filter(r=>r.token.length>1)}relevantL33tSubtable(e,t){const s={},n={};return e.split("").forEach(r=>{s[r]=!0}),Object.keys(t).forEach(r=>{const o=t[r].filter(c=>c in s);o.length>0&&(n[r]=o)}),n}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map(n=>{const r={};return n.forEach(([i,o])=>{r[i]=o}),r})}getSubs(e,t,s){if(!e.length)return t;const n=e[0],r=e.slice(1),i=[];s[n].forEach(c=>{t.forEach(l=>{let f=-1;for(let d=0;d<l.length;d+=1)if(l[d][0]===c){f=d;break}if(f===-1){const d=l.concat([[c,n]]);i.push(d)}else{const d=l.slice(0);d.splice(f,1),d.push([c,n]),i.push(l),i.push(d)}})});const o=this.dedup(i);return r.length?this.getSubs(r,o,s):o}dedup(e){const t=[],s={};return e.forEach(n=>{const r=n.map((o,c)=>[o,c]);r.sort();const i=r.map(([o,c])=>`${o},${c}`).join("-");i in s||(s[i]=!0,t.push(n))}),t}}class He{constructor(){this.l33t=new Ve(this.defaultMatch),this.reverse=new Fe(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return A(t)}defaultMatch({password:e}){const t=[],s=e.length,n=e.toLowerCase();return Object.keys(h.rankedDictionaries).forEach(r=>{const i=h.rankedDictionaries[r],o=h.rankedDictionariesMaxWordSize[r],c=Math.min(o,s);for(let l=0;l<s;l+=1){const f=Math.min(l+c,s);for(let d=l;d<f;d+=1){const p=n.slice(l,+d+1||9e9),m=p in i;let u={};const b=l===0&&d===s-1;h.useLevenshteinDistance&&b&&!m&&(u=$e(p,i,h.levenshteinThreshold));const k=Object.keys(u).length!==0;if(m||k){const v=k?u.levenshteinDistanceEntry:p,g=i[v];t.push({pattern:"dictionary",i:l,j:d,token:e.slice(l,+d+1||9e9),matchedWord:p,rank:g,dictionaryName:r,reversed:!1,l33t:!1,...u})}}}}),t}}class Ze{match({password:e,regexes:t=Ne}){const s=[];return Object.keys(t).forEach(n=>{const r=t[n];r.lastIndex=0;const i=r.exec(e);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),A(s)}}var T={nCk(a,e){let t=a;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(a){return Math.log(a)/Math.log(10)},log2(a){return Math.log(a)/Math.log(2)},factorial(a){let e=1;for(let t=2;t<=a;t+=1)e*=t;return e}},Ke=({token:a})=>{let e=Ae**a.length;e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return a.length===1?t=V+1:t=H+1,Math.max(e,t)},Xe=({year:a,separator:e})=>{let s=Math.max(Math.abs(a-O),Z)*365;return e&&(s*=4),s};const Je=a=>{const e=a.split(""),t=e.filter(i=>i.match(Pe)).length,s=e.filter(i=>i.match(Ce)).length;let n=0;const r=Math.min(t,s);for(let i=1;i<=r;i+=1)n+=T.nCk(t+s,i);return n};var Qe=a=>{const e=a.replace(je,"");if(e.match(_e)||e.toLowerCase()===e)return 1;const t=[K,Ie,X],s=t.length;for(let n=0;n<s;n+=1){const r=t[n];if(e.match(r))return 2}return Je(e)};const et=({subs:a,subbed:e,token:t})=>{const s=a[e],n=t.toLowerCase().split(""),r=n.filter(o=>o===e).length,i=n.filter(o=>o===s).length;return{subbedCount:r,unsubbedCount:i}};var tt=({l33t:a,sub:e,token:t})=>{if(!a)return 1;let s=1;const n=e;return Object.keys(n).forEach(r=>{const{subbedCount:i,unsubbedCount:o}=et({subs:n,subbed:r,token:t});if(i===0||o===0)s*=2;else{const c=Math.min(o,i);let l=0;for(let f=1;f<=c;f+=1)l+=T.nCk(o+i,f);s*=l}}),s},st=({rank:a,reversed:e,l33t:t,sub:s,token:n})=>{const r=a,i=Qe(n),o=tt({l33t:t,sub:s,token:n}),c=e&&2||1,l=r*i*o*c;return{baseGuesses:r,uppercaseVariations:i,l33tVariations:o,calculation:l}},nt=({regexName:a,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(a in s)return s[a]**t.length;switch(a){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-O),Z)}return 0},rt=({baseGuesses:a,repeatCount:e})=>a*e,at=({token:a,ascending:e})=>{const t=a.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*a.length};const it=a=>{let e=0;return Object.keys(a).forEach(t=>{const s=a[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(a).length,e},ot=({token:a,graph:e,turns:t})=>{const s=Object.keys(h.graphs[e]).length,n=it(h.graphs[e]);let r=0;const i=a.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)r+=T.nCk(o-1,l-1)*s*n**l}return r};var ct=({graph:a,token:e,shiftedCount:t,turns:s})=>{let n=ot({token:e,graph:a,turns:s});if(t){const r=e.length-t;if(t===0||r===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,r);o+=1)i+=T.nCk(t+r,o);n*=i}}return Math.round(n)};const lt=(a,e)=>{let t=1;return a.token.length<e.length&&(a.token.length===1?t=V:t=H),t},q={bruteforce:Ke,date:Xe,dictionary:st,regex:nt,repeat:rt,sequence:at,spatial:ct},ht=(a,e)=>q[a]?q[a](e):h.matchers[a]&&"scoring"in h.matchers[a]?h.matchers[a].scoring(e):0;var ut=(a,e)=>{const t={};if("guesses"in a&&a.guesses!=null)return a;const s=lt(a,e),n=ht(a.pattern,a);let r=0;typeof n=="number"?r=n:a.pattern==="dictionary"&&(r=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(r,s);return{...a,...t,guesses:i,guessesLog10:T.log10(i)}};const y={password:"",optimal:{},excludeAdditive:!1,fillArray(a,e){const t=[];for(let s=0;s<a;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(a,e){return{pattern:"bruteforce",token:this.password.slice(a,+e+1||9e9),i:a,j:e}},update(a,e){const t=a.j,s=ut(a,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let r=T.factorial(e)*n;this.excludeAdditive||(r+=we**(e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=r&&(i=!0)}),i||(this.optimal.g[t][e]=r,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(a){let e=this.makeBruteforceMatch(0,a);this.update(e,1);for(let t=1;t<=a;t+=1){e=this.makeBruteforceMatch(t,a);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(a){const e=[];let t=a-1,s=0,n=1/0;const r=this.optimal.g[t];for(r&&Object.keys(r).forEach(i=>{const o=r[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var j={mostGuessableMatchSequence(a,e,t=!1){y.password=a,y.excludeAdditive=t;const s=a.length;let n=y.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((l,f)=>l.i-f.i)),y.optimal={m:y.fillArray(s,"object"),pi:y.fillArray(s,"object"),g:y.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(l=>{l.i>0?Object.keys(y.optimal.m[l.i-1]).forEach(f=>{y.update(l,parseInt(f,10)+1)}):y.update(l,1)}),y.bruteforceUpdate(c);const r=y.unwind(s),i=r.length,o=this.getGuesses(a,i);return{password:a,guesses:o,guessesLog10:T.log10(o),sequence:r}},getGuesses(a,e){const t=a.length;let s=0;return a.length===0?s=1:s=y.optimal.g[t-1][e],s}};class dt{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:l}=this.setMatchToken(i,o);if(c){const f=c.index+c[0].length-1,d=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,f,c,d)),n=f+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const r={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>({...r,baseGuesses:i})):{...r,baseGuesses:n}}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,r="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(r=i[1])}else n=t,n&&(r=n[1]);return{match:n,baseToken:r}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(r=>j.mostGuessableMatchSequence(e,r).guesses):j.mostGuessableMatchSequence(e,s).guesses}}class ft{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const r=e.length;for(let i=1;i<r;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:r-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:r}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return r.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Re.test(e)?(t="lower",s=26):Le.test(e)?(t="upper",s=26):Oe.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class gt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(h.graphs).forEach(s=>{const n=h.graphs[s];P(t,this.helper(e,n,s))}),A(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const r=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,l=0,f=0;for(n=this.checkIfShifted(s,e,i);;){const d=e.charAt(c-1),p=t[d]||[];let m=!1,u=-1,b=-1;if(c<o){const k=e.charAt(c),v=p.length;for(let g=0;g<v;g+=1){const S=p[g];if(b+=1,S){const M=S.indexOf(k);if(M!==-1){m=!0,u=b,M===1&&(n+=1),l!==u&&(f+=1,l=u);break}}}}if(m)c+=1;else{c-i>2&&r.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:f,shiftedCount:n}),i=c;break}}}return r}}class mt{constructor(){this.matchers={date:We,dictionary:He,regex:Ze,repeat:dt,sequence:ft,spatial:gt}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(h.matchers)].forEach(r=>{if(!this.matchers[r]&&!h.matchers[r])return;const i=this.matchers[r]?this.matchers[r]:h.matchers[r].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{P(t,l)}),s.push(c)):P(t,c)}),s.length>0?new Promise(r=>{Promise.all(s).then(()=>{r(A(t))})}):A(t)}}const J=1,Q=J*60,ee=Q*60,te=ee*24,se=te*31,ne=se*12,pt=ne*100,C={second:J,minute:Q,hour:ee,day:te,month:se,year:ne,century:pt};class bt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=h.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const r=t[n];s[n]=this.displayTime(r)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(C),r=n.findIndex(i=>e<C[i]);return r>-1&&(t=n[r-1],r!==0?s=Math.round(e/C[t]):t="ltSecond"),this.translate(t,s)}}var yt=()=>null,Mt=()=>({warning:h.translations.warnings.dates,suggestions:[h.translations.suggestions.dates]});const kt=(a,e)=>{let t="";return e&&!a.l33t&&!a.reversed?a.rank<=10?t=h.translations.warnings.topTen:a.rank<=100?t=h.translations.warnings.topHundred:t=h.translations.warnings.common:a.guessesLog10<=4&&(t=h.translations.warnings.similarToCommon),t},vt=(a,e)=>{let t="";return e&&(t=h.translations.warnings.wordByItself),t},Et=(a,e)=>e?h.translations.warnings.namesByThemselves:h.translations.warnings.commonNames,St=(a,e)=>{let t="";const s=a.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=kt(a,e):s.includes("wikipedia")?t=vt(a,e):n?t=Et(a,e):s==="userInputs"&&(t=h.translations.warnings.userInputs),t};var xt=(a,e)=>{const t=St(a,e),s=[],n=a.token;return n.match(K)?s.push(h.translations.suggestions.capitalization):n.match(X)&&n.toLowerCase()!==n&&s.push(h.translations.suggestions.allUppercase),a.reversed&&a.token.length>=4&&s.push(h.translations.suggestions.reverseWords),a.l33t&&s.push(h.translations.suggestions.l33t),{warning:t,suggestions:s}},Dt=a=>a.regexName==="recentYear"?{warning:h.translations.warnings.recentYears,suggestions:[h.translations.suggestions.recentYears,h.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Tt=a=>{let e=h.translations.warnings.extendedRepeat;return a.baseToken.length===1&&(e=h.translations.warnings.simpleRepeat),{warning:e,suggestions:[h.translations.suggestions.repeated]}},At=()=>({warning:h.translations.warnings.sequences,suggestions:[h.translations.suggestions.sequences]}),wt=a=>{let e=h.translations.warnings.keyPattern;return a.turns===1&&(e=h.translations.warnings.straightRow),{warning:e,suggestions:[h.translations.suggestions.longerKeyboardPattern]}};const B={warning:"",suggestions:[]};class It{constructor(){this.matchers={bruteforce:yt,date:Mt,dictionary:xt,regex:Dt,repeat:Tt,sequence:At,spatial:wt},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(h.translations.suggestions.useWords,h.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return B;const s=h.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let r=this.getMatchFeedback(n,t.length===1);return r!=null?(r.suggestions.unshift(s),r.warning==null&&(r.warning="")):r={warning:"",suggestions:[s]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):h.matchers[e.pattern]&&"feedback"in h.matchers[e.pattern]?h.matchers[e.pattern].feedback(e,t):B}}const re=()=>new Date().getTime(),Lt=(a,e,t)=>{const s=new It,n=new bt,r=j.mostGuessableMatchSequence(e,a),i=re()-t,o=n.estimateAttackTimes(r.guesses);return{calcTime:i,...r,...o,feedback:s.getFeedback(o.score,r.sequence)}},Rt=(a,e)=>(e&&h.extendUserInputsDictionary(e),new mt().match(a)),_t=(a,e)=>{const t=re(),s=Rt(a,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Lt(s,a,t)},Ct=["data-score"],Pt=F({name:"StrengthMeter"}),jt=F({...Pt,props:{value:L.string,showInput:L.bool.def(!0),disabled:L.bool},emits:["score-change","change"],setup(a,{emit:e}){const t=a,s=ae(""),{prefixCls:n}=ie("strength-meter"),r=oe(()=>{const{disabled:o}=t;if(o)return-1;const l=D(s)?_t(D(s)).score:-1;return e("score-change",l),l});function i(o){s.value=o.target.value}return ce(()=>{s.value=t.value||""}),le(()=>D(s),o=>{e("change",o)}),(o,c)=>(z(),he("div",{class:R([D(n),"relative"])},[a.showInput?(z(),ue(D(me),ge({key:0},o.$attrs,{allowClear:"",value:s.value,onChange:i,disabled:a.disabled}),de({_:2},[fe(Object.keys(o.$slots),l=>({name:l,fn:be(f=>[ye(o.$slots,l,Me(ke(f||{})),void 0,!0)])}))]),1040,["value","disabled"])):pe("",!0),Y("div",{class:R(`${D(n)}-bar`)},[Y("div",{class:R(`${D(n)}-bar--fill`),"data-score":D(r)},null,10,Ct)],2)],2))}});const Ot=ve(jt,[["__scopeId","data-v-5fd9ac16"]]),Wt=Ee(Ot);export{Wt as S};