import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ViolationService} from "../../service/violation.service";
import {Violation} from "../model/violation.model";
import paginatedApiResponse from "../model/violation-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";

@Component({
  selector: 'app-violation',
  templateUrl: './violation.component.html',
  styleUrls: ['./violation.component.scss']
})
export class ViolationComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  violations: Violation[] = []

  constructor(public router: Router, public violationService: ViolationService, public genericModalService: GenericModalService) {
  }

  confirmDelete(violation: Violation) {
    this.genericModalService.show("Remover violationistrador", "Tem certeza que deseja desativar o violationistrador?", () => {
      this.delete(violation)
    })
  }

  new() {
    this.router.navigate(['violations/new'])
  }

  goToEdit(violation: Violation) {
    this.router.navigate(['violations', violation.id, 'edit'])

  }

  goToView(violation: Violation) {
    this.router.navigate(['violations', violation.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.violationService.getAll({page: this.page}).subscribe((res: Violation[]) => {
      this.violations = res || []
    })
  }

  delete(violation: Violation) {
    // @ts-ignore
    this.violationService.delete(violation.id).subscribe((res: paginatedApiResponse<Violation>) => {
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
