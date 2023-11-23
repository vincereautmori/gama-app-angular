import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GenericModalComponent} from "./generic-modal.component";

@Injectable({providedIn: 'root'})
export class GenericModalService {
  private isOpen = false;
  private instance?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  show(title: string, question: string, confirm?: Function, cancel?: Function, options?: NgbModalOptions): void {
    if (this.isOpen) return;

    this.isOpen = true;

    this.instance = this.modalService.open(GenericModalComponent, options || {size: 'lg', backdrop: 'static'});
    this.instance.componentInstance.title = title;
    this.instance.componentInstance.question = question;
    this.instance.componentInstance.confirm = confirm;
    this.instance.componentInstance.cancel = cancel;

    this.instance.result.finally(() => (this.isOpen = false));
  }

  confirm(): void {
    if (!this.isOpen || !this.instance) return;
    this.instance.close();
  }

  dismiss(): void {
    if (!this.isOpen || !this.instance) return;
    this.instance.dismiss();
  }
}
