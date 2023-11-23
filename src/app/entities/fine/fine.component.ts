import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FineService} from "../../service/fine.service";
import {Fine} from "../model/fine.model";
import paginatedApiResponse from "../model/fine-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";
import {FormBuilder, Validators} from "@angular/forms";
import * as moment from 'moment'
import {User} from "../model/user.model";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Moment} from "moment";

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.scss']
})
export class FineComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  licensePlate?: string;
  from?:Moment = moment(new Date(2023,1,1))
  to?:Moment = moment(new Date(2023,12,31))
  fines: Fine[] = []

  constructor(private fb: FormBuilder, public router: Router, public fineService: FineService, public genericModalService: GenericModalService) {
  }

  dateForm = this.fb.group({
    from: [''],
    to: [''],
    licensePlate: ['']
  });

  confirmDelete(fine: Fine) {
    this.genericModalService.show("Remover multa", "Tem certeza que deseja desativar o fineistrador?", () => {
      this.delete(fine)
    })
  }

  new() {
    this.router.navigate(['fines/new'])
  }

  goToEdit(fine: Fine) {
    this.router.navigate(['fines', fine.id, 'edit'])

  }

  goToView(fine: Fine) {
    this.router.navigate(['fines', fine.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()

    this.dateForm.get(['from'])?.setValue(this.from)
    this.dateForm.get(['to'])?.setValue(this.from)
  }

  loadAll() {
    // @ts-ignore
    this.fineService.getAll({licensePlate: this.licensePlate, page: this.page, createdSince: this.from?.toISOString().split('T')[0], createdUntil: this.to.toISOString().split('T')[0]}).subscribe((res: paginatedApiResponse<Fine>) => {
      this.fines = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0

      this.fines?.map(fine => {
        fine.createdAt = moment(fine.createdAt)
      })
    })
  }

  delete(fine: Fine) {
    // @ts-ignore
    this.fineService.delete(fine.id).subscribe((res: paginatedApiResponse<Violation>) => {
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

  search() {
     const from = this.dateForm.get(['from'])!.value
    const to =  this.dateForm.get(['to'])!.value
    this.licensePlate =  this.dateForm.get(['licensePlate'])!.value

    this.from = moment(new Date(from.year, from.month - 1, from.day))
    this.to = moment(new Date(to.year, to.month - 1, to.day))
    this.loadAll()
  }
}
