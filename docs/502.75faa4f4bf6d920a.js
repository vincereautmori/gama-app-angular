"use strict";(self.webpackChunkgama_app=self.webpackChunkgama_app||[]).push([[502],{502:(D,T,a)=>{a.r(T),a.d(T,{ViolationModule:()=>g});var t=a(4650),p=a(6895),r=a(221),b=a(2216),s=a(4006),U=a(9627),y=a(769),x=a(247),l=a(1489),V=a(8505),F=a(6271),q=a(529),C=a(7185);class c{constructor(o,i,n){this.http=o,this.router=i,this.toastr=n,this.baseUrl=F._.API_URL_PREFFIX,this.basePrefix="traffic-violations"}getAll(o){return this.http.get(`${this.baseUrl}/${this.basePrefix}`,{params:{pageNumber:o.page}})}getById(o){return this.http.get(`${this.baseUrl}/${this.basePrefix}/${o}`)}create(o){return this.http.post(`${this.baseUrl}/${this.basePrefix}`,o,{observe:"response"}).pipe((0,V.b)(i=>{200===i.status&&this.toastr.show("Cadastro efetuado com sucesso","200")}))}update(o,i){return this.http.put(`${this.baseUrl}/${this.basePrefix}/${o}`,i)}delete(o){return this.http.delete(`${this.baseUrl}/${this.basePrefix}/${o}`)}}c.\u0275fac=function(o){return new(o||c)(t.LFG(q.eN),t.LFG(l.F0),t.LFG(C._W))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var I=a(6942);function N(e,o){1&e&&t._UZ(0,"fa-icon",18)}function Y(e,o){1&e&&t._UZ(0,"fa-icon",19)}function M(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"tr")(1,"th",9),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.YNc(4,N,1,0,"fa-icon",10),t.YNc(5,Y,1,0,"fa-icon",11),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"button",12),t.NdJ("click",function(){const u=t.CHM(i).$implicit,Z=t.oxw();return t.KtG(Z.goToView(u))}),t._UZ(12,"fa-icon",13),t.qZA(),t.TgZ(13,"button",14),t.NdJ("click",function(){const u=t.CHM(i).$implicit,Z=t.oxw();return t.KtG(Z.goToEdit(u))}),t._UZ(14,"fa-icon",15),t.qZA(),t.TgZ(15,"button",16),t.NdJ("click",function(){const u=t.CHM(i).$implicit,Z=t.oxw();return t.KtG(Z.confirmDelete(u))}),t._UZ(16,"fa-icon",17),t.qZA()()()}if(2&e){const i=o.$implicit;t.xp6(2),t.Oqu(i.id),t.xp6(2),t.Q6J("ngIf",!i.active),t.xp6(1),t.Q6J("ngIf",i.active),t.xp6(2),t.hij(" ",i.code," "),t.xp6(2),t.Oqu(i.name)}}function J(e,o){1&e&&(t.TgZ(0,"p")(1,"ngb-alert",20)(2,"strong"),t._uU(3,"N\xe3o h\xe1 dados cadastrados"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("dismissible",!1))}class f{constructor(o,i,n){this.router=o,this.violationService=i,this.genericModalService=n,this.page=1,this.totalItems=1,this.pageSize=10,this.violations=[]}confirmDelete(o){this.genericModalService.show("Remover violationistrador","Tem certeza que deseja desativar o violationistrador?",()=>{this.delete(o)})}new(){this.router.navigate(["violations/new"])}goToEdit(o){this.router.navigate(["violations",o.id,"edit"])}goToView(o){this.router.navigate(["violations",o.id,"view"])}ngOnInit(){this.loadAll()}loadAll(){this.violationService.getAll({page:this.page}).subscribe(o=>{this.violations=o||[]})}delete(o){this.violationService.delete(o.id).subscribe(i=>{this.loadAll()})}previousPage(){this.page--,this.loadAll()}nextPage(){this.page++,this.loadAll()}loadPage(o){this.page=o,this.loadAll()}}f.\u0275fac=function(o){return new(o||f)(t.Y36(l.F0),t.Y36(c),t.Y36(I.v))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-violation"]],decls:22,vars:2,consts:[[1,"component-header"],[1,"container"],[1,"btn-header","mb-4"],[1,"btn-primary","btn",3,"click"],["icon","plus"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"],["class","danger","icon","close",4,"ngIf"],["class","success","icon","check",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["icon","eye"],["type","button",1,"btn","btn-success",3,"click"],["icon","edit"],["type","button",1,"btn","btn-danger",3,"click"],["icon","trash-alt"],["icon","close",1,"danger"],["icon","check",1,"success"],[3,"dismissible"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Infra\xe7\xf5es"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"button",3),t.NdJ("click",function(){return i.new()}),t._UZ(6,"fa-icon",4),t._uU(7,"\xa0 Adicionar "),t.qZA()(),t.TgZ(8,"table",5)(9,"thead")(10,"tr")(11,"th",6),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"Ativo"),t.qZA(),t.TgZ(15,"th",6),t._uU(16,"C\xf3digo"),t.qZA(),t.TgZ(17,"th",6),t._uU(18,"Nome"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,M,17,5,"tr",7),t.qZA()(),t.YNc(21,J,4,1,"p",8),t.qZA()),2&o&&(t.xp6(20),t.Q6J("ngForOf",i.violations),t.xp6(1),t.Q6J("ngIf",!(null!=i.violations&&i.violations.length)))},dependencies:[p.sg,p.O5,b.BN,r.xm],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});var A=a(6760);const O=["form"];function P(e,o){1&e&&(t.TgZ(0,"div",11)(1,"label",16),t._uU(2,"Id"),t.qZA(),t._UZ(3,"input",17),t.qZA())}class v{constructor(o,i,n,h,u){this.fb=o,this.violationService=i,this.router=n,this.route=h,this.toastr=u,this.editForm=this.fb.group({id:[{value:null,disabled:!0}],code:["",[s.kI.required,s.kI.maxLength(100)]],name:["",[s.kI.required,s.kI.maxLength(100)]]}),this.violation=this.route.snapshot.data.violation}ngOnInit(){this.violation=this.route.snapshot.data.violation,this.violation&&(this.editForm.get(["id"])?.setValue(this.violation.id),this.editForm.get(["code"])?.setValue(this.violation.code),this.editForm.get(["name"])?.setValue(this.violation.name))}create(){const o={...this.editForm.value};o&&this.violation?.id?this.violationService.update(this.violation.id,o).subscribe(i=>{this.router.navigate(["violations"])},()=>{this.toastr.error("Dados invalidos para cadastro","Erro de valida\xe7\xe3o")}):this.violationService.create(o).subscribe(i=>{this.router.navigate(["violations"])},()=>{this.toastr.error("Dados invalidos para cadastro","Erro de valida\xe7\xe3o")})}cancel(){this.router.navigate(["/violations"])}}v.\u0275fac=function(o){return new(o||v)(t.Y36(s.qu),t.Y36(c),t.Y36(l.F0),t.Y36(l.gz),t.Y36(C._W))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-violation-update"]],viewQuery:function(o,i){if(1&o&&t.Gf(O,5),2&o){let n;t.iGM(n=t.CRH())&&(i.form=n.first)}},decls:23,vars:2,consts:[[1,"component-header"],[1,"container"],["name","editForm","role","form","novalidate","",1,"mt-2",3,"formGroup","ngSubmit"],["form","ngForm"],[1,"form-group","mt-4","col-6"],["type","button",1,"btn","btn-danger",3,"click"],["icon","close"],["type","submit",1,"btn","btn-primary"],["icon","plus"],[1,"row"],["class","form-group col-6",4,"ngIf"],[1,"form-group","col-6"],["for","code"],["formControlName","code","type","text","id","code",1,"form-control"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["for","id"],["formControlName","id","type","text","id","id",1,"form-control"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Cadastrar infra\xe7\xe3o"),t.qZA()(),t.TgZ(3,"div",1)(4,"form",2,3),t.NdJ("ngSubmit",function(){return i.create()}),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return i.cancel()}),t._UZ(8,"fa-icon",6),t._uU(9,"\xa0 Cancelar"),t.qZA(),t.TgZ(10,"button",7),t._UZ(11,"fa-icon",8),t._uU(12,"\xa0 Adicionar"),t.qZA()(),t.TgZ(13,"div",9),t.YNc(14,P,4,0,"div",10),t.TgZ(15,"div",11)(16,"label",12),t._uU(17,"C\xf3digo"),t.qZA(),t._UZ(18,"input",13),t.qZA(),t.TgZ(19,"div",11)(20,"label",14),t._uU(21,"Nome"),t.qZA(),t._UZ(22,"input",15),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",i.editForm),t.xp6(10),t.Q6J("ngIf",null==i.violation?null:i.violation.id))},dependencies:[p.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.BN],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});const S=["form"];function G(e,o){1&e&&(t._UZ(0,"fa-icon",13),t._uU(1," \xa0 "),t.TgZ(2,"span"),t._uU(3,"Detalhes"),t.qZA()),2&e&&t.Q6J("fixedWidth",!0)}function $(e,o){if(1&e&&(t.TgZ(0,"div",5)(1,"dl",7)(2,"dt")(3,"span"),t._uU(4,"Id"),t.qZA()(),t.TgZ(5,"dd"),t._uU(6),t.qZA(),t.TgZ(7,"dt")(8,"span"),t._uU(9,"C\xf3digo"),t.qZA()(),t.TgZ(10,"dd"),t._uU(11),t.qZA(),t.TgZ(12,"dt")(13,"span"),t._uU(14,"Nome"),t.qZA()(),t.TgZ(15,"dd"),t._uU(16),t.qZA()()()),2&e){const i=t.oxw(2);t.xp6(6),t.Oqu(i.violation.id),t.xp6(5),t.Oqu(i.violation.code),t.xp6(5),t.Oqu(i.violation.name)}}function k(e,o){1&e&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",5)(3,"ngb-accordion",9)(4,"ngb-panel",10),t.YNc(5,G,4,1,"ng-template",11),t.YNc(6,$,17,3,"ng-template",12),t.qZA()()()()())}class _{constructor(o,i,n,h){this.fb=o,this.violationService=i,this.router=n,this.route=h,this.violation=this.route.snapshot.data.violation}ngOnInit(){this.violation=this.route.snapshot.data.violation}cancel(){this.router.navigate(["/violations"])}}_.\u0275fac=function(o){return new(o||_)(t.Y36(s.qu),t.Y36(c),t.Y36(l.F0),t.Y36(l.gz))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-violation-detail"]],viewQuery:function(o,i){if(1&o&&t.Gf(S,5),2&o){let n;t.iGM(n=t.CRH())&&(i.form=n.first)}},decls:10,vars:1,consts:[[1,"component-header"],[1,"container"],[1,"btn-header","mb-4"],[1,"btn-primary","btn",3,"click"],["icon","angle-left"],[1,"row","justify-content-center"],["class","col-12",4,"ngIf"],[1,"col-12"],[1,"card-body"],["activeIds","panelEntity",1,"col-12","entity-details"],["id","panelEntity"],["ngbPanelTitle",""],["ngbPanelContent",""],["icon","list-alt",3,"fixedWidth"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Detalhes da infra\xe7\xe3o"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"button",3),t.NdJ("click",function(){return i.cancel()}),t._UZ(6,"fa-icon",4),t._uU(7,"\xa0 Voltar"),t.qZA()(),t.TgZ(8,"div",5),t.YNc(9,k,7,0,"div",6),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("ngIf",i.violation))},dependencies:[p.O5,r.gY,r.Gk,r.Cu,r.gW,b.BN],styles:[".success[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{color:red}"]});class d{constructor(o,i){this.service=o,this.router=i}resolve(o){return this.service.getById(o.params.id)}}d.\u0275fac=function(o){return new(o||d)(t.LFG(c),t.LFG(l.F0))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});const E=[{path:"",component:f,pathMatch:"full",canActivate:[A.a]},{path:":id/edit",component:v,resolve:{violation:d},pathMatch:"full",canActivate:[A.a]},{path:":id/view",component:_,resolve:{violation:d},pathMatch:"full",canActivate:[A.a]},{path:"new",component:v,pathMatch:"full",canActivate:[A.a]}];class m{}m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[l.Bz.forChild(E),l.Bz]}),(0,p.qS)(U.Z);class g{}g.\u0275fac=function(o){return new(o||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({providers:[{provide:t.soG,useValue:"pt-BR"}],imports:[p.ez,r.jF,r.Gs,s.UX,m,r.M,b.uH,y.zh,x.A0,r.IJ]})}}]);