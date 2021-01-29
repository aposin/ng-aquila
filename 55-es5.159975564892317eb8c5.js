!function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{guAx:function(e,n,a){"use strict";a.r(n),a.d(n,"AutocompleteExamplesModule",function(){return N});var i=a("tk/3"),c=a("ierq"),r=a("AqTC"),l=a("ZczJ"),u=a("p9I2"),p=a("fXoL"),s=a("g+D5"),m=a("3Jzs"),f=a("ofXK"),b=a("SNKa");function C(e,t){if(1&e&&(p.Tb(0,"nx-autocomplete-option",3),p.Jc(1),p.Sb()),2&e){var o=t.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var d,x=((d=function e(){o(this,e),this.options="Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,\n    Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,\n    Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",")}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=p.Hb({type:d,selectors:[["autocomplete-basic-example"]],decls:4,vars:2,consts:[["type","text",3,"nxAutocomplete"],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e&&(p.Ob(0,"input",0),p.Tb(1,"nx-autocomplete",null,1),p.Hc(3,C,2,2,"nx-autocomplete-option",2),p.Sb()),2&e){var o=p.rc(2);p.kc("nxAutocomplete",o),p.Bb(3),p.kc("ngForOf",t.options)}},directives:[s.a,m.a,f.p,b.a],styles:[""]}),d),v=a("3Pt+"),h=a("lJxs"),y=a("/LVR"),w=a("HXSb"),g=a("nK+a"),k=a("Dr49"),A=a("tg6J"),O=a("v44Z");function T(e,t){if(1&e&&(p.Tb(0,"nx-autocomplete-option",12),p.Jc(1),p.fc(2,"lowercase"),p.Sb()),2&e){var o=t.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",p.gc(2,2,o)," ")}}var B,S,F=((S=function(){function e(t){o(this,e),this.wikipediaService=t,this.modelBoundData="asdf",this.testForm=(new v.d).group({autocomplete:[null,v.y.required]}),this.dynamicBackendOptions=function(e){return t.search(e).pipe(Object(h.a)(function(e){return e.map(function(e){return e.value})}))}}return t(e,[{key:"simpleFilteredOptions",value:function(e){return e?"Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",").filter(function(t){return t.toLowerCase().indexOf(e.toLowerCase())>=0}):[]}}]),e}()).\u0275fac=function(e){return new(e||S)(p.Nb(y.a))},S.\u0275cmp=p.Hb({type:S,selectors:[["autocomplete-data-binding-example"]],features:[p.Ab([y.a])],decls:21,vars:10,consts:[["nxLabel","Template bound"],["nxInput","","type","text","nxAutocompleteDebounce","0",3,"nxAutocomplete","ngModel","ngModelChange"],["auto3","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"formGroup"],["nxLabel","Reactive bound"],["nxInput","","type","text","formControlName","autocomplete",3,"nxAutocomplete","nxAutocompleteItems"],["auto4",""],["nxLabel","Provide this required field"],["nxInput","","ngModel","","required","",3,"nxAutocomplete","nxAutocompleteItems"],["nxError",""],["auto5","nxAutocomplete"],[3,"value"]],template:function(e,t){if(1&e&&(p.Tb(0,"nx-formfield",0),p.Tb(1,"input",1),p.ac("ngModelChange",function(e){return t.modelBoundData=e}),p.Sb(),p.Sb(),p.Tb(2,"nx-autocomplete",null,2),p.Hc(4,T,3,4,"nx-autocomplete-option",3),p.Sb(),p.Jc(5),p.Tb(6,"form",4),p.Tb(7,"nx-formfield",5),p.Ob(8,"input",6),p.Ob(9,"nx-autocomplete",null,7),p.Sb(),p.Sb(),p.Jc(11),p.Tb(12,"nx-natural-language-form"),p.Jc(13," Here is a word "),p.Tb(14,"nx-word",8),p.Ob(15,"input",9),p.Tb(16,"div",10),p.Jc(17,"This field is required."),p.Sb(),p.Ob(18,"nx-autocomplete",null,11),p.Sb(),p.Jc(20," with some following copy.\n"),p.Sb()),2&e){var o=p.rc(3),n=p.rc(10),a=p.rc(19);p.Bb(1),p.kc("nxAutocomplete",o)("ngModel",t.modelBoundData),p.Bb(3),p.kc("ngForOf",t.simpleFilteredOptions(t.modelBoundData)),p.Bb(1),p.Lc("\nTemplate bound: ",t.modelBoundData," "),p.Bb(1),p.kc("formGroup",t.testForm),p.Bb(2),p.kc("nxAutocomplete",n)("nxAutocompleteItems",t.dynamicBackendOptions),p.Bb(3),p.Lc("\nReactive form: ",t.testForm.controls.autocomplete.value," "),p.Bb(4),p.kc("nxAutocomplete",a)("nxAutocompleteItems",t.dynamicBackendOptions)}},directives:[w.b,g.b,s.a,v.a,v.p,v.s,m.a,f.p,v.A,v.q,v.i,v.g,k.a,A.a,v.w,O.a,b.a],pipes:[f.m],styles:[""]}),S),L=((B=function e(t){o(this,e),this.wikipediaService=t,this.dynamicBackendOptions=function(e){return t.search(e).pipe(Object(h.a)(function(e){return e.map(function(e){return e.value})}))}}).\u0275fac=function(e){return new(e||B)(p.Nb(y.a))},B.\u0275cmp=p.Hb({type:B,selectors:[["autocomplete-default-rendering-example"]],features:[p.Ab([y.a])],decls:3,vars:2,consts:[["type","text",3,"nxAutocomplete","nxAutocompleteItems"],["auto2","nxAutocomplete"]],template:function(e,t){if(1&e&&(p.Ob(0,"input",0),p.Ob(1,"nx-autocomplete",null,1)),2&e){var o=p.rc(2);p.kc("nxAutocomplete",o)("nxAutocompleteItems",t.dynamicBackendOptions)}},directives:[s.a,m.a],styles:[""]}),B);function J(e,t){if(1&e&&(p.Tb(0,"nx-autocomplete-option",4),p.Jc(1),p.Sb()),2&e){var o=t.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var I,H=((I=function(){function e(){o(this,e),this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}return t(e,[{key:"filter",value:function(e){this.filteredOptions=this.options.filter(function(t){return new RegExp(e,"gi").test(t)})}}]),e}()).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=p.Hb({type:I,selectors:[["autocomplete-filtering-example"]],decls:5,vars:2,consts:[["type","text",3,"nxAutocomplete","input"],["animalInput",""],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e){var o=p.Ub();p.Tb(0,"input",0,1),p.ac("input",function(){p.vc(o);var e=p.rc(1);return t.filter(e.value)}),p.Sb(),p.Tb(2,"nx-autocomplete",null,2),p.Hc(4,J,2,2,"nx-autocomplete-option",3),p.Sb()}if(2&e){var n=p.rc(3);p.kc("nxAutocomplete",n),p.Bb(4),p.kc("ngForOf",t.filteredOptions)}},directives:[s.a,m.a,f.p,b.a],styles:[""]}),I),D=a("aQnR"),q=a("BQ2b"),R=a("5/jY"),z=a("eC/v");function M(e,t){if(1&e&&(p.Tb(0,"nx-autocomplete-option",9),p.Jc(1),p.Sb()),2&e){var o=t.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var j,E,K=((E=function(){function e(){o(this,e),this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}return t(e,[{key:"filter",value:function(e){this.filteredOptions=this.options.filter(function(t){return new RegExp(e,"gi").test(t)})}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=p.Hb({type:E,selectors:[["autocomplete-outline-example"]],decls:11,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxLabel","Animals","appearance","outline","nxFloatLabel","always"],["nxInput","","type","text",3,"nxAutocomplete","input"],["animalInput",""],["animal1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e){var o=p.Ub();p.Tb(0,"div",0),p.Tb(1,"div",1),p.Tb(2,"div",2),p.Tb(3,"h4",3),p.Jc(4,"Autocomplete with appearance outline"),p.Sb(),p.Tb(5,"nx-formfield",4),p.Tb(6,"input",5,6),p.ac("input",function(){p.vc(o);var e=p.rc(7);return t.filter(e.value)}),p.Sb(),p.Tb(8,"nx-autocomplete",null,7),p.Hc(10,M,2,2,"nx-autocomplete-option",8),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()}if(2&e){var n=p.rc(9);p.Bb(6),p.kc("nxAutocomplete",n),p.Bb(4),p.kc("ngForOf",t.filteredOptions)}},directives:[D.a,q.a,R.a,z.a,w.b,g.b,s.a,m.a,f.p,b.a],styles:[""]}),E),N=((j=function(){function e(){o(this,e)}return t(e,null,[{key:"components",value:function(){return{"autocomplete-basic":x,"autocomplete-data-binding":F,"autocomplete-default-rendering":L,"autocomplete-filtering":H,"autocomplete-outline":K}}}]),e}()).\u0275mod=p.Lb({type:j}),j.\u0275inj=p.Kb({factory:function(e){return new(e||j)},imports:[[l.a,r.b,u.a,c.a,i.c,i.d]]}),j)}}])}();