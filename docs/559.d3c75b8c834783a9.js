"use strict";(self.webpackChunkgama_app=self.webpackChunkgama_app||[]).push([[559],{4559:(P,T,r)=>{r.r(T),r.d(T,{UserModule:()=>f});var e=r(4650),d=r(6895),c=r(221),v=r(2216),i=r(4006),A=r(9627),C=r(769),x=r(247),l=r(1489),U=r(4981),N=r(6942);function q(o,t){1&o&&e._UZ(0,"fa-icon",19)}function y(o,t){1&o&&e._UZ(0,"fa-icon",20)}function F(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"th",10),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,q,1,0,"fa-icon",11),e.YNc(5,y,1,0,"fa-icon",12),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td")(11,"button",13),e.NdJ("click",function(){const u=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.goToView(u))}),e._UZ(12,"fa-icon",14),e.qZA(),e.TgZ(13,"button",15),e.NdJ("click",function(){const u=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.goToEdit(u))}),e._UZ(14,"fa-icon",16),e.qZA(),e.TgZ(15,"button",17),e.NdJ("click",function(){const u=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.confirmDelete(u))}),e._UZ(16,"fa-icon",18),e.qZA()()()}if(2&o){const n=t.$implicit;e.xp6(2),e.Oqu(n.id),e.xp6(2),e.Q6J("ngIf",!n.active),e.xp6(1),e.Q6J("ngIf",n.active),e.xp6(2),e.hij(" ",n.firstName," "),e.xp6(2),e.Oqu(n.lastName)}}function I(o,t){1&o&&(e.TgZ(0,"p")(1,"ngb-alert",21)(2,"strong"),e._uU(3,"N\xe3o h\xe1 dados cadastrados"),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("dismissible",!1))}function J(o,t){1&o&&e._UZ(0,"span",26)}const S=function(o){return{"with-pagination":o}};function M(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"div",22)(1,"div",23),e.YNc(2,J,1,0,"span",24),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"ngb-pagination",25),e.NdJ("pageChange",function(a){e.CHM(n);const u=e.oxw();return e.KtG(u.page=a)})("pageChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.loadPage(a.page))}),e.qZA()()()}if(2&o){const n=e.oxw();e.Q6J("ngClass",e.VKq(10,S,n.users)),e.xp6(2),e.Q6J("ngIf",!n.users.length),e.xp6(2),e.AsE(" Mostrando ",n.users.length," de ",n.totalItems," "),e.xp6(1),e.Q6J("collectionSize",n.totalItems)("page",n.page)("pageSize",n.pageSize)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}class h{constructor(t,n,s){this.router=t,this.userService=n,this.genericModalService=s,this.page=1,this.totalItems=1,this.pageSize=10,this.users=[]}confirmDelete(t){this.genericModalService.show("Remover useristrador","Tem certeza que deseja desativar o useristrador?",()=>{this.delete(t)})}new(){this.router.navigate(["users/new"])}goToEdit(t){this.router.navigate(["users",t.id,"edit"])}goToView(t){this.router.navigate(["users",t.id,"view"])}ngOnInit(){this.loadAll()}loadAll(){this.userService.getAll({page:this.page}).subscribe(t=>{this.users=t?.results||[],this.page=t?.pageNumber||0,this.totalItems=t?.count||0,this.pageSize=t?.size||0})}delete(t){this.userService.delete(t.id).subscribe(n=>{this.loadAll()})}previousPage(){this.page--,this.loadAll()}nextPage(){this.page++,this.loadAll()}loadPage(t){this.page=t,this.loadAll()}}h.\u0275fac=function(t){return new(t||h)(e.Y36(l.F0),e.Y36(U.K),e.Y36(N.v))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-user"]],decls:25,vars:3,consts:[[1,"component-header"],[1,"container"],[1,"btn-header","mb-4"],[1,"btn-primary","btn",3,"click"],["icon","plus"],[1,"table","table-striped"],["susere","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","card-header",3,"ngClass",4,"ngIf"],["susere","row"],["class","danger","icon","close",4,"ngIf"],["class","success","icon","check",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["icon","eye"],["type","button",1,"btn","btn-success",3,"click"],["icon","edit"],["type","button",1,"btn","btn-danger",3,"click"],["icon","trash-alt"],["icon","close",1,"danger"],["icon","check",1,"success"],[3,"dismissible"],[1,"card-header",3,"ngClass"],[1,"d-flex","justify-content-between"],["jhiTranslate","global.empty.list.title",4,"ngIf"],["size","sm",3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["jhiTranslate","global.empty.list.title"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Cidad\xe3o"),e.qZA()(),e.TgZ(3,"div",1)(4,"div",2)(5,"button",3),e.NdJ("click",function(){return n.new()}),e._UZ(6,"fa-icon",4),e._uU(7,"\xa0 Adicionar "),e.qZA()(),e.TgZ(8,"table",5)(9,"thead")(10,"tr")(11,"th",6),e._uU(12,"#"),e.qZA(),e.TgZ(13,"th",6),e._uU(14,"Ativo"),e.qZA(),e.TgZ(15,"th",6),e._uU(16,"Nome"),e.qZA(),e.TgZ(17,"th",6),e._uU(18,"Sobrenome"),e.qZA(),e.TgZ(19,"th",6),e._uU(20,"A\xe7oes"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,F,17,5,"tr",7),e.qZA()(),e.YNc(23,I,4,1,"p",8),e.YNc(24,M,6,12,"div",9),e.qZA()),2&t&&(e.xp6(22),e.Q6J("ngForOf",n.users),e.xp6(1),e.Q6J("ngIf",!(null!=n.users&&n.users.length)),e.xp6(1),e.Q6J("ngIf",n.totalItems>0))},dependencies:[d.mk,d.sg,d.O5,c.N9,v.BN,c.xm],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});var b=r(6760),w=r(7185),Y=r(7533);const k=["form"];function O(o,t){1&o&&(e.TgZ(0,"div",11)(1,"label",24),e._uU(2,"Id"),e.qZA(),e._UZ(3,"input",25),e.qZA())}class p{constructor(t,n,s,a,u){this.fb=t,this.userService=n,this.router=s,this.route=a,this.toastr=u,this.editForm=this.fb.group({id:[{value:null,disabled:!0}],username:["",[i.kI.required,i.kI.maxLength(100)]],firstName:["",[i.kI.required,i.kI.maxLength(100)]],lastName:[""],documentNumber:[""],password:[""],email:[""]}),this.user=this.route.snapshot.data.user}ngOnInit(){this.user=this.route.snapshot.data.user,this.user&&(this.editForm.get(["id"])?.setValue(this.user.id),this.editForm.get(["username"])?.setValue(this.user.username),this.editForm.get(["firstName"])?.setValue(this.user.firstName),this.editForm.get(["lastName"])?.setValue(this.user.lastName),this.editForm.get(["documentNumber"])?.setValue(this.user.documentNumber),this.editForm.get(["password"])?.setValue(this.user.password),this.editForm.get(["email"])?.setValue(this.user.email),this.editForm.get(["email"])?.disable(),this.editForm.get(["username"])?.disable(),this.editForm.get(["password"])?.disable())}create(){const t={...this.editForm.value};t&&this.user?.id?this.userService.update(this.user.id,t).subscribe(n=>{this.router.navigate(["users"])},()=>{this.toastr.error("Dados invalidos para cadastro","Erro de valida\xe7\xe3o")}):this.userService.create(t).subscribe(n=>{this.router.navigate(["users"])},()=>{this.toastr.error("Dados invalidos para cadastro","Erro de valida\xe7\xe3o")})}cancel(){this.router.navigate(["/users"])}}p.\u0275fac=function(t){return new(t||p)(e.Y36(i.qu),e.Y36(U.K),e.Y36(l.F0),e.Y36(l.gz),e.Y36(w._W))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-user-update"]],viewQuery:function(t,n){if(1&t&&e.Gf(k,5),2&t){let s;e.iGM(s=e.CRH())&&(n.form=s.first)}},decls:39,vars:3,consts:[[1,"component-header"],[1,"container"],["name","editForm","role","form","novalidate","",1,"mt-2",3,"formGroup","ngSubmit"],["form","ngForm"],[1,"form-group","mt-4","col-6"],["type","button",1,"btn","btn-danger",3,"click"],["icon","close"],["type","submit",1,"btn","btn-primary"],["icon","plus"],[1,"row"],["class","form-group col-6",4,"ngIf"],[1,"form-group","col-6"],["for","username"],["formControlName","username","type","text","id","username",1,"form-control"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","firstName"],["formControlName","firstName","type","text","id","firstName",1,"form-control"],["for","lastName"],["formControlName","lastName","type","text","id","lastName",1,"form-control"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["for","documentNumber"],["formControlName","documentNumber","type","text","id","documentNumber",1,"form-control",3,"mask"],["for","id"],["formControlName","id","type","text","id","id",1,"form-control"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Cadastrar Cidad\xe3o"),e.qZA()(),e.TgZ(3,"div",1)(4,"form",2,3),e.NdJ("ngSubmit",function(){return n.create()}),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return n.cancel()}),e._UZ(8,"fa-icon",6),e._uU(9,"\xa0 Cancelar"),e.qZA(),e.TgZ(10,"button",7),e._UZ(11,"fa-icon",8),e._uU(12,"\xa0 Adicionar"),e.qZA()(),e.TgZ(13,"div",9),e.YNc(14,O,4,0,"div",10),e.TgZ(15,"div",11)(16,"label",12),e._uU(17,"Usu\xe1rio"),e.qZA(),e._UZ(18,"input",13),e.qZA(),e.TgZ(19,"div",11)(20,"label",14),e._uU(21,"E-mail"),e.qZA(),e._UZ(22,"input",15),e.qZA(),e.TgZ(23,"div",11)(24,"label",16),e._uU(25,"Nome"),e.qZA(),e._UZ(26,"input",17),e.qZA(),e.TgZ(27,"div",11)(28,"label",18),e._uU(29,"Sobrenome"),e.qZA(),e._UZ(30,"input",19),e.qZA(),e.TgZ(31,"div",11)(32,"label",20),e._uU(33,"Senha"),e.qZA(),e._UZ(34,"input",21),e.qZA(),e.TgZ(35,"div",11)(36,"label",22),e._uU(37,"CPF"),e.qZA(),e._UZ(38,"input",23),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.editForm),e.xp6(10),e.Q6J("ngIf",null==n.user?null:n.user.id),e.xp6(24),e.Q6J("mask","000.000.000-00"))},dependencies:[d.O5,Y.Z6,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,v.BN],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});const z=["form"];function E(o,t){1&o&&(e._UZ(0,"fa-icon",13),e._uU(1," \xa0 "),e.TgZ(2,"span"),e._uU(3,"Detalhes"),e.qZA()),2&o&&e.Q6J("fixedWidth",!0)}function Q(o,t){if(1&o&&(e.TgZ(0,"div",5)(1,"dl",7)(2,"dt")(3,"span"),e._uU(4,"Id"),e.qZA()(),e.TgZ(5,"dd"),e._uU(6),e.qZA(),e.TgZ(7,"dt")(8,"span"),e._uU(9,"Usu\xe1rio"),e.qZA()(),e.TgZ(10,"dd"),e._uU(11),e.qZA(),e.TgZ(12,"dt")(13,"span"),e._uU(14,"E-mail"),e.qZA()(),e.TgZ(15,"dd"),e._uU(16),e.qZA(),e.TgZ(17,"dt")(18,"span"),e._uU(19,"Nome"),e.qZA()(),e.TgZ(20,"dd"),e._uU(21),e.qZA(),e.TgZ(22,"dt")(23,"span"),e._uU(24,"Sobrenome"),e.qZA()(),e.TgZ(25,"dd"),e._uU(26),e.qZA(),e.TgZ(27,"dt")(28,"span"),e._uU(29,"CPF"),e.qZA()(),e.TgZ(30,"dd"),e._uU(31),e.qZA()()()),2&o){const n=e.oxw(2);e.xp6(6),e.Oqu(n.user.id),e.xp6(5),e.Oqu(n.user.username),e.xp6(5),e.Oqu(n.user.email),e.xp6(5),e.Oqu(n.user.firstName),e.xp6(5),e.Oqu(n.user.lastName),e.xp6(5),e.Oqu(n.user.documentNumber)}}function G(o,t){1&o&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",5)(3,"ngb-accordion",9)(4,"ngb-panel",10),e.YNc(5,E,4,1,"ng-template",11),e.YNc(6,Q,32,6,"ng-template",12),e.qZA()()()()())}class _{constructor(t,n,s,a){this.fb=t,this.userService=n,this.router=s,this.route=a,this.user=this.route.snapshot.data.user}ngOnInit(){this.user=this.route.snapshot.data.user}cancel(){this.router.navigate(["/users"])}}_.\u0275fac=function(t){return new(t||_)(e.Y36(i.qu),e.Y36(U.K),e.Y36(l.F0),e.Y36(l.gz))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-user-detail"]],viewQuery:function(t,n){if(1&t&&e.Gf(z,5),2&t){let s;e.iGM(s=e.CRH())&&(n.form=s.first)}},decls:10,vars:1,consts:[[1,"component-header"],[1,"container"],[1,"btn-header","mb-4"],[1,"btn-primary","btn",3,"click"],["icon","angle-left"],[1,"row","justify-content-center"],["class","col-12",4,"ngIf"],[1,"col-12"],[1,"card-body"],["activeIds","panelEntity",1,"col-12","entity-details"],["id","panelEntity"],["ngbPanelTitle",""],["ngbPanelContent",""],["icon","list-alt",3,"fixedWidth"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Detalhes do Cidad\xe3o"),e.qZA()(),e.TgZ(3,"div",1)(4,"div",2)(5,"button",3),e.NdJ("click",function(){return n.cancel()}),e._UZ(6,"fa-icon",4),e._uU(7,"\xa0 Voltar"),e.qZA()(),e.TgZ(8,"div",5),e.YNc(9,G,7,0,"div",6),e.qZA()()),2&t&&(e.xp6(9),e.Q6J("ngIf",n.user))},dependencies:[d.O5,c.gY,c.Gk,c.Cu,c.gW,v.BN],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});class m{constructor(t,n){this.service=t,this.router=n}resolve(t){return this.service.getById(t.params.id)}}m.\u0275fac=function(t){return new(t||m)(e.LFG(U.K),e.LFG(l.F0))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});const D=[{path:"",component:h,pathMatch:"full",canActivate:[b.a]},{path:":id/edit",component:p,resolve:{user:m},pathMatch:"full",canActivate:[b.a]},{path:":id/view",component:_,resolve:{user:m},pathMatch:"full",canActivate:[b.a]},{path:"new",component:p,pathMatch:"full",canActivate:[b.a]}];class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[l.Bz.forChild(D),l.Bz]}),(0,d.qS)(A.Z);class f{}f.\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({providers:[{provide:e.soG,useValue:"pt-BR"}],imports:[d.ez,c.jF,c.Gs,i.UX,g,c.M,v.uH,C.zh,x.A0,c.IJ]})}}]);