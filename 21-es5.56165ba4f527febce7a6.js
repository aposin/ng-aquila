!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+IXF":function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return h.a}),n.d(t,"b",function(){return h.b}),n.d(t,"e",function(){return f}),n.d(t,"d",function(){return d.a});var r,o,i=n("ofXK"),a=n("mN63"),c=n("SqJ0"),u=n("fXoL"),l=((r=function e(){s(this,e)}).\u0275mod=u.Lb({type:r}),r.\u0275inj=u.Kb({factory:function(e){return new(e||r)},imports:[[i.c,a.c,c.a]]}),r),h=n("aXeq"),f=((o=function e(){s(this,e)}).\u0275mod=u.Lb({type:o}),o.\u0275inj=u.Kb({factory:function(e){return new(e||o)},imports:[[i.c]]}),o),d=n("Q3ZH")},"/sJ9":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,o=n("fXoL"),i=((r=function e(){s(this,e)}).\u0275mod=o.Lb({type:r}),r.\u0275inj=o.Kb({factory:function(e){return new(e||r)}}),r);n("LktG")},"7Ynf":function(e,t,o){"use strict";o.r(t),o.d(t,"CodeExamplesModule",function(){return me});var i,a,u=o("+IXF"),l=o("ofXK"),h=o("3Pt+"),f=o("XNiG"),d=o("fXoL"),g=((a=function e(){s(this,e),this.changes=new f.a,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}).\u0275fac=function(e){return new(e||a)},a.\u0275prov=d.Jb({token:a,factory:a.\u0275fac}),a),p=((i=function e(){s(this,e)}).\u0275mod=d.Lb({type:i}),i.\u0275inj=d.Kb({factory:function(e){return new(e||i)},providers:[g],imports:[[l.c,h.k,h.v]]}),i),b=o("FtGj"),m=o("8LU1"),y=o("zB3U");function v(e,t){if(1&e){var n=d.Ub();d.Tb(0,"input",1),d.ac("ngModelChange",function(e){d.vc(n);var r=t.index;return d.ec()._keyCode[r]=e})("input",function(e){return d.vc(n),d.ec()._selectNextInput(e)})("paste",function(e){return d.vc(n),d.ec()._pasteClipboard(e)})("blur",function(){return d.vc(n),d.ec()._onBlur()})("focus",function(){return d.vc(n),d.ec()._setFocusState()})("click",function(e){return d.vc(n),d.ec()._selectText(e)})("keydown",function(e){return d.vc(n),d.ec()._keydownAction(e)}),d.Sb()}if(2&e){var r=t.index,o=d.ec();d.kc("ngModel",o._keyCode[r])("ngClass",o._inputGap(r)),d.Cb("aria-label",o.getAriaLabel(r))("type",o.type)("tabindex",o.tabindex)("disabled",o.disabled?"":null)}}var _,x=((_=function(){function e(t,n,r,o,i,a,c){s(this,e),this._changeDetectorRef=t,this._el=n,this._control=r,this._intl=o,this._errorStateMatcher=i,this._parentForm=a,this._parentFormGroup=c,this.errorState=!1,this._codeLength=6,this._type="text",this._isUpDown=!1,this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this.propagateChange=function(e){},this.propagateTouch=function(e){},this._control&&(this._control.valueAccessor=this)}return c(e,[{key:"ngDoCheck",value:function(){this._control&&this.updateErrorState()}},{key:"setInputLength",value:function(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}},{key:"_convertLetterSize",value:function(e){return"\xdf"===e?e:"string"==typeof e?"upper"===this.convertTo?e.toUpperCase():"lower"===this.convertTo?e.toLowerCase():e:void 0}},{key:"_keydownAction",value:function(e){var t=e.target.previousElementSibling,n=e.target.nextElementSibling;switch(e.keyCode){case b.o:return!1;case b.b:""===e.target.value&&t&&"INPUT"===t.tagName&&this.selectInput(t);break;case b.i:t&&"INPUT"===t.tagName&&(e.preventDefault(),this.selectInput(t));break;case b.m:n&&"INPUT"===n.tagName&&this.selectInput(n),e.preventDefault();break;case b.d:this._isUpDown=!0,"number"!==this._type||""!==e.target.value&&"0"!==e.target.value||e.preventDefault();break;case b.q:this._isUpDown=!0,"number"===this._type&&"9"===e.target.value&&e.preventDefault()}}},{key:"_selectText",value:function(e){this.selectInput(e.target)}},{key:"_selectNextInput",value:function(e){e.target.value=this._convertLetterSize(e.target.value.slice(0,1));var t=this._getFocusedInputIndex(e);if(this._keyCode[t]=e.target.value,this.propagateChange(this._keyCode.join("")),e.target.value&&(!this._isUpDown||"number"!==this.type)){var n=e.target.nextSibling;null!==n&&"INPUT"===n.tagName&&(n.focus(),""!==n.value&&this.selectInput(n))}this._isUpDown=!1}},{key:"_pasteClipboard",value:function(e){var t=(e.clipboardData||window.clipboardData).getData("text"),n=0,r=this._getFocusedInputIndex(e);t="number"===this.type?this._formatNumberInput(t):t;for(var o=r;o<this.codeLength;o++)this._keyCode[o]=this._convertLetterSize(t[n]),n++;this.propagateChange(this._keyCode.join("")),r+t.length<this.codeLength?this._el.nativeElement.children.item(r+t.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),e.preventDefault()}},{key:"_getFocusedInputIndex",value:function(e){for(var t,n=0;n<this._el.nativeElement.children.length;n++)e.srcElement===this._el.nativeElement.children.item(n)&&(t=n);return t}},{key:"_formatNumberInput",value:function(e){for(var t="",n=0;n<e.length;n++)e[n].match(/[0-9]{1}$/)&&(t+=e[n]);return t}},{key:"_onBlur",value:function(){var e=this;this._focused=!1,setTimeout(function(){e._focused||e.propagateTouch(e._keyCode.join("")),e._changeDetectorRef.markForCheck()})}},{key:"_setFocusState",value:function(){this._focused=!0}},{key:"setDisabledState",value:function(e){this.disabled=e,this._changeDetectorRef.markForCheck()}},{key:"writeValue",value:function(e){if(e)for(var t=e.split("").slice(0,this.codeLength),n=0;n<this.codeLength;n++)this._keyCode[n]=t[n];else this.setInputLength();this._changeDetectorRef.markForCheck()}},{key:"_trackByKeyCode",value:function(e,t){return e}},{key:"_inputGap",value:function(e){switch(this.codeLength){case 4:case 6:case 8:if(e===this.codeLength/2)return"nx-code-input--field-with-gap";break;default:return}}},{key:"registerOnChange",value:function(e){this.propagateChange=e}},{key:"registerOnTouched",value:function(e){this.propagateTouch=e}},{key:"updateErrorState",value:function(){var e=this.errorState,t=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}},{key:"getAriaLabel",value:function(e){return"".concat(this._intl.inputFieldAriaLabel," ").concat(e+1," ").concat(this._intl.ofLabel," ").concat(this._keyCode.length)}},{key:"selectInput",value:function(e){e.focus();try{e.setSelectionRange(0,e.value.length)}catch(t){if(!(t instanceof DOMException&&"InvalidStateError"===t.name))throw t}}},{key:"codeLength",set:function(e){this._codeLength=e,this.setInputLength(),this._changeDetectorRef.markForCheck()},get:function(){return this._codeLength}},{key:"type",set:function(e){this._type=e,this._changeDetectorRef.markForCheck()},get:function(){return this._type}},{key:"tabindex",set:function(e){this._tabindex=e,this._changeDetectorRef.markForCheck()},get:function(){return this._tabindex}},{key:"convertTo",set:function(e){this._convertTo=e,this._changeDetectorRef.markForCheck()},get:function(){return this._convertTo}},{key:"negative",set:function(e){var t=Object(m.b)(e);this._negative!==t&&(this._negative=t,this._changeDetectorRef.markForCheck())},get:function(){return this._negative}},{key:"disabled",set:function(e){var t=Object(m.b)(e);this._disabled!==t&&(this._disabled=t,this._changeDetectorRef.markForCheck())},get:function(){return this._disabled}}]),e}()).\u0275fac=function(e){return new(e||_)(d.Nb(d.h),d.Nb(d.l),d.Nb(h.o,10),d.Nb(g),d.Nb(y.a),d.Nb(h.r,8),d.Nb(h.i,8))},_.\u0275cmp=d.Hb({type:_,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(e,t){2&e&&(d.Cb("tabindex",-1),d.Fb("nx-code-input",!0)("has-error",t.errorState)("is-negative",t.negative)("is-disabled",t.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(e,t){1&e&&d.Hc(0,v,1,6,"input",0),2&e&&d.kc("ngForOf",t._keyCode)("ngForTrackBy",t._trackByKeyCode)},directives:[l.p,h.a,h.l,h.p,h.s,l.n],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-1px;color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-1px;font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (-ms-high-contrast:active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0}),_),k=o("LTpZ"),C=o("aXeq");function O(e,t){1&e&&(d.Tb(0,"nx-error",9),d.Jc(1," Entry is required. "),d.Sb())}function w(e,t){1&e&&(d.Tb(0,"nx-error",9),d.Jc(1," Entry must match pattern. "),d.Sb())}function S(e,t){1&e&&(d.Tb(0,"nx-error",9),d.Jc(1," Entry is too short. "),d.Sb())}function I(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,O,2,0,"nx-error",8),d.Hc(2,w,2,0,"nx-error",8),d.Hc(3,S,2,0,"nx-error",8),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("pattern")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var T,P=((T=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e({value:this.inputValue,disabled:!0},{validators:[h.y.required,h.y.pattern("[A-Z]+"),h.y.minLength(4)],updateOn:"submit"})})}},{key:"toggleDisabled",value:function(){this.keyCode.disabled?this.keyCode.enable():this.keyCode.disable()}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=d.Hb({type:T,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,I,4,3,"div",4),d.Tb(5,"p"),d.Jc(6),d.Sb(),d.Tb(7,"button",5),d.Jc(8,"Submit"),d.Sb(),d.Tb(9,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(10,"Clear"),d.Sb(),d.Tb(11,"button",7),d.ac("click",function(){return t.toggleDisabled()}),d.Jc(12,"Toggle disabled"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(2),d.kc("length",4),d.Bb(2),d.kc("ngIf",r.errorState),d.Bb(2),d.Lc("Disabled: ",t.keyCode.disabled,"")}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),T);function M(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function F(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry must match pattern. "),d.Sb())}function B(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function E(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,M,2,0,"nx-error",7),d.Hc(2,F,2,0,"nx-error",7),d.Hc(3,B,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("pattern")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var L,H=((L=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.pattern("[A-Z]+"),h.y.minLength(4)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||L)},L.\u0275cmp=d.Hb({type:L,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,E,4,3,"div",4),d.Ob(5,"br"),d.Tb(6,"button",5),d.Jc(7,"Submit"),d.Sb(),d.Tb(8,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(9,"Clear"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(2),d.kc("length",4),d.Bb(2),d.kc("ngIf",r.errorState)}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),L);function D(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function J(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry must match pattern. "),d.Sb())}function N(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function q(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,D,2,0,"nx-error",7),d.Hc(2,J,2,0,"nx-error",7),d.Hc(3,N,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("pattern")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var z,j,A=((z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(o,e);var t=r(o);function o(){var e;return s(this,o),(e=t.apply(this,arguments)).inputFieldAriaLabel="Key eingeben",e.ofLabel="von",e}return o}(g)).\u0275fac=function(e){return G(e||z)},z.\u0275prov=d.Jb({token:z,factory:z.\u0275fac}),z),G=d.Vb(A),R=((j=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.pattern("[A-Z]+"),h.y.minLength(5)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=d.Hb({type:j,selectors:[["code-input-localize-example"]],features:[d.Ab([{provide:g,useClass:A}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,q,4,3,"div",4),d.Ob(5,"br"),d.Tb(6,"button",5),d.Jc(7,"Submit"),d.Sb(),d.Tb(8,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(9,"Clear"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(2),d.kc("length",5),d.Bb(2),d.kc("ngIf",r.errorState)}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),j);function U(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function V(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function X(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,U,2,0,"nx-error",7),d.Hc(2,V,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var K,Z,Q=((Z=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){var e=this;this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.minLength(4)],updateOn:"change"})}),this.keyCode.valueChanges.subscribe(function(){e.keyCode.valid&&"1234"!==e.keyCode.value&&e.codeForm.setValue({keyCode:"1234"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=d.Hb({type:Z,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,X,3,2,"div",4),d.Ob(5,"br"),d.Tb(6,"button",5),d.Jc(7,"Submit"),d.Sb(),d.Tb(8,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(9,"Clear"),d.Sb(),d.Tb(10,"p"),d.Jc(11),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(2),d.kc("length",4),d.Bb(2),d.kc("ngIf",r.errorState),d.Bb(7),d.Lc(" Code input value: '",t.keyCode.value,"' ")}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),Z),$=((K=function e(){s(this,e),this.inputValue=""}).\u0275fac=function(e){return new(e||K)},K.\u0275cmp=d.Hb({type:K,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(e,t){1&e&&(d.Tb(0,"div",0),d.Ob(1,"nx-code-input",1),d.Sb()),2&e&&(d.Bb(1),d.kc("length",4))},directives:[x],styles:[""]}),K);function W(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function Y(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry must match pattern. "),d.Sb())}function ee(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function te(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,W,2,0,"nx-error",7),d.Hc(2,Y,2,0,"nx-error",7),d.Hc(3,ee,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("pattern")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var ne,re=((ne=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.minLength(7)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||ne)},ne.\u0275cmp=d.Hb({type:ne,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,te,4,3,"div",4),d.Ob(5,"br"),d.Tb(6,"button",5),d.Jc(7,"Submit"),d.Sb(),d.Tb(8,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(9,"Clear"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(2),d.kc("length",7),d.Bb(2),d.kc("ngIf",r.errorState)}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),ne);function oe(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function ie(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function ae(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,oe,2,0,"nx-error",7),d.Hc(2,ie,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var ce,se=((ce=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.minLength(6)],updateOn:"blur"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||ce)},ce.\u0275cmp=d.Hb({type:ce,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Ob(2,"nx-code-input",2,3),d.Hc(4,ae,3,2,"div",4),d.Ob(5,"br"),d.Tb(6,"button",5),d.Jc(7,"Submit"),d.Sb(),d.Tb(8,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(9,"Clear"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(3);d.kc("formGroup",t.codeForm),d.Bb(4),d.kc("ngIf",r.errorState)}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),ce);function ue(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is required. "),d.Sb())}function le(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry must match pattern. "),d.Sb())}function he(e,t){1&e&&(d.Tb(0,"nx-error",8),d.Jc(1," Entry is too short. "),d.Sb())}function fe(e,t){if(1&e&&(d.Tb(0,"div"),d.Hc(1,ue,2,0,"nx-error",7),d.Hc(2,le,2,0,"nx-error",7),d.Hc(3,he,2,0,"nx-error",7),d.Sb()),2&e){var n=d.ec();d.Bb(1),d.kc("ngIf",n.keyCode.hasError("required")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("pattern")),d.Bb(1),d.kc("ngIf",n.keyCode.hasError("minlength"))}}var de,ge,pe=((de=function(){function e(){s(this,e),this.inputValue=""}return c(e,[{key:"ngOnInit",value:function(){this.codeForm=new h.h({keyCode:new h.e(this.inputValue,{validators:[h.y.required,h.y.pattern(RegExp("^[0-9]*$")),h.y.minLength(4)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||de)},de.\u0275cmp=d.Hb({type:de,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=d.Ub();d.Tb(0,"form",0,1),d.Tb(2,"label"),d.Jc(3,"Enter PIN code"),d.Sb(),d.Ob(4,"nx-code-input",2,3),d.Hc(6,fe,4,3,"div",4),d.Ob(7,"br"),d.Tb(8,"button",5),d.Jc(9,"Submit"),d.Sb(),d.Tb(10,"button",6),d.ac("click",function(){return d.vc(n),d.rc(1).resetForm()}),d.Jc(11,"Clear"),d.Sb(),d.Sb()}if(2&e){var r=d.rc(5);d.kc("formGroup",t.codeForm),d.Bb(4),d.kc("length",4),d.Bb(2),d.kc("ngIf",r.errorState)}},directives:[h.A,h.q,h.i,x,h.p,h.g,l.q,k.a,C.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),de),be=o("ierq"),me=((ge=function(){function e(){s(this,e)}return c(e,null,[{key:"components",value:function(){return{"code-input-disabled":P,"code-input-four-char":H,"code-input-localize":R,"code-input-model":Q,"code-input-negative":$,"code-input-seven-char":re,"code-input-six-char":se,"code-input-type":pe}}}]),e}()).\u0275mod=d.Lb({type:ge}),ge.\u0275inj=d.Kb({factory:function(e){return new(e||ge)},imports:[[p,u.c,be.a]]}),ge)},LktG:function(t,n,r){"use strict";r.d(n,"a",function(){return u});var o=r("fXoL"),i=["nxCopytext",""],a=["*"],u=function(){var t=function(){function t(){s(this,t),this.type="normal",this.negative=!1}return c(t,[{key:"classNames",set:function(t){if(this._classNames!==t){this._classNames=t;var n=e(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],r=void 0===n?null:n;this.type=r,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&o.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:i,ngContentSelectors:a,decls:1,vars:0,template:function(e,t){1&e&&(o.jc(),o.ic(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t}()},Q3ZH:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG"),a=["*"],u=0,l=new r.r("LABEL_DEFAULT_OPTIONS"),h=function(){var e=function(){function e(t){s(this,e),this._defaultOptions=t,this._stateChanges=new i.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+u++}return c(e,[{key:"disabled",set:function(e){this._disabled=Object(o.b)(e),this._stateChanges.next()},get:function(){return this._disabled}},{key:"negative",set:function(e){this._negative=Object(o.b)(e),this._stateChanges.next()},get:function(){return this._negative}},{key:"id",set:function(e){this._id!==e&&(this._id=e)},get:function(){return this._id}},{key:"size",set:function(e){this._size=e,this._stateChanges.next()},get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Nb(l,8))},e.\u0275cmp=r.Hb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(r.Cb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),r.Fb("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:a,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(r.jc(),r.Tb(0,"label",0),r.ic(1),r.Sb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e}()},aXeq:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return v});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG"),a=n("1G5W"),u=n("ofXK"),l=n("+vaC"),h=n("Xe60");function f(e,t){1&e&&r.Ob(0,"nx-icon",7),2&e&&r.kc("name","exclamation-triangle")}function d(e,t){if(1&e&&(r.Rb(0),r.Hc(1,f,1,1,"nx-icon",3),r.Tb(2,"div",4),r.Tb(3,"div",5),r.Pb(4,6),r.Sb(),r.Sb(),r.Qb()),2&e){var n=r.ec(),o=r.rc(3);r.Bb(1),r.kc("ngIf",n.showIcon),r.Bb(3),r.kc("ngTemplateOutlet",o)}}function g(e,t){if(1&e&&(r.Tb(0,"nx-message",8),r.Pb(1,6),r.Sb()),2&e){r.ec();var n=r.rc(3);r.Bb(1),r.kc("ngTemplateOutlet",n)}}function p(e,t){1&e&&r.ic(0)}var b=["*"],m=0,y=new r.r("ERROR_DEFAULT_OPTIONS"),v=function(){var e=function(){function e(t,n){var r=this;s(this,e),this._changeDetectorRef=t,this._defaultOptions=n,this._showIcon=!0,this._id="nx-error-"+m++,this._destroyed=new i.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(a.a)(this._destroyed)).subscribe(function(){r._changeDetectorRef.markForCheck()})}return c(e,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"showIcon",set:function(e){this._showIcon=Object(o.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._showIcon}},{key:"id",set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())},get:function(){return this._id}},{key:"appearance",set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())},get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Nb(r.h),r.Nb(y,8))},e.\u0275cmp=r.Hb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(r.Cb("role","alert")("id",t.id),r.Fb("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:b,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(r.jc(),r.Hc(0,d,5,2,"ng-container",0),r.Hc(1,g,2,1,"nx-message",1),r.Hc(2,p,1,0,"ng-template",null,2,r.Ic)),2&e&&(r.kc("ngIf","text"===t.appearance),r.Bb(1),r.kc("ngIf","message"===t.appearance))},directives:[u.q,u.u,l.a,h.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e}()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("tgBs"),o=n("/sJ9"),i=n("eV8M"),a=n("gkbm"),c=n("ofXK"),u=n("3Pt+"),l=n("fXoL"),h=function(){var e=function e(){s(this,e)};return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[],c.c,u.k,u.v,a.b,i.a,o.a,r.a]}),e}()}}])}();