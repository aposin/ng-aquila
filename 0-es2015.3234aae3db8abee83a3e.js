(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{IqoM:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("fXoL"),s=n("8LU1"),a=n("u47x"),c=n("+vaC"),i=n("ofXK");const r=["closeButton"];function g(e,t){if(1&e){const e=o.Ub();o.Tb(0,"button",4,5),o.ac("click",function(){return o.vc(e),o.ec()._emitCloseEvent()}),o.Ob(2,"nx-icon",6),o.Sb()}if(2&e){const e=o.ec();o.Cb("aria-label",e.closeButtonLabel)}}const _=["*"];let l=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._focusMonitor=t,this._context="info",this._closable=!0,this._icon="info-circle",this._closeButtonLabel="Close dialog",this.closeEvent=new o.o}set context(e){e!==this._context&&(this._context=e,this._icon=this.getIconName(),this._changeDetectorRef.markForCheck())}get context(){return this._context}set closable(e){const t=Object(s.b)(e);t!==this._closable&&(this._closable=t,this._changeDetectorRef.markForCheck())}get closable(){return this._closable}get icon(){return this._icon}set closeButtonLabel(e){e!==this._closeButtonLabel&&(this._closeButtonLabel=e,this._changeDetectorRef.markForCheck())}get closeButtonLabel(){return this._closeButtonLabel}ngAfterViewInit(){this.closable&&this._focusMonitor.monitor(this._closeButton)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._closeButton)}_emitCloseEvent(){this.closeEvent.emit()}getIconName(){return"error"===this._context?"exclamation-triangle":"warning"===this._context?"exclamation-circle":"info-circle"}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.h),o.Nb(a.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-message-banner"]],viewQuery:function(e,t){if(1&e&&o.Nc(r,!0),2&e){let e;o.qc(e=o.bc())&&(t._closeButton=e.first)}},hostVars:8,hostBindings:function(e,t){2&e&&o.Fb("context-info","info"===t.context)("context-error","error"===t.context)("context-warning","warning"===t.context)("nx-message-banner--closable",t.closable)},inputs:{context:"context",closable:"closable",closeButtonLabel:"closeButtonLabel"},outputs:{closeEvent:"close"},exportAs:["nxMessageBanner"],ngContentSelectors:_,decls:5,vars:2,consts:[["size","s",1,"nx-message-banner__icon",3,"name"],["tabindex","0","class","nx-message-banner__close-icon","type","button",3,"click",4,"ngIf"],[1,"nx-message-banner__content-wrapper"],[1,"nx-message-banner__content"],["tabindex","0","type","button",1,"nx-message-banner__close-icon",3,"click"],["closeButton",""],["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&(o.jc(),o.Ob(0,"nx-icon",0),o.Hc(1,g,3,1,"button",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.ic(4),o.Sb(),o.Sb()),2&e&&(o.kc("name",t.icon),o.Bb(1),o.kc("ngIf",t.closable))},directives:[c.a,i.q],styles:["[_nghost-%COMP%]{font-size:var(--message-font-size);line-height:var(--message-line-height);font-weight:var(--message-font-weight);letter-spacing:var(--message-letter-spacing);color:var(--message-text-color);border-radius:var(--message-border-radius);width:100%;display:flex;align-items:flex-start;text-align:left;position:relative;border:1px solid;border-radius:var(--message-banner-border-radius);padding:15px;box-shadow:0 2px 4px rgba(65,65,65,.5)}@media (max-width:703px){[_nghost-%COMP%]{padding:31px;display:block}}[dir=rtl]   [_nghost-%COMP%]{text-align:right}.nx-message-banner__content-wrapper[_ngcontent-%COMP%]{max-width:100%}.context-info[_nghost-%COMP%]{border-color:var(--message-info-border-color);background-color:var(--message-info-background-color)}.context-info[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%]{color:var(--message-info-icon-color)}.context-error[_nghost-%COMP%]{border-color:var(--message-error-border-color);background-color:var(--message-error-background-color)}.context-error[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%]{color:var(--message-error-icon-color)}.context-warning[_nghost-%COMP%]{border-color:var(--message-warning-border-color);background-color:var(--message-warning-background-color)}.context-warning[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%]{color:var(--message-warning-icon-color)}@media (max-width:703px){.context-error[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%], .context-info[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%], .context-warning[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%]{display:inline;margin-left:31px}[dir=rtl]   .context-error[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%], [dir=rtl]   .context-info[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%], [dir=rtl]   .context-warning[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%] ~ .nx-message-banner__content-wrapper[_ngcontent-%COMP%]   .nx-message-banner__content[_ngcontent-%COMP%]{margin-left:0;margin-right:31px}}@media screen and (-ms-high-contrast:active){.context-error[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%], .context-info[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%], .context-warning[_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%]{color:windowText}}.nx-message-banner__icon[_ngcontent-%COMP%]{margin-right:16px}@media (max-width:703px){.nx-message-banner__icon[_ngcontent-%COMP%]{position:absolute}}[dir=rtl][_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message-banner__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:16px}.nx-message--closable[_nghost-%COMP%]{padding-right:39px}@media (max-width:703px){.nx-message--closable[_nghost-%COMP%]{padding-right:31px}}[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-right:23px;padding-left:39px}@media (max-width:703px){[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-left:31px}}.nx-message-banner__close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}.nx-message-banner__close-icon[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--message-close-icon-color);font-size:16px}[dir=rtl][_nghost-%COMP%]   .nx-message-banner__close-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message-banner__close-icon[_ngcontent-%COMP%]{right:auto;left:16px}.nx-message-banner__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.nx-message-banner__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),e})()},SqJ0:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return P});var o=n("ofXK"),s=n("mN63"),a=n("rDax"),c=n("+rOU"),i=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[o.c,s.c,a.f,c.h]]}),e})();n("Xe60"),n("IqoM");var g=n("R0Ic");const _={toastState:Object(g.n)("state",[Object(g.k)("initial, void, hidden",Object(g.l)({opacity:0,transform:"translateY(100%)"})),Object(g.k)("visible",Object(g.l)({opacity:1})),Object(g.m)("* => visible",Object(g.e)("300ms cubic-bezier(0, 0, 0.2, 1)",Object(g.l)({opacity:1,transform:"translateY(0)"}))),Object(g.m)("* => hidden",Object(g.e)("300ms cubic-bezier(0, 0, 0.2, 1)",Object(g.l)({opacity:0,transform:"translateY(200%)"})))])};var l=n("XNiG"),h=n("IzEk");class x{constructor(){this.politeness="polite",this.announcementMessage="",this.duration=3e3,this.context="info"}}class d{constructor(e){this.data=e}}var m=n("+vaC");function b(e,t){}function u(e,t){if(1&e&&(i.Rb(0),i.Jc(1),i.Qb()),2&e){const e=i.ec();i.Bb(1),i.Kc(e.data.data)}}let p=(()=>{class e extends c.a{constructor(e,t,n,o){super(),this._ngZone=e,this._changeDetectorRef=t,this.config=n,this.data=o,this._destroyed=!1,this._onExit=new l.a,this._onEnter=new l.a,this._animationState="void",this._context=this.config.context,this._setAriaLabels()}attachComponentPortal(e){return this._assertNotAttached(),this._portalOutlet.attachComponentPortal(e)}attachTemplatePortal(e){return this._assertNotAttached(),this._portalOutlet.attachTemplatePortal(e)}onAnimationEnd(e){const{fromState:t,toState:n}=e;if(("void"===n&&"void"!==t||"hidden"===n)&&this._completeExit(),"visible"===n){const e=this._onEnter;this._ngZone.run(()=>{e.next(),e.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){this._animationState="hidden"}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(h.a)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_assertNotAttached(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach message toastcontent after content is already attached")}_getIconName(){return"success"===this._context?"check-circle":"info-circle"}_setAriaLabels(){this._role="assertive"!==this.config.politeness||this.config.announcementMessage?"off"===this.config.politeness?null:"status":"alert"}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(i.A),i.Nb(i.h),i.Nb(x),i.Nb(d))},e.\u0275cmp=i.Hb({type:e,selectors:[["nx-message-toast"]],viewQuery:function(e,t){if(1&e&&i.Cc(c.c,!0),2&e){let e;i.qc(e=i.bc())&&(t._portalOutlet=e.first)}},hostVars:6,hostBindings:function(e,t){1&e&&i.Fc("@state.done",function(e){return t.onAnimationEnd(e)}),2&e&&(i.Cb("role",t._role),i.Gc("@state",t._animationState),i.Fb("context-info","info"===t._context)("context-success","success"===t._context))},features:[i.yb],decls:4,vars:2,consts:[["size","s",1,"nx-message__icon",3,"name"],[1,"nx-message__content-wrapper"],["cdkPortalOutlet",""],[4,"ngIf"]],template:function(e,t){1&e&&(i.Ob(0,"nx-icon",0),i.Tb(1,"div",1),i.Hc(2,b,0,0,"ng-template",2),i.Hc(3,u,2,1,"ng-container",3),i.Sb()),2&e&&(i.kc("name",t._getIconName()),i.Bb(3),i.kc("ngIf",t.data))},directives:[m.a,c.c,o.q],styles:["[_nghost-%COMP%]{font-size:var(--message-font-size);line-height:var(--message-line-height);font-weight:var(--message-font-weight);letter-spacing:var(--message-letter-spacing);color:var(--message-text-color);border-radius:var(--message-border-radius);width:100%;display:flex;align-items:flex-start;text-align:left;position:relative;border:1px solid;box-shadow:var(--message-box-shadow);max-width:352px;padding:23px 23px 23px 63px;margin:12px 0}@media (max-width:703px){[_nghost-%COMP%]{padding:31px;display:block}}[dir=rtl]   [_nghost-%COMP%]{text-align:right}@media (max-width:703px){[_nghost-%COMP%]{padding:23px 23px 23px 63px}}[dir=rtl]   [_nghost-%COMP%]{padding-left:23px;padding-right:63px}@media (max-width:703px){[dir=rtl]   [_nghost-%COMP%]{padding:23px 63px 23px 23px}}.context-info[_nghost-%COMP%]{border-color:var(--message-info-border-color);background-color:var(--message-info-background-color)}.context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-info-icon-color)}.context-success[_nghost-%COMP%]{border-color:var(--message-success-border-color);background-color:var(--message-success-background-color)}.context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-success-icon-color)}@media screen and (-ms-high-contrast:active){.context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], .context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:windowText}}.nx-message__icon[_ngcontent-%COMP%]{position:absolute;top:23px;left:23px}[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{left:auto;right:23px}"],data:{animation:[_.toastState]}}),e})();const f=Math.pow(2,31)-1;class O{constructor(e,t){this._overlayRef=t,this._afterDismissed=new l.a,this._afterOpened=new l.a,this.toastInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.toastInstance.exit(),clearTimeout(this._durationTimeoutId)}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,f))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._afterDismissed.next(),this._afterDismissed.complete()}afterDismissed(){return this._afterDismissed.asObservable()}afterOpened(){return this.toastInstance._onEnter}}var M=n("u47x");const C=new i.r("NX_MESSAGE_TOAST_DEFAULT_CONFIG");let P=(()=>{class e{constructor(e,t,n,o,s){this._overlay=e,this._injector=t,this._live=n,this._parentMessageToastService=o,this._defaultConfig=s,this._toastRefAtThisLevel=null}get _oldToastMessageRef(){const e=this._parentMessageToastService;return e?e._oldToastMessageRef:this._toastRefAtThisLevel}set _oldToastMessageRef(e){this._parentMessageToastService?this._parentMessageToastService._oldToastMessageRef=e:this._toastRefAtThisLevel=e}open(e,t){const n=Object.assign(Object.assign(Object.assign({},new x),this._defaultConfig),t),o=this._createOverlay(n),s=this._createInjector(n,new d(e),this._injector),a=new c.d(p,void 0,s),i=o.attach(a),r=new O(i.instance,o);return this._animateToast(r,n),this._oldToastMessageRef=r,this._oldToastMessageRef}openFromTemplate(e,t){const n=Object.assign(Object.assign(Object.assign({},new x),this._defaultConfig),t),o=this._createOverlay(n),s=this._attachToastComponent(o,n),a=new O(s,o),i=new c.i(e,null,a);return s.attachTemplatePortal(i),this._animateToast(a,n),this._oldToastMessageRef=a,this._oldToastMessageRef}_attachToastComponent(e,t){const n=this._createInjector(t,null,this._injector),o=new c.d(p,null,n),s=e.attach(o);return s.instance.config=t,s.instance}_createOverlay(e){const t=new a.d,n=this._overlay.position().global();return n.bottom("0"),n.centerHorizontally(),t.positionStrategy=n,this._overlay.create(t)}_animateToast(e,t){e.afterDismissed().subscribe(()=>{this._oldToastMessageRef===e&&(this._oldToastMessageRef=null),t.announcementMessage&&this._live.clear()}),this._oldToastMessageRef?(this._oldToastMessageRef.afterDismissed().subscribe(()=>{e.toastInstance.enter()}),this._oldToastMessageRef.dismiss()):e.toastInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),t.announcementMessage&&this._live.announce(t.announcementMessage,t.politeness)}_createInjector(e,t,n){const o=new WeakMap;return o.set(x,e),o.set(d,t),new c.g(n,o)}dismiss(){this._oldToastMessageRef&&this._oldToastMessageRef.dismiss()}ngOnDestroy(){this._toastRefAtThisLevel&&this._toastRefAtThisLevel.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(i.Xb(a.c),i.Xb(i.s),i.Xb(M.i),i.Xb(e,12),i.Xb(C,8))},e.\u0275prov=i.Jb({token:e,factory:e.\u0275fac,providedIn:r}),e})()},Xe60:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var o=n("fXoL"),s=n("8LU1"),a=n("u47x"),c=n("ofXK"),i=n("+vaC");const r=["closeButton"];function g(e,t){if(1&e&&o.Ob(0,"nx-icon",4),2&e){const e=o.ec();o.kc("name",e.icon)}}function _(e,t){if(1&e){const e=o.Ub();o.Tb(0,"button",5,6),o.ac("click",function(){return o.vc(e),o.ec()._emitCloseEvent()}),o.Ob(2,"nx-icon",7),o.Sb()}if(2&e){const e=o.ec();o.Cb("aria-label",e.closeButtonLabel)}}const l=["*"];let h=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._focusMonitor=t,this._context="regular",this._closable=!1,this._closeButtonLabel="Close dialog",this.closeEvent=new o.o}set context(e){e!==this._context&&(this._context=e,this._icon=this.getIconName(),this._changeDetectorRef.markForCheck())}get context(){return this._context}set closable(e){const t=Object(s.b)(e);t!==this._closable&&(this._closable=t,this._changeDetectorRef.markForCheck())}get closable(){return this._closable}get icon(){return this._icon}set closeButtonLabel(e){e!==this._closeButtonLabel&&(this._closeButtonLabel=e,this._changeDetectorRef.markForCheck())}get closeButtonLabel(){return this._closeButtonLabel}ngAfterViewInit(){this.closable&&this._focusMonitor.monitor(this._closeButton)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._closeButton)}_emitCloseEvent(){this.closeEvent.emit()}getIconName(){return"info"===this._context?"info-circle":"error"===this._context?"exclamation-triangle":"success"===this._context?"check-circle":"warning"===this._context?"exclamation-circle":""}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.h),o.Nb(a.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-message"]],viewQuery:function(e,t){if(1&e&&o.Nc(r,!0),2&e){let e;o.qc(e=o.bc())&&(t._closeButton=e.first)}},hostVars:10,hostBindings:function(e,t){2&e&&o.Fb("context-info","info"===t.context)("context-error","error"===t.context)("context-success","success"===t.context)("context-warning","warning"===t.context)("nx-message--closable",t.closable)},inputs:{context:["nxContext","context"],closable:"closable",closeButtonLabel:"closeButtonLabel"},outputs:{closeEvent:"close"},exportAs:["nxMessage"],ngContentSelectors:l,decls:5,vars:2,consts:[["class","nx-message__icon","size","s",3,"name",4,"ngIf"],["tabindex","0","class","nx-message__close-icon","type","button",3,"click",4,"ngIf"],[1,"nx-message__content-wrapper"],[1,"nx-message__content"],["size","s",1,"nx-message__icon",3,"name"],["tabindex","0","type","button",1,"nx-message__close-icon",3,"click"],["closeButton",""],["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&(o.jc(),o.Hc(0,g,1,1,"nx-icon",0),o.Hc(1,_,3,1,"button",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.ic(4),o.Sb(),o.Sb()),2&e&&(o.kc("ngIf","regular"!==t.context),o.Bb(1),o.kc("ngIf",t.closable))},directives:[c.q,i.a],styles:["[_nghost-%COMP%]{font-size:var(--message-font-size);line-height:var(--message-line-height);font-weight:var(--message-font-weight);letter-spacing:var(--message-letter-spacing);color:var(--message-text-color);border-radius:var(--message-border-radius);width:100%;display:flex;align-items:flex-start;text-align:left;position:relative;border:1px solid;padding:23px}@media (max-width:703px){[_nghost-%COMP%]{padding:31px;display:block}}[dir=rtl]   [_nghost-%COMP%]{text-align:right}.nx-message__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%], .context-regular[_nghost-%COMP%]{border-color:var(--message-regular-border-color);background-color:var(--message-regular-background-color)}.context-info[_nghost-%COMP%]{border-color:var(--message-info-border-color);background-color:var(--message-info-background-color)}.context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-info-icon-color)}.context-error[_nghost-%COMP%]{border-color:var(--message-error-border-color);background-color:var(--message-error-background-color)}.context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-error-icon-color)}.context-success[_nghost-%COMP%]{border-color:var(--message-success-border-color);background-color:var(--message-success-background-color)}.context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-success-icon-color)}.context-warning[_nghost-%COMP%]{border-color:var(--message-warning-border-color);background-color:var(--message-warning-background-color)}.context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-warning-icon-color)}@media (max-width:703px){.context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], .context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], .context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], .context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%]{display:inline;margin-left:31px}[dir=rtl]   .context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], [dir=rtl]   .context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], [dir=rtl]   .context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%], [dir=rtl]   .context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%] ~ .nx-message__content-wrapper[_ngcontent-%COMP%]   .nx-message__content[_ngcontent-%COMP%]{margin-left:0;margin-right:31px}}@media screen and (-ms-high-contrast:active){.context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], .context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], .context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], .context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:windowText}}.nx-message__icon[_ngcontent-%COMP%]{margin-right:16px}@media (max-width:703px){.nx-message__icon[_ngcontent-%COMP%]{position:absolute}}[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:16px}.nx-message--closable[_nghost-%COMP%]{padding-right:39px}@media (max-width:703px){.nx-message--closable[_nghost-%COMP%]{padding-right:31px}}[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-right:23px;padding-left:39px}@media (max-width:703px){[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-left:31px}}.nx-message__close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}.nx-message__close-icon[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--message-close-icon-color);font-size:16px}[dir=rtl][_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%]{right:auto;left:16px}.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),e})()}}]);