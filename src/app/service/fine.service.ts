import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {Fine} from "../entities/model/fine.model";
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
export class FineService {

  private baseUrl = constants.API_URL_PREFFIX;
  private basePrefix = 'traffic-fines';

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
  }

  // Método para listar todos os objetos
  getAll(req?: any): Observable<HttpResponse<paginatedApiResponse<Fine>>> {
    return this.http.get<HttpResponse<paginatedApiResponse<Fine>>>(`${this.baseUrl}/${this.basePrefix}`, {
      params: {
        pageNumber: req.page,
        createdSince: req.createdSince,
      ...(req.licensePlate ? {licensePlate: req.licensePlate} : {}),
        createdUntil: req.createdUntil
      }
    })
  }

  // Método para buscar um objeto por ID
  getById(id: number): Observable<Fine> {
    return this.http.get<Fine>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

  // Método para criar um novo objeto
  create(obj: Fine): Observable<HttpResponse<Fine>> {
    return this.http.post<HttpResponse<Fine>>(`${this.baseUrl}/${this.basePrefix}/${this.basePrefix}`, obj, {observe: 'response'})
      // @ts-ignore
      .pipe(tap((res: HttpResponse<Fine>) => {
        if (res.status === 200) {
          this.toastr.show("Cadastro efetuado com sucesso", "200")
        }
      }))
  }

  // Método para atualizar um objeto existente
  update(id: number, obj: Fine): Observable<Fine> {
    return this.http.put<Fine>(`${this.baseUrl}/${this.basePrefix}/${id}`, obj);
  }

  // Método para excluir um objeto por ID
  delete(id: number): Observable<Fine> {
    return this.http.delete<Fine>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

}
