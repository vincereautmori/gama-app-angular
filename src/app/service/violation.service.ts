import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Cop} from "../entities/model/cop.model";
import {Router} from "@angular/router";
import {Violation} from "../entities/model/violation.model";
import {ToastrService} from "ngx-toastr";
import {constants} from "../../constants";

interface paginatedApiResponse<T> {
  page: number;
  size: number;
  results: T[];
}



@Injectable({
  providedIn: 'root'
})
export class ViolationService {

  private baseUrl = constants.API_URL_PREFFIX;
  private basePrefix = 'traffic-violations';


  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
  }

  // Método para listar todos os objetos
  getAll(req?: any): Observable<HttpResponse<paginatedApiResponse<Violation>>> {
    return this.http.get<HttpResponse<paginatedApiResponse<Violation>>>(`${this.baseUrl}/${this.basePrefix}`, {params: {pageNumber: req.page}})
  }

  // Método para buscar um objeto por ID
  getById(id: number): Observable<Violation> {
    return this.http.get<Violation>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

  // Método para criar um novo objeto
  create(obj: Violation): Observable<HttpResponse<Violation>> {
    return this.http.post<HttpResponse<Violation>>(`${this.baseUrl}/${this.basePrefix}`, obj, {observe: 'response'})
      // @ts-ignore
      .pipe(tap((res: HttpResponse<Violation>) => {
        if (res.status === 200) {
          this.toastr.show("Cadastro efetuado com sucesso", "200")
        }
      }))
  }

  // Método para atualizar um objeto existente
  update(id: number, obj: Violation): Observable<Violation> {
    return this.http.put<Violation>(`${this.baseUrl}/${this.basePrefix}/${id}`, obj);
  }

  // Método para excluir um objeto por ID
  delete(id: number): Observable<Violation> {
    return this.http.delete<Violation>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }


}
