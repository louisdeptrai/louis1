"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2054],{2054:(E,u,c)=>{c.r(u),c.d(u,{Tab1PageModule:()=>F});var e=c(4742),h=c(177),g=c(4341),f=c(1307),p=c(70),a=c(467),o=c(4438),d=c(9382),m=c(3656);function P(n,r){if(1&n&&(o.j41(0,"ion-col",7)(1,"ion-card"),o.nrm(2,"ion-img",11),o.j41(3,"ion-button",12),o.nrm(4,"ion-icon",13),o.k0s()()()),2&n){const s=r.$implicit;o.R7$(2),o.Y8G("src",s.webPath)}}function _(n,r){if(1&n){const s=o.RV6();o.qex(0),o.j41(1,"div",5)(2,"ion-grid")(3,"ion-row"),o.DNE(4,P,5,1,"ion-col",6),o.j41(5,"ion-col",7)(6,"ion-card",8),o.bIt("click",function(){o.eBV(s);const i=o.XpG();return o.Njj(i.pickLimitedLibraryPhotos())}),o.nrm(7,"ion-icon",9),o.j41(8,"ion-label"),o.EFF(9,"Add new"),o.k0s()()()()()(),o.j41(10,"div",10),o.bIt("click",function(){o.eBV(s);const i=o.XpG();return o.Njj(i.setting())}),o.EFF(11," Ch\xfang t\xf4i ch\u1ec9 c\xf3 th\u1ec3 truy c\u1eadp \u1ea3nh \u0111\xe3 ch\u1ecdn. Ch\u1ec9nh s\u1eeda quy\u1ec1n truy c\u1eadp "),o.k0s(),o.bVm()}if(2&n){const s=o.XpG();o.R7$(4),o.Y8G("ngForOf",s.photos)}}function b(n,r){if(1&n){const s=o.RV6();o.qex(0),o.j41(1,"div",14)(2,"ion-label"),o.EFF(3,"Ch\xfang t\xf4i kh\xf4ng th\u1ec3 truy c\u1eadp th\u01b0 vi\u1ec7n \u1ea3nh"),o.k0s(),o.j41(4,"ion-button",3),o.bIt("click",function(){o.eBV(s);const i=o.XpG();return o.Njj(i.setting())}),o.EFF(5," C\xe0i \u0111\u1eb7t "),o.k0s()(),o.bVm()}}let C=(()=>{var n;class r{constructor(t,i,l){this.photoService=t,this.modalCtrl=i,this.platform=l,this.photos=[],this.isDenied=!1,this.isLimited=!1,this.platform.is("ios")&&this.checkPermissions()}ngOnInit(){}getLimitedLibraryPhotos(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.getLimitedLibraryPhotos()})()}pickLimitedLibraryPhotos(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.pickLimitedLibraryPhotos()})()}checkPermissions(){var t=this;return(0,a.A)(function*(){const i=yield t.photoService.checkPermissions();console.log("List permissions: ",i),"denied"==i.photos?t.isDenied=!0:"limited"==i.photos&&(console.log("Gioi han truy cap"),t.isLimited=!0,t.getLimitedLibraryPhotos()),console.log("List permissions: ",i)})()}selectPhoto(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.pickPhotos()})()}close(){this.modalCtrl.dismiss(null,"cancel")}add(){this.modalCtrl.dismiss(this.photos,"add")}setting(){this.photoService.openPhotoSettings()}}return(n=r).\u0275fac=function(t){return new(t||n)(o.rXU(d.I),o.rXU(e.W3),o.rXU(m.OD))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-photo"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","","text","Back",3,"click"],["slot","end"],[3,"click"],[4,"ngIf"],[1,"list-image"],["class","square-col","size","4",4,"ngFor","ngForOf"],["size","4",1,"square-col"],[1,"addnew",3,"click"],["name","add-outline"],[1,"note",3,"click"],[3,"src"],["fill","clear"],["slot","icon-only","name","checkmark-circle-outline"],[1,"note"]],template:function(t,i){1&t&&(o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-back-button",1),o.bIt("click",function(){return i.close()}),o.k0s()(),o.j41(4,"ion-title"),o.EFF(5,"Select image"),o.k0s(),o.j41(6,"ion-buttons",2)(7,"ion-button",3),o.bIt("click",function(){return i.add()}),o.EFF(8,"Add"),o.k0s()()()(),o.j41(9,"ion-content"),o.DNE(10,_,12,1,"ng-container",4)(11,b,6,0,"ng-container",4),o.k0s()),2&t&&(o.R7$(10),o.Y8G("ngIf",i.isLimited),o.R7$(),o.Y8G("ngIf",i.isDenied))},dependencies:[h.Sq,h.bT,e.Jm,e.QW,e.b_,e.hU,e.W9,e.lO,e.eU,e.iq,e.KW,e.he,e.ln,e.BC,e.ai,e.el],styles:["ion-grid[_ngcontent-%COMP%]{width:100%}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .addnew[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid gray;padding:10px}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{position:relative;height:80px}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px}"]}),r})();function k(n,r){if(1&n&&(o.j41(0,"ion-col",8)(1,"ion-card"),o.nrm(2,"ion-img",9),o.k0s()()),2&n){const s=r.$implicit;o.R7$(2),o.Y8G("src",s.webPath)}}const v=[{path:"",component:(()=>{var n;class r{constructor(t,i,l){this.photoService=t,this.modalCtrl=i,this.platform=l,this.photos=[]}checkPermissions(){var t=this;return(0,a.A)(function*(){const i=yield t.photoService.checkPermissions();"denied"==i.photos?t.openModal():"granted"==i.photos||"prompt"==i.photos?t.selectPhoto():"limited"==i.photos&&t.openModal()})()}requestPermissions(){var t=this;return(0,a.A)(function*(){let i=yield t.photoService.requestPermissions();console.log("Reuqest permissions: ",i)})()}getLimitedLibraryPhotos(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.getLimitedLibraryPhotos()})()}pickLimitedLibraryPhotos(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.pickLimitedLibraryPhotos()})()}selectImage(){var t=this;return(0,a.A)(function*(){t.platform.is("android")?t.selectPhoto():t.platform.is("ios")&&t.checkPermissions()})()}selectPhoto(){var t=this;return(0,a.A)(function*(){t.photos=yield t.photoService.pickPhotos()})()}openModal(){var t=this;return(0,a.A)(function*(){const i=yield t.modalCtrl.create({component:C});i.present();const{data:l,role:T}=yield i.onWillDismiss();"add"==T&&(t.photos=l)})()}}return(n=r).\u0275fac=function(t){return new(t||n)(o.rXU(d.I),o.rXU(e.W3),o.rXU(m.OD))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-tab1"]],decls:19,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"content"],[3,"click"],["name","camera"],["size","4",4,"ngFor","ngForOf"],["size","4"],[3,"src"]],template:function(t,i){1&t&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o.EFF(3," Tab 1 "),o.k0s()()(),o.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),o.EFF(8,"Tab 1"),o.k0s()()(),o.j41(9,"div",4)(10,"ion-button",5),o.bIt("click",function(){return i.selectImage()}),o.nrm(11,"ion-icon",6),o.j41(12,"ion-label"),o.EFF(13,"Chosse image"),o.k0s()(),o.j41(14,"ion-button",5),o.bIt("click",function(){return i.openModal()}),o.EFF(15," open modal for test "),o.k0s(),o.j41(16,"ion-grid")(17,"ion-row"),o.DNE(18,k,3,1,"ion-col",7),o.k0s()()()()),2&t&&(o.Y8G("translucent",!0),o.R7$(4),o.Y8G("fullscreen",!0),o.R7$(14),o.Y8G("ngForOf",i.photos))},dependencies:[e.Jm,e.b_,e.hU,e.W9,e.lO,e.eU,e.iq,e.KW,e.he,e.ln,e.BC,e.ai,h.Sq]}),r})()}];let y=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[p.iI.forChild(v),p.iI]}),r})(),F=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[e.bv,h.MD,g.YN,f.S,y]}),r})()}}]);