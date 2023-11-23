import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {OccurrenceService} from "../../service/occurrence.service";
import {Occurrence} from "../model/occurrence.model";
import paginatedApiResponse from "../model/occurrence-api-response.model";
import {GenericModalService} from "../../shared/modal/generic-modal.service";
import {FormBuilder} from "@angular/forms";
import {Moment} from "moment";
import * as moment from "moment";

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  occurrences: Occurrence[] = []
  from?:Moment = moment(new Date(2023,1,1))
  to?:Moment = moment(new Date(2023,12,31))

  constructor(private fb: FormBuilder,public router: Router, public occurrenceService: OccurrenceService, public genericModalService: GenericModalService) {
  }
  dateForm = this.fb.group({
    from: [''],
    to: [''],
    licensePlate: ['']
  });


  confirmDelete(occurrence: Occurrence) {
    this.genericModalService.show("Remover occurrenceistrador", "Tem certeza que deseja desativar o occurrenceistrador?", () => {
      this.delete(occurrence)
    })
  }

  new() {
    this.router.navigate(['occurrences/new'])
  }

  goToEdit(occurrence: Occurrence) {
    this.router.navigate(['occurrences', occurrence.id, 'edit'])

  }

  goToView(occurrence: Occurrence) {
    this.router.navigate(['occurrences', occurrence.id, 'view'])

  }

  ngOnInit(): void {
    this.loadAll()

    this.dateForm.get(['from'])?.setValue(this.from)
    this.dateForm.get(['to'])?.setValue(this.from)
  }

  loadAll() {
    // @ts-ignore
    this.occurrenceService.getAll({page: this.page, createdSince: this.from?.toISOString().split('T')[0], createdUntil: this.to?.toISOString().split('T')[0] }).subscribe((res: paginatedApiResponse<Occurrence>) => {
      this.occurrences = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0
    })
  }

  delete(occurrence: Occurrence) {
    // @ts-ignore
    this.occurrenceService.delete(occurrence.id).subscribe((res: paginatedApiResponse<Occurrence>) => {
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

    this.from = moment(new Date(from.year, from.month - 1, from.day))
    this.to = moment(new Date(to.year, to.month - 1, to.day))
    this.loadAll()
  }
}
