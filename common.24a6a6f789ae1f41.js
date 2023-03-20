"use strict";(self.webpackChunkchimera=self.webpackChunkchimera||[]).push([[592],{8946:(l,p,e)=>{e.d(p,{N:()=>u,v:()=>c});var s=e(1196),i=e(8256),a=e(6604),o=e(9779),t=e(262),d=e(2843),_=e(4702);const u=(h,n)=>{const r=(0,i.f3M)(a.G),v=(0,i.f3M)(o.Z),m=(0,i.f3M)(s.F0),E=r.getUpdates();return 0===E.length?v.fetchUpdates().pipe((0,t.K)(f=>(m.navigate(["/error"],{queryParams:{message:f}}).then(),(0,d._)(()=>f)))):E},c=(h,n)=>{const r=(0,i.f3M)(_.P),v=(0,i.f3M)(o.Z),m=(0,i.f3M)(s.F0),E=r.getAnswers();return 0===E.length?v.fetchAnswers().pipe((0,t.K)(f=>(m.navigate(["/error"],{queryParams:{message:f}}).then(),(0,d._)(()=>f)))):E}},1110:(l,p,e)=>{e.d(p,{G:()=>_});var s=e(1196),i=e(384),a=e(8256),o=e(5698),t=e(4004);const _=(u,c)=>((u,c)=>{const h=(0,a.f3M)(i.e),n=(0,a.f3M)(s.F0);return h.userSet.pipe((0,o.q)(1),(0,t.U)(r=>!!r||n.createUrlTree(["/auth"])))})()},5858:(l,p,e)=>{e.d(p,{S:()=>i});var s=e(9751);const i=a=>new s.y(o=>a.canDeactivate()?o.next(!0):o.next(confirm("Any unsaved changes will be lost. Do you want to proceed?")))},9779:(l,p,e)=>{e.d(p,{Z:()=>c});var s=e(4004),i=e(8505),a=e(262),o=e(2843),t=e(8256),d=e(529),_=e(6604),u=e(4702);class c{constructor(n,r,v){this.client=n,this.updateService=r,this.faqService=v}fetchUpdates(){return this.client.get("https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/updates.json").pipe((0,s.U)(n=>n.map(r=>({...r,quote:r.quote?r.quote:"",developer:r.developer?r.developer:""}))),(0,i.b)(n=>this.updateService.setUpdates(n)),(0,a.K)(this.handleLoadingErrorResponse))}saveUpdates(){const n=this.updateService.getUpdates();return this.client.put("https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/updates.json",n).pipe((0,a.K)(this.handleSavingErrorResponse))}fetchAnswers(){return this.client.get("https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/faq.json").pipe((0,s.U)(n=>n.map(r=>({...r,linkDisplay:r.linkDisplay?r.linkDisplay:"",link:r.link?r.link:""}))),(0,i.b)(n=>this.faqService.setAnswers(n)),(0,a.K)(this.handleLoadingErrorResponse))}saveAnswers(){const n=this.faqService.getAnswers();return this.client.put("https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/faq.json",n).pipe((0,a.K)(this.handleSavingErrorResponse))}handleSavingErrorResponse(n){let r="Failed to complete the request.";return null!=n.status&&(r="\u26a0\ufe0f "+n.status+": "+n.statusText),(0,o._)(()=>r)}handleLoadingErrorResponse(n){let r="Failed to retrieve response data.";return null!=n.status&&(r="\u26a0\ufe0f "+n.status+": "+n.statusText+" Unable to retrieve data."),(0,o._)(()=>r)}}c.\u0275fac=function(n){return new(n||c)(t.LFG(d.eN),t.LFG(_.G),t.LFG(u.P))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})},4702:(l,p,e)=>{e.d(p,{P:()=>a});var s=e(7579),i=e(8256);class a{constructor(){this.faqUpdated=new s.x,this.faqAnswers=[],this.initialFaqState=[]}getAnswerById(t){return this.faqAnswers[t]}getAnswers(){return this.faqAnswers.slice()}shiftItemUpByIndex(t){const d=this.getAnswers();if(t>0){const _=this.faqAnswers[t];d[t]=d[t-1],d[t-1]=_}this.faqAnswers=d,this.faqUpdated.next(this.faqAnswers.slice())}deleteItemById(t){this.faqAnswers.splice(t,1),this.faqUpdated.next(this.faqAnswers.slice())}updateAnswer(t,d){this.faqAnswers[t]=d,this.faqUpdated.next(this.faqAnswers.slice())}addAnswer(t){this.faqAnswers.push(t),this.faqUpdated.next(this.faqAnswers.slice())}setAnswers(t){this.faqAnswers=t,this.faqUpdated.next(this.faqAnswers.slice())}setInitialState(){this.initialFaqState=this.faqAnswers.slice()}resetAnswers(){this.faqAnswers=this.initialFaqState.slice(),this.faqUpdated.next(this.faqAnswers.slice())}}a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},6604:(l,p,e)=>{e.d(p,{G:()=>a});var s=e(7579),i=e(8256);class a{constructor(){this.itemsUpdated=new s.x,this.updates=[],this.initialUpdateState=[]}getUpdates(){return this.updates.slice()}getUpdate(t){return this.getUpdates()[t]}updateUpdate(t,d){this.updates[t]=d,this.itemsUpdated.next(this.updates.slice())}createUpdate(t){this.updates.push(t),this.itemsUpdated.next(this.updates.slice())}deleteUpdate(t){this.updates.splice(t,1),this.itemsUpdated.next(this.updates.slice())}setUpdates(t){this.updates=t,this.itemsUpdated.next(this.updates.slice())}setInitialState(){this.initialUpdateState=this.updates.slice()}resetUpdates(){this.updates=this.initialUpdateState.slice(),this.itemsUpdated.next(this.updates.slice())}}a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},6616:(l,p,e)=>{e.d(p,{j:()=>i});var s=e(8256);class i{constructor(){this.promptClosed=new s.vpe}onClose(){this.promptClosed.emit(!1)}onSaveChanges(){this.promptClosed.emit(!0)}}i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=s.Xpm({type:i,selectors:[["app-prompt"]],inputs:{prompt:"prompt"},outputs:{promptClosed:"promptClosed"},decls:10,vars:1,consts:[[1,"container","fixed-bottom","py-4","w-75","navbar-expand-sm"],[1,"row","navbar","align-items-center","bg-black","rounded","p-3"],[1,"col","col-md-7"],[1,"col","col-md-3"],["type","button",1,"btn",3,"click"],["type","button",1,"btn","btn-outline-success",3,"click"]],template:function(o,t){1&o&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span"),s._uU(4),s.qZA()(),s.TgZ(5,"div",3)(6,"button",4),s.NdJ("click",function(){return t.onClose()}),s._uU(7,"Reset"),s.qZA(),s.TgZ(8,"button",5),s.NdJ("click",function(){return t.onSaveChanges()}),s._uU(9,"Save Changes"),s.qZA()()()()),2&o&&(s.xp6(4),s.Oqu(t.prompt))},encapsulation:2})}}]);