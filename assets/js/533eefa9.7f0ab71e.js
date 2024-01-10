"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4002],{3112:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=n(5893),t=n(1151);const l={title:"Preparing to Install",summary:"Installation Guide for multiple operating systems"},o="Preparing to install",r={id:"user/quick-start/installation/index",title:"Preparing to Install",description:"The first step to installing Solus is getting the correct media. The Solus Project provides ISO images, which contain the contents of Solus for installing.",source:"@site/docs/user/quick-start/installation/index.md",sourceDirName:"user/quick-start/installation",slug:"/user/quick-start/installation/",permalink:"/docs/user/quick-start/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/installation/index.md",tags:[],version:"current",lastUpdatedAt:1704845942,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Preparing to Install",summary:"Installation Guide for multiple operating systems"},sidebar:"userSidebar",previous:{title:"Default Applications",permalink:"/docs/user/quick-start/default-applications"},next:{title:"Disk Partitioning",permalink:"/docs/user/quick-start/installation/disks"}},d={},a=[{value:"Getting the ISO",id:"getting-the-iso",level:2},{value:"Verifying the ISO",id:"verifying-the-iso",level:2},{value:"Linux and macOS",id:"linux-and-macos",level:3},{value:"Verifying the SHA256SUMS file signature",id:"verifying-the-sha256sums-file-signature",level:4},{value:"Verifying the ISO checksum",id:"verifying-the-iso-checksum",level:4},{value:"Windows",id:"windows",level:3},{value:"Verifying signed SHA256SUM file",id:"verifying-signed-sha256sum-file",level:4},{value:"Verifying the ISO checksum",id:"verifying-the-iso-checksum-1",level:4},{value:"Creating bootable media",id:"creating-bootable-media",level:2},{value:"Linux",id:"linux",level:3},{value:"DVD",id:"dvd",level:4},{value:"USB",id:"usb",level:4},{value:"Graphical tool",id:"graphical-tool",level:5},{value:"Command-line",id:"command-line",level:5},{value:"Windows",id:"windows-1",level:3},{value:"DVD",id:"dvd-1",level:4},{value:"USB",id:"usb-1",level:4},{value:"macOS",id:"macos",level:3},{value:"DVD",id:"dvd-2",level:4},{value:"USB",id:"usb-2",level:4},{value:"Graphical tool",id:"graphical-tool-1",level:5},{value:"Command-line",id:"command-line-1",level:5},{value:"Boot the media",id:"boot-the-media",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"preparing-to-install",children:"Preparing to install"}),"\n",(0,s.jsx)(i.p,{children:"The first step to installing Solus is getting the correct media. The Solus Project provides ISO images, which contain the contents of Solus for installing."}),"\n",(0,s.jsx)(i.h2,{id:"getting-the-iso",children:"Getting the ISO"}),"\n",(0,s.jsxs)(i.p,{children:["Download a Solus ISO by going to our ",(0,s.jsx)(i.a,{href:"https://getsol.us/download",children:"Download page"})," and picking an edition."]}),"\n",(0,s.jsx)(i.h2,{id:"verifying-the-iso",children:"Verifying the ISO"}),"\n",(0,s.jsx)(i.h3,{id:"linux-and-macos",children:"Linux and macOS"}),"\n",(0,s.jsxs)(i.p,{children:["Download the SHA256SUMS files for your chosen ISO edition: ",(0,s.jsx)(i.em,{children:"File"}),", ",(0,s.jsx)(i.em,{children:"Signed File"})," and ",(0,s.jsx)(i.em,{children:"Public Key"})," from the links next to the ",(0,s.jsx)(i.em,{children:"Download"})," buttons on our ",(0,s.jsx)(i.a,{href:"https://getsol.us/download",children:"Download page"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," You should download all these files to the same directory."]}),"\n",(0,s.jsx)(i.h4,{id:"verifying-the-sha256sums-file-signature",children:"Verifying the SHA256SUMS file signature"}),"\n",(0,s.jsx)(i.p,{children:"Import the Solus public key:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"cd ~/path/to/download/directory\ngpg --import solus-releng-pub.gpg\n"})}),"\n",(0,s.jsx)(i.p,{children:"Verify the signed checksum file:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"gpg --verify Solus-4.5-Budgie.iso.sha256sum.sign Solus-4.5-Budgie.iso.sha256sum\n"})}),"\n",(0,s.jsx)(i.h4,{id:"verifying-the-iso-checksum",children:"Verifying the ISO checksum"}),"\n",(0,s.jsx)(i.p,{children:"Check that the computed hash of the downloaded ISO file matches the hash supplied by Solus:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sha256sum -c Solus-4.5-Budgie.iso.sha256sum | grep OK\n"})}),"\n",(0,s.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(i.h4,{id:"verifying-signed-sha256sum-file",children:"Verifying signed SHA256SUM file"}),"\n",(0,s.jsxs)(i.p,{children:["On Windows, first install ",(0,s.jsx)(i.a,{href:"https://www.gpg4win.org/",children:"gpg4win"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Now you can run the same ",(0,s.jsx)(i.code,{children:"gpg"})," commands from the the ",(0,s.jsx)(i.a,{href:"/docs/user/quick-start/installation/#verifying-the-sha256sums-file-signature",children:(0,s.jsx)(i.em,{children:"Verifyng the SHA256SUMS file signature"})})," section above."]}),"\n",(0,s.jsx)(i.h4,{id:"verifying-the-iso-checksum-1",children:"Verifying the ISO checksum"}),"\n",(0,s.jsx)(i.p,{children:"Launch powershell and compute the hash of the ISO file you just downloaded. You will have to manually compare the result to the hash in the SHA256SUMS file."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-powershell",children:"Get-FileHash C:\\path\\to\\Solus-4.5-Budgie.iso\ncat C:\\path\\to\\Solus-4.5-Budgie.iso.sha256sum\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Alternatively, you can use a graphical program that can calculate SHA256 hashes like ",(0,s.jsx)(i.em,{children:"Rufus"})," or ",(0,s.jsx)(i.em,{children:"7zip"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"creating-bootable-media",children:"Creating bootable media"}),"\n",(0,s.jsx)(i.p,{children:"To make boot media, you will need:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Either a blank DVD or a USB drive larger than 2 GB."}),"\n",(0,s.jsx)(i.li,{children:"If using a USB, the ability to boot from the USB."}),"\n",(0,s.jsxs)(i.li,{children:["ISO file from the ",(0,s.jsx)(i.em,{children:"Getting the ISO"})," section."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"There are many tools which can write our ISO image to DVDs or USB thumb drives. Chose from an option below."}),"\n",(0,s.jsx)(i.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsx)(i.h4,{id:"dvd",children:"DVD"}),"\n",(0,s.jsxs)(i.p,{children:["We recommend using ",(0,s.jsx)(i.a,{href:"https://wiki.gnome.org/Apps/Brasero",children:"Brasero"})," for writing the ISO to a DVD."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Insert blank DVD (DVD-R or DVD+RW is suitable) into your DVD writer."}),"\n",(0,s.jsx)(i.li,{children:"Open Brasero."}),"\n",(0,s.jsx)(i.li,{children:"Select the option \u201cBurn image\u201d."}),"\n",(0,s.jsx)(i.li,{children:"Click the \u201cClick here to select a disc image\u201d button and using the file dialog, choose the ISO."}),"\n",(0,s.jsx)(i.li,{children:"Ensure the correct DVD is selected in the \u201cSelect a disc to write to\u201d."}),"\n",(0,s.jsx)(i.li,{children:'Click "Burn" and wait.'}),"\n",(0,s.jsx)(i.li,{children:'Upon seeing \u201cImage successfully burned to DVD\u201d, click "Close".'}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"usb",children:"USB"}),"\n",(0,s.jsx)(i.h5,{id:"graphical-tool",children:"Graphical tool"}),"\n",(0,s.jsxs)(i.p,{children:["We recommend using ",(0,s.jsx)(i.a,{href:"https://wiki.gnome.org/Apps/MultiWriter",children:"Gnome MultiWriter"}),". Please note that unetbootin will ",(0,s.jsx)(i.strong,{children:"not"})," work."]}),"\n",(0,s.jsx)(i.p,{children:"Upon opening Gnome MultiWriter, you will likely be shown a window similar to the one below, in the event your USB drive is already plugged in."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"MultiWriter Start",src:n(9948).Z+"",width:"706",height:"156"})}),"\n",(0,s.jsx)(i.p,{children:"If your USB drive is not plugged, you will be prompted with an image indicating to plug it in."}),"\n",(0,s.jsx)(i.p,{children:'Next, click the "Start Copying" button, and you will be prompted to select the ISO. Choose the ISO you downloaded in the "Getting the ISO" section. The USB will automatically be written to.'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"MultiWriter Writing",src:n(4992).Z+"",width:"706",height:"156"})}),"\n",(0,s.jsx)(i.p,{children:"Upon completion, you will be prompted with the following dialog and your USB is now ready for use."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"MultiWriter Done",src:n(1910).Z+"",width:"706",height:"156"})}),"\n",(0,s.jsx)(i.h5,{id:"command-line",children:"Command-line"}),"\n",(0,s.jsxs)(i.p,{children:["For those comfortable with the command-line / terminal, we will walk you through using ",(0,s.jsx)(i.code,{children:"dd"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["First, insert the USB drive into your computer and open your Terminal. Proceed to type ",(0,s.jsx)(i.code,{children:"lsblk"})," into your Terminal. It should output something along the lines of:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 111.8G  0 disk\n\u251c\u2500sda1   8:1    0   350M  0 part\n\u251c\u2500sda2   8:2    0  39.7G  0 part\n\u2514\u2500sda3   8:3    0  71.8G  0 part /\nsdb      8:64   1   7.5G  0 disk\n\u251c\u2500sdb1   8:65   1   712M  0 part\n\u2514\u2500sdb2   8:66   1  17.2M  0 part\n"})}),"\n",(0,s.jsxs)(i.p,{children:["You will see one disk, in this case ",(0,s.jsx)(i.code,{children:"/dev/sdb"}),", that is roughly the size of the USB drive. Yours should be similar (difference being in size). Write this device down somewhere."]}),"\n",(0,s.jsxs)(i.p,{children:["Next, locate the downloaded ISO. It will most likely be in your Downloads folder. In the event that it is, type: ",(0,s.jsx)(i.code,{children:"cd ~/Downloads"})]}),"\n",(0,s.jsxs)(i.p,{children:["If it is ",(0,s.jsx)(i.strong,{children:"not"})," in your Downloads folder, use ",(0,s.jsx)(i.code,{children:"cd"})," to navigate to the correct directory."]}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["This is where we overwrite the contents of your USB drive so please ensure you identified the correct drive in the ",(0,s.jsx)(i.code,{children:"lsblk"})," stage above. Selecting the wrong drive here will lead to its contents being overwritten. An example command is below, however you may need to replace ",(0,s.jsx)(i.code,{children:"sdb"})," with the drive we located above:"]})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo dd if=Solus-4.5-Budgie.iso of=/dev/sdb bs=4M status=progress oflag=sync && sudo eject /dev/sdb\n"})}),"\n",(0,s.jsx)(i.p,{children:"This will write the contents of the ISO to the thumb drive so you can boot it and also make sure the data is synchronized so you can eject the USB safely."}),"\n",(0,s.jsx)(i.h3,{id:"windows-1",children:"Windows"}),"\n",(0,s.jsx)(i.h4,{id:"dvd-1",children:"DVD"}),"\n",(0,s.jsx)(i.p,{children:"You can easily burn an ISO image to a DVD, on Windows 7 and newer, by using Window's built-in file manager (Explorer)."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open Window's built-in file manager (Explorer)."}),"\n",(0,s.jsx)(i.li,{children:'Right click on the ISO image file and click "Burn disk image".'}),"\n",(0,s.jsx)(i.li,{children:"Select the correct disc burner."}),"\n",(0,s.jsx)(i.li,{children:'Click "Burn".'}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"usb-1",children:"USB"}),"\n",(0,s.jsxs)(i.p,{children:["You can easily burn an ISO image to a USB by using graphical tool ",(0,s.jsx)(i.a,{href:"https://rufus.ie/",children:"Rufus"}),"."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open Rufus."}),"\n",(0,s.jsx)(i.li,{children:"Ensure your device is correct by checking the contents of the Device dropdown."}),"\n",(0,s.jsx)(i.li,{children:"Click the CD icon found in the image below, and select the ISO."}),"\n",(0,s.jsx)(i.li,{children:'Untick all options except "Create a bootable disk using" and use the dropdown to select "DD Image".'}),"\n",(0,s.jsx)(i.li,{children:'Click "Start".'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Rufus",src:n(3093).Z+"",width:"365",height:"518"})}),"\n",(0,s.jsx)(i.h3,{id:"macos",children:"macOS"}),"\n",(0,s.jsx)(i.h4,{id:"dvd-2",children:"DVD"}),"\n",(0,s.jsx)(i.p,{children:"Since OS X El Capitan (10.11), the easiest way to burn a DVD is:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Insert your DVD and open Finder."}),"\n",(0,s.jsx)(i.li,{children:"Right click on the ISO image."}),"\n",(0,s.jsx)(i.li,{children:"Click on \u201cBurn Disk Image \u2018Solus-4.5-Budgie.iso\u2019 to Disc\u2026\u201d"}),"\n",(0,s.jsx)(i.li,{children:"Then click \u201cBurn\u201d."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"macOS Burn DVD",src:n(4725).Z+"",width:"638",height:"343"})}),"\n",(0,s.jsx)(i.h4,{id:"usb-2",children:"USB"}),"\n",(0,s.jsx)(i.h5,{id:"graphical-tool-1",children:"Graphical tool"}),"\n",(0,s.jsxs)(i.p,{children:["One of the easiest ways to burn an ISO image to a USB thumb drive is by using a graphical tool called ",(0,s.jsx)(i.a,{href:"https://etcher.balena.io/",children:"Etcher"}),"."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open Etcher."}),"\n",(0,s.jsx)(i.li,{children:"Click on \u201cSelect image\u201d and then select the ISO and click \u201cOpen\u201d."}),"\n",(0,s.jsx)(i.li,{children:"Etcher will automatically select your USB drive. If it has selected the wrong one, click \u201cChange\u201d and select the correct one."}),"\n",(0,s.jsx)(i.li,{children:"Click \u201cFlash!\u201d."}),"\n",(0,s.jsx)(i.li,{children:"You may be prompted for your macOS user password."}),"\n",(0,s.jsx)(i.li,{children:"Once Etcher has finished it is safe to remove the USB drive."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"You may see a message stating \u201cThe disk you inserted was not readable by this computer.\u201d once Etcher finishes. This can be ignored."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"macOS Etcher",src:n(4020).Z+"",width:"800",height:"380"})}),"\n",(0,s.jsx)(i.h5,{id:"command-line-1",children:"Command-line"}),"\n",(0,s.jsxs)(i.p,{children:["For those comfortable with the macOS Terminal app, we will walk you through using ",(0,s.jsx)(i.code,{children:"dd"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"First, insert the USB drive into your computer and open Terminal (found in Applications/Utilities)."}),"\n",(0,s.jsx)(i.p,{children:"Now you'll need to identify your USB drive by listing your storage devices with the following command:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"diskutil list\n"})}),"\n",(0,s.jsx)(i.p,{children:"You should see output similar to this:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"/dev/disk0 (internal, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *1.0 TB     disk0\n   1:                        EFI EFI                     209.7 MB   disk0s1\n   2:                  Apple_HFS Macintosh HD            999.3 GB   disk0s2\n   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3\n\n/dev/disk1 (external, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *15.6 GB    disk1\n   1:                        EFI EFI                     209.7 MB   disk1s1\n   2:                  Apple_HFS Ultra                   15.3 GB    disk1s2\n"})}),"\n",(0,s.jsxs)(i.p,{children:["From this output, we can see the USB drive is listed as ",(0,s.jsx)(i.code,{children:"/dev/disk1 (external, physical)"}),". In this example, the IDENTIFIER is ",(0,s.jsx)(i.code,{children:"disk1"}),". Please note, your USB drive may have a different identifier. You should be able to tell which is your USB drive by checking the name and size."]}),"\n",(0,s.jsxs)(i.p,{children:["macOS usually auto-mounts USB drives so you\u2019ll need to unmount it first before proceeding. Use the following command and replace ",(0,s.jsx)(i.code,{children:"IDENTIFIER"})," with the correct identifier we found in the ",(0,s.jsx)(i.code,{children:"diskutil list"})," step."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"diskutil unmountDisk /dev/IDENTIFIER\n"})}),"\n",(0,s.jsx)(i.p,{children:"Now navigate to the folder that has the downloaded ISO. This could be your Mac\u2019s Downloads folder. The following command will get you there:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"cd ~/Downloads\n"})}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"This next step is dangerous. Using the wrong drive identifier could result in data loss."})})}),"\n",(0,s.jsxs)(i.p,{children:["We will use the ",(0,s.jsx)(i.code,{children:"dd"})," command to write the contents of the ISO to the thumb drive. Replace ",(0,s.jsx)(i.code,{children:"IDENTIFIER"})," in the command below with your drive identifier. Note the extra ",(0,s.jsx)(i.code,{children:"r"})," before the identifier (i.e ",(0,s.jsx)(i.code,{children:"rdisk1"}),"). This is for raw mode, which along with bs=1m, makes the transfer faster."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo dd if=Solus-4.5-Budgie.iso of=/dev/rIDENTIFIER bs=1m\n"})}),"\n",(0,s.jsx)(i.p,{children:"Be patient! After a few minutes you\u2019ll receive a message saying how much data was transferred. You can now safely eject the usb drive."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"diskutil eject /dev/IDENTIFIER\n"})}),"\n",(0,s.jsx)(i.h2,{id:"boot-the-media",children:"Boot the media"}),"\n",(0,s.jsx)(i.p,{children:"Now it is time to restart your computer to boot the DVD or USB. Most computers will automatically boot from DVDs and USB, however if you experience issues booting the media, you may need to select to boot from DVD or USB."}),"\n",(0,s.jsxs)(i.p,{children:["This is usually accessible by pressing ",(0,s.jsx)(i.code,{children:"F9"})," or ",(0,s.jsx)(i.code,{children:"F12"})," while your computer is booting. On some devices it may also be ",(0,s.jsx)(i.code,{children:"ESC"}),"."]}),"\n",(0,s.jsx)(i.p,{children:'Macs will boot to the "Startup Manager" by holding down the Option (Alt) key. The DVD or USB drive will most likely show up as "EFI Boot".'})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1910:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/done-fdbb3bda7061afd0ca7f97b85c1cef18.jpg"},4725:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/mac-burn-dvd-0bef9578a58d61610854fc7c25e3496f.jpg"},4020:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/mac-etcher-2d28aaeb19eda12c960c6b09e81eceb2.jpg"},3093:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/rufus-6f16a561298400882bff901d61064e58.jpg"},9948:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/start-c8e10b8e6f627b862f8f6344260db698.jpg"},4992:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/writing-1a2eb065ba3c61dd1371f89b2ab9f7c1.jpg"},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var s=n(7294);const t={},l=s.createContext(t);function o(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);