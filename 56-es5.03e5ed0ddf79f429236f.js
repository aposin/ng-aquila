!function(){function a(a,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function t(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function n(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{uqIE:function(a,e,r){"use strict";r.r(e),r.d(e,"AvatarExamplesModule",function(){return U});var i,o,s,l,c,v,g,u,d=r("ofXK"),m=r("fXoL"),h=((i=function a(){n(this,a)}).\u0275mod=m.Nb({type:i}),i.\u0275inj=m.Mb({factory:function(a){return new(a||i)},imports:[[d.c]]}),i),b=r("u47x"),x=["nxAvatar",""],f=["*"],p=((s=function(){function a(t){n(this,a),this._changeDetectorRef=t,this._size="medium"}return t(a,[{key:"size",set:function(a){this._size!==a&&(this._size=a,this._changeDetectorRef.markForCheck())},get:function(){return this._size}}]),a}()).\u0275fac=function(a){return new(a||s)(m.Pb(m.h))},s.\u0275cmp=m.Jb({type:s,selectors:[["","nxAvatar",""]],hostVars:12,hostBindings:function(a,t){2&a&&m.Hb("nx-avatar--xsmall","xsmall"===t.size)("nx-avatar--small","small"===t.size)("nx-avatar--small-medium","small-medium"===t.size)("nx-avatar--medium","medium"===t.size)("nx-avatar--large","large"===t.size)("nx-avatar--xlarge","xlarge"===t.size)},inputs:{size:"size"},attrs:x,ngContentSelectors:f,decls:2,vars:0,consts:[[1,"nx-avatar__content-wrapper"]],template:function(a,t){1&a&&(m.lc(),m.Vb(0,"div",0),m.kc(1),m.Ub())},styles:['[_nghost-%COMP%]{background:var(--avatar-background-color);color:var(--avatar-color);border-radius:50%;text-align:center}[_nghost-%COMP%]   .nx-avatar__content-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;justify-content:center;align-items:center;position:relative}[_nghost-%COMP%]     figure{width:100%}.nx-avatar--xsmall[_nghost-%COMP%]{height:var(--avatar-xsmall-size);width:var(--avatar-xsmall-size);min-width:var(--avatar-xsmall-size);font-size:var(--avatar-xsmall-font-size);line-height:var(--avatar-xsmall-line-height);font-weight:var(--avatar-xsmall-font-weight);letter-spacing:var(--avatar-xsmall-letter-spacing)}.nx-avatar--xsmall[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-xsmall-icon-size)}.nx-avatar--small[_nghost-%COMP%]{height:var(--avatar-small-size);width:var(--avatar-small-size);min-width:var(--avatar-small-size);font-size:var(--avatar-small-font-size);line-height:var(--avatar-small-line-height);font-weight:var(--avatar-small-font-weight);letter-spacing:var(--avatar-small-letter-spacing)}.nx-avatar--small[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-small-icon-size)}.nx-avatar--small-medium[_nghost-%COMP%]{height:var(--avatar-small-medium-size);width:var(--avatar-small-medium-size);min-width:var(--avatar-small-medium-size);font-size:var(--avatar-small-medium-font-size);line-height:var(--avatar-small-medium-line-height);font-weight:var(--avatar-small-medium-font-weight);letter-spacing:var(--avatar-small-medium-letter-spacing)}.nx-avatar--small-medium[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-small-medium-icon-size)}.nx-avatar--medium[_nghost-%COMP%]{height:var(--avatar-medium-size);width:var(--avatar-medium-size);min-width:var(--avatar-medium-size);font-size:var(--avatar-medium-font-size);line-height:var(--avatar-medium-line-height);font-weight:var(--avatar-medium-font-weight);letter-spacing:var(--avatar-medium-letter-spacing)}.nx-avatar--medium[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-medium-icon-size)}.nx-avatar--large[_nghost-%COMP%]{height:var(--avatar-large-size);width:var(--avatar-large-size);min-width:var(--avatar-large-size);font-size:var(--avatar-large-font-size);line-height:var(--avatar-large-line-height);font-weight:var(--avatar-large-font-weight);letter-spacing:var(--avatar-large-letter-spacing)}.nx-avatar--large[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-large-icon-size)}.nx-avatar--xlarge[_nghost-%COMP%]{height:var(--avatar-xlarge-size);width:var(--avatar-xlarge-size);min-width:var(--avatar-xlarge-size);font-size:var(--avatar-xlarge-font-size);line-height:var(--avatar-xlarge-line-height);font-weight:var(--avatar-xlarge-font-weight);letter-spacing:var(--avatar-xlarge-letter-spacing)}.nx-avatar--xlarge[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-xlarge-icon-size)}.is-button[_nghost-%COMP%]{border:none;padding:0;cursor:pointer;position:relative}.is-button[_nghost-%COMP%]     figure[nxfigure]:after, .is-button[_nghost-%COMP%]:before{content:"";width:100%;height:100%;position:absolute;border-radius:50%;top:0;left:0}.is-button[_nghost-%COMP%]:hover:not(:disabled)     figure[nxfigure]:after, .is-button[_nghost-%COMP%]:hover:not(:disabled):before{background-color:rgba(0,0,0,.1)}.is-button[_nghost-%COMP%]:active:not(:disabled)     figure[nxfigure]:after, .is-button[_nghost-%COMP%]:active:not(:disabled):before{background-color:rgba(0,0,0,.2)}.is-button[_nghost-%COMP%]:disabled{cursor:not-allowed;opacity:var(--avatar-disabled-opacity)}.is-button[_nghost-%COMP%]:focus{outline:none}.is-button[_nghost-%COMP%]::-moz-focus-inner{border:0}.is-button.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.is-button.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border:2px solid windowText}.is-button[_nghost-%COMP%]{border:2px solid buttonText;background-color:buttonFace}.is-button[_nghost-%COMP%]:disabled{opacity:1;border-color:GrayText;color:GrayText}}'],changeDetection:0}),s),w=((o=function(){function a(t,e){n(this,a),this._elementRef=t,this._focusMonitor=e,this._focusMonitor.monitor(this._elementRef)}return t(a,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),a}()).\u0275fac=function(a){return new(a||o)(m.Pb(m.l),m.Pb(b.g))},o.\u0275dir=m.Kb({type:o,selectors:[["button","nxAvatar",""]],hostVars:2,hostBindings:function(a,t){2&a&&m.Hb("is-button",!0)}}),o),M=r("mN63"),z=r("csxQ"),_=r("+vaC"),C=r("ITZj"),P=((u=function a(){n(this,a)}).\u0275fac=function(a){return new(a||u)},u.\u0275cmp=m.Jb({type:u,selectors:[["avatar-example"]],decls:7,vars:0,consts:[["nxAvatar","",1,"nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"nx-margin-right-s"],["name","user-o"],["nxAvatar","","aria-label","Logged in as Samantha Owl"],["nxFigure","rounded"],["src","docs-assets/images/vidar-nordli-mathisen-owl-unsplash.jpg","alt","A photo of an owl, made by Vidar Nordli-Mathisen"]],template:function(a,t){1&a&&(m.Vb(0,"div",0),m.Jc(1,"MD"),m.Ub(),m.Vb(2,"div",1),m.Qb(3,"nx-icon",2),m.Ub(),m.Vb(4,"div",3),m.Vb(5,"figure",4),m.Qb(6,"img",5),m.Ub(),m.Ub())},directives:[p,_.a,C.a],styles:["[_nghost-%COMP%]{display:flex}"]}),u),O=((g=function a(){n(this,a)}).\u0275fac=function(a){return new(a||g)},g.\u0275cmp=m.Jb({type:g,selectors:[["avatar-button-example"]],decls:12,vars:0,consts:[["nxAvatar","","aria-label","show user details",1,"nx-margin-right-s"],["name","user-o"],["nxFigure","rounded"],["src","docs-assets/images/vidar-nordli-mathisen-owl-unsplash.jpg","alt","A photo of an owl, made by Vidar Nordli-Mathisen"],["nxAvatar","","aria-label","show user details","disabled","",1,"nx-margin-right-s"],["nxAvatar","","aria-label","show user details","disabled",""]],template:function(a,t){1&a&&(m.Vb(0,"button",0),m.Jc(1,"MD"),m.Ub(),m.Vb(2,"button",0),m.Qb(3,"nx-icon",1),m.Ub(),m.Vb(4,"button",0),m.Vb(5,"figure",2),m.Qb(6,"img",3),m.Ub(),m.Ub(),m.Vb(7,"button",4),m.Qb(8,"nx-icon",1),m.Ub(),m.Vb(9,"button",5),m.Vb(10,"figure",2),m.Qb(11,"img",3),m.Ub(),m.Ub())},directives:[w,p,_.a,C.a],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap}"]}),g),y=((v=function a(){n(this,a)}).\u0275fac=function(a){return new(a||v)},v.\u0275cmp=m.Jb({type:v,selectors:[["avatar-colors-example"]],decls:12,vars:0,consts:[["nxAvatar","","size","xsmall",1,"nx-margin-right-xs"],["nxAvatar","","size","small",1,"nx-margin-right-xs"],["nxAvatar","","size","small-medium",1,"nx-margin-right-xs"],["nxAvatar","","size","medium",1,"nx-margin-right-xs"],["nxAvatar","","size","large",1,"nx-margin-right-xs"],["nxAvatar","","size","xlarge"]],template:function(a,t){1&a&&(m.Vb(0,"div",0),m.Jc(1,"MD"),m.Ub(),m.Vb(2,"div",1),m.Jc(3,"MD"),m.Ub(),m.Vb(4,"div",2),m.Jc(5,"MD"),m.Ub(),m.Vb(6,"div",3),m.Jc(7,"MD"),m.Ub(),m.Vb(8,"div",4),m.Jc(9,"MD"),m.Ub(),m.Vb(10,"div",5),m.Jc(11,"MD"),m.Ub())},directives:[p],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap}"]}),v),V=((c=function a(){n(this,a)}).\u0275fac=function(a){return new(a||c)},c.\u0275cmp=m.Jb({type:c,selectors:[["avatar-colors-example"]],decls:14,vars:0,consts:[[1,"container","nx-margin-bottom-m"],["nxAvatar","",1,"color-1","nx-margin-right-s"],["nxAvatar","",1,"color-2","nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"color-3"],["name","user-o"],[1,"container"],["nxAvatar","",1,"color-4","nx-margin-right-s"],["nxAvatar","",1,"color-5","nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"color-6"]],template:function(a,t){1&a&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Jc(2,"MD"),m.Ub(),m.Vb(3,"div",2),m.Jc(4,"MD"),m.Ub(),m.Vb(5,"div",3),m.Qb(6,"nx-icon",4),m.Ub(),m.Ub(),m.Vb(7,"div",5),m.Vb(8,"div",6),m.Jc(9,"MD"),m.Ub(),m.Vb(10,"div",7),m.Jc(11,"MD"),m.Ub(),m.Vb(12,"div",8),m.Qb(13,"nx-icon",4),m.Ub(),m.Ub())},directives:[p,_.a],styles:[".container[_ngcontent-%COMP%]{display:flex}.color-1[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-1)}.color-2[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-2)}.color-3[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-3)}.color-4[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-4)}.color-4[_ngcontent-%COMP%], .color-5[_ngcontent-%COMP%]{color:var(--documentation-avatar-text-color)}.color-5[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-5)}.color-6[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-6);color:var(--documentation-avatar-text-color)}"]}),c),U=((l=function(){function a(){n(this,a)}return t(a,null,[{key:"components",value:function(){return{avatar:P,"avatar-button":O,"avatar-size":y,"avatar-colors":V}}}]),a}()).\u0275mod=m.Nb({type:l}),l.\u0275inj=m.Mb({factory:function(a){return new(a||l)},imports:[[h,M.c,z.a]]}),l)}}])}();