(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("2ab95bef",content,!0,{sourceMap:!1})},358:function(t,e,n){"use strict";var r={props:{pheader:{type:String,default:""},psubheader:{type:String,default:""},psubtitle:{type:String,default:""},pbgimage:{type:Object,default:function(){return{color1:"rgba(85, 255, 0, 0.2)",color2:"rgba(0, 255, 255, 0.5)",url:"/imgs/seodigital.jpg"}}},pstyle:{type:Object,default:function(){return{color:"text-primary",buttonVariant:"info"}}}},computed:{fontcolor:function(){return this.pstyle.color}}},o=n(11),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"text-center p-3"},[n("b-container",{class:t.fontcolor,attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"p-3"},[n("h1",[t._v(t._s(t.pheader))])])],1),t._v(" "),t.psubheader?n("b-row",{staticClass:"row"},[n("b-col",[n("h2",[t._v(t._s(t.psubheader))])])],1):t._e(),t._v(" "),t.psubtitle?n("b-row",{staticClass:"row m-3"},[n("b-col",[n("h3",[t._v("\n          "+t._s(t.psubtitle)+"\n        ")])])],1):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports},359:function(t,e,n){"use strict";var r={props:{pcontent:{type:Object,default:function(){return{text:"sample text",bgImage:"/imgs/Clouds1.webp",inlineImage:"/imgs/Clouds1.webp"}}},pstyle:{type:Object,default:function(){return{bgStyle:"parralaxNormal text-primary  text-left p-5",inlineImageStyle:"inlineImage20 inlineImageLeft"}}}},computed:{isInlineImage:function(){return!!this.pcontent.inlineImage},background:function(){var t=this.pcontent.bgImage||void 0;return{backgroundImage:t?"url(".concat(t,")"):void 0,backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}}},o=n(11),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{class:t.pstyle.bgStyle,style:t.background,attrs:{fluid:""}},[n("b-row",[t.isInlineImage?n("b-col",[n("img",{class:t.pstyle.inlineImageStyle,attrs:{src:t.pcontent.inlineImage}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.pcontent.text)}})]):n("b-col",[n("p",{domProps:{innerHTML:t._s(t.pcontent.text)}})])],1)],1)},[],!1,null,"b9a188a4",null);e.a=component.exports},368:function(t,e,n){"use strict";var r=n(356);n.n(r).a},369:function(t,e,n){(t.exports=n(41)(!1)).push([t.i,"#animationBanner[data-v-139f2132]{background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover}.anim1[data-v-139f2132]{position:relative;font-weight:900;text-align:center}.anim1 .letters[data-v-139f2132]{position:absolute;margin:auto;left:0;top:.5em;right:0;opacity:0;text-align:center}.anim2[data-v-139f2132]{text-transform:uppercase;letter-spacing:.3em}.anim2[data-v-139f2132],.anim2 .letter[data-v-139f2132]{position:relative;left:0;top:2em}.anim2 .letter[data-v-139f2132]{display:inline-block;line-height:1em;margin:auto}.anim3[data-v-139f2132]{font-weight:800;text-transform:uppercase;letter-spacing:.5em}.anim3 .word[data-v-139f2132]{display:inline-block;line-height:1em;margin:auto;left:0;top:.3em}.anim4[data-v-139f2132]{font-weight:200}.anim4 .anim4-wrapper[data-v-139f2132]{position:relative;display:inline-block;left:0;top:-.3em;text-align:center}.anim4 .line[data-v-139f2132]{opacity:0;position:absolute;left:0;height:2px;width:100%;transform-origin:100% 100%;bottom:0;text-align:center}.anim4 .letter[data-v-139f2132]{display:inline-block;margin:auto;left:0;top:1em;line-height:1em;text-align:center}",""])},372:function(t,e,n){"use strict";n.r(e);n(15);var r={mounted:function(){var t={opacityIn:[0,1],scaleIn:[.2,1],scaleOut:1,durationIn:800,durationOut:600,delay:500},e=document.querySelector(".anim2");e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),(e=document.querySelector(".anim4  .letters")).innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>");this.$anime.timeline({loop:!0}).add({targets:".anim1 .word-1",opacity:t.opacityIn,scale:t.scaleIn,duration:t.durationIn}).add({targets:".anim1 .word-1",opacity:0,scale:t.scaleOut,duration:t.durationOut,easing:"easeInExpo",delay:t.delay}).add({targets:".anim1 .word-2",opacity:t.opacityIn,scale:t.scaleIn,duration:t.durationIn}).add({targets:".anim1 .word-2",opacity:0,scale:t.scaleOut,duration:t.durationOut,easing:"easeInExpo",delay:t.delay}).add({targets:".anim1 .word-3",opacity:t.opacityIn,scale:t.scaleIn,duration:t.durationIn}).add({targets:".anim1 .word-3",opacity:0,scale:t.scaleOut,duration:t.durationOut,easing:"easeInExpo",delay:t.delay}).add({targets:".anim2 .letter",translateY:[100,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1400,delay:function(t,i){return 300+30*i}}).add({targets:".anim2 .letter",translateY:[0,-100],opacity:[1,0],easing:"easeInExpo",duration:1200,delay:function(t,i){return 100+30*i}}).add({targets:".anim3 .word",scale:[1.5,1],opacity:[0,1],easing:"easeOutCirc",duration:800,delay:function(t,i){return 800*i}}).add({targets:".anim3",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3}).add({targets:".anim4 .line",scaleX:[0,1],opacity:[.5,1],easing:"easeInOutExpo",duration:900}).add({targets:".anim4 .letter",opacity:[0,1],translateX:[40,0],translateZ:0,scaleX:[.3,1],easing:"easeOutExpo",duration:800,offset:"-=600",delay:function(t,i){return 150+25*i}}).add({targets:".anim4",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})},methods:{handleScroll:function(){}},props:{pbgimage:{type:Object,default:function(){return{color1:"rgba(85, 255, 0, 0.2)",color2:"rgba(0, 255, 255, 0.5)",url:"/imgs/seodigital.jpg",height:100}}}},computed:{gradient:function(){return{backgroundImage:"linear-gradient(45deg,  ".concat(this.pbgimage.color1,", ").concat(this.pbgimage.color2,"), url(").concat(this.pbgimage.url,")"),width:"100%",height:"".concat(this.pbgimage.height,"vh"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",textTransform:"uppercase"}}}},o=(n(368),n(11)),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"text-center text-secondary",style:t.gradient,attrs:{id:"animationBanner",fluid:""}},[n("b-row",[n("b-col",{attrs:{cols:"2"}}),t._v(" "),n("b-col",{attrs:{cols:"8"}},[n("h1",{staticClass:"anim1"},[n("span",{staticClass:"letters word-1"},[t._v("Modern")]),t._v(" "),n("span",{staticClass:"letters word-2"},[t._v("Lightweight")]),t._v(" "),n("span",{staticClass:"letters word-3"},[t._v("Simple")])]),t._v(" "),n("h2",{staticClass:"anim2"},[t._v("\n        Optimized web, content and search\n      ")]),t._v(" "),n("h3",{staticClass:"anim3"},[n("span",{staticClass:"word"},[t._v("Website")]),t._v(" "),n("span",{staticClass:"word"},[t._v("Optimized content")]),t._v(" "),n("span",{staticClass:"word"},[t._v("SEO")])]),t._v(" "),n("h3",{staticClass:"anim4 text-center"},[n("span",{staticClass:"anim4-wrapper text-center"},[n("span",{staticClass:"letters text-center"},[t._v("Increasing revenue potential through modern web and search solutions")]),t._v(" "),n("span",{staticClass:"line text-center bg-secondary"})])])]),t._v(" "),n("b-col",{attrs:{cols:"2"}})],1)],1)},[],!1,null,"139f2132",null).exports,c=n(358),d={props:["btext","blink"]},m=Object(o.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{staticClass:"text-center",attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("nuxt-link",{staticClass:"linkComponent",attrs:{to:this.blink}},[this._v("\n        "+this._s(this.btext)+"\n      ")])],1)],1)],1)},[],!1,null,"0a68cf5c",null).exports,h=n(359),y={components:{AnimeBannerWordsComponent:l,HeaderComponent:c.a,LinkComponent:m,TextImageComponent:h.a},head:function(){return{title:this.title,meta:[{hid:"oddwave-home",name:this.title,content:this.pheader+" and "+this.panimheader},{hid:"keywords",name:"keywords",content:this.keywords}]}},data:function(t){return{title:"The Odd Wave of website, search and data services",pheader:"The Odd Wave of digital marketing and website services",panimheader:"be where the world is going",psubheader:"to help your business grow",pimageoverlay:"imgs/marketingstrategy.jpg",pimagebanner:"imgs/analytics.jpg",pHeaderImage:{color1:"rgba(255, 0, 255, 0.8) 0%",color2:"rgba(0, 255, 255, 0.7) 100%",url:"imgs/oddwave.jpg",height:40},psubtitle:"Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. We believe that every business should be a success.",btext:"Get in touch",blink:"/contact",content:["We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We provide services across and New Zealand. We are based on the North Shore, Auckland and can talk to you anywhere in New Zealand using various digital channels.","We believe that every business should be successful. Our goal is to assist start-ups in digitizing their businesses by delivering an impactful online presence and custom digital marketing solutions that won't break the bank while being environmentally friendly.","Did you know 97% of consumers use the Internet to find local businesses? Does your business rank on search engines with essential keyword searches?","We will give you the ability to track your marketing efforts with regular reporting and assist ad's management on your behalf and to your specified budget. We will save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty.","We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business. Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords."],keywords:["websites","seo","vanillajs","data engineering","workshops"]}}},f=Object(o.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"text-light text-left mt-header p-0",attrs:{fluid:""}},[n("AnimeBannerWordsComponent",{attrs:{pbgimage:t.pHeaderImage}}),t._v(" "),n("HeaderComponent",{attrs:{pheader:t.pheader,psubheader:t.psubheader,psubtitle:t.psubtitle}}),t._v(" "),n("LinkComponent",{attrs:{btext:t.btext,blink:t.blink}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{text:t.content[0]},pstyle:{bgStyle:"w-100 text-primary text-left  px-5 p-3"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{bgImage:"imgs/collaboration.jpg"},pstyle:{bgStyle:"parralaxNormal w-100 text-primary text-left p-10"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{text:t.content[1]},pstyle:{bgStyle:"w-100 text-primary text-left px-5 pt-3"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{text:t.content[2]},pstyle:{bgStyle:"w-100 text-primary text-left px-5 pt-3"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{text:t.content[3]},pstyle:{bgStyle:"w-100 text-primary text-left px-5 pt-3"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{bgImage:"imgs/collaboration.jpg"},pstyle:{bgStyle:"parralaxNormal w-100 text-primary text-left p-7"}}}),t._v(" "),n("TextImageComponent",{attrs:{pcontent:{text:t.content[4]},pstyle:{bgStyle:"w-100 text-primary text-left px-5 p-5"}}})],1)},[],!1,null,"cbf8dc5e",null);e.default=f.exports}}]);