(function(t){function e(e){for(var r,a,s=e[0],l=e[1],u=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0234":function(t,e,n){"use strict";n("21e2")},"034f":function(t,e,n){"use strict";n("85ec")},"10a5":function(t,e,n){},"21e2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("name"),n("pole",{attrs:{promise:t.promise},on:{"change-value":t.addToDo,"to-click":t.toClick}}),n("spisok",{attrs:{list:t.list}})],1)},o=[],a=(n("a630"),n("3ca3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("p",{staticClass:"list"},[t._v(" "+t._s(t.getName)+", вот твой список задач. Осталось выполнить "+t._s(this.list.length)+" ")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.toogle}},[t._v(" "+t._s(t.visiblle?"Закрыть список":"Открыть список")+" ")]),n("transition",{attrs:{name:"tracking"}},[t.visiblle?n("div",{staticClass:"flex"},[n("transition-group",{attrs:{name:"flicker"}},t._l(t.list,(function(e,r){return n("span",{key:r,ref:"value",refInFor:!0,staticClass:"item",on:{contextmenu:function(e){return e.preventDefault(),t.add(r)},dblclick:function(e){return t.removeItem(r)},mouseup:function(e){return"button"in e&&1!==e.button?null:t.content(r)}}},[t._v(t._s(e))])})),0)],1):t._e()])],1)}),s=[],l=(n("a434"),{props:{list:Array},data:function(){return{visiblle:!1}},computed:{getName:function(){return this.$store.getters.getFirstName}},methods:{toogle:function(){this.visiblle=!this.visiblle},add:function(t){this.$refs.value[t].classList.toggle("important")},removeItem:function(t){this.list.splice(t,1)},content:function(t){this.$refs.value[t].textContent=document.querySelector(".flex-nowrap").childNodes[1].value}}}),u=l,c=(n("5a13"),n("2877")),p=Object(c["a"])(u,a,s,!1,null,"74c28f48",null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group flex-nowrap"},[n("span",{staticClass:"input-group-text",attrs:{id:"addon-wrapping"}},[t._v(t._s(this.promise))]),n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"квартиру,машину,мировую славу","aria-describedby":"addon-wrapping"},on:{change:t.changeValue}}),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.toClick}},[t._v(" Добавить ")])])},d=[],h={props:{promise:String},methods:{changeValue:function(){this.$emit("change-value")},toClick:function(){this.$emit("to-click")}}},v=h,g=Object(c["a"])(v,m,d,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-text"},[t._v("Имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text","aria-label":"First name"},domProps:{value:t.firstName},on:{change:t.getName,input:function(e){e.target.composing||(t.firstName=e.target.value)}}})])},_=[],N={data:function(){return{firstName:null}},methods:{getName:function(){this.$store.dispatch("changeName",this.firstName),document.querySelector(".input-group").childNodes[1].value=""}}},x=N,w=(n("0234"),Object(c["a"])(x,y,_,!1,null,"1988b14d",null)),k=w.exports,C={name:"App",components:{spisok:f,pole:b,name:k},data:function(){return{list:[],promise:"Я хочу",item:"",length:2}},methods:{addToDo:function(){this.item=event.target.value},toClick:function(){Array.from(this.item).length>this.length?this.list.push(this.item):alert("Введите что-нибудь (ещё)"),document.querySelector(".flex-nowrap").childNodes[1].value="",document.querySelector(".flex-nowrap").childNodes[1].focus()}}},O=C,j=(n("034f"),Object(c["a"])(O,i,o,!1,null,null,null)),S=j.exports,$=n("2f62");r["a"].use($["a"]);var P=new $["a"].Store({state:{firstName:null},mutations:{changeName:function(t,e){t.firstName=e}},actions:{changeName:function(t,e){var n=t.commit;n("changeName",e)}},getters:{getFirstName:function(t){return t.firstName}}});r["a"].config.productionTip=!1,new r["a"]({store:P,render:function(t){return t(S)}}).$mount("#app")},"5a13":function(t,e,n){"use strict";n("10a5")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.053eb770.js.map