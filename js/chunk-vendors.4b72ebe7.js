(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("1c0b");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"04d1":function(e,t,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(r(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=s(e),t=a(t),u)try{return l(e,t)}catch(n){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ia})),n.d(t,"b",(function(){return Jo})),n.d(t,"c",(function(){return ra})),n.d(t,"d",(function(){return Xo})),n.d(t,"e",(function(){return Ys})),n.d(t,"f",(function(){return ea})),n.d(t,"g",(function(){return Zo})),n.d(t,"h",(function(){return $s})),n.d(t,"i",(function(){return Bs})),n.d(t,"j",(function(){return Ms})),n.d(t,"k",(function(){return ta})),n.d(t,"l",(function(){return Hs})),n.d(t,"m",(function(){return na})),n.d(t,"n",(function(){return Us}));var r=n("5606"),i=n("ffa6"),o=n("abfd"),s=n("a8e9"),a=n("c7b2");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.0.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o["b"]("@firebase/firestore");function h(){return l.logLevel}function d(e,...t){if(l.logLevel<=o["a"].DEBUG){const n=t.map(m);l.debug(`Firestore (${u}): ${e}`,...n)}}function f(e,...t){if(l.logLevel<=o["a"].ERROR){const n=t.map(m);l.error(`Firestore (${u}): ${e}`,...n)}}function p(e,...t){if(l.logLevel<=o["a"].WARN){const n=t.map(m);l.warn(`Firestore (${u}): ${e}`,...n)}}function m(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw f(t),new Error(t)}function v(e,t){e||g()}function y(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class E{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new w;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new w,e.enqueueRetryable(()=>r(this.currentUser))};const o=t=>{e.enqueueRetryable(async()=>{d("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)})};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(d("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new w)}},0),e.enqueueRetryable(async()=>{0===this.i&&(await i.promise,await r(this.currentUser))})}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(d("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new O(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new c(e)}}class I{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */S.T=-1;class x{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=k(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function C(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new R(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new R(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function D(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,n){void 0===t?t=0:t>e.length&&g(),void 0===n?n=e.length-t:n>e.length-t&&g(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends M{construct(e,t,n){return new F(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends M{construct(e,t,n){return new V(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new _(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new _(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new V(t)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.fields=e,e.sort(V.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return C(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new q(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new q(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}q.EMPTY_BYTE_STRING=new q("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(e){if(v(!!e),"string"==typeof e){let t=0;const n=$.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function z(e){return"string"==typeof e?q.fromBase64String(e):q.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(e){const t=e.mapValue.fields.__previous_value__;return K(t)?W(t):t}function J(e){const t=G(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return null==e}function Q(e){return 0===e&&1/e==-1/0}function Y(e){return"number"==typeof e&&Number.isInteger(e)&&!Q(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(F.fromString(e))}static fromName(e){return new Z(F.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new F(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?K(e)?4:10:g()}function te(e,t){const n=ee(e);if(n!==ee(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return J(e).isEqual(J(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=G(e.timestampValue),r=G(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return z(e.bytesValue).isEqual(z(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return H(e.geoPointValue.latitude)===H(t.geoPointValue.latitude)&&H(e.geoPointValue.longitude)===H(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return H(e.integerValue)===H(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=H(e.doubleValue),r=H(t.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return C(e.arrayValue.values||[],t.arrayValue.values||[],te);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!te(n[i],r[i])))return!1;return!0}(e,t);default:return g()}}function ne(e,t){return void 0!==(e.values||[]).find(e=>te(e,t))}function re(e,t){const n=ee(e),r=ee(t);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=H(e.integerValue||e.doubleValue),r=H(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ie(e.timestampValue,t.timestampValue);case 4:return ie(J(e),J(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=z(e),r=z(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=j(n[i],r[i]);if(0!==e)return e}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(H(e.latitude),H(t.latitude));return 0!==n?n:j(H(e.longitude),H(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=re(n[i],r[i]);if(e)return e}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=j(r[s],o[s]);if(0!==e)return e;const t=re(n[r[s]],i[o[s]]);if(0!==t)return t}return j(r.length,o.length)}(e.mapValue,t.mapValue);default:throw g()}}function ie(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=G(e),r=G(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function oe(e){return se(e)}function se(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=G(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?z(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=se(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${se(e.fields[i])}`;return n+"}"}(e.mapValue):g();var t,n}function ae(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ce(e){return!!e&&"integerValue"in e}function ue(e){return!!e&&"arrayValue"in e}function le(e){return!!e&&"nullValue"in e}function he(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function de(e){return!!e&&"mapValue"in e}function fe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return D(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=fe(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fe(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.value=e}static empty(){return new pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!de(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fe(t)}setAll(e){let t=V.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=fe(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());de(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return te(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];de(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){D(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new pe(fe(this.value))}}function me(e){const t=[];return D(e.fields,(e,n)=>{const r=new V([e]);if(de(n)){const e=me(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new B(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ge{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ge(e,0,N.min(),pe.empty(),0)}static newFoundDocument(e,t,n){return new ge(e,1,t,n,0)}static newNoDocument(e,t){return new ge(e,2,t,pe.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,pe.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ge(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function ye(e,t=null,n=[],r=[],i=null,o=null,s=null){return new ve(e,t,n,r,i,o,s)}function be(e){const t=y(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Ee(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),X(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Pe(t.startAt)),t.endAt&&(e+="|ub:",e+=Pe(t.endAt)),t.A=e}return t.A}function _e(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${oe(t.value)}`;var t}).join(", ")}]`),X(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Pe(e.startAt)),e.endAt&&(t+=", endAt: "+Pe(e.endAt)),`Target(${t})`}function we(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Le(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!te(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fe(e.startAt,t.startAt)&&Fe(e.endAt,t.endAt)}function Oe(e){return Z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Te extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new Ie(e,t,n):"array-contains"===t?new xe(e,n):"in"===t?new je(e,n):"not-in"===t?new Ce(e,n):"array-contains-any"===t?new Re(e,n):new Te(e,t,n)}static R(e,t,n){return"in"===t?new Ae(e,n):new Se(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(re(t,this.value)):null!==t&&ee(this.value)===ee(t)&&this.P(re(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return g()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ee(e){return e.field.canonicalString()+e.op.toString()+oe(e.value)}class Ie extends Te{constructor(e,t,n){super(e,t,n),this.key=Z.fromName(n.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.P(t)}}class Ae extends Te{constructor(e,t){super(e,"in",t),this.keys=ke("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Se extends Te{constructor(e,t){super(e,"not-in",t),this.keys=ke("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ke(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Z.fromName(e.referenceValue))}class xe extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ue(t)&&ne(t.arrayValue,this.value)}}class je extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ne(this.value.arrayValue,t)}}class Ce extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ne(this.value.arrayValue,t)}}class Re extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ue(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ne(this.value.arrayValue,e))}}class Ne{constructor(e,t){this.position=e,this.before=t}}function Pe(e){return`${e.before?"b":"a"}:${e.position.map(e=>oe(e)).join(",")}`}class De{constructor(e,t="asc"){this.field=e,this.dir=t}}function Le(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Me(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?Z.comparator(Z.fromName(s.referenceValue),n.key):re(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Fe(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!te(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ve(e,t,n,r,i,o,s,a){return new Ue(e,t,n,r,i,o,s,a)}function Be(e){return new Ue(e)}function qe(e){return!X(e.limit)&&"F"===e.limitType}function $e(e){return!X(e.limit)&&"L"===e.limitType}function Ge(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function He(e){for(const t of e.filters)if(t.v())return t.field;return null}function ze(e){return null!==e.collectionGroup}function Ke(e){const t=y(e);if(null===t.V){t.V=[];const e=He(t),n=Ge(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new De(e)),t.V.push(new De(V.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new De(V.keyField(),e))}}}return t.V}function We(e){const t=y(e);if(!t.S)if("F"===t.limitType)t.S=ye(t.path,t.collectionGroup,Ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ke(t)){const t="desc"===i.dir?"asc":"desc";e.push(new De(i.field,t))}const n=t.endAt?new Ne(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Ne(t.startAt.position,!t.startAt.before):null;t.S=ye(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function Je(e,t,n){return new Ue(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xe(e,t){return we(We(e),We(t))&&e.limitType===t.limitType}function Qe(e){return`${be(We(e))}|lt:${e.limitType}`}function Ye(e){return`Query(target=${_e(We(e))}; limitType=${e.limitType})`}function Ze(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Me(e.startAt,Ke(e),t))&&(!e.endAt||!Me(e.endAt,Ke(e),t))}(e,t)}function et(e){return(t,n)=>{let r=!1;for(const i of Ke(e)){const e=tt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function tt(e,t,n){const r=e.field.isKeyField()?Z.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?re(r,i):g()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return g()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(t)?"-0":t}}function rt(e){return{integerValue:""+e}}function it(e,t){return Y(t)?rt(t):nt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this._=void 0}}function st(e,t,n){return e instanceof ut?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof lt?ht(e,t):e instanceof dt?ft(e,t):function(e,t){const n=ct(e,t),r=mt(n)+mt(e.C);return ce(n)&&ce(e.C)?rt(r):nt(e.N,r)}(e,t)}function at(e,t,n){return e instanceof lt?ht(e,t):e instanceof dt?ft(e,t):n}function ct(e,t){return e instanceof pt?ce(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ut extends ot{}class lt extends ot{constructor(e){super(),this.elements=e}}function ht(e,t){const n=gt(t);for(const r of e.elements)n.some(e=>te(e,r))||n.push(r);return{arrayValue:{values:n}}}class dt extends ot{constructor(e){super(),this.elements=e}}function ft(e,t){let n=gt(t);for(const r of e.elements)n=n.filter(e=>!te(e,r));return{arrayValue:{values:n}}}class pt extends ot{constructor(e,t){super(),this.N=e,this.C=t}}function mt(e){return H(e.integerValue||e.doubleValue)}function gt(e){return ue(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof lt&&t instanceof lt||e instanceof dt&&t instanceof dt?C(e.elements,t.elements,te):e instanceof pt&&t instanceof pt?te(e.C,t.C):e instanceof ut&&t instanceof ut}(e.transform,t.transform)}class yt{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _t(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class wt{}function Ot(e,t,n){e instanceof St?function(e,t,n){const r=e.value.clone(),i=jt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof kt?function(e,t,n){if(!_t(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=jt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(xt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Tt(e,t,n){e instanceof St?function(e,t,n){if(!_t(e.precondition,t))return;const r=e.value.clone(),i=Ct(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(At(t),r).setHasLocalMutations()}(e,t,n):e instanceof kt?function(e,t,n){if(!_t(e.precondition,t))return;const r=Ct(e.fieldTransforms,n,t),i=t.data;i.setAll(xt(e)),i.setAll(r),t.convertToFoundDocument(At(t),i).setHasLocalMutations()}(e,t,n):function(e,t){_t(e.precondition,t)&&t.convertToNoDocument(N.min())}(e,t)}function Et(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ct(r.transform,e||null);null!=i&&(null==n&&(n=pe.empty()),n.set(r.field,i))}return n||null}function It(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&C(e,t,(e,t)=>vt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function At(e){return e.isFoundDocument()?e.version:N.min()}class St extends wt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class kt extends wt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function xt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function jt(e,t,n){const r=new Map;v(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,at(s,a,n[i]))}return r}function Ct(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,st(e,o,t))}return r}class Rt extends wt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Nt extends wt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Lt;function Mt(e){switch(e){case b.OK:return g();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return g()}}function Ft(e){if(void 0===e)return f("GRPC error has no .code"),b.UNKNOWN;switch(e){case Dt.OK:return b.OK;case Dt.CANCELLED:return b.CANCELLED;case Dt.UNKNOWN:return b.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return b.INTERNAL;case Dt.UNAVAILABLE:return b.UNAVAILABLE;case Dt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Dt.NOT_FOUND:return b.NOT_FOUND;case Dt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Dt.ABORTED:return b.ABORTED;case Dt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Dt.DATA_LOSS:return b.DATA_LOSS;default:return g()}}(Lt=Dt||(Dt={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t){this.comparator=e,this.root=t||Bt.EMPTY}insert(e,t){return new Ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vt(this.root,e,this.comparator,!0)}}class Vt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:Bt.EMPTY,this.right=null!=i?i:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Bt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw g();if(this.right.isRed())throw g();const e=this.left.check();if(e!==this.right.check())throw g();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1,Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e){this.comparator=e,this.data=new Ut(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $t(this.data.getIterator())}getIteratorFrom(e){return new $t(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof qt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qt(this.comparator);return t.data=e,t}}class $t{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Ut(Z.comparator);function Ht(){return Gt}const zt=new Ut(Z.comparator);function Kt(){return zt}const Wt=new Ut(Z.comparator);function Jt(){return Wt}const Xt=new qt(Z.comparator);function Qt(...e){let t=Xt;for(const n of e)t=t.add(n);return t}const Yt=new qt(j);function Zt(){return Yt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,tn.createSynthesizedTargetChangeForCurrentChange(e,t)),new en(N.min(),n,Zt(),Ht(),Qt())}}class tn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new tn(q.EMPTY_BYTE_STRING,t,Qt(),Qt(),Qt())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class rn{constructor(e,t){this.targetId=e,this.O=t}}class on{constructor(e,t,n=q.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sn{constructor(){this.F=0,this.M=un(),this.L=q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Qt(),t=Qt(),n=Qt();return this.M.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:g()}}),new tn(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=un()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class an{constructor(e){this.tt=e,this.et=new Map,this.nt=Ht(),this.st=cn(),this.it=new qt(j)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:g()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,n)=>{this.ht(n)&&t(n)})}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(Oe(e))if(0===n){const n=new Z(e.path);this.at(t,n,ge.newNoDocument(n,N.min()))}else v(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Oe(i.target)){const t=new Z(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,ge.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}});let n=Qt();this.st.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new en(e,t,this.it,this.nt,n);return this.nt=Ht(),this.st=cn(),this.it=new qt(j),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new sn,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new qt(j),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||d("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new sn),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function cn(){return new Ut(Z.comparator)}function un(){return new Ut(Z.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),hn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class dn{constructor(e,t){this.databaseId=e,this.D=t}}function fn(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pn(e,t){return e.D?t.toBase64():t.toUint8Array()}function mn(e,t){return fn(e,t.toTimestamp())}function gn(e){return v(!!e),N.fromTimestamp(function(e){const t=G(e);return new R(t.seconds,t.nanos)}(e))}function vn(e,t){return function(e){return new F(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function yn(e){const t=F.fromString(e);return v($n(t)),t}function bn(e,t){return vn(e.databaseId,t.path)}function _n(e,t){const n=yn(t);if(n.get(1)!==e.databaseId.projectId)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Z(En(n))}function wn(e,t){return vn(e.databaseId,t)}function On(e){const t=yn(e);return 4===t.length?F.emptyPath():En(t)}function Tn(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function En(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function In(e,t,n){return{name:bn(e,t),fields:n.value.mapValue.fields}}function An(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:g()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.D?(v(void 0===t||"string"==typeof t),q.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),q.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?b.UNKNOWN:Ft(e.code);return new _(t,e.message||"")}(s);n=new on(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=_n(e,r.document.name),o=gn(r.document.updateTime),s=new pe({mapValue:{fields:r.document.fields}}),a=ge.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new nn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=_n(e,r.document),o=r.readTime?gn(r.readTime):N.min(),s=ge.newNoDocument(i,o),a=r.removedTargetIds||[];n=new nn([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=_n(e,r.document),o=r.removedTargetIds||[];n=new nn([],o,i,null)}else{if(!("filter"in t))return g();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Pt(r),o=e.targetId;n=new rn(o,i)}}return n}function Sn(e,t){let n;if(t instanceof St)n={update:In(e,t.key,t.value)};else if(t instanceof Rt)n={delete:bn(e,t.key)};else if(t instanceof kt)n={update:In(e,t.key,t.data),updateMask:qn(t.fieldMask)};else{if(!(t instanceof Nt))return g();n={verify:bn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ut)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof lt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof dt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pt)return{fieldPath:t.field.canonicalString(),increment:n.C};throw g()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:mn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:g()}(e,t.precondition)),n}function kn(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?gn(e.updateTime):gn(t);return n.isEqual(N.min())&&(n=gn(t)),new yt(n,e.transformResults||[])}(e,t))):[]}function xn(e,t){return{documents:[wn(e,t.path)]}}function jn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=wn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=wn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(he(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NAN"}};if(le(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(he(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NOT_NAN"}};if(le(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(e.field),op:Mn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Fn(e.field),direction:Ln(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.D||X(t)?t:{value:t}}(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=Pn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Pn(t.endAt)),n}function Cn(e){let t=On(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=Nn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>function(e){return new De(Un(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,X(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Dn(n.startAt));let u=null;return n.endAt&&(u=Dn(n.endAt)),Ve(t,i,s,o,a,"F",c,u)}function Rn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return g()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Nn(e){return e?void 0!==e.unaryFilter?[Bn(e)]:void 0!==e.fieldFilter?[Vn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Nn(e)).reduce((e,t)=>e.concat(t)):g():[]}function Pn(e){return{before:e.before,values:e.position}}function Dn(e){const t=!!e.before,n=e.values||[];return new Ne(n,t)}function Ln(e){return ln[e]}function Mn(e){return hn[e]}function Fn(e){return{fieldPath:e.canonicalString()}}function Un(e){return V.fromServerFormat(e.fieldPath)}function Vn(e){return Te.create(Un(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return g()}}(e.fieldFilter.op),e.fieldFilter.value)}function Bn(e){switch(e.unaryFilter.op){case"IS_NAN":Un(e.unaryFilter.field);return Te.create(r["e"],"==",{doubleValue:NaN});case"IS_NULL":Un(e.unaryFilter.field);return Te.create(r["d"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Un(e.unaryFilter.field);return Te.create(r["c"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Un(e.unaryFilter.field);return Te.create(r["g"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return g()}}function qn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $n(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=zn(t)),t=Hn(e.get(n),t);return zn(t)}function Hn(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function zn(e){return e+""}class Kn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Kn.store="owner",Kn.key="owner";class Wn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Wn.store="mutationQueues",Wn.keyPath="userId";class Jn{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Jn.store="mutations",Jn.keyPath="batchId",Jn.userMutationsIndex="userMutationsIndex",Jn.userMutationsKeyPath=["userId","batchId"];class Xn{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Gn(t)]}static key(e,t,n){return[e,Gn(t),n]}}Xn.store="documentMutations",Xn.PLACEHOLDER=new Xn;class Qn{constructor(e,t,n,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}Qn.store="remoteDocuments",Qn.readTimeIndex="readTimeIndex",Qn.readTimeIndexPath="readTime",Qn.collectionReadTimeIndex="collectionReadTimeIndex",Qn.collectionReadTimeIndexPath=["parentPath","readTime"];class Yn{constructor(e){this.byteSize=e}}Yn.store="remoteDocumentGlobal",Yn.key="remoteDocumentGlobalKey";class Zn{constructor(e,t,n,r,i,o,s){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}Zn.store="targets",Zn.keyPath="targetId",Zn.queryTargetsIndexName="queryTargetsIndex",Zn.queryTargetsKeyPath=["canonicalId","targetId"];class er{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}er.store="targetDocuments",er.keyPath=["targetId","path"],er.documentTargetsIndex="documentTargetsIndex",er.documentTargetsKeyPath=["path","targetId"];class tr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}tr.key="targetGlobalKey",tr.store="targetGlobal";class nr{constructor(e,t){this.collectionId=e,this.parent=t}}nr.store="collectionParents",nr.keyPath=["collectionId","parent"];class rr{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}rr.store="clientMetadata",rr.keyPath="clientId";class ir{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}ir.store="bundles",ir.keyPath="bundleId";class or{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}or.store="namedQueries",or.keyPath="name";Wn.store,Jn.store,Xn.store,Qn.store,Zn.store,Kn.store,tr.store,er.store,rr.store,Yn.store,nr.store,ir.store,or.store;const sr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ar{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&g(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new cr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof cr?t:cr.resolve(t)}catch(e){return cr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):cr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):cr.reject(t)}static resolve(e){return new cr((t,n)=>{t(e)})}static reject(e){return new cr((t,n)=>{n(e)})}static waitFor(e){return new cr((t,n)=>{let r=0,i=0,o=!1;e.forEach(e=>{++r,e.next(()=>{++i,o&&i===r&&t()},e=>n(e))}),o=!0,i===r&&t()})}static or(e){let t=cr.resolve(!1);for(const n of e)t=t.next(e=>e?cr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ot(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Tt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Tt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(N.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Qt())}isEqual(e){return this.batchId===e.batchId&&C(this.mutations,e.mutations,(e,t)=>It(e,t))&&C(this.baseMutations,e.baseMutations,(e,t)=>It(e,t))}}class hr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){v(e.mutations.length===n.length);let r=Jt();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new hr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n,r,i=N.min(),o=N.min(),s=q.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.Wt=e}}function pr(e){const t=Cn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Je(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.Gt=new gr}addToCollectionParentIndex(e,t){return this.Gt.add(t),cr.resolve()}getCollectionParents(e,t){return cr.resolve(this.Gt.getEntries(t))}}class gr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new qt(F.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new qt(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new vr(e,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr.DEFAULT_COLLECTION_PERCENTILE=10,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vr.DEFAULT=new vr(41943040,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vr.DISABLED=new vr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new yr(0)}static ie(){return new yr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function br(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==sr)throw e;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){D(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return L(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.changes=new _r(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:N.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ge.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?cr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Rn(e,t,n))}Rn(e,t,n){return this.He.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Pn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}bn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Pn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return Z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):ze(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new Z(t)).next(e=>{let t=Kt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,n){const r=t.collectionGroup;let i=Kt();return this.Ht.getCollectionParents(e,r).next(o=>cr.forEach(o,o=>{const s=function(e,t){return new Ue(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.Dn(e,s,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Cn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ge.newInvalidDocument(n),r=r.insert(n,i)),Tt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{Ze(t,n)||(r=r.remove(e))}),r))}Cn(e,t,n){let r=Qt();for(const o of t)for(const e of o.mutations)e instanceof kt&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=Qt(),r=Qt();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tr(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(N.min())?this.Fn(e,t):this.On.bn(e,r).next(i=>{const s=this.Mn(t,i);return(qe(t)||$e(t))&&this.Ln(t.limitType,s,r,n)?this.Fn(e,t):(h()<=o["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ye(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(s.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let n=new qt(et(e));return t.forEach((t,r)=>{Ze(e,r)&&(n=n.add(r))}),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return h()<=o["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",Ye(t)),this.On.getDocumentsMatchingQuery(e,t,N.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Ut(j),this.qn=new _r(e=>be(e),we),this.Kn=N.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Or(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function Ar(e,t,n,r){return new Ir(e,t,n,r)}async function Sr(e,t){const n=y(e);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",e=>{let o;return n.In.getAllMutationBatches(e).next(s=>(o=s,r=n.persistence.getMutationQueue(t),i=new Or(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let s=Qt();for(const e of o){n.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return i.bn(e,s).next(e=>({Wn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function kr(e,t){const n=y(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=cr.resolve();return o.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const o=n.docVersions.get(e);v(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),s.next(()=>e.In.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.bn(e,r))})}function xr(e){const t=y(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ze.getLastRemoteSnapshotVersion(e))}function jr(e,t){const n=y(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];t.targetChanges.forEach((t,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(e,t.removedDocuments,o).next(()=>n.ze.addMatchingKeys(e,t.addedDocuments,o)));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(o,u),function(e,t,n){return v(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,t)&&s.push(n.ze.updateTargetData(e,u))}});let a=Ht();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(Cr(e,o,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual(N.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next(t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return cr.waitFor(s).next(()=>o.apply(e)).next(()=>n.Qn.vn(e,a)).next(()=>a)}).then(e=>(n.Un=i,e))}function Cr(e,t,n,r,i){let o=Qt();return n.forEach(e=>o=o.add(e)),t.getEntries(e,o).next(e=>{let o=Ht();return n.forEach((n,s)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(N.min())?(t.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s,c),o=o.insert(n,s)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function Rr(e,t){const n=y(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t)))}function Nr(e,t){const n=y(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.ze.getTargetData(e,t).next(i=>i?(r=i,cr.resolve(r)):n.ze.allocateTargetId(e).next(i=>(r=new dr(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e})}async function Pr(e,t,n){const r=y(e),i=r.Un.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ur(e))throw e;d("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function Dr(e,t,n){const r=y(e);let i=N.min(),o=Qt();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=y(e),i=r.qn.get(n);return void 0!==i?cr.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,We(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next(e=>{o=e})}).next(()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:N.min(),n?o:Qt())).next(e=>({documents:e,Gn:o})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return cr.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:gn(n.createTime)}),cr.resolve()}getNamedQuery(e,t){return cr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:pr(e.bundledQuery),readTime:gn(e.readTime)}}(t)),cr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.Zn=new qt(Fr.ts),this.es=new qt(Fr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Fr(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new Fr(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){const t=new Z(new F([])),n=new Fr(t,e),r=new Fr(t,e+1),i=[];return this.es.forEachInRange([n,r],e=>{this.rs(e),i.push(e.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Z(new F([])),n=new Fr(t,e),r=new Fr(t,e+1);let i=Qt();return this.es.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Fr(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Fr{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Z.comparator(e.key,t.key)||j(e.ls,t.ls)}static ns(e,t){return j(e.ls,t.ls)||Z.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new qt(Fr.ts)}checkEmpty(e){return cr.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new lr(i,t,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new Fr(s.key,i)),this.Ht.addToCollectionParentIndex(e,s.key.path.popLast());return cr.resolve(o)}lookupMutationBatch(e,t){return cr.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return cr.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return cr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return cr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Fr(t,0),r=new Fr(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],e=>{const t=this.ws(e.ls);i.push(t)}),cr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qt(j);return t.forEach(e=>{const t=new Fr(e,0),r=new Fr(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],e=>{n=n.add(e.ls)})}),cr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new Fr(new Z(i),0);let s=new qt(j);return this.ds.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.ls)),!0)},o),cr.resolve(this.gs(s))}gs(e){const t=[];return e.forEach(e=>{const n=this.ws(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){v(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return cr.forEach(t.mutations,r=>{const i=new Fr(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=n})}te(e){}containsKey(e,t){const n=new Fr(t,0),r=this.ds.firstAfterOrEqual(n);return cr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,cr.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Ut(Z.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return cr.resolve(n?n.document.clone():ge.newInvalidDocument(t))}getEntries(e,t){let n=Ht();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():ge.newInvalidDocument(e))}),cr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Ht();const i=new Z(t.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i,readTime:s}}=o.getNext();if(!t.path.isPrefixOf(e.path))break;s.compareTo(n)<=0||Ze(t,i)&&(r=r.insert(i.key,i.clone()))}return cr.resolve(r)}Es(e,t){return cr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Br(this)}getSize(e){return cr.resolve(this.size)}}class Br extends wr{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),cr.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.persistence=e,this.Ts=new _r(e=>be(e),we),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Is=0,this.As=new Mr,this.targetCount=0,this.Rs=yr.se()}forEachTarget(e,t){return this.Ts.forEach((e,n)=>t(n)),cr.resolve()}getLastRemoteSnapshotVersion(e){return cr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return cr.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),cr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),cr.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new yr(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,cr.resolve()}updateTargetData(e,t){return this.ae(t),cr.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,cr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),cr.waitFor(i).next(()=>r)}getTargetCount(e){return cr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return cr.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),cr.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),cr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),cr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return cr.resolve(n)}containsKey(e,t){return cr.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.Ps={},this.Le=new S(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new qr(this),this.Ht=new mr,this.He=function(e,t){return new Vr(e,t)}(this.Ht,e=>this.referenceDelegate.bs(e)),this.N=new fr(t),this.Je=new Lr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new Ur(this.Ht,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){d("MemoryPersistence","Starting transaction:",e);const r=new Gr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(e=>this.referenceDelegate.Vs(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ss(e,t){return cr.or(Object.values(this.Ps).map(n=>()=>n.containsKey(e,t)))}}class Gr extends ar{constructor(e){super(),this.currentSequenceNumber=e}}class Hr{constructor(e){this.persistence=e,this.Ds=new Mr,this.Cs=null}static Ns(e){return new Hr(e)}get xs(){if(this.Cs)return this.Cs;throw g()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),cr.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),cr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),cr.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return cr.forEach(this.xs,n=>{const r=Z.fromPath(n);return this.ks(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}bs(e){return 0}ks(e,t){return cr.or([()=>cr.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.activeTargetIds=Zt()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kr{constructor(){this.yi=new zr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new zr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}Ri(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);d("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(e,i,o,n).then(e=>(d("RestConnection","Received: ",e),e),t=>{throw p("RestConnection",e+" failed with error: ",t,"url: ",i,"request:",n),t})}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=Xr[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const t=s.getResponseJson();d("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+e+'" timed out'),o(new _(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(d("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const e=s.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(t)>=0?t:b.UNKNOWN}(e.status);o(new _(t,e.message))}else o(new _(b.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new _(b.UNAVAILABLE,"Connection failed."));break;default:g()}}finally{d("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);s.send(t,"POST",c,n,15)})}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.Ui(o.initMessageHeaders,t),Object(s["o"])()||Object(s["p"])()||Object(s["l"])()||Object(s["n"])()||Object(s["r"])()||Object(s["k"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");d("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let l=!1,h=!1;const f=new Qr({vi:e=>{h?d("Connection","Not sending because WebChannel is closed:",e):(l||(d("Connection","Opening WebChannel transport."),u.open(),l=!0),d("Connection","WebChannel sending:",e),u.send(e))},Vi:()=>u.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(u,a["f"].EventType.OPEN,()=>{h||d("Connection","WebChannel transport opened.")}),m(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,d("Connection","WebChannel transport closed"),f.$i())}),m(u,a["f"].EventType.ERROR,e=>{h||(h=!0,p("Connection","WebChannel transport errored:",e),f.$i(new _(b.UNAVAILABLE,"The operation could not be completed")))}),m(u,a["f"].EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];v(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){d("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Dt[e];if(void 0!==t)return Ft(t)}(e),n=i.message;void 0===t&&(t=b.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,f.$i(new _(t,n)),u.close()}else d("Connection","WebChannel received:",n),f.Oi(n)}}),m(i,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return new dn(e,!0)}class ti{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r,i,o){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ti(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(f(t.toString()),f("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then(e=>{this.sr===t&&this.yr(e)},t=>{e(()=>{const e=new _(b.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)})})}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{t(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.pr(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return d("PersistentStream","close with error: "+e),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget(()=>this.sr===e?t():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ri extends ni{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=An(this.N,e),n=function(e){if(!("targetChange"in e))return N.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?N.min():t.readTime?gn(t.readTime):N.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=Tn(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=Oe(r)?{documents:xn(e,r)}:{query:jn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=pn(e,t.resumeToken):t.snapshotVersion.compareTo(N.min())>0&&(n.readTime=fn(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=Rn(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=Tn(this.N),t.removeTarget=e,this.wr(t)}}class ii extends ni{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=kn(e.writeResults,e.commitTime),n=gn(e.commitTime);return this.listener.vr(n,t)}return v(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Tn(this.N),this.wr(e)}br(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Sn(this.N,e))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new _(b.UNKNOWN,e.toString())})}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new _(b.UNKNOWN,e.toString())})}terminate(){this.Dr=!0}}class si{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+e.toString()),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(f(t),this.$r=!1):d("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(e=>{n.enqueueAndForget(async()=>{gi(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=y(e);t.Kr.add(4),await ui(t),t.Wr.set("Unknown"),t.Kr.delete(4),await ci(t)}(this))})}),this.Wr=new si(n,r)}}async function ci(e){if(gi(e))for(const t of e.jr)await t(!0)}async function ui(e){for(const t of e.jr)await t(!1)}function li(e,t){const n=y(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),mi(n)?pi(n):Ni(n).cr()&&di(n,t))}function hi(e,t){const n=y(e),r=Ni(n);n.qr.delete(t),r.cr()&&fi(n,t),0===n.qr.size&&(r.cr()?r.lr():gi(n)&&n.Wr.set("Unknown"))}function di(e,t){e.Gr.Y(t.targetId),Ni(e).Ir(t)}function fi(e,t){e.Gr.Y(t),Ni(e).Ar(t)}function pi(e){e.Gr=new an({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),Ni(e).start(),e.Wr.Or()}function mi(e){return gi(e)&&!Ni(e).ar()&&e.qr.size>0}function gi(e){return 0===y(e).Kr.size}function vi(e){e.Gr=void 0}async function yi(e){e.qr.forEach((t,n)=>{di(e,t)})}async function bi(e,t){vi(e),mi(e)?(e.Wr.Lr(t),pi(e)):e.Wr.set("Unknown")}async function _i(e,t,n){if(e.Wr.set("Online"),t instanceof on&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wi(e,n)}else if(t instanceof nn?e.Gr.rt(t):t instanceof rn?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(N.min()))try{const t=await xr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(q.EMPTY_BYTE_STRING,n.snapshotVersion)),fi(e,t);const r=new dr(n.target,t,1,n.sequenceNumber);di(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){d("RemoteStore","Failed to raise snapshot:",t),await wi(e,t)}}async function wi(e,t,n){if(!ur(t))throw t;e.Kr.add(1),await ui(e),e.Wr.set("Offline"),n||(n=()=>xr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await ci(e)})}function Oi(e,t){return t().catch(n=>wi(e,n,t))}async function Ti(e){const t=y(e),n=Pi(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Ei(t);)try{const e=await Rr(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,Ii(t,e)}catch(e){await wi(t,e)}Ai(t)&&Si(t)}function Ei(e){return gi(e)&&e.Ur.length<10}function Ii(e,t){e.Ur.push(t);const n=Pi(e);n.cr()&&n.Pr&&n.br(t.mutations)}function Ai(e){return gi(e)&&!Pi(e).ar()&&e.Ur.length>0}function Si(e){Pi(e).start()}async function ki(e){Pi(e).Sr()}async function xi(e){const t=Pi(e);for(const n of e.Ur)t.br(n.mutations)}async function ji(e,t,n){const r=e.Ur.shift(),i=hr.from(r,t,n);await Oi(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ti(e)}async function Ci(e,t){t&&Pi(e).Pr&&await async function(e,t){if(n=t.code,Mt(n)&&n!==b.ABORTED){const n=e.Ur.shift();Pi(e).hr(),await Oi(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ti(e)}var n}(e,t),Ai(e)&&Si(e)}async function Ri(e,t){const n=y(e);t?(n.Kr.delete(2),await ci(n)):t||(n.Kr.add(2),await ui(n),n.Wr.set("Unknown"))}function Ni(e){return e.zr||(e.zr=function(e,t,n){const r=y(e);return r.Cr(),new ri(t,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:yi.bind(null,e),Ci:bi.bind(null,e),Tr:_i.bind(null,e)}),e.jr.push(async t=>{t?(e.zr.hr(),mi(e)?pi(e):e.Wr.set("Unknown")):(await e.zr.stop(),vi(e))})),e.zr}function Pi(e){return e.Hr||(e.Hr=function(e,t,n){const r=y(e);return r.Cr(),new ii(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:ki.bind(null,e),Ci:Ci.bind(null,e),Vr:xi.bind(null,e),vr:ji.bind(null,e)}),e.jr.push(async t=>{t?(e.Hr.hr(),await Ti(e)):(await e.Hr.stop(),e.Ur.length>0&&(d("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))})),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Di{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new w,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new Di(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Li(e,t){if(f("AsyncQueue",`${t}: ${e}`),ur(e))return new _(b.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Z.comparator(t.key,n.key):(e,t)=>Z.comparator(e.key,t.key),this.keyedMap=Kt(),this.sortedSet=new Ut(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Mi;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Jr=new Ut(Z.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):g():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ui{constructor(e,t,n,r,i,o,s,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Ui(e,t,Mi.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xe(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.Xr=void 0,this.listeners=[]}}class Bi{constructor(){this.queries=new _r(e=>Qe(e),Xe),this.onlineState="Unknown",this.Zr=new Set}}async function qi(e,t){const n=y(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Vi),i)try{o.Xr=await n.onListen(r)}catch(e){const n=Li(e,`Initialization of query '${Ye(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.eo(n.onlineState),o.Xr&&t.no(o.Xr)&&zi(n)}async function $i(e,t){const n=y(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gi(e,t){const n=y(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&zi(n)}function Hi(e,t,n){const r=y(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function zi(e){e.Zr.forEach(e=>{e.next()})}class Ki{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ui(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.uo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(e){this.key=e}}class Ji{constructor(e){this.key=e}}class Xi{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=Qt(),this.mutatedKeys=Qt(),this.po=et(e),this.Eo=new Mi(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new Fi,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=qe(this.query)&&r.size===this.query.limit?r.last():null,c=$e(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Ze(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))}),qe(this.query)||$e(this.query))for(;o.size>this.query.limit;){const e=qe(this.query)?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return g()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.po(e.doc,t.doc)),this.Po(n);const o=t?this.bo():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new Ui(this.query,e.Eo,r,i,e.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Fi,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}Po(e){e&&(e.addedDocuments.forEach(e=>this._o=this._o.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this._o=this._o.delete(e)),this.current=e.current)}bo(){if(!this.current)return[];const e=this.yo;this.yo=Qt(),this.Eo.forEach(e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))});const t=[];return e.forEach(e=>{this.yo.has(e)||t.push(new Ji(e))}),this.yo.forEach(n=>{e.has(n)||t.push(new Wi(n))}),t}So(e){this._o=e.Gn,this.yo=Qt();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return Ui.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Qi{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Yi{constructor(e){this.key=e,this.Co=!1}}class Zi{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new _r(e=>Qe(e),Xe),this.ko=new Map,this.$o=new Set,this.Oo=new Ut(Z.comparator),this.Fo=new Map,this.Mo=new Mr,this.Lo={},this.Bo=new Map,this.Uo=yr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function eo(e,t){const n=_o(e);let r,i;const o=n.xo.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const e=await Nr(n.localStore,We(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await to(n,t,r,"current"===o),n.isPrimaryClient&&li(n.remoteStore,e)}return i}async function to(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await Dr(e.localStore,t.query,!1).then(({documents:e})=>t.view.Io(e,i)));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return po(e,t.targetId,s.vo),s.snapshot}(e,t,n,r);const i=await Dr(e.localStore,t,!0),o=new Xi(t,i.Gn),s=o.Io(i.documents),a=tn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=o.applyChanges(s,e.isPrimaryClient,a);po(e,n,c.vo);const u=new Qi(t,n,o);return e.xo.set(t,u),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),c.snapshot}async function no(e,t){const n=y(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(e=>!Xe(e,t))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hi(n.remoteStore,r.targetId),ho(n,r.targetId)}).catch(br)):(ho(n,r.targetId),await Pr(n.localStore,r.targetId,!0))}async function ro(e,t,n){const r=wo(e);try{const e=await function(e,t){const n=y(e),r=R.now(),i=t.reduce((e,t)=>e.add(t.key),Qt());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Qn.bn(e,i).next(i=>{o=i;const s=[];for(const e of t){const t=Et(e,o.get(e.key));null!=t&&s.push(new kt(e.key,t,me(t.value.mapValue),bt.exists(!0)))}return n.In.addMutationBatch(e,r,s,t)})).then(e=>(e.applyToLocalDocumentSet(o),{batchId:e.batchId,changes:o}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new Ut(j)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await vo(r,e.changes),await Ti(r.remoteStore)}catch(e){const t=Li(e,"Failed to persist write");n.reject(t)}}async function io(e,t){const n=y(e);try{const e=await jr(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Fo.get(t);r&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?v(r.Co):e.removedDocuments.size>0&&(v(r.Co),r.Co=!1))}),await vo(n,e,t)}catch(e){await br(e)}}function oo(e,t,n){const r=y(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=y(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)}),r&&zi(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function so(e,t,n){const r=y(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),o=i&&i.key;if(o){let e=new Ut(Z.comparator);e=e.insert(o,ge.newNoDocument(o,N.min()));const n=Qt().add(o),i=new en(N.min(),new Map,new qt(j),e,n);await io(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(t),go(r)}else await Pr(r.localStore,t,!1).then(()=>ho(r,t,n)).catch(br)}async function ao(e,t){const n=y(e),r=t.batch.batchId;try{const e=await kr(n.localStore,t);lo(n,r,null),uo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vo(n,e)}catch(e){await br(e)}}async function co(e,t,n){const r=y(e);try{const e=await function(e,t){const n=y(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.In.lookupMutationBatch(e,t).next(t=>(v(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t))).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.bn(e,r))})}(r.localStore,t);lo(r,t,n),uo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vo(r,e)}catch(n){await br(n)}}function uo(e,t){(e.Bo.get(t)||[]).forEach(e=>{e.resolve()}),e.Bo.delete(t)}function lo(e,t,n){const r=y(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function ho(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach(t=>{e.Mo.containsKey(t)||fo(e,t)})}function fo(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(hi(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),go(e))}function po(e,t,n){for(const r of n)r instanceof Wi?(e.Mo.addReference(r.key,t),mo(e,r)):r instanceof Ji?(d("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||fo(e,r.key)):g()}function mo(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(d("SyncEngine","New document in limbo: "+n),e.$o.add(r),go(e))}function go(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new Z(F.fromString(t)),r=e.Uo.next();e.Fo.set(r,new Yi(n)),e.Oo=e.Oo.insert(n,r),li(e.remoteStore,new dr(We(Be(n.path)),r,2,S.T))}}async function vo(e,t,n){const r=y(e),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach((e,a)=>{s.push(r.Ko(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Tr.kn(a.targetId,e);o.push(t)}}))}),await Promise.all(s),r.No.Tr(i),await async function(e,t){const n=y(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>cr.forEach(t,t=>cr.forEach(t.Nn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>cr.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ur(e))throw e;d("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,o))}async function yo(e,t){const n=y(e);if(!n.currentUser.isEqual(t)){d("SyncEngine","User change. New user:",t.toKey());const e=await Sr(n.localStore,t);n.currentUser=t,function(e,t){e.Bo.forEach(e=>{e.forEach(e=>{e.reject(new _(b.CANCELLED,t))})}),e.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await vo(n,e.Wn)}}function bo(e,t){const n=y(e),r=n.Fo.get(t);if(r&&r.Co)return Qt().add(r.key);{let e=Qt();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}function _o(e){const t=y(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=io.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=so.bind(null,t),t.No.Tr=Gi.bind(null,t.eventManager),t.No.jo=Hi.bind(null,t.eventManager),t}function wo(e){const t=y(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ao.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=co.bind(null,t),t}class Oo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ei(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Ar(this.persistence,new Er,e.initialUser,this.N)}Go(e){return new $r(Hr.Ns,this.N)}Wo(e){return new Kr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class To{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=yo.bind(null,this.syncEngine),await Ri(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bi}createDatastore(e){const t=ei(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yr(r));var r;return function(e,t,n){return new oi(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>oo(this.syncEngine,e,0),o=Jr.Pt()?new Jr:new Wr,new ai(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new Zi(e,t,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=y(e);d("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await ui(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=x.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{d("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new w;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=Li(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ao(e,t){e.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Sr(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function So(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ko(e);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>async function(e,t){const n=y(e);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.Kr.add(3),await ui(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await ci(n)}(t.remoteStore,e)),e.onlineComponents=t}async function ko(e){return e.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Ao(e,new Oo)),e.offlineComponents}async function xo(e){return e.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await So(e,new To)),e.onlineComponents}function jo(e){return xo(e).then(e=>e.syncEngine)}async function Co(e){const t=await xo(e),n=t.eventManager;return n.onListen=eo.bind(null,t.syncEngine),n.onUnlisten=no.bind(null,t.syncEngine),n}function Ro(e,t,n={}){const r=new w;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Eo({next:o=>{t.enqueueAndForget(()=>$i(e,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new _(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new _(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new Ki(Be(n.path),o,{includeMetadataChanges:!0,uo:!0});return qi(e,s)}(await Co(e),e.asyncQueue,t,n,r)),r.promise}function No(e,t,n={}){const r=new w;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Eo({next:n=>{t.enqueueAndForget(()=>$i(e,s)),n.fromCache&&"server"===r.source?i.reject(new _(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Ki(n,o,{includeMetadataChanges:!0,uo:!0});return qi(e,s)}(await Co(e),e.asyncQueue,t,n,r)),r.promise}class Po{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Do{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t,n){if(!n)throw new _(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Fo(e,t,n,r){if(!0===t&&!0===r)throw new _(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uo(e){if(!Z.isDocumentKey(e))throw new _(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vo(e){if(Z.isDocumentKey(e))throw new _(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":g()}function qo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bo(e);throw new _(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function $o(e,t){if(t<=0)throw new _(b.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new _(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1,e instanceof Do?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(e.options.projectId)}(e))}get app(){if(!this._app)throw new _(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new T;switch(e.type){case"gapi":e.client;return v(!("object"!=typeof r["e"]||null===r["e"]||!r["e"].auth||!r["e"].auth.getAuthHeaderValueForFirstParty)),new A(r["e"],e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new _(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Lo.get(e);t&&(d("ComponentProvider","Removing Datastore"),Lo.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zo(this.firestore,e,this._key)}}class Ko{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ko(this.firestore,e,this._query)}}class Wo extends Ko{constructor(e,t,n){super(e,t,Be(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zo(this.firestore,null,new Z(e))}withConverter(e){return new Wo(this.firestore,e,this._path)}}function Jo(e,t,...n){if(e=Object(s["i"])(e),Mo("collection","path",t),e instanceof Ho){const r=F.fromString(t,...n);return Vo(r),new Wo(e,null,r)}{if(!(e instanceof zo||e instanceof Wo))throw new _(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=F.fromString(e.path,...n).child(F.fromString(t));return Vo(r),new Wo(e.firestore,null,r)}}function Xo(e,t,...n){if(e=Object(s["i"])(e),1===arguments.length&&(t=x.I()),Mo("doc","path",t),e instanceof Ho){const r=F.fromString(t,...n);return Uo(r),new zo(e,null,new Z(r))}{if(!(e instanceof zo||e instanceof Wo))throw new _(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(F.fromString(t,...n));return Uo(r),new zo(e.firestore,e instanceof Wo?e.converter:null,new Z(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ti(this,"async_queue_retry"),this.Ea=()=>{const e=Zr();e&&d("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=Zr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=Zr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const t=new w;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!ur(e))throw e;d("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const t=this.fa.then(()=>(this.ga=!0,e().catch(e=>{throw this.ma=e,this.ga=!1,f("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.ga=!1,e))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=Di.createAndSchedule(this,e,t,n,e=>this.Ra(e));return this._a.push(r),r}Ta(){this.ma&&g()}verifyOperationInProgress(){}async Pa(){let e;do{e=this.fa,await e}while(e!==this.fa)}ba(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.Pa().then(()=>{this._a.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pa()})}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}class Yo extends Ho{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Qo,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ts(this),this._firestoreClient.terminate()}}function Zo(e=Object(r["e"])()){return Object(r["b"])(e,"firestore").getImmediate()}function es(e){return e._firestoreClient||ts(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ts(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Po(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Io(e._credentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(q.fromBase64String(e))}catch(e){throw new _(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new rs(q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=/^__.*__$/;class as{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new St(e,this.data,t,this.fieldTransforms)}}class cs{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function us(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class ls{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new ls(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Is(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(us(this.Da)&&ss.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class hs{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||ei(e)}Ba(e,t,n,r=!1){return new ls({Da:e,methodName:t,La:n,path:V.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ds(e){const t=e._freezeSettings(),n=ei(e._databaseId);return new hs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fs(e,t,n,r,i,o={}){const s=e.Ba(o.merge||o.mergeFields?2:0,t,n,i);ws("Data must be an object, but it was:",s,r);const a=bs(r,s);let c,u;if(o.merge)c=new B(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Os(t,r,n);if(!s.contains(i))throw new _(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);As(e,i)||e.push(i)}c=new B(e),u=s.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=s.fieldTransforms;return new as(new pe(a),c,u)}class ps extends is{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(this._methodName+"() can only appear at the top level of your update data"):e.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ps}}function ms(e,t,n,r){const i=e.Ba(1,t,n);ws("Data must be an object, but it was:",i,r);const o=[],a=pe.empty();D(r,(e,r)=>{const c=Es(t,e,n);r=Object(s["i"])(r);const u=i.$a(c);if(r instanceof ps)o.push(c);else{const e=ys(r,u);null!=e&&(o.push(c),a.set(c,e))}});const c=new B(o);return new cs(a,c,i.fieldTransforms)}function gs(e,t,n,r,i,o){const a=e.Ba(1,t,n),c=[Os(t,r,n)],u=[i];if(o.length%2!=0)throw new _(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(Os(t,o[s])),u.push(o[s+1]);const l=[],h=pe.empty();for(let f=c.length-1;f>=0;--f)if(!As(l,c[f])){const e=c[f];let t=u[f];t=Object(s["i"])(t);const n=a.$a(e);if(t instanceof ps)l.push(e);else{const r=ys(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new B(l);return new cs(h,d,a.fieldTransforms)}function vs(e,t,n,r=!1){return ys(n,e.Ba(r?4:3,t))}function ys(e,t){if(_s(e=Object(s["i"])(e)))return ws("Unsupported field value:",t,e),bs(e,t);if(e instanceof is)return function(e,t){if(!us(t.Da))throw t.Fa(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Fa(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ys(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s["i"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return it(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=R.fromDate(e);return{timestampValue:fn(t.N,n)}}if(e instanceof R){const n=new R(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:fn(t.N,n)}}if(e instanceof os)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof rs)return{bytesValue:pn(t.N,e._byteString)};if(e instanceof zo){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa("Unsupported field value: "+Bo(e))}(e,t)}function bs(e,t){const n={};return L(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):D(e,(e,r)=>{const i=ys(r,t.Na(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function _s(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof R||e instanceof os||e instanceof rs||e instanceof zo||e instanceof is)}function ws(e,t,n){if(!_s(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Bo(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}}function Os(e,t,n){if((t=Object(s["i"])(t))instanceof ns)return t._internalPath;if("string"==typeof t)return Es(e,t);throw Is("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Ts=new RegExp("[~\\*/\\[\\]]");function Es(e,t,n){if(t.search(Ts)>=0)throw Is(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ns(...t.split("."))._internalPath}catch(r){throw Is(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Is(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new _(b.INVALID_ARGUMENT,a+e+c)}function As(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ks(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xs("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ks extends Ss{data(){return super.data()}}function xs(e,t){return"string"==typeof t?Es(e,t):t instanceof ns?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends Ss{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xs("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Rs extends Cs{data(e={}){return super.data(e)}}class Ns{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new js(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Rs(this._firestore,this._userDataWriter,n.key,n,new js(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new Rs(e._firestore,e._userDataWriter,n.doc.key,n.doc,new js(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Rs(e._firestore,e._userDataWriter,t.doc.key,t.doc,new js(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:Ps(t.type),doc:r,oldIndex:i,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ps(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return g()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ds(e){if($e(e)&&0===e.explicitOrderBy.length)throw new _(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ls{}function Ms(e,...t){for(const n of t)e=n._apply(e);return e}class Fs extends Ls{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=ds(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new _(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on FieldPath.documentId().`);if("in"===o||"not-in"===o){Ws(s,o);const t=[];for(const n of s)t.push(Ks(r,e,n));a={arrayValue:{values:t}}}else a=Ks(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Ws(s,o),a=vs(n,t,s,"in"===o||"not-in"===o);const c=Te.create(i,o,a);return function(e,t){if(t.v()){const n=He(e);if(null!==n&&!n.isEqual(t.field))throw new _(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ge(e);null!==r&&Js(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new _(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Ko(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ue(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Us(e,t,n){const r=t,i=xs("where",e);return new Fs(i,r,n)}class Vs extends Ls{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new _(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new _(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new De(t,n);return function(e,t){if(null===Ge(e)){const n=He(e);null!==n&&Js(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new Ko(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ue(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Bs(e,t="asc"){const n=t,r=xs("orderBy",e);return new Vs(r,n)}class qs extends Ls{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new Ko(e.firestore,e.converter,Je(e._query,this.Ga,this.za))}}function $s(e){return $o("limit",e),new qs("limit",e,"F")}class Gs extends Ls{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=zs(e,this.type,this.Ha,this.Ja);return new Ko(e.firestore,e.converter,function(e,t){return new Ue(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Hs(...e){return new Gs("startAfter",e,!1)}function zs(e,t,n,r){if(n[0]=Object(s["i"])(n[0]),n[0]instanceof Ss)return function(e,t,n,r,i){if(!r)throw new _(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of Ke(e))if(s.field.isKeyField())o.push(ae(t,r.key));else{const e=r.data.field(s.field);if(K(e))throw new _(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=s.field.canonicalString();throw new _(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}o.push(e)}return new Ne(o,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ds(e.firestore);return function(e,t,n,r,i,o){const s=e.explicitOrderBy;if(i.length>s.length)throw new _(b.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const o=i[c];if(s[c].field.isKeyField()){if("string"!=typeof o)throw new _(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!ze(e)&&-1!==o.indexOf("/"))throw new _(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=e.path.child(F.fromString(o));if(!Z.isDocumentKey(n))throw new _(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Z(n);a.push(ae(t,i))}else{const e=vs(n,r,o);a.push(e)}}return new Ne(a,o)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Ks(e,t,n){if("string"==typeof(n=Object(s["i"])(n))){if(""===n)throw new _(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!ze(t)&&-1!==n.indexOf("/"))throw new _(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(F.fromString(n));if(!Z.isDocumentKey(r))throw new _(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ae(e,new Z(r))}if(n instanceof zo)return ae(e,n._key);throw new _(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bo(n)}.`)}function Ws(e,t){if(!Array.isArray(e)||0===e.length)throw new _(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new _(b.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Js(e,t,n){if(!n.isEqual(t))throw new _(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{convertValue(e,t="none"){switch(ee(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(z(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw g()}}convertObject(e,t){const n={};return D(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new os(H(e.latitude),H(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":W(e);return null==r["d"]?null:this.convertValue(r["d"],t);case"estimate":return this.convertTimestamp(J(e));default:return null}}convertTimestamp(e){const t=G(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=F.fromString(e);v($n(n));const r=new Do(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return r.isEqual(t)||f(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ys(e){e=qo(e,zo);const t=qo(e.firestore,Yo);return Ro(es(t),e._key).then(n=>sa(t,e,n))}class Zs extends Xs{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zo(this.firestore,null,t)}}function ea(e){e=qo(e,Ko);const t=qo(e.firestore,Yo),n=es(t),r=new Zs(t);return Ds(e._query),No(n,e._query).then(n=>new Ns(t,r,e,n))}function ta(e,t,n){e=qo(e,zo);const r=qo(e.firestore,Yo),i=Qs(e.converter,t,n);return oa(r,[fs(ds(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,bt.none())])}function na(e,t,n,...r){e=qo(e,zo);const i=qo(e.firestore,Yo),o=ds(i);let a;return a="string"==typeof(t=Object(s["i"])(t))||t instanceof ns?gs(o,"updateDoc",e._key,t,n,r):ms(o,"updateDoc",e._key,t),oa(i,[a.toMutation(e._key,bt.exists(!0))])}function ra(e){return oa(qo(e.firestore,Yo),[new Rt(e._key,bt.none())])}function ia(e,t){const n=qo(e.firestore,Yo),r=Xo(e),i=Qs(e.converter,t);return oa(n,[fs(ds(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function oa(e,t){return function(e,t){const n=new w;return e.asyncQueue.enqueueAndForget(async()=>ro(await jo(e),t,n)),n.promise}(es(e),t)}function sa(e,t,n){const r=n.docs.get(t._key),i=new Zs(e);return new Cs(e,i,t._key,r,new js(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aa;!function(e){u=e}(r["a"]),Object(r["c"])(new i["a"]("firestore",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new Yo(n,new E(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.0.0",aa)}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)?r(t)&&(t=t[s],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1e5c":function(e,t,n){(function(n){var r,i;
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){"use strict";var o=function(){this.init()};o.prototype={init:function(){var e=this||s;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!==typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||s;if(e=parseFloat(e),t.ctx||p(),"undefined"!==typeof e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,s.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),i=0;i<r.length;i++){var o=t._howls[n]._soundById(r[i]);o&&o._node&&(o._node.volume=o._volume*e)}return t}return t._volume},mute:function(e){var t=this||s;t.ctx||p(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,s.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),i=0;i<r.length;i++){var o=t._howls[n]._soundById(r[i]);o&&o._node&&(o._node.muted=!!e||o._muted)}return t},stop:function(){for(var e=this||s,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||s,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&"undefined"!==typeof e.ctx.close&&(e.ctx.close(),e.ctx=null,p()),e},codecs:function(e){return(this||s)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||s;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!==typeof Audio)try{var t=new Audio;"undefined"===typeof t.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{t=new Audio;t.muted&&(e.noAudio=!0)}catch(n){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||s,t=null;try{t="undefined"!==typeof Audio?new Audio:null}catch(l){return e}if(!t||"function"!==typeof t.canPlayType)return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",i=r.match(/OPR\/([0-6].)/g),o=i&&parseInt(i[0].split("/")[1],10)<33,a=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),c=r.match(/Version\/(.*?) /),u=a&&c&&parseInt(c[1],10)<15;return e._codecs={mp3:!(o||!n&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(u||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(u||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||s;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){while(e._html5AudioPool.length<e.html5PoolSize)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch(n){e.noAudio=!0;break}for(var i=0;i<e._howls.length;i++)if(!e._howls[i]._webAudio)for(var o=e._howls[i]._getSoundIds(),s=0;s<o.length;s++){var a=e._howls[i]._soundById(o[s]);a&&a._node&&!a._node._unlocked&&(a._node._unlocked=!0,a._node.load())}e._autoResume();var c=e.ctx.createBufferSource();c.buffer=e._scratchBuffer,c.connect(e.ctx.destination),"undefined"===typeof c.start?c.noteOn(0):c.start(0),"function"===typeof e.ctx.resume&&e.ctx.resume(),c.onended=function(){c.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||s;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=(new Audio).play();return t&&"undefined"!==typeof Promise&&(t instanceof Promise||"function"===typeof t.then)&&t.catch((function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")})),new Audio},_releaseHtml5Audio:function(e){var t=this||s;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&"undefined"!==typeof e.ctx.suspend&&s.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout((function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}}),3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&"undefined"!==typeof e.ctx.resume&&s.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then((function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")})),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var s=new o,a=function(e){var t=this;e.src&&0!==e.src.length?t.init(e):console.error("An array of source files must be passed with any new Howl.")};a.prototype={init:function(e){var t=this;return s.ctx||p(),t._autoplay=e.autoplay||!1,t._format="string"!==typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!==typeof e.preload&&"metadata"!==e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!==typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=s.usingWebAudio&&!t._html5,"undefined"!==typeof s.ctx&&s.ctx&&s.autoUnlock&&s._unlockAudio(),s._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&"none"!==t._preload&&t.load(),t},load:function(){var e=this,t=null;if(s.noAudio)e._emit("loaderror",null,"No audio support.");else{"string"===typeof e._src&&(e._src=[e._src]);for(var n=0;n<e._src.length;n++){var r,i;if(e._format&&e._format[n])r=e._format[n];else{if(i=e._src[n],"string"!==typeof i){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}r=/^data:audio\/([^;,]+);/i.exec(i),r||(r=/\.([^.]+)$/.exec(i.split("?",1)[0])),r&&(r=r[1].toLowerCase())}if(r||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),r&&s.codecs(r)){t=e._src[n];break}}if(t)return e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new c(e),e._webAudio&&l(e),e;e._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(e,t){var n=this,r=null;if("number"===typeof e)r=e,e=null;else{if("string"===typeof e&&"loaded"===n._state&&!n._sprite[e])return null;if("undefined"===typeof e&&(e="__default",!n._playLock)){for(var i=0,o=0;o<n._sounds.length;o++)n._sounds[o]._paused&&!n._sounds[o]._ended&&(i++,r=n._sounds[o]._id);1===i?e=null:r=null}}var a=r?n._soundById(r):n._inactiveSound();if(!a)return null;if(r&&!e&&(e=a._sprite||"__default"),"loaded"!==n._state){a._sprite=e,a._ended=!1;var c=a._id;return n._queue.push({event:"play",action:function(){n.play(c)}}),c}if(r&&!a._paused)return t||n._loadQueue("play"),a._id;n._webAudio&&s._autoResume();var u=Math.max(0,a._seek>0?a._seek:n._sprite[e][0]/1e3),l=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-u),h=1e3*l/Math.abs(a._rate),d=n._sprite[e][0]/1e3,f=(n._sprite[e][0]+n._sprite[e][1])/1e3;a._sprite=e,a._ended=!1;var p=function(){a._paused=!1,a._seek=u,a._start=d,a._stop=f,a._loop=!(!a._loop&&!n._sprite[e][2])};if(!(u>=f)){var m=a._node;if(n._webAudio){var g=function(){n._playLock=!1,p(),n._refreshBuffer(a);var e=a._muted||n._muted?0:a._volume;m.gain.setValueAtTime(e,s.ctx.currentTime),a._playStart=s.ctx.currentTime,"undefined"===typeof m.bufferSource.start?a._loop?m.bufferSource.noteGrainOn(0,u,86400):m.bufferSource.noteGrainOn(0,u,l):a._loop?m.bufferSource.start(0,u,86400):m.bufferSource.start(0,u,l),h!==1/0&&(n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),h)),t||setTimeout((function(){n._emit("play",a._id),n._loadQueue()}),0)};"running"===s.state&&"interrupted"!==s.ctx.state?g():(n._playLock=!0,n.once("resume",g),n._clearTimer(a._id))}else{var v=function(){m.currentTime=u,m.muted=a._muted||n._muted||s._muted||m.muted,m.volume=a._volume*s.volume(),m.playbackRate=a._rate;try{var r=m.play();if(r&&"undefined"!==typeof Promise&&(r instanceof Promise||"function"===typeof r.then)?(n._playLock=!0,p(),r.then((function(){n._playLock=!1,m._unlocked=!0,t?n._loadQueue():n._emit("play",a._id)})).catch((function(){n._playLock=!1,n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),a._ended=!0,a._paused=!0}))):t||(n._playLock=!1,p(),n._emit("play",a._id)),m.playbackRate=a._rate,m.paused)return void n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||a._loop?n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),h):(n._endTimers[a._id]=function(){n._ended(a),m.removeEventListener("ended",n._endTimers[a._id],!1)},m.addEventListener("ended",n._endTimers[a._id],!1))}catch(i){n._emit("playerror",a._id,i)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=n._src,m.load());var y=window&&window.ejecta||!m.readyState&&s._navigator.isCocoonJS;if(m.readyState>=3||y)v();else{n._playLock=!0,n._state="loading";var b=function(){n._state="loaded",v(),m.removeEventListener(s._canPlayEvent,b,!1)};m.addEventListener(s._canPlayEvent,b,!1),n._clearTimer(a._id)}}return a._id}n._ended(a)},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),r=0;r<n.length;r++){t._clearTimer(n[r]);var i=t._soundById(n[r]);if(i&&!i._paused&&(i._seek=t.seek(n[r]),i._rateSeek=0,i._paused=!0,t._stopFade(n[r]),i._node))if(t._webAudio){if(!i._node.bufferSource)continue;"undefined"===typeof i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),t._cleanBuffer(i._node)}else isNaN(i._node.duration)&&i._node.duration!==1/0||i._node.pause();arguments[1]||t._emit("pause",i?i._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var r=n._getSoundIds(e),i=0;i<r.length;i++){n._clearTimer(r[i]);var o=n._soundById(r[i]);o&&(o._seek=o._start||0,o._rateSeek=0,o._paused=!0,o._ended=!0,n._stopFade(r[i]),o._node&&(n._webAudio?o._node.bufferSource&&("undefined"===typeof o._node.bufferSource.stop?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),n._cleanBuffer(o._node)):isNaN(o._node.duration)&&o._node.duration!==1/0||(o._node.currentTime=o._start||0,o._node.pause(),o._node.duration===1/0&&n._clearSound(o._node))),t||n._emit("stop",o._id))}return n},mute:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if("undefined"===typeof t){if("boolean"!==typeof e)return n._muted;n._muted=e}for(var r=n._getSoundIds(t),i=0;i<r.length;i++){var o=n._soundById(r[i]);o&&(o._muted=e,o._interval&&n._stopFade(o._id),n._webAudio&&o._node?o._node.gain.setValueAtTime(e?0:o._volume,s.ctx.currentTime):o._node&&(o._node.muted=!!s._muted||e),n._emit("mute",o._id))}return n},volume:function(){var e,t,n,r=this,i=arguments;if(0===i.length)return r._volume;if(1===i.length||2===i.length&&"undefined"===typeof i[1]){var o=r._getSoundIds(),a=o.indexOf(i[0]);a>=0?t=parseInt(i[0],10):e=parseFloat(i[0])}else i.length>=2&&(e=parseFloat(i[0]),t=parseInt(i[1],10));if(!("undefined"!==typeof e&&e>=0&&e<=1))return n=t?r._soundById(t):r._sounds[0],n?n._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,i)}}),r;"undefined"===typeof t&&(r._volume=e),t=r._getSoundIds(t);for(var c=0;c<t.length;c++)n=r._soundById(t[c]),n&&(n._volume=e,i[2]||r._stopFade(t[c]),r._webAudio&&n._node&&!n._muted?n._node.gain.setValueAtTime(e,s.ctx.currentTime):n._node&&!n._muted&&(n._node.volume=e*s.volume()),r._emit("volume",n._id));return r},fade:function(e,t,n,r){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,t,n,r)}}),i;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),i.volume(e,r);for(var o=i._getSoundIds(r),a=0;a<o.length;a++){var c=i._soundById(o[a]);if(c){if(r||i._stopFade(o[a]),i._webAudio&&!c._muted){var u=s.ctx.currentTime,l=u+n/1e3;c._volume=e,c._node.gain.setValueAtTime(e,u),c._node.gain.linearRampToValueAtTime(t,l)}i._startFadeInterval(c,e,t,n,o[a],"undefined"===typeof r)}}return i},_startFadeInterval:function(e,t,n,r,i,o){var s=this,a=t,c=n-t,u=Math.abs(c/.01),l=Math.max(4,u>0?r/u:r),h=Date.now();e._fadeTo=n,e._interval=setInterval((function(){var i=(Date.now()-h)/r;h=Date.now(),a+=c*i,a=Math.round(100*a)/100,a=c<0?Math.max(n,a):Math.min(n,a),s._webAudio?e._volume=a:s.volume(a,e._id,!0),o&&(s._volume=a),(n<t&&a<=n||n>t&&a>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,s.volume(n,e._id),s._emit("fade",e._id))}),l)},_stopFade:function(e){var t=this,n=t._soundById(e);return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(s.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e,t,n,r=this,i=arguments;if(0===i.length)return r._loop;if(1===i.length){if("boolean"!==typeof i[0])return n=r._soundById(parseInt(i[0],10)),!!n&&n._loop;e=i[0],r._loop=e}else 2===i.length&&(e=i[0],t=parseInt(i[1],10));for(var o=r._getSoundIds(t),s=0;s<o.length;s++)n=r._soundById(o[s]),n&&(n._loop=e,r._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,r.playing(o[s])&&(r.pause(o[s],!0),r.play(o[s],!0)))));return r},rate:function(){var e,t,n,r=this,i=arguments;if(0===i.length)t=r._sounds[0]._id;else if(1===i.length){var o=r._getSoundIds(),a=o.indexOf(i[0]);a>=0?t=parseInt(i[0],10):e=parseFloat(i[0])}else 2===i.length&&(e=parseFloat(i[0]),t=parseInt(i[1],10));if("number"!==typeof e)return n=r._soundById(t),n?n._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,i)}}),r;"undefined"===typeof t&&(r._rate=e),t=r._getSoundIds(t);for(var c=0;c<t.length;c++)if(n=r._soundById(t[c]),n){r.playing(t[c])&&(n._rateSeek=r.seek(t[c]),n._playStart=r._webAudio?s.ctx.currentTime:n._playStart),n._rate=e,r._webAudio&&n._node&&n._node.bufferSource?n._node.bufferSource.playbackRate.setValueAtTime(e,s.ctx.currentTime):n._node&&(n._node.playbackRate=e);var u=r.seek(t[c]),l=(r._sprite[n._sprite][0]+r._sprite[n._sprite][1])/1e3-u,h=1e3*l/Math.abs(n._rate);!r._endTimers[t[c]]&&n._paused||(r._clearTimer(t[c]),r._endTimers[t[c]]=setTimeout(r._ended.bind(r,n),h)),r._emit("rate",n._id)}return r},seek:function(){var e,t,n=this,r=arguments;if(0===r.length)n._sounds.length&&(t=n._sounds[0]._id);else if(1===r.length){var i=n._getSoundIds(),o=i.indexOf(r[0]);o>=0?t=parseInt(r[0],10):n._sounds.length&&(t=n._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10));if("undefined"===typeof t)return 0;if("number"===typeof e&&("loaded"!==n._state||n._playLock))return n._queue.push({event:"seek",action:function(){n.seek.apply(n,r)}}),n;var a=n._soundById(t);if(a){if(!("number"===typeof e&&e>=0)){if(n._webAudio){var c=n.playing(t)?s.ctx.currentTime-a._playStart:0,u=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(u+c*Math.abs(a._rate))}return a._node.currentTime}var l=n.playing(t);l&&n.pause(t,!0),a._seek=e,a._ended=!1,n._clearTimer(t),n._webAudio||!a._node||isNaN(a._node.duration)||(a._node.currentTime=e);var h=function(){l&&n.play(t,!0),n._emit("seek",t)};if(l&&!n._webAudio){var d=function(){n._playLock?setTimeout(d,0):h()};setTimeout(d,0)}else h()}return n},playing:function(e){var t=this;if("number"===typeof e){var n=t._soundById(e);return!!n&&!n._paused}for(var r=0;r<t._sounds.length;r++)if(!t._sounds[r]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,r=t._soundById(e);return r&&(n=t._sprite[r._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(s._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),s._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var r=s._howls.indexOf(e);r>=0&&s._howls.splice(r,1);var i=!0;for(n=0;n<s._howls.length;n++)if(s._howls[n]._src===e._src||e._src.indexOf(s._howls[n]._src)>=0){i=!1;break}return u&&i&&delete u[e._src],s.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,r){var i=this,o=i["_on"+e];return"function"===typeof t&&o.push(r?{id:n,fn:t,once:r}:{id:n,fn:t}),i},off:function(e,t,n){var r=this,i=r["_on"+e],o=0;if("number"===typeof t&&(n=t,t=null),t||n)for(o=0;o<i.length;o++){var s=n===i[o].id;if(t===i[o].fn&&s||!t&&s){i.splice(o,1);break}}else if(e)r["_on"+e]=[];else{var a=Object.keys(r);for(o=0;o<a.length;o++)0===a[o].indexOf("_on")&&Array.isArray(r[a[o]])&&(r[a[o]]=[])}return r},once:function(e,t,n){var r=this;return r.on(e,t,n,1),r},_emit:function(e,t,n){for(var r=this,i=r["_on"+e],o=i.length-1;o>=0;o--)i[o].id&&i[o].id!==t&&"load"!==e||(setTimeout(function(e){e.call(this,t,n)}.bind(r,i[o].fn),0),i[o].once&&r.off(e,i[o].fn,i[o].id));return r._loadQueue(e),r},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,n=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!(!e._loop&&!t._sprite[n][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=s.ctx.currentTime;var i=1e3*(e._stop-e._start)/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),i)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),s._autoSuspend()),t._webAudio||r||t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if("function"!==typeof t._endTimers[e])clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new c(e)},_drain:function(){var e=this,t=e._pool,n=0,r=0;if(!(e._sounds.length<t)){for(r=0;r<e._sounds.length;r++)e._sounds[r]._ended&&n++;for(r=e._sounds.length-1;r>=0;r--){if(n<=t)return;e._sounds[r]._ended&&(e._webAudio&&e._sounds[r]._node&&e._sounds[r]._node.disconnect(0),e._sounds.splice(r,1),n--)}}},_getSoundIds:function(e){var t=this;if("undefined"===typeof e){for(var n=[],r=0;r<t._sounds.length;r++)n.push(t._sounds[r]._id);return n}return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=s.ctx.createBufferSource(),e._node.bufferSource.buffer=u[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,s.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,n=s._navigator&&s._navigator.vendor.indexOf("Apple")>=0;if(s._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=s._scratchBuffer}catch(r){}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(s._navigator&&s._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var c=function(e){this._parent=e,this.init()};c.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++s._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=s._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node="undefined"===typeof s.ctx.createGain?s.ctx.createGainNode():s.ctx.createGain(),e._node.gain.setValueAtTime(n,s.ctx.currentTime),e._node.paused=!0,e._node.connect(s.masterGain)):s.noAudio||(e._node=s._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(s._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=!0===t._preload?"auto":t._preload,e._node.volume=n*s.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++s._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(t._sprite).length&&(t._sprite={__default:[0,1e3*t._duration]}),"loaded"!==t._state&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(s._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(10*e._node.duration)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=1e3*t._duration),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var u={},l=function(e){var t=e._src;if(u[t])return e._duration=u[t].duration,void f(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);d(r.buffer,e)}else{var o=new XMLHttpRequest;o.open(e._xhr.method,t,!0),o.withCredentials=e._xhr.withCredentials,o.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach((function(t){o.setRequestHeader(t,e._xhr.headers[t])})),o.onload=function(){var t=(o.status+"")[0];"0"===t||"2"===t||"3"===t?d(o.response,e):e._emit("loaderror",null,"Failed loading audio file with status: "+o.status+".")},o.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete u[t],e.load())},h(o)}},h=function(e){try{e.send()}catch(t){e.onerror()}},d=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},r=function(e){e&&t._sounds.length>0?(u[t._src]=e,f(t,e)):n()};"undefined"!==typeof Promise&&1===s.ctx.decodeAudioData.length?s.ctx.decodeAudioData(e).then(r).catch(n):s.ctx.decodeAudioData(e,r,n)},f=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},p=function(){if(s.usingWebAudio){try{"undefined"!==typeof AudioContext?s.ctx=new AudioContext:"undefined"!==typeof webkitAudioContext?s.ctx=new webkitAudioContext:s.usingWebAudio=!1}catch(i){s.usingWebAudio=!1}s.ctx||(s.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(s._navigator&&s._navigator.platform),t=s._navigator&&s._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var r=/safari/.test(s._navigator&&s._navigator.userAgent.toLowerCase());s._navigator&&!r&&(s.usingWebAudio=!1)}s.usingWebAudio&&(s.masterGain="undefined"===typeof s.ctx.createGain?s.ctx.createGainNode():s.ctx.createGain(),s.masterGain.gain.setValueAtTime(s._muted?0:s._volume,s.ctx.currentTime),s.masterGain.connect(s.ctx.destination)),s._setup()}};r=[],i=function(){return{Howler:s,Howl:a}}.apply(t,r),void 0===i||(e.exports=i),t.Howler=s,t.Howl=a,"undefined"!==typeof n?(n.HowlerGlobal=o,n.Howler=s,n.Howl=a,n.Sound=c):"undefined"!==typeof window&&(window.HowlerGlobal=o,window.Howler=s,window.Howl=a,window.Sound=c)})(),
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var t=this;if(!t.ctx||!t.ctx.listener)return t;for(var n=t._howls.length-1;n>=0;n--)t._howls[n].stereo(e);return t},HowlerGlobal.prototype.pos=function(e,t,n){var r=this;return r.ctx&&r.ctx.listener?(t="number"!==typeof t?r._pos[1]:t,n="number"!==typeof n?r._pos[2]:n,"number"!==typeof e?r._pos:(r._pos=[e,t,n],"undefined"!==typeof r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,t,n,r,i,o){var s=this;if(!s.ctx||!s.ctx.listener)return s;var a=s._orientation;return t="number"!==typeof t?a[1]:t,n="number"!==typeof n?a[2]:n,r="number"!==typeof r?a[3]:r,i="number"!==typeof i?a[4]:i,o="number"!==typeof o?a[5]:o,"number"!==typeof e?a:(s._orientation=[e,t,n,r,i,o],"undefined"!==typeof s.ctx.listener.forwardX?(s.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),s.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),s.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),s.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),s.ctx.listener.upY.setTargetAtTime(i,Howler.ctx.currentTime,.1),s.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):s.ctx.listener.setOrientation(e,t,n,r,i,o),s)},Howl.prototype.init=function(e){return function(t){var n=this;return n._orientation=t.orientation||[1,0,0],n._stereo=t.stereo||null,n._pos=t.pos||null,n._pannerAttr={coneInnerAngle:"undefined"!==typeof t.coneInnerAngle?t.coneInnerAngle:360,coneOuterAngle:"undefined"!==typeof t.coneOuterAngle?t.coneOuterAngle:360,coneOuterGain:"undefined"!==typeof t.coneOuterGain?t.coneOuterGain:0,distanceModel:"undefined"!==typeof t.distanceModel?t.distanceModel:"inverse",maxDistance:"undefined"!==typeof t.maxDistance?t.maxDistance:1e4,panningModel:"undefined"!==typeof t.panningModel?t.panningModel:"HRTF",refDistance:"undefined"!==typeof t.refDistance?t.refDistance:1,rolloffFactor:"undefined"!==typeof t.rolloffFactor?t.rolloffFactor:1},n._onstereo=t.onstereo?[{fn:t.onstereo}]:[],n._onpos=t.onpos?[{fn:t.onpos}]:[],n._onorientation=t.onorientation?[{fn:t.onorientation}]:[],e.call(this,t)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var i="undefined"===typeof Howler.ctx.createStereoPanner?"spatial":"stereo";if("undefined"===typeof n){if("number"!==typeof t)return r._stereo;r._stereo=t,r._pos=[t,0,0]}for(var o=r._getSoundIds(n),s=0;s<o.length;s++){var a=r._soundById(o[s]);if(a){if("number"!==typeof t)return a._stereo;a._stereo=t,a._pos=[t,0,0],a._node&&(a._pannerAttr.panningModel="equalpower",a._panner&&a._panner.pan||e(a,i),"spatial"===i?"undefined"!==typeof a._panner.positionX?(a._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),a._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),a._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):a._panner.setPosition(t,0,0):a._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",a._id)}}return r},Howl.prototype.pos=function(t,n,r,i){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,i)}}),o;if(n="number"!==typeof n?0:n,r="number"!==typeof r?-.5:r,"undefined"===typeof i){if("number"!==typeof t)return o._pos;o._pos=[t,n,r]}for(var s=o._getSoundIds(i),a=0;a<s.length;a++){var c=o._soundById(s[a]);if(c){if("number"!==typeof t)return c._pos;c._pos=[t,n,r],c._node&&(c._panner&&!c._panner.pan||e(c,"spatial"),"undefined"!==typeof c._panner.positionX?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):c._panner.setPosition(t,n,r)),o._emit("pos",c._id)}}return o},Howl.prototype.orientation=function(t,n,r,i){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,i)}}),o;if(n="number"!==typeof n?o._orientation[1]:n,r="number"!==typeof r?o._orientation[2]:r,"undefined"===typeof i){if("number"!==typeof t)return o._orientation;o._orientation=[t,n,r]}for(var s=o._getSoundIds(i),a=0;a<s.length;a++){var c=o._soundById(s[a]);if(c){if("number"!==typeof t)return c._orientation;c._orientation=[t,n,r],c._node&&(c._panner||(c._pos||(c._pos=o._pos||[0,0,-.5]),e(c,"spatial")),"undefined"!==typeof c._panner.orientationX?(c._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),c._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):c._panner.setOrientation(t,n,r)),o._emit("orientation",c._id)}}return o},Howl.prototype.pannerAttr=function(){var t,n,r,i=this,o=arguments;if(!i._webAudio)return i;if(0===o.length)return i._pannerAttr;if(1===o.length){if("object"!==typeof o[0])return r=i._soundById(parseInt(o[0],10)),r?r._pannerAttr:i._pannerAttr;t=o[0],"undefined"===typeof n&&(t.pannerAttr||(t.pannerAttr={coneInnerAngle:t.coneInnerAngle,coneOuterAngle:t.coneOuterAngle,coneOuterGain:t.coneOuterGain,distanceModel:t.distanceModel,maxDistance:t.maxDistance,refDistance:t.refDistance,rolloffFactor:t.rolloffFactor,panningModel:t.panningModel}),i._pannerAttr={coneInnerAngle:"undefined"!==typeof t.pannerAttr.coneInnerAngle?t.pannerAttr.coneInnerAngle:i._coneInnerAngle,coneOuterAngle:"undefined"!==typeof t.pannerAttr.coneOuterAngle?t.pannerAttr.coneOuterAngle:i._coneOuterAngle,coneOuterGain:"undefined"!==typeof t.pannerAttr.coneOuterGain?t.pannerAttr.coneOuterGain:i._coneOuterGain,distanceModel:"undefined"!==typeof t.pannerAttr.distanceModel?t.pannerAttr.distanceModel:i._distanceModel,maxDistance:"undefined"!==typeof t.pannerAttr.maxDistance?t.pannerAttr.maxDistance:i._maxDistance,refDistance:"undefined"!==typeof t.pannerAttr.refDistance?t.pannerAttr.refDistance:i._refDistance,rolloffFactor:"undefined"!==typeof t.pannerAttr.rolloffFactor?t.pannerAttr.rolloffFactor:i._rolloffFactor,panningModel:"undefined"!==typeof t.pannerAttr.panningModel?t.pannerAttr.panningModel:i._panningModel})}else 2===o.length&&(t=o[0],n=parseInt(o[1],10));for(var s=i._getSoundIds(n),a=0;a<s.length;a++)if(r=i._soundById(s[a]),r){var c=r._pannerAttr;c={coneInnerAngle:"undefined"!==typeof t.coneInnerAngle?t.coneInnerAngle:c.coneInnerAngle,coneOuterAngle:"undefined"!==typeof t.coneOuterAngle?t.coneOuterAngle:c.coneOuterAngle,coneOuterGain:"undefined"!==typeof t.coneOuterGain?t.coneOuterGain:c.coneOuterGain,distanceModel:"undefined"!==typeof t.distanceModel?t.distanceModel:c.distanceModel,maxDistance:"undefined"!==typeof t.maxDistance?t.maxDistance:c.maxDistance,refDistance:"undefined"!==typeof t.refDistance?t.refDistance:c.refDistance,rolloffFactor:"undefined"!==typeof t.rolloffFactor?t.rolloffFactor:c.rolloffFactor,panningModel:"undefined"!==typeof t.panningModel?t.panningModel:c.panningModel};var u=r._panner;u?(u.coneInnerAngle=c.coneInnerAngle,u.coneOuterAngle=c.coneOuterAngle,u.coneOuterGain=c.coneOuterGain,u.distanceModel=c.distanceModel,u.maxDistance=c.maxDistance,u.refDistance=c.refDistance,u.rolloffFactor=c.rolloffFactor,u.panningModel=c.panningModel):(r._pos||(r._pos=i._pos||[0,0,-.5]),e(r,"spatial"))}return i},Sound.prototype.init=function(e){return function(){var t=this,n=t._parent;t._orientation=n._orientation,t._stereo=n._stereo,t._pos=n._pos,t._pannerAttr=n._pannerAttr,e.call(this),t._stereo?n.stereo(t._stereo):t._pos&&n.pos(t._pos[0],t._pos[1],t._pos[2],t._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var t=this,n=t._parent;return t._orientation=n._orientation,t._stereo=n._stereo,t._pos=n._pos,t._pannerAttr=n._pannerAttr,t._stereo?n.stereo(t._stereo):t._pos?n.pos(t._pos[0],t._pos[1],t._pos[2],t._id):t._panner&&(t._panner.disconnect(0),t._panner=void 0,n._refreshBuffer(t)),e.call(this)}}(Sound.prototype.reset);var e=function(e,t){t=t||"spatial","spatial"===t?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,"undefined"!==typeof e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),"undefined"!==typeof e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}()}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("35a1"),c=n("2a62"),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var l,h,d,f,p,m,g,v=n&&n.that,y=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),w=s(t,v,1+y+_),O=function(e){return l&&c(l),new u(!0,e)},T=function(e){return y?(r(e),_?w(e[0],e[1],O):w(e[0],e[1])):_?w(e,O):w(e)};if(b)l=e;else{if(h=a(e),"function"!=typeof h)throw TypeError("Target is not iterable");if(i(h)){for(d=0,f=o(e.length);f>d;d++)if(p=T(e[d]),p&&p instanceof u)return p;return new u(!1)}l=h.call(e)}m=l.next;while(!(g=m.call(l)).done){try{p=T(g.value)}catch(E){throw c(l),E}if("object"==typeof p&&p&&p instanceof u)return p}return new u(!1)}},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("577e"),s=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,l=u[c],h=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(h||d)&&r(RegExp.prototype,c,(function(){var e=i(this),t=o(e.source),n=e.flags,r=o(void 0===n&&e instanceof RegExp&&!("flags"in u)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"260b":function(e,t,n){"use strict";var r=n("5606");n.d(t,"a",(function(){return r["f"]}));var i="firebase",o="9.0.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2909:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){if(Array.isArray(e))return r(e)}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0");function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||o(e)||s(e)||a()}},"2a62":function(e,t,n){var r=n("825a");e.exports=function(e){var t=e["return"];if(void 0!==t)return r(t.call(e)).value}},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("d039"),u=n("0366"),l=n("1be4"),h=n("cc12"),d=n("1cdc"),f=n("605d"),p=a.setImmediate,m=a.clearImmediate,g=a.process,v=a.MessageChannel,y=a.Dispatch,b=0,_={},w="onreadystatechange";try{r=a.location}catch(A){}var O=function(e){if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},T=function(e){return function(){O(e)}},E=function(e){O(e.data)},I=function(e){a.postMessage(String(e),r.protocol+"//"+r.host)};p&&m||(p=function(e){var t=[],n=arguments.length,r=1;while(n>r)t.push(arguments[r++]);return _[++b]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},i(b),b},m=function(e){delete _[e]},f?i=function(e){g.nextTick(T(e))}:y&&y.now?i=function(e){y.now(T(e))}:v&&!d?(o=new v,s=o.port2,o.port1.onmessage=E,i=u(s.postMessage,s,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&r&&"file:"!==r.protocol&&!c(I)?(i=I,a.addEventListener("message",E,!1)):i=w in h("script")?function(e){l.appendChild(h("script"))[w]=function(){l.removeChild(this),O(e)}}:function(e){setTimeout(T(e),0)}),e.exports={set:p,clear:m}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");e.exports=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||i[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},"3aa8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return y}));
/**
  * vee-validate v4.4.7
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
const r={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},i=e=>{if(e)return Array.isArray(e)?e[0]:e.locale};function o(e,t){return Array.isArray(e)?e[0]:e[t]}function s(e){return null===e||void 0===e||""===e||!(!Array.isArray(e)||0!==e.length)}const a=(e,t)=>{if(s(e))return!0;const n=i(t);if(Array.isArray(e))return e.every(e=>a(e,{locale:n}));const o=String(e);return n?(r[n]||r.en).test(o):Object.keys(r).some(e=>r[e].test(o))};const c=(e,t)=>{const n=o(t,"target");return String(e)===String(n)};const u=e=>{if(s(e))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(e=>t.test(String(e))):t.test(String(e))};function l(e){return null===e||void 0===e}function h(e){return Array.isArray(e)&&0===e.length}const d=(e,t)=>{if(s(e))return!0;const n=o(t,"length");return Array.isArray(e)?e.every(e=>d(e,{length:n})):String(e).length<=Number(n)},f=(e,t)=>{if(s(e))return!0;const n=o(t,"max");return Array.isArray(e)?e.length>0&&e.every(e=>f(e,{max:n})):Number(e)<=Number(n)},p=(e,t)=>{if(s(e))return!0;const n=o(t,"length");return Array.isArray(e)?e.every(e=>p(e,{length:n})):String(e).length>=Number(n)},m=(e,t)=>{if(s(e))return!0;const n=o(t,"min");return Array.isArray(e)?e.length>0&&e.every(e=>m(e,{min:n})):Number(e)>=Number(n)},g=(e,t)=>!!s(e)||(Array.isArray(e)?e.every(e=>g(e,t)):Array.from(t).some(t=>t==e)),v=(e,t)=>!!s(e)||!g(e,t),y=e=>!l(e)&&!h(e)&&!1!==e&&!!String(e).trim().length},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"setupDevtoolsPlugin",(function(){return o}));var r=n("abc5"),i=n("b774");function o(e,t){const n=Object(r["a"])();if(n)n.emit(i["a"],e,t);else{const n=Object(r["b"])(),i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t})}}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("861d");e.exports=function(e,t){var n,i;if("string"===t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if("string"!==t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c.length),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),u=n("35a1");e.exports=function(e){var t,n,l,h,d,f,p=i(e),m="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,y=void 0!==v,b=u(p),_=0;if(y&&(v=r(v,g>2?arguments[2]:void 0,2)),void 0==b||m==Array&&s(b))for(t=a(p.length),n=new m(t);t>_;_++)f=y?v(p[_],_):p[_],c(n,_,f);else for(h=b.call(p),d=h.next,n=new m;!(l=d.call(h)).done;_++)f=y?o(h,v,[l.value,_],!0):l.value,c(n,_,f);return n.length=_,n}},"4e82":function(e,t,n){"use strict";var r=n("23e7"),i=n("1c0b"),o=n("7b0b"),s=n("50c4"),a=n("577e"),c=n("d039"),u=n("addb"),l=n("a640"),h=n("04d1"),d=n("d998"),f=n("2d00"),p=n("512c"),m=[],g=m.sort,v=c((function(){m.sort(void 0)})),y=c((function(){m.sort(null)})),b=l("sort"),_=!c((function(){if(f)return f<70;if(!(h&&h>3)){if(d)return!0;if(p)return p<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:t+r,v:n})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),w=v||!y||!b||!_,O=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:a(t)>a(n)?1:-1}};r({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&i(e);var t=o(this);if(_)return void 0===e?g.call(t):g.call(t,e);var n,r,a=[],c=s(t.length);for(r=0;r<c;r++)r in t&&a.push(t[r]);a=u(a,O(e)),n=a.length,r=0;while(r<n)t[r]=a[r++];while(r<c)delete t[r++];return t}})},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"512c":function(e,t,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5135:function(e,t,n){var r=n("7b0b"),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return te})),n.d(t,"c",(function(){return ee})),n.d(t,"d",(function(){return Z})),n.d(t,"e",(function(){return Y}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["B"])({data:t}),e.strict&&_(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;v(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;y(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function v(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function y(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function _(e){Object(r["N"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var T="vuex bindings",E="vuex:mutations",I="vuex:actions",A="vuex",S=0;function k(e,t){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[T]},(function(n){n.addTimelineLayer({id:E,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:x}),n.addInspector({id:A,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===A)if(n.filter){var r=[];D(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[P(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===A){var r=n.nodeId;g(t,r),n.state=L(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===A){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(A),n.sendInspectorState(A),n.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=S++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var x=8702998,j=6710886,C=16777215,R={label:"namespaced",textColor:C,backgroundColor:j};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function P(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return P(e._children[n],t+n+"/")}))}}function D(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){D(e,t._children[i],n,r+i+"/")}))}function L(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=M(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:U((function(){return o[e]}))}}))}return i}function M(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){s(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,B);var q=function(e){this.register([],e,!1)};function $(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(e.concat(r),t.getChild(r),n.modules[r])}}q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},q.prototype.update=function(e){$([],this.root,e)},q.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var i=new V(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var G={assert:function(e){return"function"===typeof e},expected:"function"},H={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:G,mutations:G,actions:H};function K(e,t){Object.keys(z).forEach((function(n){if(t[n]){var r=z[n];s(t[n],(function(t,i){u(r.assert(t),W(e,n,i,t,r.expected))}))}}))}function W(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function J(e){return new X(e)}var X=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new q(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};X.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&k(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},X.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},X.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},X.prototype.watch=function(e,t,n){var i=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["N"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},X.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},X.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},X.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},X.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},X.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},X.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(X.prototype,Q);var Y=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),Z=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=oe(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ee=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),te=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=oe(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ne(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||a(e)}function ie(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5606:function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return $})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return X}));var r=n("ffa6"),i=n("abfd"),o=n("a8e9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.0",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",I="@firebase/messaging-compat",A="@firebase/performance",S="@firebase/performance-compat",k="@firebase/remote-config",x="@firebase/remote-config-compat",j="@firebase/storage",C="@firebase/storage-compat",R="@firebase/firestore",N="@firebase/firestore-compat",P="firebase",D="9.0.0",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[I]:"fire-fcm-compat",[A]:"fire-perf",[S]:"fire-perf-compat",[k]:"fire-rc",[x]:"fire-rc-compat",[j]:"fire-gcs",[C]:"fire-gcs-compat",[R]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},F=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())V(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function $(e,t,n=L){q(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=D;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(e,s.options)&&Object(o["g"])(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new z(e,n,a);return F.set(i,c),c}function J(e=L){const t=F.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){B(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),X(c,u,e),X("fire-js","")}Q()},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.16.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},"577e":function(e,t,n){var r=n("d9b5");e.exports=function(e){if(r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},"588e":function(e,t,n){"use strict";n.d(t,"a",(function(){return mt})),n.d(t,"b",(function(){return pt})),n.d(t,"c",(function(){return vt})),n.d(t,"d",(function(){return gt})),n.d(t,"e",(function(){return ft}));var r,i=n("5606"),o=n("a8e9"),s=n("ffa6");(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends o["c"]{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new h("unknown",e)}function p(e){return new h("object-not-found","Object '"+e+"' does not exist.")}function m(e){return new h("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",e)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(e){return new h("unauthorized","User does not have permission to access '"+e+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new h("canceled","User canceled the upload/download.")}function w(e){return new h("invalid-url","Invalid URL '"+e+"'.")}function O(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function T(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function E(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h("no-download-url","The given file does not have any download URLs.")}function S(e){return new h("invalid-argument",e)}function k(){return new h("app-deleted","The Firebase app was deleted.")}function x(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function C(e){throw new h("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw C("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw C("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw C("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw C("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function N(){return new R}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{createConnection(){return N()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=D.makeFromUrl(e,t)}catch(r){return new D(e,"")}if(""===n.path)return n;throw O(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",s=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:s,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new D(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t,n){let r=1,i=null,o=!1,s=0;function a(){return 2===s}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function l(t){i=setTimeout(()=>{i=null,e(h,a())},t)}function h(e,...t){if(c)return;if(e)return void u.call(null,e,...t);const n=a()||o;if(n)return void u.call(null,e,...t);let i;r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),l(i)}let d=!1;function f(e){d||(d=!0,c||(null!==i?(e||(s=2),clearTimeout(i),l(0)):e||(s=1)))}return l(0),setTimeout(()=>{o=!0,f(!0)},n),f}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e}function V(e){return"function"===typeof e}function B(e){return"object"===typeof e&&!Array.isArray(e)}function q(e){return"string"===typeof e||e instanceof String}function $(e){return G()&&e instanceof Blob}function G(){return"undefined"!==typeof Blob}function H(e,t,n,r){if(r<t)throw S(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw S(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=t.match(/^(\w+):\/\/.+/),r=null===n||void 0===n?void 0:n[1];let i=t;return null==r&&(i="https://"+t),`${i}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n,r,i,o,s,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=s,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=this;function t(t,n){if(n)return void t(!1,new J(!1,null,!0));const i=e.pool_.createConnection();function o(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=i,null!==e.progressCallback_&&i.addUploadProgressListener(o),i.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{null!==e.progressCallback_&&i.removeUploadProgressListener(o),e.pendingConnection_=null;const n=i.getErrorCode()===r.NO_ERROR,s=i.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=i.getErrorCode()===r.ABORT;return void t(!1,new J(!1,null,e))}const a=-1!==e.successCodes_.indexOf(s);t(!0,new J(a,i))})}function n(t,n){const r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(o,o.getResponseText());U(t)?r(t):r()}catch(s){i(s)}else if(null!==o){const t=f();t.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,t)):i(t)}else if(n.canceled){const t=e.appDelete_?k():_();i(t)}else{const e=b();i(e)}}this.canceled_?n(!1,new J(!1,null,!0)):this.backoffId_=M(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class J{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function X(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Y(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Z(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ee(e,t,n,r,i,o){const s=K(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return Y(c,t),X(c,n),Q(c,o),Z(c,r),new W(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ne(...e){const t=te();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(G())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function re(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class se{constructor(e,t){this.data=e,this.contentType=t||null}}function ae(e,t){switch(e){case oe.RAW:return new se(ce(t));case oe.BASE64:case oe.BASE64URL:return new se(le(e,t));case oe.DATA_URL:return new se(de(t),fe(t))}throw f()}function ce(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ue(e){let t;try{t=decodeURIComponent(e)}catch(n){throw j(oe.DATA_URL,"Malformed data URL.")}return ce(t)}function le(e,t){switch(e){case oe.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw j(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case oe.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw j(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ie(t)}catch(i){throw j(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class he{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw j(oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=pe(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function de(e){const t=new he(e);return t.base64?le(oe.BASE64,t.rest):ue(t.rest)}function fe(e){const t=new he(e);return t.contentType}function pe(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){let n=0,r="";$(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($(this.data_)){const n=this.data_,r=re(n,e,t);return null===r?null:new me(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new me(n,!0)}}static getBlob(...e){if(G()){const t=e.map(e=>e instanceof me?e.data_:e);return new me(ne.apply(null,t))}{const t=e.map(e=>q(e)?ae(oe.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new me(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){let t;try{t=JSON.parse(e)}catch(n){return null}return B(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ye(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function be(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){return t}class we{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||_e}}let Oe=null;function Te(e){return!q(e)||e.length<2?e:be(e)}function Ee(){if(Oe)return Oe;const e=[];function t(e,t){return Te(t)}e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));const n=new we("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new we("size");return i.xform=r,e.push(i),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Oe=e,Oe}function Ie(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new D(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ae(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return Ie(r,e),r}function Se(e,t,n){const r=ge(t);if(null===r)return null;const i=r;return Ae(e,i,n)}function ke(e,t,n){const r=ge(t);if(null===r)return null;if(!q(r["downloadTokens"]))return null;const i=r["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,s=i.split(","),a=s.map(t=>{const r=e["bucket"],i=e["fullPath"],s="/b/"+o(r)+"/o/"+o(i),a=z(s,n),c=K({alt:"media",token:t});return a+c});return a[0]}function xe(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){if(!e)throw f()}function Re(e,t){function n(n,r){const i=Se(e,r,t);return Ce(null!==i),i}return n}function Ne(e,t){function n(n,r){const i=Se(e,r,t);return Ce(null!==i),ke(i,r,e.host)}return n}function Pe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?v():g():402===t.getStatus()?m(e.bucket):403===t.getStatus()?y(e.path):n,r.serverResponse=n.serverResponse,r}return t}function De(e){const t=Pe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=p(e.path)),i.serverResponse=r.serverResponse,i}return n}function Le(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host),o="GET",s=e.maxOperationRetryTime,a=new je(i,o,Re(e,n),s);return a.errorHandler=De(t),a}function Me(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host),o="GET",s=e.maxOperationRetryTime,a=new je(i,o,Ne(e,n),s);return a.errorHandler=De(t),a}function Fe(e,t){const n=t.fullServerUrl(),r=z(n,e.host),i="DELETE",o=e.maxOperationRetryTime;function s(e,t){}const a=new je(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=De(t),a}function Ue(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ve(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ue(null,t)),r}function Be(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Ve(t,r,i),l=xe(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=me.getBlob(h,r,d);if(null===f)throw E();const p={name:u["fullPath"]},m=z(o,e.host),g="POST",v=e.maxUploadRetryTime,y=new je(m,g,Re(e,n),v);return y.urlParams=p,y.headers=s,y.body=f.uploadData(),y.errorHandler=Pe(t),y}class qe{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function $e(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Ce(!1)}const r=t||["active"];return Ce(!!n&&-1!==r.indexOf(n)),n}function Ge(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=Ve(t,r,i),a={name:s["fullPath"]},c=z(o,e.host),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=xe(s,n),d=e.maxUploadRetryTime;function f(e){let t;$e(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ce(!1)}return Ce(q(t)),t}const p=new je(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Pe(t),p}function He(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(e){const t=$e(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Ce(!1)}n||Ce(!1);const i=Number(n);return Ce(!isNaN(i)),new qe(i,r.size(),"final"===t)}const s="POST",a=e.maxUploadRetryTime,c=new je(n,s,o,a);return c.headers=i,c.errorHandler=Pe(t),c}const ze=262144;function Ke(e,t,n,r,i,o,s,a){const c=new qe(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw I();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw E();function g(e,n){const i=$e(e,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===i?Re(t,o)(e,n):null,new qe(s,a,"final"===i,u)}const v="POST",y=t.maxUploadRetryTime,b=new je(n,v,g,y);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Pe(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Je(e){switch(e){case"running":case"pausing":case"canceling":return We.RUNNING;case"paused":return We.PAUSED;case"success":return We.SUCCESS;case"canceled":return We.CANCELED;case"error":return We.ERROR;default:return We.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,n){const r=V(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ee(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Ge(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=He(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ze*this._chunkMultiplier,t=new qe(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Ke(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,r,i);this._request=s,s.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=ze*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Le(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=Be(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Je(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new Xe(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Je(this._state)){case We.SUCCESS:Qe(this._resolve.bind(null,this.snapshot))();break;case We.CANCELED:case We.ERROR:const t=this._reject;Qe(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Je(this._state);switch(t){case We.RUNNING:case We.PAUSED:e.next&&Qe(e.next.bind(e,this.snapshot))();break;case We.SUCCESS:e.complete&&Qe(e.complete.bind(e))();break;case We.CANCELED:case We.ERROR:e.error&&Qe(e.error.bind(e,this._error))();break;default:e.error&&Qe(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this._service=e,this._location=t instanceof D?t:D.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ze(e,t)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=ve(this._location.path);if(null===e)return null;const t=new D(this._location.bucket,e);return new Ze(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw x(e)}}function et(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ye(e,new me(t),n)}async function tt(e){e._throwIfRoot("getDownloadURL");const t=Me(e.storage,e._location,Ee());return(await e.storage.makeRequestWithTokens(t)).getPromise().then(e=>{if(null===e)throw A();return e})}async function nt(e){e._throwIfRoot("deleteObject");const t=Fe(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function rt(e,t){const n=ye(e._location.path,t),r=new D(e._location.bucket,n);return new Ze(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){return/^[A-Za-z]+:\/\//.test(e)}function ot(e,t){return new Ze(e,t)}function st(e,t){if(e instanceof ut){const n=e;if(null==n._bucket)throw T();const r=new Ze(n,n._bucket);return null!=t?st(r,t):r}return void 0!==t?rt(e,t):e}function at(e,t){if(t&&it(t)){if(e instanceof ut)return ot(e,t);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return st(e,t)}function ct(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:D.makeFromBucketSpec(n,e)}class ut{constructor(e,t,n,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=a,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?D.makeFromBucketSpec(i,this._host):ct(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=ct(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ze(this,e)}_makeRequest(e,t,n){if(this._deleted)return new L(k());{const r=ee(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}const lt="@firebase/storage",ht="0.8.0",dt="storage";function ft(e,t,n){return e=Object(o["i"])(e),et(e,t,n)}function pt(e){return e=Object(o["i"])(e),tt(e)}function mt(e){return e=Object(o["i"])(e),nt(e)}function gt(e,t){return e=Object(o["i"])(e),at(e,t)}function vt(e=Object(i["e"])(),t){e=Object(o["i"])(e);const n=Object(i["b"])(e,dt),r=n.getImmediate({identifier:t});return r}function yt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ut(n,r,o,new P,t,i["a"])}function bt(){Object(i["c"])(new s["a"](dt,yt,"PUBLIC").setMultipleInstances(!0)),Object(i["g"])(lt,ht)}bt()},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("577e"),o=n("5899"),s="["+o+"]",a=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e){return function(t){var n=i(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;e.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||o(l({},t)).join("")!=i}))?function(e,t){var n=c(e),i=arguments.length,l=1,h=s.f,d=a.f;while(i>l){var f,p=u(arguments[l++]),m=h?o(p).concat(h(p)):o(p),g=m.length,v=0;while(g>v)f=m[v++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:l},6547:function(e,t,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(e){return function(t,n){var s,a,c=i(o(t)),u=r(n),l=c.length;return u<0||u>=l?e?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):s:e?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new m),b=y.get,_=y.has,w=y.set;r=function(e,t){if(_.call(y,e))throw new TypeError(p);return t.facade=e,w.call(y,e,t),t},i=function(e){return b.call(y,e)||{}},o=function(e){return _.call(y,e)}}else{var O=d("state");f[O]=!0,r=function(e,t){if(l(e,O))throw new TypeError(p);return t.facade=e,u(e,O,t),t},i=function(e){return l(e,O)?e[O]:{}},o=function(e){return l(e,O)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:v}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return G}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function y(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=A(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function A(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,k;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(k||(k={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const j=/^[^#]+#/;function C(e,t){return e.replace(j,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function D(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function F(e){const t=L.get(e);return L.delete(e),t}let U=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function B(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?k.forward:k.back:k.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:N()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function $(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=f({},q(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function G(e){e=x(e);const t=$(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:C.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function H(e){return"string"===typeof e||e&&"object"===typeof e}function z(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return f(new Error,{type:e,[W]:!0},t)}function Q(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||Y;if(h!==Y){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:m}function s(e){if(z(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ge=/&/g,ve=/\//g,ye=/=/g,be=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Te=/%5E/g,Ee=/%60/g,Ie=/%7B/g,Ae=/%7C/g,Se=/%7D/g,ke=/%20/g;function xe(e){return encodeURI(""+e).replace(Ae,"|").replace(we,"[").replace(Oe,"]")}function je(e){return xe(e).replace(Ie,"{").replace(Se,"}").replace(Te,"^")}function Ce(e){return xe(e).replace(_e,"%2B").replace(ke,"+").replace(me,"%23").replace(ge,"%26").replace(Ee,"`").replace(Ie,"{").replace(Se,"}").replace(Te,"^")}function Re(e){return Ce(e).replace(ye,"%3D")}function Ne(e){return xe(e).replace(me,"%23").replace(be,"%3F")}function Pe(e){return null==e?"":Ne(e).replace(ve,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),o=De(n<0?e:e.slice(0,n)),s=n<0?null:De(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ce(e)):[r&&Ce(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):H(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Be(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(qe(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(Ve(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,o,e)()}))}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(r["o"])(c),n=Object(r["o"])(u),i=Object(r["c"])(()=>t.resolve(Object(r["J"])(e.to))),o=Object(r["c"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=We(e[t-2]);return t>1&&We(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["c"])(()=>o.value>-1&&Ke(n.params,i.value.params)),a=Object(r["c"])(()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,i.value.params));function l(n={}){return ze(n)?t[Object(r["J"])(e.replace)?"replace":"push"](Object(r["J"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["c"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const Ge=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Object(r["B"])($e(e)),{options:i}=Object(r["o"])(c),o=Object(r["c"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["n"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Ge;function ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function We(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["o"])(l),o=Object(r["c"])(()=>e.route||i.value),c=Object(r["o"])(a,0),u=Object(r["c"])(()=>o.value.matched[c]);Object(r["A"])(a,c+1),Object(r["A"])(s,u),Object(r["A"])(l,o);const h=Object(r["C"])();return Object(r["N"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["n"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ye=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Le,i=e.stringifyQuery||Me,o=e.history;const s=Ue(),a=Ue(),d=Ue(),g=Object(r["G"])(K);let v=K;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Pe),T=p.bind(null,De);function E(e,n){let r,i;return z(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function A(){return t.getRoutes().map(e=>e.record)}function k(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=f({},r||g.value),"string"===typeof e){const i=y(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:T(s.params),hash:De(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:y(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(T(a.params));const u=b(i,f({},e,{hash:je(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Me?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function j(e){return"string"===typeof e?y(n,e,g.value.path):f({},e)}function C(e,t){if(v!==e)return X(8,{from:t,to:e})}function R(e){return V(e)}function L(e){return R(f(j(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=j(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=x(e),r=g.value,o=e.state,s=e.force,a=!0===e.replace,c=U(n);if(c)return V(f(j(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(e=>Q(e)?e:ee(e,u,r)).then(e=>{if(e){if(Q(e,2))return V(f(j(e.to),{state:o,force:s,replace:a}),t||u)}else e=G(u,r,!0,a,o);return $(u,r,e),e})}function B(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,o]=tt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=B.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Be(o,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function $(e,t,n){for(const r of d.list())r(e,t,n)}function G(e,t,n,r,i){const s=C(e,t);if(s)return s;const a=t===K,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),g.value=e,re(e,t,n,a),ne()}let H;function W(){H=o.listen((e,t,n)=>{const r=x(e),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(m);v=r;const s=g.value;h&&M(D(s.fullPath,n.delta),N()),q(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(V(e.to,r).then(e=>{Q(e,20)&&!n.delta&&n.type===S.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||G(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===S.pop&&Q(e,20)&&o.go(-1,!1)),$(r,s,e)}).catch(m)})}let J,Y=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&g.value!==K?Promise.resolve():new Promise((e,t)=>{Y.add([e,t])})}function ne(e){J||(J=!0,W(),Y.list().forEach(([t,n])=>e?n(e):t()),Y.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&F(D(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["r"])().then(()=>s(t,n,a)).then(e=>e&&P(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:g,addRoute:E,removeRoute:I,hasRoute:k,getRoutes:A,resolve:x,options:e,push:R,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",Ye),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["J"])(g)}),h&&!oe&&g.value===K&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in K)n[o]=Object(r["c"])(()=>g.value[o]);e.provide(c,t),e.provide(u,Object(r["B"])(n)),e.provide(l,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(v=K,H&&H(),g.value=K,oe=!1,J=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(e.exports=function(e,t,n,a){var c,u=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),c=l(n),c.source||(c.source=h.join("string"==typeof t?t:""))),e!==r?(u?!f&&e[t]&&(d=!0):delete e[t],d?e[t]=n:i(e,t,n)):d?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,s;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(e,s),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.d(t,"c",(function(){return We})),n.d(t,"p",(function(){return Me})),n.d(t,"B",(function(){return Ie})),n.d(t,"C",(function(){return Fe})),n.d(t,"G",(function(){return Ue})),n.d(t,"I",(function(){return ze})),n.d(t,"J",(function(){return qe})),n.d(t,"s",(function(){return r["H"]})),n.d(t,"t",(function(){return r["I"]})),n.d(t,"H",(function(){return r["K"]})),n.d(t,"a",(function(){return Bn})),n.d(t,"e",(function(){return Zn})),n.d(t,"f",(function(){return dr})),n.d(t,"g",(function(){return Yn})),n.d(t,"h",(function(){return or})),n.d(t,"i",(function(){return hr})),n.d(t,"j",(function(){return lr})),n.d(t,"k",(function(){return sr})),n.d(t,"l",(function(){return Ot})),n.d(t,"m",(function(){return Ir})),n.d(t,"n",(function(){return Ri})),n.d(t,"o",(function(){return ht})),n.d(t,"q",(function(){return gr})),n.d(t,"r",(function(){return pi})),n.d(t,"u",(function(){return At})),n.d(t,"v",(function(){return Ft})),n.d(t,"w",(function(){return St})),n.d(t,"x",(function(){return Dt})),n.d(t,"y",(function(){return Ut})),n.d(t,"z",(function(){return Kn})),n.d(t,"A",(function(){return lt})),n.d(t,"D",(function(){return vr})),n.d(t,"E",(function(){return Ln})),n.d(t,"F",(function(){return Fn})),n.d(t,"M",(function(){return Hr})),n.d(t,"N",(function(){return Si})),n.d(t,"O",(function(){return tt})),n.d(t,"P",(function(){return wn})),n.d(t,"b",(function(){return fo})),n.d(t,"d",(function(){return Bo})),n.d(t,"K",(function(){return jo})),n.d(t,"L",(function(){return Lo})),n.d(t,"Q",(function(){return Do}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let y;const b=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),A(),m=1<<++p,p<=g?h(this):O(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,S(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const E=[];function I(){E.push(T),T=!1}function A(){E.push(T),T=!0}function S(){const e=E.pop();T=void 0===e||e}function k(e,t,n){if(!x())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;j(i,o)}function x(){return T&&void 0!==y}function j(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function C(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["n"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["n"])(e)?Object(r["r"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["s"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["n"])(e)||(u.push(a.get(b)),Object(r["s"])(e)&&u.push(a.get(_)));break;case"set":Object(r["s"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["n"])(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=Object(r["G"])("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["D"])),D=V(),L=V(!1,!0),M=V(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?Oe:we:t?_e:be).get(n))return n;const s=Object(r["n"])(n);if(!e&&s&&Object(r["j"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["D"])(i)?P.has(i):N(i))return a;if(e||k(n,"get",i),t)return a;if(Me(a)){const e=!s||!Object(r["r"])(i);return e?a.value:a}return Object(r["u"])(a)?e?Se(a):Ie(a):a}}const B=$(),q=$(!0);function $(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&(i=Re(i),s=Re(s),!Object(r["n"])(t)&&Me(s)&&!Me(i)))return s.value=i,!0;const a=Object(r["n"])(t)&&Object(r["r"])(n)?Number(n)<t.length:Object(r["j"])(t,n),c=Reflect.set(t,n,i,o);return t===Re(o)&&(a?Object(r["i"])(i,s)&&C(t,"set",n,i,s):C(t,"add",n,i)),c}}function G(e,t){const n=Object(r["j"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&C(e,"delete",t,void 0,i),o}function H(e,t){const n=Reflect.has(e,t);return Object(r["D"])(t)&&P.has(t)||k(e,"has",t),n}function z(e){return k(e,"iterate",Object(r["n"])(e)?"length":b),Reflect.ownKeys(e)}const K={get:D,set:B,deleteProperty:G,has:H,ownKeys:z},W={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},K,{get:L,set:q}),X=e=>Object(r["u"])(e)?Ie(e):e,Q=e=>Object(r["u"])(e)?Se(e):e,Y=e=>e,Z=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),o=Re(t);t!==o&&!n&&k(i,"get",t),!n&&k(i,"get",o);const{has:s}=Z(i),a=r?Y:n?Q:X;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function te(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return e!==i&&!t&&k(r,"has",e),!t&&k(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ne(e,t=!1){return e=e["__v_raw"],!t&&k(Re(e),"iterate",b),Reflect.get(e,"size",e)}function re(e){e=Re(e);const t=Re(this),n=Z(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function ie(e,t){t=Re(t);const n=Re(this),{has:i,get:o}=Z(n);let s=i.call(n,e);s||(e=Re(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["i"])(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function oe(e){const t=Re(this),{has:n,get:r}=Z(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&C(t,"delete",e,void 0,o),s}function se(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ae(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Re(o),a=t?Y:e?Q:X;return!e&&k(s,"iterate",b),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ce(e,t,n){return function(...i){const o=this["__v_raw"],s=Re(o),a=Object(r["s"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?Y:t?Q:X;return!t&&k(s,"iterate",u?_:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ue(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return ee(this,e)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!1)},t={get(e){return ee(this,e,!1,!0)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!0)},n={get(e){return ee(this,e,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ae(!0,!1)},r={get(e){return ee(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ae(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ce(i,!1,!1),n[i]=ce(i,!0,!1),t[i]=ce(i,!1,!0),r[i]=ce(i,!0,!0)}),[e,n,t,r]}const[he,de,fe,pe]=le();function me(e,t){const n=t?e?pe:fe:e?de:he;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["j"])(n,i)&&i in t?n:t,i,o)}const ge={get:me(!1,!1)},ve={get:me(!1,!0)},ye={get:me(!0,!1)};const be=new WeakMap,_e=new WeakMap,we=new WeakMap,Oe=new WeakMap;function Te(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ee(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Te(Object(r["N"])(e))}function Ie(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,K,ge,be)}function Ae(e){return ke(e,!1,J,ve,_e)}function Se(e){return ke(e,!0,W,ye,we)}function ke(e,t,n,i,o){if(!Object(r["u"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Ee(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function xe(e){return je(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function je(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return xe(e)||je(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Ne(e){return Object(r["g"])(e,"__v_skip",!0),e}function Pe(e){x()&&(e=Re(e),e.dep||(e.dep=c()),j(e.dep))}function De(e,t){e=Re(e),e.dep&&R(e.dep)}const Le=e=>Object(r["u"])(e)?Ie(e):e;function Me(e){return Boolean(e&&!0===e.__v_isRef)}function Fe(e){return Be(e)}function Ue(e){return Be(e,!0)}class Ve{constructor(e,t=!1){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Le(e)}get value(){return Pe(this),this._value}set value(e){e=this._shallow?e:Re(e),Object(r["i"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Le(e),De(this,e))}}function Be(e,t=!1){return Me(e)?e:new Ve(e,t)}function qe(e){return Me(e)?e.value:e}const $e={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ge(e){return xe(e)?e:new Proxy(e,$e)}class He{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function ze(e,t){const n=e[t];return Me(n)?n:new He(e,t)}class Ke{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,De(this))}),this["__v_isReadonly"]=n}get value(){const e=Re(this);return Pe(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t){let n,i;Object(r["o"])(e)?(n=e,i=r["d"]):(n=e.get,i=e.set);const o=new Ke(n,i,Object(r["o"])(e)||!e.set);return o}Promise.resolve();new Set;new Map;Object.create(null),Object.create(null);function Je(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["M"]))}let c;let u=i[c=Object(r["L"])(t)]||i[c=Object(r["L"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["L"])(Object(r["k"])(t))]),u&&Yr(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Yr(l,e,6,o)}}function Xe(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["o"])(e)){const i=e=>{const n=Xe(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["n"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function Qe(e,t){return!(!e||!Object(r["v"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["j"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["j"])(e,Object(r["k"])(t))||Object(r["j"])(e,t))}let Ye=null,Ze=null;function et(e){const t=Ye;return Ye=e,Ze=e&&e.type.__scopeId||null,t}function tt(e,t=Ye,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Xn(-1);const i=et(t),o=e(...n);return et(i),r._d&&Xn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function nt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v;const y=et(e);try{let e;if(4&n.shapeFlag){const t=o||i;v=fr(h.call(t,t,d,s,p,f,m)),e=u}else{const n=t;0,v=fr(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),e=t.props?u:rt(u)}let y=v;if(e&&!1!==g){const t=Object.keys(e),{shapeFlag:n}=y;t.length&&7&n&&(a&&t.some(r["t"])&&(e=it(e,a)),y=ur(y,e))}0,n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),v=y}catch(b){Hn.length=0,Zr(b,e,1),v=sr($n)}return et(y),v}const rt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["v"])(n))&&((t||(t={}))[n]=e[n]);return t},it=(e,t)=>{const n={};for(const i in e)Object(r["t"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function ot(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||st(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?st(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Qe(u,n))return!0}}return!1}function st(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Qe(n,o))return!0}return!1}function at({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const ct=e=>e.__isSuspense;function ut(e,t){t&&t.pendingBranch?Object(r["n"])(e)?t.effects.push(...e):t.effects.push(e):wi(e)}function lt(e,t){if(Er){let n=Er.provides;const r=Er.parent&&Er.parent.provides;r===n&&(n=Er.provides=Object.create(r)),n[e]=t}else 0}function ht(e,t,n=!1){const i=Er||Ye;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["o"])(t)?t.call(i.proxy):t}else 0}function dt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dt(()=>{e.isMounted=!0}),Ft(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],pt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(e,{slots:t}){const n=Ir(),r=dt();let i;return()=>{const o=t.default&&wt(t.default(),!0);if(!o||!o.length)return;const s=Re(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return yt(c);const u=bt(c);if(!u)return yt(c);const l=vt(u,s,r,n);_t(u,l);const h=n.subTree,d=h&&bt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==$n&&(!tr(u,d)||f)){const e=vt(d,s,r,n);if(_t(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},yt(c);"in-out"===a&&u.type!==$n&&(e.delayLeave=(e,t,n)=>{const i=gt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},mt=pt;function gt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function vt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=gt(n,e),w=(e,t)=>{e&&Yr(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=_[b];o&&tr(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=g||c,r=v||u,o=y||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return vt(e,t,n,r)}};return O}function yt(e){if(Et(e))return e=ur(e),e.children=null,e}function bt(e){return Et(e)?e.children?e.children[0]:void 0:e}function _t(e,t){6&e.shapeFlag&&e.component?_t(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Bn?(128&o.patchFlag&&r++,n=n.concat(wt(o.children,t))):(t||o.type!==$n)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Ot(e){return Object(r["o"])(e)?{setup:e,name:e.name}:e}const Tt=e=>!!e.type.__asyncLoader;const Et=e=>e.type.__isKeepAlive;RegExp,RegExp;function It(e,t){return Object(r["n"])(e)?e.some(e=>It(e,t)):Object(r["C"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function At(e,t){kt(e,"a",t)}function St(e,t){kt(e,"da",t)}function kt(e,t,n=Er){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(Rt(t,r,n),n){let e=n.parent;while(e&&e.parent)Et(e.parent.vnode)&&xt(r,t,n,e),e=e.parent}}function xt(e,t,n,i){const o=Rt(t,e,i,!0);Ut(()=>{Object(r["J"])(i[t],o)},n)}function jt(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ct(e){return 128&e.shapeFlag?e.ssContent:e}function Rt(e,t,n=Er,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;I(),Ar(n);const i=Yr(t,n,e,r);return Sr(),S(),i});return r?i.unshift(o):i.push(o),o}}const Nt=e=>(t,n=Er)=>(!Cr||"sp"===e)&&Rt(e,t,n),Pt=Nt("bm"),Dt=Nt("m"),Lt=Nt("bu"),Mt=Nt("u"),Ft=Nt("bum"),Ut=Nt("um"),Vt=Nt("sp"),Bt=Nt("rtg"),qt=Nt("rtc");function $t(e,t=Er){Rt("ec",e,t)}let Gt=!0;function Ht(e){const t=Jt(e),n=e.proxy,i=e.ctx;Gt=!1,t.beforeCreate&&Kt(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:w,render:O,renderTracked:T,renderTriggered:E,errorCaptured:I,serverPrefetch:A,expose:S,inheritAttrs:k,components:x,directives:j,filters:C}=t,R=null;if(l&&zt(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const P in a){const e=a[P];Object(r["o"])(e)&&(i[P]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["u"])(t)&&(e.data=Ie(t))}if(Gt=!0,s)for(const P in s){const e=s[P],t=Object(r["o"])(e)?e.bind(n,n):Object(r["o"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["o"])(e)&&Object(r["o"])(e.set)?e.set.bind(n):r["d"],a=We({get:t,set:o});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Wt(c[r],i,n,r);if(u){const e=Object(r["o"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{lt(t,e[t])})}function N(e,t){Object(r["n"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Kt(h,e,"c"),N(Pt,d),N(Dt,f),N(Lt,p),N(Mt,m),N(At,g),N(St,v),N($t,I),N(qt,T),N(Bt,E),N(Ft,b),N(Ut,w),N(Vt,A),Object(r["n"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=k&&(e.inheritAttrs=k),x&&(e.components=x),j&&(e.directives=j)}function zt(e,t,n=r["d"],i=!1){Object(r["n"])(e)&&(e=en(e));for(const o in e){const n=e[o];let s;s=Object(r["u"])(n)?"default"in n?ht(n.from||o,n.default,!0):ht(n.from||o):ht(n),Me(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Kt(e,t,n){Yr(Object(r["n"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wt(e,t,n,i){const o=i.includes(".")?ji(n,i):()=>n[i];if(Object(r["C"])(e)){const n=t[e];Object(r["o"])(n)&&Si(o,n)}else if(Object(r["o"])(e))Si(o,e.bind(n));else if(Object(r["u"])(e))if(Object(r["n"])(e))e.forEach(e=>Wt(e,t,n,i));else{const i=Object(r["o"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["o"])(i)&&Si(o,i,e)}else 0}function Jt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Xt(c,e,s,!0)),Xt(c,t,s)):c=t,o.set(t,c),c}function Xt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Xt(e,o,n,!0),i&&i.forEach(t=>Xt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Qt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Qt={data:Yt,props:nn,emits:nn,methods:nn,computed:nn,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,destroyed:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:nn,directives:nn,watch:rn,provide:Yt,inject:Zt};function Yt(e,t){return t?e?function(){return Object(r["h"])(Object(r["o"])(e)?e.call(this,this):e,Object(r["o"])(t)?t.call(this,this):t)}:t:e}function Zt(e,t){return nn(en(e),en(t))}function en(e){if(Object(r["n"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tn(e,t){return e?[...new Set([].concat(e,t))]:t}function nn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function rn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=tn(e[r],t[r]);return n}function on(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,nr,1),e.propsDefaults=Object.create(null),an(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Ae(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function sn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Re(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;an(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["j"])(t,s)||(i=Object(r["k"])(s))!==s&&Object(r["j"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=cn(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["j"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["j"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const t=Object(r["e"])(a);o[t]=cn(u,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&C(e,"set","$attrs")}function an(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["y"])(u))continue;const l=t[u];let h;o&&Object(r["j"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:Qe(e.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const t=Re(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=cn(o,t,c,i[c],e,!Object(r["j"])(i,c))}}return c}function cn(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["j"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["o"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(Ar(o),i=r[n]=e.call(null,t),Sr())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["k"])(n)||(i=!0))}return i}function un(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["o"])(e)){const i=e=>{u=!0;const[n,i]=un(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["n"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);ln(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(ln(t)){const n=s[e],i=a[t]=Object(r["n"])(n)||Object(r["o"])(n)?{type:n}:n;if(i){const e=fn(Boolean,i.type),n=fn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["j"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function ln(e){return"$"!==e[0]}function hn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function dn(e,t){return hn(e)===hn(t)}function fn(e,t){return Object(r["n"])(t)?t.findIndex(t=>dn(t,e)):Object(r["o"])(t)&&dn(t,e)?0:-1}const pn=e=>"_"===e[0]||"$stable"===e,mn=e=>Object(r["n"])(e)?e.map(fr):[fr(e)],gn=(e,t,n)=>{const r=tt((...e)=>mn(t(...e)),n);return r._c=!1,r},vn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(pn(o))continue;const n=e[o];if(Object(r["o"])(n))t[o]=gn(o,n,i);else if(null!=n){0;const e=mn(n);t[o]=()=>e}}},yn=(e,t)=>{const n=mn(t);e.slots.default=()=>n},bn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Re(t),Object(r["g"])(t,"_",n)):vn(t,e.slots={})}else e.slots={},t&&yn(e,t);Object(r["g"])(e.slots,nr,1)},_n=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,vn(t,o)),a=t}else t&&(yn(e,t),a={default:1});if(s)for(const r in o)pn(r)||r in a||delete o[r]};function wn(e,t){const n=Ye;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["o"])(e)&&(e={mounted:e,updated:e}),e.deep&&Ci(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function On(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),Yr(c,n,8,[e.el,a,e,t]),S())}}function Tn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let En=0;function In(e,t){return function(n,i=null){null==i||Object(r["u"])(i)||(i=null);const o=Tn(),s=new Set;let a=!1;const c=o.app={_uid:En++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Ni,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["o"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["o"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=sr(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function An(){}const Sn=ut;function kn(e){return xn(e)}function xn(e,t){An();const{insert:n,remove:i,patchProp:o,createElement:s,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=r["d"],cloneNode:p,insertStaticContent:m}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!tr(e,t)&&(r=K(e),q(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case qn:v(e,t,n,r);break;case $n:y(e,t,n,r);break;case Gn:null==e&&b(t,n,r,s);break;case Bn:R(e,t,n,r,i,o,s,a,c);break;default:1&h?T(e,t,n,r,i,o,s,a,c):6&h?N(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,J)}null!=l&&i&&jn(l,e&&e.ref,o,t||e,!t)},v=(e,t,r,i)=>{if(null==e)n(t.el=a(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},y=(e,t,r,i)=>{null==e?n(t.el=c(t.children||""),r,i):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r)},_=({el:e,anchor:t},r,i)=>{let o;while(e&&e!==t)o=d(e),n(e,r,i),e=o;n(t,r,i)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=d(e),i(e),e=n;i(t)},T=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?E(t,n,r,i,o,s,a,c):x(e,t,i,o,s,a,c)},E=(e,t,i,a,c,u,h,d)=>{let f,m;const{type:g,props:v,shapeFlag:y,transition:b,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==p&&-1===_)f=e.el=p(e.el);else{if(f=e.el=s(e.type,u,v&&v.is,v),8&y?l(f,e.children):16&y&&k(e.children,f,null,a,c,u&&"foreignObject"!==g,h,d),w&&On(e,null,a,"created"),v){for(const t in v)"value"===t||Object(r["y"])(t)||o(f,t,null,v[t],u,e.children,a,c,z);"value"in v&&o(f,"value",null,v.value),(m=v.onVnodeBeforeMount)&&Cn(m,a,e)}A(f,e,e.scopeId,h,a)}w&&On(e,null,a,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),n(f,t,i),((m=v&&v.onVnodeMounted)||O||w)&&Sn(()=>{m&&Cn(m,a,e),O&&b.enter(f),w&&On(e,null,a,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&f(e,n),r)for(let o=0;o<r.length;o++)f(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?pr(e[u]):fr(e[u]);g(null,c,t,n,r,i,o,s,a)}},x=(e,t,n,i,s,a,c)=>{const u=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:f}=t;h|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;(g=m.onVnodeBeforeUpdate)&&Cn(g,n,t,e),f&&On(t,e,n,"beforeUpdate");const v=s&&"foreignObject"!==t.type;if(d?j(e.dynamicChildren,d,u,n,i,v,a):c||F(e,t,u,null,n,i,v,a,!1),h>0){if(16&h)C(u,t,p,m,n,i,s);else if(2&h&&p.class!==m.class&&o(u,"class",null,m.class,s),4&h&&o(u,"style",p.style,m.style,s),8&h){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||o(u,a,c,l,s,e.children,n,i,z)}}1&h&&e.children!==t.children&&l(u,t.children)}else c||null!=d||C(u,t,p,m,n,i,s);((g=m.onVnodeUpdated)||f)&&Sn(()=>{g&&Cn(g,n,t,e),f&&On(t,e,n,"updated")},i)},j=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Bn||!tr(c,u)||70&c.shapeFlag)?h(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},C=(e,t,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["y"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(e,u,h,l,c,t.children,s,a,z)}if(n!==r["b"])for(const u in n)Object(r["y"])(u)||u in i||o(e,u,n[u],null,c,t.children,s,a,z);"value"in i&&o(e,"value",n.value,i.value)}},R=(e,t,r,i,o,s,c,u,l)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(n(h,r,i),n(d,r,i),k(t.children,r,d,o,s,c,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(j(e.dynamicChildren,p,r,o,s,c,u),(null!=t.key||o&&t===o.subTree)&&Rn(e,t,!0)):F(e,t,r,d,o,s,c,u,l)},N=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):P(t,n,r,i,o,s,c):D(e,t,c)},P=(e,t,n,r,i,o,s)=>{const a=e.component=Tr(e,r,i);if(Et(e)&&(a.ctx.renderer=J),Rr(a),a.asyncDep){if(i&&i.registerDep(a,L),!e.el){const e=a.subTree=sr($n);y(null,e,t,n)}}else L(a,e,t,n,i,o,s)},D=(e,t,n)=>{const r=t.component=e.component;if(ot(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,t,n);r.next=t,yi(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},L=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:d}=e,f=n;0,u.allowRecurse=!1,n?(n.el=d.el,M(e,n,a)):n=d,i&&Object(r["m"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Cn(t,l,n,d),u.allowRecurse=!0;const p=nt(e);0;const m=e.subTree;e.subTree=p,g(m,p,h(m.el),K(m),e,o,s),n.el=p.el,null===f&&at(e,p.el),c&&Sn(c,o),(t=n.props&&n.props.onVnodeUpdated)&&Sn(()=>Cn(t,l,n,d),o)}else{let a;const{el:c,props:l}=t,{bm:h,m:d,parent:f}=e,p=Tt(t);if(u.allowRecurse=!1,h&&Object(r["m"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Cn(a,f,t),u.allowRecurse=!0,c&&Q){const n=()=>{e.subTree=nt(e),Q(c,e.subTree,e,o,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=nt(e);0,g(null,r,n,i,e,o,s),t.el=r.el}if(d&&Sn(d,o),!p&&(a=l&&l.onVnodeMounted)){const e=t;Sn(()=>Cn(a,f,e),o)}256&t.shapeFlag&&e.a&&Sn(e.a,o),e.isMounted=!0,t=n=i=null}},u=new w(c,()=>gi(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,u.allowRecurse=l.allowRecurse=!0,l()},M=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,sn(e,t.props,r,n),_n(e,t.children,n),I(),Oi(void 0,e.update),S()},F=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void V(u,d,n,r,i,o,s,a,c);if(256&f)return void U(u,d,n,r,i,o,s,a,c)}8&p?(16&h&&z(u,i,o),d!==u&&l(n,d)):16&h?16&p?V(u,d,n,r,i,o,s,a,c):z(u,i,o,!0):(8&h&&l(n,""),16&p&&k(d,n,r,i,o,s,a,c))},U=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?pr(t[f]):fr(t[f]);g(e[f],r,n,null,o,s,a,c,u)}l>h?z(e,o,s,!0,!1,d):k(t,n,i,o,s,a,c,u,d)},V=(e,t,n,i,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?pr(t[l]):fr(t[l]);if(!tr(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?pr(t[f]):fr(t[f]);if(!tr(r,i))break;g(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)g(null,t[l]=u?pr(t[l]):fr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=d)q(e[l],o,s,!0),l++;else{const p=l,m=l,v=new Map;for(l=m;l<=f;l++){const e=t[l]=u?pr(t[l]):fr(t[l]);null!=e.key&&v.set(e.key,l)}let y,b=0;const _=f-m+1;let w=!1,O=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=_){q(r,o,s,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&tr(r,t[y])){i=y;break}void 0===i?q(r,o,s,!0):(T[i-m]=l+1,i>=O?O=i:w=!0,g(r,t[i],n,null,o,s,a,c,u),b++)}const E=w?Nn(T):r["a"];for(y=E.length-1,l=_-1;l>=0;l--){const e=m+l,r=t[e],d=e+1<h?t[e+1].el:i;0===T[l]?g(null,r,n,d,o,s,a,c,u):w&&(y<0||l!==E[y]?B(r,n,d,2):y--)}}},B=(e,t,r,i,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,r,i);if(128&l)return void e.suspense.move(t,r,i);if(64&l)return void a.move(e,t,r,J);if(a===Bn){n(s,t,r);for(let e=0;e<u.length;e++)B(u[e],t,r,i);return void n(e.anchor,t,r)}if(a===Gn)return void _(e,t,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(s),n(s,t,r),Sn(()=>c.enter(s),o);else{const{leave:e,delayLeave:i,afterLeave:o}=c,a=()=>n(s,t,r),u=()=>{e(s,()=>{a(),o&&o()})};i?i(s,a,u):u()}else n(s,t,r)},q=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&jn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!Tt(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&Cn(m,t,e),6&l)H(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&On(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(o!==Bn||h>0&&64&h)?z(u,t,n,!1,!0):(o===Bn&&384&h||!i&&16&l)&&z(c,t,n),r&&$(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&Sn(()=>{m&&Cn(m,t,e),f&&On(e,null,t,"unmounted")},n)},$=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Bn)return void G(n,r);if(t===Gn)return void O(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},G=(e,t)=>{let n;while(e!==t)n=d(e),i(e),e=n;i(t)},H=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["m"])(i),o.stop(),s&&(s.active=!1,q(a,e,t,n)),c&&Sn(c,t),Sn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},z=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)q(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():d(e.anchor||e.el),W=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),Ti(),t._vnode=e},J={p:g,um:q,m:B,r:$,mt:P,mc:k,pc:F,pbc:j,n:K,o:e};let X,Q;return t&&([X,Q]=t(J)),{render:W,hydrate:X,createApp:In(W,X)}}function jn(e,t,n,i,o=!1){if(Object(r["n"])(e))return void e.forEach((e,s)=>jn(e,t&&(Object(r["n"])(t)?t[s]:t),n,i,o));if(Tt(i)&&!o)return;const s=4&i.shapeFlag?Fr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["C"])(l)?(h[l]=null,Object(r["j"])(d,l)&&(d[l]=null)):Me(l)&&(l.value=null)),Object(r["C"])(u)){const e=()=>{h[u]=a,Object(r["j"])(d,u)&&(d[u]=a)};a?(e.id=-1,Sn(e,n)):e()}else if(Me(u)){const e=()=>{u.value=a};a?(e.id=-1,Sn(e,n)):e()}else Object(r["o"])(u)&&Qr(u,c,12,[a,h])}function Cn(e,t,n,r=null){Yr(e,t,7,[n,r])}function Rn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["n"])(i)&&Object(r["n"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=pr(o[r]),t.el=e.el),n||Rn(e,t))}}function Nn(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Pn=e=>e.__isTeleport;const Dn="components";function Ln(e,t){return Un(Dn,e,!0,t)||e}const Mn=Symbol();function Fn(e){return Object(r["C"])(e)?Un(Dn,e,!1)||e:e||Mn}function Un(e,t,n=!0,i=!1){const o=Ye||Er;if(o){const n=o.type;if(e===Dn){const e=Br(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Vn(o[e]||n[e],t)||Vn(o.appContext[e],t);return!s&&i?n:s}}function Vn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Bn=Symbol(void 0),qn=Symbol(void 0),$n=Symbol(void 0),Gn=Symbol(void 0),Hn=[];let zn=null;function Kn(e=!1){Hn.push(zn=e?null:[])}function Wn(){Hn.pop(),zn=Hn[Hn.length-1]||null}let Jn=1;function Xn(e){Jn+=e}function Qn(e){return e.dynamicChildren=Jn>0?zn||r["a"]:null,Wn(),Jn>0&&zn&&zn.push(e),e}function Yn(e,t,n,r,i,o){return Qn(or(e,t,n,r,i,o,!0))}function Zn(e,t,n,r,i){return Qn(sr(e,t,n,r,i,!0))}function er(e){return!!e&&!0===e.__v_isVNode}function tr(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",rr=({key:e})=>null!=e?e:null,ir=({ref:e})=>null!=e?Object(r["C"])(e)||Me(e)||Object(r["o"])(e)?{i:Ye,r:e}:e:null;function or(e,t=null,n=null,i=0,o=null,s=(e===Bn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rr(t),ref:t&&ir(t),scopeId:Ze,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(mr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["C"])(n)?8:16),Jn>0&&!a&&zn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&zn.push(u),u}const sr=ar;function ar(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Mn||(e=$n),er(e)){const r=ur(e,t,!0);return n&&mr(r,n),r}if($r(e)&&(e=e.__vccOpts),t){t=cr(t);let{class:e,style:n}=t;e&&!Object(r["C"])(e)&&(t.class=Object(r["H"])(e)),Object(r["u"])(n)&&(Ce(n)&&!Object(r["n"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["I"])(n))}const a=Object(r["C"])(e)?1:ct(e)?128:Pn(e)?64:Object(r["u"])(e)?4:Object(r["o"])(e)?2:0;return or(e,t,n,i,o,a,s,!0)}function cr(e){return e?Ce(e)||nr in e?Object(r["h"])({},e):e:null}function ur(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?gr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&rr(c),ref:t&&t.ref?n&&o?Object(r["n"])(o)?o.concat(ir(t)):[o,ir(t)]:ir(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Bn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),el:e.el,anchor:e.anchor};return u}function lr(e=" ",t=0){return sr(qn,null,e,t)}function hr(e,t){const n=sr(Gn,null,e);return n.staticCount=t,n}function dr(e="",t=!1){return t?(Kn(),Zn($n,null,e)):sr($n,null,e)}function fr(e){return null==e||"boolean"===typeof e?sr($n):Object(r["n"])(e)?sr(Bn,null,e.slice()):"object"===typeof e?pr(e):sr(qn,null,String(e))}function pr(e){return null===e.el||e.memo?e:ur(e)}function mr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["n"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),mr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||nr in t?3===r&&Ye&&(1===Ye.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ye}}else Object(r["o"])(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),64&i?(n=16,t=[lr(t)]):n=8);e.children=t,e.shapeFlag|=n}function gr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["H"])([t.class,i.class]));else if("style"===e)t.style=Object(r["I"])([t.style,i.style]);else if(Object(r["v"])(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}function vr(e,t,n,i){let o;const s=n&&n[i];if(Object(r["n"])(e)||Object(r["C"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["u"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const yr=e=>e?kr(e)?Fr(e)||e.proxy:yr(e.parent):null,br=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>Jt(e),$forceUpdate:e=>()=>gi(e.update),$nextTick:e=>pi.bind(e.proxy),$watch:e=>xi.bind(e)}),_r={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 0:return i[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(i!==r["b"]&&Object(r["j"])(i,t))return a[t]=0,i[t];if(o!==r["b"]&&Object(r["j"])(o,t))return a[t]=1,o[t];if((l=e.propsOptions[0])&&Object(r["j"])(l,t))return a[t]=2,s[t];if(n!==r["b"]&&Object(r["j"])(n,t))return a[t]=3,n[t];Gt&&(a[t]=4)}}const h=br[t];let d,f;return h?("$attrs"===t&&k(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["j"])(n,t)?(a[t]=3,n[t]):(f=u.config.globalProperties,Object(r["j"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["j"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["j"])(i,t))i[t]=n;else if(Object(r["j"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||e!==r["b"]&&Object(r["j"])(e,a)||t!==r["b"]&&Object(r["j"])(t,a)||(c=s[0])&&Object(r["j"])(c,a)||Object(r["j"])(i,a)||Object(r["j"])(br,a)||Object(r["j"])(o.config.globalProperties,a)}};const wr=Tn();let Or=0;function Tr(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||wr,a={uid:Or++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:un(i,o),emitsOptions:Xe(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Je.bind(null,a),e.ce&&e.ce(a),a}let Er=null;const Ir=()=>Er||Ye,Ar=e=>{Er=e,e.scope.on()},Sr=()=>{Er&&Er.scope.off(),Er=null};function kr(e){return 4&e.vnode.shapeFlag}let xr,jr,Cr=!1;function Rr(e,t=!1){Cr=t;const{props:n,children:r}=e.vnode,i=kr(e);on(e,n,i,t),bn(e,r);const o=i?Nr(e,t):void 0;return Cr=!1,o}function Nr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ne(new Proxy(e.ctx,_r));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Mr(e):null;Ar(e),I();const o=Qr(i,e,0,[e.props,n]);if(S(),Sr(),Object(r["x"])(o)){if(o.then(Sr,Sr),t)return o.then(n=>{Pr(e,n,t)}).catch(t=>{Zr(t,e,0)});e.asyncDep=o}else Pr(e,o,t)}else Dr(e,t)}function Pr(e,t,n){Object(r["o"])(t)?e.render=t:Object(r["u"])(t)&&(e.setupState=Ge(t)),Dr(e,n)}function Dr(e,t,n){const i=e.type;if(!e.render){if(xr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=xr(t,c)}}e.render=i.render||r["d"],jr&&jr(e)}Ar(e),I(),Ht(e),S(),Sr()}function Lr(e){return new Proxy(e.attrs,{get(t,n){return k(e,"get","$attrs"),t[n]}})}function Mr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Lr(e))},slots:e.slots,emit:e.emit,expose:t}}function Fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ge(Ne(e.exposed)),{get(t,n){return n in t?t[n]:n in br?br[n](e):void 0}}))}const Ur=/(?:^|[-_])(\w)/g,Vr=e=>e.replace(Ur,e=>e.toUpperCase()).replace(/[-_]/g,"");function Br(e){return Object(r["o"])(e)&&e.displayName||e.name}function qr(e,t,n=!1){let r=Br(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Vr(r):n?"App":"Anonymous"}function $r(e){return Object(r["o"])(e)&&"__vccOpts"in e}const Gr=[];function Hr(e,...t){I();const n=Gr.length?Gr[Gr.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=zr();if(r)Qr(r,n,11,[e+t.join(""),n&&n.proxy,i.map(({vnode:e})=>`at <${qr(n,e.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+e,...t];i.length&&n.push("\n",...Kr(i)),console.warn(...n)}S()}function zr(){let e=Gr[Gr.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Kr(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...Wr(e))}),t}function Wr({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=" at <"+qr(e.component,e.type,r),o=">"+n;return e.props?[i,...Jr(e.props),o]:[i+o]}function Jr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...Xr(n,e[n]))}),n.length>3&&t.push(" ..."),t}function Xr(e,t,n){return Object(r["C"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:Me(t)?(t=Xr(e,Re(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(r["o"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Re(t),n?t:[e+"=",t])}function Qr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Zr(o,t,n)}return i}function Yr(e,t,n,i){if(Object(r["o"])(e)){const o=Qr(e,t,n,i);return o&&Object(r["x"])(o)&&o.catch(e=>{Zr(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Yr(e[r],t,n,i));return o}function Zr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Qr(s,null,10,[e,i,o])}ei(e,n,i,r)}function ei(e,t,n,r=!0){console.error(e)}let ti=!1,ni=!1;const ri=[];let ii=0;const oi=[];let si=null,ai=0;const ci=[];let ui=null,li=0;const hi=Promise.resolve();let di=null,fi=null;function pi(e){const t=di||hi;return e?t.then(this?e.bind(this):e):t}function mi(e){let t=ii+1,n=ri.length;while(t<n){const r=t+n>>>1,i=Ei(ri[r]);i<e?t=r+1:n=r}return t}function gi(e){ri.length&&ri.includes(e,ti&&e.allowRecurse?ii+1:ii)||e===fi||(null==e.id?ri.push(e):ri.splice(mi(e.id),0,e),vi())}function vi(){ti||ni||(ni=!0,di=hi.then(Ii))}function yi(e){const t=ri.indexOf(e);t>ii&&ri.splice(t,1)}function bi(e,t,n,i){Object(r["n"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),vi()}function _i(e){bi(e,si,oi,ai)}function wi(e){bi(e,ui,ci,li)}function Oi(e,t=null){if(oi.length){for(fi=t,si=[...new Set(oi)],oi.length=0,ai=0;ai<si.length;ai++)si[ai]();si=null,ai=0,fi=null,Oi(e,t)}}function Ti(e){if(ci.length){const e=[...new Set(ci)];if(ci.length=0,ui)return void ui.push(...e);for(ui=e,ui.sort((e,t)=>Ei(e)-Ei(t)),li=0;li<ui.length;li++)ui[li]();ui=null,li=0}}const Ei=e=>null==e.id?1/0:e.id;function Ii(e){ni=!1,ti=!0,Oi(e),ri.sort((e,t)=>Ei(e)-Ei(t));try{for(ii=0;ii<ri.length;ii++){const e=ri[ii];e&&!1!==e.active&&Qr(e,null,14)}}finally{ii=0,ri.length=0,Ti(e),ti=!1,di=null,(ri.length||oi.length||ci.length)&&Ii(e)}}const Ai={};function Si(e,t,n){return ki(e,t,n)}function ki(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=Er;let u,l,h=!1,d=!1;if(Me(e)?(u=()=>e.value,h=!!e._shallow):xe(e)?(u=()=>e,i=!0):Object(r["n"])(e)?(d=!0,h=e.some(xe),u=()=>e.map(e=>Me(e)?e.value:xe(e)?Ci(e):Object(r["o"])(e)?Qr(e,c,2):void 0)):u=Object(r["o"])(e)?t?()=>Qr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Yr(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>Ci(e())}let f=e=>{l=v.onStop=()=>{Qr(e,c,4)}},p=d?[]:Ai;const m=()=>{if(v.active)if(t){const e=v.run();(i||h||(d?e.some((e,t)=>Object(r["i"])(e,p[t])):Object(r["i"])(e,p)))&&(l&&l(),Yr(t,c,3,[e,p===Ai?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===o?m:"post"===o?()=>Sn(m,c&&c.suspense):()=>{!c||c.isMounted?_i(m):m()};const v=new w(u,g);return t?n?m():p=v.run():"post"===o?Sn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["J"])(c.scope.effects,v)}}function xi(e,t,n){const i=this.proxy,o=Object(r["C"])(e)?e.includes(".")?ji(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["o"])(t)?s=t:(s=t.handler,n=t);const a=Er;Ar(this);const c=ki(o,s.bind(i),n);return a?Ar(a):Sr(),c}function ji(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ci(e,t=new Set){if(!Object(r["u"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Me(e))Ci(e.value,t);else if(Object(r["n"])(e))for(let n=0;n<e.length;n++)Ci(e[n],t);else if(Object(r["A"])(e)||Object(r["s"])(e))e.forEach(e=>{Ci(e,t)});else if(Object(r["w"])(e))for(const n in e)Ci(e[n],t);return e}function Ri(e,t,n){const i=arguments.length;return 2===i?Object(r["u"])(t)&&!Object(r["n"])(t)?er(t)?sr(e,null,[t]):sr(e,t):sr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&er(n)&&(n=[n]),sr(e,t,n))}Symbol("");const Ni="3.2.4",Pi="http://www.w3.org/2000/svg",Di="undefined"!==typeof document?document:null,Li=new Map,Mi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Di.createElementNS(Pi,e):Di.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Di.createTextNode(e),createComment:e=>Di.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Di.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=Li.get(e);if(!o){const t=Di.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}Li.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Fi(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ui(e,t,n){const i=e.style;if(n)if(Object(r["C"])(n)){if(t!==n){const t=i.display;i.cssText=n,"_vod"in e&&(i.display=t)}}else{for(const e in n)Bi(i,e,n[e]);if(t&&!Object(r["C"])(t))for(const e in t)null==n[e]&&Bi(i,e,"")}else e.removeAttribute("style")}const Vi=/\s*!important$/;function Bi(e,t,n){if(Object(r["n"])(n))n.forEach(n=>Bi(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Gi(e,t);Vi.test(n)?e.setProperty(Object(r["k"])(i),n.replace(Vi,""),"important"):e[i]=n}}const qi=["Webkit","Moz","ms"],$i={};function Gi(e,t){const n=$i[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return $i[t]=i;i=Object(r["f"])(i);for(let r=0;r<qi.length;r++){const n=qi[r]+i;if(n in e)return $i[t]=n}return t}const Hi="http://www.w3.org/1999/xlink";function zi(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Hi,t.slice(6,t.length)):e.setAttributeNS(Hi,t,n);else{const i=Object(r["B"])(t);null==n||i&&!Object(r["l"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ki(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["l"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Wi=Date.now,Ji=!1;if("undefined"!==typeof window){Wi()>document.createEvent("Event").timeStamp&&(Wi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ji=!!(e&&Number(e[1])<=53)}let Xi=0;const Qi=Promise.resolve(),Yi=()=>{Xi=0},Zi=()=>Xi||(Qi.then(Yi),Xi=Wi());function eo(e,t,n,r){e.addEventListener(t,n,r)}function to(e,t,n,r){e.removeEventListener(t,n,r)}function no(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=io(t);if(r){const s=o[t]=oo(r,i);eo(e,n,s,a)}else s&&(to(e,n,s,a),o[t]=void 0)}}const ro=/(?:Once|Passive|Capture)$/;function io(e){let t;if(ro.test(e)){let n;t={};while(n=e.match(ro))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["k"])(e.slice(2)),t]}function oo(e,t){const n=e=>{const r=e.timeStamp||Wi();(Ji||r>=n.attached-1)&&Yr(so(e,n.value),t,5,[e])};return n.value=e,n.attached=Zi(),n}function so(e,t){if(Object(r["n"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const ao=/^on[a-z]/,co=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Fi(e,i,o):"style"===t?Ui(e,n,i):Object(r["v"])(t)?Object(r["t"])(t)||no(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):uo(e,t,i,o))?Ki(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),zi(e,t,i,o))};function uo(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&ao.test(t)&&Object(r["o"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!ao.test(t)||!Object(r["C"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const lo="transition",ho="animation",fo=(e,{slots:t})=>Ri(mt,vo(e),t);fo.displayName="Transition";const po={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mo=(fo.props=Object(r["h"])({},mt.props,po),(e,t=[])=>{Object(r["n"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),go=e=>!!e&&(Object(r["n"])(e)?e.some(e=>e.length>1):e.length>1);function vo(e){const t={};for(const r in e)r in po||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=yo(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:T=y,onAppear:E=b,onAppearCancelled:I=_}=t,A=(e,t,n)=>{wo(e,t?h:c),wo(e,t?l:a),n&&n()},S=(e,t)=>{wo(e,p),wo(e,f),t&&t()},k=e=>(t,n)=>{const r=e?E:b,o=()=>A(t,e,n);mo(r,[t,o]),Oo(()=>{wo(t,e?u:s),_o(t,e?h:c),go(r)||Eo(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){mo(y,[e]),_o(e,s),_o(e,a)},onBeforeAppear(e){mo(T,[e]),_o(e,u),_o(e,l)},onEnter:k(!1),onAppear:k(!0),onLeave(e,t){const n=()=>S(e,t);_o(e,d),ko(),_o(e,f),Oo(()=>{wo(e,d),_o(e,p),go(w)||Eo(e,i,v,n)}),mo(w,[e,n])},onEnterCancelled(e){A(e,!1),mo(_,[e])},onAppearCancelled(e){A(e,!0),mo(I,[e])},onLeaveCancelled(e){S(e),mo(O,[e])}})}function yo(e){if(null==e)return null;if(Object(r["u"])(e))return[bo(e.enter),bo(e.leave)];{const t=bo(e);return[t,t]}}function bo(e){const t=Object(r["M"])(e);return t}function _o(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function wo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Oo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let To=0;function Eo(e,t,n,r){const i=e._endId=++To,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=Io(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function Io(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(lo+"Delay"),o=r(lo+"Duration"),s=Ao(i,o),a=r(ho+"Delay"),c=r(ho+"Duration"),u=Ao(a,c);let l=null,h=0,d=0;t===lo?s>0&&(l=lo,h=s,d=o.length):t===ho?u>0&&(l=ho,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?lo:ho:null,d=l?l===lo?o.length:c.length:0);const f=l===lo&&/\b(transform|all)(,|$)/.test(n[lo+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Ao(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>So(t)+So(e[n])))}function So(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ko(){return document.body.offsetHeight}new WeakMap,new WeakMap;const xo=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["n"])(t)?e=>Object(r["m"])(t,e):t};const jo={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=Object(r["A"])(t);eo(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["M"])(Ro(e)):Ro(e));e._assign(e.multiple?o?new Set(t):t:t[0])}),e._assign=xo(i)},mounted(e,{value:t}){Co(e,t)},beforeUpdate(e,t,n){e._assign=xo(n)},updated(e,{value:t}){Co(e,t)}};function Co(e,t){const n=e.multiple;if(!n||Object(r["n"])(t)||Object(r["A"])(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=Ro(o);if(n)Object(r["n"])(t)?o.selected=Object(r["F"])(t,s)>-1:o.selected=t.has(s);else if(Object(r["E"])(Ro(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Ro(e){return"_value"in e?e._value:e.value}const No=["ctrl","shift","alt","meta"],Po={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>No.some(n=>e[n+"Key"]&&!t.includes(n))},Do=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Po[t[e]];if(r&&r(n,t))return}return e(n,...r)},Lo={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Mo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Mo(e,!0),r.enter(e)):r.leave(e,()=>{Mo(e,!1)}):Mo(e,t))},beforeUnmount(e,{value:t}){Mo(e,t)}};function Mo(e,t){e.style.display=t?e._vod:"none"}const Fo=Object(r["h"])({patchProp:co},Mi);let Uo;function Vo(){return Uo||(Uo=kn(Fo))}const Bo=(...e)=>{const t=Vo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=qo(e);if(!i)return;const o=t._component;Object(r["o"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function qo(e){if(Object(r["C"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7bb1":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ce})),n.d(t,"b",(function(){return we})),n.d(t,"c",(function(){return je})),n.d(t,"d",(function(){return ne})),n.d(t,"e",(function(){return l}));var r=n("7a23");
/**
  * vee-validate v4.4.9
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function i(e){return"function"===typeof e}function o(e){return null===e||void 0===e}const s=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function a(e){return Number(e)>=0}function c(e){const t=parseFloat(e);return isNaN(t)?e:t}const u={};function l(e,t){d(e,t),u[e]=t}function h(e){return u[e]}function d(e,t){if(!i(t))throw new Error(`Extension Error: The validator '${e}' must be a function.`)}const f=Symbol("vee-validate-form"),p=Symbol("vee-validate-form-errors"),m=Symbol("vee-validate-form-initial-values"),g=Symbol("vee-validate-field-instance"),v=Symbol("Default empty value");function y(e){return i(e)&&!!e.__locatorRef}function b(e){return["input","textarea","select"].includes(e)}function _(e,t){return b(e)&&"file"===t.type}function w(e){return!!e&&i(e.validate)}function O(e){return"checkbox"===e||"radio"===e}function T(e){return s(e)||Array.isArray(e)}function E(e){return Array.isArray(e)?0===e.length:s(e)&&0===Object.keys(e).length}function I(e){return/^\[.+\]$/i.test(e)}function A(e){return"SELECT"===e.tagName&&e.multiple}function S(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return"select"===e&&"multiple"in t&&n}function k(e,t){return S(e,t)||_(e,t)}function x(e){return j(e)&&e.target&&"submit"in e.target}function j(e){return!!e&&(!!("undefined"!==typeof Event&&i(Event)&&e instanceof Event)||!(!e||!e.srcElement))}function C(e,t){return t in e&&e[t]!==v}function R(e){return I(e)?e.replace(/\[|\]/gi,""):e}function N(e,t,n){if(!e)return n;if(I(t))return e[R(t)];const r=t.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((e,t)=>T(e)&&t in e?e[t]:n,e);return r}function P(e,t,n){if(I(t))return void(e[R(t)]=n);const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let s=0;s<r.length;s++){if(s===r.length-1)return void(i[r[s]]=n);r[s]in i&&!o(i[r[s]])||(i[r[s]]=a(r[s+1])?[]:{}),i=i[r[s]]}}function D(e,t){Array.isArray(e)&&a(t)?e.splice(Number(t),1):s(e)&&delete e[t]}function L(e,t){if(I(t))return void delete e[R(t)];const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let s=0;s<n.length;s++){if(s===n.length-1){D(r,n[s]);break}if(!(n[s]in r)||o(r[n[s]]))break;r=r[n[s]]}const i=n.map((t,r)=>N(e,n.slice(0,r).join(".")));for(let o=i.length-1;o>=0;o--)E(i[o])&&(0!==o?D(i[o-1],n[o-1]):D(e,n[0]))}function M(e){return Object.keys(e)}function F(e,t){const n=Object(r["m"])();return(null===n||void 0===n?void 0:n.provides[e])||Object(r["o"])(e,t)}function U(e){return Array.isArray(e)?e[0]:e}function V(e,t,n=!1){Array.isArray(e)?n?t(e[0]):e.forEach(t):t(e)}function B(e,t,n){if(Array.isArray(e)){const n=[...e],r=n.indexOf(t);return r>=0?n.splice(r,1):n.push(t),n}return e===t?n:t}const q=(e,t,n)=>t.slots.default?"string"!==typeof e&&e?{default:()=>{var e,r;return null===(r=(e=t.slots).default)||void 0===r?void 0:r.call(e,n())}}:t.slots.default(n()):t.slots.default;function $(e){if(G(e))return e._value}function G(e){return"_value"in e}function H(e){if(!j(e))return e;const t=e.target;return O(t.type)&&G(t)?$(t):"file"===t.type&&t.files?Array.from(t.files):A(t)?Array.from(t.options).filter(e=>e.selected&&!e.disabled).map($):t.value}function z(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?s(e)&&e._$$isNormalized?e:s(e)?Object.keys(e).reduce((t,n)=>{const r=K(e[n]);return!1!==e[n]&&(t[n]=W(r)),t},t):"string"!==typeof e?t:e.split("|").reduce((e,t)=>{const n=J(t);return n.name?(e[n.name]=W(n.params),e):e},t):t}function K(e){return!0===e?[]:Array.isArray(e)||s(e)?e:[e]}function W(e){const t=e=>"string"===typeof e&&"@"===e[0]?X(e.slice(1)):e;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}const J=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function X(e){const t=t=>{const n=N(t,e)||t[e];return n};return t.__locatorRef=e,t}function Q(e){return Array.isArray(e)?e.filter(y):M(e).filter(t=>y(e[t])).map(t=>e[t])}const Y={generateMessage:({field:e})=>e+" is not valid.",bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Z=Object.assign({},Y);const ee=()=>Z,te=e=>{Z=Object.assign(Object.assign({},Z),e)},ne=te;async function re(e,t,n={}){const r=null===n||void 0===n?void 0:n.bails,i={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:t,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},o=await ie(i,e),s=o.errors;return{errors:s,valid:!s.length}}async function ie(e,t){if(w(e.rules))return oe(t,e.rules,{bails:e.bails});if(i(e.rules)){const n={field:e.name,form:e.formData,value:t},r=await e.rules(t,n),i="string"!==typeof r&&r,o="string"===typeof r?r:ae(n);return{errors:i?[]:[o]}}const n=Object.assign(Object.assign({},e),{rules:z(e.rules)}),r=[],o=Object.keys(n.rules),s=o.length;for(let i=0;i<s;i++){const s=o[i],a=await se(n,t,{name:s,params:n.rules[s]});if(a.error&&(r.push(a.error),e.bails))return{errors:r}}return{errors:r}}async function oe(e,t,n){var r;const i=await t.validate(e,{abortEarly:null===(r=n.bails)||void 0===r||r}).then(()=>[]).catch(e=>{if("ValidationError"===e.name)return e.errors;throw e});return{errors:i}}async function se(e,t,n){const r=h(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=ce(n.params,e.formData),o={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:i})},s=await r(t,i,o);return"string"===typeof s?{error:s}:{error:s?void 0:ae(o)}}function ae(e){const t=ee().generateMessage;return t?t(e):"Field is invalid"}function ce(e,t){const n=e=>y(e)?e(t):e;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((t,r)=>(t[r]=n(e[r]),t),{})}async function ue(e,t){const n=await e.validate(t,{abortEarly:!1}).then(()=>[]).catch(e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]}),r={},i={};for(const o of n){const e=o.errors;r[o.path]={valid:!e.length,errors:e},e.length&&(i[o.path]=e[0])}return{valid:!n.length,results:r,errors:i}}async function le(e,t,n){const r=M(e),i=r.map(async r=>{var i,o,s;const a=await re(N(t,r),e[r],{name:(null===(i=null===n||void 0===n?void 0:n.names)||void 0===i?void 0:i[r])||r,values:t,bails:null===(s=null===(o=null===n||void 0===n?void 0:n.bailsMap)||void 0===o?void 0:o[r])||void 0===s||s});return Object.assign(Object.assign({},a),{path:r})});let o=!0;const s=await Promise.all(i),a={},c={};for(const u of s)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(o=!1,c[u.path]=u.errors[0]);return{valid:o,results:a,errors:c}}function he(e){if("object"!==typeof e)return e;var t,n,r=Object.prototype.toString.call(e);if("[object Object]"===r){if(e.constructor!==Object&&"function"===typeof e.constructor)for(t in n=new e.constructor,e)n.hasOwnProperty(t)&&n[t]!==e[t]&&(n[t]=he(e[t]));else for(t in n={},e)"__proto__"===t?Object.defineProperty(n,t,{value:he(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=he(e[t]);return n}if("[object Array]"===r){for(t=e.length,n=Array(t);t--;)n[t]=he(e[t]);return n}return"[object Date]"===r?new Date(+e):"[object RegExp]"===r?(n=new RegExp(e.source,e.flags),n.lastIndex=e.lastIndex,n):e}var de=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],n.get(i[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if(r=t.length,r!=n.length)return!1;for(i=r;0!==i--;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var s=o[i];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n};let fe=0;function pe(e,t,n){const o=fe>=Number.MAX_SAFE_INTEGER?0:++fe,{initialValue:s,validateOnMount:a,bails:c,type:u,checkedValue:l,label:h,validateOnValueUpdate:d,uncheckedValue:p,standalone:m}=me(Object(r["J"])(e),n),v=m?void 0:F(f),{meta:y,errors:b,errorMessage:_,handleBlur:O,handleInput:T,resetValidationState:E,setValidationState:I,setErrors:A,value:S,checked:k}=ge({name:e,initValue:s,form:v,type:u,checkedValue:l,standalone:m}),x=Object(r["c"])(()=>{let n=Object(r["J"])(t);const o=Object(r["J"])(null===v||void 0===v?void 0:v.schema);return o&&!w(o)&&(n=ye(o,Object(r["J"])(e))||n),w(n)||i(n)?n:z(n)});async function j(t){var n,i;return(null===v||void 0===v?void 0:v.validateSchema)?null!==(n=(await v.validateSchema(t)).results[Object(r["J"])(e)])&&void 0!==n?n:{valid:!0,errors:[]}:re(S.value,x.value,{name:Object(r["J"])(h)||Object(r["J"])(e),values:null!==(i=null===v||void 0===v?void 0:v.values)&&void 0!==i?i:{},bails:c})}async function C(){y.pending=!0,y.validated=!0;const e=await j("validated-only");return y.pending=!1,I(e)}async function R(){const e=await j("silent");y.valid=e.valid}const P=(e,t=!0)=>{var n,i;if(k&&k.value===(null===(i=null===(n=e)||void 0===n?void 0:n.target)||void 0===i?void 0:i.checked))return;let o=H(e);return k&&"checkbox"===u&&!v&&(o=B(S.value,Object(r["J"])(l),Object(r["J"])(p))),S.value=o,!d&&t?C():void 0};function D(e){y.touched=e}let L;function M(){L=Object(r["N"])(S,d?C:R,{deep:!0})}function U(e){null===L||void 0===L||L(),E(e),Object(r["r"])(()=>{M()})}Object(r["x"])(()=>{if(a)return C();v&&v.validateSchema||R()}),M();const V={idx:-1,fid:o,name:e,label:h,value:S,meta:y,errors:b,errorMessage:_,type:u,checkedValue:l,uncheckedValue:p,checked:k,bails:c,resetField:U,handleReset:()=>U(),validate:C,handleChange:P,handleBlur:O,handleInput:T,setValidationState:I,setTouched:D,setErrors:A};if(Object(r["A"])(g,V),Object(r["p"])(t)&&"function"!==typeof Object(r["J"])(t)&&Object(r["N"])(t,(e,t)=>{if(!de(e,t))return C()},{deep:!0}),!v)return V;v.register(V),Object(r["v"])(()=>{v.unregister(V)});const q=Object(r["c"])(()=>{const e=x.value;return!e||i(e)||w(e)?{}:Object.keys(e).reduce((t,n)=>{const r=Q(e[n]).map(e=>e.__locatorRef).reduce((e,t)=>{const n=N(v.values,t)||v.values[t];return void 0!==n&&(e[t]=n),e},{});return Object.assign(t,r),t},{})});return Object(r["N"])(q,(e,t)=>{if(!Object.keys(e).length)return;const n=!de(e,t);n&&(y.dirty?C():R())}),V}function me(e,t){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0,standalone:!1});if(!t)return n();const r="valueProp"in t?t.valueProp:t.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{checkedValue:r})}function ge({name:e,initValue:t,form:n,type:i,checkedValue:o,standalone:s}){const{errors:a,errorMessage:c,setErrors:u}=_e(e,n),l=s?void 0:F(m,void 0),h=Object(r["C"])(Object(r["J"])(t)),d=Object(r["c"])(()=>N(Object(r["J"])(l),Object(r["J"])(e),Object(r["J"])(h))),f=be(d,e,n),p=ve(d,f,a),g=O(i)?Object(r["c"])(()=>Array.isArray(f.value)?f.value.includes(Object(r["J"])(o)):Object(r["J"])(o)===f.value):void 0,v=()=>{p.touched=!0},y=e=>{O(i)||(f.value=H(e))};function b(e){return u(e.errors),e}function _(i){var o;const s=Object(r["J"])(e),a=i&&"value"in i?i.value:N(Object(r["J"])(l),s,Object(r["J"])(t));n?(n.setFieldValue(s,a,{force:!0}),n.setFieldInitialValue(s,a)):(f.value=he(a),h.value=he(a)),u((null===i||void 0===i?void 0:i.errors)||[]),p.touched=null!==(o=null===i||void 0===i?void 0:i.touched)&&void 0!==o&&o,p.pending=!1,p.validated=!1}return{meta:p,errors:a,errorMessage:c,setErrors:u,setValidationState:b,resetValidationState:_,handleBlur:v,handleInput:y,value:f,checked:g}}function ve(e,t,n){const i=Object(r["B"])({touched:!1,pending:!1,valid:!0,validated:!!Object(r["J"])(n).length,initialValue:Object(r["c"])(()=>Object(r["J"])(e)),dirty:Object(r["c"])(()=>!de(Object(r["J"])(t),Object(r["J"])(e)))});return Object(r["N"])(n,e=>{i.valid=!e.length},{immediate:!0,flush:"sync"}),i}function ye(e,t){if(e)return e[t]}function be(e,t,n){if(!n)return Object(r["C"])(Object(r["J"])(e));const i=N(n.values,Object(r["J"])(t),Object(r["J"])(e));n.stageInitialValue(Object(r["J"])(t),void 0===i?Object(r["J"])(e):i);const o=Object(r["c"])({get(){return N(n.values,Object(r["J"])(t))},set(e){n.setFieldValue(Object(r["J"])(t),e)}});return o}function _e(e,t){if(!t){const e=Object(r["C"])([]);return{errors:Object(r["c"])(()=>e.value),errorMessage:Object(r["c"])(()=>e.value[0]),setErrors:t=>{e.value=Array.isArray(t)?t:[t]}}}const n=Object(r["c"])(()=>t.errorBag.value[Object(r["J"])(e)]||[]);return{errors:n,errorMessage:Object(r["c"])(()=>n.value[0]),setErrors:n=>{t.setFieldErrorBag(Object(r["J"])(e),n)}}}const we=Object(r["l"])({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>ee().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:v},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(e,t){const n=Object(r["I"])(e,"rules"),i=Object(r["I"])(e,"name"),o=Object(r["I"])(e,"label"),s=Object(r["I"])(e,"uncheckedValue"),a=C(e,"onUpdate:modelValue"),{errors:c,value:u,errorMessage:l,validate:h,handleChange:d,handleBlur:f,handleInput:p,setTouched:m,resetField:g,handleReset:y,meta:b,checked:_,setErrors:w}=pe(i,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:Ie(e,t),checkedValue:t.attrs.value,uncheckedValue:s,label:o,validateOnValueUpdate:!1}),T=a?function(e,n=!0){d(e,n),t.emit("update:modelValue",u.value)}:d,E=a?function(e){p(e),t.emit("update:modelValue",u.value)}:p,I=Object(r["c"])(()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:i,validateOnModelUpdate:o}=Te(e),s=[f,t.attrs.onBlur,i?h:void 0].filter(Boolean),a=[e=>T(e,n),t.attrs.onInput].filter(Boolean),c=[e=>T(e,r),t.attrs.onChange].filter(Boolean),l={name:e.name,onBlur:s,onInput:a,onChange:c};o&&(l["onUpdate:modelValue"]=[T]),O(t.attrs.type)&&_?l.checked=_.value:l.value=u.value;const d=Oe(e,t);return k(d,t.attrs)&&delete l.value,l}),A=Object(r["I"])(e,"modelValue");function S(){return{field:I.value,value:u.value,meta:b,errors:c.value,errorMessage:l.value,validate:h,resetField:g,handleChange:T,handleInput:E,handleReset:y,handleBlur:f,setTouched:m,setErrors:w}}return Object(r["N"])(A,t=>{t===v&&void 0===u.value||t!==Ee(u.value,e.modelModifiers)&&(u.value=t,h())}),()=>{const n=Object(r["F"])(Oe(e,t)),i=q(n,t,S);return n?Object(r["n"])(n,Object.assign(Object.assign({},t.attrs),I.value),i):i}}});function Oe(e,t){let n=e.as||"";return e.as||t.slots.default||(n="input"),n}function Te(e){var t,n,r,i;const{validateOnInput:o,validateOnChange:s,validateOnBlur:a,validateOnModelUpdate:c}=ee();return{validateOnInput:null!==(t=e.validateOnInput)&&void 0!==t?t:o,validateOnChange:null!==(n=e.validateOnChange)&&void 0!==n?n:s,validateOnBlur:null!==(r=e.validateOnBlur)&&void 0!==r?r:a,validateOnModelUpdate:null!==(i=e.validateOnModelUpdate)&&void 0!==i?i:c}}function Ee(e,t){return t.number?c(e):e}function Ie(e,t){return O(t.attrs.type)?C(e,"modelValue")?e.modelValue:void 0:C(e,"modelValue")?e.modelValue:t.attrs.value}function Ae(e){const t=Object(r["C"])([]),n=Object(r["C"])(!1),i=Object(r["c"])(()=>t.value.reduce((e,t)=>{const n=Object(r["J"])(t.name);if(!e[n])return e[n]=t,t.idx=-1,e;const i=e[n];Array.isArray(i)||(i.idx=0,e[n]=[i]);const o=e[n];return t.idx=o.length,o.push(t),e},{})),o=Object(r["C"])(0),s=Object(r["B"])(he(Object(r["J"])(null===e||void 0===e?void 0:e.initialValues)||{})),a={},{errorBag:c,setErrorBag:u,setFieldErrorBag:l}=xe(null===e||void 0===e?void 0:e.initialErrors),h=Object(r["c"])(()=>M(c.value).reduce((e,t)=>{const n=c.value[t];return n&&n.length&&(e[t]=n[0]),e},{})),d=Object(r["c"])(()=>M(i.value).reduce((e,t)=>{const n=U(i.value[t]);return n&&(e[t]=Object(r["J"])(n.label||n.name)||""),e},{})),m=Object(r["c"])(()=>M(i.value).reduce((e,t)=>{var n;const r=U(i.value[t]);return r&&(e[t]=null===(n=r.bails)||void 0===n||n),e},{})),g=Object.assign({},(null===e||void 0===e?void 0:e.initialErrors)||{}),{readonlyInitialValues:v,initialValues:y,setInitialValues:b}=ke(i,s,null===e||void 0===e?void 0:e.initialValues),_=Se(t,s,v,h),O=null===e||void 0===e?void 0:e.validationSchema,T={fieldsById:i,values:s,errorBag:c,schema:O,submitCount:o,meta:_,isSubmitting:n,validateSchema:Object(r["J"])(O)?z:void 0,validate:F,register:R,unregister:D,setFieldErrorBag:l,validateField:q,setFieldValue:A,setValues:S,setErrors:I,setFieldError:E,setFieldTouched:k,setTouched:j,resetForm:C,handleSubmit:$,stageInitialValue:H,setFieldInitialValue:G};function E(e,t){l(e,t)}function I(e){u(e)}function A(e,t,{force:n}={force:!1}){var o;const c=i.value[e],u=he(t);if(!c)return void P(s,e,u);if(Array.isArray(c)&&"checkbox"===(null===(o=c[0])||void 0===o?void 0:o.type)&&!Array.isArray(t)){const n=he(B(N(s,e)||[],t,void 0));return P(s,e,n),void c.forEach(e=>{a[e.fid]=n})}let l=t;Array.isArray(c)||"checkbox"!==(null===c||void 0===c?void 0:c.type)||n||(l=he(B(N(s,e),t,Object(r["J"])(c.uncheckedValue)))),P(s,e,l),c&&Array.isArray(c)?c.forEach(e=>{a[e.fid]=l}):a[c.fid]=l}function S(e){M(s).forEach(e=>{delete s[e]}),M(e).forEach(t=>{A(t,e[t])})}function k(e,t){const n=i.value[e];n&&V(n,e=>e.setTouched(t))}function j(e){M(e).forEach(t=>{k(t,!!e[t])})}function C(e){(null===e||void 0===e?void 0:e.values)?(b(e.values),S(null===e||void 0===e?void 0:e.values)):S(y.value),t.value.forEach(e=>e.resetField()),(null===e||void 0===e?void 0:e.touched)&&j(e.touched),I((null===e||void 0===e?void 0:e.errors)||{}),o.value=(null===e||void 0===e?void 0:e.submitCount)||0}function R(e){t.value.push(e),i.value,Object(r["p"])(e.name)&&(a[e.fid]=e.value.value,Object(r["N"])(e.name,(n,i)=>{A(n,a[e.fid]);const o=t.value.find(e=>Object(r["J"])(e.name)===i);o||(L(s,i),L(y.value,i))},{flush:"post"}));const n=Object(r["J"])(e.name),o=Object(r["J"])(e.errorMessage);o&&(null===g||void 0===g?void 0:g[n])!==o&&q(n),delete g[n]}function D(e){var n,o;const c=t.value.indexOf(e);if(-1===c)return;t.value.splice(c,1);const u=e.fid;Object(r["r"])(()=>{delete a[u],i.value[l]||E(l,void 0)});const l=Object(r["J"])(e.name);if(-1===e.idx){const e=t.value.find(e=>Object(r["J"])(e.name)===l);if(e)return;return L(s,l),void L(y.value,l)}const h=null===(o=null===(n=N(s,l))||void 0===n?void 0:n.indexOf)||void 0===o?void 0:o.call(n,Object(r["J"])(e.checkedValue));void 0!==h?-1!==h&&(Array.isArray(s[l])?L(s,`${l}.${h}`):(L(s,l),L(y.value,l))):L(s,l)}async function F(){if(T.validateSchema)return T.validateSchema("force");const e=await Promise.all(t.value.map(e=>e.validate().then(t=>({key:Object(r["J"])(e.name),valid:t.valid,errors:t.errors})))),n={},i={};for(const t of e)n[t.key]={valid:t.valid,errors:t.errors},t.errors.length&&(i[t.key]=t.errors[0]);return{valid:e.every(e=>e.valid),results:n,errors:i}}async function q(e){const t=i.value[e];return t?Array.isArray(t)?t.map(e=>e.validate())[0]:t.validate():(Object(r["M"])(`field with name ${e} was not found`),Promise.resolve({errors:[],valid:!0}))}function $(e){return function(t){return t instanceof Event&&(t.preventDefault(),t.stopPropagation()),j(M(i.value).reduce((e,t)=>(e[t]=!0,e),{})),n.value=!0,o.value++,F().then(n=>{if(n.valid&&"function"===typeof e)return e(he(s),{evt:t,setErrors:I,setFieldError:E,setTouched:j,setFieldTouched:k,setValues:S,setFieldValue:A,resetForm:C})}).then(()=>{n.value=!1},e=>{throw n.value=!1,e})}}function G(e,t){P(y.value,e,he(t))}function H(e,t){P(s,e,t),G(e,t)}async function z(e){const t=Object(r["J"])(O);if(!t)return{valid:!0,results:{},errors:{}};const n=w(t)?await ue(t,s):await le(t,s,{names:d.value,bailsMap:m.value}),i=T.fieldsById.value||{},o=M(T.errorBag.value),a=[...new Set([...M(n.results),...M(i),...o])];return a.reduce((t,r)=>{const o=i[r],s=(n.results[r]||{errors:[]}).errors,a={errors:s,valid:!s.length};if(t.results[r]=a,a.valid||(t.errors[r]=a.errors[0]),!o)return E(r,s),t;if(V(o,e=>e.meta.valid=a.valid),"silent"===e)return t;const c=Array.isArray(o)?o.some(e=>e.meta.validated):o.meta.validated;return"validated-only"!==e||c?(V(o,e=>e.setValidationState(a),!0),t):t},{valid:n.valid,results:{},errors:{}})}const K=$((e,{evt:t})=>{x(t)&&t.target.submit()});return Object(r["x"])(()=>{(null===e||void 0===e?void 0:e.initialErrors)&&I(e.initialErrors),(null===e||void 0===e?void 0:e.initialTouched)&&j(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)?F():T.validateSchema&&T.validateSchema("silent")}),Object(r["p"])(O)&&Object(r["N"])(O,()=>{var e;null===(e=T.validateSchema)||void 0===e||e.call(T,"validated-only")}),Object(r["A"])(f,T),Object(r["A"])(p,h),{errors:h,meta:_,values:s,isSubmitting:n,submitCount:o,validate:F,validateField:q,handleReset:()=>C(),resetForm:C,handleSubmit:$,submitForm:K,setFieldError:E,setErrors:I,setFieldValue:A,setValues:S,setFieldTouched:k,setTouched:j}}function Se(e,t,n,i){const o={touched:"some",pending:"some",valid:"every"},s=Object(r["c"])(()=>!de(t,Object(r["J"])(n))),a=Object(r["c"])(()=>M(o).reduce((t,n)=>{const r=o[n];return t[n]=e.value[r](e=>e.meta[n]),t},{}));return Object(r["c"])(()=>Object.assign(Object.assign({initialValues:Object(r["J"])(n)},a.value),{valid:a.value.valid&&!M(i.value).length,dirty:s.value}))}function ke(e,t,n){const i=Object(r["C"])(Object(r["J"])(n)||{}),o=Object(r["c"])(()=>i.value);function s(n,r=!1){if(i.value=he(n),!r)return;const o=e=>e.meta.touched;M(e.value).forEach(n=>{const r=e.value[n],s=Array.isArray(r)?r.some(o):o(r);if(s)return;const a=N(i.value,n);P(t,n,a)})}return Object(r["p"])(n)&&Object(r["N"])(n,e=>{s(e,!0)},{deep:!0}),Object(r["A"])(m,o),{readonlyInitialValues:o,initialValues:i,setInitialValues:s}}function xe(e){const t=Object(r["C"])({});function n(e){return Array.isArray(e)?e:e?[e]:[]}function i(e,r){r?t.value[e]=n(r):delete t.value[e]}function o(e){t.value=M(e).reduce((t,r)=>{const i=e[r];return i&&(t[r]=n(i)),t},{})}return e&&o(e),{errorBag:t,setErrorBag:o,setFieldErrorBag:i}}const je=Object(r["l"])({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0}},setup(e,t){const n=Object(r["I"])(e,"initialValues"),i=Object(r["I"])(e,"validationSchema"),{errors:o,values:s,meta:a,isSubmitting:c,submitCount:u,validate:l,validateField:h,handleReset:d,resetForm:f,handleSubmit:p,submitForm:m,setErrors:g,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:_,setTouched:w}=Ae({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount}),O=e.onSubmit?p(e.onSubmit):m;function T(e){j(e)&&e.preventDefault(),d(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function E(e,t){const n="function"!==typeof e||t?t:e;return p(n)(e)}function I(){return{meta:a.value,errors:o.value,values:s,isSubmitting:c.value,submitCount:u.value,validate:l,validateField:h,handleSubmit:E,handleReset:d,submitForm:m,setErrors:g,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:_,setTouched:w,resetForm:f}}return t.expose({setFieldError:v,setErrors:g,setFieldValue:y,setValues:b,setFieldTouched:_,setTouched:w,resetForm:f,validate:l,validateField:h}),function(){const n="form"===e.as?e.as:Object(r["F"])(e.as),i=q(n,t,I);if(!e.as)return i;const o="form"===e.as?{novalidate:!0}:{};return Object(r["n"])(n,Object.assign(Object.assign(Object.assign({},o),t.attrs),{onSubmit:O,onReset:T}),i)}}}),Ce=Object(r["l"])({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=Object(r["o"])(p,void 0),i=Object(r["c"])(()=>null===n||void 0===n?void 0:n.value[e.name]);function o(){return{message:i.value}}return()=>{if(!i.value)return;const n=e.as?Object(r["F"])(e.as):e.as,s=q(n,t,o),a=Object.assign({role:"alert"},t.attrs);return n||!Array.isArray(s)&&s||!(null===s||void 0===s?void 0:s.length)?!Array.isArray(s)&&s||(null===s||void 0===s?void 0:s.length)?Object(r["n"])(n,a,s):Object(r["n"])(n||"span",a,i.value):s}}})},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete _[f][s[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=_(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),d=n("3f8c"),f=n("ae93"),p=f.IteratorPrototype,m=f.BUGGY_SAFARI_ITERATORS,g=l("iterator"),v="keys",y="values",b="entries",_=function(){return this};e.exports=function(e,t,n,l,f,w,O){i(n,t,l);var T,E,I,A=function(e){if(e===f&&C)return C;if(!m&&e in x)return x[e];switch(e){case v:return function(){return new n(this,e)};case y:return function(){return new n(this,e)};case b:return function(){return new n(this,e)}}return function(){return new n(this)}},S=t+" Iterator",k=!1,x=e.prototype,j=x[g]||x["@@iterator"]||f&&x[f],C=!m&&j||A(f),R="Array"==t&&x.entries||j;if(R&&(T=o(R.call(new e)),p!==Object.prototype&&T.next&&(h||o(T)===p||(s?s(T,p):"function"!=typeof T[g]&&c(T,g,_)),a(T,S,!0,!0),h&&(d[S]=_))),f==y&&j&&j.name!==y&&(k=!0,C=function(){return j.call(this)}),h&&!O||x[g]===C||c(x,g,C),d[t]=C,f)if(E={values:A(y),keys:w?C:A(v),entries:A(b)},O)for(I in E)(m||k||!(I in x))&&u(x,I,E[I]);else r({target:t,proto:!0,forced:m||k},E);return E}},"7f9a":function(e,t,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8925:function(e,t,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=/#|\.prototype\./,o=function(e,t){var n=a[s(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"96cf":function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{l=t.regeneratorRuntime=u?e.exports:{},l.wrap=_;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={},g={};g[s]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(R([])));y&&y!==r&&i.call(y,s)&&(g=y);var b=E.prototype=O.prototype=Object.create(g);T.prototype=b.constructor=E,E.constructor=T,E[c]=T.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===T||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},I(A.prototype),A.prototype[a]=function(){return this},l.AsyncIterator=A,l.async=function(e,t,n,r){var i=new A(_(e,t,n,r));return l.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(b),b[c]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(e,t,n,r){var i=t&&t.prototype instanceof O?t:O,o=Object.create(i.prototype),s=new C(r||[]);return o._invoke=S(e,n,s),o}function w(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function O(){}function T(){}function E(){}function I(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function A(e){function t(n,r,o,s){var a=w(e[n],e,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),s)}s(a.arg)}var n;function r(e,r){function i(){return new Promise((function(n,i){t(e,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function S(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=w(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,k(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=w(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,m;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function R(e){if(e){var t=e[s];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){while(++r<e.length)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),y=h("concat"),b=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},_=!v||!y;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,i,o,s=a(this),h=l(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],b(o)){if(i=c(o.length),d+i>m)throw TypeError(g);for(n=0;n<i;n++,d++)n in o&&u(h,d,o[n])}else{if(d>=m)throw TypeError(g);u(h,d++,o)}return h.length=d,h}})},"9ab4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return h}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function u(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function h(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(s){throw i(e),s}}},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Q})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return ne})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return Z})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return re})),n.d(t,"n",(function(){return P})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return o})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return K})),n.d(t,"s",(function(){return D})),n.d(t,"t",(function(){return x})),n.d(t,"u",(function(){return B})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return z})),n.d(t,"x",(function(){return q})),n.d(t,"y",(function(){return W})),n.d(t,"z",(function(){return v})),n.d(t,"A",(function(){return L})),n.d(t,"B",(function(){return a})),n.d(t,"C",(function(){return U})),n.d(t,"D",(function(){return V})),n.d(t,"E",(function(){return b})),n.d(t,"F",(function(){return _})),n.d(t,"G",(function(){return r})),n.d(t,"H",(function(){return f})),n.d(t,"I",(function(){return u})),n.d(t,"J",(function(){return C})),n.d(t,"K",(function(){return w})),n.d(t,"L",(function(){return te})),n.d(t,"M",(function(){return oe})),n.d(t,"N",(function(){return H}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||B(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&y(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":P(e)||B(e)&&(e.toString===$||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||P(t)||z(t)?t:String(t),T={},E=[],I=()=>{},A=()=>!1,S=/^on[^a-z]/,k=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),j=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,N=(e,t)=>R.call(e,t),P=Array.isArray,D=e=>"[object Map]"===G(e),L=e=>"[object Set]"===G(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,V=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,q=e=>B(e)&&F(e.then)&&F(e.catch),$=Object.prototype.toString,G=e=>$.call(e),H=e=>G(e).slice(8,-1),z=e=>"[object Object]"===G(e),K=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Q=J(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Y=/\B([A-Z])/g,Z=J(e=>e.replace(Y,"-$1").toLowerCase()),ee=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=J(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t}}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=l("splice"),d=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(e,t){var n,r,l,h,g,v,y=a(this),b=s(y.length),_=i(e,b),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=b-_):(n=w-2,r=f(d(o(t),0),b-_)),b+n-r>p)throw TypeError(m);for(l=c(y,r),h=0;h<r;h++)g=_+h,g in y&&u(l,h,y[g]);if(l.length=r,n<r){for(h=_;h<b-r;h++)g=h+r,v=h+n,g in y?y[v]=y[g]:delete y[v];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>_;h--)g=h+r-1,v=h+n-1,g in y?y[v]=y[g]:delete y[v];for(h=0;h<n;h++)y[h+_]=arguments[h+2];return y.length=b-r+n,l}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),d=n("861d"),f=n("d9b5"),p=n("825a"),m=n("7b0b"),g=n("fc6a"),v=n("a04b"),y=n("577e"),b=n("5c6c"),_=n("7c73"),w=n("df75"),O=n("241c"),T=n("057f"),E=n("7418"),I=n("06cf"),A=n("9bf2"),S=n("d1e7"),k=n("9112"),x=n("6eeb"),j=n("5692"),C=n("f772"),R=n("d012"),N=n("90e3"),P=n("b622"),D=n("e538"),L=n("746f"),M=n("d44e"),F=n("69f3"),U=n("b727").forEach,V=C("hidden"),B="Symbol",q="prototype",$=P("toPrimitive"),G=F.set,H=F.getterFor(B),z=Object[q],K=i.Symbol,W=o("JSON","stringify"),J=I.f,X=A.f,Q=T.f,Y=S.f,Z=j("symbols"),ee=j("op-symbols"),te=j("string-to-symbol-registry"),ne=j("symbol-to-string-registry"),re=j("wks"),ie=i.QObject,oe=!ie||!ie[q]||!ie[q].findChild,se=a&&u((function(){return 7!=_(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=J(z,t);r&&delete z[t],X(e,t,n),r&&e!==z&&X(z,t,r)}:X,ae=function(e,t){var n=Z[e]=_(K[q]);return G(n,{type:B,tag:e,description:t}),a||(n.description=t),n},ce=function(e,t,n){e===z&&ce(ee,t,n),p(e);var r=v(t);return p(n),l(Z,r)?(n.enumerable?(l(e,V)&&e[V][r]&&(e[V][r]=!1),n=_(n,{enumerable:b(0,!1)})):(l(e,V)||X(e,V,b(1,{})),e[V][r]=!0),se(e,r,n)):X(e,r,n)},ue=function(e,t){p(e);var n=g(t),r=w(n).concat(pe(n));return U(r,(function(t){a&&!he.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?_(e):ue(_(e),t)},he=function(e){var t=v(e),n=Y.call(this,t);return!(this===z&&l(Z,t)&&!l(ee,t))&&(!(n||!l(this,t)||!l(Z,t)||l(this,V)&&this[V][t])||n)},de=function(e,t){var n=g(e),r=v(t);if(n!==z||!l(Z,r)||l(ee,r)){var i=J(n,r);return!i||!l(Z,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},fe=function(e){var t=Q(g(e)),n=[];return U(t,(function(e){l(Z,e)||l(R,e)||n.push(e)})),n},pe=function(e){var t=e===z,n=Q(t?ee:g(e)),r=[];return U(n,(function(e){!l(Z,e)||t&&!l(z,e)||r.push(Z[e])})),r};if(c||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,t=N(e),n=function(e){this===z&&n.call(ee,e),l(this,V)&&l(this[V],t)&&(this[V][t]=!1),se(this,t,b(1,e))};return a&&oe&&se(z,t,{configurable:!0,set:n}),ae(t,e)},x(K[q],"toString",(function(){return H(this).tag})),x(K,"withoutSetter",(function(e){return ae(N(e),e)})),S.f=he,A.f=ce,I.f=de,O.f=T.f=fe,E.f=pe,D.f=function(e){return ae(P(e),e)},a&&(X(K[q],"description",{configurable:!0,get:function(){return H(this).description}}),s||x(z,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),U(w(re),(function(e){L(e)})),r({target:B,stat:!0,forced:!c},{for:function(e){var t=y(e);if(l(te,t))return te[t];var n=K(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!f(e))throw TypeError(e+" is not a symbol");if(l(ne,e))return ne[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:u((function(){E.f(1)}))},{getOwnPropertySymbols:function(e){return E.f(m(e))}}),W){var me=!c||u((function(){var e=K();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(d(t)||void 0!==e)&&!f(e))return h(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!f(t))return t}),i[1]=t,W.apply(null,i)}})}K[q][$]||k(K[q],$,K[q].valueOf),M(K,B),R[V]=!0},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(e){var t=c(this,a("Promise")),n="function"==typeof e;return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!i&&"function"==typeof o){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&l(o.prototype,"finally",d,{unsafe:!0})}},a8e9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return L})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return A})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return f})),n.d(t,"p",(function(){return g})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return b})),n.d(t,"s",(function(){return x})),n.d(t,"t",(function(){return j}));var r=n("9ab4"),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o=function(e){var t=[],n=0,r=0;while(n<e.length){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=e[n++];var s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=o>>2,h=(3&o)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,s||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var c=i<e.length,u=c?n[e.charAt(i)]:64;++i;var l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==h)throw Error();var d=o<<2|a>>4;if(r.push(d),64!==u){var f=a<<4&240|u>>2;if(r.push(f),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){var t=i(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),u="";return[c(JSON.stringify(n)),c(JSON.stringify(a)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function m(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return d().indexOf("Electron/")>=0}function y(){var e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return d().indexOf("MSAppHost/")>=0}function _(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w="FirebaseError",O=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=w,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,T.prototype.create),o}return Object(r["c"])(t,e),t}(Error),T=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?E(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new O(i,a,r);return c},e}();function E(e,t){return e.replace(I,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function S(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=e[s],c=t[s];if(k(a)&&k(c)){if(!S(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){s=l[u];if(!n.includes(s))return!1}return!0}function k(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return t.length?"&"+t.join("&"):""}function j(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function C(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}})();function R(e,t){var n=new N(e,t);return n.subscribe.bind(n)}var N=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=P(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function P(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"===typeof e[i])return!0}return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("d9b5"),h=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,y="Number",b=i[y],_=b.prototype,w=c(f(_))==y,O=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,i,o,s,a,c,u=h(e,"number");if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var T,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(w?d((function(){_.valueOf.call(n)})):c(n)!=y)?u(new b(O(t)),n,E):O(t)},I=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;I.length>A;A++)a(b,T=I[A])&&!a(E,T)&&g(E,T,m(b,T));E.prototype=_,_.constructor=E,s(i,y,E)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))}).call(this,n("c8ba"))},abfd:function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f}));var o,s=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=u[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,r(["["+o+"]  "+e.name+":"],n))}},h=function(){function e(e){this.name=e,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}();function d(e){s.forEach((function(t){t.setLogLevel(e)}))}function f(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=a[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=s;r<i.length;r++){var c=i[r];n(c)}}},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t){var n=Math.floor,r=function(e,t){var s=e.length,a=n(s/2);return s<8?i(e,t):o(r(e.slice(0,a),t),r(e.slice(a),t),t)},i=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},o=function(e,t,n){var r=e.length,i=t.length,o=0,s=0,a=[];while(o<r||s<i)o<r&&s<i?a.push(n(e[o],t[s])<=0?e[o++]:t[s++]):a.push(o<r?e[o++]:t[s++]);return a};e.exports=r},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),h=n("c430"),d=l("iterator"),f=!1,p=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=a(a(o)),i!==Object.prototype&&(r=i)):f=!0);var m=void 0==r||s((function(){var e={};return r[d].call(e)!==e}));m&&(r={}),h&&!m||u(r,d)||c(r,d,p),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,_=h.process,w=h.Promise,O=d(h,"queueMicrotask"),T=O&&O.value;T||(r=function(){var e,t;v&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},p||v||g||!y||!b?!m&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=u.then,s=function(){l.call(u,r)}):s=v?function(){_.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)&&(a||"string"==typeof u[e])||(a&&o(l,e)?u[e]=l[e]:u[e]=h("Symbol."+e)),u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,_=o(p),w=i(_),O=r(m,g,3),T=s(w.length),E=0,I=v||a,A=t?I(p,T):n||d?I(p,0):void 0;T>E;E++)if((f||E in w)&&(y=w[E],b=O(y,E,_),e))if(t)A[E]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:c.call(A,y)}else switch(e){case 4:return!1;case 7:c.call(A,y)}return h?-1:u||l?l:A}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="devtools-plugin:setup"},c04e:function(e,t,n){var r=n("861d"),i=n("d9b5"),o=n("485a"),s=n("b622"),a=s("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,s=e[a];if(void 0!==s){if(void 0===t&&(t="default"),n=s.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),o(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c7b2:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return jr})),n.d(t,"b",(function(){return Rr})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Pr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return Dr})),n.d(t,"g",(function(){return Lr})),n.d(t,"h",(function(){return kr})),n.d(t,"i",(function(){return xr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function l(){}function h(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function d(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function f(e){return Object.prototype.hasOwnProperty.call(e,p)&&e[p]||(e[p]=++m)}var p="closure_uid_"+(1e9*Math.random()>>>0),m=0;function g(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function y(e,t,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:v,y.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function w(){this.s=this.s,this.o=this.o}var O=0,T={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=O)){var e=f(this);delete T[e]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var E=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},I=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"===typeof e?e.split(""):e,o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function A(e){e:{for(var t=Gn,n=e.length,r="string"===typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function k(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e){return/^[\s\xa0]*$/.test(e)}var j,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function R(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var P=u.navigator;if(P){var D=P.userAgent;if(D){j=D;break e}}j=""}function L(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function M(e){var t={};for(var n in e)t[n]=e[n];return t}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(var o=0;o<F.length;o++)n=F[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function V(e){return V[" "](e),e}function B(e){var t=ee;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}V[" "]=l;var q,$=R(j,"Opera"),G=R(j,"Trident")||R(j,"MSIE"),H=R(j,"Edge"),z=H||G,K=R(j,"Gecko")&&!(R(j.toLowerCase(),"webkit")&&!R(j,"Edge"))&&!(R(j,"Trident")||R(j,"MSIE"))&&!R(j,"Edge"),W=R(j.toLowerCase(),"webkit")&&!R(j,"Edge");function J(){var e=u.document;return e?e.documentMode:void 0}e:{var X="",Q=function(){var e=j;return K?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):$?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(X=Q?Q[1]:""),G){var Y=J();if(null!=Y&&Y>parseFloat(X)){q=String(Y);break e}}q=X}var Z,ee={};function te(){return B((function(){for(var e=0,t=C(String(q)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var o=t[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;e=N(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==o[2].length,0==s[2].length)||N(o[2],s[2]),o=o[3],s=s[3]}while(0==e)}return 0<=e}))}if(u.document&&G){var ne=J();Z=ne||(parseInt(q,10)||void 0)}else Z=void 0;var re=Z,ie=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{u.addEventListener("test",l,t),u.removeEventListener("test",l,t)}catch(n){}return e}();function oe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function se(e,t){if(oe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(K){e:{try{V(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ae[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&se.Z.h.call(this)}}oe.prototype.h=function(){this.defaultPrevented=!0},_(se,oe);var ae={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),ue=0;function le(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ue,this.ca=this.fa=!1}function he(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function de(e){this.src=e,this.g={},this.h=0}function fe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=E(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(he(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function pe(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}de.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=pe(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new le(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};var me="closure_lm_"+(1e6*Math.random()|0),ge={};function ve(e,t,n,r,i){if(r&&r.once)return _e(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)ve(e,t[o],n,r,i);return null}return n=Se(n),e&&e[ce]?e.N(t,n,d(r)?!!r.capture:!!r,i):ye(e,t,n,!1,r,i)}function ye(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=d(i)?!!i.capture:!!i,a=Ie(e);if(a||(e[me]=a=new de(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=be(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ie||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Te(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(){function e(n){return t.call(e.src,e.listener,n)}var t=Ee;return e}function _e(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)_e(e,t[o],n,r,i);return null}return n=Se(n),e&&e[ce]?e.O(t,n,d(r)?!!r.capture:!!r,i):ye(e,t,n,!0,r,i)}function we(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)we(e,t[o],n,r,i);else r=d(r)?!!r.capture:!!r,n=Se(n),e&&e[ce]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=pe(o,n,r,i),-1<n&&(he(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=pe(t,n,r,i)),(n=-1<e?t[e]:null)&&Oe(n))}function Oe(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ce])fe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Te(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(fe(n,e),0==n.h&&(n.src=null,t[me]=null)):he(e)}}}function Te(e){return e in ge?ge[e]:ge[e]="on"+e}function Ee(e,t){if(e.ca)e=!0;else{t=new se(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Oe(e),e=n.call(r,t)}return e}function Ie(e){return e=e[me],e instanceof de?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function ke(){w.call(this),this.i=new de(this),this.P=this,this.I=null}function xe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new oe(t,e);else if(t instanceof oe)t.target=t.target||e;else{var i=t;t=new oe(r,e),U(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=je(s,r,!0,t)&&i}if(s=t.g=e,i=je(s,r,!0,t)&&i,i=je(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=je(s,r,!1,t)&&i}function je(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&fe(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(ke,w),ke.prototype[ce]=!0,ke.prototype.removeEventListener=function(e,t,n,r){we(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)he(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=u.JSON.stringify;function Re(){var e=Be,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ne,Pe=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),De=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new Le}),(function(e){return e.reset()})),Le=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function Me(e){u.setTimeout((function(){throw e}),0)}function Fe(e,t){Ne||Ue(),Ve||(Ne(),Ve=!0),Be.add(e,t)}function Ue(){var e=u.Promise.resolve(void 0);Ne=function(){e.then(qe)}}var Ve=!1,Be=new Pe;function qe(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){Me(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1}function $e(e,t){ke.call(this),this.h=e||1,this.g=t||u,this.j=y(this.kb,this),this.l=Date.now()}function Ge(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=y(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=y(e.handleEvent,e)}return 2147483647<Number(t)?-1:u.setTimeout(e,t||0)}function ze(e){e.g=He((function(){e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}_($e,ke),s=$e.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(Ge(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){$e.Z.M.call(this),Ge(this),delete this.g};var Ke=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return i(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:ze(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(w);function We(e){w.call(this),this.h=e,this.g={}}_(We,w);var Je=[];function Xe(e,t,n,r){Array.isArray(n)||(n&&(Je[0]=n.toString()),n=Je);for(var i=0;i<n.length;i++){var o=ve(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Qe(e){L(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Oe(e)}),e),e.g={}}function Ye(){this.g=!0}function Ze(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function et(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function tt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+rt(e,n)+(r?" "+r:"")}))}function nt(e,t){e.info((function(){return"TIMEOUT: "+t}))}function rt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ce(n)}catch(a){return t}}We.prototype.M=function(){We.Z.M.call(this),Qe(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var it={},ot=null;function st(){return ot=ot||new ke}function at(e){oe.call(this,it.Ma,e)}function ct(e){var t=st();xe(t,new at(t,e))}function ut(e,t){oe.call(this,it.STAT_EVENT,e),this.stat=t}function lt(e){var t=st();xe(t,new ut(t,e))}function ht(e,t){oe.call(this,it.Na,e),this.size=t}function dt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){e()}),t)}it.Ma="serverreachability",_(at,oe),it.STAT_EVENT="statevent",_(ut,oe),it.Na="timingevent",_(ht,oe);var ft={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mt(){}function gt(e){return e.h||(e.h=e.i())}function vt(){}mt.prototype.h=null;var yt,bt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _t(){oe.call(this,"d")}function wt(){oe.call(this,"c")}function Ot(){}function Tt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new We(this),this.P=It,e=z?125:void 0,this.W=new $e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}_(_t,oe),_(wt,oe),_(Ot,mt),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},yt=new Ot;var It=45e3,At={},St={};function kt(e,t,n){e.K=1,e.v=Zt(Kt(t)),e.s=n,e.U=!0,xt(e,null)}function xt(e,t){e.F=Date.now(),Nt(e),e.A=Kt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),mn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Et,e.g=wr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ke(y(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?M(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ct(1),Ze(e.j,e.u,e.A,e.m,e.X,e.s)}function jt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if(r=Rt(e,n),r==St){4==t&&(e.o=4,lt(14),i=!1),tt(e.j,e.m,null,"[Incomplete Response]");break}if(r==At){e.o=4,lt(15),tt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}tt(e.j,e.m,r,null),Ft(e,r)}jt(e)&&r!=St&&r!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,lt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fr(t),t.L=!0,lt(11))):(tt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Lt(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?At:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Pt(e,e.P)}function Pt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=dt(y(e.eb,e),t)}function Dt(e){e.B&&(u.clearTimeout(e.B),e.B=null)}function Lt(e){0==e.l.G||e.I||gr(e.l,e)}function Mt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ge(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ft(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Tn(n.i,e)))if(n.I=e.N,!e.J&&Tn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(o){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;mr(n),rr(n)}dr(n),lt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=dt(y(n.ab,n),6e3));if(1>=On(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else yr(n,11)}else if((e.J||n.g==e)&&mr(n),!x(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var o=i[t];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=o[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=e.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(R(l,"spdy")||R(l,"quic")||R(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(En(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,Yt(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var f=e;if(r.oa=_r(r,r.H?r.la:null,r.W),f.J){In(r.i,f);var p=f,m=r.K;m&&p.setTimeout(m),p.B&&(Dt(p),Nt(p)),r.g=f}else hr(r);0<n.l.length&&sr(n)}else"stop"!=o[0]&&"close"!=o[0]||yr(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?yr(n,7):nr(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}ct(4)}catch(o){}}function Ut(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(h(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(h(e)||"string"===typeof e)I(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(h(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Ut(e),i=r.length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function Bt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Bt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function qt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];$t(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],$t(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function $t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}s=Tt.prototype,s.setTimeout=function(e){this.P=e},s.gb=function(e){e=e.target;var t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},s.Ia=function(e){try{if(e==this.g)e:{var t=Xn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=t||7==n||ct(8==n||0>=r?3:2),Dt(this);var i=this.g.ba();this.N=i;t:if(jt(this)){var o=Qn(this.g);e="";var s=o.length,a=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Mt(this),Lt(this);var c="";break t}this.h.i=new u.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,e+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=e,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,et(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(l)){var d=l;break t}}d=null}if(!(i=d)){this.i=!1,this.o=3,lt(12),Mt(this),Lt(this);break e}tt(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ft(this,i)}this.U?(Ct(this,t,c),z&&this.i&&3==t&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(tt(this.j,this.m,c,null),Ft(this,c)),4==t&&Mt(this),this.i&&!this.I&&(4==t?gr(this.l,this):(this.i=!1,Nt(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Mt(this),Lt(this)}}}catch(t){}},s.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&Nt(this))}},s.cancel=function(){this.I=!0,Mt(this)},s.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(nt(this.j,this.A),2!=this.K&&(ct(3),lt(17)),Mt(this),this.o=2,Lt(this)):Pt(this,this.Y-e)},s=Bt.prototype,s.R=function(){qt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},s.T=function(){return qt(this),this.g.concat()},s.get=function(e,t){return $t(this.h,e)?this.h[e]:t},s.set=function(e,t){$t(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},s.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};var Gt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,Wt(this,e.j),this.s=e.s,Jt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new hn;n.i=t.i,t.g&&(n.g=new Bt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Gt))?(this.g=!!t,Wt(this,n[1]||"",!0),this.s=nn(n[2]||""),Jt(this,n[3]||"",!0),Xt(this,n[4]),this.l=nn(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!t,this.h=new hn(null,this.g))}function Kt(e){return new zt(e)}function Wt(e,t,n){e.j=n?nn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Jt(e,t,n){e.i=n?nn(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof hn?(e.h=t,vn(e.h,e.g)):(n||(t=rn(t,un)),e.h=new hn(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Zt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function en(e){return e instanceof zt?Kt(e):new zt(e,void 0)}function tn(e,t,n,r){var i=new zt(null,void 0);return e&&Wt(i,e),t&&Jt(i,t),n&&Xt(i,n),r&&(i.l=r),i}function nn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,on),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function on(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rn(t,sn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rn(t,sn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(rn(n,"/"==n.charAt(0)?cn:an,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",rn(n,ln)),e.join("")};var sn=/[#\/\?@]/g,an=/[#\?:]/g,cn=/[#\?]/g,un=/[#\?@]/g,ln=/#/g;function hn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function dn(e){e.g||(e.g=new Bt,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function fn(e,t){dn(e),t=gn(e,t),$t(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,$t(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&qt(e)))}function pn(e,t){return dn(e),t=gn(e,t),$t(e.g.h,t)}function mn(e,t,n){fn(e,t),0<n.length&&(e.i=null,e.g.set(gn(e,t),k(n)),e.h+=n.length)}function gn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function vn(e,t){t&&!e.j&&(dn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(fn(this,t),mn(this,n,e))}),e)),e.j=t}s=hn.prototype,s.add=function(e,t){dn(this),this.i=null,e=gn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},s.forEach=function(e,t){dn(this),this.g.forEach((function(n,r){I(n,(function(n){e.call(t,n,r,this)}),this)}),this)},s.T=function(){dn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n},s.R=function(e){dn(this);var t=[];if("string"===typeof e)pn(this,e)&&(t=S(t,this.g.get(gn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},s.set=function(e,t){return dn(this),this.i=null,e=gn(this,e),pn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};var yn=function(){function e(e,t){this.h=e,this.g=t}return e}();function bn(e){this.l=e||_n,u.PerformanceNavigationTiming?(e=u.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function wn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function On(e){return e.h?1:e.g?e.g.size:0}function Tn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function En(e,t){e.g?e.g.add(t):e.h=t}function In(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=o(e.g.values()),s=i.next();!s.done;s=i.next()){var a=s.value;r=r.concat(a.D)}}catch(c){t={error:c}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return k(e.i)}function Sn(){}function kn(){this.g=new Sn}function xn(e,t,n){var r=n||"";try{Vt(e,(function(e,n){var i=e;d(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function jn(e,t){var n=new Ye;if(u.Image){var r=new Image;r.onload=b(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(Cn,n,r,"TestLoadImage: timeout",!1,t),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function Rn(e){this.l=e.$b||null,this.j=e.ib||!1}function Nn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){var e,t;if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=o(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){e={error:s}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},Sn.prototype.stringify=function(e){return u.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return u.JSON.parse(e,void 0)},_(Rn,mt),Rn.prototype.g=function(){return new Nn(this.l,this.j)},Rn.prototype.i=function(e){return function(){return e}}({}),_(Nn,ke);var Pn=0;function Dn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Mn(e)}function Mn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}s=Nn.prototype,s.open=function(e,t){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Mn(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||u).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=Pn},s.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ln(this):Mn(this),3==this.readyState&&Dn(this)}},s.Ua=function(e){this.g&&(this.response=this.responseText=e,Ln(this))},s.Ta=function(e){this.g&&(this.response=e,Ln(this))},s.ha=function(){this.g&&Ln(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fn=u.JSON.parse;function Un(e){ke.call(this),this.headers=new Bt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}_(Un,ke);var Vn="",Bn=/^https?$/i,qn=["POST","PUT"];function $n(e){return G&&te()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Gn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),Wn(e)}function zn(e){e.D||(e.D=!0,xe(e,"complete"),xe(e,"error"))}function Kn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))He(e.Fa,0,e);else if(xe(e,"readystatechange"),4==Xn(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var o=String(e.H).match(Gt)[1]||null;if(!o&&u.self&&u.self.location){var s=u.self.location.protocol;o=s.substr(0,s.length-1)}i=!Bn.test(o?o.toLowerCase():"")}t=i}if(t)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var a=2<Xn(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.ba()+"]",zn(e)}}finally{Wn(e)}}}function Wn(e,t){if(e.g){Jn(e);var n=e.g,r=e.C[0]?l:null;e.g=null,e.C=null,t||xe(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function Jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(u.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Vn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){var t="";return L(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function er(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tr(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=er("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=er("baseRetryDelayMs",5e3,e),this.$a=er("retryDelaySeedMs",1e4,e),this.Ya=er("forwardChannelMaxRetries",2,e),this.ra=er("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(e&&e.concurrentRequestLimit),this.Ca=new kn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function nr(e){if(ir(e),3==e.G){var t=e.V++,n=Kt(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ur(e,n),t=new Tt(e,e.h,t,void 0),t.K=2,t.v=Zt(Kt(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(t.v.toString(),"")),!n&&u.Image&&((new Image).src=t.v,n=!0),n||(t.g=wr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Nt(t)}br(e)}function rr(e){e.g&&(fr(e),e.g.cancel(),e.g=null)}function ir(e){rr(e),e.u&&(u.clearTimeout(e.u),e.u=null),mr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&u.clearTimeout(e.m),e.m=null)}function or(e,t){e.l.push(new yn(e.Za++,t)),3==e.G&&sr(e)}function sr(e){wn(e.i)||e.m||(e.m=!0,Fe(e.Ha,e),e.C=0)}function ar(e,t){return!(On(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=dt(y(e.Ha,e,t),vr(e,e.C)),e.C++,!0))}function cr(e,t){var n;n=t?t.m:e.V++;var r=Kt(e.F);Yt(r,"SID",e.J),Yt(r,"RID",n),Yt(r,"AID",e.U),ur(e,r),e.o&&e.s&&Zn(r,e.o,e.s),n=new Tt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=lr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),En(e.i,n),kt(n,r,t)}function ur(e,t){e.j&&Vt({},(function(e,n){Yt(t,n,e)}))}function lr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?y(e.j.Oa,e.j,e):null;e:for(var i=e.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=o,0>u)o=Math.max(0,i[c].h-100),a=!1;else try{xn(l,s,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=s.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function hr(e){e.g||e.u||(e.Y=1,Fe(e.Ga,e),e.A=0)}function dr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=dt(y(e.Ga,e),vr(e,e.A)),e.A++,!0)}function fr(e){null!=e.B&&(u.clearTimeout(e.B),e.B=null)}function pr(e){e.g=new Tt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Kt(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ur(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Zn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Zt(Kt(t)),n.s=null,n.U=!0,xt(n,e)}function mr(e){null!=e.v&&(u.clearTimeout(e.v),e.v=null)}function gr(e,t){var n=null;if(e.g==t){mr(e),fr(e),e.g=null;var r=2}else{if(!Tn(e.i,t))return;n=t.D,In(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=st(),xe(r,new ht(r,n,t,i)),sr(e)}else hr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&ar(e,t)||2==r&&dr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:yr(e,5);break;case 4:yr(e,10);break;case 3:yr(e,6);break;default:yr(e,2)}}function vr(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function yr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=y(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Wt(n,"https"),Zt(n)),jn(n.toString(),r)}else lt(2);e.G=0,e.j&&e.j.va(t),br(e),ir(e)}function br(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,k(e.l),e.l.length=0),e.j.ua())}function _r(e,t,n){var r=en(n);if(""!=r.i)t&&Jt(r,t+"."+r.i),Xt(r,r.m);else{var i=u.location;r=tn(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&L(e.aa,(function(e,t){Yt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(r,t,n),Yt(r,"VER",e.ma),ur(e,r),r}function wr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Un(new Rn({ib:!0})):new Un(e.qa),t.L=e.H,t}function Or(){}function Tr(){if(G&&!(10<=Number(re)))throw Error("Environmental error: no available transport.")}function Er(e,t){ke.call(this),this.g=new tr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function Ir(e){_t.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ar(){wt.call(this),this.status=1}function Sr(e){this.g=e}s=Un.prototype,s.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yt.g(),this.C=this.u?gt(this.u):gt(yt),this.g.onreadystatechange=y(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void Hn(this,o)}e=n||"";var i=new Bt(this.headers);r&&Vt(r,(function(e,t){i.set(t,e)})),r=A(i.T()),n=u.FormData&&e instanceof u.FormData,!(0<=E(qn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Hn(this,o)}},s.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Wn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Un.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},s.cb=function(){Kn(this)},s.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fn(t)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=tr.prototype,s.ma=8,s.G=1,s.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},s.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new Tt(this,this.h,e,void 0),n=this.s;if(this.P&&(n?(n=M(n),U(n,this.P)):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(o="__data__"in o.g&&(o=o.g.__data__,"string"===typeof o)?o.length:void 0,void 0===o)break;if(r+=o,4096<r){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=lr(this,t,r),i=Kt(this.F),Yt(i,"RID",e),Yt(i,"CVER",22),this.D&&Yt(i,"X-HTTP-Session-Id",this.D),ur(this,i),this.o&&n&&Zn(i,this.o,n),En(this.i,t),this.Ra&&Yt(i,"TYPE","init"),this.ja?(Yt(i,"$req",r),Yt(i,"SID","null"),t.$=!0,kt(t,i,null)):kt(t,i,r),this.G=2}}else 3==this.G&&(e?cr(this,e):0==this.l.length||wn(this.i)||cr(this))},s.Ga=function(){if(this.u=null,pr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=dt(y(this.bb,this),e)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,lt(10),rr(this),pr(this))},s.ab=function(){null!=this.v&&(this.v=null,rr(this),dr(this),lt(19))},s.jb=function(e){e?(this.h.info("Successfully pinged google.com"),lt(2)):(this.h.info("Failed to ping google.com"),lt(1))},s=Or.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Tr.prototype.g=function(e,t){return new Er(e,t)},_(Er,ke),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Fe(y(e.hb,e,t))),lt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=_r(e,null,e.W),sr(e)},Er.prototype.close=function(){nr(this.g)},Er.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,or(this.g,t)}else this.v?(t={},t.__data__=Ce(e),or(this.g,t)):or(this.g,e)},Er.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,Er.Z.M.call(this)},_(Ir,_t),_(Ar,wt),_(Sr,Or),Sr.prototype.xa=function(){xe(this.g,"a")},Sr.prototype.wa=function(e){xe(this.g,new Ir(e))},Sr.prototype.va=function(e){xe(this.g,new Ar(e))},Sr.prototype.ua=function(){xe(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,ft.NO_ERROR=0,ft.TIMEOUT=8,ft.HTTP_ERROR=6,pt.COMPLETE="complete",vt.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var kr=function(){return new Tr},xr=function(){return st()},jr=ft,Cr=pt,Rr=it,Nr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=Rn,Dr=vt,Lr=Un}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=i(e),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84");e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},d9b5:function(e,t,n){var r=n("d066"),i=n("fdbf");e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return"function"==typeof t&&Object(e)instanceof t}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=o.values;for(var h in i){var d=r[h],f=d&&d.prototype;if(f){if(f[c]!==l)try{s(f,c,l)}catch(m){f[c]=l}if(f[u]||s(f,u,h),i[h])for(var p in o)if(f[p]!==o[p])try{s(f,p,o[p])}catch(m){f[p]=o[p]}}}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var h={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new l(e):void 0===e?l():l(e);return""===e&&(h[t]=!0),t};u(d,l);var f=d.prototype=l.prototype;f.constructor=d;var p=f.toString,m="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=p.call(e);if(s(h,e))return"";var n=m?t.slice(7,-1):t.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e163:function(e,t,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=i(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),v=n("861d"),y=n("1c0b"),b=n("19aa"),_=n("8925"),w=n("2266"),O=n("1c7e"),T=n("4840"),E=n("2cf4").set,I=n("b575"),A=n("cdf9"),S=n("44de"),k=n("f069"),x=n("e667"),j=n("69f3"),C=n("94ca"),R=n("b622"),N=n("6069"),P=n("605d"),D=n("2d00"),L=R("species"),M="Promise",F=j.get,U=j.set,V=j.getterFor(M),B=h&&h.prototype,q=h,$=B,G=u.TypeError,H=u.document,z=u.process,K=k.f,W=K,J=!!(H&&H.createEvent&&u.dispatchEvent),X="function"==typeof PromiseRejectionEvent,Q="unhandledrejection",Y="rejectionhandled",Z=0,ee=1,te=2,ne=1,re=2,ie=!1,oe=C(M,(function(){var e=_(q),t=e!==String(q);if(!t&&66===D)return!0;if(c&&!$["finally"])return!0;if(D>=51&&/native code/.test(e))return!1;var n=new q((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[L]=r,ie=n.then((function(){}))instanceof r,!ie||!t&&N&&!X})),se=oe||!O((function(e){q.all(e)["catch"]((function(){}))})),ae=function(e){var t;return!(!v(e)||"function"!=typeof(t=e.then))&&t},ce=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;I((function(){var r=e.value,i=e.state==ee,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,d=u.reject,f=u.domain;try{l?(i||(e.rejection===re&&de(e),e.rejection=ne),!0===l?s=r:(f&&f.enter(),s=l(r),f&&(f.exit(),c=!0)),s===u.promise?d(G("Promise-chain cycle")):(a=ae(s))?a.call(s,h,d):h(s)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&le(e)}))}},ue=function(e,t,n){var r,i;J?(r=H.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=u["on"+e])?i(r):e===Q&&S("Unhandled promise rejection",n)},le=function(e){E.call(u,(function(){var t,n=e.facade,r=e.value,i=he(e);if(i&&(t=x((function(){P?z.emit("unhandledRejection",r,n):ue(Q,n,r)})),e.rejection=P||he(e)?re:ne,t.error))throw t.value}))},he=function(e){return e.rejection!==ne&&!e.parent},de=function(e){E.call(u,(function(){var t=e.facade;P?z.emit("rejectionHandled",t):ue(Y,t,e.value)}))},fe=function(e,t,n){return function(r){e(t,r,n)}},pe=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=te,ce(e,!0))},me=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var r=ae(t);r?I((function(){var n={done:!1};try{r.call(t,fe(me,n,e),fe(pe,n,e))}catch(i){pe(n,i,e)}})):(e.value=t,e.state=ee,ce(e,!1))}catch(i){pe({done:!1},i,e)}}};if(oe&&(q=function(e){b(this,q,M),y(e),r.call(this);var t=F(this);try{e(fe(me,t),fe(pe,t))}catch(n){pe(t,n)}},$=q.prototype,r=function(e){U(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=f($,{then:function(e,t){var n=V(this),r=K(T(this,q));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=P?z.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&ce(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=F(e);this.promise=e,this.resolve=fe(me,t),this.reject=fe(pe,t)},k.f=K=function(e){return e===q||e===o?new i(e):W(e)},!c&&"function"==typeof h&&B!==Object.prototype)){s=B.then,ie||(d(B,"then",(function(e,t){var n=this;return new q((function(e,t){s.call(n,e,t)})).then(e,t)}),{unsafe:!0}),d(B,"catch",$["catch"],{unsafe:!0}));try{delete B.constructor}catch(ge){}p&&p(B,$)}a({global:!0,wrap:!0,forced:oe},{Promise:q}),m(q,M,!1,!0),g(M),o=l(M),a({target:M,stat:!0,forced:oe},{reject:function(e){var t=K(this);return t.reject.call(void 0,e),t.promise}}),a({target:M,stat:!0,forced:c||oe},{resolve:function(e){return A(c&&this===o?q:this,e)}}),a({target:M,stat:!0,forced:se},{all:function(e){var t=this,n=K(t),r=n.resolve,i=n.reject,o=x((function(){var n=y(t.resolve),o=[],s=0,a=1;w(e,(function(e){var c=s++,u=!1;o.push(void 0),a++,n.call(t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=K(t),r=n.reject,i=x((function(){var i=y(t.resolve);w(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]})),n.d(t,"i",(function(){return r["i"]})),n.d(t,"j",(function(){return r["j"]})),n.d(t,"k",(function(){return r["k"]})),n.d(t,"l",(function(){return r["l"]})),n.d(t,"m",(function(){return r["m"]})),n.d(t,"n",(function(){return r["n"]}))},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ot})),n.d(t,"b",(function(){return nr})),n.d(t,"c",(function(){return st})),n.d(t,"d",(function(){return ut})),n.d(t,"e",(function(){return ct}));var r=n("a8e9"),i=n("5606"),o=n("9ab4"),s=n("abfd"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new r["b"]("auth","Firebase",c()),l=new s["b"]("@firebase/auth");function h(e,...t){l.logLevel<=s["a"].ERROR&&l.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw p(e,...t)}function f(e,...t){return p(e,...t)}function p(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function m(e,t,...n){if(!e)throw p(t,...n)}function g(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function v(e,t){e||g(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function b(e){v(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(v(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==t&&void 0!==t?t:{}))return e;d(e,"already-initialized")}const o=n.initialize({options:t});return o}function w(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,v(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){v(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},C=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,i,o={}){return P(e,o,()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["s"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(x.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),x.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function P(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},j),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,n=t.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");d(e,s)}}catch(o){if(o instanceof r["c"])throw o;d(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await N(e,t,n,r,i);return"mfaPendingCredential"in o&&d(e,"multi-factor-auth-required",{serverResponse:o}),o}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(f(this.auth,"timeout")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=f(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=Object(r["i"])(e),i=await n.getIdToken(t),o=G(i);m(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:B($(o.auth_time)),issuedAtTime:B($(o.iat)),expirationTime:B($(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function G(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function H(e){const t=G(e);return m(t,"internal-error"),m("undefined"!==typeof t.exp,"internal-error"),m("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&K(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await z(e,V(n,{idToken:r}));m(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?Z(o.providerUserInfo):[],a=Y(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Q(e){const t=Object(r["i"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Z(e){return e.map(e=>{var{providerId:t}=e,n=Object(o["f"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t){const n=await P(e,{},()=>{const n=Object(r["s"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=L(e,i,"/v1/token","key="+o);return x.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m("undefined"!==typeof e.idToken,"internal-error"),m("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ee(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new te;return n&&(m("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(m("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(m("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){m("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(o["f"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:T}=t;m(b&&T,e,"internal-error");const E=te.fromJSON(this.name,T);m("string"===typeof b,e,"internal-error"),ne(l,e.name),ne(h,e.name),m("boolean"===typeof _,e,"internal-error"),m("boolean"===typeof w,e,"internal-error"),ne(d,e.name),ne(f,e.name),ne(p,e.name),ne(g,e.name),ne(v,e.name),ne(y,e.name);const I=new re({uid:b,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:y});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new te;r.updateFromServerResponse(t);const i=new re({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const oe=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n){return`firebase:${e}:${t}:${n}`}class ae{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=se(this.userKey,r.apiKey,i),this.fullPersistenceKey=se("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ae(b(oe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||b(oe);const o=se(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=re._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ae(i,e,n)):new ae(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pe(t))return"Blackberry";if(me(t))return"Webos";if(le(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(fe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=Object(r["j"])()){return/firefox\//i.test(e)}function le(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["j"])()){return/crios\//i.test(e)}function de(e=Object(r["j"])()){return/iemobile/i.test(e)}function fe(e=Object(r["j"])()){return/android/i.test(e)}function pe(e=Object(r["j"])()){return/blackberry/i.test(e)}function me(e=Object(r["j"])()){return/webos/i.test(e)}function ge(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)}function ve(e=Object(r["j"])()){var t;return ge(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["n"])()&&10===document.documentMode}function be(e=Object(r["j"])()){return ge(e)||fe(e)||me(e)||pe(e)||/windows phone/i.test(e)||de(e)}function _e(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t=[]){let n;switch(e){case"Browser":n=ce(Object(r["j"])());break;case"Worker":n=`${ce(Object(r["j"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ee(this),this.idTokenSubscription=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=b(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ae.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&b(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await ae.create(this,[b(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return m(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=we(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Te(e){return Object(r["i"])(e)}class Ee{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return g("not implemented")}_getIdTokenResponse(e){return g("not implemented")}_linkToIdToken(e,t){return g("not implemented")}_getReauthenticationResolver(e){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Ie{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ke(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="http://localhost";class Ne extends Ie{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(o["f"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ne(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){const t=this.buildRequest();return Ce(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ce(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}buildRequest(){const e={requestUri:Re,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["s"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function Le(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const Me={["USER_NOT_FOUND"]:"user-not-found"};async function Fe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),Me)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ie{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ue({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ue({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Le(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Fe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ue({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=Object(r["t"])(Object(r["h"])(e))["link"],n=t?Object(r["t"])(Object(r["h"])(t))["deep_link_id"]:null,i=Object(r["t"])(Object(r["h"])(e))["deep_link_id"],o=i?Object(r["t"])(Object(r["h"])(i))["link"]:null;return o||i||n||t||e}class qe{constructor(e){var t,n,i,o,s,a;const c=Object(r["t"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Ve(null!==(i=c["mode"])&&void 0!==i?i:null);m(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(){this.providerId=$e.PROVIDER_ID}static credential(e,t){return je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qe.parseLink(t);return m(n,"argument-error"),je._fromEmailAndCode(e,n.code,n.tenantId)}}$e.PROVIDER_ID="password",$e.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze extends He{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch(t){return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com",ze.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends He{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ke.credential(t,n)}catch(r){return null}}}Ke.GOOGLE_SIGN_IN_METHOD="google.com",Ke.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We extends He{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(t){return null}}}We.GITHUB_SIGN_IN_METHOD="github.com",We.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends He{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return D(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.TWITTER_SIGN_IN_METHOD="twitter.com",Je.PROVIDER_ID="twitter.com";class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await re._fromIdTokenResponse(e,n,r),o=Ye(n),s=new Qe({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ye(n);return new Qe({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ye(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ze.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Ze(e,t,n,r)}}function et(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ze._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t,n=!1){const r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qe._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await z(e,et(r,i,t,e),n);m(o.idToken,r,"internal-error");const s=G(o.idToken);m(s,r,"internal-error");const{sub:a}=s;return m(e.uid===a,r,"user-mismatch"),Qe._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&d(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r="signIn",i=await et(e,r,t),o=await Qe._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function it(e,t){return rt(Te(e),t)}async function ot(e,t,n){const r=Te(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await Qe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function st(e,t,n){return it(Object(r["i"])(e),$e.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["i"])(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await z(i,at(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function ut(e){return Object(r["i"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}new WeakMap;const ht="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ht,"1"),this.storage.removeItem(ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){const e=Object(r["j"])();return le(e)||ge(e)}const pt=1e3,mt=10;class gt extends dt{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ft()&&_e(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gt.type="LOCAL";const vt=gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends dt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const bt=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new wt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await _t(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Ot("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function It(e){Et().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return"undefined"!==typeof Et()["WorkerGlobalScope"]&&"function"===typeof Et()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function kt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function xt(){return At()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebaseLocalStorageDb",Ct=1,Rt="firebaseLocalStorage",Nt="fbase_key";class Pt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Lt(){const e=indexedDB.deleteDatabase(jt);return new Pt(e).toPromise()}function Mt(){const e=indexedDB.open(jt,Ct);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Nt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Lt(),t(await Mt()))})})}async function Ft(e,t,n){const r=Dt(e,!0).put({[Nt]:t,value:n});return new Pt(r).toPromise()}async function Ut(e,t){const n=Dt(e,!1).get(t),r=await new Pt(n).toPromise();return void 0===r?null:r.value}function Vt(e,t){const n=Dt(e,!0).delete(t);return new Pt(n).toPromise()}const Bt=800,qt=3;class $t{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Mt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>qt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wt._getInstance(xt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&kt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Ft(e,ht,"1"),await Vt(e,ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ft(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Ut(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Dt(e,!1).getAll();return new Pt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$t.type="LOCAL";const Gt=$t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Kt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=f("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",zt().appendChild(r)})}function Wt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wt("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jt="recaptcha";async function Xt(e,t,n){var r;const i=await n.verify();try{let o;if(m("string"===typeof i,e,"argument-error"),m(n.type===Jt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){m("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{m("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;m(n,e,"missing-multi-factor-info");const s=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Pe(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return Xt(this.auth,e,Object(r["i"])(t))}static credential(e,t){return Ue._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qt.credentialFromTaggedObject(t)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ue._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return t?b(t):(m(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.PROVIDER_ID="phone",Qt.PHONE_SIGN_IN_METHOD="phone";class Zt extends Ie{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function en(e){return rt(e.auth,new Zt(e),e.bypassAuthState)}function tn(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),nt(n,new Zt(e),e.bypassAuthState)}async function nn(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),tt(n,new Zt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return en;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:d(this.auth,"internal-error")}}resolve(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new S(2e3,1e4);class sn extends rn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const e=Ot();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,on.get())};e()}}sn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="pendingRedirect",cn=new Map;class un extends rn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cn.get(this.auth._key());if(!e){try{const t=await ln(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cn.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ln(e,t){const n=dn(t),r="true"===await hn(e)._get(n);return await hn(e)._remove(n),r}function hn(e){return b(e._redirectPersistence)}function dn(e){return se(an,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t,n=!1){const r=Te(e),i=Yt(r,t),o=new un(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn=6e5;class mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(f(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(e))}saveEventToCache(e){this.cachedEventUids.add(gn(e)),this.lastProcessedEventTime=Date.now()}}function gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function vn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function yn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wn=/^https?/;async function On(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bn(e);for(const r of t)try{if(Tn(r))return}catch(n){}d(e,"unauthorized-domain")}function Tn(e){const t=O(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!wn.test(n))return!1;if(_n.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new S(3e4,6e4);function In(){const e=Et().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function An(e){return new Promise((t,n)=>{var r,i,o;function s(){In(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{In(),n(f(e,"network-request-failed"))},timeout:En.get()})}if(null===(i=null===(r=Et().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Et().gapi)||void 0===o?void 0:o.load)){const t=Wt("iframefcb");return Et()[t]=()=>{gapi.load?s():n(f(e,"network-request-failed"))},Kt("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw Sn=null,e})}let Sn=null;function kn(e){return Sn=Sn||An(e),Sn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new S(5e3,15e3),jn="__/auth/iframe",Cn="emulator/auth/iframe",Rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pn(e){const t=e.config;m(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,Cn):`https://${e.config.authDomain}/${jn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Nn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["s"])(o).slice(1)}`}async function Dn(e){const t=await kn(e),n=Et().gapi;return m(n,e,"internal-error"),t.open({where:document.body,url:Pn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=f(e,"network-request-failed"),o=Et().setTimeout(()=>{r(i)},xn.get());function s(){Et().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mn=500,Fn=600,Un="_blank",Vn="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qn(e,t,n,i=Mn,o=Fn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ln),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=he(l)?Un:n),ue(l)&&(t=t||Vn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ve(l)&&"_self"!==c)return $n(t||"",c),new Bn(null);const d=window.open(t||"",c,h);m(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Bn(d)}function $n(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Hn="emulator/auth/handler";function zn(e,t,n,o,s,a){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["m"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof He){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Kn(e)}?${Object(r["s"])(u).slice(1)}`}function Kn({config:e}){return e.emulator?k(e,Hn):`https://${e.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bt,this._completeRedirectFn=fn}async _openPopup(e,t,n,r){var i;v(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=zn(e,t,n,O(),r);return qn(e,o,Ot())}async _openRedirect(e,t,n,r){return await this._originValidation(e),It(zn(e,t,n,O(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Dn(e),n=new mn(e);return t.register("authEvent",t=>{m(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Wn,{type:Wn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wn];void 0!==i&&t(!!i),d(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=On(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return be()||le()||ge()}}const Xn=Jn;var Qn="@firebase/auth",Yn="0.17.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{m(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),m(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:we(e)},s=new Oe(t,r);return w(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new Zn(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(Qn,Yn,er(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e=Object(i["e"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():_(e,{popupRedirectResolver:Xn,persistence:[Gt,vt,bt]})}tr("Browser")},f069:function(e,t,n){"use strict";var r=n("1c0b"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f5df:function(e,t,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),s))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),h=n("1dde"),d=h("slice"),f=l("species"),p=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var n,r,l,h=c(this),d=a(h.length),g=s(e,d),v=s(void 0===t?d:t,d);if(o(h)&&(n=h.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(h,g,v);for(r=new(void 0===n?Array:n)(m(v-g,0)),l=0;g<v;g++,l++)g in h&&u(r,l,h[g]);return r.length=l,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n("9ab4"),i=n("a8e9"),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),s="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(f){}try{for(var i=Object(r["h"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["e"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(f){}}}catch(p){t={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=s),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r["b"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r["g"])(Object(r["g"])([],Object(r["e"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(r["e"])(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=s),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=s),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["h"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["e"])(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);s===f&&d.resolve(a)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var s=Object(r["h"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=s),this.component?this.component.multipleInstances?e:s:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function c(e){return e===s?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.4b72ebe7.js.map