"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8639],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),s=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,l(l({ref:r},p),{},{components:t})):a.createElement(h,l({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const i={title:"Hardware",summary:"Guide to using additional hardware on Solus"},l="Hardware",o={unversionedId:"user/hardware/index",id:"user/hardware/index",title:"Hardware",description:"Preinstalled Drivers",source:"@site/docs/user/hardware/index.md",sourceDirName:"user/hardware",slug:"/user/hardware/",permalink:"/docs/user/hardware/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/hardware/index.md",tags:[],version:"current",lastUpdatedAt:1697032990,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{title:"Hardware",summary:"Guide to using additional hardware on Solus"},sidebar:"userSidebar",previous:{title:"Tips and Tricks",permalink:"/docs/user/editions/plasma/tips-and-tricks"},next:{title:"Compatibility",permalink:"/docs/category/compatibility"}},d={},s=[{value:"Preinstalled Drivers",id:"preinstalled-drivers",level:2},{value:"GPUs",id:"gpus",level:3},{value:"Proprietary Drivers",id:"proprietary-drivers",level:2},{value:"Supported Drivers",id:"supported-drivers",level:3}],p={toc:s},u="wrapper";function c(e){let{components:r,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hardware"},"Hardware"),(0,n.kt)("h2",{id:"preinstalled-drivers"},"Preinstalled Drivers"),(0,n.kt)("p",null,"The vast majority of hardware on Linux is supported by driver modules included with the Linux Kernel. This includes things like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPUs (AMD, Intel)"),(0,n.kt)("li",{parentName:"ul"},"Networking"),(0,n.kt)("li",{parentName:"ul"},"PCI and PCI Express"),(0,n.kt)("li",{parentName:"ul"},"Storage"),(0,n.kt)("li",{parentName:"ul"},"USB")),(0,n.kt)("p",null,"The purpose of this documentation is to help you find drivers for hardware that is not directly supported or requires additional configuration to be used on Solus."),(0,n.kt)("h3",{id:"gpus"},"GPUs"),(0,n.kt)("p",null,"The situations with GPU drivers on Linux is a little complicated. Each driver is actually broken up into multiple pieces:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Direct Rendering Manager (DRM)"),(0,n.kt)("br",{parentName:"li"}),"This is the part of the driver provided by the Linux Kernel and provides just enough functionality to allow other drivers to access the hardware and render to a connected display.",(0,n.kt)("br",{parentName:"li"}),"Linux provides support for AMD, Intel, and Nvidia GPUs in this basic capacity."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OpenGL Driver"),(0,n.kt)("br",{parentName:"li"}),"This part of the driver is needed for OpenGL applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vulkan Driver"),(0,n.kt)("br",{parentName:"li"}),"This part of the driver is needed for Vulkan applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Xorg Driver"),(0,n.kt)("br",{parentName:"li"}),"In order to expose certain features to the Xorg Server, AMD and Intel have additional drivers which may be needed for things like variable refresh rate or multiple display support.")),(0,n.kt)("p",null,"Unfortunately for Nvidia users, the situation gets a little complicated. Linux has two sets of drivers for Nvidia GPUs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nouveau"),(0,n.kt)("br",{parentName:"li"}),"This is the open-source driver for Nvidia GPUs. It consists of a DRM Driver provided by the Linux Kernel, OpenGL Drivers (nvc0, nv50) from Mesa, and an Xorg Driver (xorg-driver-video-nouveau).",(0,n.kt)("br",{parentName:"li"}),"Device support for these drivers has historically lagged behind the Nvidia proprietary drivers and likely will not support newer hardware and does not include Vulkan support.",(0,n.kt)("br",{parentName:"li"}),"Performance of this driver also typically lags behind the proprietary drivers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nvidia Proprietary Drivers"),"\nThis is the closed-source driver provided directly from Nvidia. It consists of a DRM driver module for the kernel, OpenGL and Vulkan drivers for rendering, and additional drivers for extended features of the hardware.",(0,n.kt)("br",{parentName:"li"}),"Device support for these drivers is very good for newer hardware, but older devices will eventually become unsupported and require the Nouveau drivers instead.",(0,n.kt)("br",{parentName:"li"}),"Performance of this driver is typically the best available and is therefore highly desirable to gamers and content creators.")),(0,n.kt)("h2",{id:"proprietary-drivers"},"Proprietary Drivers"),(0,n.kt)("p",null,"Installing proprietary drivers may improve performance or certain features, however they are usually not necessary for normal daily usage. Solus provides a utility for installing drivers for detected hardware."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DoFlicky Screenshot",src:t(2202).Z,width:"497",height:"321"})),(0,n.kt)("p",null,"If there are proprietary drivers that can be installed, they will show up in the box below the description. You can click the item you wish to install and click Install. If you are installing NVIDIA drivers, you may find it to be desirable to install the 32-bit driver as well, in the event you wish to use Steam or WINE."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," A reboot will be required to use the newly installed driver."),(0,n.kt)("h3",{id:"supported-drivers"},"Supported Drivers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Vendor"),(0,n.kt)("th",{parentName:"tr",align:null},"Drivers"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Asus"),(0,n.kt)("td",{parentName:"tr",align:null},"piper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broadcom"),(0,n.kt)("td",{parentName:"tr",align:null},"broadcom-sta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Logitech"),(0,n.kt)("td",{parentName:"tr",align:null},"piper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nvidia"),(0,n.kt)("td",{parentName:"tr",align:null},"470, Main Series")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Razer"),(0,n.kt)("td",{parentName:"tr",align:null},"openrazer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Roccat"),(0,n.kt)("td",{parentName:"tr",align:null},"piper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SteelSeries"),(0,n.kt)("td",{parentName:"tr",align:null},"piper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VMWare"),(0,n.kt)("td",{parentName:"tr",align:null},"open-vm-tools")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XBox"),(0,n.kt)("td",{parentName:"tr",align:null},"xone")))))}c.isMDXComponent=!0},2202:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/doflicky-574dff562b460c3839fb6d47c7fa2d25.jpg"}}]);