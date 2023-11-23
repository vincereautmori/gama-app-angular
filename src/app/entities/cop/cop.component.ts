import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import paginatedApiResponse from "../model/user-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";
import {CopService} from "../../service/cop.service";

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.scss']
})
export class CopComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  cops: User[] = []

  constructor(public router: Router, public copService: CopService, public genericModalService: GenericModalService) {
  }

  confirmDelete(user: User) {
    this.genericModalService.show("Remover policial", "Tem certeza que deseja desativar o policial?", () => {
      this.delete(user)
    })
  }

  new() {
    this.router.navigate(['cops/new'])
  }

  goToEdit(user: User) {
    this.router.navigate(['cops', user.id, 'edit'])

  }

  goToView(user: User) {
    this.router.navigate(['cops', user.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.copService.getAll({page: this.page}).subscribe((res: paginatedApiResponse<User>) => {
      this.cops = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0
    })
  }

  delete(user: User) {
    // @ts-ignore
    this.copService.delete(user.id).subscribe((res: paginatedApiResponse<User>) => {
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
