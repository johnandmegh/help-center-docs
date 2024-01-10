"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9873],{836:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(5893),s=o(1151);const i={title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},r="Desktop Environments",a={id:"user/software/desktops/index",title:"Desktops",description:"Solus offers a multitude of desktop environments, ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.",source:"@site/docs/user/software/desktops/index.md",sourceDirName:"user/software/desktops",slug:"/user/software/desktops/",permalink:"/docs/user/software/desktops/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/desktops/index.md",tags:[],version:"current",lastUpdatedAt:1704853009,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},sidebar:"userSidebar",previous:{title:"Configuration File Locations",permalink:"/docs/user/software/configuration_files"},next:{title:"Development",permalink:"/docs/user/software/development/"}},l={},d=[{value:"Budgie",id:"budgie",level:2},{value:"Gnome Shell",id:"gnome-shell",level:2},{value:"MATE",id:"mate",level:2},{value:"XFCE",id:"xfce",level:2},{value:"Tiling window managers",id:"tiling-window-managers",level:2},{value:"i3",id:"i3",level:3},{value:"Sway",id:"sway",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"desktop-environments",children:"Desktop Environments"}),"\n",(0,t.jsxs)(n.p,{children:["Solus offers a ",(0,t.jsx)(n.a,{href:"https://getsol.us/solus/experiences/",children:"multitude of desktop environments"}),", ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out."]}),"\n",(0,t.jsx)(n.p,{children:"WARNING: Do NOT attempt to install ANY other desktop environments next to KDE Plasma Desktop. This scenario is NOT supported and you will be told so in no uncertain terms if asking for support."}),"\n",(0,t.jsx)(n.h2,{id:"budgie",children:"Budgie"}),"\n",(0,t.jsx)(n.p,{children:"The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.budgie\n"})}),"\n",(0,t.jsx)(n.h2,{id:"gnome-shell",children:"Gnome Shell"}),"\n",(0,t.jsx)(n.p,{children:"Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install gdm gnome-shell gnome-desktop-branding\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mate",children:"MATE"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"We plan to deprecate the MATE Desktop, for a similar experience, consider XFCE."})}),"\n",(0,t.jsxs)(n.p,{children:["Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called ",(0,t.jsx)(n.a,{href:"https://github.com/getsolus/brisk-menu",children:"Brisk Menu"}),". If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.mate\n"})}),"\n",(0,t.jsx)(n.h2,{id:"xfce",children:"XFCE"}),"\n",(0,t.jsx)(n.p,{children:"Solus offers the XFCE desktop environment for users preferring a more lightweight experience. It is recommended for existing MATE users. You can install XFCE with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.xfce\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tiling-window-managers",children:"Tiling window managers"}),"\n",(0,t.jsx)(n.h3,{id:"i3",children:"i3"}),"\n",(0,t.jsx)(n.p,{children:"Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install i3\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it."}),"\n",(0,t.jsx)(n.h3,{id:"sway",children:"Sway"}),"\n",(0,t.jsx)(n.p,{children:"Solus offers Sway as a Wayland-only tiling window manager. You can install it with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install sway\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sway expects users to do some configuration, refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/swaywm/sway/wiki",children:"Sway Wiki"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about tiling window managers, click ",(0,t.jsx)(n.a,{href:"https:/en.wikipedia.org/wiki/Tiling_window_manager",children:"here"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);