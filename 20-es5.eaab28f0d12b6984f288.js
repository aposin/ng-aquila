!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+IXF":function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"a",function(){return u.a}),n.d(t,"b",function(){return u.b}),n.d(t,"e",function(){return b}),n.d(t,"d",function(){return h.a});var r,a,i=n("ofXK"),c=n("mN63"),s=n("SqJ0"),l=n("fXoL"),d=((r=function e(){o(this,e)}).\u0275mod=l.Lb({type:r}),r.\u0275inj=l.Kb({factory:function(e){return new(e||r)},imports:[[i.c,c.c,s.a]]}),r),u=n("aXeq"),b=((a=function e(){o(this,e)}).\u0275mod=l.Lb({type:a}),a.\u0275inj=l.Kb({factory:function(e){return new(e||a)},imports:[[i.c]]}),a),h=n("Q3ZH")},"/sJ9":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,a=n("fXoL"),i=((r=function e(){o(this,e)}).\u0275mod=a.Lb({type:r}),r.\u0275inj=a.Kb({factory:function(e){return new(e||r)}}),r);n("LktG")},LktG:function(t,n,a){"use strict";a.d(n,"a",function(){return l});var i=a("fXoL"),c=["nxCopytext",""],s=["*"],l=function(){var t=function(){function t(){o(this,t),this.type="normal",this.negative=!1}return r(t,[{key:"classNames",set:function(t){if(this._classNames!==t){this._classNames=t;var n=e(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],r=void 0===n?null:n;this.type=r,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&i.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:c,ngContentSelectors:s,decls:1,vars:0,template:function(e,t){1&e&&(i.jc(),i.ic(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t}()},Q3ZH:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n("fXoL"),i=n("8LU1"),c=n("XNiG"),s=["*"],l=0,d=new a.r("LABEL_DEFAULT_OPTIONS"),u=function(){var e=function(){function e(t){o(this,e),this._defaultOptions=t,this._stateChanges=new c.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+l++}return r(e,[{key:"disabled",set:function(e){this._disabled=Object(i.b)(e),this._stateChanges.next()},get:function(){return this._disabled}},{key:"negative",set:function(e){this._negative=Object(i.b)(e),this._stateChanges.next()},get:function(){return this._negative}},{key:"id",set:function(e){this._id!==e&&(this._id=e)},get:function(){return this._id}},{key:"size",set:function(e){this._size=e,this._stateChanges.next()},get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Nb(d,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(a.Cb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),a.Fb("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:s,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(a.jc(),a.Tb(0,"label",0),a.ic(1),a.Sb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e}()},aXeq:function(e,t,n){"use strict";n.d(t,"a",function(){return v}),n.d(t,"b",function(){return _});var a=n("fXoL"),i=n("8LU1"),c=n("XNiG"),s=n("1G5W"),l=n("ofXK"),d=n("+vaC"),u=n("Xe60");function b(e,t){1&e&&a.Ob(0,"nx-icon",7),2&e&&a.kc("name","exclamation-triangle")}function h(e,t){if(1&e&&(a.Rb(0),a.Hc(1,b,1,1,"nx-icon",3),a.Tb(2,"div",4),a.Tb(3,"div",5),a.Pb(4,6),a.Sb(),a.Sb(),a.Qb()),2&e){var n=a.ec(),r=a.rc(3);a.Bb(1),a.kc("ngIf",n.showIcon),a.Bb(3),a.kc("ngTemplateOutlet",r)}}function g(e,t){if(1&e&&(a.Tb(0,"nx-message",8),a.Pb(1,6),a.Sb()),2&e){a.ec();var n=a.rc(3);a.Bb(1),a.kc("ngTemplateOutlet",n)}}function f(e,t){1&e&&a.ic(0)}var p=["*"],m=0,v=new a.r("ERROR_DEFAULT_OPTIONS"),_=function(){var e=function(){function e(t,n){var r=this;o(this,e),this._changeDetectorRef=t,this._defaultOptions=n,this._showIcon=!0,this._id="nx-error-"+m++,this._destroyed=new c.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(s.a)(this._destroyed)).subscribe(function(){r._changeDetectorRef.markForCheck()})}return r(e,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"showIcon",set:function(e){this._showIcon=Object(i.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._showIcon}},{key:"id",set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())},get:function(){return this._id}},{key:"appearance",set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())},get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Nb(a.h),a.Nb(v,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(a.Cb("role","alert")("id",t.id),a.Fb("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:p,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(a.jc(),a.Hc(0,h,5,2,"ng-container",0),a.Hc(1,g,2,1,"nx-message",1),a.Hc(2,f,1,0,"ng-template",null,2,a.Ic)),2&e&&(a.kc("ngIf","text"===t.appearance),a.Bb(1),a.kc("ngIf","message"===t.appearance))},directives:[l.q,l.u,d.a,u.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e}()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("tgBs"),a=n("/sJ9"),i=n("eV8M"),c=n("gkbm"),s=n("ofXK"),l=n("3Pt+"),d=n("fXoL"),u=function(){var e=function e(){o(this,e)};return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[],s.c,l.k,l.v,c.b,i.a,a.a,r.a]}),e}()},xkF3:function(e,t,n){"use strict";n.r(t),n.d(t,"CardExamplesModule",function(){return se});var a,i,c=n("tyNb"),s=n("yjM7"),l=n("mN63"),d=n("fXoL"),u=n("u47x"),b=["*"],h=((a=function(){function e(t,n){o(this,e),this._elementRef=t,this._focusMonitor=n,this._focusMonitor.monitor(this._elementRef)}return r(e,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),e}()).\u0275fac=function(e){return new(e||a)(d.Nb(d.l),d.Nb(u.g))},a.\u0275cmp=d.Hb({type:a,selectors:[["nx-card"]],hostAttrs:[1,"nx-card"],ngContentSelectors:b,decls:1,vars:0,template:function(e,t){1&e&&(d.jc(),d.ic(0))},styles:["[_nghost-%COMP%]{background:var(--card-background-color);border:var(--card-border-width) solid var(--card-border-color);border-radius:var(--card-border-radius);box-shadow:none;display:inline-block;padding:23px;transition:background-color .2s ease,box-shadow .2s ease}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),a),g=n("ofXK"),f=n("+IXF"),p=((i=function e(){o(this,e)}).\u0275mod=d.Lb({type:i}),i.\u0275inj=d.Kb({factory:function(e){return new(e||i)},imports:[[g.c,l.c,f.c],f.c]}),i),m=n("XNiG"),v=n("8LU1"),_=function e(t,n,r){o(this,e),this.checked=t,this.value=n,this.card=r},x=n("zB3U"),C=n("3Pt+"),k=n("+vaC"),y=["input"];function O(e,t){1&e&&d.Pb(0)}function M(e,t){1&e&&d.ic(0,0,["*ngIf","errorState"])}function P(e,t){1&e&&(d.Ob(0,"nx-icon",5),d.Tb(1,"div",6),d.ic(2,1),d.Sb(),d.Tb(3,"div",7),d.ic(4,2),d.Sb(),d.Tb(5,"div",8),d.ic(6,3),d.Sb())}var w,S,T,q,F,N,I=[[["nx-error"]],[["nx-card-header"]],"*",[["nx-card-footer"]]],L=["nx-error","nx-card-header","*","nx-card-footer"],j=0,J=((w=function(){function e(t,n,r,a,i,c){o(this,e),this._changeDetectorRef=t,this._errorStateMatcher=n,this.ngControl=r,this._parentForm=a,this._parentFormGroup=i,this._focusMonitor=c,this._id=(j++).toString(),this._checked=!1,this._disabled=!1,this._negative=!1,this._tabindex="0",this._errorListIds="",this.errorState=!1,this.stateChanges=new m.a,this.selectionChange=new d.o,this.checkedChange=new d.o,this.onChangeCallback=function(e){},this.onTouchedCallback=function(e){},this.ngControl&&(this.ngControl.valueAccessor=this)}return r(e,[{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._nativeInput)}},{key:"ngAfterContentInit",value:function(){var e=this;this._errorList.changes.subscribe(function(t){e._errorListIds=t.map(function(e){return e.id}).join(" "),e._changeDetectorRef.markForCheck()}),this._errorListIds=this._errorList.map(function(e){return e.id}).join(" ")}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._nativeInput)}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"updateErrorState",value:function(){var e=this.errorState,t=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t,this.stateChanges.next())}},{key:"toggle",value:function(){this.disabled||(this.checked=!this.checked)}},{key:"_onInputClick",value:function(e){e.stopPropagation(),this.disabled||(this.toggle(),this._emitChangeEvent())}},{key:"_onInteractionEvent",value:function(e){e.stopPropagation()}},{key:"_emitChangeEvent",value:function(){var e=new _(this.checked,this.value,this);this.onChangeCallback(this.checked),this.selectionChange.emit(e),this.checkedChange.emit(this.checked)}},{key:"id",set:function(e){e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())},get:function(){return"nx-selectable-card-"+this._id}},{key:"checked",set:function(e){var t=Object(v.b)(e);t!==this._checked&&(this._checked=t,this._changeDetectorRef.markForCheck())},get:function(){return this._checked}},{key:"value",get:function(){return this._value},set:function(e){e&&(this._value=e),this._changeDetectorRef.markForCheck()}},{key:"disabled",set:function(e){var t=Object(v.b)(e);t!==this._disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())},get:function(){return this._disabled||null}},{key:"negative",set:function(e){var t=Object(v.b)(e);t!==this._negative&&(this._negative=t,this._changeDetectorRef.markForCheck())},get:function(){return this._negative||null}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(v.b)(e)}},{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"tabindex",get:function(){return this.disabled?"-1":this._tabindex},set:function(e){this._tabindex=e}}]),e}()).\u0275fac=function(e){return new(e||w)(d.Nb(d.h),d.Nb(x.a),d.Nb(C.o,10),d.Nb(C.r,8),d.Nb(C.i,8),d.Nb(u.g))},w.\u0275cmp=d.Hb({type:w,selectors:[["nx-selectable-card"]],contentQueries:function(e,t,n){var r;1&e&&d.Gb(n,f.b,!1),2&e&&d.qc(r=d.bc())&&(t._errorList=r)},viewQuery:function(e,t){var n;1&e&&d.Nc(y,!0),2&e&&d.qc(n=d.bc())&&(t._nativeInput=n.first)},hostVars:9,hostBindings:function(e,t){2&e&&(d.Cb("aria-invalid",t.errorState)("role","checkbox")("aria-checked",t.checked),d.Fb("is-checked",t.checked)("is-disabled",t.disabled)("has-error",t.errorState))},inputs:{id:"id",checked:"checked",value:"value",disabled:"disabled",negative:"negative",required:"required",name:"name",tabindex:"tabindex"},outputs:{selectionChange:"selectionChange",checkedChange:"checkedChange"},ngContentSelectors:L,decls:7,vars:15,consts:[["type","checkbox",3,"checked","value","required","change","blur","click"],["input",""],[4,"ngTemplateOutlet"],[4,"ngIf"],["selectableCardContent",""],["name","check-circle","size","s",1,"checked-icon"],[1,"nx-selectable-card--headline"],[1,"nx-selectable-card--content"],[1,"nx-selectable-card--footer"]],template:function(e,t){if(1&e&&(d.jc(I),d.Tb(0,"input",0,1),d.ac("change",function(e){return t._onInteractionEvent(e)})("blur",function(e){return t.onTouchedCallback(e)})("click",function(e){return t._onInputClick(e)}),d.Sb(),d.Tb(2,"label"),d.Hc(3,O,1,0,"ng-container",2),d.Sb(),d.Hc(4,M,1,0,"ng-content",3),d.Hc(5,P,7,0,"ng-template",null,4,d.Ic)),2&e){var n=d.rc(6);d.kc("checked",t.checked)("value",t.value||null)("required",t.required),d.Cb("disabled",t.disabled)("id",t.id)("name",t.name)("aria-required",t.required)("tabindex",t.tabindex)("aria-invalid",t.errorState)("aria-describedby",t._errorListIds||null),d.Bb(2),d.Fb("is-disabled",t.disabled),d.Cb("for",t.id),d.Bb(1),d.kc("ngTemplateOutlet",n),d.Bb(1),d.kc("ngIf",t.errorState)}},directives:[g.u,g.q,k.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;height:0;width:0;overflow:hidden;opacity:0}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border:var(--selectable-card-border-width) solid var(--selectable-card-border-color);display:block;position:relative;padding:16px;cursor:pointer;width:100%;border-radius:var(--selectable-card-border-radius);background:var(--selectable-card-background-color)}[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]::-moz-focus-inner{border:0}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-selected-color);border-color:var(--selectable-card-border-selected-color)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]     nx-icon.checked-icon{display:block}[_nghost-%COMP%]   label[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-hover-color);border-color:var(--selectable-card-border-hover-color)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-hover-color)}@media (hover:none){[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-color);border-color:var(--selectable-card-border-color)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-color)}}[_nghost-%COMP%]     nx-icon.checked-icon{position:absolute;right:16px;top:16px;display:none;color:var(--selectable-card-icon-color)}[dir=rtl]   [_nghost-%COMP%]     nx-icon.checked-icon{right:auto;left:16px}[_nghost-%COMP%]     nx-error:not(.nx-error--message){margin-top:8px}[_nghost-%COMP%]     nx-error.nx-error--message{margin-top:12px}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:var(--selectable-card-border-disabled-color);cursor:not-allowed}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-disabled-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-disabled-selected-color);border-color:var(--selectable-card-border-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]     nx-icon.checked-icon{display:block;color:var(--selectable-card-icon-diabled-color)}.has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{border-color:var(--selectable-card-border-error-color)}input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:buttonText}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-width:3px;padding:14px;border-color:highlight}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:GrayText;color:GrayText}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]     nx-icon.checked-icon, .is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]     nx-icon.checked-icon{color:GrayText}}"],changeDetection:0}),w),D=["*"],z=((S=function e(){o(this,e)}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=d.Hb({type:S,selectors:[["nx-card-header"]],ngContentSelectors:D,decls:1,vars:0,template:function(e,t){1&e&&(d.jc(),d.ic(0))},encapsulation:2,changeDetection:0}),S),H=["*"],G=((T=function e(){o(this,e)}).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=d.Hb({type:T,selectors:[["nx-card-footer"]],ngContentSelectors:H,decls:1,vars:0,template:function(e,t){1&e&&(d.jc(),d.ic(0))},encapsulation:2,changeDetection:0}),T),R=n("eC/v"),A=n("LktG"),B=((q=function e(){o(this,e)}).\u0275fac=function(e){return new(e||q)},q.\u0275cmp=d.Hb({type:q,selectors:[["card-example"]],decls:7,vars:0,consts:[["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxCopytext","normal"]],template:function(e,t){1&e&&(d.Tb(0,"nx-card"),d.Tb(1,"h3",0),d.Jc(2,"Headline"),d.Sb(),d.Tb(3,"p",1),d.Jc(4,"2,99\u20ac"),d.Sb(),d.Tb(5,"p",2),d.Jc(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate explicabo ad iste, ratione cupiditate eaque sapiente odit, accusamus placeat ipsam dolor sint voluptatibus nam? Recusandae accusamus iste sapiente necessitatibus? "),d.Sb(),d.Sb())},directives:[h,R.a,A.a],styles:[""]}),q),X=n("JUL+"),E=((N=function e(){o(this,e)}).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=d.Hb({type:N,selectors:[["card-header-footer-example"]],decls:24,vars:0,consts:[[1,"nx-margin-bottom-s"],["nxHeadline","subsection-small"],["nxCopytext","normal",1,"nx-margin-bottom-2m"],["routerLink","#"],["name","arrow-right"],["checked",""]],template:function(e,t){1&e&&(d.Tb(0,"nx-card",0),d.Tb(1,"nx-card-header"),d.Tb(2,"h3",1),d.Jc(3,"Card headline"),d.Sb(),d.Ob(4,"hr"),d.Sb(),d.Tb(5,"p",2),d.Jc(6,"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"),d.Sb(),d.Tb(7,"nx-card-footer"),d.Tb(8,"nx-link"),d.Tb(9,"a",3),d.Ob(10,"nx-icon",4),d.Jc(11," Find out more "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(12,"nx-selectable-card",5),d.Tb(13,"nx-card-header"),d.Tb(14,"h3",1),d.Jc(15,"Selectable card headline"),d.Sb(),d.Ob(16,"hr"),d.Sb(),d.Tb(17,"p",2),d.Jc(18,"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"),d.Sb(),d.Tb(19,"nx-card-footer"),d.Tb(20,"nx-link"),d.Tb(21,"a",3),d.Ob(22,"nx-icon",4),d.Jc(23," Find out more "),d.Sb(),d.Sb(),d.Sb(),d.Sb())},directives:[h,z,R.a,A.a,G,X.a,c.h,k.a,J],styles:[""]}),N),K=((F=function e(){o(this,e)}).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=d.Hb({type:F,selectors:[["selectable-card-basic-example"]],decls:3,vars:0,template:function(e,t){1&e&&(d.Tb(0,"nx-selectable-card"),d.Tb(1,"p"),d.Jc(2,"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"),d.Sb(),d.Sb())},directives:[J],styles:[""]}),F),U=n("aQnR"),V=n("BQ2b"),Q=n("5/jY"),Z=n("LTpZ");function W(e,t){if(1&e&&(d.Tb(0,"div",8),d.Tb(1,"nx-selectable-card",9),d.Tb(2,"p"),d.Jc(3," Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit "),d.Sb(),d.Sb(),d.Sb()),2&e){var n=t.index;d.Bb(1),d.kc("formControlName",n)}}var Y,$,ee,te=((Y=function(){function e(t){o(this,e),this.fb=t,this.cardArray=new C.b([new C.e(!1),new C.e(!1),new C.e(!1)]),this.myFormGroup=this.fb.group({cards:this.cardArray})}return r(e,[{key:"addNewCard",value:function(){this.cardArray.push(new C.e(!1))}},{key:"removeFirstCard",value:function(){this.cardArray.removeAt(0)}},{key:"cards",get:function(){return this.myFormGroup.get("cards")}}]),e}()).\u0275fac=function(e){return new(e||Y)(d.Nb(C.d))},Y.\u0275cmp=d.Hb({type:Y,selectors:[["selectable-card-dynamic-example"]],decls:14,vars:5,consts:[["nxLayout","grid"],["nxRow","",1,"nx-margin-bottom-s"],["nxCol","12,12,3"],["nxButton","primary small","type","button",3,"click"],["nxButton","secondary small","type","button",3,"click"],[3,"formGroup"],["nxRow","","formArrayName","cards"],["nxCol","12,12,12,3",4,"ngFor","ngForOf"],["nxCol","12,12,12,3"],[1,"nx-margin-bottom-xs",3,"formControlName"]],template:function(e,t){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"button",3),d.ac("click",function(){return t.addNewCard()}),d.Jc(4," Add new card "),d.Sb(),d.Sb(),d.Tb(5,"div",2),d.Tb(6,"button",4),d.ac("click",function(){return t.removeFirstCard()}),d.Jc(7," Remove first card "),d.Sb(),d.Sb(),d.Sb(),d.Tb(8,"form",5),d.Tb(9,"div",6),d.Hc(10,W,4,1,"div",7),d.Sb(),d.Tb(11,"p"),d.Jc(12),d.fc(13,"json"),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(8),d.kc("formGroup",t.myFormGroup),d.Bb(2),d.kc("ngForOf",t.cards.controls),d.Bb(2),d.Lc("Form value: ",d.gc(13,3,t.myFormGroup.value),""))},directives:[U.a,V.a,Q.a,Z.a,C.A,C.q,C.i,C.c,g.p,J,C.p,C.g],pipes:[g.h],styles:[""]}),Y),ne=n("aXeq"),re=((ee=function(){function e(t){o(this,e),this.fb=t,this.createForm()}return r(e,[{key:"createForm",value:function(){this.testForm=this.fb.group({selectableCardTestReactive:[!1,C.y.requiredTrue]})}}]),e}()).\u0275fac=function(e){return new(e||ee)(d.Nb(C.d))},ee.\u0275cmp=d.Hb({type:ee,selectors:[["selectable-card-reactive-example"]],decls:12,vars:7,consts:[[3,"formGroup"],["formControlName","selectableCardTestReactive"],["appearance","text"]],template:function(e,t){1&e&&(d.Tb(0,"form",0),d.Tb(1,"nx-selectable-card",1),d.Tb(2,"p"),d.Jc(3,"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"),d.Sb(),d.Tb(4,"nx-error",2),d.Jc(5," This card must be selected. "),d.Sb(),d.Sb(),d.Tb(6,"p"),d.Jc(7),d.fc(8,"json"),d.Sb(),d.Tb(9,"p"),d.Jc(10),d.fc(11,"json"),d.Sb(),d.Sb()),2&e&&(d.kc("formGroup",t.testForm),d.Bb(7),d.Lc("Form value: ",d.gc(8,3,t.testForm.value),""),d.Bb(3),d.Lc("Form status: ",d.gc(11,5,t.testForm.status),""))},directives:[C.A,C.q,C.i,J,C.p,C.g,ne.b],pipes:[g.h],styles:[""]}),ee),oe=(($=function(){function e(t){o(this,e),this.fb=t,this.createForm()}return r(e,[{key:"createForm",value:function(){this.formGroup=this.fb.group({errorCard:[!1,C.y.requiredTrue],errorCard2:[!0,ae]}),this.formGroup.markAllAsTouched()}}]),e}()).\u0275fac=function(e){return new(e||$)(d.Nb(C.d))},$.\u0275cmp=d.Hb({type:$,selectors:[["selectable-card-states-example"]],decls:23,vars:1,consts:[[1,"nx-margin-bottom-xs"],["checked","",1,"nx-margin-bottom-xs"],["disabled","",1,"nx-margin-bottom-xs"],["disabled","","checked","",1,"nx-margin-bottom-xs"],[3,"formGroup"],["required","","formControlName","errorCard",1,"nx-margin-bottom-xs"],["appearance","text"],["required","","formControlName","errorCard2",1,"nx-margin-bottom-xs"]],template:function(e,t){1&e&&(d.Tb(0,"nx-selectable-card",0),d.Tb(1,"p"),d.Jc(2,"Default selectable card"),d.Sb(),d.Sb(),d.Tb(3,"nx-selectable-card",1),d.Tb(4,"p"),d.Jc(5,"Checked selectable card"),d.Sb(),d.Sb(),d.Tb(6,"nx-selectable-card",2),d.Tb(7,"p"),d.Jc(8,"Disabled selectable card"),d.Sb(),d.Sb(),d.Tb(9,"nx-selectable-card",3),d.Tb(10,"p"),d.Jc(11,"Disabled and checked selectable card"),d.Sb(),d.Sb(),d.Tb(12,"form",4),d.Tb(13,"nx-selectable-card",5),d.Tb(14,"p"),d.Jc(15,"Selectable card with error"),d.Sb(),d.Tb(16,"nx-error",6),d.Jc(17," This card must be selected. "),d.Sb(),d.Sb(),d.Tb(18,"nx-selectable-card",7),d.Tb(19,"p"),d.Jc(20,"Checked selectable card with error"),d.Sb(),d.Tb(21,"nx-error",6),d.Jc(22," This card must not be selected. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(12),d.kc("formGroup",t.formGroup))},directives:[J,C.A,C.q,C.i,C.w,C.p,C.g,ne.b],styles:[""]}),$);function ae(e){return e.value?{invalid:!0}:null}var ie,ce=n("ierq"),se=((ie=function(){function e(){o(this,e)}return r(e,null,[{key:"components",value:function(){return{card:B,"card-header-footer":E,"selectable-card-basic":K,"selectable-card-dynamic":te,"selectable-card-reactive":re,"selectable-card-states":oe}}}]),e}()).\u0275mod=d.Lb({type:ie}),ie.\u0275inj=d.Kb({factory:function(e){return new(e||ie)},imports:[[p,l.c,s.a,ce.a,c.i]]}),ie)}}])}();