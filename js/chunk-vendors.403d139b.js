(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),s=n("5c6c"),o=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=o(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return s(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ts})),n.d(e,"b",(function(){return Si})),n.d(e,"c",(function(){return Ci}));var r=n("5606"),i=n("ffa6"),s=n("abfd"),o=n("a8e9"),a=n("c7b2");
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
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
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
 */const l=new s["b"]("@firebase/firestore");function h(){return l.logLevel}function f(t,...e){if(l.logLevel<=s["a"].DEBUG){const n=e.map(g);l.debug(`Firestore (${u}): ${t}`,...n)}}function d(t,...e){if(l.logLevel<=s["a"].ERROR){const n=e.map(g);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s["a"].WARN){const n=e.map(g);l.warn(`Firestore (${u}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function m(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw d(e),new Error(e)}function v(t,e){t||m()}function y(t,e){return t}
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class O{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class _{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new O;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new O,t.enqueueRetryable(()=>r(this.currentUser))};const s=e=>{t.enqueueRetryable(async()=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)})};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new O)}},0),t.enqueueRetryable(async()=>{0===this.i&&(await i.promise,await r(this.currentUser))})}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new _(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new c(t)}}class T{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new T(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
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
 */class A{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
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
 */function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */A.T=-1;class k{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function C(t,e){return t<e?-1:t>e?1:0}function N(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
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
class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new x(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new x(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function L(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends M{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends M{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return U.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
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
 */class B{constructor(t){this.fields=t,t.sort(V.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return N(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
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
class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=$.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function q(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
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
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new x(e.seconds,e.nanos)}
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
 */function X(t){return null==t}function J(t){return 0===t&&1/t==-1/0}function Q(t){return"number"==typeof t&&Number.isInteger(t)&&!J(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(F.fromString(t))}static fromName(t){return new Y(F.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new F(t.slice()))}}
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
 */function Z(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:m()}function tt(t,e){const n=Z(t);if(n!==Z(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return W(t).isEqual(W(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return q(t.bytesValue).isEqual(q(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),r=z(e.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return N(t.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!tt(n[i],r[i])))return!1;return!0}(t,e);default:return m()}}function et(t,e){return void 0!==(t.values||[]).find(t=>tt(t,e))}function nt(t,e){const n=Z(t),r=Z(e);if(n!==r)return C(n,r);switch(n){case 0:return 0;case 1:return C(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),r=z(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return rt(t.timestampValue,e.timestampValue);case 4:return rt(W(t),W(e));case 5:return C(t.stringValue,e.stringValue);case 6:return function(t,e){const n=q(t),r=q(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=C(n[i],r[i]);if(0!==t)return t}return C(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=C(z(t.latitude),z(e.latitude));return 0!==n?n:C(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=nt(n[i],r[i]);if(t)return t}return C(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=C(r[o],s[o]);if(0!==t)return t;const e=nt(n[r[o]],i[s[o]]);if(0!==e)return e}return C(r.length,s.length)}(t.mapValue,e.mapValue);default:throw m()}}function rt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return C(t,e);const n=H(t),r=H(e),i=C(n.seconds,r.seconds);return 0!==i?i:C(n.nanos,r.nanos)}function it(t){return st(t)}function st(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?q(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=st(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${st(t.fields[i])}`;return n+"}"}(t.mapValue):m();var e,n}function ot(t){return!!t&&"integerValue"in t}function at(t){return!!t&&"arrayValue"in t}function ct(t){return!!t&&"mapValue"in t}function ut(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return L(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ut(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ut(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ct(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ut(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ut(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ct(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return tt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ct(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){L(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new lt(ut(this.value))}}function ht(t){const e=[];return L(t.fields,(t,n)=>{const r=new V([t]);if(ct(n)){const t=ht(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new B(e)
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
 */}class ft{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ft(t,0,R.min(),lt.empty(),0)}static newFoundDocument(t,e,n){return new ft(t,1,e,n,0)}static newNoDocument(t,e){return new ft(t,2,e,lt.empty(),0)}static newUnknownDocument(t,e){return new ft(t,3,e,lt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new ft(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class dt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function pt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dt(t,e,n,r,i,s,o)}function gt(t){const e=y(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>bt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=kt(e.startAt)),e.endAt&&(t+="|ub:",t+=kt(e.endAt)),e.A=t}return e.A}function mt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${it(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+kt(t.startAt)),t.endAt&&(e+=", endAt: "+kt(t.endAt)),`Target(${e})`}function vt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Nt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!tt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rt(t.startAt,e.startAt)&&Rt(t.endAt,e.endAt)}class yt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new wt(t,e,n):"array-contains"===e?new It(t,n):"in"===e?new Tt(t,n):"not-in"===e?new St(t,n):"array-contains-any"===e?new At(t,n):new yt(t,e,n)}static R(t,e,n){return"in"===e?new Ot(t,n):new _t(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(nt(e,this.value)):null!==e&&Z(this.value)===Z(e)&&this.P(nt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return m()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function bt(t){return t.field.canonicalString()+t.op.toString()+it(t.value)}class wt extends yt{constructor(t,e,n){super(t,e,n),this.key=Y.fromName(n.referenceValue)}matches(t){const e=Y.comparator(t.key,this.key);return this.P(e)}}class Ot extends yt{constructor(t,e){super(t,"in",e),this.keys=Et("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _t extends yt{constructor(t,e){super(t,"not-in",e),this.keys=Et("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Et(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Y.fromName(t.referenceValue))}class It extends yt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return at(e)&&et(e.arrayValue,this.value)}}class Tt extends yt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&et(this.value.arrayValue,e)}}class St extends yt{constructor(t,e){super(t,"not-in",e)}matches(t){if(et(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!et(this.value.arrayValue,e)}}class At extends yt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!at(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>et(this.value.arrayValue,t))}}class jt{constructor(t,e){this.position=t,this.before=e}}function kt(t){return`${t.before?"b":"a"}:${t.position.map(t=>it(t)).join(",")}`}class Ct{constructor(t,e="asc"){this.field=t,this.dir=e}}function Nt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Y.comparator(Y.fromName(o.referenceValue),n.key):nt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Rt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tt(t.position[n],e.position[n]))return!1;return!0}
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
 */class Pt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Lt(t,e,n,r,i,s,o,a){return new Pt(t,e,n,r,i,s,o,a)}function Dt(t){return new Pt(t)}function Mt(t){return!X(t.limit)&&"F"===t.limitType}function Ft(t){return!X(t.limit)&&"L"===t.limitType}function Ut(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Bt(t){return null!==t.collectionGroup}function Gt(t){const e=y(t);if(null===e.V){e.V=[];const t=Vt(e),n=Ut(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Ct(t)),e.V.push(new Ct(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Ct(V.keyField(),t))}}}return e.V}function $t(t){const e=y(t);if(!e.S)if("F"===e.limitType)e.S=pt(e.path,e.collectionGroup,Gt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Gt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ct(i.field,e))}const n=e.endAt?new jt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new jt(e.startAt.position,!e.startAt.before):null;e.S=pt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Ht(t,e,n){return new Pt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zt(t,e){return vt($t(t),$t(e))&&t.limitType===e.limitType}function qt(t){return`${gt($t(t))}|lt:${t.limitType}`}function Kt(t){return`Query(target=${mt($t(t))}; limitType=${t.limitType})`}function Wt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Y.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!xt(t.startAt,Gt(t),e))&&(!t.endAt||!xt(t.endAt,Gt(t),e))}(t,e)}function Xt(t){return(e,n)=>{let r=!1;for(const i of Gt(t)){const t=Jt(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Jt(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?nt(r,i):m()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return m()}}
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
 */function Qt(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}function Yt(t){return{integerValue:""+t}}function Zt(t,e){return Q(e)?Yt(e):Qt(t,e)}
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
 */class te{constructor(){this._=void 0}}function ee(t,e,n){return t instanceof ie?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof se?oe(t,e):t instanceof ae?ce(t,e):function(t,e){const n=re(t,e),r=le(n)+le(t.C);return ot(n)&&ot(t.C)?Yt(r):Qt(t.N,r)}(t,e)}function ne(t,e,n){return t instanceof se?oe(t,e):t instanceof ae?ce(t,e):n}function re(t,e){return t instanceof ue?ot(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ie extends te{}class se extends te{constructor(t){super(),this.elements=t}}function oe(t,e){const n=he(e);for(const r of t.elements)n.some(t=>tt(t,r))||n.push(r);return{arrayValue:{values:n}}}class ae extends te{constructor(t){super(),this.elements=t}}function ce(t,e){let n=he(e);for(const r of t.elements)n=n.filter(t=>!tt(t,r));return{arrayValue:{values:n}}}class ue extends te{constructor(t,e){super(),this.N=t,this.C=e}}function le(t){return z(t.integerValue||t.doubleValue)}function he(t){return at(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function fe(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof se&&e instanceof se||t instanceof ae&&e instanceof ae?N(t.elements,e.elements,tt):t instanceof ue&&e instanceof ue?tt(t.C,e.C):t instanceof ie&&e instanceof ie}(t.transform,e.transform)}class de{constructor(t,e){this.version=t,this.transformResults=e}}class pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pe}static exists(t){return new pe(void 0,t)}static updateTime(t){return new pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ge(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class me{}function ve(t,e,n){t instanceof _e?function(t,e,n){const r=t.value.clone(),i=Te(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ee?function(t,e,n){if(!ge(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Te(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ie(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ye(t,e,n){t instanceof _e?function(t,e,n){if(!ge(t.precondition,e))return;const r=t.value.clone(),i=Se(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Oe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ee?function(t,e,n){if(!ge(t.precondition,e))return;const r=Se(t.fieldTransforms,n,e),i=e.data;i.setAll(Ie(t)),i.setAll(r),e.convertToFoundDocument(Oe(e),i).setHasLocalMutations()}(t,e,n):function(t,e){ge(t.precondition,e)&&e.convertToNoDocument(R.min())}(t,e)}function be(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=re(r.transform,t||null);null!=i&&(null==n&&(n=lt.empty()),n.set(r.field,i))}return n||null}function we(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&N(t,e,(t,e)=>fe(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Oe(t){return t.isFoundDocument()?t.version:R.min()}class _e extends me{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ee extends me{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ie(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Te(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ne(o,a,n[i]))}return r}function Se(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ee(t,s,e))}return r}class Ae extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class je extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
var ke,Ce;function Ne(t){switch(t){case b.OK:return m();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return m()}}function xe(t){if(void 0===t)return d("GRPC error has no .code"),b.UNKNOWN;switch(t){case ke.OK:return b.OK;case ke.CANCELLED:return b.CANCELLED;case ke.UNKNOWN:return b.UNKNOWN;case ke.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ke.INTERNAL:return b.INTERNAL;case ke.UNAVAILABLE:return b.UNAVAILABLE;case ke.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ke.NOT_FOUND:return b.NOT_FOUND;case ke.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ke.ABORTED:return b.ABORTED;case ke.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ke.DATA_LOSS:return b.DATA_LOSS;default:return m()}}(Ce=ke||(ke={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";
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
class Re{constructor(t,e){this.comparator=t,this.root=e||Le.EMPTY}insert(t,e){return new Re(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(t){return new Re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Le.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Le{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Le.RED,this.left=null!=r?r:Le.EMPTY,this.right=null!=i?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Le(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Le.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const t=this.left.check();if(t!==this.right.check())throw m();return t+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1,Le.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class De{constructor(t){this.comparator=t,this.data=new Re(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Me(this.data.getIterator())}getIteratorFrom(t){return new Me(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof De))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new De(this.comparator);return e.data=t,e}}class Me{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Fe=new Re(Y.comparator);function Ue(){return Fe}const Ve=new Re(Y.comparator);function Be(){return Ve}const Ge=new Re(Y.comparator);function $e(){return Ge}const He=new De(Y.comparator);function ze(...t){let e=He;for(const n of t)e=e.add(n);return e}const qe=new De(C);function Ke(){return qe}
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
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class We{constructor(t,e){this.databaseId=t,this.D=e}}function Xe(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Je(t,e){return t.D?e.toBase64():e.toUint8Array()}function Qe(t,e){return Xe(t,e.toTimestamp())}function Ye(t){return v(!!t),R.fromTimestamp(function(t){const e=H(t);return new x(e.seconds,e.nanos)}(t))}function Ze(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function tn(t){const e=F.fromString(t);return v(mn(e)),e}function en(t,e){return Ze(t.databaseId,e.path)}function nn(t){const e=tn(t);return 4===e.length?F.emptyPath():sn(e)}function rn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function on(t,e,n){return{name:en(t,e),fields:n.value.mapValue.fields}}function an(t,e){let n;if(e instanceof _e)n={update:on(t,e.key,e.value)};else if(e instanceof Ae)n={delete:en(t,e.key)};else if(e instanceof Ee)n={update:on(t,e.key,e.data),updateMask:gn(e.fieldMask)};else{if(!(e instanceof je))return m();n={verify:en(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ie)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof se)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ae)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ue)return{fieldPath:e.field.canonicalString(),increment:n.C};throw m()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Qe(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.precondition)),n}function cn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Ye(t.updateTime):Ye(e);return n.isEqual(R.min())&&(n=Ye(e)),new de(n,t.transformResults||[])}(t,e))):[]}function un(t){let e=nn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ln(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Ct(fn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(n.limit));let c=null;n.startAt&&(c=hn(n.startAt));let u=null;return n.endAt&&(u=hn(n.endAt)),Lt(e,i,o,s,a,"F",c,u)}function ln(t){return t?void 0!==t.unaryFilter?[pn(t)]:void 0!==t.fieldFilter?[dn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>ln(t)).reduce((t,e)=>t.concat(e)):m():[]}function hn(t){const e=!!t.before,n=t.values||[];return new jt(n,e)}function fn(t){return V.fromServerFormat(t.fieldPath)}function dn(t){return yt.create(fn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return m()}}(t.fieldFilter.op),t.fieldFilter.value)}function pn(t){switch(t.unaryFilter.op){case"IS_NAN":fn(t.unaryFilter.field);return yt.create(r["e"],"==",{doubleValue:NaN});case"IS_NULL":fn(t.unaryFilter.field);return yt.create(r["d"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":fn(t.unaryFilter.field);return yt.create(r["c"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":fn(t.unaryFilter.field);return yt.create(r["g"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return m()}}function gn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function vn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bn(e)),e=yn(t.get(n),e);return bn(e)}function yn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function bn(t){return t+""}class wn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}wn.store="owner",wn.key="owner";class On{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}On.store="mutationQueues",On.keyPath="userId";class _n{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}_n.store="mutations",_n.keyPath="batchId",_n.userMutationsIndex="userMutationsIndex",_n.userMutationsKeyPath=["userId","batchId"];class En{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,vn(e)]}static key(t,e,n){return[t,vn(e),n]}}En.store="documentMutations",En.PLACEHOLDER=new En;class In{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}In.store="remoteDocuments",In.readTimeIndex="readTimeIndex",In.readTimeIndexPath="readTime",In.collectionReadTimeIndex="collectionReadTimeIndex",In.collectionReadTimeIndexPath=["parentPath","readTime"];class Tn{constructor(t){this.byteSize=t}}Tn.store="remoteDocumentGlobal",Tn.key="remoteDocumentGlobalKey";class Sn{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Sn.store="targets",Sn.keyPath="targetId",Sn.queryTargetsIndexName="queryTargetsIndex",Sn.queryTargetsKeyPath=["canonicalId","targetId"];class An{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}An.store="targetDocuments",An.keyPath=["targetId","path"],An.documentTargetsIndex="documentTargetsIndex",An.documentTargetsKeyPath=["path","targetId"];class jn{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}jn.key="targetGlobalKey",jn.store="targetGlobal";class kn{constructor(t,e){this.collectionId=t,this.parent=e}}kn.store="collectionParents",kn.keyPath=["collectionId","parent"];class Cn{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Cn.store="clientMetadata",Cn.keyPath="clientId";class Nn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Nn.store="bundles",Nn.keyPath="bundleId";class xn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}xn.store="namedQueries",xn.keyPath="name";On.store,_n.store,En.store,In.store,Sn.store,wn.store,jn.store,An.store,Cn.store,Tn.store,kn.store,Nn.store,xn.store;const Rn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Ln{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&m(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ln((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Ln?e:Ln.resolve(e)}catch(t){return Ln.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Ln.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Ln.reject(e)}static resolve(t){return new Ln((e,n)=>{e(t)})}static reject(t){return new Ln((e,n)=>{n(t)})}static waitFor(t){return new Ln((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Ln.resolve(!1);for(const n of t)e=e.next(t=>t?Ln.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
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
 */function Dn(t){return"IndexedDbTransactionError"===t.name}
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
class Mn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ve(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ye(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ye(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(R.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ze())}isEqual(t){return this.batchId===t.batchId&&N(this.mutations,t.mutations,(t,e)=>we(t,e))&&N(this.baseMutations,t.baseMutations,(t,e)=>we(t,e))}}class Fn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=$e();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Fn(t,e,n,r)}}
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
 */class Un{constructor(t){this.Wt=t}}function Vn(t){const e=un({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ht(e,e.limit,"L"):e}
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
class Bn{constructor(){this.Gt=new Gn}addToCollectionParentIndex(t,e){return this.Gt.add(e),Ln.resolve()}getCollectionParents(t,e){return Ln.resolve(this.Gt.getEntries(e))}}class Gn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new De(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new De(F.comparator)).toArray()}}
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
 */class $n{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new $n(t,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */$n.DEFAULT_COLLECTION_PERCENTILE=10,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$n.DEFAULT=new $n(41943040,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$n.DISABLED=new $n(-1,0,0);
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
class Hn{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Hn(0)}static ie(){return new Hn(-1)}}
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
async function zn(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Rn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class qn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){L(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return D(this.inner)}}
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
 */class Kn{constructor(){this.changes=new qn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:R.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:ft.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ln.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Wn{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}bn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return Y.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Bt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Y(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Be();return this.Ht.getCollectionParents(t,r).next(s=>Ln.forEach(s,s=>{const o=function(t,e){return new Pt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=ft.newInvalidDocument(n),r=r.insert(n,i)),ye(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Wt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=ze();for(const s of e)for(const t of s.mutations)t instanceof Ee&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
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
 */class Xn{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=ze(),r=ze();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xn(t,e.fromCache,n,r)}}
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
 */class Jn{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(R.min())?this.Fn(t,e):this.On.bn(t,r).next(i=>{const o=this.Mn(e,i);return(Mt(e)||Ft(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(h()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Kt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new De(Xt(t));return e.forEach((e,r)=>{Wt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return h()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Kt(e)),this.On.getDocumentsMatchingQuery(t,e,R.min())}}
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
 */class Qn{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Re(C),this.qn=new qn(t=>gt(t),vt),this.Kn=R.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Wn(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Yn(t,e,n,r){return new Qn(t,e,n,r)}async function Zn(t,e){const n=y(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Wn(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=ze();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.bn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function tr(t,e){const n=y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Ln.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.bn(t,r))})}function er(t){const e=y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function nr(t,e){const n=y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}
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
class rr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Ln.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ye(n.createTime)}),Ln.resolve()}getNamedQuery(t,e){return Ln.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Vn(t.bundledQuery),readTime:Ye(t.readTime)}}(e)),Ln.resolve()}}
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
 */class ir{constructor(){this.Zn=new De(sr.ts),this.es=new De(sr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new sr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new sr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Y(new F([])),n=new sr(e,t),r=new sr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Y(new F([])),n=new sr(e,t),r=new sr(e,t+1);let i=ze();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new sr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Y.comparator(t.key,e.key)||C(t.ls,e.ls)}static ns(t,e){return C(t.ls,e.ls)||Y.comparator(t.key,e.key)}}
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
 */class or{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new De(sr.ts)}checkEmpty(t){return Ln.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Mn(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new sr(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Ln.resolve(s)}lookupMutationBatch(t,e){return Ln.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Ln.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Ln.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Ln.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sr(e,0),r=new sr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),Ln.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new De(C);return e.forEach(t=>{const e=new sr(t,0),r=new sr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Ln.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Y.isDocumentKey(i)||(i=i.child(""));const s=new sr(new Y(i),0);let o=new De(C);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),Ln.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Ln.forEach(e.mutations,r=>{const i=new sr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new sr(e,0),r=this.ds.firstAfterOrEqual(n);return Ln.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Ln.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
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
 */class ar{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Re(Y.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ln.resolve(n?n.document.clone():ft.newInvalidDocument(e))}getEntries(t,e){let n=Ue();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():ft.newInvalidDocument(t))}),Ln.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ue();const i=new Y(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Wt(e,i)&&(r=r.insert(i.key,i.clone()))}return Ln.resolve(r)}Es(t,e){return Ln.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new cr(this)}getSize(t){return Ln.resolve(this.size)}}class cr extends Kn{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Ln.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
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
 */class ur{constructor(t){this.persistence=t,this.Ts=new qn(t=>gt(t),vt),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Is=0,this.As=new ir,this.targetCount=0,this.Rs=Hn.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),Ln.resolve()}getLastRemoteSnapshotVersion(t){return Ln.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ln.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ln.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Ln.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Hn(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Ln.resolve()}updateTargetData(t,e){return this.ae(e),Ln.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Ln.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Ln.waitFor(i).next(()=>r)}getTargetCount(t){return Ln.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ln.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ln.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Ln.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Ln.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ln.resolve(n)}containsKey(t,e){return Ln.resolve(this.As.containsKey(e))}}
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
 */class lr{constructor(t,e){this.Ps={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new ur(this),this.Ht=new Bn,this.He=function(t,e){return new ar(t,e)}(this.Ht,t=>this.referenceDelegate.bs(t)),this.N=new Un(e),this.Je=new rr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new or(this.Ht,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new hr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Ln.or(Object.values(this.Ps).map(n=>()=>n.containsKey(t,e)))}}class hr extends Pn{constructor(t){super(),this.currentSequenceNumber=t}}class fr{constructor(t){this.persistence=t,this.Ds=new ir,this.Cs=null}static Ns(t){return new fr(t)}get xs(){if(this.Cs)return this.Cs;throw m()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Ln.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Ln.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Ln.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ln.forEach(this.xs,n=>{const r=Y.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}bs(t){return 0}ks(t,e){return Ln.or([()=>Ln.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
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
 */class dr{constructor(){this.activeTargetIds=Ke()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pr{constructor(){this.yi=new dr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new dr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class gr{Ei(t){}shutdown(){}}
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
 */class mr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const vr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class yr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
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
 */class br extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=vr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);s(new w(e,t.message))}else s(new w(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new w(b.UNAVAILABLE,"Connection failed."));break;default:m()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["o"])()||Object(o["p"])()||Object(o["l"])()||Object(o["n"])()||Object(o["r"])()||Object(o["k"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new yr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ke[t];if(void 0!==e)return xe(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
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
 */function wr(){return"undefined"!=typeof document?document:null}
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
 */function Or(t){return new We(t,!0)}class _r{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
 */class Er{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new _r(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(d(e.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ir extends Er{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=cn(t.writeResults,t.commitTime),n=Ye(t.commitTime);return this.listener.vr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=rn(this.N),this.wr(t)}br(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>an(this.N,t))};this.wr(e)}}
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
 */class Tr extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class Sr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
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
 */class Ar{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{Cr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=y(t);e.Kr.add(4),await kr(e),e.Wr.set("Unknown"),e.Kr.delete(4),await jr(e)}(this))})}),this.Wr=new Sr(n,r)}}async function jr(t){if(Cr(t))for(const e of t.jr)await e(!0)}async function kr(t){for(const e of t.jr)await e(!1)}function Cr(t){return 0===y(t).Kr.size}async function Nr(t,e,n){if(!Dn(e))throw e;t.Kr.add(1),await kr(t),t.Wr.set("Offline"),n||(n=()=>er(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await jr(t)})}function xr(t,e){return e().catch(n=>Nr(t,n,e))}async function Rr(t){const e=y(t),n=$r(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Pr(e);)try{const t=await nr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Lr(e,t)}catch(t){await Nr(e,t)}Dr(e)&&Mr(e)}function Pr(t){return Cr(t)&&t.Ur.length<10}function Lr(t,e){t.Ur.push(e);const n=$r(t);n.cr()&&n.Pr&&n.br(e.mutations)}function Dr(t){return Cr(t)&&!$r(t).ar()&&t.Ur.length>0}function Mr(t){$r(t).start()}async function Fr(t){$r(t).Sr()}async function Ur(t){const e=$r(t);for(const n of t.Ur)e.br(n.mutations)}async function Vr(t,e,n){const r=t.Ur.shift(),i=Fn.from(r,e,n);await xr(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Rr(t)}async function Br(t,e){e&&$r(t).Pr&&await async function(t,e){if(n=e.code,Ne(n)&&n!==b.ABORTED){const n=t.Ur.shift();$r(t).hr(),await xr(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Rr(t)}var n}(t,e),Dr(t)&&Mr(t)}async function Gr(t,e){const n=y(t);e?(n.Kr.delete(2),await jr(n)):e||(n.Kr.add(2),await kr(n),n.Wr.set("Unknown"))}function $r(t){return t.Hr||(t.Hr=function(t,e,n){const r=y(t);return r.Cr(),new Ir(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Fr.bind(null,t),Ci:Br.bind(null,t),Vr:Ur.bind(null,t),vr:Vr.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Rr(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
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
 */}class Hr{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Hr(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zr(t,e){if(d("AsyncQueue",`${e}: ${t}`),Dn(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class qr{constructor(){this.queries=new qn(t=>qt(t),zt),this.onlineState="Unknown",this.Zr=new Set}}function Kr(t){t.Zr.forEach(t=>{t.next()})}class Wr{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new qn(t=>qt(t),zt),this.ko=new Map,this.$o=new Set,this.Oo=new Re(Y.comparator),this.Fo=new Map,this.Mo=new ir,this.Lo={},this.Bo=new Map,this.Uo=Hn.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Xr(t,e,n){const r=ri(t);try{const t=await function(t,e){const n=y(t),r=x.now(),i=e.reduce((t,e)=>t.add(e.key),ze());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.bn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=be(t,s.get(t.key));null!=e&&o.push(new Ee(t.key,e,ht(e.value.mapValue),pe.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Re(C)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await ei(r,t.changes),await Rr(r.remoteStore)}catch(t){const e=zr(t,"Failed to persist write");n.reject(e)}}function Jr(t,e,n){const r=y(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=y(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&Kr(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qr(t,e){const n=y(t),r=e.batch.batchId;try{const t=await tr(n.localStore,e);ti(n,r,null),Zr(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ei(n,t)}catch(t){await zn(t)}}async function Yr(t,e,n){const r=y(t);try{const t=await function(t,e){const n=y(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.bn(t,r))})}(r.localStore,e);ti(r,e,n),Zr(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ei(r,t)}catch(n){await zn(n)}}function Zr(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function ti(t,e,n){const r=y(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}async function ei(t,e,n){const r=y(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{o.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Xn.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=y(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Ln.forEach(e,e=>Ln.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Ln.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Dn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function ni(t,e){const n=y(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Zn(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ei(n,t.Wn)}}function ri(t){const e=y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qr.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yr.bind(null,e),e}class ii{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Or(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Yn(this.persistence,new Jn,t.initialUser,this.N)}Go(t){return new lr(fr.Ns,this.N)}Wo(t){return new pr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Jr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ni.bind(null,this.syncEngine),await Gr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qr}createDatastore(t){const e=Or(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new br(r));var r;return function(t,e,n){return new Tr(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Jr(this.syncEngine,t,0),s=mr.Pt()?new mr:new gr,new Ar(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Wr(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=y(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await kr(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
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
class oi{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=k.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=zr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ai(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Zn(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ci(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ui(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=y(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.Kr.add(3),await kr(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await jr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function ui(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await ai(t,new ii)),t.offlineComponents}async function li(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ci(t,new si)),t.onlineComponents}function hi(t){return li(t).then(t=>t.syncEngine)}class fi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class di{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof di&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const pi=new Map;
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
 */function gi(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mi(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vi(t){if(!Y.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yi(t){if(Y.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":m()}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bi(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Oi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,mi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class _i{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oi({}),this._settingsFrozen=!1,t instanceof di?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oi(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new E;switch(t.type){case"gapi":t.client;return v(!("object"!=typeof r["e"]||null===r["e"]||!r["e"].auth||!r["e"].auth.getAuthHeaderValueForFirstParty)),new S(r["e"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pi.get(t);e&&(f("ComponentProvider","Removing Datastore"),pi.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Ei{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ei(this.firestore,t,this._key)}}class Ii{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ii(this.firestore,t,this._query)}}class Ti extends Ii{constructor(t,e,n){super(t,e,Dt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ei(this.firestore,null,new Y(t))}withConverter(t){return new Ti(this.firestore,t,this._path)}}function Si(t,e,...n){if(t=Object(o["i"])(t),gi("collection","path",e),t instanceof _i){const r=F.fromString(e,...n);return yi(r),new Ti(t,null,r)}{if(!(t instanceof Ei||t instanceof Ti))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=F.fromString(t.path,...n).child(F.fromString(e));return yi(r),new Ti(t.firestore,null,r)}}function Ai(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=k.I()),gi("doc","path",e),t instanceof _i){const r=F.fromString(e,...n);return vi(r),new Ei(t,null,new Y(r))}{if(!(t instanceof Ei||t instanceof Ti))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return vi(r),new Ei(t.firestore,t instanceof Ti?t.converter:null,new Y(r))}}
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
class ji{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new _r(this,"async_queue_retry"),this.Ea=()=>{const t=wr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=wr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=wr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new O;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Dn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,d("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Hr.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&m()}verifyOperationInProgress(){}async Pa(){let t;do{t=this.fa,await t}while(t!==this.fa)}ba(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.Pa().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pa()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class ki extends _i{constructor(t,e){super(t,e),this.type="firestore",this._queue=new ji,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xi(this),this._firestoreClient.terminate()}}function Ci(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Ni(t){return t._firestoreClient||xi(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xi(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new fi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oi(t._credentials,t._queue,r)}
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
class Ri{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Pi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pi(G.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Pi(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Li{constructor(t){this._methodName=t}}
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
 */class Di{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}
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
 */const Mi=/^__.*__$/;class Fi{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new _e(t,this.data,e,this.fieldTransforms)}}function Ui(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class Vi{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Qi(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Ui(this.Da)&&Mi.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Bi{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Or(t)}Ba(t,e,n,r=!1){return new Vi({Da:t,methodName:e,La:n,path:V.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Gi(t){const e=t._freezeSettings(),n=Or(t._databaseId);return new Bi(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $i(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Ki("Data must be an object, but it was:",o,r);const a=zi(r,o);let c,u;if(s.merge)c=new B(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Wi(e,r,n);if(!o.contains(i))throw new w(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yi(t,i)||t.push(i)}c=new B(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Fi(new lt(a),c,u)}function Hi(t,e){if(qi(t=Object(o["i"])(t)))return Ki("Unsupported field value:",e,t),zi(t,e);if(t instanceof Li)return function(t,e){if(!Ui(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Hi(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Zt(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=x.fromDate(t);return{timestampValue:Xe(e.N,n)}}if(t instanceof x){const n=new x(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xe(e.N,n)}}if(t instanceof Di)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Pi)return{bytesValue:Je(e.N,t._byteString)};if(t instanceof Ei){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ze(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+bi(t))}(t,e)}function zi(t,e){const n={};return D(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):L(t,(t,r)=>{const i=Hi(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function qi(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof x||t instanceof Di||t instanceof Pi||t instanceof Ei||t instanceof Li)}function Ki(t,e,n){if(!qi(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=bi(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Wi(t,e,n){if((e=Object(o["i"])(e))instanceof Ri)return e._internalPath;if("string"==typeof e)return Ji(t,e);throw Qi("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Xi=new RegExp("[~\\*/\\[\\]]");function Ji(t,e,n){if(e.search(Xi)>=0)throw Qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ri(...e.split("."))._internalPath}catch(r){throw Qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}function Yi(t,e){return t.some(t=>t.isEqual(e))}
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
function Zi(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function ts(t,e){const n=wi(t.firestore,ki),r=Ai(t),i=Zi(t.converter,e);return es(n,[$i(Gi(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,pe.exists(!1))]).then(()=>r)}function es(t,e){return function(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>Xr(await hi(t),e,n)),n.promise}(Ni(t),e)}var ns;!function(t){u=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new ki(n,new I(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.0.0",ns)}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("861d"),i=n("e8b5"),s=n("b622"),o=s("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("17c2"),o=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),s=n("50c4"),o=n("0366"),a=n("35a1"),c=n("2a62"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var l,h,f,d,p,g,m,v=n&&n.that,y=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),O=o(e,v,1+y+w),_=function(t){return l&&c(l),new u(!0,t)},E=function(t){return y?(r(t),w?O(t[0],t[1],_):O(t[0],t[1])):w?O(t,_):O(t)};if(b)l=t;else{if(h=a(t),"function"!=typeof h)throw TypeError("Target is not iterable");if(i(h)){for(f=0,d=s(t.length);d>f;f++)if(p=E(t[f]),p&&p instanceof u)return p;return new u(!1)}l=h.call(t)}g=l.next;while(!(m=g.call(l)).done){try{p=E(m.value)}catch(I){throw c(l),I}if("object"==typeof p&&p&&p instanceof u)return p}return new u(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.0.0";
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
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("d039"),u=n("0366"),l=n("1be4"),h=n("cc12"),f=n("1cdc"),d=n("605d"),p=a.setImmediate,g=a.clearImmediate,m=a.process,v=a.MessageChannel,y=a.Dispatch,b=0,w={},O="onreadystatechange";try{r=a.location}catch(S){}var _=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},E=function(t){return function(){_(t)}},I=function(t){_(t.data)},T=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};p&&g||(p=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},i(b),b},g=function(t){delete w[t]},d?i=function(t){m.nextTick(E(t))}:y&&y.now?i=function(t){y.now(E(t))}:v&&!f?(s=new v,o=s.port2,s.port1.onmessage=I,i=u(o.postMessage,o,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&r&&"file:"!==r.protocol&&!c(T)?(i=T,a.addEventListener("message",I,!1)):i=O in h("script")?function(t){l.appendChild(h("script"))[O]=function(){l.removeChild(this),_(t)}}:function(t){setTimeout(E(t),0)}),t.exports={set:p,clear:g}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),s=n("b622"),o=s("iterator");t.exports=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3aa8":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return y}));
/**
  * vee-validate v4.4.7
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
const r={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},i=t=>{if(t)return Array.isArray(t)?t[0]:t.locale};function s(t,e){return Array.isArray(t)?t[0]:t[e]}function o(t){return null===t||void 0===t||""===t||!(!Array.isArray(t)||0!==t.length)}const a=(t,e)=>{if(o(t))return!0;const n=i(e);if(Array.isArray(t))return t.every(t=>a(t,{locale:n}));const s=String(t);return n?(r[n]||r.en).test(s):Object.keys(r).some(t=>r[t].test(s))};const c=(t,e)=>{const n=s(e,"target");return String(t)===String(n)};const u=t=>{if(o(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(t=>e.test(String(t))):e.test(String(t))};function l(t){return null===t||void 0===t}function h(t){return Array.isArray(t)&&0===t.length}const f=(t,e)=>{if(o(t))return!0;const n=s(e,"length");return Array.isArray(t)?t.every(t=>f(t,{length:n})):String(t).length<=Number(n)},d=(t,e)=>{if(o(t))return!0;const n=s(e,"max");return Array.isArray(t)?t.length>0&&t.every(t=>d(t,{max:n})):Number(t)<=Number(n)},p=(t,e)=>{if(o(t))return!0;const n=s(e,"length");return Array.isArray(t)?t.every(t=>p(t,{length:n})):String(t).length>=Number(n)},g=(t,e)=>{if(o(t))return!0;const n=s(e,"min");return Array.isArray(t)?t.length>0&&t.every(t=>g(t,{min:n})):Number(t)>=Number(n)},m=(t,e)=>!!o(t)||(Array.isArray(t)?t.every(t=>m(t,e)):Array.from(e).some(e=>e==t)),v=(t,e)=>!!o(t)||!m(t,e),y=t=>!l(t)&&!h(t)&&!1!==t&&!!String(t).trim().length},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),i=n("b774");function s(t,e){const n=Object(r["a"])();if(n)n.emit(i["a"],t,e);else{const n=Object(r["b"])(),i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e})}}},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),s="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),s=n("23cb"),o=function(t){return function(e,n,o){var a,c=r(e),u=i(c.length),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return X})),n.d(e,"b",(function(){return Z})),n.d(e,"c",(function(){return Y}));var r=n("7a23"),i=n("3f4e"),s="store";function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,a={};o(s,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return a[n]()},enumerable:!0})})),t._state=Object(r["y"])({data:e}),t.strict&&w(t),i&&n&&t._withCommit((function(){i.data=null}))}function p(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[o]=r),!s&&!i){var a=O(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,o,n);r.forEachMutation((function(e,n){var r=o+n;v(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;y(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;b(t,r,e,u)})),r.forEachChild((function(r,s){p(t,e,n.concat(s),r,i)}))}function g(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=_(n,r,i),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var s=_(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return O(t.state,n)}}}),i}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function v(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function y(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["I"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(t,e){return e.reduce((function(t,e){return t[e]}),t)}function _(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var E="vuex bindings",I="vuex:mutations",T="vuex:actions",S="vuex",A=0;function j(t,e){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:I,label:"Vuex Mutations",color:k}),n.addTimelineLayer({id:T,label:"Vuex Actions",color:k}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===S)if(n.filter){var r=[];L(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[P(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId;m(e,r),n.state=D(F(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=A++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:T,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var k=8702998,C=6710886,N=16777215,x={label:"namespaced",textColor:N,backgroundColor:C};function R(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function P(t,e){return{id:e||"root",label:R(e),tags:t.namespaced?[x]:[],children:Object.keys(t._children).map((function(n){return P(t._children[n],e+n+"/")}))}}function L(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[x]:[]}),Object.keys(e._children).forEach((function(i){L(t,e._children[i],n,r+i+"/")}))}function D(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=M(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?R(t):t,editable:!1,value:U((function(){return s[t]}))}}))}return i}function M(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=U((function(){return t[n]}))}else e[n]=U((function(){return t[n]}))})),e}function F(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function U(t){try{return t()}catch(e){return e}}var V=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(t,e){this._children[t]=e},V.prototype.removeChild=function(t){delete this._children[t]},V.prototype.getChild=function(t){return this._children[t]},V.prototype.hasChild=function(t){return t in this._children},V.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},V.prototype.forEachChild=function(t){o(this._children,t)},V.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},V.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},V.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(V.prototype,B);var G=function(t){this.register([],t,!1)};function $(t,e,n){if(K(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(t.concat(r),e.getChild(r),n.modules[r])}}G.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},G.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},G.prototype.update=function(t){$([],this.root,t)},G.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),K(t,e);var i=new V(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&o(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},G.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},G.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var H={assert:function(t){return"function"===typeof t},expected:"function"},z={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},q={getters:H,mutations:H,actions:z};function K(t,e){Object.keys(q).forEach((function(n){if(e[n]){var r=q[n];o(e[n],(function(e,i){u(r.assert(e),W(t,n,i,e,r.expected))}))}}))}function W(t,e,n,r,i){var s=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(s+=' in module "'+t.join(".")+'"'),s+=" is "+JSON.stringify(r)+".",s}function X(t){return new J(t)}var J=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new G(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return l.call(o,t,e,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(t,e){t.provide(e||s,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&j(t,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(t,e,n){var r=this,i=_(t,e,n),s=i.type,o=i.payload,a=i.options,c={type:s,payload:o},u=this._mutations[s];u?(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},J.prototype.dispatch=function(t,e){var n=this,r=_(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},J.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},J.prototype.watch=function(t,e,n){var i=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["I"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},J.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},J.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},J.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=O(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},J.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},J.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},J.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(J.prototype,Q);var Y=nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=rt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),Z=nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=rt(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||rt(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=rt(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function tt(t){return et(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function et(t){return Array.isArray(t)||a(t)}function nt(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function rt(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return G})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return J}));var r=n("ffa6"),i=n("abfd"),s=n("a8e9");
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
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.0",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",O="@firebase/functions-compat",_="@firebase/installations",E="@firebase/installations-compat",I="@firebase/messaging",T="@firebase/messaging-compat",S="@firebase/performance",A="@firebase/performance-compat",j="@firebase/remote-config",k="@firebase/remote-config-compat",C="@firebase/storage",N="@firebase/storage-compat",x="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.0.0",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[O]:"fire-fn-compat",[_]:"fire-iid",[E]:"fire-iid-compat",[I]:"fire-fcm",[T]:"fire-fcm-compat",[S]:"fire-perf",[A]:"fire-perf-compat",[j]:"fire-rc",[k]:"fire-rc-compat",[C]:"fire-gcs",[N]:"fire-gcs-compat",[x]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function G(t,e){return t.container.getProvider(e)}function $(t,e,n=D){G(t,e).clearInstance(n)}
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
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new s["b"]("app","Firebase",H);
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
class q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
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
 */const K=L;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new q(t,n,a);return F.set(i,c),c}function X(t=D){const e=F.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function J(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
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
function Q(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),J(c,u,t),J("fire-js","")}Q()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),s=n("7418"),o=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(o(t)),n=s.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),s=n("df75"),o=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||s(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=o.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),g=h?s(p).concat(h(p)):s(p),m=g.length,v=0;while(m>v)d=g[v++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},6547:function(t,e,n){var r=n("a691"),i=n("577e"),s=n("1d80"),o=function(t){return function(e,n){var o,a,c=i(s(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var y=h.state||(h.state=new g),b=y.get,w=y.has,O=y.set;r=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,O.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},s=function(t){return w.call(y,t)}}else{var _=f("state");d[_]=!0,r=function(t,e){if(l(t,_))throw new TypeError(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},s=function(t){return l(t,_)}}t.exports={set:r,get:i,has:s,enforce:m,getterFor:v}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return H}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>i?Symbol(t):"_vr_"+t,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,v=t=>t.replace(m,"");function y(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function O(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&_(e.matched[r],n.matched[i])&&E(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!I(t[n],e[n]))return!1;return!0}function I(t,e){return Array.isArray(t)?T(t,e):Array.isArray(e)?T(e,t):t===e}function T(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,j;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(j||(j={}));function k(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const C=/^[^#]+#/;function N(t,e){return t.replace(C,"#")+e}function x(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=x(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const D=new Map;function M(t,e){D.set(t,e)}function F(t){const e=D.get(t);return D.delete(t),e}let U=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?j.forward:j.back:j.unknown})})};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:R()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function G(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function $(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=d({},e.state,G(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=d({},i.value,e.state,{forward:t,scroll:R()});s(o.current,o,!0);const a=d({},G(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(t){t=k(t);const e=$(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:N.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function z(t){return"string"===typeof t||t&&"object"===typeof t}function q(t){return"string"===typeof t||"symbol"===typeof t}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=s("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function J(t,e){return d(new Error,{type:t,[W]:!0},e)}function Q(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Y;if(h!==Y){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},st=/[a-zA-Z0-9_]/;function ot(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:st.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function at(t,e,n){const r=et(ot(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:g}function o(t){if(q(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw J(1,{location:t});o=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw J(1,{location:t,currentLocation:e});o=i.record.name,a=d({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,vt=/\//g,yt=/=/g,bt=/\?/g,wt=/\+/g,Ot=/%5B/g,_t=/%5D/g,Et=/%5E/g,It=/%60/g,Tt=/%7B/g,St=/%7C/g,At=/%7D/g,jt=/%20/g;function kt(t){return encodeURI(""+t).replace(St,"|").replace(Ot,"[").replace(_t,"]")}function Ct(t){return kt(t).replace(Tt,"{").replace(At,"}").replace(Et,"^")}function Nt(t){return kt(t).replace(wt,"%2B").replace(jt,"+").replace(gt,"%23").replace(mt,"%26").replace(It,"`").replace(Tt,"{").replace(At,"}").replace(Et,"^")}function xt(t){return Nt(t).replace(yt,"%3D")}function Rt(t){return kt(t).replace(gt,"%23").replace(bt,"%3F")}function Pt(t){return null==t?"":Rt(t).replace(vt,"%2F")}function Lt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(wt," "),n=t.indexOf("="),s=Lt(n<0?t:t.slice(0,n)),o=n<0?null:Lt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=xt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&Nt(t)):[r&&Nt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(J(4,{from:n,to:e})):t instanceof Error?a(t):z(t)?a(J(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Gt(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(Vt(c,n,r,s,t))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&Vt(c,n,r,s,t)()}))}}return i}function Gt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function $t(t){const e=Object(r["m"])(c),n=Object(r["m"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["G"])(t.to))),s=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(_.bind(null,r));if(o>-1)return o;const a=Wt(t[e-2]);return e>1&&Wt(r)===a&&s[s.length-1].path!==a?s.findIndex(_.bind(null,t[e-2])):o}),o=Object(r["b"])(()=>s.value>-1&&Kt(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return qt(n)?e[Object(r["G"])(t.replace)?"replace":"push"](Object(r["G"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Ht=Object(r["j"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$t,setup(t,{slots:e}){const n=Object(r["y"])($t(t)),{options:i}=Object(r["m"])(c),s=Object(r["b"])(()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["l"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zt=Ht;function qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Wt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Jt=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["m"])(l),s=Object(r["b"])(()=>t.route||i.value),c=Object(r["m"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["x"])(a,c+1),Object(r["x"])(o,u),Object(r["x"])(l,s);const h=Object(r["z"])();return Object(r["I"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&_(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Qt(n.default,{Component:a,route:i});const l=o.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["l"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Qt(n.default,{Component:g,route:i})||g}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Yt=Jt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Dt,i=t.stringifyQuery||Mt,s=t.history;const o=Ut(),a=Ut(),f=Ut(),m=Object(r["D"])(K);let v=K;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),_=p.bind(null,Pt),E=p.bind(null,Lt);function I(t,n){let r,i;return q(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function T(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function j(t){return!!e.getRecordMatcher(t)}function k(t,r){if(r=d({},r||m.value),"string"===typeof t){const i=y(n,t,r.path),o=e.resolve({path:i.path},r),a=s.createHref(i.fullPath);return d(i,o,{params:E(o.params),hash:Lt(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=d({},t,{path:y(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];o=d({},t,{params:_(t.params)}),r.params=_(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=w(E(a.params));const u=b(i,d({},t,{hash:Ct(c),path:a.path})),l=s.createHref(u);return d({fullPath:u,hash:c,query:i===Mt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function C(t){return"string"===typeof t?y(n,t,m.value.path):d({},t)}function N(t,e){if(v!==t)return J(8,{from:e,to:t})}function x(t){return V(t)}function D(t){return x(d(C(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=v=k(t),r=m.value,s=t.state,o=t.force,a=!0===t.replace,c=U(n);if(c)return V(d(C(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&O(i,r,n)&&(l=J(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):G(u,r)).catch(t=>Q(t)?t:tt(t,u,r)).then(t=>{if(t){if(Q(t,2))return V(d(C(t.to),{state:s,force:o,replace:a}),e||u)}else t=H(u,r,!0,a,s);return $(u,r,t),t})}function B(t,e){const n=N(t,e);return n?Promise.reject(n):Promise.resolve()}function G(t,e){let n;const[r,i,s]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of o.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(s,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Q(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of f.list())r(t,e,n)}function H(t,e,n,r,i){const o=N(t,e);if(o)return o;const a=e===K,c=h?history.state:{};n&&(r||a?s.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):s.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let z;function W(){z=s.listen((t,e,n)=>{const r=k(t),i=U(r);if(i)return void V(d(i,{replace:!0}),r).catch(g);v=r;const o=m.value;h&&M(L(o.fullPath,n.delta),R()),G(r,o).catch(t=>Q(t,12)?t:Q(t,2)?(V(t.to,r).then(t=>{Q(t,20)&&!n.delta&&n.type===A.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||H(r,o,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===A.pop&&Q(t,20)&&s.go(-1,!1)),$(r,o,t)}).catch(g)})}let X,Y=Ut(),Z=Ut();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return X&&m.value!==K?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function nt(t){X||(X=!0,W(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset())}function rt(e,n,i,s){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!i&&F(L(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["p"])().then(()=>o(e,n,a)).then(t=>t&&P(t)).catch(t=>tt(t,e,n))}const it=t=>s.go(t);let st;const ot=new Set,at={currentRoute:m,addRoute:I,removeRoute:T,hasRoute:j,getRoutes:S,resolve:k,options:t,push:x,replace:D,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:o.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",zt),t.component("RouterView",Yt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["G"])(m)}),h&&!st&&m.value===K&&(st=!0,x(s.location).catch(t=>{0}));const n={};for(const s in K)n[s]=Object(r["b"])(()=>m.value[s]);t.provide(c,e),t.provide(u,Object(r["y"])(n)),t.provide(l,m);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(v=K,z&&z(),m.value=K,st=!1,X=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>_(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>_(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),s=n("5135"),o=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||s(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:o(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(t,e,n){"use strict";n.d(e,"b",(function(){return Wt})),n.d(e,"n",(function(){return Mt})),n.d(e,"y",(function(){return Tt})),n.d(e,"z",(function(){return Ft})),n.d(e,"D",(function(){return Ut})),n.d(e,"F",(function(){return qt})),n.d(e,"G",(function(){return Gt})),n.d(e,"q",(function(){return r["H"]})),n.d(e,"E",(function(){return r["K"]})),n.d(e,"a",(function(){return Vn})),n.d(e,"d",(function(){return Yn})),n.d(e,"e",(function(){return hr})),n.d(e,"f",(function(){return Qn})),n.d(e,"g",(function(){return ir})),n.d(e,"h",(function(){return lr})),n.d(e,"i",(function(){return sr})),n.d(e,"j",(function(){return _e})),n.d(e,"k",(function(){return Ir})),n.d(e,"l",(function(){return Ni})),n.d(e,"m",(function(){return he})),n.d(e,"o",(function(){return gr})),n.d(e,"p",(function(){return di})),n.d(e,"r",(function(){return Se})),n.d(e,"s",(function(){return Fe})),n.d(e,"t",(function(){return Ae})),n.d(e,"u",(function(){return Le})),n.d(e,"v",(function(){return Ue})),n.d(e,"w",(function(){return qn})),n.d(e,"x",(function(){return le})),n.d(e,"A",(function(){return mr})),n.d(e,"B",(function(){return Ln})),n.d(e,"C",(function(){return Mn})),n.d(e,"H",(function(){return Hr})),n.d(e,"I",(function(){return Si})),n.d(e,"J",(function(){return ee})),n.d(e,"c",(function(){return Rs})),n.d(e,"K",(function(){return ks}));var r=n("9ff4");let i;const s=[];class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class O{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),S(),g=1<<++p,p<=m?h(this):_(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,A(),v.pop();const t=v.length;y=t>0?v[t-1]:void 0}}stop(){this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const I=[];function T(){I.push(E),E=!1}function S(){I.push(E),E=!0}function A(){const t=I.pop();E=void 0===t||t}function j(t,e,n){if(!k())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;C(i,s)}function k(){return E&&void 0!==y}function C(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function N(t,e,n,i,s,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["n"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["n"])(t)?Object(r["r"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["n"])(t)||(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(w)));break;case"set":Object(r["s"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&x(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);x(c(t))}}function x(t,e){for(const n of Object(r["n"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=Object(r["G"])("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["D"])),L=V(),D=V(!1,!0),M=V(!0),F=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=xt(this);for(let e=0,i=this.length;e<i;e++)j(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(xt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=xt(this)[e].apply(this,t);return A(),n}}),t}function V(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&s===(t?e?_t:Ot:e?wt:bt).get(n))return n;const o=Object(r["n"])(n);if(!t&&o&&Object(r["j"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["D"])(i)?P.has(i):R(i))return a;if(t||j(n,"get",i),e)return a;if(Mt(a)){const t=!o||!Object(r["r"])(i);return t?a.value:a}return Object(r["u"])(a)?t?At(a):Tt(a):a}}const B=$(),G=$(!0);function $(t=!1){return function(e,n,i,s){let o=e[n];if(!t&&(i=xt(i),o=xt(o),!Object(r["n"])(e)&&Mt(o)&&!Mt(i)))return o.value=i,!0;const a=Object(r["n"])(e)&&Object(r["r"])(n)?Number(n)<e.length:Object(r["j"])(e,n),c=Reflect.set(e,n,i,s);return e===xt(s)&&(a?Object(r["i"])(i,o)&&N(e,"set",n,i,o):N(e,"add",n,i)),c}}function H(t,e){const n=Object(r["j"])(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&N(t,"delete",e,void 0,i),s}function z(t,e){const n=Reflect.has(t,e);return Object(r["D"])(e)&&P.has(e)||j(t,"has",e),n}function q(t){return j(t,"iterate",Object(r["n"])(t)?"length":b),Reflect.ownKeys(t)}const K={get:L,set:B,deleteProperty:H,has:z,ownKeys:q},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},X=Object(r["h"])({},K,{get:D,set:G}),J=t=>Object(r["u"])(t)?Tt(t):t,Q=t=>Object(r["u"])(t)?At(t):t,Y=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=xt(t),s=xt(e);e!==s&&!n&&j(i,"get",e),!n&&j(i,"get",s);const{has:o}=Z(i),a=r?Y:n?Q:J;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=xt(n),i=xt(t);return t!==i&&!e&&j(r,"has",t),!e&&j(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&j(xt(t),"iterate",b),Reflect.get(t,"size",t)}function rt(t){t=xt(t);const e=xt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),N(e,"add",t,t)),this}function it(t,e){e=xt(e);const n=xt(this),{has:i,get:s}=Z(n);let o=i.call(n,t);o||(t=xt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?Object(r["i"])(e,a)&&N(n,"set",t,e,a):N(n,"add",t,e),this}function st(t){const e=xt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=xt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&N(e,"delete",t,void 0,s),o}function ot(){const t=xt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&N(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=xt(s),a=e?Y:t?Q:J;return!t&&j(o,"iterate",b),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ct(t,e,n){return function(...i){const s=this["__v_raw"],o=xt(s),a=Object(r["s"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?Y:e?Q:J;return!e&&j(o,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)}),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function gt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["j"])(n,i)&&i in e?n:e,i,s)}const mt={get:gt(!1,!1)},vt={get:gt(!1,!0)},yt={get:gt(!0,!1)};const bt=new WeakMap,wt=new WeakMap,Ot=new WeakMap,_t=new WeakMap;function Et(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function It(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Et(Object(r["N"])(t))}function Tt(t){return t&&t["__v_isReadonly"]?t:jt(t,!1,K,mt,bt)}function St(t){return jt(t,!1,X,vt,wt)}function At(t){return jt(t,!0,W,yt,Ot)}function jt(t,e,n,i,s){if(!Object(r["u"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=It(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function kt(t){return Ct(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ct(t){return!(!t||!t["__v_isReadonly"])}function Nt(t){return kt(t)||Ct(t)}function xt(t){const e=t&&t["__v_raw"];return e?xt(e):t}function Rt(t){return Object(r["g"])(t,"__v_skip",!0),t}function Pt(t){k()&&(t=xt(t),t.dep||(t.dep=c()),C(t.dep))}function Lt(t,e){t=xt(t),t.dep&&x(t.dep)}const Dt=t=>Object(r["u"])(t)?Tt(t):t;function Mt(t){return Boolean(t&&!0===t.__v_isRef)}function Ft(t){return Bt(t)}function Ut(t){return Bt(t,!0)}class Vt{constructor(t,e=!1){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:xt(t),this._value=e?t:Dt(t)}get value(){return Pt(this),this._value}set value(t){t=this._shallow?t:xt(t),Object(r["i"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Dt(t),Lt(this,t))}}function Bt(t,e=!1){return Mt(t)?t:new Vt(t,e)}function Gt(t){return Mt(t)?t.value:t}const $t={get:(t,e,n)=>Gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t){return kt(t)?t:new Proxy(t,$t)}class zt{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}function qt(t,e){const n=t[e];return Mt(n)?n:new zt(t,e)}class Kt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new O(t,()=>{this._dirty||(this._dirty=!0,Lt(this))}),this["__v_isReadonly"]=n}get value(){const t=xt(this);return Pt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Wt(t,e){let n,i;Object(r["o"])(t)?(n=t,i=r["d"]):(n=t.get,i=t.set);const s=new Kt(n,i,Object(r["o"])(t)||!t.set);return s}Promise.resolve();new Set;new Map;Object.create(null),Object.create(null);function Xt(t,e,...n){const i=t.vnode.props||r["b"];let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=i[t]||r["b"];o?s=n.map(t=>t.trim()):e&&(s=n.map(r["M"]))}let c;let u=i[c=Object(r["L"])(e)]||i[c=Object(r["L"])(Object(r["e"])(e))];!u&&o&&(u=i[c=Object(r["L"])(Object(r["k"])(e))]),u&&Qr(u,t,6,s);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Qr(l,t,6,s)}}function Jt(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!Object(r["o"])(t)){const i=t=>{const n=Jt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?(Object(r["n"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),i.set(t,a),a):(i.set(t,null),null)}function Qt(t,e){return!(!t||!Object(r["v"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["j"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["j"])(t,Object(r["k"])(e))||Object(r["j"])(t,e))}let Yt=null,Zt=null;function te(t){const e=Yt;return Yt=t,Zt=t&&t.type.__scopeId||null,e}function ee(t,e=Yt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Xn(-1);const i=te(e),s=t(...n);return te(i),r._d&&Xn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ne(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let v;const y=te(t);try{let t;if(4&n.shapeFlag){const e=s||i;v=fr(h.call(e,e,f,o,p,d,g)),t=u}else{const n=e;0,v=fr(n.length>1?n(o,{attrs:u,slots:c,emit:l}):n(o,null)),t=e.props?u:re(u)}let y=v;if(t&&!1!==m){const e=Object.keys(t),{shapeFlag:n}=y;e.length&&7&n&&(a&&e.some(r["t"])&&(t=ie(t,a)),y=cr(y,t))}0,n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),v=y}catch(b){Hn.length=0,Yr(b,t,1),v=sr(Gn)}return te(y),v}const re=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["v"])(n))&&((e||(e={}))[n]=t[n]);return e},ie=(t,e)=>{const n={};for(const i in t)Object(r["t"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function se(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||oe(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?oe(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Qt(u,n))return!0}}return!1}function oe(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Qt(n,s))return!0}return!1}function ae({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const ce=t=>t.__isSuspense;function ue(t,e){e&&e.pendingBranch?Object(r["n"])(t)?e.effects.push(...t):e.effects.push(t):wi(t)}function le(t,e){if(Er){let n=Er.provides;const r=Er.parent&&Er.parent.provides;r===n&&(n=Er.provides=Object.create(r)),n[t]=e}else 0}function he(t,e,n=!1){const i=Er||Yt;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Object(r["o"])(e)?e.call(i.proxy):e}else 0}function fe(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Le(()=>{t.isMounted=!0}),Fe(()=>{t.isUnmounting=!0}),t}const de=[Function,Array],pe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(t,{slots:e}){const n=Ir(),r=fe();let i;return()=>{const s=e.default&&Oe(e.default(),!0);if(!s||!s.length)return;const o=xt(t),{mode:a}=o;const c=s[0];if(r.isLeaving)return ye(c);const u=be(c);if(!u)return ye(c);const l=ve(u,o,r,n);we(u,l);const h=n.subTree,f=h&&be(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Gn&&(!tr(u,f)||d)){const t=ve(f,o,r,n);if(we(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},ye(c);"in-out"===a&&u.type!==Gn&&(t.delayLeave=(t,e,n)=>{const i=me(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},ge=pe;function me(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ve(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),w=me(n,t),O=(t,e)=>{t&&Qr(t,r,9,e)},_={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const s=w[b];s&&tr(t,s)&&s.el._leaveCb&&s.el._leaveCb(),O(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=m||c,r=v||u,s=y||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,O(e?s:r,[t]),_.delayedLeave&&_.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();O(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),O(n?p:d,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return ve(t,e,n,r)}};return _}function ye(t){if(Ie(t))return t=cr(t),t.children=null,t}function be(t){return Ie(t)?t.children?t.children[0]:void 0:t}function we(t,e){6&t.shapeFlag&&t.component?we(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oe(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Vn?(128&s.patchFlag&&r++,n=n.concat(Oe(s.children,e))):(e||s.type!==Gn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function _e(t){return Object(r["o"])(t)?{setup:t,name:t.name}:t}const Ee=t=>!!t.type.__asyncLoader;const Ie=t=>t.type.__isKeepAlive;RegExp,RegExp;function Te(t,e){return Object(r["n"])(t)?t.some(t=>Te(t,e)):Object(r["C"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Se(t,e){je(t,"a",e)}function Ae(t,e){je(t,"da",e)}function je(t,e,n=Er){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(xe(e,r,n),n){let t=n.parent;while(t&&t.parent)Ie(t.parent.vnode)&&ke(r,e,n,t),t=t.parent}}function ke(t,e,n,i){const s=xe(e,t,i,!0);Ue(()=>{Object(r["J"])(i[e],s)},n)}function Ce(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ne(t){return 128&t.shapeFlag?t.ssContent:t}function xe(t,e,n=Er,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),Tr(n);const i=Qr(e,n,t,r);return Sr(),A(),i});return r?i.unshift(s):i.push(s),s}}const Re=t=>(e,n=Er)=>(!Cr||"sp"===t)&&xe(t,e,n),Pe=Re("bm"),Le=Re("m"),De=Re("bu"),Me=Re("u"),Fe=Re("bum"),Ue=Re("um"),Ve=Re("sp"),Be=Re("rtg"),Ge=Re("rtc");function $e(t,e=Er){xe("ec",t,e)}let He=!0;function ze(t){const e=Xe(t),n=t.proxy,i=t.ctx;He=!1,e.beforeCreate&&Ke(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:O,render:_,renderTracked:E,renderTriggered:I,errorCaptured:T,serverPrefetch:S,expose:A,inheritAttrs:j,components:k,directives:C,filters:N}=e,x=null;if(l&&qe(l,i,x,t.appContext.config.unwrapInjectedRef),a)for(const P in a){const t=a[P];Object(r["o"])(t)&&(i[P]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(r["u"])(e)&&(t.data=Tt(e))}if(He=!0,o)for(const P in o){const t=o[P],e=Object(r["o"])(t)?t.bind(n,n):Object(r["o"])(t.get)?t.get.bind(n,n):r["d"];0;const s=!Object(r["o"])(t)&&Object(r["o"])(t.set)?t.set.bind(n):r["d"],a=Wt({get:e,set:s});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)We(c[r],i,n,r);if(u){const t=Object(r["o"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{le(e,t[e])})}function R(t,e){Object(r["n"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Ke(h,t,"c"),R(Pe,f),R(Le,d),R(De,p),R(Me,g),R(Se,m),R(Ae,v),R($e,T),R(Ge,E),R(Be,I),R(Fe,b),R(Ue,O),R(Ve,S),Object(r["n"])(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===r["d"]&&(t.render=_),null!=j&&(t.inheritAttrs=j),k&&(t.components=k),C&&(t.directives=C)}function qe(t,e,n=r["d"],i=!1){Object(r["n"])(t)&&(t=tn(t));for(const s in t){const n=t[s];let o;o=Object(r["u"])(n)?"default"in n?he(n.from||s,n.default,!0):he(n.from||s):he(n),Mt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ke(t,e,n){Qr(Object(r["n"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function We(t,e,n,i){const s=i.includes(".")?ki(n,i):()=>n[i];if(Object(r["C"])(t)){const n=e[t];Object(r["o"])(n)&&Si(s,n)}else if(Object(r["o"])(t))Si(s,t.bind(n));else if(Object(r["u"])(t))if(Object(r["n"])(t))t.forEach(t=>We(t,e,n,i));else{const i=Object(r["o"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["o"])(i)&&Si(s,i,t)}else 0}function Xe(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Je(c,t,o,!0)),Je(c,e,o)):c=e,s.set(e,c),c}function Je(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Je(t,s,n,!0),i&&i.forEach(e=>Je(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Qe[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Qe={data:Ye,props:nn,emits:nn,methods:nn,computed:nn,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,destroyed:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:nn,directives:nn,watch:rn,provide:Ye,inject:Ze};function Ye(t,e){return e?t?function(){return Object(r["h"])(Object(r["o"])(t)?t.call(this,this):t,Object(r["o"])(e)?e.call(this,this):e)}:e:t}function Ze(t,e){return nn(tn(t),tn(e))}function tn(t){if(Object(r["n"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function nn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function rn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=en(t[r],e[r]);return n}function sn(t,e,n,i=!1){const s={},o={};Object(r["g"])(o,er,1),t.propsDefaults=Object.create(null),an(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:St(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function on(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=xt(s),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;an(t,e,s,o)&&(l=!0);for(const o in c)e&&(Object(r["j"])(e,o)||(i=Object(r["k"])(o))!==o&&Object(r["j"])(e,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=cn(u,c,o,void 0,t,!0)):delete s[o]);if(o!==c)for(const t in o)e&&Object(r["j"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["j"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);s[e]=cn(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&N(t,"set","$attrs")}function an(t,e,n,i){const[s,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["y"])(u))continue;const l=e[u];let h;s&&Object(r["j"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:Qt(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(o){const e=xt(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=cn(s,e,c,i[c],t,!Object(r["j"])(i,c))}}return c}function cn(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=Object(r["j"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["o"])(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(Tr(s),i=r[n]=t.call(null,e),Sr())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["k"])(n)||(i=!0))}return i}function un(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!Object(r["o"])(t)){const i=t=>{u=!0;const[n,i]=un(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["n"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);ln(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(ln(e)){const n=o[t],i=a[e]=Object(r["n"])(n)||Object(r["o"])(n)?{type:n}:n;if(i){const t=dn(Boolean,i.type),n=dn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["j"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function ln(t){return"$"!==t[0]}function hn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function fn(t,e){return hn(t)===hn(e)}function dn(t,e){return Object(r["n"])(e)?e.findIndex(e=>fn(e,t)):Object(r["o"])(e)&&fn(e,t)?0:-1}const pn=t=>"_"===t[0]||"$stable"===t,gn=t=>Object(r["n"])(t)?t.map(fr):[fr(t)],mn=(t,e,n)=>{const r=ee((...t)=>gn(e(...t)),n);return r._c=!1,r},vn=(t,e,n)=>{const i=t._ctx;for(const s in t){if(pn(s))continue;const n=t[s];if(Object(r["o"])(n))e[s]=mn(s,n,i);else if(null!=n){0;const t=gn(n);e[s]=()=>t}}},yn=(t,e)=>{const n=gn(e);t.slots.default=()=>n},bn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=xt(e),Object(r["g"])(e,"_",n)):vn(e,t.slots={})}else t.slots={},e&&yn(t,e);Object(r["g"])(t.slots,er,1)},wn=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(s,e),n||1!==t||delete s._):(o=!e.$stable,vn(e,s)),a=e}else e&&(yn(t,e),a={default:1});if(o)for(const r in s)pn(r)||r in a||delete s[r]};function On(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(T(),Qr(c,n,8,[t.el,a,t,e]),A())}}function _n(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let En=0;function In(t,e){return function(n,i=null){null==i||Object(r["u"])(i)||(i=null);const s=_n(),o=new Set;let a=!1;const c=s.app={_uid:En++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:xi,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["o"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["o"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,u){if(!a){const l=sr(n,i);return l.appContext=s,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function Tn(){}const Sn=ue;function An(t){return jn(t)}function jn(t,e){Tn();const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:d=r["d"],cloneNode:p,insertStaticContent:g}=t,m=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!tr(t,e)&&(r=K(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Bn:v(t,e,n,r);break;case Gn:y(t,e,n,r);break;case $n:null==t&&b(e,n,r,o);break;case Vn:x(t,e,n,r,i,s,o,a,c);break;default:1&h?E(t,e,n,r,i,s,o,a,c):6&h?R(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,X)}null!=l&&i&&kn(l,t&&t.ref,s,e||t,!e)},v=(t,e,r,i)=>{if(null==t)n(e.el=a(e.children),r,i);else{const n=e.el=t.el;e.children!==t.children&&u(n,e.children)}},y=(t,e,r,i)=>{null==t?n(e.el=c(e.children||""),r,i):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r)},w=({el:t,anchor:e},r,i)=>{let s;while(t&&t!==e)s=f(t),n(t,r,i),t=s;n(e,r,i)},_=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),i(t),t=n;i(e)},E=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?I(e,n,r,i,s,o,a,c):k(t,e,i,s,o,a,c)},I=(t,e,i,a,c,u,h,f)=>{let d,g;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:O}=t;if(t.el&&void 0!==p&&-1===w)d=t.el=p(t.el);else{if(d=t.el=o(t.type,u,v&&v.is,v),8&y?l(d,t.children):16&y&&j(t.children,d,null,a,c,u&&"foreignObject"!==m,h,f),O&&On(t,null,a,"created"),v){for(const e in v)"value"===e||Object(r["y"])(e)||s(d,e,null,v[e],u,t.children,a,c,q);"value"in v&&s(d,"value",null,v.value),(g=v.onVnodeBeforeMount)&&Cn(g,a,t)}S(d,t,t.scopeId,h,a)}O&&On(t,null,a,"beforeMount");const _=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),n(d,e,i),((g=v&&v.onVnodeMounted)||_||O)&&Sn(()=>{g&&Cn(g,a,t),_&&b.enter(d),O&&On(t,null,a,"mounted")},c)},S=(t,e,n,r,i)=>{if(n&&d(t,n),r)for(let s=0;s<r.length;s++)d(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;S(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},j=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?dr(t[u]):fr(t[u]);m(null,c,e,n,r,i,s,o,a)}},k=(t,e,n,i,o,a,c)=>{const u=e.el=t.el;let{patchFlag:h,dynamicChildren:f,dirs:d}=e;h|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;(m=g.onVnodeBeforeUpdate)&&Cn(m,n,e,t),d&&On(e,t,n,"beforeUpdate");const v=o&&"foreignObject"!==e.type;if(f?C(t.dynamicChildren,f,u,n,i,v,a):c||F(t,e,u,null,n,i,v,a,!1),h>0){if(16&h)N(u,e,p,g,n,i,o);else if(2&h&&p.class!==g.class&&s(u,"class",null,g.class,o),4&h&&s(u,"style",p.style,g.style,o),8&h){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||s(u,a,c,l,o,t.children,n,i,q)}}1&h&&t.children!==e.children&&l(u,e.children)}else c||null!=f||N(u,e,p,g,n,i,o);((m=g.onVnodeUpdated)||d)&&Sn(()=>{m&&Cn(m,n,e,t),d&&On(e,t,n,"updated")},i)},C=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Vn||!tr(c,u)||70&c.shapeFlag)?h(c.el):n;m(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["y"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(t,u,h,l,c,e.children,o,a,q)}if(n!==r["b"])for(const u in n)Object(r["y"])(u)||u in i||s(t,u,n[u],null,c,e.children,o,a,q);"value"in i&&s(t,"value",n.value,i.value)}},x=(t,e,r,i,s,o,c,u,l)=>{const h=e.el=t?t.el:a(""),f=e.anchor=t?t.anchor:a("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(n(h,r,i),n(f,r,i),j(e.children,r,f,s,o,c,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(C(t.dynamicChildren,p,r,s,o,c,u),(null!=e.key||s&&e===s.subTree)&&Nn(t,e,!0)):F(t,e,r,f,s,o,c,u,l)},R=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):P(e,n,r,i,s,o,c):L(t,e,c)},P=(t,e,n,r,i,s,o)=>{const a=t.component=_r(t,r,i);if(Ie(t)&&(a.ctx.renderer=X),Nr(a),a.asyncDep){if(i&&i.registerDep(a,D),!t.el){const t=a.subTree=sr(Gn);y(null,t,e,n)}}else D(a,t,e,n,i,s,o)},L=(t,e,n)=>{const r=e.component=t.component;if(se(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,e,n);r.next=e,vi(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},D=(t,e,n,i,s,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:f}=t,d=n;0,u.allowRecurse=!1,n?(n.el=f.el,M(t,n,a)):n=f,i&&Object(r["m"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Cn(e,l,n,f),u.allowRecurse=!0;const p=ne(t);0;const g=t.subTree;t.subTree=p,m(g,p,h(g.el),K(g),t,s,o),n.el=p.el,null===d&&ae(t,p.el),c&&Sn(c,s),(e=n.props&&n.props.onVnodeUpdated)&&Sn(()=>Cn(e,l,n,f),s)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=Ee(e);if(u.allowRecurse=!1,h&&Object(r["m"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Cn(a,d,e),u.allowRecurse=!0,c&&Q){const n=()=>{t.subTree=ne(t),Q(c,t.subTree,t,s,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=ne(t);0,m(null,r,n,i,t,s,o),e.el=r.el}if(f&&Sn(f,s),!p&&(a=l&&l.onVnodeMounted)){const t=e;Sn(()=>Cn(a,d,t),s)}256&e.shapeFlag&&t.a&&Sn(t.a,s),t.isMounted=!0,e=n=i=null}},u=new O(c,()=>gi(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},M=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,on(t,e.props,r,n),wn(t,e.children,n),T(),Oi(void 0,t.update),A()},F=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,h=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void V(u,f,n,r,i,s,o,a,c);if(256&d)return void U(u,f,n,r,i,s,o,a,c)}8&p?(16&h&&q(u,i,s),f!==u&&l(n,f)):16&h?16&p?V(u,f,n,r,i,s,o,a,c):q(u,i,s,!0):(8&h&&l(n,""),16&p&&j(f,n,r,i,s,o,a,c))},U=(t,e,n,i,s,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?dr(e[d]):fr(e[d]);m(t[d],r,n,null,s,o,a,c,u)}l>h?q(t,s,o,!0,!1,f):j(e,n,i,s,o,a,c,u,f)},V=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?dr(e[l]):fr(e[l]);if(!tr(r,i))break;m(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?dr(e[d]):fr(e[d]);if(!tr(r,i))break;m(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)m(null,e[l]=u?dr(e[l]):fr(e[l]),n,r,s,o,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,g=l,v=new Map;for(l=g;l<=d;l++){const t=e[l]=u?dr(e[l]):fr(e[l]);null!=t.key&&v.set(t.key,l)}let y,b=0;const w=d-g+1;let O=!1,_=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(y=g;y<=d;y++)if(0===E[y-g]&&tr(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(E[i-g]=l+1,i>=_?_=i:O=!0,m(r,e[i],n,null,s,o,a,c,u),b++)}const I=O?xn(E):r["a"];for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:i;0===E[l]?m(null,r,n,f,s,o,a,c,u):O&&(y<0||l!==I[y]?B(r,n,f,2):y--)}}},B=(t,e,r,i,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void B(t.component.subTree,e,r,i);if(128&l)return void t.suspense.move(e,r,i);if(64&l)return void a.move(t,e,r,X);if(a===Vn){n(o,e,r);for(let t=0;t<u.length;t++)B(u[t],e,r,i);return void n(t.anchor,e,r)}if(a===$n)return void w(t,e,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(o),n(o,e,r),Sn(()=>c.enter(o),s);else{const{leave:t,delayLeave:i,afterLeave:s}=c,a=()=>n(o,e,r),u=()=>{t(o,()=>{a(),s&&s()})};i?i(o,a,u):u()}else n(o,e,r)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&kn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ee(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Cn(g,e,t),6&l)z(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&On(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,X,r):u&&(s!==Vn||h>0&&64&h)?q(u,e,n,!1,!0):(s===Vn&&384&h||!i&&16&l)&&q(c,e,n),r&&$(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&Sn(()=>{g&&Cn(g,e,t),d&&On(t,null,e,"unmounted")},n)},$=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Vn)return void H(n,r);if(e===$n)return void _(t);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,i=()=>e(n,o);r?r(t.el,o,i):i()}else o()},H=(t,e)=>{let n;while(t!==e)n=f(t),i(t),t=n;i(e)},z=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&Object(r["m"])(i),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Sn(c,e),Sn(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},q=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},K=t=>6&t.shapeFlag?K(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),W=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):m(e._vnode||null,t,e,null,null,null,n),_i(),e._vnode=t},X={p:m,um:G,m:B,r:$,mt:P,mc:j,pc:F,pbc:C,n:K,o:t};let J,Q;return e&&([J,Q]=e(X)),{render:W,hydrate:J,createApp:In(W,J)}}function kn(t,e,n,i,s=!1){if(Object(r["n"])(t))return void t.forEach((t,o)=>kn(t,e&&(Object(r["n"])(e)?e[o]:e),n,i,s));if(Ee(i)&&!s)return;const o=4&i.shapeFlag?Mr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["C"])(l)?(h[l]=null,Object(r["j"])(f,l)&&(f[l]=null)):Mt(l)&&(l.value=null)),Object(r["C"])(u)){const t=()=>{h[u]=a,Object(r["j"])(f,u)&&(f[u]=a)};a?(t.id=-1,Sn(t,n)):t()}else if(Mt(u)){const t=()=>{u.value=a};a?(t.id=-1,Sn(t,n)):t()}else Object(r["o"])(u)&&Jr(u,c,12,[a,h])}function Cn(t,e,n,r=null){Qr(t,e,7,[n,r])}function Nn(t,e,n=!1){const i=t.children,s=e.children;if(Object(r["n"])(i)&&Object(r["n"])(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=dr(s[r]),e.el=t.el),n||Nn(t,e))}}function xn(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Rn=t=>t.__isTeleport;const Pn="components";function Ln(t,e){return Fn(Pn,t,!0,e)||t}const Dn=Symbol();function Mn(t){return Object(r["C"])(t)?Fn(Pn,t,!1)||t:t||Dn}function Fn(t,e,n=!0,i=!1){const s=Yt||Er;if(s){const n=s.type;if(t===Pn){const t=Vr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=Un(s[t]||n[t],e)||Un(s.appContext[t],e);return!o&&i?n:o}}function Un(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Vn=Symbol(void 0),Bn=Symbol(void 0),Gn=Symbol(void 0),$n=Symbol(void 0),Hn=[];let zn=null;function qn(t=!1){Hn.push(zn=t?null:[])}function Kn(){Hn.pop(),zn=Hn[Hn.length-1]||null}let Wn=1;function Xn(t){Wn+=t}function Jn(t){return t.dynamicChildren=Wn>0?zn||r["a"]:null,Kn(),Wn>0&&zn&&zn.push(t),t}function Qn(t,e,n,r,i,s){return Jn(ir(t,e,n,r,i,s,!0))}function Yn(t,e,n,r,i){return Jn(sr(t,e,n,r,i,!0))}function Zn(t){return!!t&&!0===t.__v_isVNode}function tr(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",nr=({key:t})=>null!=t?t:null,rr=({ref:t})=>null!=t?Object(r["C"])(t)||Mt(t)||Object(r["o"])(t)?{i:Yt,r:t}:t:null;function ir(t,e=null,n=null,i=0,s=null,o=(t===Vn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nr(e),ref:e&&rr(e),scopeId:Zt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(pr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["C"])(n)?8:16),Wn>0&&!a&&zn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&zn.push(u),u}const sr=or;function or(t,e=null,n=null,i=0,s=null,o=!1){if(t&&t!==Dn||(t=Gn),Zn(t)){const r=cr(t,e,!0);return n&&pr(r,n),r}if(Gr(t)&&(t=t.__vccOpts),e){e=ar(e);let{class:t,style:n}=e;t&&!Object(r["C"])(t)&&(e.class=Object(r["H"])(t)),Object(r["u"])(n)&&(Nt(n)&&!Object(r["n"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["I"])(n))}const a=Object(r["C"])(t)?1:ce(t)?128:Rn(t)?64:Object(r["u"])(t)?4:Object(r["o"])(t)?2:0;return ir(t,e,n,i,s,a,o,!0)}function ar(t){return t?Nt(t)||er in t?Object(r["h"])({},t):t:null}function cr(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?gr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nr(c),ref:e&&e.ref?n&&s?Object(r["n"])(s)?s.concat(rr(e)):[s,rr(e)]:rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor};return u}function ur(t=" ",e=0){return sr(Bn,null,t,e)}function lr(t,e){const n=sr($n,null,t);return n.staticCount=e,n}function hr(t="",e=!1){return e?(qn(),Yn(Gn,null,t)):sr(Gn,null,t)}function fr(t){return null==t||"boolean"===typeof t?sr(Gn):Object(r["n"])(t)?sr(Vn,null,t.slice()):"object"===typeof t?dr(t):sr(Bn,null,String(t))}function dr(t){return null===t.el||t.memo?t:cr(t)}function pr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["n"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),pr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||er in e?3===r&&Yt&&(1===Yt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Yt}}else Object(r["o"])(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),64&i?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function gr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["H"])([e.class,i.class]));else if("style"===t)e.style=Object(r["I"])([e.style,i.style]);else if(Object(r["v"])(t)){const n=e[t],r=i[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function mr(t,e,n,i){let s;const o=n&&n[i];if(Object(r["n"])(t)||Object(r["C"])(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["u"])(t))if(t[Symbol.iterator])s=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const vr=t=>t?Ar(t)?Mr(t)||t.proxy:vr(t.parent):null,yr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>Xe(t),$forceUpdate:t=>()=>gi(t.update),$nextTick:t=>di.bind(t.proxy),$watch:t=>ji.bind(t)}),br={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return s[e];case 3:return n[e];case 2:return o[e]}else{if(i!==r["b"]&&Object(r["j"])(i,e))return a[e]=0,i[e];if(s!==r["b"]&&Object(r["j"])(s,e))return a[e]=1,s[e];if((l=t.propsOptions[0])&&Object(r["j"])(l,e))return a[e]=2,o[e];if(n!==r["b"]&&Object(r["j"])(n,e))return a[e]=3,n[e];He&&(a[e]=4)}}const h=yr[e];let f,d;return h?("$attrs"===e&&j(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["j"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["j"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;if(s!==r["b"]&&Object(r["j"])(s,e))s[e]=n;else if(i!==r["b"]&&Object(r["j"])(i,e))i[e]=n;else if(Object(r["j"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["j"])(t,a)||e!==r["b"]&&Object(r["j"])(e,a)||(c=o[0])&&Object(r["j"])(c,a)||Object(r["j"])(i,a)||Object(r["j"])(yr,a)||Object(r["j"])(s.config.globalProperties,a)}};const wr=_n();let Or=0;function _r(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wr,a={uid:Or++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:un(i,s),emitsOptions:Jt(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Xt.bind(null,a),t.ce&&t.ce(a),a}let Er=null;const Ir=()=>Er||Yt,Tr=t=>{Er=t,t.scope.on()},Sr=()=>{Er&&Er.scope.off(),Er=null};function Ar(t){return 4&t.vnode.shapeFlag}let jr,kr,Cr=!1;function Nr(t,e=!1){Cr=e;const{props:n,children:r}=t.vnode,i=Ar(t);sn(t,n,i,e),bn(t,r);const s=i?xr(t,e):void 0;return Cr=!1,s}function xr(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Rt(new Proxy(t.ctx,br));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?Dr(t):null;Tr(t),T();const s=Jr(i,t,0,[t.props,n]);if(A(),Sr(),Object(r["x"])(s)){if(s.then(Sr,Sr),e)return s.then(n=>{Rr(t,n,e)}).catch(e=>{Yr(e,t,0)});t.asyncDep=s}else Rr(t,s,e)}else Pr(t,e)}function Rr(t,e,n){Object(r["o"])(e)?t.render=e:Object(r["u"])(e)&&(t.setupState=Ht(e)),Pr(t,n)}function Pr(t,e,n){const i=t.type;if(!t.render){if(jr&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=jr(e,c)}}t.render=i.render||r["d"],kr&&kr(t)}Tr(t),T(),ze(t),A(),Sr()}function Lr(t){return new Proxy(t.attrs,{get(e,n){return j(t,"get","$attrs"),e[n]}})}function Dr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Lr(t))},slots:t.slots,emit:t.emit,expose:e}}function Mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ht(Rt(t.exposed)),{get(e,n){return n in e?e[n]:n in yr?yr[n](t):void 0}}))}const Fr=/(?:^|[-_])(\w)/g,Ur=t=>t.replace(Fr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Vr(t){return Object(r["o"])(t)&&t.displayName||t.name}function Br(t,e,n=!1){let r=Vr(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?Ur(r):n?"App":"Anonymous"}function Gr(t){return Object(r["o"])(t)&&"__vccOpts"in t}const $r=[];function Hr(t,...e){T();const n=$r.length?$r[$r.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=zr();if(r)Jr(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:t})=>`at <${Br(n,t.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+t,...e];i.length&&n.push("\n",...qr(i)),console.warn(...n)}A()}function zr(){let t=$r[$r.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function qr(t){const e=[];return t.forEach((t,n)=>{e.push(...0===n?[]:["\n"],...Kr(t))}),e}function Kr({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=" at <"+Br(t.component,t.type,r),s=">"+n;return t.props?[i,...Wr(t.props),s]:[i+s]}function Wr(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(n=>{e.push(...Xr(n,t[n]))}),n.length>3&&e.push(" ..."),e}function Xr(t,e,n){return Object(r["C"])(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:Mt(e)?(e=Xr(t,xt(e.value),!0),n?e:[t+"=Ref<",e,">"]):Object(r["o"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=xt(e),n?e:[t+"=",e])}function Jr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Yr(s,e,n)}return i}function Qr(t,e,n,i){if(Object(r["o"])(t)){const s=Jr(t,e,n,i);return s&&Object(r["x"])(s)&&s.catch(t=>{Yr(t,e,n)}),s}const s=[];for(let r=0;r<t.length;r++)s.push(Qr(t[r],e,n,i));return s}function Yr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Jr(o,null,10,[t,i,s])}Zr(t,n,i,r)}function Zr(t,e,n,r=!0){console.error(t)}let ti=!1,ei=!1;const ni=[];let ri=0;const ii=[];let si=null,oi=0;const ai=[];let ci=null,ui=0;const li=Promise.resolve();let hi=null,fi=null;function di(t){const e=hi||li;return t?e.then(this?t.bind(this):t):e}function pi(t){let e=ri+1,n=ni.length;while(e<n){const r=e+n>>>1,i=Ei(ni[r]);i<t?e=r+1:n=r}return e}function gi(t){ni.length&&ni.includes(t,ti&&t.allowRecurse?ri+1:ri)||t===fi||(null==t.id?ni.push(t):ni.splice(pi(t.id),0,t),mi())}function mi(){ti||ei||(ei=!0,hi=li.then(Ii))}function vi(t){const e=ni.indexOf(t);e>ri&&ni.splice(e,1)}function yi(t,e,n,i){Object(r["n"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),mi()}function bi(t){yi(t,si,ii,oi)}function wi(t){yi(t,ci,ai,ui)}function Oi(t,e=null){if(ii.length){for(fi=e,si=[...new Set(ii)],ii.length=0,oi=0;oi<si.length;oi++)si[oi]();si=null,oi=0,fi=null,Oi(t,e)}}function _i(t){if(ai.length){const t=[...new Set(ai)];if(ai.length=0,ci)return void ci.push(...t);for(ci=t,ci.sort((t,e)=>Ei(t)-Ei(e)),ui=0;ui<ci.length;ui++)ci[ui]();ci=null,ui=0}}const Ei=t=>null==t.id?1/0:t.id;function Ii(t){ei=!1,ti=!0,Oi(t),ni.sort((t,e)=>Ei(t)-Ei(e));try{for(ri=0;ri<ni.length;ri++){const t=ni[ri];t&&!1!==t.active&&Jr(t,null,14)}}finally{ri=0,ni.length=0,_i(t),ti=!1,hi=null,(ni.length||ii.length||ai.length)&&Ii(t)}}const Ti={};function Si(t,e,n){return Ai(t,e,n)}function Ai(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=Er;let u,l,h=!1,f=!1;if(Mt(t)?(u=()=>t.value,h=!!t._shallow):kt(t)?(u=()=>t,i=!0):Object(r["n"])(t)?(f=!0,h=t.some(kt),u=()=>t.map(t=>Mt(t)?t.value:kt(t)?Ci(t):Object(r["o"])(t)?Jr(t,c,2):void 0)):u=Object(r["o"])(t)?e?()=>Jr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Qr(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>Ci(t())}let d=t=>{l=v.onStop=()=>{Jr(t,c,4)}},p=f?[]:Ti;const g=()=>{if(v.active)if(e){const t=v.run();(i||h||(f?t.some((t,e)=>Object(r["i"])(t,p[e])):Object(r["i"])(t,p)))&&(l&&l(),Qr(e,c,3,[t,p===Ti?void 0:p,d]),p=t)}else v.run()};let m;g.allowRecurse=!!e,m="sync"===s?g:"post"===s?()=>Sn(g,c&&c.suspense):()=>{!c||c.isMounted?bi(g):g()};const v=new O(u,m);return e?n?g():p=v.run():"post"===s?Sn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["J"])(c.scope.effects,v)}}function ji(t,e,n){const i=this.proxy,s=Object(r["C"])(t)?t.includes(".")?ki(i,t):()=>i[t]:t.bind(i,i);let o;Object(r["o"])(e)?o=e:(o=e.handler,n=e);const a=Er;Tr(this);const c=Ai(s,o.bind(i),n);return a?Tr(a):Sr(),c}function ki(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Ci(t,e=new Set){if(!Object(r["u"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Mt(t))Ci(t.value,e);else if(Object(r["n"])(t))for(let n=0;n<t.length;n++)Ci(t[n],e);else if(Object(r["A"])(t)||Object(r["s"])(t))t.forEach(t=>{Ci(t,e)});else if(Object(r["w"])(t))for(const n in t)Ci(t[n],e);return t}function Ni(t,e,n){const i=arguments.length;return 2===i?Object(r["u"])(e)&&!Object(r["n"])(e)?Zn(e)?sr(t,null,[e]):sr(t,e):sr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Zn(n)&&(n=[n]),sr(t,e,n))}Symbol("");const xi="3.2.4",Ri="http://www.w3.org/2000/svg",Pi="undefined"!==typeof document?document:null,Li=new Map,Di={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Pi.createElementNS(Ri,t):Pi.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=Li.get(t);if(!s){const e=Pi.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,s=e.content,r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}Li.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mi(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Fi(t,e,n){const i=t.style;if(n)if(Object(r["C"])(n)){if(e!==n){const e=i.display;i.cssText=n,"_vod"in t&&(i.display=e)}}else{for(const t in n)Vi(i,t,n[t]);if(e&&!Object(r["C"])(e))for(const t in e)null==n[t]&&Vi(i,t,"")}else t.removeAttribute("style")}const Ui=/\s*!important$/;function Vi(t,e,n){if(Object(r["n"])(n))n.forEach(n=>Vi(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=$i(t,e);Ui.test(n)?t.setProperty(Object(r["k"])(i),n.replace(Ui,""),"important"):t[i]=n}}const Bi=["Webkit","Moz","ms"],Gi={};function $i(t,e){const n=Gi[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Gi[e]=i;i=Object(r["f"])(i);for(let r=0;r<Bi.length;r++){const n=Bi[r]+i;if(n in t)return Gi[e]=n}return e}const Hi="http://www.w3.org/1999/xlink";function zi(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n);else{const i=Object(r["B"])(e);null==n||i&&!Object(r["l"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function qi(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["l"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Ki=Date.now,Wi=!1;if("undefined"!==typeof window){Ki()>document.createEvent("Event").timeStamp&&(Ki=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Wi=!!(t&&Number(t[1])<=53)}let Xi=0;const Ji=Promise.resolve(),Qi=()=>{Xi=0},Yi=()=>Xi||(Ji.then(Qi),Xi=Ki());function Zi(t,e,n,r){t.addEventListener(e,n,r)}function ts(t,e,n,r){t.removeEventListener(e,n,r)}function es(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=rs(e);if(r){const o=s[e]=is(r,i);Zi(t,n,o,a)}else o&&(ts(t,n,o,a),s[e]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;function rs(t){let e;if(ns.test(t)){let n;e={};while(n=t.match(ns))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["k"])(t.slice(2)),e]}function is(t,e){const n=t=>{const r=t.timeStamp||Ki();(Wi||r>=n.attached-1)&&Qr(ss(t,n.value),e,5,[t])};return n.value=t,n.attached=Yi(),n}function ss(t,e){if(Object(r["n"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const os=/^on[a-z]/,as=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?Mi(t,i,s):"style"===e?Fi(t,n,i):Object(r["v"])(e)?Object(r["t"])(e)||es(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):cs(t,e,i,s))?qi(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),zi(t,e,i,s))};function cs(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&os.test(e)&&Object(r["o"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!os.test(e)||!Object(r["C"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const us="transition",ls="animation",hs=(t,{slots:e})=>Ni(ge,gs(t),e);hs.displayName="Transition";const fs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ds=(hs.props=Object(r["h"])({},ge.props,fs),(t,e=[])=>{Object(r["n"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),ps=t=>!!t&&(Object(r["n"])(t)?t.some(t=>t.length>1):t.length>1);function gs(t){const e={};for(const r in t)r in fs||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=ms(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:O,onLeaveCancelled:_,onBeforeAppear:E=y,onAppear:I=b,onAppearCancelled:T=w}=e,S=(t,e,n)=>{bs(t,e?h:c),bs(t,e?l:a),n&&n()},A=(t,e)=>{bs(t,p),bs(t,d),e&&e()},j=t=>(e,n)=>{const r=t?I:b,s=()=>S(e,t,n);ds(r,[e,s]),ws(()=>{bs(e,t?u:o),ys(e,t?h:c),ps(r)||_s(e,i,m,s)})};return Object(r["h"])(e,{onBeforeEnter(t){ds(y,[t]),ys(t,o),ys(t,a)},onBeforeAppear(t){ds(E,[t]),ys(t,u),ys(t,l)},onEnter:j(!1),onAppear:j(!0),onLeave(t,e){const n=()=>A(t,e);ys(t,f),Ss(),ys(t,d),ws(()=>{bs(t,f),ys(t,p),ps(O)||_s(t,i,v,n)}),ds(O,[t,n])},onEnterCancelled(t){S(t,!1),ds(w,[t])},onAppearCancelled(t){S(t,!0),ds(T,[t])},onLeaveCancelled(t){A(t),ds(_,[t])}})}function ms(t){if(null==t)return null;if(Object(r["u"])(t))return[vs(t.enter),vs(t.leave)];{const e=vs(t);return[e,e]}}function vs(t){const e=Object(r["M"])(t);return e}function ys(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function bs(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ws(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Os=0;function _s(t,e,n,r){const i=t._endId=++Os,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Es(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function Es(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(us+"Delay"),s=r(us+"Duration"),o=Is(i,s),a=r(ls+"Delay"),c=r(ls+"Duration"),u=Is(a,c);let l=null,h=0,f=0;e===us?o>0&&(l=us,h=o,f=s.length):e===ls?u>0&&(l=ls,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?us:ls:null,f=l?l===us?s.length:c.length:0);const d=l===us&&/\b(transform|all)(,|$)/.test(n[us+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function Is(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>Ts(e)+Ts(t[n])))}function Ts(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ss(){return document.body.offsetHeight}new WeakMap,new WeakMap;const As=["ctrl","shift","alt","meta"],js={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>As.some(n=>t[n+"Key"]&&!e.includes(n))},ks=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=js[e[t]];if(r&&r(n,e))return}return t(n,...r)};const Cs=Object(r["h"])({patchProp:as},Di);let Ns;function xs(){return Ns||(Ns=An(Cs))}const Rs=(...t)=>{const e=xs().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Ps(t);if(!i)return;const s=e._component;Object(r["o"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ps(t){if(Object(r["C"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7bb1":function(t,e,n){"use strict";n.d(e,"a",(function(){return Nt})),n.d(e,"b",(function(){return Ot})),n.d(e,"c",(function(){return Ct})),n.d(e,"d",(function(){return nt})),n.d(e,"e",(function(){return l}));var r=n("7a23");
/**
  * vee-validate v4.4.9
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function i(t){return"function"===typeof t}function s(t){return null===t||void 0===t}const o=t=>null!==t&&!!t&&"object"===typeof t&&!Array.isArray(t);function a(t){return Number(t)>=0}function c(t){const e=parseFloat(t);return isNaN(e)?t:e}const u={};function l(t,e){f(t,e),u[t]=e}function h(t){return u[t]}function f(t,e){if(!i(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const d=Symbol("vee-validate-form"),p=Symbol("vee-validate-form-errors"),g=Symbol("vee-validate-form-initial-values"),m=Symbol("vee-validate-field-instance"),v=Symbol("Default empty value");function y(t){return i(t)&&!!t.__locatorRef}function b(t){return["input","textarea","select"].includes(t)}function w(t,e){return b(t)&&"file"===e.type}function O(t){return!!t&&i(t.validate)}function _(t){return"checkbox"===t||"radio"===t}function E(t){return o(t)||Array.isArray(t)}function I(t){return Array.isArray(t)?0===t.length:o(t)&&0===Object.keys(t).length}function T(t){return/^\[.+\]$/i.test(t)}function S(t){return"SELECT"===t.tagName&&t.multiple}function A(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return"select"===t&&"multiple"in e&&n}function j(t,e){return A(t,e)||w(t,e)}function k(t){return C(t)&&t.target&&"submit"in t.target}function C(t){return!!t&&(!!("undefined"!==typeof Event&&i(Event)&&t instanceof Event)||!(!t||!t.srcElement))}function N(t,e){return e in t&&t[e]!==v}function x(t){return T(t)?t.replace(/\[|\]/gi,""):t}function R(t,e,n){if(!t)return n;if(T(e))return t[x(e)];const r=e.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((t,e)=>E(t)&&e in t?t[e]:n,t);return r}function P(t,e,n){if(T(e))return void(t[x(e)]=n);const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let o=0;o<r.length;o++){if(o===r.length-1)return void(i[r[o]]=n);r[o]in i&&!s(i[r[o]])||(i[r[o]]=a(r[o+1])?[]:{}),i=i[r[o]]}}function L(t,e){Array.isArray(t)&&a(e)?t.splice(Number(e),1):o(t)&&delete t[e]}function D(t,e){if(T(e))return void delete t[x(e)];const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let o=0;o<n.length;o++){if(o===n.length-1){L(r,n[o]);break}if(!(n[o]in r)||s(r[n[o]]))break;r=r[n[o]]}const i=n.map((e,r)=>R(t,n.slice(0,r).join(".")));for(let s=i.length-1;s>=0;s--)I(i[s])&&(0!==s?L(i[s-1],n[s-1]):L(t,n[0]))}function M(t){return Object.keys(t)}function F(t,e){const n=Object(r["k"])();return(null===n||void 0===n?void 0:n.provides[t])||Object(r["m"])(t,e)}function U(t){return Array.isArray(t)?t[0]:t}function V(t,e,n=!1){Array.isArray(t)?n?e(t[0]):t.forEach(e):e(t)}function B(t,e,n){if(Array.isArray(t)){const n=[...t],r=n.indexOf(e);return r>=0?n.splice(r,1):n.push(e),n}return t===e?n:e}const G=(t,e,n)=>e.slots.default?"string"!==typeof t&&t?{default:()=>{var t,r;return null===(r=(t=e.slots).default)||void 0===r?void 0:r.call(t,n())}}:e.slots.default(n()):e.slots.default;function $(t){if(H(t))return t._value}function H(t){return"_value"in t}function z(t){if(!C(t))return t;const e=t.target;return _(e.type)&&H(e)?$(e):"file"===e.type&&e.files?Array.from(e.files):S(e)?Array.from(e.options).filter(t=>t.selected&&!t.disabled).map($):e.value}function q(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?o(t)&&t._$$isNormalized?t:o(t)?Object.keys(t).reduce((e,n)=>{const r=K(t[n]);return!1!==t[n]&&(e[n]=W(r)),e},e):"string"!==typeof t?e:t.split("|").reduce((t,e)=>{const n=X(e);return n.name?(t[n.name]=W(n.params),t):t},e):e}function K(t){return!0===t?[]:Array.isArray(t)||o(t)?t:[t]}function W(t){const e=t=>"string"===typeof t&&"@"===t[0]?J(t.slice(1)):t;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const X=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function J(t){const e=e=>{const n=R(e,t)||e[t];return n};return e.__locatorRef=t,e}function Q(t){return Array.isArray(t)?t.filter(y):M(t).filter(e=>y(t[e])).map(e=>t[e])}const Y={generateMessage:({field:t})=>t+" is not valid.",bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Z=Object.assign({},Y);const tt=()=>Z,et=t=>{Z=Object.assign(Object.assign({},Z),t)},nt=et;async function rt(t,e,n={}){const r=null===n||void 0===n?void 0:n.bails,i={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:e,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},s=await it(i,t),o=s.errors;return{errors:o,valid:!o.length}}async function it(t,e){if(O(t.rules))return st(e,t.rules,{bails:t.bails});if(i(t.rules)){const n={field:t.name,form:t.formData,value:e},r=await t.rules(e,n),i="string"!==typeof r&&r,s="string"===typeof r?r:at(n);return{errors:i?[]:[s]}}const n=Object.assign(Object.assign({},t),{rules:q(t.rules)}),r=[],s=Object.keys(n.rules),o=s.length;for(let i=0;i<o;i++){const o=s[i],a=await ot(n,e,{name:o,params:n.rules[o]});if(a.error&&(r.push(a.error),t.bails))return{errors:r}}return{errors:r}}async function st(t,e,n){var r;const i=await e.validate(t,{abortEarly:null===(r=n.bails)||void 0===r||r}).then(()=>[]).catch(t=>{if("ValidationError"===t.name)return t.errors;throw t});return{errors:i}}async function ot(t,e,n){const r=h(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=ct(n.params,t.formData),s={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return"string"===typeof o?{error:o}:{error:o?void 0:at(s)}}function at(t){const e=tt().generateMessage;return e?e(t):"Field is invalid"}function ct(t,e){const n=t=>y(t)?t(e):t;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((e,r)=>(e[r]=n(t[r]),e),{})}async function ut(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(t=>{if("ValidationError"!==t.name)throw t;return t.inner||[]}),r={},i={};for(const s of n){const t=s.errors;r[s.path]={valid:!t.length,errors:t},t.length&&(i[s.path]=t[0])}return{valid:!n.length,results:r,errors:i}}async function lt(t,e,n){const r=M(t),i=r.map(async r=>{var i,s,o;const a=await rt(R(e,r),t[r],{name:(null===(i=null===n||void 0===n?void 0:n.names)||void 0===i?void 0:i[r])||r,values:e,bails:null===(o=null===(s=null===n||void 0===n?void 0:n.bailsMap)||void 0===s?void 0:s[r])||void 0===o||o});return Object.assign(Object.assign({},a),{path:r})});let s=!0;const o=await Promise.all(i),a={},c={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(s=!1,c[u.path]=u.errors[0]);return{valid:s,results:a,errors:c}}function ht(t){if("object"!==typeof t)return t;var e,n,r=Object.prototype.toString.call(t);if("[object Object]"===r){if(t.constructor!==Object&&"function"===typeof t.constructor)for(e in n=new t.constructor,t)n.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=ht(t[e]));else for(e in n={},t)"__proto__"===e?Object.defineProperty(n,e,{value:ht(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=ht(t[e]);return n}if("[object Array]"===r){for(e=t.length,n=Array(e);e--;)n[e]=ht(t[e]);return n}return"[object Date]"===r?new Date(+t):"[object RegExp]"===r?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):t}var ft=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!t(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!t(i[1],n.get(i[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;0!==i--;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let dt=0;function pt(t,e,n){const s=dt>=Number.MAX_SAFE_INTEGER?0:++dt,{initialValue:o,validateOnMount:a,bails:c,type:u,checkedValue:l,label:h,validateOnValueUpdate:f,uncheckedValue:p,standalone:g}=gt(Object(r["G"])(t),n),v=g?void 0:F(d),{meta:y,errors:b,errorMessage:w,handleBlur:_,handleInput:E,resetValidationState:I,setValidationState:T,setErrors:S,value:A,checked:j}=mt({name:t,initValue:o,form:v,type:u,checkedValue:l,standalone:g}),k=Object(r["b"])(()=>{let n=Object(r["G"])(e);const s=Object(r["G"])(null===v||void 0===v?void 0:v.schema);return s&&!O(s)&&(n=yt(s,Object(r["G"])(t))||n),O(n)||i(n)?n:q(n)});async function C(e){var n,i;return(null===v||void 0===v?void 0:v.validateSchema)?null!==(n=(await v.validateSchema(e)).results[Object(r["G"])(t)])&&void 0!==n?n:{valid:!0,errors:[]}:rt(A.value,k.value,{name:Object(r["G"])(h)||Object(r["G"])(t),values:null!==(i=null===v||void 0===v?void 0:v.values)&&void 0!==i?i:{},bails:c})}async function N(){y.pending=!0,y.validated=!0;const t=await C("validated-only");return y.pending=!1,T(t)}async function x(){const t=await C("silent");y.valid=t.valid}const P=(t,e=!0)=>{var n,i;if(j&&j.value===(null===(i=null===(n=t)||void 0===n?void 0:n.target)||void 0===i?void 0:i.checked))return;let s=z(t);return j&&"checkbox"===u&&!v&&(s=B(A.value,Object(r["G"])(l),Object(r["G"])(p))),A.value=s,!f&&e?N():void 0};function L(t){y.touched=t}let D;function M(){D=Object(r["I"])(A,f?N:x,{deep:!0})}function U(t){null===D||void 0===D||D(),I(t),Object(r["p"])(()=>{M()})}Object(r["u"])(()=>{if(a)return N();v&&v.validateSchema||x()}),M();const V={idx:-1,fid:s,name:t,label:h,value:A,meta:y,errors:b,errorMessage:w,type:u,checkedValue:l,uncheckedValue:p,checked:j,bails:c,resetField:U,handleReset:()=>U(),validate:N,handleChange:P,handleBlur:_,handleInput:E,setValidationState:T,setTouched:L,setErrors:S};if(Object(r["x"])(m,V),Object(r["n"])(e)&&"function"!==typeof Object(r["G"])(e)&&Object(r["I"])(e,(t,e)=>{if(!ft(t,e))return N()},{deep:!0}),!v)return V;v.register(V),Object(r["s"])(()=>{v.unregister(V)});const G=Object(r["b"])(()=>{const t=k.value;return!t||i(t)||O(t)?{}:Object.keys(t).reduce((e,n)=>{const r=Q(t[n]).map(t=>t.__locatorRef).reduce((t,e)=>{const n=R(v.values,e)||v.values[e];return void 0!==n&&(t[e]=n),t},{});return Object.assign(e,r),e},{})});return Object(r["I"])(G,(t,e)=>{if(!Object.keys(t).length)return;const n=!ft(t,e);n&&(y.dirty?N():x())}),V}function gt(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:r})}function mt({name:t,initValue:e,form:n,type:i,checkedValue:s,standalone:o}){const{errors:a,errorMessage:c,setErrors:u}=wt(t,n),l=o?void 0:F(g,void 0),h=Object(r["z"])(Object(r["G"])(e)),f=Object(r["b"])(()=>R(Object(r["G"])(l),Object(r["G"])(t),Object(r["G"])(h))),d=bt(f,t,n),p=vt(f,d,a),m=_(i)?Object(r["b"])(()=>Array.isArray(d.value)?d.value.includes(Object(r["G"])(s)):Object(r["G"])(s)===d.value):void 0,v=()=>{p.touched=!0},y=t=>{_(i)||(d.value=z(t))};function b(t){return u(t.errors),t}function w(i){var s;const o=Object(r["G"])(t),a=i&&"value"in i?i.value:R(Object(r["G"])(l),o,Object(r["G"])(e));n?(n.setFieldValue(o,a,{force:!0}),n.setFieldInitialValue(o,a)):(d.value=ht(a),h.value=ht(a)),u((null===i||void 0===i?void 0:i.errors)||[]),p.touched=null!==(s=null===i||void 0===i?void 0:i.touched)&&void 0!==s&&s,p.pending=!1,p.validated=!1}return{meta:p,errors:a,errorMessage:c,setErrors:u,setValidationState:b,resetValidationState:w,handleBlur:v,handleInput:y,value:d,checked:m}}function vt(t,e,n){const i=Object(r["y"])({touched:!1,pending:!1,valid:!0,validated:!!Object(r["G"])(n).length,initialValue:Object(r["b"])(()=>Object(r["G"])(t)),dirty:Object(r["b"])(()=>!ft(Object(r["G"])(e),Object(r["G"])(t)))});return Object(r["I"])(n,t=>{i.valid=!t.length},{immediate:!0,flush:"sync"}),i}function yt(t,e){if(t)return t[e]}function bt(t,e,n){if(!n)return Object(r["z"])(Object(r["G"])(t));const i=R(n.values,Object(r["G"])(e),Object(r["G"])(t));n.stageInitialValue(Object(r["G"])(e),void 0===i?Object(r["G"])(t):i);const s=Object(r["b"])({get(){return R(n.values,Object(r["G"])(e))},set(t){n.setFieldValue(Object(r["G"])(e),t)}});return s}function wt(t,e){if(!e){const t=Object(r["z"])([]);return{errors:Object(r["b"])(()=>t.value),errorMessage:Object(r["b"])(()=>t.value[0]),setErrors:e=>{t.value=Array.isArray(e)?e:[e]}}}const n=Object(r["b"])(()=>e.errorBag.value[Object(r["G"])(t)]||[]);return{errors:n,errorMessage:Object(r["b"])(()=>n.value[0]),setErrors:n=>{e.setFieldErrorBag(Object(r["G"])(t),n)}}}const Ot=Object(r["j"])({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>tt().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:v},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Object(r["F"])(t,"rules"),i=Object(r["F"])(t,"name"),s=Object(r["F"])(t,"label"),o=Object(r["F"])(t,"uncheckedValue"),a=N(t,"onUpdate:modelValue"),{errors:c,value:u,errorMessage:l,validate:h,handleChange:f,handleBlur:d,handleInput:p,setTouched:g,resetField:m,handleReset:y,meta:b,checked:w,setErrors:O}=pt(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:Tt(t,e),checkedValue:e.attrs.value,uncheckedValue:o,label:s,validateOnValueUpdate:!1}),E=a?function(t,n=!0){f(t,n),e.emit("update:modelValue",u.value)}:f,I=a?function(t){p(t),e.emit("update:modelValue",u.value)}:p,T=Object(r["b"])(()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:i,validateOnModelUpdate:s}=Et(t),o=[d,e.attrs.onBlur,i?h:void 0].filter(Boolean),a=[t=>E(t,n),e.attrs.onInput].filter(Boolean),c=[t=>E(t,r),e.attrs.onChange].filter(Boolean),l={name:t.name,onBlur:o,onInput:a,onChange:c};s&&(l["onUpdate:modelValue"]=[E]),_(e.attrs.type)&&w?l.checked=w.value:l.value=u.value;const f=_t(t,e);return j(f,e.attrs)&&delete l.value,l}),S=Object(r["F"])(t,"modelValue");function A(){return{field:T.value,value:u.value,meta:b,errors:c.value,errorMessage:l.value,validate:h,resetField:m,handleChange:E,handleInput:I,handleReset:y,handleBlur:d,setTouched:g,setErrors:O}}return Object(r["I"])(S,e=>{e===v&&void 0===u.value||e!==It(u.value,t.modelModifiers)&&(u.value=e,h())}),()=>{const n=Object(r["C"])(_t(t,e)),i=G(n,e,A);return n?Object(r["l"])(n,Object.assign(Object.assign({},e.attrs),T.value),i):i}}});function _t(t,e){let n=t.as||"";return t.as||e.slots.default||(n="input"),n}function Et(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:c}=tt();return{validateOnInput:null!==(e=t.validateOnInput)&&void 0!==e?e:s,validateOnChange:null!==(n=t.validateOnChange)&&void 0!==n?n:o,validateOnBlur:null!==(r=t.validateOnBlur)&&void 0!==r?r:a,validateOnModelUpdate:null!==(i=t.validateOnModelUpdate)&&void 0!==i?i:c}}function It(t,e){return e.number?c(t):t}function Tt(t,e){return _(e.attrs.type)?N(t,"modelValue")?t.modelValue:void 0:N(t,"modelValue")?t.modelValue:e.attrs.value}function St(t){const e=Object(r["z"])([]),n=Object(r["z"])(!1),i=Object(r["b"])(()=>e.value.reduce((t,e)=>{const n=Object(r["G"])(e.name);if(!t[n])return t[n]=e,e.idx=-1,t;const i=t[n];Array.isArray(i)||(i.idx=0,t[n]=[i]);const s=t[n];return e.idx=s.length,s.push(e),t},{})),s=Object(r["z"])(0),o=Object(r["y"])(ht(Object(r["G"])(null===t||void 0===t?void 0:t.initialValues)||{})),a={},{errorBag:c,setErrorBag:u,setFieldErrorBag:l}=kt(null===t||void 0===t?void 0:t.initialErrors),h=Object(r["b"])(()=>M(c.value).reduce((t,e)=>{const n=c.value[e];return n&&n.length&&(t[e]=n[0]),t},{})),f=Object(r["b"])(()=>M(i.value).reduce((t,e)=>{const n=U(i.value[e]);return n&&(t[e]=Object(r["G"])(n.label||n.name)||""),t},{})),g=Object(r["b"])(()=>M(i.value).reduce((t,e)=>{var n;const r=U(i.value[e]);return r&&(t[e]=null===(n=r.bails)||void 0===n||n),t},{})),m=Object.assign({},(null===t||void 0===t?void 0:t.initialErrors)||{}),{readonlyInitialValues:v,initialValues:y,setInitialValues:b}=jt(i,o,null===t||void 0===t?void 0:t.initialValues),w=At(e,o,v,h),_=null===t||void 0===t?void 0:t.validationSchema,E={fieldsById:i,values:o,errorBag:c,schema:_,submitCount:s,meta:w,isSubmitting:n,validateSchema:Object(r["G"])(_)?q:void 0,validate:F,register:x,unregister:L,setFieldErrorBag:l,validateField:G,setFieldValue:S,setValues:A,setErrors:T,setFieldError:I,setFieldTouched:j,setTouched:C,resetForm:N,handleSubmit:$,stageInitialValue:z,setFieldInitialValue:H};function I(t,e){l(t,e)}function T(t){u(t)}function S(t,e,{force:n}={force:!1}){var s;const c=i.value[t],u=ht(e);if(!c)return void P(o,t,u);if(Array.isArray(c)&&"checkbox"===(null===(s=c[0])||void 0===s?void 0:s.type)&&!Array.isArray(e)){const n=ht(B(R(o,t)||[],e,void 0));return P(o,t,n),void c.forEach(t=>{a[t.fid]=n})}let l=e;Array.isArray(c)||"checkbox"!==(null===c||void 0===c?void 0:c.type)||n||(l=ht(B(R(o,t),e,Object(r["G"])(c.uncheckedValue)))),P(o,t,l),c&&Array.isArray(c)?c.forEach(t=>{a[t.fid]=l}):a[c.fid]=l}function A(t){M(o).forEach(t=>{delete o[t]}),M(t).forEach(e=>{S(e,t[e])})}function j(t,e){const n=i.value[t];n&&V(n,t=>t.setTouched(e))}function C(t){M(t).forEach(e=>{j(e,!!t[e])})}function N(t){(null===t||void 0===t?void 0:t.values)?(b(t.values),A(null===t||void 0===t?void 0:t.values)):A(y.value),e.value.forEach(t=>t.resetField()),(null===t||void 0===t?void 0:t.touched)&&C(t.touched),T((null===t||void 0===t?void 0:t.errors)||{}),s.value=(null===t||void 0===t?void 0:t.submitCount)||0}function x(t){e.value.push(t),i.value,Object(r["n"])(t.name)&&(a[t.fid]=t.value.value,Object(r["I"])(t.name,(n,i)=>{S(n,a[t.fid]);const s=e.value.find(t=>Object(r["G"])(t.name)===i);s||(D(o,i),D(y.value,i))},{flush:"post"}));const n=Object(r["G"])(t.name),s=Object(r["G"])(t.errorMessage);s&&(null===m||void 0===m?void 0:m[n])!==s&&G(n),delete m[n]}function L(t){var n,s;const c=e.value.indexOf(t);if(-1===c)return;e.value.splice(c,1);const u=t.fid;Object(r["p"])(()=>{delete a[u],i.value[l]||I(l,void 0)});const l=Object(r["G"])(t.name);if(-1===t.idx){const t=e.value.find(t=>Object(r["G"])(t.name)===l);if(t)return;return D(o,l),void D(y.value,l)}const h=null===(s=null===(n=R(o,l))||void 0===n?void 0:n.indexOf)||void 0===s?void 0:s.call(n,Object(r["G"])(t.checkedValue));void 0!==h?-1!==h&&(Array.isArray(o[l])?D(o,`${l}.${h}`):(D(o,l),D(y.value,l))):D(o,l)}async function F(){if(E.validateSchema)return E.validateSchema("force");const t=await Promise.all(e.value.map(t=>t.validate().then(e=>({key:Object(r["G"])(t.name),valid:e.valid,errors:e.errors})))),n={},i={};for(const e of t)n[e.key]={valid:e.valid,errors:e.errors},e.errors.length&&(i[e.key]=e.errors[0]);return{valid:t.every(t=>t.valid),results:n,errors:i}}async function G(t){const e=i.value[t];return e?Array.isArray(e)?e.map(t=>t.validate())[0]:e.validate():(Object(r["H"])(`field with name ${t} was not found`),Promise.resolve({errors:[],valid:!0}))}function $(t){return function(e){return e instanceof Event&&(e.preventDefault(),e.stopPropagation()),C(M(i.value).reduce((t,e)=>(t[e]=!0,t),{})),n.value=!0,s.value++,F().then(n=>{if(n.valid&&"function"===typeof t)return t(ht(o),{evt:e,setErrors:T,setFieldError:I,setTouched:C,setFieldTouched:j,setValues:A,setFieldValue:S,resetForm:N})}).then(()=>{n.value=!1},t=>{throw n.value=!1,t})}}function H(t,e){P(y.value,t,ht(e))}function z(t,e){P(o,t,e),H(t,e)}async function q(t){const e=Object(r["G"])(_);if(!e)return{valid:!0,results:{},errors:{}};const n=O(e)?await ut(e,o):await lt(e,o,{names:f.value,bailsMap:g.value}),i=E.fieldsById.value||{},s=M(E.errorBag.value),a=[...new Set([...M(n.results),...M(i),...s])];return a.reduce((e,r)=>{const s=i[r],o=(n.results[r]||{errors:[]}).errors,a={errors:o,valid:!o.length};if(e.results[r]=a,a.valid||(e.errors[r]=a.errors[0]),!s)return I(r,o),e;if(V(s,t=>t.meta.valid=a.valid),"silent"===t)return e;const c=Array.isArray(s)?s.some(t=>t.meta.validated):s.meta.validated;return"validated-only"!==t||c?(V(s,t=>t.setValidationState(a),!0),e):e},{valid:n.valid,results:{},errors:{}})}const K=$((t,{evt:e})=>{k(e)&&e.target.submit()});return Object(r["u"])(()=>{(null===t||void 0===t?void 0:t.initialErrors)&&T(t.initialErrors),(null===t||void 0===t?void 0:t.initialTouched)&&C(t.initialTouched),(null===t||void 0===t?void 0:t.validateOnMount)?F():E.validateSchema&&E.validateSchema("silent")}),Object(r["n"])(_)&&Object(r["I"])(_,()=>{var t;null===(t=E.validateSchema)||void 0===t||t.call(E,"validated-only")}),Object(r["x"])(d,E),Object(r["x"])(p,h),{errors:h,meta:w,values:o,isSubmitting:n,submitCount:s,validate:F,validateField:G,handleReset:()=>N(),resetForm:N,handleSubmit:$,submitForm:K,setFieldError:I,setErrors:T,setFieldValue:S,setValues:A,setFieldTouched:j,setTouched:C}}function At(t,e,n,i){const s={touched:"some",pending:"some",valid:"every"},o=Object(r["b"])(()=>!ft(e,Object(r["G"])(n))),a=Object(r["b"])(()=>M(s).reduce((e,n)=>{const r=s[n];return e[n]=t.value[r](t=>t.meta[n]),e},{}));return Object(r["b"])(()=>Object.assign(Object.assign({initialValues:Object(r["G"])(n)},a.value),{valid:a.value.valid&&!M(i.value).length,dirty:o.value}))}function jt(t,e,n){const i=Object(r["z"])(Object(r["G"])(n)||{}),s=Object(r["b"])(()=>i.value);function o(n,r=!1){if(i.value=ht(n),!r)return;const s=t=>t.meta.touched;M(t.value).forEach(n=>{const r=t.value[n],o=Array.isArray(r)?r.some(s):s(r);if(o)return;const a=R(i.value,n);P(e,n,a)})}return Object(r["n"])(n)&&Object(r["I"])(n,t=>{o(t,!0)},{deep:!0}),Object(r["x"])(g,s),{readonlyInitialValues:s,initialValues:i,setInitialValues:o}}function kt(t){const e=Object(r["z"])({});function n(t){return Array.isArray(t)?t:t?[t]:[]}function i(t,r){r?e.value[t]=n(r):delete e.value[t]}function s(t){e.value=M(t).reduce((e,r)=>{const i=t[r];return i&&(e[r]=n(i)),e},{})}return t&&s(t),{errorBag:e,setErrorBag:s,setFieldErrorBag:i}}const Ct=Object(r["j"])({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0}},setup(t,e){const n=Object(r["F"])(t,"initialValues"),i=Object(r["F"])(t,"validationSchema"),{errors:s,values:o,meta:a,isSubmitting:c,submitCount:u,validate:l,validateField:h,handleReset:f,resetForm:d,handleSubmit:p,submitForm:g,setErrors:m,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:O}=St({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),_=t.onSubmit?p(t.onSubmit):g;function E(t){C(t)&&t.preventDefault(),f(),"function"===typeof e.attrs.onReset&&e.attrs.onReset()}function I(t,e){const n="function"!==typeof t||e?e:t;return p(n)(t)}function T(){return{meta:a.value,errors:s.value,values:o,isSubmitting:c.value,submitCount:u.value,validate:l,validateField:h,handleSubmit:I,handleReset:f,submitForm:g,setErrors:m,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:O,resetForm:d}}return e.expose({setFieldError:v,setErrors:m,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:O,resetForm:d,validate:l,validateField:h}),function(){const n="form"===t.as?t.as:Object(r["C"])(t.as),i=G(n,e,T);if(!t.as)return i;const s="form"===t.as?{novalidate:!0}:{};return Object(r["l"])(n,Object.assign(Object.assign(Object.assign({},s),e.attrs),{onSubmit:_,onReset:E}),i)}}}),Nt=Object(r["j"])({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Object(r["m"])(p,void 0),i=Object(r["b"])(()=>null===n||void 0===n?void 0:n.value[t.name]);function s(){return{message:i.value}}return()=>{if(!i.value)return;const n=t.as?Object(r["C"])(t.as):t.as,o=G(n,e,s),a=Object.assign({role:"alert"},e.attrs);return n||!Array.isArray(o)&&o||!(null===o||void 0===o?void 0:o.length)?!Array.isArray(o)&&o||(null===o||void 0===o?void 0:o.length)?Object(r["l"])(n,a,o):Object(r["l"])(n||"span",a,i.value):o}}})},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=o.length;while(t--)delete w[d][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:s(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),s=n("e163"),o=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),f=n("3f8c"),d=n("ae93"),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=l("iterator"),v="keys",y="values",b="entries",w=function(){return this};t.exports=function(t,e,n,l,d,O,_){i(n,e,l);var E,I,T,S=function(t){if(t===d&&N)return N;if(!g&&t in k)return k[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",j=!1,k=t.prototype,C=k[m]||k["@@iterator"]||d&&k[d],N=!g&&C||S(d),x="Array"==e&&k.entries||C;if(x&&(E=s(x.call(new t)),p!==Object.prototype&&E.next&&(h||s(E)===p||(o?o(E,p):"function"!=typeof E[m]&&c(E,m,w)),a(E,A,!0,!0),h&&(f[A]=w))),d==y&&C&&C.name!==y&&(j=!0,N=function(){return C.call(this)}),h&&!_||k[m]===N||c(k,m,N),f[e]=N,d)if(I={values:S(y),keys:O?N:S(v),entries:S(b)},_)for(T in I)(g||j||!(T in k))&&u(k,T,I[T]);else r({target:e,proto:!0,forced:g||j},I);return I}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),s=r.WeakMap;t.exports="function"===typeof s&&/native code/.test(i(s))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,s=function(t,e){var n=a[o(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},o=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},m={};m[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(x([])));y&&y!==r&&i.call(y,o)&&(m=y);var b=I.prototype=_.prototype=Object.create(m);E.prototype=b.constructor=I,I.constructor=E,I[c]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},T(S.prototype),S.prototype[a]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var i=new S(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=x,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,s=Object.create(i.prototype),o=new N(r||[]);return s._invoke=A(t,n,o),s}function O(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function E(){}function I(){}function T(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(n,r,s,o){var a=O(t[n],t,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,s,o)}),(function(t){e("throw",t,s,o)})):Promise.resolve(u).then((function(t){c.value=t,s(c)}),o)}o(a.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function A(t,e,n){var r=h;return function(i,s){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return R()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=j(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=O(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=O(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var s=i.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return s.next=s}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},"9ab4":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return h}));
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
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},s.apply(this,arguments)};function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function a(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r["throw"](t))}catch(e){s(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function u(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function h(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),s=n("825a"),o=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(s(t),e=o(e),s(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:s(1,n)}),o(t,u,!1,!0),a[u]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return nt})),n.d(e,"j",(function(){return R})),n.d(e,"k",(function(){return Z})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return rt})),n.d(e,"n",(function(){return P})),n.d(e,"o",(function(){return F})),n.d(e,"p",(function(){return s})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return K})),n.d(e,"s",(function(){return L})),n.d(e,"t",(function(){return k})),n.d(e,"u",(function(){return B})),n.d(e,"v",(function(){return j})),n.d(e,"w",(function(){return q})),n.d(e,"x",(function(){return G})),n.d(e,"y",(function(){return W})),n.d(e,"z",(function(){return v})),n.d(e,"A",(function(){return D})),n.d(e,"B",(function(){return a})),n.d(e,"C",(function(){return U})),n.d(e,"D",(function(){return V})),n.d(e,"E",(function(){return b})),n.d(e,"F",(function(){return w})),n.d(e,"G",(function(){return r})),n.d(e,"H",(function(){return d})),n.d(e,"I",(function(){return u})),n.d(e,"J",(function(){return N})),n.d(e,"K",(function(){return O})),n.d(e,"L",(function(){return et})),n.d(e,"M",(function(){return st})),n.d(e,"N",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(U(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const O=t=>null==t?"":P(t)||B(t)&&(t.toString===$||!F(t.toString))?JSON.stringify(t,_,2):String(t),_=(t,e)=>e&&e.__v_isRef?_(t,e.value):L(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||P(e)||q(e)?e:String(e),E={},I=[],T=()=>{},S=()=>!1,A=/^on[^a-z]/,j=t=>A.test(t),k=t=>t.startsWith("onUpdate:"),C=Object.assign,N=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},x=Object.prototype.hasOwnProperty,R=(t,e)=>x.call(t,e),P=Array.isArray,L=t=>"[object Map]"===H(t),D=t=>"[object Set]"===H(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,U=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,G=t=>B(t)&&F(t.then)&&F(t.catch),$=Object.prototype.toString,H=t=>$.call(t),z=t=>H(t).slice(8,-1),q=t=>"[object Object]"===H(t),K=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},J=/-(\w)/g,Q=X(t=>t.replace(J,(t,e)=>e?e.toUpperCase():"")),Y=/\B([A-Z])/g,Z=X(t=>t.replace(Y,"-$1").toLowerCase()),tt=X(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=X(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e}}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),f=n("861d"),d=n("d9b5"),p=n("825a"),g=n("7b0b"),m=n("fc6a"),v=n("a04b"),y=n("577e"),b=n("5c6c"),w=n("7c73"),O=n("df75"),_=n("241c"),E=n("057f"),I=n("7418"),T=n("06cf"),S=n("9bf2"),A=n("d1e7"),j=n("9112"),k=n("6eeb"),C=n("5692"),N=n("f772"),x=n("d012"),R=n("90e3"),P=n("b622"),L=n("e538"),D=n("746f"),M=n("d44e"),F=n("69f3"),U=n("b727").forEach,V=N("hidden"),B="Symbol",G="prototype",$=P("toPrimitive"),H=F.set,z=F.getterFor(B),q=Object[G],K=i.Symbol,W=s("JSON","stringify"),X=T.f,J=S.f,Q=E.f,Y=A.f,Z=C("symbols"),tt=C("op-symbols"),et=C("string-to-symbol-registry"),nt=C("symbol-to-string-registry"),rt=C("wks"),it=i.QObject,st=!it||!it[G]||!it[G].findChild,ot=a&&u((function(){return 7!=w(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(q,e);r&&delete q[e],J(t,e,n),r&&t!==q&&J(q,e,r)}:J,at=function(t,e){var n=Z[t]=w(K[G]);return H(n,{type:B,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===q&&ct(tt,e,n),p(t);var r=v(e);return p(n),l(Z,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=w(n,{enumerable:b(0,!1)})):(l(t,V)||J(t,V,b(1,{})),t[V][r]=!0),ot(t,r,n)):J(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=O(n).concat(pt(n));return U(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?w(t):ut(w(t),e)},ht=function(t){var e=v(t),n=Y.call(this,e);return!(this===q&&l(Z,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,V)&&this[V][e])||n)},ft=function(t,e){var n=m(t),r=v(e);if(n!==q||!l(Z,r)||l(tt,r)){var i=X(n,r);return!i||!l(Z,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},dt=function(t){var e=Q(m(t)),n=[];return U(e,(function(t){l(Z,t)||l(x,t)||n.push(t)})),n},pt=function(t){var e=t===q,n=Q(e?tt:m(t)),r=[];return U(n,(function(t){!l(Z,t)||e&&!l(q,t)||r.push(Z[t])})),r};if(c||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=R(t),n=function(t){this===q&&n.call(tt,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,b(1,t))};return a&&st&&ot(q,e,{configurable:!0,set:n}),at(e,t)},k(K[G],"toString",(function(){return z(this).tag})),k(K,"withoutSetter",(function(t){return at(R(t),t)})),A.f=ht,S.f=ct,T.f=ft,_.f=E.f=dt,I.f=pt,L.f=function(t){return at(P(t),t)},a&&(J(K[G],"description",{configurable:!0,get:function(){return z(this).description}}),o||k(q,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),U(O(rt),(function(t){D(t)})),r({target:B,stat:!0,forced:!c},{for:function(t){var e=y(t);if(l(et,e))return et[e];var n=K(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(g(t))}}),W){var gt=!c||u((function(){var t=K();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=e,(f(e)||void 0!==t)&&!d(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!d(e))return e}),i[1]=e,W.apply(null,i)}})}K[G][$]||j(K[G],$,K[G].valueOf),M(K,B),x[V]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=c(this,a("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!i&&"function"==typeof s){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&l(s.prototype,"finally",f,{unsafe:!0})}},a8e9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return N})),n.d(e,"i",(function(){return D})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return S})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return m})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return k})),n.d(e,"t",(function(){return C}));var r=n("9ab4"),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){s=t[n++];var o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==s||null==a||null==u||null==h)throw Error();var f=s<<2|a>>4;if(r.push(f),64!==u){var d=a<<4&240|u>>2;if(r.push(d),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){var e=i(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var l=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
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
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[c(JSON.stringify(n)),c(JSON.stringify(a)),u].join(".")}
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function y(){var t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return f().indexOf("MSAppHost/")>=0}function w(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
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
var O="FirebaseError",_=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name=O,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,E.prototype.create),s}return Object(r["c"])(e,t),e}(Error),E=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?I(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new _(i,a,r);return c},t}();function I(t,e){return t.replace(T,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var T=/\{\$([^}]+)}/g;
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
 */function S(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(j(a)&&j(c)){if(!A(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function j(t){return null!==t&&"object"===typeof t}
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
 */function k(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r],o=s[0],a=s[1];n(o,a)}return e.length?"&"+e.join("&"):""}function C(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function N(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=l^c&(u^l),o=1518500249):(s=c^u^l,o=1859775393):r<60?(s=c&u|l&(c|u),o=2400959708):(s=c^u^l,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;while(r<e){if(0===s)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<e)if(i[s]=t[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();function x(t,e){var n=new R(t,e);return n.subscribe.bind(n)}var R=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=P(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function P(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function L(){}
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
function D(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))}).call(this,n("c8ba"))},abfd:function(t,e,n){"use strict";
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
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */var i;n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var s,o=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));var a={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},c=s.INFO,u=(i={},i[s.DEBUG]="log",i[s.VERBOSE]="log",i[s.INFO]="info",i[s.WARN]="warn",i[s.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var s=(new Date).toISOString(),o=u[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,r(["["+s+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,o.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in s))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.DEBUG],t)),this._logHandler.apply(this,r([this,s.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.VERBOSE],t)),this._logHandler.apply(this,r([this,s.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.INFO],t)),this._logHandler.apply(this,r([this,s.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.WARN],t)),this._logHandler.apply(this,r([this,s.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.ERROR],t)),this._logHandler.apply(this,r([this,s.ERROR],t))},t}();function f(t){o.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=o;r<i.length;r++){var c=i[r];n(c)}}},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),h=n("c430"),f=l("iterator"),d=!1,p=function(){return this};[].keys&&(s=[].keys(),"next"in s?(i=a(a(s)),i!==Object.prototype&&(r=i)):d=!0);var g=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));g&&(r={}),h&&!g||u(r,f)||c(r,f,p),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,s=Function.prototype,o=s.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in s)&&i(s,c,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),g=n("d4c3"),m=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,O=h.Promise,_=f(h,"queueMicrotask"),E=_&&_.value;E||(r=function(){var t,e;v&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},p||v||m||!y||!b?!g&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=u.then,o=function(){l.call(u,r)}):o=v?function(){w.nextTick(r)}:function(){d.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=E||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("5135"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)&&(a||"string"==typeof u[t])||(a&&s(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),o=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=s(p),O=i(w),_=r(g,m,3),E=o(O.length),I=0,T=v||a,S=e?T(p,E):n||f?T(p,0):void 0;E>I;I++)if((d||I in O)&&(y=O[I],b=_(y,I,w),t))if(e)S[I]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:c.call(S,y)}else switch(t){case 4:return!1;case 7:c.call(S,y)}return h?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r="devtools-plugin:setup"},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),s=n("485a"),o=n("b622"),a=o("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,o=t[a];if(void 0!==o){if(void 0===e&&(e="default"),n=o.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cr})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Nr})),n.d(e,"d",(function(){return Pr})),n.d(e,"e",(function(){return Rr})),n.d(e,"f",(function(){return Lr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return jr})),n.d(e,"i",(function(){return kr}));
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
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var o,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function l(){}function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function d(t){return Object.prototype.hasOwnProperty.call(t,p)&&t[p]||(t[p]=++g)}var p="closure_uid_"+(1e9*Math.random()>>>0),g=0;function m(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function y(t,e,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:v,y.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function O(){this.s=this.s,this.o=this.o}var _=0,E={};O.prototype.s=!1,O.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=d(this);delete E[t]}},O.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function S(t){t:{for(var e=Hn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function j(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var C,N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var P=u.navigator;if(P){var L=P.userAgent;if(L){C=L;break t}}C=""}function D(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function M(t){var e={};for(var n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var s=0;s<F.length;s++)n=F[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}function B(t){var e=tt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=l;var G,$=x(C,"Opera"),H=x(C,"Trident")||x(C,"MSIE"),z=x(C,"Edge"),q=z||H,K=x(C,"Gecko")&&!(x(C.toLowerCase(),"webkit")&&!x(C,"Edge"))&&!(x(C,"Trident")||x(C,"MSIE"))&&!x(C,"Edge"),W=x(C.toLowerCase(),"webkit")&&!x(C,"Edge");function X(){var t=u.document;return t?t.documentMode:void 0}t:{var J="",Q=function(){var t=C;return K?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):W?/WebKit\/(\S+)/.exec(t):$?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(J=Q?Q[1]:""),H){var Y=X();if(null!=Y&&Y>parseFloat(J)){G=String(Y);break t}}G=J}var Z,tt={};function et(){return B((function(){for(var t=0,e=N(String(G)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=R(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||R(0==s[2].length,0==o[2].length)||R(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(u.document&&H){var nt=X();Z=nt||(parseInt(G,10)||void 0)}else Z=void 0;var rt=Z,it=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",l,e),u.removeEventListener("test",l,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ot(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{V(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:at[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ot.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},w(ot,st);var at={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),ut=0;function lt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ut,this.ca=this.fa=!1}function ht(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function dt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ht(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ft.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=pt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new lt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var gt="closure_lm_"+(1e6*Math.random()|0),mt={};function vt(t,e,n,r,i){if(r&&r.once)return wt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=At(n),t&&t[ct]?t.N(e,n,f(r)?!!r.capture:!!r,i):yt(t,e,n,!1,r,i)}function yt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[gt]=a=new ft(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)it||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=It;return t}function wt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=At(n),t&&t[ct]?t.O(e,n,f(r)?!!r.capture:!!r,i):yt(t,e,n,!0,r,i)}function Ot(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ot(t,e[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=At(n),t&&t[ct]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=pt(s,n,r,i),-1<n&&(ht(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pt(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ct])dt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(dt(n,t),0==n.h&&(n.src=null,e[gt]=null)):ht(t)}}}function Et(t){return t in mt?mt[t]:mt[t]="on"+t}function It(t,e){if(t.ca)t=!0;else{e=new ot(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_t(t),t=n.call(r,e)}return t}function Tt(t){return t=t[gt],t instanceof ft?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function jt(){O.call(this),this.i=new ft(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(r,t),U(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ct(o,r,!0,e)&&i}if(o=e.g=t,i=Ct(o,r,!0,e)&&i,i=Ct(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ct(o,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&dt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(jt,O),jt.prototype[ct]=!0,jt.prototype.removeEventListener=function(t,e,n,r){Ot(this,t,e,n,r)},jt.prototype.M=function(){if(jt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ht(n[r]);delete e.g[t],e.h--}}this.I=null},jt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},jt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Nt=u.JSON.stringify;function xt(){var t=Bt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Rt,Pt=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Lt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Lt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new Dt}),(function(t){return t.reset()})),Dt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Mt(t){u.setTimeout((function(){throw t}),0)}function Ft(t,e){Rt||Ut(),Vt||(Rt(),Vt=!0),Bt.add(t,e)}function Ut(){var t=u.Promise.resolve(void 0);Rt=function(){t.then(Gt)}}var Vt=!1,Bt=new Pt;function Gt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Lt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function $t(t,e){jt.call(this),this.h=t||1,this.g=e||u,this.j=y(this.kb,this),this.l=Date.now()}function Ht(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=y(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=y(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function qt(t){t.g=zt((function(){t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}w($t,jt),o=$t.prototype,o.da=!1,o.S=null,o.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&(Ht(this),this.start()))}},o.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){$t.Z.M.call(this),Ht(this),delete this.g};var Kt=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return i(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:qt(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(O);function Wt(t){O.call(this),this.h=t,this.g={}}w(Wt,O);var Xt=[];function Jt(t,e,n,r){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var i=0;i<n.length;i++){var s=vt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Yt(){this.g=!0}function Zt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function te(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function ee(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(r?" "+r:"")}))}function ne(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Nt(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.Z.M.call(this),Qt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ie={},se=null;function oe(){return se=se||new jt}function ae(t){st.call(this,ie.Ma,t)}function ce(t){var e=oe();kt(e,new ae(e,t))}function ue(t,e){st.call(this,ie.STAT_EVENT,t),this.stat=e}function le(t){var e=oe();kt(e,new ue(e,t))}function he(t,e){st.call(this,ie.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}ie.Ma="serverreachability",w(ae,st),ie.STAT_EVENT="statevent",w(ue,st),ie.Na="timingevent",w(he,st);var de={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ge(){}function me(t){return t.h||(t.h=t.i())}function ve(){}ge.prototype.h=null;var ye,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function we(){st.call(this,"d")}function Oe(){st.call(this,"c")}function _e(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wt(this),this.P=Te,t=q?125:void 0,this.W=new $t(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ie}function Ie(){this.i=null,this.g="",this.h=!1}w(we,st),w(Oe,st),w(_e,ge),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ye=new _e;var Te=45e3,Se={},Ae={};function je(t,e,n){t.K=1,t.v=Ze(Ke(e)),t.s=n,t.U=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),Re(t),t.A=Ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),gn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ie,t.g=Or(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kt(y(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ce(1),Zt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ne(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Ae){4==e&&(t.o=4,le(14),i=!1),ee(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,le(15),ee(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ee(t.j,t.m,r,null),Fe(t,r)}Ce(t)&&r!=Ae&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,le(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dr(e),e.L=!0,le(11))):(ee(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),De(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ae:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Ae:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(y(t.eb,t),e)}function Le(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||mr(t.l,t)}function Me(t){Le(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ht(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;gr(n),rr(n)}fr(n),le(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(y(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else yr(n,11)}else if((t.J||n.g==t)&&gr(n),!k(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(x(l,"spdy")||x(l,"quic")||x(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(In(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Ye(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var d=t;if(r.oa=wr(r,r.H?r.la:null,r.W),d.J){Tn(r.i,d);var p=d,g=r.K;g&&p.setTimeout(g),p.B&&(Le(p),Re(p)),r.g=d}else hr(r);0<n.l.length&&or(n)}else"stop"!=s[0]&&"close"!=s[0]||yr(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?yr(n,7):nr(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}ce(4)}catch(s){}}function Ue(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(h(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ue(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Be(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Be)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ge(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];$e(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],$e(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}o=Ee.prototype,o.setTimeout=function(t){this.P=t},o.gb=function(t){t=t.target;var e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},o.Ia=function(t){try{if(t==this.g)t:{var e=Jn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||q||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=e||7==n||ce(8==n||0>=r?3:2),Le(this);var i=this.g.ba();this.N=i;e:if(Ce(this)){var s=Qn(this.g);t="";var o=s.length,a=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),De(this);var c="";break e}this.h.i=new u.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,te(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(l)){var f=l;break e}}f=null}if(!(i=f)){this.i=!1,this.o=3,le(12),Me(this),De(this);break t}ee(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,i)}this.U?(Ne(this,e,c),q&&this.i&&3==e&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(ee(this.j,this.m,c,null),Fe(this,c)),4==e&&Me(this),this.i&&!this.I&&(4==e?mr(this.l,this):(this.i=!1,Re(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,le(12)):(this.o=0,le(13)),Me(this),De(this)}}}catch(e){}},o.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Le(this),Ne(this,t,e),this.i&&4!=t&&Re(this))}},o.cancel=function(){this.I=!0,Me(this)},o.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(ne(this.j,this.A),2!=this.K&&(ce(3),le(17)),Me(this),this.o=2,De(this)):Pe(this,this.Y-t)},o=Be.prototype,o.R=function(){Ge(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},o.T=function(){return Ge(this),this.g.concat()},o.get=function(t,e){return $e(this.h,t)?this.h[t]:e},o.set=function(t,e){$e(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},o.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var He=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qe){this.g=void 0!==e?e:t.g,We(this,t.j),this.s=t.s,Xe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new hn;n.i=e.i,e.g&&(n.g=new Be(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(He))?(this.g=!!e,We(this,n[1]||"",!0),this.s=nn(n[2]||""),Xe(this,n[3]||"",!0),Je(this,n[4]),this.l=nn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!e,this.h=new hn(null,this.g))}function Ke(t){return new qe(t)}function We(t,e,n){t.j=n?nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?nn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof hn?(t.h=e,vn(t.h,t.g)):(n||(e=rn(e,un)),t.h=new hn(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Ze(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tn(t){return t instanceof qe?Ke(t):new qe(t,void 0)}function en(t,e,n,r){var i=new qe(null,void 0);return t&&We(i,t),e&&Xe(i,e),n&&Je(i,n),r&&(i.l=r),i}function nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,on,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(rn(e,on,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(rn(n,"/"==n.charAt(0)?cn:an,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,ln)),t.join("")};var on=/[#\/\?@]/g,an=/[#\?:]/g,cn=/[#\?]/g,un=/[#\?@]/g,ln=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new Be,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function dn(t,e){fn(t),e=mn(t,e),$e(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$e(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ge(t)))}function pn(t,e){return fn(t),e=mn(t,e),$e(t.g.h,e)}function gn(t,e,n){dn(t,e),0<n.length&&(t.i=null,t.g.set(mn(t,e),j(n)),t.h+=n.length)}function mn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(dn(this,e),gn(this,n,t))}),t)),t.j=e}o=hn.prototype,o.add=function(t,e){fn(this),this.i=null,t=mn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},o.forEach=function(t,e){fn(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},o.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},o.R=function(t){fn(this);var e=[];if("string"===typeof t)pn(this,t)&&(e=A(e,this.g.get(mn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},o.set=function(t,e){return fn(this),this.i=null,t=mn(this,t),pn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},o.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var yn=function(){function t(t,e){this.h=t,this.g=e}return t}();function bn(t){this.l=t||wn,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wn=10;function On(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function In(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=s(t.g.values()),o=i.next();!o.done;o=i.next()){var a=o.value;r=r.concat(a.D)}}catch(c){e={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return j(t.i)}function An(){}function jn(){this.g=new An}function kn(t,e,n){var r=n||"";try{Ve(t,(function(t,n){var i=t;f(t)&&(i=Nt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(t,e){var n=new Yt;if(u.Image){var r=new Image;r.onload=b(Nn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(Nn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(Nn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(Nn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Nn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){jt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){var t,e;if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=s(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(o){t={error:o}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},An.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return u.JSON.parse(t,void 0)},w(xn,ge),xn.prototype.g=function(){return new Rn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),w(Rn,jt);var Pn=0;function Ln(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}o=Rn.prototype,o.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},o.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Pn},o.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},o.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Mn(this),3==this.readyState&&Ln(this)}},o.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},o.Ta=function(t){this.g&&(this.response=t,Dn(this))},o.ha=function(){this.g&&Dn(this)},o.setRequestHeader=function(t,e){this.v.append(t,e)},o.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=u.JSON.parse;function Un(t){jt.call(this),this.headers=new Be,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}w(Un,jt);var Vn="",Bn=/^https?$/i,Gn=["POST","PUT"];function $n(t){return H&&et()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Hn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qn(t),Wn(t)}function qn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function Kn(t){if(t.h&&"undefined"!=typeof c&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))zt(t.Fa,0,t);else if(kt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(He)[1]||null;if(!s&&u.self&&u.self.location){var o=u.self.location.protocol;s=o.substr(0,o.length-1)}i=!Bn.test(s?s.toLowerCase():"")}e=i}if(e)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var a=2<Jn(t)?t.g.statusText:""}catch(l){a=""}t.j=a+" ["+t.ba()+"]",qn(t)}}finally{Wn(t)}}}function Wn(t,e){if(t.g){Xn(t);var n=t.g,r=t.C[0]?l:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){var e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new jn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(ir(t),3==t.G){var e=t.V++,n=Ke(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ur(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ze(Ke(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Or(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}br(t)}function rr(t){t.g&&(dr(t),t.g.cancel(),t.g=null)}function ir(t){rr(t),t.u&&(u.clearTimeout(t.u),t.u=null),gr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function sr(t,e){t.l.push(new yn(t.Za++,e)),3==t.G&&or(t)}function or(t){On(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function ar(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(y(t.Ha,t,e),vr(t,t.C)),t.C++,!0))}function cr(t,e){var n;n=e?e.m:t.V++;var r=Ke(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ur(t,r),t.o&&t.s&&Zn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=lr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),In(t.i,n),je(n,r,e)}function ur(t,e){t.j&&Ve({},(function(t,n){Ye(e,n,t)}))}function lr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?y(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{kn(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function hr(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function fr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(y(t.Ga,t),vr(t,t.A)),t.A++,!0)}function dr(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function pr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ke(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ur(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ze(Ke(e)),n.s=null,n.U=!0,ke(n,t)}function gr(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function mr(t,e){var n=null;if(t.g==e){gr(t),dr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=oe(),kt(r,new he(r,n,e,i)),or(t)}else hr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ar(t,e)||2==r&&fr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}function vr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=y(t.jb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||We(n,"https"),Ze(n)),Cn(n.toString(),r)}else le(2);t.G=0,t.j&&t.j.va(e),br(t),ir(t)}function br(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,j(t.l),t.l.length=0),t.j.ua())}function wr(t,e,n){var r=tn(n);if(""!=r.i)e&&Xe(r,e+"."+r.i),Je(r,r.m);else{var i=u.location;r=en(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&D(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ur(t,r),r}function Or(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Un(new xn({ib:!0})):new Un(t.qa),e.L=t.H,e}function _r(){}function Er(){if(H&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function Ir(t,e){jt.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ar(this)}function Tr(t){we.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Sr(){Oe.call(this),this.status=1}function Ar(t){this.g=t}o=Un.prototype,o.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ye.g(),this.C=this.u?me(this.u):me(ye),this.g.onreadystatechange=y(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void zn(this,s)}t=n||"";var i=new Be(this.headers);r&&Ve(r,(function(t,e){i.set(e,t)})),r=S(i.T()),n=u.FormData&&t instanceof u.FormData,!(0<=I(Gn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zn(this,s)}},o.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},o.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Wn(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Un.Z.M.call(this)},o.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},o.cb=function(){Kn(this)},o.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},o.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},o.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},o.Da=function(){return this.m},o.La=function(){return"string"===typeof this.j?this.j:String(this.j)},o=er.prototype,o.ma=8,o.G=1,o.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},o.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ee(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=M(n),U(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(r+=s,4096<r){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=lr(this,e,r),i=Ke(this.F),Ye(i,"RID",t),Ye(i,"CVER",22),this.D&&Ye(i,"X-HTTP-Session-Id",this.D),ur(this,i),this.o&&n&&Zn(i,this.o,n),In(this.i,e),this.Ra&&Ye(i,"TYPE","init"),this.ja?(Ye(i,"$req",r),Ye(i,"SID","null"),e.$=!0,je(e,i,null)):je(e,i,r),this.G=2}}else 3==this.G&&(t?cr(this,t):0==this.l.length||On(this.i)||cr(this))},o.Ga=function(){if(this.u=null,pr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(y(this.bb,this),t)}},o.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,le(10),rr(this),pr(this))},o.ab=function(){null!=this.v&&(this.v=null,rr(this),fr(this),le(19))},o.jb=function(t){t?(this.h.info("Successfully pinged google.com"),le(2)):(this.h.info("Failed to ping google.com"),le(1))},o=_r.prototype,o.xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Oa=function(){},Er.prototype.g=function(t,e){return new Ir(t,e)},w(Ir,jt),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(y(t.hb,t,e))),le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wr(t,null,t.W),or(t)},Ir.prototype.close=function(){nr(this.g)},Ir.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,sr(this.g,e)}else this.v?(e={},e.__data__=Nt(t),sr(this.g,e)):sr(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,Ir.Z.M.call(this)},w(Tr,we),w(Sr,Oe),w(Ar,_r),Ar.prototype.xa=function(){kt(this.g,"a")},Ar.prototype.wa=function(t){kt(this.g,new Tr(t))},Ar.prototype.va=function(t){kt(this.g,new Sr(t))},Ar.prototype.ua=function(){kt(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,de.NO_ERROR=0,de.TIMEOUT=8,de.HTTP_ERROR=6,pe.COMPLETE="complete",ve.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",jt.prototype.listen=jt.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var jr=function(){return new Er},kr=function(){return oe()},Cr=de,Nr=pe,xr=ie,Rr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=xn,Lr=ve,Dr=Un}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),s=n("4d64").indexOf,o=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(o,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~s(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(s){}return function(n,s){return r(n),i(s),e?t.call(n,s):n.__proto__=s,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(t,e,n){var r=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("e260"),o=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=s.values;for(var h in i){var f=r[h],d=f&&f.prototype;if(d){if(d[c]!==l)try{o(d,c,l)}catch(g){d[c]=l}if(d[u]||o(d,u,h),i[h])for(var p in s)if(d[p]!==s[p])try{o(d,p,s[p])}catch(g){d[p]=s[p]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),s=n("f772"),o=n("e177"),a=s("IE_PROTO"),c=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),g=n("d44e"),m=n("2626"),v=n("861d"),y=n("1c0b"),b=n("19aa"),w=n("8925"),O=n("2266"),_=n("1c7e"),E=n("4840"),I=n("2cf4").set,T=n("b575"),S=n("cdf9"),A=n("44de"),j=n("f069"),k=n("e667"),C=n("69f3"),N=n("94ca"),x=n("b622"),R=n("6069"),P=n("605d"),L=n("2d00"),D=x("species"),M="Promise",F=C.get,U=C.set,V=C.getterFor(M),B=h&&h.prototype,G=h,$=B,H=u.TypeError,z=u.document,q=u.process,K=j.f,W=K,X=!!(z&&z.createEvent&&u.dispatchEvent),J="function"==typeof PromiseRejectionEvent,Q="unhandledrejection",Y="rejectionhandled",Z=0,tt=1,et=2,nt=1,rt=2,it=!1,st=N(M,(function(){var t=w(G),e=t!==String(G);if(!e&&66===L)return!0;if(c&&!$["finally"])return!0;if(L>=51&&/native code/.test(t))return!1;var n=new G((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[D]=r,it=n.then((function(){}))instanceof r,!it||!e&&R&&!J})),ot=st||!_((function(t){G.all(t)["catch"]((function(){}))})),at=function(t){var e;return!(!v(t)||"function"!=typeof(e=t.then))&&e},ct=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;T((function(){var r=t.value,i=t.state==tt,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===rt&&ft(t),t.rejection=nt),!0===l?o=r:(d&&d.enter(),o=l(r),d&&(d.exit(),c=!0)),o===u.promise?f(H("Promise-chain cycle")):(a=at(o))?a.call(o,h,f):h(o)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&lt(t)}))}},ut=function(t,e,n){var r,i;X?(r=z.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!J&&(i=u["on"+t])?i(r):t===Q&&A("Unhandled promise rejection",n)},lt=function(t){I.call(u,(function(){var e,n=t.facade,r=t.value,i=ht(t);if(i&&(e=k((function(){P?q.emit("unhandledRejection",r,n):ut(Q,n,r)})),t.rejection=P||ht(t)?rt:nt,e.error))throw e.value}))},ht=function(t){return t.rejection!==nt&&!t.parent},ft=function(t){I.call(u,(function(){var e=t.facade;P?q.emit("rejectionHandled",e):ut(Y,e,t.value)}))},dt=function(t,e,n){return function(r){t(e,r,n)}},pt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,ct(t,!0))},gt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw H("Promise can't be resolved itself");var r=at(e);r?T((function(){var n={done:!1};try{r.call(e,dt(gt,n,t),dt(pt,n,t))}catch(i){pt(n,i,t)}})):(t.value=e,t.state=tt,ct(t,!1))}catch(i){pt({done:!1},i,t)}}};if(st&&(G=function(t){b(this,G,M),y(t),r.call(this);var e=F(this);try{t(dt(gt,e),dt(pt,e))}catch(n){pt(e,n)}},$=G.prototype,r=function(t){U(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=d($,{then:function(t,e){var n=V(this),r=K(E(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=P?q.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&ct(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=F(t);this.promise=t,this.resolve=dt(gt,e),this.reject=dt(pt,e)},j.f=K=function(t){return t===G||t===s?new i(t):W(t)},!c&&"function"==typeof h&&B!==Object.prototype)){o=B.then,it||(f(B,"then",(function(t,e){var n=this;return new G((function(t,e){o.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f(B,"catch",$["catch"],{unsafe:!0}));try{delete B.constructor}catch(mt){}p&&p(B,$)}a({global:!0,wrap:!0,forced:st},{Promise:G}),g(G,M,!1,!0),m(M),s=l(M),a({target:M,stat:!0,forced:st},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),a({target:M,stat:!0,forced:c||st},{resolve:function(t){return S(c&&this===s?G:this,t)}}),a({target:M,stat:!0,forced:ot},{all:function(t){var e=this,n=K(e),r=n.resolve,i=n.reject,s=k((function(){var n=y(e.resolve),s=[],o=0,a=1;O(t,(function(t){var c=o++,u=!1;s.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,i=k((function(){var i=y(e.resolve);O(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ie})),n.d(e,"b",(function(){return Qn}));var r=n("a8e9"),i=n("5606"),s=n("9ab4"),o=n("abfd"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new r["b"]("auth","Firebase",c()),l=new o["b"]("@firebase/auth");function h(t,...e){l.logLevel<=o["a"].ERROR&&l.error(`Auth (${i["a"]}): ${t}`,...e)}
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
 */function f(t,...e){throw p(t,...e)}function d(t,...e){return p(t,...e)}function p(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw p(e,...n)}function m(t){const e="INTERNAL ASSERTION FAILED: "+t;throw h(e),new Error(e)}function v(t,e){t||m(e)}
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
 */const y=new Map;function b(t){v(t instanceof Function,"Expected a class definition");let e=y.get(t);return e?(v(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y.set(t,e),e)}
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
 */function w(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function O(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,v(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function j(t,e){v(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const C={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},N=new A(3e4,6e4);
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
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,i,s={}){return P(t,s,()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["s"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(k.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),k.fetch()(D(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function P(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,n=e.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");f(t,o)}}catch(s){if(s instanceof r["c"])throw s;f(t,"network-request-failed")}}async function L(t,e,n,r,i={}){const s=await R(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{serverResponse:s}),s}function D(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?j(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(d(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=d(t,e,r);return i.customData._tokenResponse=n,i}
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
 */async function U(t,e){return R(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return R(t,"POST","/v1/accounts:lookup",e)}
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
 */function B(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function G(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),s=H(i);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:B($(s.auth_time)),issuedAtTime:B($(s.iat)),expirationTime:B($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function H(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(s){return h("Caught error parsing JWT payload as JSON",s),null}}function z(t){const e=H(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function q(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class W{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await q(t,V(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Z(s.providerUserInfo):[],a=Y(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Q(t){const e=Object(r["i"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Z(t){return t.map(t=>{var{providerId:e}=t,n=Object(s["f"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function tt(t,e){const n=await P(t,{},()=>{const n=Object(r["s"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D(t,i,"/v1/token","key="+s);return k.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new et;return n&&(g("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return m("not implemented")}}
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
 */function nt(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(s["f"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await q(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return G(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await q(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:O,providerData:_,stsTokenManager:E}=e;g(b&&E,t,"internal-error");const I=et.fromJSON(this.name,E);g("string"===typeof b,t,"internal-error"),nt(l,t.name),nt(h,t.name),g("boolean"===typeof w,t,"internal-error"),g("boolean"===typeof O,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(m,t.name),nt(v,t.name),nt(y,t.name);const T=new rt({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:O,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map(t=>Object.assign({},t))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
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
 */class it{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}it.type="NONE";const st=it;
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
 */function ot(t,e,n){return`firebase:${t}:${e}:${n}`}class at{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ot(this.userKey,r.apiKey,i),this.fullPersistenceKey=ot("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new at(b(st),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||b(st);const s=ot(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=rt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new at(i,t,n)):new at(i,t,n)}}
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
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(gt(e))return"Webos";if(lt(e))return"Safari";if((e.includes("chrome/")||ht(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=Object(r["j"])()){return/firefox\//i.test(t)}function lt(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ht(t=Object(r["j"])()){return/crios\//i.test(t)}function ft(t=Object(r["j"])()){return/iemobile/i.test(t)}function dt(t=Object(r["j"])()){return/android/i.test(t)}function pt(t=Object(r["j"])()){return/blackberry/i.test(t)}function gt(t=Object(r["j"])()){return/webos/i.test(t)}function mt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function vt(t=Object(r["j"])()){var e;return mt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yt(){return Object(r["n"])()&&10===document.documentMode}function bt(t=Object(r["j"])()){return mt(t)||dt(t)||gt(t)||pt(t)||/windows phone/i.test(t)||ft(t)}function wt(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function Ot(t,e=[]){let n;switch(t){case"Browser":n=ct(Object(r["j"])());break;case"Worker":n=`${ct(Object(r["j"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
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
 */class _t{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=b(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await at.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&b(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[b(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ot(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Et(t){return Object(r["i"])(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Tt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return m("not implemented")}_getIdTokenResponse(t){return m("not implemented")}_linkToIdToken(t,e){return m("not implemented")}_getReauthenticationResolver(t){return m("not implemented")}}
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
 */async function St(t,e){return R(t,"POST","/v1/accounts:update",e)}
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
async function At(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
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
async function jt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function kt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
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
 */class Ct extends Tt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ct(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ct(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return St(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Nt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
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
 */const xt="http://localhost";class Rt extends Tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(s["f"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Rt(n,r);return Object.assign(o,i),o}_getIdTokenResponse(t){const e=this.buildRequest();return Nt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Nt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Nt(t,e)}buildRequest(){const t={requestUri:xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["s"])(e)}return t}}
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
 */async function Pt(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function Lt(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function Dt(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Mt={["USER_NOT_FOUND"]:"user-not-found"};async function Ft(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),Mt)}
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
 */class Ut extends Tt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Lt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Dt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ft(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ut({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function Vt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bt(t){const e=Object(r["t"])(Object(r["h"])(t))["link"],n=e?Object(r["t"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["t"])(Object(r["h"])(t))["deep_link_id"],s=i?Object(r["t"])(Object(r["h"])(i))["link"]:null;return s||i||n||e||t}class Gt{constructor(t){var e,n,i,s,o,a;const c=Object(r["t"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Vt(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Bt(t);try{return new Gt(e)}catch(n){return null}}}
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
class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(t,e){return Ct._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Gt.parseLink(e);return g(n,"argument-error"),Ct._fromEmailAndCode(t,n.code,n.tenantId)}}$t.PROVIDER_ID="password",$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ht{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class zt extends Ht{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class qt extends zt{constructor(){super("facebook.com")}static credential(t){return Rt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch(e){return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com",qt.PROVIDER_ID="facebook.com";
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
class Kt extends zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Rt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Kt.credential(e,n)}catch(r){return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com",Kt.PROVIDER_ID="google.com";
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
class Wt extends zt{constructor(){super("github.com")}static credential(t){return Rt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com",Wt.PROVIDER_ID="github.com";
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
class Xt extends zt{constructor(){super("twitter.com")}static credential(t,e){return Rt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}
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
async function Jt(t,e){return L(t,"POST","/v1/accounts:signUp",x(t,e))}
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
 */Xt.TWITTER_SIGN_IN_METHOD="twitter.com",Xt.PROVIDER_ID="twitter.com";class Qt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),s=Yt(n),o=new Qt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Yt(n);return new Qt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Yt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Zt extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Zt.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Zt(t,e,n,r)}}function te(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Zt._fromErrorAndOperation(t,n,e,r);throw n})}
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
 */async function ee(t,e,n=!1){const r=await q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}
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
async function ne(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await q(t,te(r,i,e,t),n);g(s.idToken,r,"internal-error");const o=H(s.idToken);g(o,r,"internal-error");const{sub:a}=o;return g(t.uid===a,r,"user-mismatch"),Qt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
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
 */async function re(t,e,n=!1){const r="signIn",i=await te(t,r,e),s=await Qt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ie(t,e,n){const r=Et(t),i=await Jt(r,{returnSecureToken:!0,email:e,password:n}),s=await Qt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
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
function se(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}new WeakMap;const oe="__sak";
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
 */class ae{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(oe,"1"),this.storage.removeItem(oe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
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
 */function ce(){const t=Object(r["j"])();return lt(t)||mt(t)}const ue=1e3,le=10;class he extends ae{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ce()&&wt(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);yt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,le):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}he.type="LOCAL";const fe=he;
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
 */class de extends ae{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}de.type="SESSION";const pe=de;
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
 */function ge(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
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
 */class me{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new me(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await ge(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function ve(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */me.receivers=[];class ye{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=ve("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
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
 */function be(){return window}function we(t){be().location.href=t}
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
 */function Oe(){return"undefined"!==typeof be()["WorkerGlobalScope"]&&"function"===typeof be()["importScripts"]}async function _e(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ee(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ie(){return Oe()?self:null}
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
 */const Te="firebaseLocalStorageDb",Se=1,Ae="firebaseLocalStorage",je="fbase_key";class ke{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ce(t,e){return t.transaction([Ae],e?"readwrite":"readonly").objectStore(Ae)}function Ne(){const t=indexedDB.deleteDatabase(Te);return new ke(t).toPromise()}function xe(){const t=indexedDB.open(Te,Se);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ae,{keyPath:je})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ae)?e(n):(n.close(),await Ne(),e(await xe()))})})}async function Re(t,e,n){const r=Ce(t,!0).put({[je]:e,value:n});return new ke(r).toPromise()}async function Pe(t,e){const n=Ce(t,!1).get(e),r=await new ke(n).toPromise();return void 0===r?null:r.value}function Le(t,e){const n=Ce(t,!0).delete(e);return new ke(n).toPromise()}const De=800,Me=3;class Fe{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await xe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Me)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=me._getInstance(Ie()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await _e(),!this.activeServiceWorker)return;this.sender=new ye(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ee()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xe();return await Re(t,oe,"1"),await Le(t,oe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Re(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Pe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Le(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Ce(t,!1).getAll();return new ke(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),De)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fe.type="LOCAL";const Ue=Fe;
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
 */function Ve(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}
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
function Be(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ge(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=d("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Be().appendChild(r)})}function $e(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
$e("rcb"),new A(3e4,6e4);
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
const He="recaptcha";async function ze(t,e,n){var r;const i=await n.verify();try{let s;if(g("string"===typeof i,t,"argument-error"),g(n.type===He,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){g("enroll"===e.type,t,"internal-error");const n=await se(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await Ve(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Pt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class qe{constructor(t){this.providerId=qe.PROVIDER_ID,this.auth=Et(t)}verifyPhoneNumber(t,e){return ze(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return qe.credentialFromTaggedObject(e)}static credentialFromError(t){return qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ut._fromTokenResponse(e,n):null}}
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
function Ke(t,e){return e?b(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */qe.PROVIDER_ID="phone",qe.PHONE_SIGN_IN_METHOD="phone";class We extends Tt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Nt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Nt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Xe(t){return re(t.auth,new We(t),t.bypassAuthState)}function Je(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ne(n,new We(t),t.bypassAuthState)}async function Qe(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ee(n,new We(t),t.bypassAuthState)}
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
 */class Ye{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xe;case"linkViaPopup":case"linkViaRedirect":return Qe;case"reauthViaPopup":case"reauthViaRedirect":return Je;default:f(this.auth,"internal-error")}}resolve(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ze=new A(2e3,1e4);class tn extends Ye{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const t=ve();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(d(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Ze.get())};t()}}tn.currentPopupAction=null;
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
const en="pendingRedirect",nn=new Map;class rn extends Ye{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=nn.get(this.auth._key());if(!t){try{const e=await sn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}nn.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function sn(t,e){const n=an(e),r="true"===await on(t)._get(n);return await on(t)._remove(n),r}function on(t){return b(t._redirectPersistence)}function an(t){return ot(en,t.config.apiKey,t.name)}
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
 */async function cn(t,e,n=!1){const r=Et(t),i=Ke(r,e),s=new rn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
const un=6e5;class ln{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!dn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!fn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(d(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=un&&this.cachedEventUids.clear(),this.cachedEventUids.has(hn(t))}saveEventToCache(t){this.cachedEventUids.add(hn(t)),this.lastProcessedEventTime=Date.now()}}function hn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function fn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function dn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fn(t);default:return!1}}
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
 */async function pn(t,e={}){return R(t,"GET","/v1/projects",e)}
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
 */const gn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mn=/^https?/;async function vn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pn(t);for(const r of e)try{if(yn(r))return}catch(n){}f(t,"unauthorized-domain")}function yn(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mn.test(n))return!1;if(gn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const bn=new A(3e4,6e4);function wn(){const t=be().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function On(t){return new Promise((e,n)=>{var r,i,s;function o(){wn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wn(),n(d(t,"network-request-failed"))},timeout:bn.get()})}if(null===(i=null===(r=be().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=be().gapi)||void 0===s?void 0:s.load)){const e=$e("iframefcb");return be()[e]=()=>{gapi.load?o():n(d(t,"network-request-failed"))},Ge("https://apis.google.com/js/api.js?onload="+e)}o()}}).catch(t=>{throw _n=null,t})}let _n=null;function En(t){return _n=_n||On(t),_n}
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
 */const In=new A(5e3,15e3),Tn="__/auth/iframe",Sn="emulator/auth/iframe",An={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?j(e,Sn):`https://${t.config.authDomain}/${Tn}`,s={apiKey:e.apiKey,appName:t.name,v:i["a"]},o=jn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["s"])(s).slice(1)}`}async function Cn(t){const e=await En(t),n=be().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:kn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:An,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=d(t,"network-request-failed"),s=be().setTimeout(()=>{r(i)},In.get());function o(){be().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
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
 */const Nn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xn=500,Rn=600,Pn="_blank",Ln="http://localhost";class Dn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Mn(t,e,n,i=xn,s=Rn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Nn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=ht(l)?Pn:n),ut(l)&&(e=e||Ln,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(vt(l)&&"_self"!==c)return Fn(e||"",c),new Dn(null);const f=window.open(e||"",c,h);g(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Dn(f)}function Fn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Un="__/auth/handler",Vn="emulator/auth/handler";function Bn(t,e,n,s,o,a){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(e instanceof Ht){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof zt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Gn(t)}?${Object(r["s"])(u).slice(1)}`}function Gn({config:t}){return t.emulator?j(t,Vn):`https://${t.authDomain}/${Un}`}
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
 */const $n="webStorageSupport";class Hn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pe,this._completeRedirectFn=cn}async _openPopup(t,e,n,r){var i;v(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Bn(t,e,n,_(),r);return Mn(t,s,ve())}async _openRedirect(t,e,n,r){return await this._originValidation(t),we(Bn(t,e,n,_(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Cn(t),n=new ln(t);return e.register("authEvent",e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send($n,{type:$n},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[$n];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=vn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||lt()||mt()}}const zn=Hn;var qn="@firebase/auth",Kn="0.17.0";
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
class Wn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Xn(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jn(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(e=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ot(t)},o=new _t(e,r);return O(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Et(t.getProvider("auth").getImmediate());return(t=>new Wn(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(qn,Kn,Xn(t))}
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
 */function Qn(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():w(t,{popupRedirectResolver:zn,persistence:[Ue,fe,pe]})}Jn("Browser")},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),s=n("b622"),o=s("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("a8e9"),s=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),o="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(s){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(d){}try{for(var i=Object(r["h"])(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var a=Object(r["e"])(s.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=o),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["g"])(Object(r["g"])([],Object(r["e"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["e"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=o),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=o),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Object(r["h"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["e"])(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);o===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,s=this.onInitCallbacks.get(e);if(s)try{for(var o=Object(r["h"])(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(s){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=o),this.component?this.component.multipleInstances?t:o:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===o?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
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
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.403d139b.js.map