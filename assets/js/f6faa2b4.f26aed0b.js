"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,y=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"MIDI Keyboards",summary:"Guide for installing and configuring MIDI keyboards on Solus"},i="MIDI Keyboards",l={unversionedId:"user/hardware/peripherals/midi-keyboard",id:"user/hardware/peripherals/midi-keyboard",title:"MIDI Keyboards",description:"These instructions will guide you through how to set up and use a USB-connected MIDI Keyboard on Solus. This will easily let you use the keyboard to play music with a wide set of instruments.",source:"@site/docs/user/hardware/peripherals/midi-keyboard.md",sourceDirName:"user/hardware/peripherals",slug:"/user/hardware/peripherals/midi-keyboard",permalink:"/docs/user/hardware/peripherals/midi-keyboard",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/hardware/peripherals/midi-keyboard.md",tags:[],version:"current",lastUpdatedAt:1692026517,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"MIDI Keyboards",summary:"Guide for installing and configuring MIDI keyboards on Solus"},sidebar:"userSidebar",previous:{title:"Mice and Touchpads",permalink:"/docs/user/hardware/peripherals/mice-and-touchpads"},next:{title:"Printers and Scanners",permalink:"/docs/user/hardware/peripherals/printers-and-scanners"}},s={},d=[{value:"Installing required software",id:"installing-required-software",level:2},{value:"Setting up the soundfont in qsynth",id:"setting-up-the-soundfont-in-qsynth",level:2},{value:"Connecting the keyboard",id:"connecting-the-keyboard",level:2},{value:"Keyboard compatibility",id:"keyboard-compatibility",level:2},{value:"M-audio",id:"m-audio",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"midi-keyboards"},"MIDI Keyboards"),(0,o.kt)("p",null,"These instructions will guide you through how to set up and use a USB-connected MIDI Keyboard on Solus. This will easily let you use the keyboard to play music with a wide set of instruments."),(0,o.kt)("h2",{id:"installing-required-software"},"Installing required software"),(0,o.kt)("p",null,"We will need to install three packages in order to use the keyboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"qsynth")," - A frontend for fluidsynth"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"qjackctl")," - A controller for the JACK audio server"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fluid-soundfont")," - An open source soundfont to use with fluidsynth")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it qsynth qjackctl fluid-soundfont\n")),(0,o.kt)("h2",{id:"setting-up-the-soundfont-in-qsynth"},"Setting up the soundfont in qsynth"),(0,o.kt)("p",null,"In order to use the soundfont, we need to open up ",(0,o.kt)("inlineCode",{parentName:"p"},"qsynth")," and set the soundfont. For the purposes of this article, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"FluidR3.sf2"),", however any other soundfont should work fine too. You set the soundfont by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup...")," and navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"Soundfonts"),". There you just need click ",(0,o.kt)("inlineCode",{parentName:"p"},"Open...")," and navigate to the soundfont of your liking. The soundfont that we will be using will be placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/sounds/sf2/")," by default."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"QSynth SoundFont",src:n(8892).Z,width:"1039",height:"517"})),(0,o.kt)("h2",{id:"connecting-the-keyboard"},"Connecting the keyboard"),(0,o.kt)("p",null,"At this stage you need to first verify that the keyboard is plugged in and turned on. Now we just need to open up ",(0,o.kt)("inlineCode",{parentName:"p"},"qjackctl")," to connect the keyboard on a software level. In ",(0,o.kt)("inlineCode",{parentName:"p"},"qjackctl")," you press on ",(0,o.kt)("inlineCode",{parentName:"p"},"Graph")," and drag the keyboard's output to the input called ",(0,o.kt)("inlineCode",{parentName:"p"},"FLUID Synth")," (Your keyboard name will probably differ from the on in the image below). This step will need to be done every time you disconnect or turn off you keyboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"QJackCtl Connect",src:n(8950).Z,width:"717",height:"629"})),(0,o.kt)("p",null,"You should now be ready to play on the keyboard using ",(0,o.kt)("inlineCode",{parentName:"p"},"qsynth"),"."),(0,o.kt)("h2",{id:"keyboard-compatibility"},"Keyboard compatibility"),(0,o.kt)("p",null,"The following keyboards have been tested and/or suggested to function correctly by our users."),(0,o.kt)("p",null,"This list should not suggest that ",(0,o.kt)("em",{parentName:"p"},"only")," such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible."),(0,o.kt)("h3",{id:"m-audio"},"M-audio"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KeyRig 49")))}c.isMDXComponent=!0},8950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/qjackctl-connect-ec819e2ca49b8af3c5a395ebad0a2bba.jpg"},8892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/qsynth-soundfont-3bfc213f843495358dedf524b6ed7fc6.jpg"}}]);