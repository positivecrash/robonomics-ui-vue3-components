"use strict";var e=require("vue");const o={"aria-label":"Main App Navigation",role:"navigation",class:"robo-sidebar"},t={key:0,class:"robo-sidebar-title"},n={class:"robo-sidebar-content"};exports.render=function(l,a,c,r,i,s){const d=e.resolveComponent("font-awesome-icon");return e.openBlock(),e.createElementBlock("nav",o,[l.title?(e.openBlock(),e.createElementBlock("div",t,[l.icon?(e.openBlock(),e.createBlock(d,{key:0,icon:l.icon,class:"icon"},null,8,["icon"])):e.createCommentVNode("v-if",!0),e.createElementVNode("span",null,e.toDisplayString(l.title),1)])):e.createCommentVNode("v-if",!0),e.createElementVNode("div",n,[e.renderSlot(l.$slots,"default")])])};
