(function(t){function e(e){for(var r,c,a=e[0],l=e[1],s=e[2],f=0,m=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/hearthstone-helper/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"51fb":function(t,e,n){"use strict";var r=n("664e"),o=n.n(r);o.a},"64a9":function(t,e,n){},"664e":function(t,e,n){},"7c06":function(t,e,n){},"81a0":function(t,e,n){"use strict";var r=n("7c06"),o=n.n(r);o.a},c69f:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Checkerboard")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("b",[t._v("Hearthstone Helper")])]),n("el-main",[n("Team",{attrs:{role:t.enemy}}),n("Team",{staticStyle:{"margin-top":"20px"},attrs:{role:t.teammate}}),n("operation-buttons")],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"row",attrs:{type:"flex",justify:"center",gutter:20}},t._l(7,(function(e){return n("el-col",{key:e,attrs:{span:4}},[n("identity",{attrs:{role:t.role,"key-char":t.keys[e-1],id:e-1}})],1)})),1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card",attrs:{"body-style":{padding:"0px"},shadow:t.isFocused?"always":"hover"}},[n("div",{staticClass:"banner-text",style:t.bannerStyle},[t._v(t._s(t.keyChar))]),n("div",{staticClass:"contain"},[n("el-input",{ref:"attack",staticClass:"input",attrs:{size:"medium"},on:{input:function(e){return t.changeFocus("attack")}},model:{value:t.entity.attack,callback:function(e){t.$set(t.entity,"attack",e)},expression:"entity.attack"}}),n("el-input",{ref:"defense",staticClass:"input",attrs:{size:"medium"},on:{input:function(e){return t.changeFocus("defense")}},model:{value:t.entity.life,callback:function(e){t.$set(t.entity,"life",e)},expression:"entity.life"}}),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{icon:"el-icon-refresh-right",plain:"",circle:"",size:"small"},on:{click:function(e){t.entity.attack=t.entity.life=0}}}),n("el-button",{attrs:{type:t.buttonType,icon:"el-icon-check",plain:"",circle:"",size:"small"},on:{click:function(e){return t.commitSelection(t.entity)}}})],1)],1)])},f=[],m=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),p=(n("c5f6"),n("2f62"));function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(m["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={name:"Identity",data:function(){return{attack:0,defense:0}},props:{title:String,id:Number,role:String,keyChar:String},mounted:function(){var t=this;this.$store.watch((function(t){return t.nextFocus}),(function(e,n){e.id===Number(t.id)&&e.team===t.role&&t.$refs[e.position].focus()}),{deep:!0})},computed:d({bannerStyle:function(){return"teammate"===this.role?{height:"37px","background-color":"#c6f1d6","border-bottom":"1px solid #EBEEF5"}:{height:"37px","background-color":"#ff8080","border-bottom":"1px solid #EBEEF5"}},buttonType:function(){return"teammate"===this.role?"primary":"danger"},entity:function(){return this.getEntity(this.role,this.id)},isFocused:function(){return this.entity===this.getSelections[0]||this.entity===this.getSelections[1]}},Object(p["e"])(["nextFocus"]),{},Object(p["c"])(["getEntity","getSelections"])),methods:d({changeFocus:function(t){this.$store.dispatch("changeFocus",{id:this.id,position:t,team:this.role})}},Object(p["b"])(["commitSelection"]))},b=h,g=(n("e942"),n("2877")),v=Object(g["a"])(b,u,f,!1,null,null,null),O=v.exports,w=n("d225"),S=function t(e,n){Object(w["a"])(this,t),this.id=e,this.attack=0,this.life=0,this.team=n},j="teammate",k="enemy",x=function t(){Object(w["a"])(this,t),this.teammates=[],this.enemies=[];for(var e=0;e<7;e++){var n=new S(e,j),r=new S(e,k);this.teammates.push(n),this.enemies.push(r)}};r["default"].use(p["a"]);var F="teammate",_="attack",E="defense",P=new p["a"].Store({state:{teammateSelection:null,enemySelection:null,currentFlow:null,flows:[],nextFocus:{id:0,position:_}},mutations:{init:function(t){for(var e=0;e<7;e++)t.flows.push(new x);t.currentFlow=t.flows[0]},changeFocus:function(t,e){t.nextFocus.id=e.id,t.nextFocus.position=e.position,t.nextFocus.team=e.team},selectTeammate:function(t,e){t.teammateSelection=e},selectEnemy:function(t,e){t.enemySelection=e},battle:function(t){null!==t.teammateSelection&&null!==t.enemySelection&&(t.teammateSelection.life-=t.enemySelection.attack,t.teammateSelection.life=t.teammateSelection.life<0?0:t.teammateSelection.life,t.enemySelection.life-=t.teammateSelection.attack,t.enemySelection.life=t.enemySelection.life<0?0:t.enemySelection.life,t.teammateSelection=null,t.enemySelection=null)},saveFlow:function(t,e){null!==t.currentFlow&&(t.flows[e]=JSON.parse(JSON.stringify(t.currentFlow)))},changeFlow:function(t,e){t.currentFlow=t.flows[e]}},actions:{init:function(t){t.commit("init")},changeFocus:function(t,e){e.position===_?t.commit("changeFocus",{id:e.id,position:E,team:e.team}):t.commit("changeFocus",{id:(e.id+1)%7,position:_,team:e.team})},commitSelection:function(t,e){e.team===F?(t.commit("selectTeammate",e),null!==t.state.enemySelection&&t.commit("battle")):(t.commit("selectEnemy",e),null!==t.state.teammateSelection&&t.commit("battle"))}},getters:{getEntity:function(t){return function(e,n){return null===t.currentFlow?new S(0,F):e===F?t.currentFlow.teammates[n]:t.currentFlow.enemies[n]}},getSelections:function(t){return[t.teammateSelection,t.enemySelection]}}}),$=n("9b6a"),C="teammate",T="enemy",D=["q","w","e","r","t","y","u"],z=["a","s","d","f","g","h","j"];function B(){D.forEach((function(t,e){Object($["a"])(t,(function(t,n){t.preventDefault();var r=P.getters.getEntity(T,e);P.dispatch("commitSelection",r)}))})),z.forEach((function(t,e){Object($["a"])(t,(function(t,n){t.preventDefault();var r=P.getters.getEntity(C,e);P.dispatch("commitSelection",r)}))}))}var J={name:"Team",components:{Identity:O},props:{role:String},computed:{keys:function(){return"teammate"===this.role?z:D}}},M=J,N=(n("81a0"),Object(g["a"])(M,l,s,!1,null,null,null)),H=N.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"space-between"}},t._l(5,(function(e){return n("el-col",{key:e,staticStyle:{display:"flex"}},[n("el-button",{staticStyle:{margin:"auto"},attrs:{plain:""},on:{click:function(n){return t.saveFlow(e-1)}}},[t._v("保存存档"+t._s(e))])],1)})),1),n("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"space-between"}},t._l(5,(function(e){return n("el-col",{key:e,staticStyle:{display:"flex"}},[n("el-button",{staticStyle:{margin:"auto"},attrs:{type:"success",plain:""},on:{click:function(n){return t.changeFlow(e-1)}}},[t._v("读取存档"+t._s(e))])],1)})),1)],1)},q=[];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach((function(e){Object(m["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={name:"OperationButtons",methods:G({},Object(p["d"])(["saveFlow","changeFlow"]))},L=K,Q=Object(g["a"])(L,I,q,!1,null,"bdc96f8c",null),R=Q.exports,U=r["default"].extend({name:"Checkerboard",components:{Team:H,OperationButtons:R},data:function(){var t="teammate",e="enemy";return{enemy:e,teammate:t}}}),V=U,W=(n("51fb"),Object(g["a"])(V,c,a,!1,null,null,null)),X=W.exports,Y={name:"app",components:{Checkerboard:X},mounted:function(){this.$store.dispatch("init"),B()}},Z=Y,tt=(n("034f"),Object(g["a"])(Z,o,i,!1,null,null,null)),et=tt.exports,nt=n("5c96"),rt=n.n(nt);n("c69f");r["default"].use(rt.a),r["default"].config.productionTip=!1,new r["default"]({store:P,render:function(t){return t(et)}}).$mount("#app")},e942:function(t,e,n){"use strict";var r=n("f9f3"),o=n.n(r);o.a},f9f3:function(t,e,n){}});
//# sourceMappingURL=app.18884fae.js.map