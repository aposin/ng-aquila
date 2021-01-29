!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Dr49:function(n,r,i){"use strict";i.d(r,"a",function(){return b});var a=i("8LU1"),s=i("XNiG"),l=i("quSY"),u=i("VRyK"),c=i("1G5W"),d=i("gcYM"),h=i("3E0/"),g=i("tg6J"),p=i("fXoL"),f=["*"],b=function(){var n=function(){function n(e,r){var o=this;t(this,n),this._changeDetectorRef=e,this._ngZone=r,this._negative=!1,this.resizeEvent$=new s.a,this._destroyed=new s.a,this.updatePopoversSubscription=l.a.EMPTY,this._size="large",this._ngZone.runOutsideAngular(function(){o._ngZone.onStable.pipe(Object(c.a)(o._destroyed)).subscribe(function(){o.updatePositionPopovers()})})}return o(n,[{key:"onResize",value:function(e){this.resizeEvent$.next()}},{key:"ngAfterContentInit",value:function(){var n=this,t=this._words.map(function(e){return e.inputChanges}),r=Object(u.a).apply(void 0,e(t));this.updatePopoversSubscription=r.subscribe(function(){n.updatePositionPopovers()}),this.resizeObservable=this.resizeEvent$.pipe(Object(d.a)(500),Object(h.a)(100)),this.resizeObservable.subscribe(function(){return n.resizeWords()})}},{key:"resizeWords",value:function(){this._words.forEach(function(e){e.updateCurrentTextWidth()})}},{key:"ngOnDestroy",value:function(){this.updatePopoversSubscription.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}},{key:"updatePositionPopovers",value:function(){this._words&&this._words.forEach(function(e){e.repositionError()})}},{key:"negative",set:function(e){this._negative=Object(a.b)(e)},get:function(){return this._negative}},{key:"size",set:function(e){this._size=e,this._changeDetectorRef.markForCheck()},get:function(){return this._size}}]),n}();return n.\u0275fac=function(e){return new(e||n)(p.Nb(p.h),p.Nb(p.A))},n.\u0275cmp=p.Hb({type:n,selectors:[["nx-natural-language-form"]],contentQueries:function(e,n,t){var r;(1&e&&p.Gb(t,g.a,!1),2&e)&&(p.qc(r=p.bc())&&(n._words=r))},hostVars:6,hostBindings:function(e,n){1&e&&p.ac("orientationchange",function(e){return n.onResize(e)},!1,p.uc)("resize",function(e){return n.onResize(e)},!1,p.uc),2&e&&p.Fb("is-negative",n.negative)("nx-natural-language-form--small","small"===n.size)("nx-natural-language-form--large","large"===n.size)},inputs:{negative:["nxNegative","negative"],size:"size"},ngContentSelectors:f,decls:2,vars:0,consts:[[1,"nx-natural-language-form__wrapper"]],template:function(e,n){1&e&&(p.jc(),p.Tb(0,"div",0),p.ic(1),p.Sb())},styles:["[_nghost-%COMP%]{display:block;font-size:var(--natural-language-form-large-font-size);line-height:var(--natural-language-form-large-line-height);font-weight:var(--natural-language-form-large-font-weight);letter-spacing:var(--natural-language-form-large-letter-spacing);color:var(--natural-language-form-text-color);padding-top:72px;padding-bottom:80px}[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}[_nghost-%COMP%]     nx-word+nx-word{margin-left:2px}[dir=rtl]   [_nghost-%COMP%]     nx-word+nx-word{margin-right:2px;margin-left:0}.is-negative[_nghost-%COMP%]{color:var(--negative)}@media (max-width:991px){[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}}.nx-natural-language-form__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-natural-language-form__wrapper[_ngcontent-%COMP%] >   *{margin-bottom:8px}.nx-natural-language-form--small[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}.nx-natural-language-form--small[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}"],changeDetection:0}),n}()},QcvW:function(e,n,r){"use strict";r.r(n),r.d(n,"NaturalExamplesModule",function(){return k});var i,a=r("AqTC"),s=r("HMmR"),l=r("p9I2"),u=r("fXoL"),c=r("Dr49"),d=r("tg6J"),h=r("nK+a"),g=r("3Pt+"),p=r("v44Z"),f=((i=function e(){t(this,e)}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Hb({type:i,selectors:[["natural-language-form-basic-example"]],decls:7,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""]],template:function(e,n){1&e&&(u.Tb(0,"nx-natural-language-form"),u.Jc(1," Here is a word "),u.Tb(2,"nx-word",0),u.Ob(3,"input",1),u.Tb(4,"div",2),u.Jc(5,"This field is required."),u.Sb(),u.Sb(),u.Jc(6," with some following copy.\n"),u.Sb())},directives:[c.a,d.a,h.b,g.a,g.p,g.s,g.w,p.a],styles:[""]}),i),b=r("0KkY"),v=r("eKOL"),m=r("ofXK"),w=r("LTpZ");function x(e,n){1&e&&(u.Tb(0,"div",6),u.Jc(1,"This field is required."),u.Sb())}function _(e,n){1&e&&(u.Tb(0,"div",6),u.Jc(1,"Only numbers are allowed."),u.Sb())}var y,C,O,P,S=((O=function(){function e(n){t(this,e),this.fb=n,this.buildForm()}return o(e,[{key:"buildForm",value:function(){this.naturalForm=this.fb.group({who:new g.e("",[g.y.required]),city:new g.e("",[g.y.required]),spots:new g.e("",[g.y.pattern("[0-9]*"),g.y.required])})}},{key:"validate",value:function(){var e=this;Object.keys(this.naturalForm.controls).forEach(function(n){e.naturalForm.get(n).markAsTouched({onlySelf:!0})})}}]),e}()).\u0275fac=function(e){return new(e||O)(u.Nb(g.d))},O.\u0275cmp=u.Hb({type:O,selectors:[["natural-language-form-extended-example"]],decls:36,vars:9,consts:[[3,"formGroup"],["nxSize","long","nxLabel","Always a label"],["formControlName","who"],["nxValue","student"],["nxValue","philosopher"],["nxValue","sailor"],["nxError",""],["nxSize","short","nxLabel","Always a label"],["nxInput","","formControlName","city"],["nxSize","regular","nxLabel","Always a label"],["nxInput","","formControlName","spots"],["nxError","",4,"ngIf"],["nxButton","","type","submit",3,"click"]],template:function(e,n){1&e&&(u.Tb(0,"form"),u.Tb(1,"nx-natural-language-form",0),u.Tb(2,"span"),u.Jc(3,"I want to be"),u.Sb(),u.Tb(4,"nx-word",1),u.Tb(5,"nx-dropdown",2),u.Tb(6,"nx-dropdown-item",3),u.Jc(7,"a Student"),u.Sb(),u.Tb(8,"nx-dropdown-item",4),u.Jc(9,"a Philosopher"),u.Sb(),u.Tb(10,"nx-dropdown-item",5),u.Jc(11,"a Sailor"),u.Sb(),u.Sb(),u.Tb(12,"div",6),u.Jc(13,"We need to know about the type of role you want."),u.Sb(),u.Sb(),u.Tb(14,"span"),u.Jc(15,"and visit the city of"),u.Sb(),u.Tb(16,"nx-word",7),u.Ob(17,"input",8),u.Tb(18,"div",6),u.Jc(19,"This field is required."),u.Sb(),u.Sb(),u.Tb(20,"span"),u.Jc(21,"and see"),u.Sb(),u.Tb(22,"nx-word",9),u.Ob(23,"input",10),u.Hc(24,x,2,0,"div",11),u.Hc(25,_,2,0,"div",11),u.Sb(),u.Tb(26,"span"),u.Jc(27," nice spots."),u.Sb(),u.Sb(),u.Tb(28,"button",12),u.ac("click",function(){return n.validate()}),u.Jc(29,"submit"),u.Sb(),u.Sb(),u.Tb(30,"p"),u.Jc(31),u.fc(32,"json"),u.Ob(33,"br"),u.Jc(34),u.fc(35,"json"),u.Sb()),2&e&&(u.Bb(1),u.kc("formGroup",n.naturalForm),u.Bb(23),u.kc("ngIf",n.naturalForm.controls.spots.hasError("required")),u.Bb(1),u.kc("ngIf",n.naturalForm.controls.spots.hasError("pattern")),u.Bb(6),u.Lc(" Form value: ",u.gc(32,5,n.naturalForm.value),""),u.Bb(3),u.Lc(" Form status: ",u.gc(35,7,n.naturalForm.status),"\n"))},directives:[g.A,g.q,g.r,c.a,g.i,d.a,b.a,g.p,g.g,v.a,p.a,h.b,g.a,m.q,w.a],pipes:[m.h],styles:[""]}),O),T=((C=function e(){t(this,e)}).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=u.Hb({type:C,selectors:[["natural-language-form-negative-example"]],decls:6,vars:0,consts:[[1,"docs-inverse-container"],["nxNegative","true"],["nxLabel","Always a label"],["nxInput",""]],template:function(e,n){1&e&&(u.Tb(0,"div",0),u.Tb(1,"nx-natural-language-form",1),u.Jc(2," Here is a word "),u.Tb(3,"nx-word",2),u.Ob(4,"input",3),u.Jc(5,". "),u.Sb(),u.Sb(),u.Sb())},directives:[c.a,d.a,h.b],styles:[""]}),C),M=((y=function e(){t(this,e)}).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=u.Hb({type:y,selectors:[["natural-language-form-sizes-example"]],decls:44,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""],["nxSize","long","nxLabel","Always a label"],["required","","ngModel",""],["nxValue","option1"],["nxValue","option2"],["nxValue","option3"],["nxValue","option4"],["nxValue","option5"],["size","small"]],template:function(e,n){1&e&&(u.Tb(0,"nx-natural-language-form"),u.Jc(1," This is a large NLF "),u.Tb(2,"nx-word",0),u.Ob(3,"input",1),u.Tb(4,"div",2),u.Jc(5,"This field is required."),u.Sb(),u.Sb(),u.Jc(6," with "),u.Tb(7,"nx-word",3),u.Tb(8,"nx-dropdown",4),u.Tb(9,"nx-dropdown-item",5),u.Jc(10,"Option 1"),u.Sb(),u.Tb(11,"nx-dropdown-item",6),u.Jc(12,"Option 2"),u.Sb(),u.Tb(13,"nx-dropdown-item",7),u.Jc(14,"Option 3"),u.Sb(),u.Tb(15,"nx-dropdown-item",8),u.Jc(16,"Option 4"),u.Sb(),u.Tb(17,"nx-dropdown-item",9),u.Jc(18,"Option 5"),u.Sb(),u.Sb(),u.Tb(19,"div",2),u.Jc(20,"Please select an option"),u.Sb(),u.Sb(),u.Jc(21," .\n"),u.Sb(),u.Tb(22,"nx-natural-language-form",10),u.Jc(23," This is a small NLF "),u.Tb(24,"nx-word",0),u.Ob(25,"input",1),u.Tb(26,"div",2),u.Jc(27,"This field is required."),u.Sb(),u.Sb(),u.Jc(28," with "),u.Tb(29,"nx-word",3),u.Tb(30,"nx-dropdown",4),u.Tb(31,"nx-dropdown-item",5),u.Jc(32,"Option 1"),u.Sb(),u.Tb(33,"nx-dropdown-item",6),u.Jc(34,"Option 2"),u.Sb(),u.Tb(35,"nx-dropdown-item",7),u.Jc(36,"Option 3"),u.Sb(),u.Tb(37,"nx-dropdown-item",8),u.Jc(38,"Option 4"),u.Sb(),u.Tb(39,"nx-dropdown-item",9),u.Jc(40,"Option 5"),u.Sb(),u.Sb(),u.Tb(41,"div",2),u.Jc(42,"Please select an option"),u.Sb(),u.Sb(),u.Jc(43," .\n"),u.Sb())},directives:[c.a,d.a,h.b,g.a,g.p,g.s,g.w,p.a,b.a,v.a],styles:[""]}),y),z=r("ierq"),k=((P=function(){function e(){t(this,e)}return o(e,null,[{key:"components",value:function(){return{"natural-language-form-basic":f,"natural-language-form-extended":S,"natural-language-form-negative":T,"natural-language-form-sizes":M}}}]),e}()).\u0275mod=u.Lb({type:P}),P.\u0275inj=u.Kb({factory:function(e){return new(e||P)},imports:[[l.a,s.b,a.b,z.a]]}),P)},ierq:function(e,n,r){"use strict";r.d(n,"a",function(){return d});var o=r("tgBs"),i=r("/sJ9"),a=r("eV8M"),s=r("gkbm"),l=r("ofXK"),u=r("3Pt+"),c=r("fXoL"),d=function(){var e=function e(){t(this,e)};return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(n){return new(n||e)},imports:[[],l.c,u.k,u.v,s.b,a.a,i.a,o.a]}),e}()},p9I2:function(e,n,r){"use strict";r.d(n,"a",function(){return u}),r.d(n,"b",function(){return c.a});var o,i=r("+Gny"),a=r("AqTC"),s=r("ofXK"),l=r("fXoL"),u=((o=function e(){t(this,e)}).\u0275mod=l.Lb({type:o}),o.\u0275inj=l.Kb({factory:function(e){return new(e||o)},imports:[[s.c,a.b,i.a]]}),o);r("Dr49");var c=r("tg6J")},tg6J:function(e,n,r){"use strict";r.d(n,"a",function(){return x});var i=r("hbct"),a=r("zB3U"),s=r("rDax"),l=r("JX91"),u=r("quSY"),c=r("XNiG"),d=r("HMmR"),h=r("+rOU"),g=r("fXoL"),p=r("ofXK"),f=r("gt5x"),b=["popover"];function v(e,n){1&e&&(g.Tb(0,"div",2),g.ic(1,2),g.Sb())}var m=[[["nx-dropdown"]],[["","nxError",""]],[["","nxInput",""]]],w=["nx-dropdown","[nxError]","[nxInput]"],x=function(){var e=function(){function e(n,r,o,i,a,s){t(this,e),this.elementRef=n,this._changeDetectorRef=r,this._renderer=o,this._overlay=i,this._viewContainerRef=a,this._overlayPositionBuilder=s,this.subscription=u.a.EMPTY,this.subscriptionValues=u.a.EMPTY,this.inputChanges=new c.a,this._hasErrors=!1,this.currentTextWidth=0,this.size="regular"}return o(e,[{key:"ngOnInit",value:function(){this.setupErrorPopover()}},{key:"ngAfterContentInit",value:function(){var e=this;this._validateControlChild(),this.subscription=this._control.stateChanges.pipe(Object(l.a)(null)).subscribe(function(){e._hasErrors=e._control.errorState,e.updateErrorPopoverState(),e._changeDetectorRef.markForCheck()}),this.subscriptionValues=this._control.ngControl?this._control.ngControl.valueChanges.subscribe(function(n){e.updateCurrentTextWidth(),e.inputChanges.next()}):this._control.stateChanges.subscribe(function(n){e.updateCurrentTextWidth(),e.inputChanges.next()}),this._control.setAriaLabel(this.label)}},{key:"ngOnDestroy",value:function(){this._overlayRef&&this._overlayRef.dispose(),this.subscription.unsubscribe()}},{key:"updateCurrentTextWidth",value:function(){this.measureCanvas||(this.measureCanvas=this._renderer.createElement("canvas"));var e=this.measureCanvas.getContext("2d"),n=window.getComputedStyle(this._control.elementRef.nativeElement);e.font=Object(a.g)(n);var t=e.measureText(this._control.value).width+parseInt(n.paddingRight,10)+parseInt(n.paddingLeft,10)+1,r=this.elementRef.nativeElement.parentElement.getBoundingClientRect();this.currentTextWidth=Math.max(parseInt(n.minWidth,10),t),this.currentTextWidth=Math.min(this.currentTextWidth,r.width),this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}},{key:"repositionError",value:function(){this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}},{key:"_validateControlChild",value:function(){if(!this._control)throw new Error("NxWordComponent requires an NxFormfieldControl compatible input.")}},{key:"getConnectedOverlayOrigin",value:function(){return this.elementRef}},{key:"updateErrorPopoverState",value:function(){this._hasErrors&&this._errorChildren.length>0?this.showPopover():this.hidePopover()}},{key:"setupErrorPopover",value:function(){var e=this,n=this._overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withLockedPosition(!0).withFlexibleDimensions(!1).withPush(!0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}]).withDefaultOffsetY(-8);this._overlayState=new s.d,this._overlayState.positionStrategy=n,this._overlayState.scrollStrategy=this._overlay.scrollStrategies.reposition(),this._overlayRef=this._overlay.create(this._overlayState),this._overlayState.positionStrategy.positionChanges.subscribe(function(n){e.positionArrow(n.connectionPair),e._embeddedViewRef&&!e._embeddedViewRef.destroyed&&e._embeddedViewRef.detectChanges()})}},{key:"positionArrow",value:function(e){var n=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this._overlayRef.overlayElement.parentElement.offsetLeft+this._overlayRef.overlayElement.offsetLeft);this._popover.direction="top"===e.originY&&"bottom"===e.overlayY?"top":"bottom",this._popover.arrowStyle={left:n+"px"}}},{key:"showPopover",value:function(){if(!this._overlayRef.hasAttached()){var e=new h.i(this._popover.templateRef,this._viewContainerRef);this._embeddedViewRef=this._overlayRef.attach(e)}}},{key:"hidePopover",value:function(){this._overlayRef.detach()}},{key:"isFocused",get:function(){return this._control.focused}},{key:"isFilled",get:function(){return!this._control.empty}},{key:"hasDropdown",get:function(){return Boolean(this._dropdown)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(g.Nb(g.l),g.Nb(g.h),g.Nb(g.G),g.Nb(s.c),g.Nb(g.R),g.Nb(s.g))},e.\u0275cmp=g.Hb({type:e,selectors:[["nx-word"]],contentQueries:function(e,n,t){var r;(1&e&&(g.Gb(t,i.c,!0),g.Gb(t,d.a,!0),g.Gb(t,i.d,!1)),2&e)&&(g.qc(r=g.bc())&&(n._control=r.first),g.qc(r=g.bc())&&(n._dropdown=r.first),g.qc(r=g.bc())&&(n._errorChildren=r))},viewQuery:function(e,n){var t;(1&e&&g.Cc(b,!0),2&e)&&(g.qc(t=g.bc())&&(n._popover=t.first))},hostVars:16,hostBindings:function(e,n){2&e&&(g.Ec("width",n.currentTextWidth,"px"),g.Fb("size-short","short"==n.size)("size-regular","regular"==n.size)("size-long","long"==n.size)("has-error",n._hasErrors)("is-focused",n.isFocused)("is-filled",n.isFilled)("has-dropdown",n.hasDropdown))},inputs:{size:["nxSize","size"],label:["nxLabel","label"]},ngContentSelectors:w,decls:6,vars:1,consts:[["class","nx-word__inner-wrapper",4,"ngIf"],["popover",""],[1,"nx-word__inner-wrapper"]],template:function(e,n){1&e&&(g.jc(m),g.Tb(0,"div"),g.Hc(1,v,2,0,"div",0),g.ic(2),g.Sb(),g.Tb(3,"nx-popover",null,1),g.ic(5,1),g.Sb()),2&e&&(g.Bb(1),g.kc("ngIf",!n.hasDropdown))},directives:[p.q,f.a],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;font-weight:400;text-align:center;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;width:100%;margin:0 4px}[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-bottom:2px solid var(--natural-language-form-border-color)}.size-short[_nghost-%COMP%]{min-width:80px}.size-regular[_nghost-%COMP%]{min-width:152px}.size-long[_nghost-%COMP%]{min-width:360px}@media (max-width:991px){.size-long[_nghost-%COMP%]{min-width:280px}}@media (max-width:703px){.size-long[_nghost-%COMP%]{min-width:248px}}[_nghost-%COMP%]     .c-input{display:inline-block;text-align:inherit;font-size:inherit;line-height:inherit;background:0 0;color:inherit;border:none;outline:0;margin:0;width:100%;max-width:100%;height:auto;box-shadow:none;padding:0 8px}[_nghost-%COMP%]     .c-input.is-focused{outline:none;box-shadow:none}[_nghost-%COMP%]     .c-input.is-filled, [_nghost-%COMP%]     .c-input.is-focused{color:var(--natural-language-form-active-color);font-weight:400}[_nghost-%COMP%]     .c-input.is-disabled{cursor:not-allowed}[_nghost-%COMP%]     .c-input::-ms-clear{display:none}[_nghost-%COMP%]     nx-dropdown{position:relative;border-bottom:2px solid var(--natural-language-form-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:inherit;margin-bottom:-2px}@media (max-width:991px){[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:26px}}[_nghost-%COMP%]     nx-dropdown.has-focus, [_nghost-%COMP%]     nx-dropdown.is-filled{color:var(--natural-language-form-active-color);border-color:var(--natural-language-form-active-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__icon{line-height:inherit}[_nghost-%COMP%]     .nx-word__input-wrapper{width:100%}.is-filled[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-active-border-color)}.has-error[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]     nx-dropdown{border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     .c-input.has-error, .has-error[_nghost-%COMP%]     nx-dropdown{color:var(--natural-language-form-error-color)}.is-negative[_nghost-%COMP%]     .nx-dropdown, .is-negative   [_nghost-%COMP%]     .nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown, .is-negative   [_nghost-%COMP%]     nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown.is-filled, .is-negative   [_nghost-%COMP%]     nx-dropdown.is-filled{border-color:var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]     .c-input, .is-negative   [_nghost-%COMP%]     .c-input, .is-negative[_nghost-%COMP%]     .c-input.has-error, .is-negative   [_nghost-%COMP%]     .c-input.has-error{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-negative   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--negative)}.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-large-line-height)}@media (max-width:991px){.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}}.nx-natural-language-form--small[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .nx-natural-language-form--small   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}@media screen and (-ms-high-contrast:active){.nx-word__inner-wrapper[_ngcontent-%COMP%],   nx-dropdown{border-bottom-color:buttonText}}"],changeDetection:0}),e}()}}])}();