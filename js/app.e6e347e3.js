(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"99118b15"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}s[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),s=Object(a["h"])('<section class="mb-8 py-20 text-white text-center relative"><div class="absolute inset-0 w-full h-full bg-contain introduction-bg" style="background-image:url(assets/img/header.png);"></div><div class="container mx-auto"><div class="text-white main-header-content"><h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1><p class="w-full md:w-8/12 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna. </p></div></div><img class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full" src="assets/img/introduction-music.png"></section><section class="container mx-auto"><div class="bg-white rounded border border-gray-200 relative flex flex-col"><div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"><span class="card-title">Songs</span><i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i></div><ol id="playlist"><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li><li class="\n            flex\n            justify-between\n            items-center\n            p-3\n            pl-6\n            cursor-pointer\n            transition\n            duration-300\n            hover:bg-gray-50\n          "><div><a href="#" class="font-bold block text-gray-600">Song Title</a><span class="text-gray-500 text-sm">Artist Name</span></div><div class="text-gray-600 text-lg"><span class="comments"><i class="fa fa-comments text-gray-600"></i> 15 </span></div></li></ol></div></section><div class="\n      fixed\n      bottom-0\n      left-0\n      bg-white\n      p-5\n      pb-4\n      text-left\n      align-top\n      w-full\n      h-16\n    "><div class="relative"><div class="float-left w-7 h-7 leading-3"><button type="button"><i class="fa fa-play text-gray-500 text-xl"></i></button></div><div class="\n          float-left\n          w-7\n          h-7\n          leading-3\n          text-gray-400\n          mt-0\n          text-lg\n          w-14\n          ml-5\n          mt-1\n        "><span class="player-currenttime">00:00</span></div><div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub"><div class="\n            absolute\n            left-0\n            right-0\n            text-lg text-center\n            mx-auto\n            player-song-info\n          "><span class="song-title">Song Title</span> by <span class="song-artist">Artist</span></div><span class="\n            block\n            w-full\n            h-2\n            rounded\n            m-1\n            mt-2\n            bg-gray-200\n            relative\n            cursor-pointer\n          "><span class="absolute top-neg-8 text-gray-800 text-lg" style="left:50%;"><i class="fas fa-circle"></i></span><span class="\n              block\n              h-2\n              rounded\n              bg-gradient-to-r\n              from-green-500\n              to-green-400\n            " style="width:50%;"></span></span></div><div class="\n          float-left\n          w-7\n          h-7\n          leading-3\n          text-gray-400\n          mt-0\n          text-lg\n          w-14\n          ml-8\n          mt-1\n        "><span class="player-duration">03:06</span></div></div></div>',3);function r(e,t,n,r,i,o){var l=Object(a["B"])("app-header"),c=Object(a["B"])("auth-modal");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(l),s,Object(a["i"])(c)],64)}var i={id:"header",class:"bg-gray-700"},o={class:"container mx-auto flex justify-start items-center py-5 px-4"},l=Object(a["g"])("a",{class:"text-white font-bold uppercase text-2xl mr-4",href:"#"},"Music",-1),c={class:"flex flex-grow items-center"},u={class:"flex flex-row mt-1"},b=Object(a["g"])("li",null,[Object(a["g"])("a",{class:"px-2 text-white",href:"#"},"Manage")],-1);function d(e,t,n,s,r,d){return Object(a["w"])(),Object(a["f"])("header",i,[Object(a["g"])("nav",o,[l,Object(a["g"])("div",c,[Object(a["g"])("ul",u,[Object(a["g"])("li",null,[e.userLoggedIn?(Object(a["w"])(),Object(a["f"])("a",{key:1,class:"px-2 text-white",href:"#",onClick:t[1]||(t[1]=Object(a["K"])((function(){}),["prevent"]))},Object(a["E"])(d.loginState),1)):(Object(a["w"])(),Object(a["f"])("a",{key:0,class:"px-2 text-white",href:"#",onClick:t[0]||(t[0]=Object(a["K"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))},Object(a["E"])(d.loginState),1))]),b])])])])}var g=n("5530"),m=n("5502"),p={name:"AppHeader",methods:Object(g["a"])({},Object(m["b"])(["toggleAuthModal"])),computed:Object(g["a"])(Object(g["a"])({},Object(m["c"])(["userLoggedIn"])),{},{loginState:function(){return this.userLoggedIn?"Logout":"Login / Register"}})};p.render=d;var f=p,x={class:"\n        flex\n        items-end\n        justify-center\n        min-h-screen\n        pt-4\n        px-4\n        pb-20\n        text-center\n        sm:block\n        sm:p-0\n      "},v=Object(a["g"])("div",{class:"fixed inset-0 transition-opacity"},[Object(a["g"])("div",{class:"absolute inset-0 bg-gray-800 opacity-75"})],-1),h=Object(a["g"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​",-1),y={class:"\n          inline-block\n          align-bottom\n          bg-white\n          rounded-lg\n          text-left\n          overflow-hidden\n          shadow-xl\n          transform\n          transition-all\n          sm:my-8\n          sm:align-middle\n          sm:max-w-lg\n          sm:w-full\n        "},j={class:"py-4 text-left px-6"},O={class:"flex justify-between items-center pb-4"},w=Object(a["g"])("p",{class:"text-2xl font-bold"},"Your Account",-1),_=Object(a["g"])("i",{class:"fas fa-times"},null,-1),k=[_],S={class:"flex flex-wrap mb-4"},A={class:"flex-auto text-center"},T={class:"flex-auto text-center"};function M(e,t,n,s,r,i){var o=Object(a["B"])("login-form"),l=Object(a["B"])("register-form");return Object(a["w"])(),Object(a["f"])("div",{class:Object(a["q"])(["fixed z-10 inset-0 overflow-y-auto",{hidden:!e.authModalShow}]),id:"modal"},[Object(a["g"])("div",x,[v,h,Object(a["g"])("div",y,[Object(a["g"])("div",j,[Object(a["g"])("div",O,[w,Object(a["g"])("div",{class:"modal-close cursor-pointer z-50",onClick:t[0]||(t[0]=Object(a["K"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))},k)]),Object(a["g"])("ul",S,[Object(a["g"])("li",A,[Object(a["g"])("a",{class:Object(a["q"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"login"===r.tab,"hover:text-blue-600":"register"===r.tab}]),href:"#",onClick:t[1]||(t[1]=Object(a["K"])((function(e){return r.tab="login"}),["prevent"]))},"Login ",2)]),Object(a["g"])("li",T,[Object(a["g"])("a",{class:Object(a["q"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"register"===r.tab,"hover:text-blue-600":"login"===r.tab}]),href:"#",onClick:t[2]||(t[2]=Object(a["K"])((function(e){return r.tab="register"}),["prevent"]))},"Register",2)])]),"login"===r.tab?(Object(a["w"])(),Object(a["d"])(o,{key:0})):(Object(a["w"])(),Object(a["d"])(l,{key:1}))])])])],2)}var L={class:"mb-3"},q=Object(a["g"])("label",{class:"inline-block mb-2"},"Email",-1),P={class:"mb-3"},E=Object(a["g"])("label",{class:"inline-block mb-2"},"Password",-1),N=["disabled"];function B(e,t,n,s,r,i){var o=Object(a["B"])("vee-field"),l=Object(a["B"])("error-message"),c=Object(a["B"])("vee-form");return Object(a["w"])(),Object(a["f"])(a["a"],null,[r.login_show_alert?(Object(a["w"])(),Object(a["f"])("div",{key:0,class:Object(a["q"])(["text-white text-center font-bold p-4 mb-4",r.login_alert_variant])},Object(a["E"])(r.login_button_msg),3)):Object(a["e"])("",!0),Object(a["i"])(c,{onSubmit:i.login,"validation-schema":r.loginSchema},{default:Object(a["J"])((function(){return[Object(a["g"])("div",L,[q,Object(a["i"])(o,{name:"email",type:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded",placeholder:"Enter Email"}),Object(a["i"])(l,{class:"text-red-600",name:"email"})]),Object(a["g"])("div",P,[E,Object(a["i"])(o,{name:"password",type:"password",class:"block w-full py-1.5 px-3 ext-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded",placeholder:"Password"}),Object(a["i"])(l,{class:"text-red-600",name:"password"})]),Object(a["g"])("button",{type:"submit",disabled:r.login_in_submission,class:Object(a["q"])([{"bg-purple-600 hover:bg-purple-700":!r.login_in_submission,"bg-green-600":r.login_in_submission},"block w-full text-white py-1.5 px-3 rounded transition"])},Object(a["E"])(r.login_button_msg),11,N)]})),_:1},8,["onSubmit","validation-schema"])],64)}var I={name:"LoginForm",data:function(){return{loginSchema:{email:"required|email",password:"required|min:3|max:20"},login_in_submission:!1,login_show_alert:!1,login_button_msg:"Submit",login_alert_variant:"bg-blue-500"}},methods:{login:function(e){this.login_in_submission=!0,this.login_show_alert=!0,this.login_button_msg="Logged in",this.login_alert_variant="bg-green-600",console.log(e)}}};I.render=B;var C=I,R={class:"mb-3"},Y=Object(a["g"])("label",{class:"inline-block mb-2"},"Name",-1),F={class:"mb-3"},J=Object(a["g"])("label",{class:"inline-block mb-2"},"Email",-1),K={class:"mb-3"},U=Object(a["g"])("label",{class:"inline-block mb-2"},"Age",-1),D={class:"mb-3"},G=Object(a["g"])("label",{for:"pass",class:"inline-block mb-2"},"Password",-1),z={class:"mb-3"},H=Object(a["g"])("label",{for:"confirm_password",class:"inline-block mb-2"},"Confirm Password",-1),V={class:"mb-3"},$=Object(a["g"])("label",{class:"inline-block"},"User type",-1),X=Object(a["g"])("option",{value:"Artist"},"Artist",-1),Z=Object(a["g"])("option",{value:"Listener"},"Listener",-1),Q={class:"mb-3"},W=Object(a["g"])("label",{class:"inline-block mb-2"},"Country",-1),ee=Object(a["g"])("option",{value:"USA"},"USA",-1),te=Object(a["g"])("option",{value:"Mexico"},"Mexico",-1),ne=Object(a["g"])("option",{value:"Germany"},"Germany",-1),ae=Object(a["g"])("option",{value:"Argentina"},"Argentina",-1),se={class:"mb-3 pl-6"},re=Object(a["g"])("label",{class:"inline-block"},"Accept terms of service",-1),ie=["disabled"];function oe(e,t,n,s,r,i){var o=Object(a["B"])("vee-field"),l=Object(a["B"])("error-message"),c=Object(a["B"])("vee-form");return Object(a["w"])(),Object(a["f"])(a["a"],null,[r.reg_show_alert?(Object(a["w"])(),Object(a["f"])("div",{key:0,class:Object(a["q"])(["text-white text-center font-bold p-5 mb-4",r.reg_alert_variant])},Object(a["E"])(r.reg_alert_msg),3)):Object(a["e"])("",!0),Object(a["i"])(c,{onSubmit:i.register,"validation-schema":r.schema,"initial-values":r.userData},{default:Object(a["J"])((function(){return[Object(a["g"])("div",R,[Y,Object(a["i"])(o,{name:"name",type:"text",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded",placeholder:"Enter Name"}),Object(a["i"])(l,{class:"text-red-600",name:"name"})]),Object(a["g"])("div",F,[J,Object(a["i"])(o,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none\n          focus:border-black rounded",placeholder:"Enter Email"}),Object(a["i"])(l,{class:"text-red-600",name:"email"})]),Object(a["g"])("div",K,[U,Object(a["i"])(o,{name:"age",type:"number",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded"}),Object(a["i"])(l,{class:"text-red-600",name:"age"})]),Object(a["g"])("div",D,[G,Object(a["i"])(o,{name:"password",bails:!1},{default:Object(a["J"])((function(e){var t=e.field,n=e.errors;return[Object(a["g"])("input",Object(a["o"])({id:"pass",type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n            transition duration-500 focus:outline-none focus:border-black\n            rounded",placeholder:"Password"},t),null,16),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(n,(function(e){return Object(a["w"])(),Object(a["f"])("div",{class:"text-red-600",key:e},Object(a["E"])(e),1)})),128))]})),_:1})]),Object(a["g"])("div",z,[H,Object(a["i"])(o,{id:"confirm_password",name:"confirm_password",type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded",placeholder:"Confirm Password"}),Object(a["i"])(l,{class:"text-red-600",name:"confirm_password"})]),Object(a["g"])("div",V,[$,Object(a["i"])(o,{name:"user_type",as:"select",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded"},{default:Object(a["J"])((function(){return[X,Z]})),_:1}),Object(a["i"])(l,{class:"text-red-600",name:"user_type"})]),Object(a["g"])("div",Q,[W,Object(a["i"])(o,{as:"select",name:"country",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n          transition duration-500 focus:outline-none focus:border-black\n          rounded"},{default:Object(a["J"])((function(){return[ee,te,ne,ae]})),_:1}),Object(a["i"])(l,{class:"text-red-600",name:"country"})]),Object(a["g"])("div",se,[Object(a["i"])(o,{name:"tos",value:"1",type:"checkbox",class:"w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"}),re,Object(a["i"])(l,{class:"text-red-600 block",name:"tos"})]),Object(a["g"])("button",{type:"submit",disabled:r.reg_in_submission,class:Object(a["q"])([i.toggleSubmitButton,"block w-full text-white py-1.5 px-3 rounded transition"])}," Submit ",10,ie)]})),_:1},8,["onSubmit","validation-schema","initial-values"])],64)}var le=n("1da1"),ce=(n("96cf"),{name:"RegisterForm",data:function(){return{schema:{name:"required|min:3|max:100|alpha_spaces",email:"required|email|min:3|max:100",age:"required|min_value:18|max_value:105",password:"required|min:3|max:20",confirm_password:"passwords_mismatch:@password",country:"required|country_excluded:Argentina",tos:"tos",user_type:"user_type"},userData:{country:"USA",user_type:"Listener"},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Your account is being created"}},methods:{register:function(e){var t=this;return Object(le["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.reg_show_alert=!0,t.reg_in_submission=!0,t.reg_alert_variant="bg-blue-500",t.reg_alert_msg="Please wait! Your account is being created",n.prev=4,n.next=7,t.$store.dispatch("register",e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.reg_in_submission=!1,t.reg_alert_variant="bg-red-500",t.reg_alert_msg="Unexpected error occured. Please, try again",n.abrupt("return");case 15:console.log(t.$store.state.userLoggedIn),t.reg_alert_variant="bg-green-500",t.reg_alert_msg="Success! Your account has been created";case 18:case"end":return n.stop()}}),n,null,[[4,9]])})))()}},computed:{toggleSubmitButton:function(){return this.reg_in_submission?"bg-gray-500":"hover:bg-purple-700 bg-purple-600"}}});ce.render=oe;var ue=ce,be={components:{LoginForm:C,RegisterForm:ue},name:"AuthModal",data:function(){return{tab:"login"}},computed:Object(g["a"])({},Object(m["c"])(["authModalShow","authTabShow"])),methods:Object(g["a"])({},Object(m["b"])(["toggleAuthModal","toggleAuthTabSwitch"]))};be.render=M;var de=be,ge={name:"App",components:{AppHeader:f,AuthModal:de}};ge.render=r;var me=ge,pe=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));const fe={};var xe=fe,ve=[{path:"/",name:"Home",component:xe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],he=Object(pe["a"])({history:Object(pe["b"])("/"),routes:ve}),ye=he,je=(n("b0c0"),n("ea7b")),Oe=n("260b"),we=n("e71f"),_e={apiKey:"AIzaSyBVI_TLocU4YKkvhEgXtG0mD77_mFs5Z1M",authDomain:"music-c7eb1.firebaseapp.com",projectId:"music-c7eb1",storageBucket:"music-c7eb1.appspot.com",messagingSenderId:"497800940575",appId:"1:497800940575:web:1586aeb2a0e8223ae3592a"},ke=Object(Oe["a"])(_e),Se=Object(we["c"])(ke),Ae=Object(je["b"])(ke),Te=Object(we["b"])(Se,"users"),Me=Object(m["a"])({state:{authModalShow:!1,authTabShow:!1,userLoggedIn:!1},mutations:{toggleAuthModal:function(e){e.authModalShow=!e.authModalShow},toggleAuthTabSwitch:function(e){e.authTabShow=!e.authTabShow},toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn}},getters:{},actions:{register:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,Object(je["a"])(Ae,t.email,t.password);case 3:return n.next=5,Object(we["a"])(Te,{name:t.name,email:t.email,age:t.age,country:t.country,user_type:t.user_type});case 5:a("toggleAuth");case 6:case"end":return n.stop()}}),n)})))()}}}),Le=n("7bb1"),qe=n("3aa8"),Pe={install:function(e){e.component("VeeForm",Le["c"]),e.component("VeeField",Le["b"]),e.component("ErrorMessage",Le["a"]),Object(Le["e"])("required",qe["i"]),Object(Le["e"])("tos",qe["i"]),Object(Le["e"])("min",qe["f"]),Object(Le["e"])("max",qe["d"]),Object(Le["e"])("email",qe["c"]),Object(Le["e"])("alpha_spaces",qe["a"]),Object(Le["e"])("min_value",qe["g"]),Object(Le["e"])("max_value",qe["e"]),Object(Le["e"])("passwords_mismatch",qe["b"]),Object(Le["e"])("excluded",qe["h"]),Object(Le["e"])("country_excluded",qe["h"]),Object(Le["e"])("user_type",qe["i"]),Object(Le["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short"),max:"The field ".concat(e.field," is too long"),alpha_spaces:"The field ".concat(e.field," may only contain aphabetical characters and spaces"),email:"The field ".concat(e.field," must be a valid email"),min_value:"The field ".concat(e.field," is too low"),max_value:"The field ".concat(e.field," is too high"),excluded:"You are not allowed to use this value in field ".concat(e.field),country_excluded:"Due to restrictions, we do not accept users from this location.",passwords_mismatch:"The passwords don't match.",tos:"You must accept the Terms of Service",user_type:"You must choose a type of user"},n=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid.");return n},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},Ee=(n("ba8c"),n("845f"),Object(a["c"])(me));Ee.use(Me),Ee.use(ye),Ee.use(Pe),Ee.mount("#app")},"845f":function(e,t,n){},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.e6e347e3.js.map