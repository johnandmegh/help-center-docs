"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,b=m["".concat(u,".").concat(c)]||m[c]||s[c]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Boot Management",summary:"Guide to customizing the Solus boot process"},l="Boot Management",i={unversionedId:"user/quick-start/boot-management",id:"user/quick-start/boot-management",title:"Boot Management",description:"Solus leverages clr-boot-manager from the ClearLinux project to manage its boot process.",source:"@site/docs/user/quick-start/boot-management.md",sourceDirName:"user/quick-start",slug:"/user/quick-start/boot-management",permalink:"/docs/user/quick-start/boot-management",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/boot-management.md",tags:[],version:"current",lastUpdatedAt:1696257792,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Boot Management",summary:"Guide to customizing the Solus boot process"},sidebar:"userSidebar",previous:{title:"Quick Start",permalink:"/docs/category/quick-start"},next:{title:"Default Applications",permalink:"/docs/user/quick-start/default-applications"}},u={},d=[{value:"Open the boot menu",id:"open-the-boot-menu",level:2},{value:"Displaying the boot menu by default every boot",id:"displaying-the-boot-menu-by-default-every-boot",level:2},{value:"Adding kernel parameters",id:"adding-kernel-parameters",level:2},{value:"Installing an a different kernel branch",id:"installing-an-a-different-kernel-branch",level:2},{value:"Change the default kernel branch to boot",id:"change-the-default-kernel-branch-to-boot",level:2}],p={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boot-management"},"Boot Management"),(0,a.kt)("h1",{id:"clr-boot-manager"},"clr-boot-manager"),(0,a.kt)("p",null,"Solus leverages ",(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," from the ClearLinux project to manage its boot process.",(0,a.kt)("br",{parentName:"p"}),"\n","On legacy BIOS systems, ",(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," will configure ",(0,a.kt)("inlineCode",{parentName:"p"},"GRUB2")," to properly boot your system.",(0,a.kt)("br",{parentName:"p"}),"\n","On modern UEFI systems, ",(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," will configure ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-boot")," instead.",(0,a.kt)("br",{parentName:"p"}),"\n","This means that any time we want to modify the boot process, ",(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," will be involved.",(0,a.kt)("br",{parentName:"p"}),"\n","Trying to modify the configurations manually may work temporarily, but will be overwritten eventually."),(0,a.kt)("h2",{id:"open-the-boot-menu"},"Open the boot menu"),(0,a.kt)("p",null,"By default, EFI installs will not show the boot menu and boot directly into Solus. By hitting space bar (repeatedly) during boot, the boot menu will appear (it may take a couple of goes to get the timing right)."),(0,a.kt)("h2",{id:"displaying-the-boot-menu-by-default-every-boot"},"Displaying the boot menu by default every boot"),(0,a.kt)("p",null,"The following command will set the timeout of the boot loader so that it appears by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo clr-boot-manager set-timeout 5 && sudo clr-boot-manager update\n")),(0,a.kt)("h2",{id:"adding-kernel-parameters"},"Adding kernel parameters"),(0,a.kt)("p",null,"Kernel parameters can be appended to boot via creating a file for ",(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," to use when updating kernels. For example, to add ",(0,a.kt)("inlineCode",{parentName:"p"},"nomodeset")," to boot options, you would create a file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/kernel/cmdline.d")," (as sudo):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo mkdir -p /etc/kernel/cmdline.d\necho 'nomodeset' | sudo tee /etc/kernel/cmdline.d/40_nomodeset.conf\n")),(0,a.kt)("p",null,"The settings should be on one line with a space between them. You will need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo clr-boot-manager update")," for the options to be appended to boot."),(0,a.kt)("h1",{id:"kernels"},"Kernels"),(0,a.kt)("h2",{id:"installing-an-a-different-kernel-branch"},"Installing an a different kernel branch"),(0,a.kt)("p",null,"By default, Solus utilizes our linux-current kernel. The separate kernel branches can be added by installing the ",(0,a.kt)("inlineCode",{parentName:"p"},"linux-lts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"linux-current")," packages. Note that each kernel has separate module packages, so if you use these kernel modules, you'll need to install the one related to the kernel you are adding."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"linux-lts"),(0,a.kt)("th",{parentName:"tr",align:null},"linux-current"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bbswitch"),(0,a.kt)("td",{parentName:"tr",align:null},"bbswitch-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"broadcom-sta"),(0,a.kt)("td",{parentName:"tr",align:null},"broadcom-sta-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linux-lts-headers"),(0,a.kt)("td",{parentName:"tr",align:null},"linux-current-headers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-470-glx-driver"),(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-470-glx-driver-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-beta-driver"),(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-beta-driver-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-developer-driver"),(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-developer-driver-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-glx-driver"),(0,a.kt)("td",{parentName:"tr",align:null},"nvidia-glx-driver-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"openrazer"),(0,a.kt)("td",{parentName:"tr",align:null},"openrazer-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v4l2loopback"),(0,a.kt)("td",{parentName:"tr",align:null},"v4l2loopback-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vhba-module"),(0,a.kt)("td",{parentName:"tr",align:null},"vhba-module-current")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"virtualbox"),(0,a.kt)("td",{parentName:"tr",align:null},"virtualbox-current")))),(0,a.kt)("h2",{id:"change-the-default-kernel-branch-to-boot"},"Change the default kernel branch to boot"),(0,a.kt)("p",null,"After successfully booting into a kernel from the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lts")," branches running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo clr-boot-manager update")," will make the booted kernel branch the default boot option going forward."))}s.isMDXComponent=!0}}]);