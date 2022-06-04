import{_ as r,o as n,c as o,b as e,a as m,d as u,r as p,e as l,f as x}from "./entry-048ecb58.mjs";const v={},f={class:"hero-content text-center"},g=e("div",{class:"max-w-md"},[e("h1",{class:"text-5xl font-bold"},"About Memnix..."),e("p",{class:"py-6 font-bold italic"}," Finally, indeed. Parasites view with disconnection! Honor at the space station that is when ancient sensors die. It is a sub-light sensor, sir. ")],-1),b=[g];function w(a, t){return n(),o("div",f,b)}var y=r(v,[["render",w]]);const $={},P={class:"mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-200 drop-shadow-2xl"},k=m('<div class="px-6 py-4"><h2 class="text-center text-3xl font-bold">Welcome Back !</h2><h3 class="mt-1 text-center text-xl font-medium">Register</h3><form><div class="mt-4 w-full"><input aria-label="Username" class="input input-bordered input-accent w-full max-w-xs" placeholder="Username" type="text"></div><div class="mt-4 w-full"><input aria-label="Email Address" class="input input-bordered input-accent w-full max-w-xs" placeholder="Email" type="email"></div><div class="mt-4 w-full"><input aria-label="Password" class="input input-bordered input-accent w-full max-w-xs" placeholder="Password" type="password"></div><div class="mt-4 flex justify-end"><button class="btn btn-accent rounded" type="button">Register</button></div></form></div>',1),E={class:"flex items-center justify-center bg-base-200 py-4 text-center"},L=e("span",{class:"text-sm"},"Already have an account? ",-1);function A(a, t){return n(),o("div",P,[k,e("div",E,[L,e("a",{class:"mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400",onClick:t[0]||(t[0]= i=>a.$emit("loginPageEvent"))},"Login")])])}var j=r($,[["render",A]]);const C={},S={class:"mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-200 drop-shadow-2xl"},B=m('<div class="px-6 py-4"><h2 class="text-center text-3xl font-bold">Welcome Back !</h2><h3 class="mt-1 text-center text-xl font-medium">Login</h3><form><div class="mt-4 w-full"><input aria-label="Email Address" class="input input-bordered input-accent w-full max-w-xs" placeholder="Email" type="email"></div><div class="mt-4 w-full"><input aria-label="Password" class="input input-bordered input-accent w-full max-w-xs" placeholder="Password" type="password"></div><div class="mt-4 flex items-center justify-between"><a class="text-sm" href="#">Forget Password?</a><button class="btn btn-accent rounded" type="button">Login</button></div></form></div>',1),R={class:"flex items-center justify-center bg-base-200 py-4 text-center"},I=e("span",{class:"text-sm"},"Don't have an account? ",-1);function N(a, t){return n(),o("div",S,[B,e("div",R,[I,e("a",{class:"mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400",onClick:t[0]||(t[0]= i=>a.$emit("registerPageEvent"))},"Register")])])}var V=r(C,[["render",N]]);const M=u({setup(a, {expose:t}){t();const i=p(0),c={page:i,registerPageEvent:()=>{i.value=1},loginPageEvent:()=>{i.value=0},Login:V};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),F={key:0},O={key:1};function U(a, t, i, s, _, c){const d=j;return s.page===0?(n(),o("div",F,[l(s.Login,{onRegisterPageEvent:s.registerPageEvent})])):s.page===1?(n(),o("div",O,[l(d,{onLoginPageEvent:s.loginPageEvent})])):x("",!0)}var W=r(M,[["render",U]]);const D=u({setup(a, {expose:t}){t();const s={page:p(0),IndexAuth:W};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),G={class:"flex h-screen flex-wrap bg-base-200"},H={class:"hero lg:w-1/2"},q={class:"hero-content text-center"},z=e("img",{class:"max-w-sm rounded-lg shadow-2xl",src:"https://api.lorem.space/image/movie?w=260&h=400"},null,-1),J={class:"max-w-md"},K=e("h1",{class:"text-5xl font-bold"},"Memnix app",-1),Q=e("p",{class:"py-6 font-bold italic"}," A spaced repetition learning system ",-1),T={key:0,class:"md:w-1/2"},X=e("div",{class:"hero min-h-screen"},[e("img",{class:"max-w-sm rounded-lg shadow-2xl",src:"https://api.lorem.space/image/movie?w=260&h=400"})],-1),Y=[X],Z={key:1,class:"hero min-h-screen bg-neutral lg:w-1/2"},ee={key:2,class:"hero min-h-screen bg-neutral lg:w-1/2"};function te(a, t, i, s, _, c){const d=y;return n(),o("section",null,[e("div",G,[e("div",H,[e("div",q,[z,e("div",J,[K,Q,e("button",{class:"btn btn-primary mx-3",onClick:t[0]||(t[0]= h=>s.page=1)}," Get Started "),e("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]= h=>s.page=2)}," Learn more ")])])]),s.page===0?(n(),o("div",T,Y)):s.page===1?(n(),o("div",Z,[l(s.IndexAuth)])):s.page===2?(n(),o("div",ee,[l(d)])):x("",!0)])])}var ne=r(D,[["render",te]]);export{ne as default};
