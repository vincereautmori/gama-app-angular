import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../model/user.model";
import paginatedApiResponse from "../model/user-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  users: User[] = []

  constructor(public router: Router, public userService: UserService, public genericModalService: GenericModalService) {
  }

  confirmDelete(user: User) {
    this.genericModalService.show("Remover useristrador", "Tem certeza que deseja desativar o useristrador?", () => {
      this.delete(user)
    })
  }

  new() {
    this.router.navigate(['users/new'])
  }

  goToEdit(user: User) {
    this.router.navigate(['users', user.id, 'edit'])

  }

  goToView(user: User) {
    this.router.navigate(['users', user.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.userService.getAll({page: this.page}).subscribe((res: paginatedApiResponse<User>) => {
      this.users = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0
    })
  }

  delete(user: User) {
    // @ts-ignore
    this.userService.delete(user.id).subscribe((res: paginatedApiResponse<User>) => {
      this.loadAll();
    })
  }

  previousPage() {
    this.page--
    this.loadAll()
  }

  nextPage() {
    this.page++
    this.loadAll()

  }



  loadPage(page: number) {
    this.page = page

    this.loadAll()
  }
}
