(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/sJ9":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)}}),e})();n("LktG")},LktG:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("fXoL");const r=["nxCopytext",""],i=["*"];let s=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&a.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:i,decls:1,vars:0,template:function(e,t){1&e&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},YLcv:function(e,t,n){"use strict";n.r(t),n.d(t,"RTLExamplesModule",function(){return b});var a=n("eV8M"),r=n("gkbm"),i=n("/sJ9"),s=n("/BTq"),c=n("fXoL"),o=n("cH1L"),l=n("eC/v"),p=n("LktG"),g=n("fCGn");let h=(()=>{class e{constructor(){this.sliderDemoValue=10}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["rtl-basic-example"]],decls:6,vars:4,consts:[["dir","rtl"],["nxHeadline","subsection-medium"],["nxCopytext","small"],["nxLabel","Slider Test Label",3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"h3",1),c.Jc(2,"RTL example content"),c.Sb(),c.Tb(3,"p",2),c.Jc(4,"Some copy text in RTL container."),c.Sb(),c.Tb(5,"nx-slider",3),c.ac("nxValueChange",function(e){return t.sliderDemoValue=e}),c.Sb(),c.Sb()),2&e&&(c.Bb(5),c.kc("nxMin",10)("nxMax",110)("nxStep",2)("nxValue",t.sliderDemoValue))},directives:[o.b,l.a,p.a,g.a],styles:[""]}),e})();var u=n("LTpZ"),m=n("ofXK");let x=(()=>{class e{constructor(){this.direction="ltr",this.sliderDemoValue=10}toggleDirection(){this.direction="ltr"===this.direction?"rtl":"ltr"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["rtl-dynamic-example"]],decls:10,vars:8,consts:[[3,"dir"],["nxHeadline","subsection-medium"],["nxCopytext","small"],[1,"nx-margin-bottom-m"],["nxLabel","Slider Test Label",3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"],["nxButton","",3,"click"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"h3",1),c.Jc(2,"Dynamic direction switching"),c.Sb(),c.Tb(3,"p",2),c.Jc(4),c.fc(5,"uppercase"),c.Sb(),c.Tb(6,"div",3),c.Tb(7,"nx-slider",4),c.ac("nxValueChange",function(e){return t.sliderDemoValue=e}),c.Sb(),c.Sb(),c.Tb(8,"button",5),c.ac("click",function(){return t.toggleDirection()}),c.Jc(9,"Switch container direction"),c.Sb(),c.Sb()),2&e&&(c.kc("dir",t.direction),c.Bb(4),c.Lc("Some copy text in ",c.gc(5,6,t.direction)," container."),c.Bb(3),c.kc("nxMin",10)("nxMax",110)("nxStep",2)("nxValue",t.sliderDemoValue))},directives:[o.b,l.a,p.a,g.a,u.a],pipes:[m.x],styles:[""]}),e})(),b=(()=>{class e{static components(){return{"rtl-basic":h,"rtl-dynamic":x}}}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[o.a,m.c,a.a,r.b,i.a,s.a]]}),e})()}}]);