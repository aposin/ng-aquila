!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],c=!0,o=!1,i=void 0;try{for(var r,a=n[Symbol.iterator]();!(c=(r=a.next()).done)&&(t.push(r.value),!e||t.length!==e);c=!0);}catch(h){o=!0,i=h}finally{try{c||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}function t(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function c(n,e,c){return e&&t(n.prototype,e),c&&t(n,c),n}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/sJ9":function(n,e,t){"use strict";t.d(e,"a",function(){return r});var c,i=t("fXoL"),r=((c=function n(){o(this,n)}).\u0275mod=i.Lb({type:c}),c.\u0275inj=i.Kb({factory:function(n){return new(n||c)}}),c);t("LktG")},BrvL:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var c,i=t("ofXK"),r=t("mN63"),a=t("+IXF"),h=t("GU7r"),_=t("fXoL"),l=((c=function n(){o(this,n)}).\u0275mod=_.Lb({type:c}),c.\u0275inj=_.Kb({factory:function(n){return new(n||c)},imports:[[i.c,r.c,h.c],a.e,a.c]}),c);t("lKbI")},LktG:function(e,t,i){"use strict";i.d(t,"a",function(){return _});var r=i("fXoL"),a=["nxCopytext",""],h=["*"],_=function(){var e=function(){function e(){o(this,e),this.type="normal",this.negative=!1}return c(e,[{key:"classNames",set:function(e){if(this._classNames!==e){this._classNames=e;var t=n(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],c=void 0===t?null:t;this.type=c,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(n,e){2&n&&r.Fb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:a,ngContentSelectors:h,decls:1,vars:0,template:function(n,e){1&n&&(r.jc(),r.ic(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e}()},lKbI:function(n,e,t){"use strict";t.d(e,"b",function(){return y}),t.d(e,"a",function(){return S});var i=t("8LU1"),r=t("fXoL"),a=t("XNiG"),h=t("+IXF"),_=t("zB3U"),l=t("3Pt+"),b=t("ofXK"),x=t("u47x"),s=t("GU7r"),g=t("+vaC");function k(n,e){1&n&&(r.Tb(0,"div",3),r.ic(1,2),r.Sb())}var d=[[["nx-label"]],"*",[["nx-error"]]],u=["nx-label","*","nx-error"],C=["checkboxLabelWrapper"],O=["input"];function M(n,e){1&n&&r.Ob(0,"nx-icon",8)}function P(n,e){1&n&&r.Ob(0,"div",9)}var v=["*"],p=0,f=function n(e,t,c){o(this,n),this.checked=e,this.value=t,this.checkbox=c},m=function n(e,t){o(this,n),this.value=e,this.checkboxGroup=t},y=function(){var n=function(){function n(e,t,c,i,h){o(this,n),this._changeDetectorRef=e,this._errorStateMatcher=t,this._parentForm=c,this._parentFormGroup=i,this.ngControl=h,this._stateChanges=new a.a,this.errorState=!1,this.selectionChange=new r.o,this._id="nx-checkbox-group-"+p++,this._disabled=!1,this._negative=!1,this._onChange=function(){},this._onTouched=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return c(n,[{key:"ngAfterContentInit",value:function(){var n=this;setTimeout(function(){n._updateSelectedCheckboxFromValue()}),this._checkboxes.changes.subscribe(function(){n._value=n._checkboxes.filter(function(n){return n.checked}).map(function(n){return n.value}),n.ngControl&&n.ngControl.control.setValue(n._value),n._updateSelectedCheckboxFromValue()})}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"writeValue",value:function(n){this._value!==n&&(this._value=n,this._updateSelectedCheckboxFromValue())}},{key:"registerOnChange",value:function(n){this._onChange=n}},{key:"registerOnTouched",value:function(n){this._onTouched=n}},{key:"setDisabledState",value:function(n){this.disabled=n}},{key:"_updateSelectedCheckboxFromValue",value:function(){var n=this;this._checkboxes&&this._checkboxes.length&&this._value&&this._value.length&&this._checkboxes.map(function(e){e.checked=-1!==n._value.indexOf(e.value)})}},{key:"change",value:function(n){var e=this._checkboxes.filter(function(n){return n.checked}).map(function(n){return n.value});this._onChange(e),this._onTouched&&this._onTouched(),this.selectionChange.emit(new m(e,this))}},{key:"updateErrorState",value:function(){var n=this.errorState,e=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);e!==n&&(this.errorState=e,this._changeDetectorRef.markForCheck())}},{key:"id",set:function(n){this._id!==n&&(this._id=n,this._changeDetectorRef.markForCheck())},get:function(){return this._id}},{key:"name",set:function(n){this._name=n,this._changeDetectorRef.markForCheck()},get:function(){return this._name}},{key:"disabled",set:function(n){this._disabled=Object(i.b)(n),this._label&&(this._label.disabled=this._disabled),this._stateChanges.next()},get:function(){return this._disabled}},{key:"negative",set:function(n){this._negative=Object(i.b)(n),this._changeDetectorRef.markForCheck(),this._stateChanges.next()},get:function(){return this._negative}},{key:"labelSize",set:function(n){this._labelSize=n,this._stateChanges.next()},get:function(){return this._labelSize}},{key:"required",get:function(){return this._required},set:function(n){this._required=Object(i.b)(n)}},{key:"checkboxes",get:function(){return this._checkboxes.toArray()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(r.Nb(r.h),r.Nb(_.a),r.Nb(l.r,8),r.Nb(l.i,8),r.Nb(l.o,10))},n.\u0275cmp=r.Hb({type:n,selectors:[["nx-checkbox-group"]],contentQueries:function(n,e,t){var c;(1&n&&(r.Gb(t,h.d,!0),r.Gb(t,S,!0)),2&n)&&(r.qc(c=r.bc())&&(e._label=c.first),r.qc(c=r.bc())&&(e._checkboxes=c))},hostVars:9,hostBindings:function(n,e){2&n&&(r.Cb("id",e.id)("required",e.required)("disabled",e.disabled||null)("aria-labelledby",(null==e._label?null:e._label.id)||null)("role","group"),r.Fb("nx-checkbox-group",!0)("nx-checkbox-group--negative",e.negative))},inputs:{id:"id",name:"name",disabled:"disabled",negative:"negative",labelSize:"labelSize",required:"required"},outputs:{selectionChange:"selectionChange"},ngContentSelectors:u,decls:6,vars:1,consts:[[1,"nx-checkbox-group__label"],["class","nx-checkbox-group__errors",4,"ngIf"],[1,"nx-checkbox-group__controls"],[1,"nx-checkbox-group__errors"]],template:function(n,e){1&n&&(r.jc(d),r.Tb(0,"div"),r.Tb(1,"div",0),r.ic(2),r.Sb(),r.Hc(3,k,2,0,"div",1),r.Tb(4,"div",2),r.ic(5,1),r.Sb(),r.Sb()),2&n&&(r.Bb(3),r.kc("ngIf",e.errorState))},directives:[b.q],styles:["[_nghost-%COMP%]     nx-error{margin-bottom:8px}[_nghost-%COMP%]     nx-label{margin-bottom:16px;display:block}.nx-checkbox-group--negative[_nghost-%COMP%]     nx-error, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-icon.nx-error__icon, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-label{color:var(--negative)}"],changeDetection:0}),n}(),S=function(){var n=function(){function n(e,t,c,i,a,h,_){o(this,n),this._changeDetectorRef=e,this._errorStateMatcher=t,this.checkboxGroup=c,this.ngControl=i,this._parentForm=a,this._parentFormGroup=h,this._focusMonitor=_,this._id=(p++).toString(),this._disabled=!1,this._negative=!1,this._labelSize="small",this._checked=!1,this._name=null,this._indeterminate=!1,this.indeterminateChange=new r.o(!1),this.checkedChange=new r.o(!1),this.checkboxChange=new r.o,this.onChangeCallback=function(n){},this.onTouchedCallback=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return c(n,[{key:"labelContentChanged",value:function(){this._changeDetectorRef.detectChanges()}},{key:"_controlInvalid",value:function(){var n;return n=this.checkboxGroup&&this.checkboxGroup.ngControl?this.checkboxGroup.ngControl:this.ngControl?this.ngControl.control:null,this._errorStateMatcher.isErrorState(n,this._parentFormGroup||this._parentForm)}},{key:"ngOnInit",value:function(){var n=this;this.checkboxGroup&&(this.name=this.checkboxGroup.name,this._parentChangeSubscription=this.checkboxGroup._stateChanges.subscribe(function(){n._changeDetectorRef.markForCheck()}))}},{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._nativeInput)}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription&&this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._nativeInput)}},{key:"_setIndeterminate",value:function(n){this._indeterminate=n,this.indeterminateChange.emit(this._indeterminate),this._changeDetectorRef.markForCheck()}},{key:"_setChecked",value:function(n){this._checked=n,this._changeDetectorRef.markForCheck()}},{key:"toggle",value:function(){this.checked=!this.checked,this.onChangeCallback(this.checked),null!==this.checkboxGroup&&this.checkboxGroup.change(this)}},{key:"writeValue",value:function(n){null===n&&(n=!1),n!==this.checked&&(this.checked=n)}},{key:"registerOnChange",value:function(n){this.onChangeCallback=n}},{key:"registerOnTouched",value:function(n){this.onTouchedCallback=n}},{key:"setDisabledState",value:function(n){this.disabled=n}},{key:"focus",value:function(n){this._focusMonitor.focusVia(this._nativeInput,n)}},{key:"touch",value:function(){this.onTouchedCallback()}},{key:"_onInputClick",value:function(n){n.stopPropagation(),this.disabled||(this.toggle(),this.checkedChange.emit(this._checked),this.checkboxChange.emit(this._createChangeEvent(this._checked)))}},{key:"_createChangeEvent",value:function(n){var e=new f(n,this.value,this);return e.checked=n,e.value=this.value,e.checkbox=this,e}},{key:"id",set:function(n){n!==this._id&&(this._id=n,this._changeDetectorRef.markForCheck())},get:function(){return"nx-checkbox-"+this._id}},{key:"name",set:function(n){this._name=n},get:function(){return this.checkboxGroup&&this.checkboxGroup.name?this.checkboxGroup.name:this._name}},{key:"disabled",set:function(n){var e=Object(i.b)(n);e!==this._disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())},get:function(){return this.checkboxGroup&&this.checkboxGroup.disabled?this.checkboxGroup.disabled:this._disabled}},{key:"labelSize",set:function(n){this._labelSize=n,this._changeDetectorRef.markForCheck()},get:function(){return this.checkboxGroup&&this.checkboxGroup.labelSize?this.checkboxGroup.labelSize:this._labelSize}},{key:"negative",set:function(n){var e=Object(i.b)(n);e!==this._negative&&(this._negative=e,this._changeDetectorRef.markForCheck())},get:function(){return this.checkboxGroup&&this.checkboxGroup.negative?this.checkboxGroup.negative:this._negative}},{key:"checked",set:function(n){var e=Object(i.b)(n);e!==this._checked&&(this._indeterminate&&this._setIndeterminate(!1),this._setChecked(e))},get:function(){return this._checked}},{key:"indeterminate",set:function(n){var e=Object(i.b)(n);this._indeterminate!==e&&(this._checked&&this._setChecked(!1),this._setIndeterminate(e)),this._changeDetectorRef.markForCheck()},get:function(){return this._indeterminate}},{key:"required",get:function(){return this._required},set:function(n){this._required=Object(i.b)(n)}},{key:"value",get:function(){return this._value?this._value:this.checked.toString()},set:function(n){this._value=n,this._changeDetectorRef.markForCheck()}},{key:"labelHasContent",get:function(){return!!this._checkboxLabelWrapper.nativeElement.innerHTML.trim()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(r.Nb(r.h),r.Nb(_.a),r.Nb(y,8),r.Nb(l.o,10),r.Nb(l.r,8),r.Nb(l.i,8),r.Nb(x.g))},n.\u0275cmp=r.Hb({type:n,selectors:[["nx-checkbox"]],viewQuery:function(n,e){var t;(1&n&&(r.Cc(C,!0),r.Nc(O,!0)),2&n)&&(r.qc(t=r.bc())&&(e._checkboxLabelWrapper=t.first),r.qc(t=r.bc())&&(e._nativeInput=t.first))},hostVars:14,hostBindings:function(n,e){2&n&&(r.Cb("required",e.required)("aria-invalid",e._controlInvalid()||null),r.Fb("nx-checkbox",!0)("disabled",e.disabled)("nx-checkbox--label-large","large"===e.labelSize)("nx-checkbox--label-small","small"===e.labelSize)("nx-checkbox--negative",e.negative)("has-error",e._controlInvalid()||null))},inputs:{id:"id",name:"name",disabled:"disabled",labelSize:"labelSize",negative:"negative",checked:"checked",indeterminate:"indeterminate",required:"required",value:"value"},outputs:{indeterminateChange:"indeterminateChange",checkedChange:"checkedChange",checkboxChange:"checkboxChange"},ngContentSelectors:v,decls:9,vars:13,consts:[["type","checkbox",1,"nx-checkbox__input",3,"id","name","checked","indeterminate","disabled","value","blur","click"],["input",""],[1,"nx-checkbox__label",3,"id"],[1,"nx-checkbox__control"],["name","check","aria-hidden","true",4,"ngIf"],["class","nx-checkbox__indeterminate-indicator",4,"ngIf"],[1,"nx-checkbox__label-text",3,"cdkObserveContent"],["checkboxLabelWrapper",""],["name","check","aria-hidden","true"],[1,"nx-checkbox__indeterminate-indicator"]],template:function(n,e){1&n&&(r.jc(),r.Tb(0,"input",0,1),r.ac("blur",function(){return e.touch()})("click",function(n){return e._onInputClick(n)}),r.Sb(),r.Tb(2,"label",2),r.Tb(3,"span",3),r.Hc(4,M,1,0,"nx-icon",4),r.Hc(5,P,1,0,"div",5),r.Sb(),r.Tb(6,"div",6,7),r.ac("cdkObserveContent",function(){return e.labelContentChanged()}),r.ic(8),r.Sb(),r.Sb()),2&n&&(r.kc("id",e.id)("name",e.name)("checked",e.checked)("indeterminate",e.indeterminate)("disabled",e.disabled)("value",e.value),r.Cb("aria-labelledby",e.id+"-label"),r.Bb(2),r.Fb("has-label",e.labelHasContent),r.kc("id",e.id+"-label"),r.Cb("for",e.id),r.Bb(2),r.kc("ngIf",e.checked),r.Bb(1),r.kc("ngIf",e.indeterminate))},directives:[b.q,s.a,g.a],styles:["[_nghost-%COMP%]{display:block;position:relative}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--danger);border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--danger)}.nx-checkbox__input[_ngcontent-%COMP%]{opacity:0;position:absolute}.nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-small-label-font-size);line-height:var(--checkbox-small-label-line-height);font-weight:var(--checkbox-small-label-font-weight);letter-spacing:var(--checkbox-small-label-letter-spacing);color:var(--checkbox-label-color);cursor:pointer;display:flex}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-large-label-font-size);line-height:var(--checkbox-large-label-line-height);font-weight:var(--checkbox-large-label-font-weight);letter-spacing:var(--checkbox-large-label-letter-spacing)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-text-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-control-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:var(--checkbox-large-label-text-margin-left)}[dir=rtl]   .nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-right:var(--checkbox-large-label-text-margin-left)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-text-margin-top)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-control-margin-top)}.nx-checkbox__label-text[_ngcontent-%COMP%]{padding:0;margin-left:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__label-text[_ngcontent-%COMP%]:empty{display:none}[dir=rtl][_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-right:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-background-color);border:var(--checkbox-border-width) solid var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0;cursor:pointer}.nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-indeterminate-color);box-sizing:content-box;height:0;width:8px;border:1px solid;border-radius:2px}.nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color);cursor:not-allowed}.nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--checkbox-label-disabled-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-disabled-border-color)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--negative);background-color:transparent}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-accent);background-color:var(--negative);border-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-dimmed);border-color:transparent;background-color:var(--negative-02-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-negative-background-color);border-color:var(--negative-01-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--negative-01-dimmed)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-hover-border-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-active-border-color)}.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast:active){.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{forced-color-adjust:none;border-color:buttonText;background-color:buttonFace}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:buttonText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:highlight;border-color:highlight}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:highlightText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:buttonText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:GrayText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:GrayText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:GrayText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:buttonFace;border-color:GrayText}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:GrayText}.has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:highlight;border-color:highlight}.has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:highlight}.has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], .nx-checkbox--negative[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:buttonText}}"],changeDetection:0}),n}()}}])}();