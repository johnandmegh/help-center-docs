"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},l="Submitting a Pull Request for Review",o={unversionedId:"packaging/submitting-a-pull-request",id:"packaging/submitting-a-pull-request",title:"Submitting a Pull Request for Review",description:"Please refrain from submitting a pull request for the following instances:",source:"@site/docs/packaging/submitting-a-pull-request.md",sourceDirName:"packaging",slug:"/packaging/submitting-a-pull-request",permalink:"/docs/packaging/submitting-a-pull-request",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/submitting-a-pull-request.md",tags:[],version:"current",lastUpdatedAt:1697032990,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:6,frontMatter:{title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},sidebar:"packagingSidebar",previous:{title:"Testing a Package",permalink:"/docs/packaging/testing-a-package"},next:{title:"Packaging Changes",permalink:"/docs/packaging/packaging-changes"}},s={},u=[{value:"Final Branch Review",id:"final-branch-review",level:2},{value:"Creating the Pull Request",id:"creating-the-pull-request",level:2},{value:"Amending a Pull Request",id:"amending-a-pull-request",level:2},{value:"Updating a Pull Request That Has Changes Requested",id:"updating-a-pull-request-that-has-changes-requested",level:2},{value:"After the Pull Request is Accepted",id:"after-the-pull-request-is-accepted",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"submitting-a-pull-request-for-review"},"Submitting a Pull Request for Review"),(0,r.kt)("p",null,"Please refrain from submitting a pull request for the following instances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a package that is yet to be accepted for inclusion by a member of the Solus Staff team. Search ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22"},"open package requests")," to see if there is an open request for the package.\nWe welcome you to politely reach out via the package request issue or our Support room on ",(0,r.kt)("a",{parentName:"li",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix")," if you deem the review of the request to be time-sensitive in nature."),(0,r.kt)("li",{parentName:"ul"},"If your pull request is a Work In Progress / WIP. Pull requests that are completed or are marked as ",(0,r.kt)("em",{parentName:"li"},"request for comments")," (RFC) are accepted. For RFC request please ensure your patch title contains ",(0,r.kt)("inlineCode",{parentName:"li"},"[RFC]")," and is marked as 'draft'. WIP patches clutter the issue tracker and make patch review by Solus Staff more time consuming and introduces unnecessary work.")),(0,r.kt)("h2",{id:"final-branch-review"},"Final Branch Review"),(0,r.kt)("p",null,"At minimum, your pull request will include changes for the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pspec_*.xml"))),(0,r.kt)("p",null,"It may also include these files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAINTAINERS.md"))),(0,r.kt)("p",null,"Double check the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.yml")," to make sure the builddeps are in the right order, and that it otherwise adheres to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packaging/package.yml"},"standards")," Solus has set."),(0,r.kt)("p",null,"If any additional files were required for the build, then you must also include the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/")," directory. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/packaging/packaging-practices"},"Packaging Practices")," for more detail."),(0,r.kt)("p",null,"Many package builds may result in the automatic generation of an ABI report. These files start with ",(0,r.kt)("inlineCode",{parentName:"p"},"abi_*")," and must also be included, as they allow simple tracking of changes to symbols and dependencies."),(0,r.kt)("p",null,"Take a final look over your commit message to make sure it has all the necessary information, and that the formatting is good. You can use this, which will show the most recent commit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git log -1\n")),(0,r.kt)("h2",{id:"creating-the-pull-request"},"Creating the Pull Request"),(0,r.kt)("p",null,"In the package folder, run ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you've created your own branch, as recommended, the cli tool will show you a new command to create and push to a remote branch matching the local one. Run this.")),(0,r.kt)("p",null,"Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," one last time to make sure your branch is clean. If it is, open the link, double check everything, and create the pull request!"),(0,r.kt)("h2",{id:"amending-a-pull-request"},"Amending a Pull Request"),(0,r.kt)("p",null,"There may be times you need to make minor changes after submitting the pull request. For instance, you see something that needs correcting. To do this, you will need to amend your commit."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make your changes"),(0,r.kt)("li",{parentName:"ol"},"Stage your changes: ",(0,r.kt)("inlineCode",{parentName:"li"},"git add .")),(0,r.kt)("li",{parentName:"ol"},"Amend the commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"git commit --amend")),(0,r.kt)("li",{parentName:"ol"},"Push the amended commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"git push --force"))),(0,r.kt)("p",null,"The web interface on GitHub will automatically update with the latest changes."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We want amended commits because of the way our tooling works. It expects that there is only one Git commit per package change.")),(0,r.kt)("h2",{id:"updating-a-pull-request-that-has-changes-requested"},"Updating a Pull Request That Has Changes Requested"),(0,r.kt)("p",null,"Your pull request will be reviewed, and changes may be requested. This is normal. It's to ensure the quality of the packages in our repository and to make sure each PR adheres to our standards."),(0,r.kt)("p",null,"If you need to make changes in response to a review, follow the steps in the ",(0,r.kt)("a",{parentName:"p",href:"#amending-a-pull-request"},"section above"),"."),(0,r.kt)("h2",{id:"after-the-pull-request-is-accepted"},"After the Pull Request is Accepted"),(0,r.kt)("p",null,"Once your pull request is accepted and merged, someone on the Solus Team will issue a build. Your new / updated package will be published to the unstable repos."),(0,r.kt)("p",null,"At this point you may ",(0,r.kt)("a",{parentName:"p",href:"git-basics#deleting-your-branch-after-a-pull-request-is-merged"},"delete the local and remote branches")," for this pull request."))}m.isMDXComponent=!0}}]);