"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8157],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=i,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(y,o(o({ref:e},p),{},{components:n})):r.createElement(y,o({ref:e},p))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4245:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Disk Partitioning",summary:"Overview of the partitioning that the installer can perform"},o="Disk Partitioning",s={unversionedId:"user/quick-start/installation/disks",id:"user/quick-start/installation/disks",title:"Disk Partitioning",description:"Solus provides multiple ways you can install onto your system.",source:"@site/docs/user/quick-start/installation/disks.md",sourceDirName:"user/quick-start/installation",slug:"/user/quick-start/installation/disks",permalink:"/docs/user/quick-start/installation/disks",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/installation/disks.md",tags:[],version:"current",lastUpdatedAt:1696257792,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Disk Partitioning",summary:"Overview of the partitioning that the installer can perform"},sidebar:"userSidebar",previous:{title:"Preparing to Install",permalink:"/docs/user/quick-start/installation/"},next:{title:"Booting with Secure Boot Enabled",permalink:"/docs/user/quick-start/installation/secure-boot"}},l={},u=[{value:"UEFI",id:"uefi",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"disk-partitioning"},"Disk Partitioning"),(0,i.kt)("p",null,"Solus provides multiple ways you can install onto your system."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Whole Drive"),(0,i.kt)("br",{parentName:"li"}),"Solus can take up the entire drive, using traditional root partitions, or with LVM-managed root partitions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Multi-boot"),(0,i.kt)("br",{parentName:"li"}),"You can install Solus next to your existing operating system, such as Windows. ",(0,i.kt)("em",{parentName:"li"},"If you have multiple operating systems installed, we will choose the largest option.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Manual Partitioning"),(0,i.kt)("br",{parentName:"li"}),"You can manually configure your system. This is only recommend for advanced users which may desire to have a dedicated ",(0,i.kt)("inlineCode",{parentName:"li"},"/home")," partition. Note that if you manually configure your system, you will need to restart the Installer for those changes to apply appropriately.\n",(0,i.kt)("strong",{parentName:"li"},"Note:")," Legacy (BIOS) must use MBR partition table while Unified EFI (UEFI) must use GPT partition table.")),(0,i.kt)("p",null,"Alongside these options, we also provide the ability to use full-disk encryption. For the obvious reason of it being full-disk, this assumes you are installing Solus onto the entire drive."),(0,i.kt)("h2",{id:"uefi"},"UEFI"),(0,i.kt)("p",null,"If you are using a system with UEFI, you may need to create a EFI System Partition, also referred to as an ESP. This is not necessary if you are enabling Solus to install onto the entire disk."),(0,i.kt)("p",null,"To create an EFI System Partition, open up GParted and create a FAT32 partition that is 512MB in size. Next, right-click on the partition and click Manage Flags. On the Manage Flags section, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"esp")," flags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Your system must be booted using Unified EFI (UEFI) mode, as opposed to a "legacy (BIOS) mode".'),(0,i.kt)("li",{parentName:"ul"},"Your disk is required to be GPT formatted."),(0,i.kt)("li",{parentName:"ul"},"If you cannot see your SSD drive, set the SATA configuration to AHCI.")))}d.isMDXComponent=!0}}]);