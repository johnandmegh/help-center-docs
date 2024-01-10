"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3705],{6198:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(5893),n=t(1151);const i={title:"Configuration File Locations",summary:"Location of configuration files on Solus"},o="Configuration File Locations",d={id:"user/software/configuration_files",title:"Configuration File Locations",description:"These are the standard locations on a Solus installation for software configuration files.",source:"@site/docs/user/software/configuration_files.md",sourceDirName:"user/software",slug:"/user/software/configuration_files",permalink:"/docs/user/software/configuration_files",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/configuration_files.md",tags:[],version:"current",lastUpdatedAt:1704845942,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Configuration File Locations",summary:"Location of configuration files on Solus"},sidebar:"userSidebar",previous:{title:"Command Line",permalink:"/docs/user/software/command-line/"},next:{title:"Desktops",permalink:"/docs/user/software/desktops/"}},c={},a=[];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"configuration-file-locations",children:"Configuration File Locations"}),"\n",(0,r.jsx)(s.p,{children:"These are the standard locations on a Solus installation for software configuration files."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:['Solus uses a "stateless" system configuration. For what that means see ',(0,r.jsx)(s.a,{href:"statelessness.md",children:"Stateless Configuration"}),"."]})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Applies to"}),(0,r.jsx)(s.th,{children:"Location(s)"}),(0,r.jsx)(s.th,{children:"Priority"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"User"}),(0,r.jsx)("br",{}),"- preserved during package updates"]}),(0,r.jsx)(s.td,{children:"Per-user"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"~/.config/"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"~/"}),(0,r.jsx)("br",{}),"others"]}),(0,r.jsx)(s.td,{children:"Highest"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"System"}),(0,r.jsx)("br",{}),"- preserved during package updates"]}),(0,r.jsx)(s.td,{children:"All users on the system"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/etc/"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"OS provided"})," (aka defaults)",(0,r.jsx)("br",{}),"- ",(0,r.jsx)(s.strong,{children:"overridden"})," by package updates"]}),(0,r.jsx)(s.td,{children:"All users on the system"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/usr/share/defaults/"})}),(0,r.jsx)(s.td,{children:"Lowest"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"A user configuration file overrides the system configuration, and the system configuration overrides the OS provided configuration. If no user configuration is provided, then the system configuration is used, and if no system configuration is provided, then the OS provided configuration is used."}),"\n",(0,r.jsxs)(s.p,{children:["Different software expects user configuration files in different places. Many software packages store these under the ",(0,r.jsx)(s.code,{children:"XDG_CONFIG_HOME"})," directory: ",(0,r.jsx)(s.code,{children:"~/.config"}),". Some applications insist on placing them straight into the home directory. For example the ",(0,r.jsx)(s.code,{children:"fish"})," shell uses the ",(0,r.jsx)(s.code,{children:"~/.config/fish"})," directory to store user configurations, while the ",(0,r.jsx)(s.code,{children:"bash"})," shell uses the ",(0,r.jsx)(s.code,{children:"~/.bashrc"})," configuration file straight from the home directory. Consult documentation before customizing software to ensure you put things in the right place."]}),"\n",(0,r.jsx)(s.p,{children:"Some common configuration files:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Software"}),(0,r.jsx)(s.th,{children:"Configuration files"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"apcupsd"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/etc/changeme"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cups"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/etc/cups/"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/user/software/networking/samba",children:"samba"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/etc/samba/smb.conf"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"/usr/share/defaults/samba/"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pam"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/etc/pam.d/"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"/usr/share/defaults/etc/pam.d/"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssh"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"$HOME/.ssh/"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"/usr/share/defaults/etc/ssh/"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssl"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/etc/ssl/"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"/usr/share/defaults/etc/ssl/"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"docs/user/software/networking/tigervnc",children:"tigervnc"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"$HOME/.vnc/xstartup"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"docs/user/software/networking/xrdp",children:"xrdp"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/etc/X11/Xwrapper.config"})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>o});var r=t(7294);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);