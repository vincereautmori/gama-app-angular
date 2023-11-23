import {ApiService} from "../entities/model/user-api-response.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../entities/model/user.model";
import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService<User> {

  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }

  protected getPath(): string {
    return '';
  }

  protected getRole(): string {
    return 'Citizen';
  }
}
