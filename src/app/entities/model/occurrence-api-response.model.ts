import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {constants} from "../../../constants";

export default interface paginatedApiResponse<T> {
  pageNumber: number;
  count: number;
  size: number;
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  private baseUrl = constants.API_URL_PREFFIX;
  private basePrefix = 'occurrences';

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  // Método para listar todos os objetos
  getAll(req?: any): Observable<HttpResponse<paginatedApiResponse<T>>> {
    return this.http.get<HttpResponse<paginatedApiResponse<T>>>(`${this.baseUrl}/${this.basePrefix}`, {params: {pageNumber: req.page, role: this.getRole()}})
  }

  // Método para buscar um objeto por ID
  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

  // Método para criar um novo objeto
  create(obj: T): Observable<HttpResponse<T>> {
    return this.http.post<HttpResponse<T>>(`${this.baseUrl}/${this.basePrefix}/${this.getPath()}`, obj, {observe: 'response'})
      // @ts-ignore
      .pipe(tap((res: HttpResponse<T>) => {
        if (res.status === 200) {
          this.toastr.show("Cadastro efetuado com sucesso", "200")
        }
      }))
  }

  // Método para atualizar um objeto existente
  update(id: number, obj: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${this.basePrefix}/${id}`, obj);
  }

  // Método para excluir um objeto por ID
  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${this.basePrefix}/${id}`);
  }

  // Método abstrato para obter o caminho da API específico para cada tipo de objeto
  protected abstract getPath(): string;
  protected abstract getRole(): string;
}
