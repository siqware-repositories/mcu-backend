(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{liFs:function(e,t,i){"use strict";i.r(t);var s=i("o0o1"),n=i.n(s);function r(e,t,i,s,n,r,o){try{var a=e[r](o),c=a.value}catch(e){return void i(e)}a.done?t(c):Promise.resolve(c).then(s,n)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(s,n){var o=e.apply(t,i);function a(e){r(o,s,n,a,c,"next",e)}function c(e){r(o,s,n,a,c,"throw",e)}a(void 0)}))}}var a,c,l,d,u,v={name:"Video",data:function(){return{is_edit:!1,selected:[],tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],video:{title:"",url:""}}},computed:{all_videos:function(){return this.$store.getters.all_videos}},created:(u=o(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchVideo();case 2:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)}),methods:{fetchVideo:(d=o(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchVideo");case 2:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)}),storeVideo:(l=o(n.a.mark((function e(){var t,i=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this,this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),i.$store.dispatch("storeVideo",t.video).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),resetField:function(){this.video={title:"",url:""}},editVideo:function(){var e=this;e.$store.dispatch("editVideo",e.selected[0].id).then((function(t){e.video=t,e.is_edit=!0}))},updateVideo:(c=o(n.a.mark((function e(){var t,i=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this,this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),i.$store.dispatch("updateVideo",t.video).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField(),t.is_edit=!1,t.selected=[],t.fetchVideo()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),destroyVideo:(a=o(n.a.mark((function e(){var t,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).$vs.loading(),i=t.selected.map(function(){var e=o(n.a.mark((function e(i){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("destroyVideo",i.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(i).then((function(){t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.selected=[],t.$vs.loading.close()}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})}},p=i("KHd+"),h=Object(p.a)(v,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("vx-card",{attrs:{"no-shadow":""}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col lg:w-1/3 w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ចំណងជើង",name:"title"},model:{value:e.video.title,callback:function(t){e.$set(e.video,"title",t)},expression:"video.title"}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),i("div",{staticClass:"vx-col lg:w-1/3 w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"តំណរ",name:"url"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null}},model:{value:e.video.url,callback:function(t){e.$set(e.video,"url",t)},expression:"video.url"}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("url"),expression:"errors.has('url')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("url")))])],1)]),e._v(" "),i("div",{staticClass:"flex btn-group my-2"},[e.is_edit?e._e():i("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.storeVideo}},[e._v("រក្សាទុក")]),e._v(" "),e.is_edit?i("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.updateVideo}},[e._v("កែប្រែ")]):e._e()],1),e._v(" "),i("vs-divider"),e._v(" "),i("div",{staticClass:"btn-group flex"},[e.selected.length?i("vs-button",{attrs:{color:"danger",icon:"icon-trash-2","icon-pack":"feather",type:"relief"},on:{click:e.destroyVideo}},[e._v("លុប\n        ")]):e._e(),e._v(" "),1===e.selected.length?i("vs-button",{attrs:{icon:"icon-edit","icon-pack":"feather",type:"relief"},on:{click:e.editVideo}},[e._v("កែប្រែ\n        ")]):e._e()],1),e._v(" "),i("vs-table",{attrs:{multiple:"",pagination:"","max-items":"10",search:"",data:e.all_videos},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,n){return i("vs-tr",{key:n,attrs:{data:t}},[i("vs-td",{attrs:{data:s[n].id}},[e._v("\n                    "+e._s(s[n].id)+"\n                ")]),e._v(" "),i("vs-td",{attrs:{data:s[n].url}},[i("iframe",{attrs:{width:"200",height:"50",src:"https://www.youtube.com/embed/"+s[n].url,frameborder:"0"}})]),e._v(" "),i("vs-td",{attrs:{data:s[n].title}},[e._v("\n                    "+e._s(s[n].title)+"\n                ")]),e._v(" "),i("vs-td",{attrs:{data:s[n].created_at}},[e._v("\n                    "+e._s(s[n].created_at)+"\n                ")])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[i("template",{slot:"thead"},[i("vs-th",{attrs:{"sort-key":"id"}},[e._v("ល.រ")]),e._v(" "),i("vs-th",{attrs:{"sort-key":"url"}},[e._v("តំណរ")]),e._v(" "),i("vs-th",{attrs:{"sort-key":"title"}},[e._v("ចំណងជើង")]),e._v(" "),i("vs-th",{attrs:{"sort-key":"created_at"}},[e._v("កាលបរិច្ឆេទ")])],1)],2)],1)}),[],!1,null,null,null);t.default=h.exports}}]);