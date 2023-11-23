import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../../service/admin.service";
import {User} from "../model/user.model";
import paginatedApiResponse from "../model/user-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  admins: User[] = []

  constructor(public router: Router, public adminService: AdminService, public genericModalService: GenericModalService) {
  }

  confirmDelete(user: User) {
    this.genericModalService.show("Remover administrador", "Tem certeza que deseja desativar o administrador?", () => {
      this.delete(user)
    })
  }

  new() {
    this.router.navigate(['admins/new'])
  }

  goToEdit(user: User) {
    this.router.navigate(['admins', user.id, 'edit'])

  }

  goToView(user: User) {
    this.router.navigate(['admins', user.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.adminService.getAll({page: this.page}).subscribe((res: paginatedApiResponse<User>) => {
      this.admins = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0
    })
  }

  delete(user: User) {
    // @ts-ignore
    this.adminService.delete(user.id).subscribe((res: paginatedApiResponse<User>) => {
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
