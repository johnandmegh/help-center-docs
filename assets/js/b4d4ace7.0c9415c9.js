"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1554],{8060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(5893),s=n(1151);const l={title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},a="Submitting a Pull Request for Review",r={id:"packaging/submitting-a-pull-request",title:"Submitting a Pull Request for Review",description:"Please refrain from submitting a pull request for the following instances:",source:"@site/docs/packaging/submitting-a-pull-request.md",sourceDirName:"packaging",slug:"/packaging/submitting-a-pull-request",permalink:"/docs/packaging/submitting-a-pull-request",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/submitting-a-pull-request.md",tags:[],version:"current",lastUpdatedAt:1704845942,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:6,frontMatter:{title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},sidebar:"packagingSidebar",previous:{title:"Testing a Package",permalink:"/docs/packaging/testing-a-package"},next:{title:"Packaging Changes",permalink:"/docs/packaging/packaging-changes"}},o={},c=[{value:"Final Branch Review",id:"final-branch-review",level:2},{value:"Creating the Pull Request",id:"creating-the-pull-request",level:2},{value:"Amending a Pull Request",id:"amending-a-pull-request",level:2},{value:"Amending a Pull Request with multiple commits",id:"amending-a-pull-request-with-multiple-commits",level:3},{value:"Updating a Pull Request That Has Changes Requested",id:"updating-a-pull-request-that-has-changes-requested",level:2},{value:"After the Pull Request is Accepted",id:"after-the-pull-request-is-accepted",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"submitting-a-pull-request-for-review",children:"Submitting a Pull Request for Review"}),"\n",(0,i.jsx)(t.p,{children:"Please refrain from submitting a pull request for the following instances:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For a package that is yet to be accepted for inclusion by a member of the Solus Staff team. Search ",(0,i.jsx)(t.a,{href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22",children:"open package requests"})," to see if there is an open request for the package.\nWe welcome you to politely reach out via the package request issue or our Support room on ",(0,i.jsx)(t.a,{href:"/docs/user/contributing/getting-involved#matrix-chat",children:"Matrix"})," if you deem the review of the request to be time-sensitive in nature."]}),"\n",(0,i.jsxs)(t.li,{children:["If your pull request is a Work In Progress / WIP. Pull requests that are completed or are marked as ",(0,i.jsx)(t.em,{children:"request for comments"})," (RFC) are accepted. For RFC request please ensure your patch title contains ",(0,i.jsx)(t.code,{children:"[RFC]"})," and is marked as 'draft'. WIP patches clutter the issue tracker and make patch review by Solus Staff more time consuming and introduces unnecessary work."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"final-branch-review",children:"Final Branch Review"}),"\n",(0,i.jsx)(t.p,{children:"At minimum, your pull request will include changes for the following files:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"package.yml"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"pspec_*.xml"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It may also include these files:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"MAINTAINERS.md"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Double check the ",(0,i.jsx)(t.code,{children:"package.yml"})," to make sure the builddeps are in the right order, and that it otherwise adheres to the ",(0,i.jsx)(t.a,{href:"/docs/packaging/package.yml",children:"standards"})," Solus has set."]}),"\n",(0,i.jsxs)(t.p,{children:["If any additional files were required for the build, then you must also include the ",(0,i.jsx)(t.code,{children:"files/"})," directory. See ",(0,i.jsx)(t.a,{href:"/docs/packaging/packaging-practices",children:"Packaging Practices"})," for more detail."]}),"\n",(0,i.jsxs)(t.p,{children:["Many package builds may result in the automatic generation of an ABI report. These files start with ",(0,i.jsx)(t.code,{children:"abi_*"})," and must also be included, as they allow simple tracking of changes to symbols and dependencies."]}),"\n",(0,i.jsx)(t.p,{children:"Take a final look over your commit message to make sure it has all the necessary information, and that the formatting is good. You can use this, which will show the most recent commit:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git log -1\n"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-the-pull-request",children:"Creating the Pull Request"}),"\n",(0,i.jsxs)(t.p,{children:["In the package folder, run ",(0,i.jsx)(t.code,{children:"git push"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If you've created your own branch, as recommended, the cli tool will show you a new command to create and push to a remote branch matching the local one. Run this."})}),"\n",(0,i.jsx)(t.p,{children:"Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes."}),"\n",(0,i.jsxs)(t.p,{children:["Run ",(0,i.jsx)(t.code,{children:"git status"})," one last time to make sure your branch is clean. If it is:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open the link."}),"\n",(0,i.jsx)(t.li,{children:"Fill in a summary of your changes (usually the same as the commit message)."}),"\n",(0,i.jsxs)(t.li,{children:["Link any relevant issues:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you want to link this pull request to an existing issue, simply mention it in the PR summary: ",(0,i.jsx)(t.code,{children:"The inclusion of <somepackage> fixes #123"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["If you need a change to depend on another change, mention it in the PR summary too: ",(0,i.jsx)(t.code,{children:"Depends on #234"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Double check everything"}),"\n",(0,i.jsx)(t.li,{children:"Create the pull request!"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"amending-a-pull-request",children:"Amending a Pull Request"}),"\n",(0,i.jsx)(t.p,{children:"There may be times you need to make minor changes after submitting the pull request. For instance, you see something that needs correcting. To do this, you will need to amend your commit."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Make your changes"}),"\n",(0,i.jsxs)(t.li,{children:["Stage your changes: ",(0,i.jsx)(t.code,{children:"git add ."})]}),"\n",(0,i.jsxs)(t.li,{children:["Amend the commit: ",(0,i.jsx)(t.code,{children:"git commit --amend"})]}),"\n",(0,i.jsxs)(t.li,{children:["Push the amended commit: ",(0,i.jsx)(t.code,{children:"git push --force"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The web interface on GitHub will automatically update with the latest changes."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"We want amended commits because of the way our tooling works. It expects that there is only one Git commit per package change."})}),"\n",(0,i.jsx)(t.h3,{id:"amending-a-pull-request-with-multiple-commits",children:"Amending a Pull Request with multiple commits"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes, you may be submitting multiple packages in a single pull request, and one of them might need changes. The process is very similar to the above steps, but with a couple of additions."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Rebase on the ",(0,i.jsx)(t.code,{children:"main"})," branch: ",(0,i.jsx)(t.code,{children:"git rebase -i origin/main"})]}),"\n",(0,i.jsxs)(t.li,{children:["A text editor will open in your terminal (",(0,i.jsx)(t.code,{children:"nano"})," by default). Change the line or lines of the commits you want to change from ",(0,i.jsx)(t.code,{children:"pick"})," to ",(0,i.jsx)(t.code,{children:"edit"})]}),"\n",(0,i.jsxs)(t.li,{children:["Save and close the editor (by default, ",(0,i.jsx)(t.code,{children:"Ctrl+s"})," ",(0,i.jsx)(t.code,{children:"Ctrl+x"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Make your changes"}),"\n",(0,i.jsxs)(t.li,{children:["Stage your changes: ",(0,i.jsx)(t.code,{children:"git add ."})]}),"\n",(0,i.jsxs)(t.li,{children:["Amend the commit: ",(0,i.jsx)(t.code,{children:"git commit --amend"})]}),"\n",(0,i.jsxs)(t.li,{children:["Continue the rebase: ",(0,i.jsx)(t.code,{children:"git rebase --continue"})]}),"\n",(0,i.jsx)(t.li,{children:"Repeat steps 4 through 7 for all commits you wish to edit"}),"\n",(0,i.jsxs)(t.li,{children:["Push the amended stack: ",(0,i.jsx)(t.code,{children:"git push --force"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"updating-a-pull-request-that-has-changes-requested",children:"Updating a Pull Request That Has Changes Requested"}),"\n",(0,i.jsx)(t.p,{children:"Your pull request will be reviewed, and changes may be requested. This is normal. It's to ensure the quality of the packages in our repository and to make sure each PR adheres to our standards."}),"\n",(0,i.jsxs)(t.p,{children:["If you need to make changes in response to a review, follow the steps in the ",(0,i.jsx)(t.a,{href:"#amending-a-pull-request",children:"section above"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"after-the-pull-request-is-accepted",children:"After the Pull Request is Accepted"}),"\n",(0,i.jsx)(t.p,{children:"Once your pull request is accepted and merged, someone on the Solus Team will issue a build. Your new / updated package will be published to the unstable repos."}),"\n",(0,i.jsxs)(t.p,{children:["At this point you may ",(0,i.jsx)(t.a,{href:"git-basics#deleting-your-branch-after-a-pull-request-is-merged",children:"delete the local and remote branches"})," for this pull request."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const s={},l=i.createContext(s);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);