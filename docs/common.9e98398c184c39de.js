"use strict";(self.webpackChunkgama_app=self.webpackChunkgama_app||[]).push([[592],{4093:(E,i,s)=>{s.d(i,{s:()=>r});var h=s(8505),a=s(6271),_=s(4650),u=s(529),e=s(7185);class r{constructor(t,n){this.http=t,this.toastr=n,this.baseUrl=a._.API_URL_PREFFIX,this.basePrefix="users"}getAll(t){return this.http.get(`${this.baseUrl}/${this.basePrefix}`,{params:{pageNumber:t.page,role:this.getRole()}})}getById(t){return this.http.get(`${this.baseUrl}/${this.basePrefix}/${t}`)}create(t){return this.http.post(`${this.baseUrl}/${this.basePrefix}/${this.getPath()}`,t,{observe:"response"}).pipe((0,h.b)(n=>{200===n.status&&this.toastr.success("Cadastro efetuado com sucesso","200")}))}update(t,n){return this.http.put(`${this.baseUrl}/${this.basePrefix}/${t}`,n)}delete(t){return this.http.delete(`${this.baseUrl}/${this.basePrefix}/${t}`)}}r.\u0275fac=function(t){return new(t||r)(_.LFG(u.eN),_.LFG(e._W))},r.\u0275prov=_.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})},4981:(E,i,s)=>{s.d(i,{K:()=>e});var h=s(4093),a=s(4650),_=s(529),u=s(7185);class e extends h.s{constructor(o,t){super(o,t)}getPath(){return""}getRole(){return"Citizen"}}e.\u0275fac=function(o){return new(o||e)(a.LFG(_.eN),a.LFG(u._W))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}}]);