(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{AqTC:function(t,e,s){"use strict";s.d(e,"b",function(){return a}),s.d(e,"a",function(){return l.a});var i=s("ofXK"),n=s("hbct"),r=s("mN63"),o=s("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[i.c,n.e,r.c],n.e]}),t})();var l=s("nK+a");s("YcJe")},YcJe:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var i=s("FtGj"),n=s("fXoL"),r=s("u47x"),o=s("+vaC");let a=(()=>{class t{constructor(t,e,s){this._changeDetectorRef=t,this._elementRef=e,this._focusMonitor=s,this._currentIcon="password-show-o",this._pressed=!1,this._ariaLabel="Show password",this._focusMonitor.monitor(this._elementRef)}set ariaLabel(t){t!==this._ariaLabel&&(this._ariaLabel=t,this._changeDetectorRef.markForCheck())}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.control?this._currentIcon="password"===this.control.type?"password-show-o":"password-hide-o":console.warn("You need to pass an input as a control to the password toggle.")}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}toggleInputType(){this.control&&(this.control.type="password"===this.control.type?"text":"password",this._pressed=!this._pressed,this.toggleIcon(),this._changeDetectorRef.markForCheck())}toggleIcon(){this._currentIcon="password-show-o"===this._currentIcon?"password-hide-o":"password-show-o"}_onKeydown(t){!t||t.keyCode!==i.f&&t.keyCode!==i.o||this.toggleInputType()}get tabindex(){return this.control?this.control.disabled?-1:0:null}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(n.h),n.Pb(n.l),n.Pb(r.g))},t.\u0275cmp=n.Jb({type:t,selectors:[["nx-password-toggle"]],hostAttrs:["role","button"],hostVars:3,hostBindings:function(t,e){1&t&&n.cc("click",function(){return e.toggleInputType()})("keydown",function(t){return e._onKeydown(t)}),2&t&&n.Eb("aria-label",e.ariaLabel)("tabindex",e.tabindex)("aria-pressed",e._pressed)},inputs:{control:"control",ariaLabel:"ariaLabel"},decls:1,vars:1,consts:[["aria-hidden","true",3,"name"]],template:function(t,e){1&t&&n.Qb(0,"nx-icon",0),2&t&&n.mc("name",e._currentIcon)},directives:[o.a],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;height:24px;width:24px;cursor:pointer}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{color:buttonText!important}}[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:hover{color:var(--hover-primary)}.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{pointer-events:none}@media screen and (-ms-high-contrast:active){.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{color:GrayText!important}}"],changeDetection:0}),t})()},"nK+a":function(t,e,s){"use strict";s.d(e,"a",function(){return p}),s.d(e,"b",function(){return g});var i=s("8LU1"),n=s("nLfN"),r=s("fXoL"),o=s("XNiG"),a=s("hbct"),l=s("3Pt+"),d=s("zB3U"),h=s("EY2u");s("xgIS"),s("3UWI"),s("1G5W"),s("ofXK");const c=Object(n.f)({passive:!0});let u=(()=>{class t{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return h.a;const e=Object(i.d)(t),s=this._monitoredElements.get(e);if(s)return s.subject;const n=new o.a,r="cdk-text-field-autofilled",a=t=>{"cdk-text-field-autofill-start"!==t.animationName||e.classList.contains(r)?"cdk-text-field-autofill-end"===t.animationName&&e.classList.contains(r)&&(e.classList.remove(r),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!1}))):(e.classList.add(r),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",a,c),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:n,unlisten:()=>{e.removeEventListener("animationstart",a,c)}}),n}stopMonitoring(t){const e=Object(i.d)(t),s=this._monitoredElements.get(e);s&&(s.unlisten(),s.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(n.a),r.Zb(r.B))},t.\u0275prov=Object(r.Lb)({factory:function(){return new t(Object(r.Zb)(n.a),Object(r.Zb)(r.B))},token:t,providedIn:"root"}),t})();const p=new r.s("NX_INPUT_VALUE_ACCESSOR"),_=["button","checkbox","file","hidden","image","radio","range","reset","submit"],b=["date","datetime","datetime-local","month","time","week"].filter(t=>Object(n.e)().has(t));let f=0,g=(()=>{class t{constructor(t,e,s,i,n,r,a,l){this._elementRef=t,this._platform=e,this.ngControl=s,this._parentForm=i,this._parentFormGroup=n,this._errorStateMatcher=r,this._autofillMonitor=l,this._type="text",this._uid="nx-input-"+f++,this._disabled=!1,this._required=!1,this._readonly=!1,this.errorState=!1,this.controlType="nx-input",this.autofilled=!1,this.stateChanges=new o.a,this.focused=!1,this.id=this.id,this._inputValueAccessor=a||this._elementRef.nativeElement,this._previousNativeValue=this.value,"textarea"===this._elementRef.nativeElement.nodeName.toLowerCase()&&(this.controlType="textarea")}get id(){return this._id}set id(t){this._id=t||this._uid}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t)}get readonly(){return this._readonly}set readonly(t){this._readonly=Object(i.b)(t),this.stateChanges.next()}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=Object(i.b)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get required(){return this._required}set required(t){this._required=Object(i.b)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea()&&Object(n.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get placeholder(){return this.empty?this._placeholder:""}set placeholder(t){this._placeholder=t}ngOnInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}get elementRef(){return this._elementRef}_onInput(){}_focusChanged(t){t===this.focused||this.readonly||(this.focused=t,this.stateChanges.next())}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}updateErrorState(){const t=this.errorState,e=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);e!==t&&(this.errorState=e,this.stateChanges.next())}setDescribedByIds(t){this._ariaDescribedby=t.join(" ")}setAriaLabel(t){this._ariaLabel=t}_isBadInput(){const t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}_isNeverEmpty(){return b.indexOf(this._type)>-1}_isTextarea(){const t=this._elementRef.nativeElement;return!!t.nodeName&&"textarea"===t.nodeName.toLowerCase()}_validateType(){if(_.indexOf(this._type)>-1)throw new Error(`Input of type '${this._type}' is not supported`)}get shouldLabelFloat(){return this.focused||!this.empty||this.placeholder&&this.placeholder.length>0}_dirtyCheckNativeValue(){const t=this.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(r.l),r.Pb(n.a),r.Pb(l.o,10),r.Pb(l.r,8),r.Pb(l.i,8),r.Pb(d.a),r.Pb(p,10),r.Pb(u))},t.\u0275dir=r.Kb({type:t,selectors:[["input","nxInput",""],["textarea","nxInput",""],["select","nxInput",""]],hostVars:19,hostBindings:function(t,e){1&t&&r.cc("blur",function(){return e._focusChanged(!1)})("focus",function(){return e._focusChanged(!0)})("input",function(){return e._onInput()}),2&t&&(r.Eb("id",e.id)("disabled",e.disabled||null)("readonly",e.readonly||null)("required",e.required||null)("aria-label",e._ariaLabel||null)("aria-describedby",e._ariaDescribedby||null)("aria-invalid",e.errorState)("aria-required",e.required.toString())("placeholder",e.placeholder||null),r.Hb("c-input",!0)("is-filled",!1===e.empty)("is-disabled",e.disabled)("has-error",e.errorState)("is-focused",e.focused))},inputs:{_ariaLabel:["nxAriaLabel","_ariaLabel"],id:"id",value:"value",readonly:"readonly",disabled:"disabled",required:"required",type:"type",placeholder:"placeholder"},exportAs:["nxInput"],features:[r.Cb([{provide:a.c,useExisting:t}]),r.Bb]}),t})()}}]);