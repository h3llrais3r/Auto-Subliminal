"use strict";(self.webpackChunkautosubliminal=self.webpackChunkautosubliminal||[]).push([[592],{4873:(_,m,i)=>{i.d(m,{g:()=>h});var e=i(8002),a=i(1131),o=i(5868),u=i(8621),g=i(639),p=i(1841);let h=(()=>{class s extends u.g{constructor(t){super(t),this.httpClient=t,this.URL=`${a.$0.webRoot}/api/settings`}getGeneralSettings(){return this.httpClient.get(`${this.URL}/general`,this.options).pipe((0,e.U)(t=>new o.q$(t)))}updateGeneralSettings(t){return this.httpClient.put(`${this.URL}/general`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}updateGeneralSetting(t,l){return this.httpClient.patch(`${this.URL}/general/${t}`,JSON.stringify(l),this.options).pipe((0,e.U)(()=>!0))}getLibrarySettings(){return this.httpClient.get(`${this.URL}/library`,this.options).pipe((0,e.U)(t=>new o.Hs(t)))}updateLibrarySettings(t){return this.httpClient.put(`${this.URL}/library`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getLogSettings(){return this.httpClient.get(`${this.URL}/logging`,this.options).pipe((0,e.U)(t=>new o.g8(t)))}updateLogSettings(t){return this.httpClient.put(`${this.URL}/logging`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getWebServerSettings(){return this.httpClient.get(`${this.URL}/webserver`,this.options).pipe((0,e.U)(t=>new o.Hn(t)))}updateWebServerSettings(t){return this.httpClient.put(`${this.URL}/webserver`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getSubliminalSettings(){return this.httpClient.get(`${this.URL}/subliminal`,this.options).pipe((0,e.U)(t=>new o.ed(t)))}updateSubliminalSettings(t){return this.httpClient.put(`${this.URL}/subliminal`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getNameMappingSettings(){return this.httpClient.get(`${this.URL}/namemapping`,this.options).pipe((0,e.U)(t=>new o.x2(t)))}updateNameMappingSettings(t){return this.httpClient.put(`${this.URL}/namemapping`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getSkipMappingSettings(){return this.httpClient.get(`${this.URL}/skipmapping`,this.options).pipe((0,e.U)(t=>new o.Aw(t)))}updateSkipMappingSettings(t){return this.httpClient.put(`${this.URL}/skipmapping`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}getNotificationSettings(){return this.httpClient.get(`${this.URL}/notification`,this.options).pipe((0,e.U)(t=>new o.sf(t)))}updateNotificationSettings(t){return this.httpClient.put(`${this.URL}/notification`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}testNotifier(t){return this.httpClient.patch(`${this.URL}/notification/${t}`,{},this.options).pipe((0,e.U)(()=>!0))}registerTwitter(){return this.httpClient.post(`${this.URL}/notification/twitter`,{},this.options).pipe((0,e.U)(t=>new o.nm(t)))}authorizeTwitter(t){return this.httpClient.post(`${this.URL}/notification/twitter`,t,this.options).pipe((0,e.U)(l=>new o.dU(l)))}getPostProcessSettings(){return this.httpClient.get(`${this.URL}/postprocessing`,this.options).pipe((0,e.U)(t=>new o.lq(t)))}updatePostProcessSettings(t){return this.httpClient.put(`${this.URL}/postprocessing`,JSON.stringify(t),this.options).pipe((0,e.U)(()=>!0))}}return s.\u0275fac=function(t){return new(t||s)(g.LFG(p.eN))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8424:(_,m,i)=>{i.d(m,{l:()=>g});var e=i(639),a=i(3679),o=i(228),u=i(705);let g=(()=>{class p extends o.a{constructor(s){super(s),this.controlContainer=s,this.mode="decimal",this.useGrouping=!1,this.showButtons=!0,this.step=1}ngOnInit(){}}return p.\u0275fac=function(s){return new(s||p)(e.Y36(a.gN))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-input-number"]],inputs:{mode:"mode",useGrouping:"useGrouping",showButtons:"showButtons",step:"step",min:"min",max:"max",suffix:"suffix"},features:[e._Bn([{provide:a.JU,useExisting:(0,e.Gpc)(()=>p),multi:!0}]),e.qOj],decls:1,vars:9,consts:[["decrementButtonClass","p-button-outlined input-addon","incrementButtonClass","p-button-outlined input-addon","styleClass","w-100",3,"id","formControl","mode","useGrouping","step","min","max","suffix","showButtons"]],template:function(s,r){1&s&&e._UZ(0,"p-inputNumber",0),2&s&&e.Q6J("id",r.id||r.formControlName)("formControl",r.control)("mode",r.mode)("useGrouping",r.useGrouping)("step",r.step)("min",r.min)("max",r.max)("suffix",r.suffix)("showButtons",r.showButtons)},directives:[u.Rn,a.JJ,a.oH],styles:[""]}),p})()},6015:(_,m,i)=>{i.d(m,{m:()=>h});var e=i(639),a=i(3679),o=i(228),u=i(2808),g=i(3928),p=i(8583);let h=(()=>{class s extends o.a{constructor(t,l){super(t),this.controlContainer=t,this.changeDetectorRef=l,this.type="text",this.placeholder="",this.dropSpecialCharacters=!0}ngOnInit(){}writeValue(t){this.formControlDirective.valueAccessor.writeValue(t),this.changeDetectorRef.detectChanges()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(a.gN),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-input-text"]],inputs:{type:"type",placeholder:"placeholder",mask:"mask",dropSpecialCharacters:"dropSpecialCharacters"},features:[e._Bn([{provide:a.JU,useExisting:(0,e.Gpc)(()=>s),multi:!0}]),e.qOj],decls:1,vars:7,consts:[["pInputText","",1,"w-100",3,"id","formControl","type","placeholder","ngClass","mask","dropSpecialCharacters"]],template:function(t,l){1&t&&e._UZ(0,"input",0),2&t&&e.Q6J("id",l.id||l.formControlName)("formControl",l.control)("type",l.type)("placeholder",l.placeholder)("ngClass",l.validationClass)("mask",l.mask)("dropSpecialCharacters",l.dropSpecialCharacters)},directives:[a.Fj,u.hx,g.o,a.JJ,a.oH,p.mk],styles:[""]}),s})()},5102:(_,m,i)=>{i.d(m,{N:()=>o});var e=i(639),a=i(5121);let o=(()=>{class u{constructor(){this.visible=!1}ngOnInit(){}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-loading"]],inputs:{visible:"visible"},decls:3,vars:6,consts:[["styleClass","dialog-transparent",3,"visible","modal","closable","draggable","resizable","showHeader","visibleChange"],[1,"loading"],["aria-hidden","true",1,"fa","fa-spinner","fa-spin","fa-5x"]],template:function(p,h){1&p&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(r){return h.visible=r}),e.TgZ(1,"div",1),e._UZ(2,"i",2),e.qZA(),e.qZA()),2&p&&e.Q6J("visible",h.visible)("modal",!0)("closable",!1)("draggable",!1)("resizable",!1)("showHeader",!1)},directives:[a.V],styles:[""]}),u})()},5868:(_,m,i)=>{i.d(m,{q$:()=>e,Hs:()=>a,g8:()=>o,Hn:()=>u,ed:()=>g,x2:()=>p,Aw:()=>h,sf:()=>s,nm:()=>r,dU:()=>t,lq:()=>l});class e{constructor(n){Object.assign(this,n)}}class a{constructor(n){Object.assign(this,n)}}class o{constructor(n){Object.assign(this,n)}}class u{constructor(n){Object.assign(this,n)}}class g{constructor(n){Object.assign(this,n)}}class p{constructor(n){Object.assign(this,n)}}class h{constructor(n){Object.assign(this,n)}}class s{constructor(n){Object.assign(this,n)}}class r{constructor(n){Object.assign(this,n)}}class t{constructor(n){Object.assign(this,n)}}class l{constructor(n){Object.assign(this,n)}}}}]);