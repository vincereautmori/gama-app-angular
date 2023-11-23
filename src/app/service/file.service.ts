import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Cop} from "../entities/model/cop.model";
import {Router} from "@angular/router";
import {Occurrence} from "../entities/model/occurrence.model";
import {ToastrService} from "ngx-toastr";
import {constants} from "../../constants";

interface paginatedApiResponse {
  trafficFineFile: string;
}



@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = constants.API_URL_PREFFIX;
  private basePrefix = 'files';


  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
  }


  // Método para buscar um objeto por ID
  get(url: string): Observable<ArrayBuffer> {
    // @ts-ignore
    return this.http.get<ArrayBuffer>(`${this.baseUrl}/${this.basePrefix}?path=${url}`, { responseType: 'arrayBuffer' as 'arrayBuffer'   });
  }



}
