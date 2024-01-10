"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[355],{7718:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(5893),s=t(1151);const n={title:"History and Software Rollback",summary:"History and Software Rollback"},r="History and Software Rollback",l={id:"user/package-management/history-and-rollback",title:"History and Software Rollback",description:"Solus provides a history and rollback feature via its package manager, eopkg. This feature allows you to see when your repository was last updated, actions such as installation, removal, and upgrading of software.",source:"@site/docs/user/package-management/history-and-rollback.md",sourceDirName:"user/package-management",slug:"/user/package-management/history-and-rollback",permalink:"/docs/user/package-management/history-and-rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/package-management/history-and-rollback.md",tags:[],version:"current",lastUpdatedAt:1704845942,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"History and Software Rollback",summary:"History and Software Rollback"},sidebar:"userSidebar",previous:{title:"Basics to Package Management",permalink:"/docs/user/package-management/basics"},next:{title:"Repository Management",permalink:"/docs/user/package-management/repo-management"}},i={},c=[{value:"History",id:"history",level:2},{value:"Rollback",id:"rollback",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"history-and-software-rollback",children:"History and Software Rollback"}),"\n",(0,o.jsx)(a.p,{children:"Solus provides a history and rollback feature via its package manager, eopkg. This feature allows you to see when your repository was last updated, actions such as installation, removal, and upgrading of software."}),"\n",(0,o.jsx)(a.p,{children:"Our rollback feature allows you to essentially rewind your system's software back to a previous state, assuming you or our repository has the versions in question."}),"\n",(0,o.jsx)(a.h2,{id:"history",children:"History"}),"\n",(0,o.jsx)(a.p,{children:"You can see the history from eopkg by using:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"eopkg history\n"})}),"\n",(0,o.jsx)(a.h2,{id:"rollback",children:"Rollback"}),"\n",(0,o.jsx)(a.p,{children:"To rollback your system, first use the above history command to check what the transaction / operation number was. Then, we use the following command:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"sudo eopkg history -t number\n"})}),"\n",(0,o.jsxs)(a.p,{children:["The number, in this case, is the operation before the one you want to change. So if the number was ",(0,o.jsx)(a.code,{children:"100"}),", then you would use ",(0,o.jsx)(a.code,{children:"99"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>r});var o=t(7294);const s={},n=o.createContext(s);function r(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);