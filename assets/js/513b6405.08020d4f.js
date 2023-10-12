"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,k=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},i="Prepare for Packaging",l={unversionedId:"packaging/prepare-for-packaging",id:"packaging/prepare-for-packaging",title:"Prepare for Packaging",description:"Switch to the Unstable Repository",source:"@site/docs/packaging/prepare-for-packaging.md",sourceDirName:"packaging",slug:"/packaging/prepare-for-packaging",permalink:"/docs/packaging/prepare-for-packaging",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/prepare-for-packaging.md",tags:[],version:"current",lastUpdatedAt:1697129830,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:1,frontMatter:{title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},sidebar:"packagingSidebar",previous:{title:"Packaging Overview",permalink:"/docs/packaging/"},next:{title:"Update Your Development Environment",permalink:"/docs/packaging/update-dev-environment"}},s={},p=[{value:"Switch to the Unstable Repository",id:"switch-to-the-unstable-repository",level:2},{value:"Setting up the Packager file",id:"setting-up-the-packager-file",level:2},{value:"Installing Development Tools",id:"installing-development-tools",level:2},{value:"Setting up a GitHub account",id:"setting-up-a-github-account",level:2},{value:"Configure <code>github-cli</code>.",id:"configure-github-cli",level:3},{value:"Setting up solbuild",id:"setting-up-solbuild",level:2},{value:"Updating solbuild",id:"updating-solbuild",level:3},{value:"Fork the getsolus/packages Repository",id:"fork-the-getsoluspackages-repository",level:2},{value:"Clone Your Forked Package Repository",id:"clone-your-forked-package-repository",level:2},{value:"Set up Monorepo Helper Functions (Optional)",id:"set-up-monorepo-helper-functions-optional",level:2},{value:"Building Packages",id:"building-packages",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-for-packaging"},"Prepare for Packaging"),(0,o.kt)("h2",{id:"switch-to-the-unstable-repository"},"Switch to the Unstable Repository"),(0,o.kt)("p",null,'Packages need to be built and tested against the "unstable" repository. If you don\'t want to switch your primary system to unstable, you can do your packaging work in a VM. We have Virtual Machine Manager in the repos.'),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/user/package-management/repo-management"},"Repository Management")," to see how to add and switch to unstable."),(0,o.kt)("h2",{id:"setting-up-the-packager-file"},"Setting up the Packager file"),(0,o.kt)("p",null,"In order to utilize the build system, you must first set up a configuration file that has your packager details."),(0,o.kt)("p",null,"This file lives in the ",(0,o.kt)("inlineCode",{parentName:"p"},".config/solus")," folder of your home directory. You will need to create the ",(0,o.kt)("inlineCode",{parentName:"p"},".config/solus")," folder as well as the inner ",(0,o.kt)("inlineCode",{parentName:"p"},"packager")," file. Inside the packager file, you need two keys, ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Email"),". This is used when generating the machine file so that the packager details are stored within the resulting binary package."),(0,o.kt)("p",null,"Name and email address are mandatory. You must use your real first and last name(s) for accountability purposes.\nA ",(0,o.kt)("a",{parentName:"p",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix")," contact is optional but recommended."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[Packager]\nName=Your Name Here\nEmail=your.email@address\nMatrix=@username.matrix.org\n")),(0,o.kt)("h2",{id:"installing-development-tools"},"Installing Development Tools"),(0,o.kt)("p",null,"We need to install a few things in order to get started with packaging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go-task")," is used by our build tools for scripting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git")," is used for version control of the solus sources"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"github-cli")," is used to make working with GitHub easier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solbuild")," is a lightweight container environment for building packages repeatably"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solbuild-config-unstable")," sets up solbuild for working with the ",(0,o.kt)("inlineCode",{parentName:"li"},"unstable")," repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ypkg")," is the program that actually builds packages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it go-task git github-cli solbuild solbuild-config-unstable ypkg\n")),(0,o.kt)("h2",{id:"setting-up-a-github-account"},"Setting up a GitHub account"),(0,o.kt)("p",null,"The Solus source repositories for the package repository currently reside on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getsolus/packages"},"github.com/getsolus/packages"),". You will need a GitHub account to submit patches and file issues. You can create a GitHub account ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/signup"},"here"),". Note that you will also need to set up ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"},"2FA")," (two factor authentication) for your account."),(0,o.kt)("h3",{id:"configure-github-cli"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h3"},"github-cli"),"."),(0,o.kt)("p",null,"Once you have a GitHub account, you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"github-cli")," to work with it. At minimum, you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"gh auth login"),". Have your GitHub credentials and 2FA (two factor authentication) mechanism at hand."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github-cli/github-cli/quickstart"},"GitHub CLI quickstart")," for some common uses of the tool."),(0,o.kt)("h2",{id:"setting-up-solbuild"},"Setting up solbuild"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"solbuild")," tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds."),(0,o.kt)("p",null,"Initialize solbuild via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild init\n")),(0,o.kt)("p",null,"This will take some time as it downloads and prepares the image."),(0,o.kt)("h3",{id:"updating-solbuild"},"Updating solbuild"),(0,o.kt)("p",null,"It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs."),(0,o.kt)("p",null,"To update solbuild, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild update\n")),(0,o.kt)("h2",{id:"fork-the-getsoluspackages-repository"},"Fork the getsolus/packages Repository"),(0,o.kt)("p",null,"Create your own fork of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getsolus/packages"},"getsolus/packages")," using the GitHub web UI or ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/manual/gh_repo_fork"},(0,o.kt)("inlineCode",{parentName:"a"},"gh")," cli tool")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"github-cli")," package. It will be forked to ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/yourgithubaccount/packages"),"."),(0,o.kt)("h2",{id:"clone-your-forked-package-repository"},"Clone Your Forked Package Repository"),(0,o.kt)("p",null,"Create a local clone of the package repository you just forked. Here we are using the name ",(0,o.kt)("inlineCode",{parentName:"p"},"solus-packages")," and cloning it into our home directoy. The rest of the documentation will presume this structure. You can choose a different name and path but will have to make sure to replace it in every command that refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"solus-packages")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gh repo clone packages ~/solus-packages\n")),(0,o.kt)("h2",{id:"set-up-monorepo-helper-functions-optional"},"Set up Monorepo Helper Functions (Optional)"),(0,o.kt)("p",null,"After cloning your repo, create a symlink to source our bash shell helper functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.bashrc.d\nln -s ~/solus-packages/common/Scripts/helpers.sh ~/.bashrc.d/solus-monorepo-helpers.sh\n")),(0,o.kt)("p",null,"Then start a new instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," to source the script."),(0,o.kt)("p",null,"Afterwards, you should have the following available from your shell:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"gotosoluspkgs")),(0,o.kt)("td",{parentName:"tr",align:null},"Change directory to the solus monorepo from anywhere on the filesystem."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gotosoluspkgs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"goroot")),(0,o.kt)("td",{parentName:"tr",align:null},"When in the solus monorepo, change directory to the root directory of the git repository."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"goroot"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"gotopkg")),(0,o.kt)("td",{parentName:"tr",align:null},"Change directory to any solus package. You can type part of the package name then double press ",(0,o.kt)("inlineCode",{parentName:"td"},"Tab")," to get autocompletion for this function."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gotopkg firefox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"whatuses")),(0,o.kt)("td",{parentName:"tr",align:null},"Find out what packages use a library by reading the ",(0,o.kt)("inlineCode",{parentName:"td"},"abi_used_libs")," files."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"whatuses libfoobar.so.1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"whatprovides")),(0,o.kt)("td",{parentName:"tr",align:null},"Find out what package provides a library by reading the ",(0,o.kt)("inlineCode",{parentName:"td"},"abi_libs")," files."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"whatprovides libfoobar.so.1."))))),(0,o.kt)("h2",{id:"building-packages"},"Building Packages"),(0,o.kt)("p",null,"Your system is now set up for package work.\nIf you are new to packaging, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/packaging/your-first-package-update"},"Your First Package Update"),"."))}g.isMDXComponent=!0}}]);