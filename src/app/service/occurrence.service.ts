import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Cop} from "../entities/model/cop.model";
import {Router} from "@angular/router";
import {Occurrence} from "../entities/model/occurrence.model";
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
export class OccurrenceService {

  private baseUrl = constants.API_URL_PREFFIX;
  private basePrefix = 'occurrences';


  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
  }

  // Método para listar todos os objetos
  getAll(req?: any): Observable<HttpResponse<paginatedApiResponse<Occurrence>>> {
    return this.http.get<HttpResponse<paginatedApiResponse<Occurrence>>>(`${this.baseUrl}/${this.basePrefix}`, {
      params: {
        pageNumber: req.page,
        createdSince: req.createdSince,
        createdUntil: req.createdUntil
      }
    })
  }

  // Método para buscar um objeto por ID
  getById(id: number): Observable<Occurrence> {
    return this.http.get<Occurrence>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

  // Método para criar um novo objeto
  create(obj: Occurrence): Observable<HttpResponse<Occurrence>> {
    return this.http.post<HttpResponse<Occurrence>>(`${this.baseUrl}/${this.basePrefix}/${this.basePrefix}`, obj, {observe: 'response'})
      // @ts-ignore
      .pipe(tap((res: HttpResponse<Occurrence>) => {
        if (res.status === 200) {
          this.toastr.show("Cadastro efetuado com sucesso", "200")
        }
      }))
  }

  // Método para atualizar um objeto existente
  update(id: number, obj: Occurrence): Observable<Occurrence> {
    return this.http.put<Occurrence>(`${this.baseUrl}/${this.basePrefix}/${id}`, obj);
  }

  // Método para excluir um objeto por ID
  delete(id: number): Observable<Occurrence> {
    return this.http.delete<Occurrence>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }


}
