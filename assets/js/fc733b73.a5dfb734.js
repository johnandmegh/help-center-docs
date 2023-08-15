"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"R and Rstudio",summary:"Quick start guide for R and Rstudio on Solus"},r="R and Rstudio",l={unversionedId:"user/software/development/r-and-rstudio",id:"user/software/development/r-and-rstudio",title:"R and Rstudio",description:"Covers the basics of how to install R and Rstudio on Solus and also covers how to install required dependencies for installing additional CRAN libraries.",source:"@site/docs/user/software/development/r-and-rstudio.md",sourceDirName:"user/software/development",slug:"/user/software/development/r-and-rstudio",permalink:"/docs/user/software/development/r-and-rstudio",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/r-and-rstudio.md",tags:[],version:"current",lastUpdatedAt:1692026517,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"R and Rstudio",summary:"Quick start guide for R and Rstudio on Solus"},sidebar:"userSidebar",previous:{title:"PostgreSQL",permalink:"/docs/user/software/development/postgresql"},next:{title:"Rust",permalink:"/docs/user/software/development/rust"}},s={},d=[{value:"Downloading R",id:"downloading-r",level:2},{value:"Downloading Rstudio",id:"downloading-rstudio",level:2},{value:"How to use <code>install.package()</code> on Solus",id:"how-to-use-installpackage-on-solus",level:3},{value:"Additional Discovered Dependencies",id:"additional-discovered-dependencies",level:4}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"r-and-rstudio"},"R and Rstudio"),(0,o.kt)("p",null,"Covers the basics of how to install R and Rstudio on Solus and also covers how to install required dependencies for installing additional CRAN libraries."),(0,o.kt)("h2",{id:"downloading-r"},"Downloading R"),(0,o.kt)("p",null,"It is recommended to download R before downloading Rstudio. This can be accomplished easily in any of three ways.\n",(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Both R and Rstudio are available natively on Solus thanks to their amazing maintainers, it is not necessary to go to either softwares' respective website."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The easiest way to do this is to search for R within the ",(0,o.kt)("strong",{parentName:"li"},"Software Center")),(0,o.kt)("li",{parentName:"ul"},"Alternatively you can enter the ",(0,o.kt)("strong",{parentName:"li"},"Software Center"),", select ",(0,o.kt)("strong",{parentName:"li"},"Programming Languages & Tools"),", then select ",(0,o.kt)("strong",{parentName:"li"},"Programming")," and scroll down until you see ",(0,o.kt)("strong",{parentName:"li"},"r"),". ",(0,o.kt)("em",{parentName:"li"},"The list itself is in alphabetical order so it will be near the bottom.")),(0,o.kt)("li",{parentName:"ul"},"The third option for install is to open your terminal and enter the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo eopkg it r"))),(0,o.kt)("h2",{id:"downloading-rstudio"},"Downloading Rstudio"),(0,o.kt)("p",null,"The first step in setting up Rstudio is to download and install it. This can be accomplished in the same ways as R in the prior step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The easiest way to do this is to search for Rstudio within the ",(0,o.kt)("strong",{parentName:"li"},"Software Center")),(0,o.kt)("li",{parentName:"ul"},"Alternatively you can enter the ",(0,o.kt)("strong",{parentName:"li"},"Software Center"),", select ",(0,o.kt)("strong",{parentName:"li"},"Programming Languages & Tools"),", then select ",(0,o.kt)("strong",{parentName:"li"},"Integrated Development Environments")," and scroll down until you see ",(0,o.kt)("strong",{parentName:"li"},"r"),". ",(0,o.kt)("em",{parentName:"li"},"The list itself is in alphabetical order so it will be near the bottom.")),(0,o.kt)("li",{parentName:"ul"},"The third option for install is to open your terminal and enter the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo eopkg it rstudio"))),(0,o.kt)("h3",{id:"how-to-use-installpackage-on-solus"},"How to use ",(0,o.kt)("inlineCode",{parentName:"h3"},"install.package()")," on Solus"),(0,o.kt)("p",null,"Unless you are only going to use base R functions, you will need to make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"install.package()")," within R to install additional libraries. To use this function within R you need to install certain development packages which vary depending on the library you are trying to enable within R."),(0,o.kt)("p",null,"On other linux distros (like debian, ubuntu, and fedora) this is accomplished through the installation of r-devel. However since Solus does not have an r-devel package these dependencies have to be installed through other means."),(0,o.kt)("p",null,"There two main solus packages that will include many of the dependencies required that allow you to install most R CRAN packages. These are ",(0,o.kt)("inlineCode",{parentName:"p"},"system.devel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"curl-devel"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system.devel")," can ",(0,o.kt)("strong",{parentName:"li"},"ONLY")," be installed from within terminal by running the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo eopkg it -c system.devel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"curl-devel")," can be found by searching in the ",(0,o.kt)("strong",{parentName:"li"},"Software Center")," or by running the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo eopkg it curl-devel"))),(0,o.kt)("p",null,"Once these two Solus packages are installed ",(0,o.kt)("inlineCode",{parentName:"p"},"install.package()")," will work as usual within R for most packages like ",(0,o.kt)("inlineCode",{parentName:"p"},"tidyverse"),"."),(0,o.kt)("p",null,"If when you try to install a CRAN library with ",(0,o.kt)("inlineCode",{parentName:"p"},"install.package()")," from within R and you are presented with an error that says ",(0,o.kt)("inlineCode",{parentName:"p"},"...exited with non zero exit status")," this is most likely because one of the required dependencies, ",(0,o.kt)("em",{parentName:"p"},"which will be listed within the R console detailing the error"),", is contained within a Solus devel package you have not yet installed."),(0,o.kt)("h4",{id:"additional-discovered-dependencies"},"Additional Discovered Dependencies"),(0,o.kt)("p",null,"This section should be edited to help future users to know what Solus devel packages are needed to install additional, more specialized CRAN packages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To successfully run ",(0,o.kt)("inlineCode",{parentName:"li"},'install.package("RCurl")')," within R requires ",(0,o.kt)("inlineCode",{parentName:"li"},"nghttp2-devel"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"libssh2-devel"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kerberos-devel")," to be installed from the Solus ",(0,o.kt)("strong",{parentName:"li"},"Software Center"))))}c.isMDXComponent=!0}}]);