(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{CVgx:function(e,i,t){"use strict";t.r(i),t.d(i,"ViewportExamplesModule",function(){return v});var n=t("XM0H"),r=t("ofXK"),o=t("tyNb"),c=t("mN63"),s=t("HIDt"),a=t("zB3U"),b=t("fXoL"),u=t("CsY6"),l=t("uRTS"),p=t("+vaC"),d=t("68Ek");const f=["sidebar"];function w(e,i){if(1&e&&(b.Tb(0,"button",3),b.Ob(1,"nx-icon",4),b.Jc(2),b.Sb()),2&e){const e=i.$implicit;b.kc("queryParams",e.query),b.Bb(1),b.kc("name",e.icon),b.Bb(1),b.Lc(" ",e.label," ")}}let y=(()=>{class e{constructor(e){this.viewportService=e,this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}],this.viewportServiceSubscription=this.viewportService.min(a.b.BREAKPOINT_MEDIUM).subscribe(e=>{e&&!this.sidebar.open?this.sidebar.expand():e||this.sidebar.open&&this.sidebar.close()})}ngOnDestroy(){this.viewportServiceSubscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(b.Nb(a.c))},e.\u0275cmp=b.Hb({type:e,selectors:[["viewport-change-example"]],viewQuery:function(e,i){if(1&e&&b.Nc(f,!0),2&e){let e;b.qc(e=b.bc())&&(i.sidebar=e.first)}},decls:6,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,i){1&e&&(b.Jc(0,"Change the size of the window in order to see how this side navigation is closed and expanded according to the viewport:\n"),b.Ob(1,"br"),b.Ob(2,"br"),b.Tb(3,"nx-sidebar",0,1),b.Hc(5,w,3,3,"button",2),b.Sb()),2&e&&(b.Bb(5),b.kc("ngForOf",i.actions))},directives:[u.a,r.p,l.a,o.f,o.g,p.a,d.a],styles:[""]}),e})(),v=(()=>{class e{static components(){return{"viewport-change":y}}}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(i){return new(i||e)},imports:[[s.a,c.c,o.i,r.c,n.a]]}),e})()}}]);