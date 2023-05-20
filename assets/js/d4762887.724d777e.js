"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3624],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8519:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(4137));const a={title:"Installation Issues",summary:"Troubleshooting the Solus installation process",date:new Date("2023-01-07T00:00:00.000Z")},i="Installation Issues",s={unversionedId:"user/troubleshooting/installation",id:"user/troubleshooting/installation",title:"Installation Issues",description:"This article covers various issues that you may come across during installation of Solus.",source:"@site/docs/user/troubleshooting/installation.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/installation",permalink:"/docs/user/troubleshooting/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user/troubleshooting/installation.md",tags:[],version:"current",frontMatter:{title:"Installation Issues",summary:"Troubleshooting the Solus installation process",date:"2023-01-07T00:00:00.000Z"},sidebar:"userSidebar",previous:{title:"Boot Rescue",permalink:"/docs/user/troubleshooting/boot-rescue"}},l={},u=[{value:"Can&#39;t install in EFI mode",id:"cant-install-in-efi-mode",level:2},{value:"I can&#39;t boot into Solus after installation!",id:"i-cant-boot-into-solus-after-installation",level:2},{value:"Legacy/BIOS installation",id:"legacybios-installation",level:3},{value:"EFI",id:"efi",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-issues"},"Installation Issues"),(0,r.kt)("p",null,"This article covers various issues that you may come across during installation of Solus."),(0,r.kt)("h2",{id:"cant-install-in-efi-mode"},"Can't install in EFI mode"),(0,r.kt)("p",null,"The live ISO will attempt to install Solus by the same method it was booted. If it is unable to install the boot loader to the ESP, then it is likely booted in legacy mode. Ensure that the ISO has been created via a ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/quick-start/installation"},"supported method")," and that an EFI boot is selected from the boot options."),(0,r.kt)("p",null,"You can check whether the Solus ISO has booted in EFI mode by checking the for the existence of ",(0,r.kt)("inlineCode",{parentName:"p"},"ls /sys/firmware/efi")," (if it's not found, then it's booted in legacy mode)."),(0,r.kt)("h2",{id:"i-cant-boot-into-solus-after-installation"},"I can't boot into Solus after installation!"),(0,r.kt)("p",null,"There are some misunderstandings with how legacy and EFI boot works (usually implemented as UEFI). These sections cover the common misconceptions."),(0,r.kt)("h3",{id:"legacybios-installation"},"Legacy/BIOS installation"),(0,r.kt)("p",null,"Legacy installations on Solus use the Grub boot loader on an MBR disk. Only one boot loader can be used on an MBR disk, so if you haven't installed the Solus boot loader on the MBR, you will need to boot into the other OS and update grub prior to being able to boot Solus. This will also be required on each update of the kernel to ensure you're booting in the latest release."),(0,r.kt)("h3",{id:"efi"},"EFI"),(0,r.kt)("p",null,"EFI allows for multiple boot loaders to be installed, which means you can boot the Solus boot loader directly. To ensure you are booting Solus you need to boot ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux Boot Manager")," from the EFI options. Common keys for bringing up a boot menu or the options during boot are hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc/F2/F9/F10/F11/F12")," during boot (this differs per motherboard). If a boot loader for another OS is not listed in the menu, then it is not correctly registered (and therefore not installed correctly). You can make the Solus boot menu appear via ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/quick-start/boot-management#displaying-the-boot-menu-by-default-every-boot"},"Displaying the Solus boot menu on boot")," which should be able to boot windows (as it's registered with UEFI properly) as well as Solus, but not other systems."))}p.isMDXComponent=!0}}]);