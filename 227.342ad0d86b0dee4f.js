"use strict";(self.webpackChunkchimera=self.webpackChunkchimera||[]).push([[227],{4227:(b,p,r)=>{r.r(p),r.d(p,{AboutModule:()=>c});var m=r(6895),l=r(1196),t=r(8256);class u{constructor(e,n,a,d){this.username=e,this.icon=n,this.description=a,this.link=d}}class i{constructor(){this.team=[new u("Patsore","https://avatars.githubusercontent.com/u/80210497?v=4","Project Lead","https://github.com/patsore"),new u("Shrecknt","https://avatars.githubusercontent.com/u/58538423?v=4","Developer","https://github.com/Shrecknt"),new u("JamSharp","https://jamsharp.net/assets/CircleBranding.png","Developer","https://github.com/jms-c")]}getTeamMembers(){return this.team.slice()}}function h(o,e){if(1&o&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11),t._UZ(4,"img",12),t.TgZ(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"a",13),t._UZ(10,"i",7),t._uU(11," Github \xbb "),t.qZA()()()()()),2&o){const n=e.$implicit;t.xp6(4),t.s9C("src",n.icon,t.LSH),t.xp6(2),t.Oqu(n.username),t.xp6(2),t.Oqu(n.description),t.xp6(1),t.s9C("href",n.link,t.LSH)}}i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"});class s{constructor(e){this.teamService=e}ngOnInit(){this.team=this.teamService.getTeamMembers()}onClickDiscord(){window.open("https://discord.com/")}onClickGithub(){window.open("https://github.com/Chimera-Development")}}s.\u0275fac=function(e){return new(e||s)(t.Y36(i))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-about"]],decls:12,vars:1,consts:[[1,"row","text-center"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"row",2,"padding-top","20px"],[1,"col","align-content-center"],["type","button",1,"w-50","btn","btn-outline-primary",3,"click"],[1,"bi","bi-discord"],["type","button",1,"w-50","btn","btn-outline-light",3,"click"],[1,"bi","bi-github"],[1,"col-md-4"],[1,"row"],[1,"col","p-4","position-static"],[1,"col"],["width","140","height","140",1,"rounded-circle",3,"src"],[1,"btn","btn-secondary",3,"href"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,h,12,4,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"p")(5,"button",4),t.NdJ("click",function(){return n.onClickDiscord()}),t._UZ(6,"i",5),t._uU(7," Discord "),t.qZA()(),t.TgZ(8,"p")(9,"button",6),t.NdJ("click",function(){return n.onClickGithub()}),t._UZ(10,"i",7),t._uU(11," Github "),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.team))},dependencies:[m.sg]});class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[m.ez,l.Bz.forChild([{path:"",component:s}])]})}}]);