import {Component} from '@angular/core';
import {GenericModalService} from "./generic-modal.service";

@Component({
  selector: 'dm-generic-modal',
  templateUrl: './generic-modal.component.html'
})
export class GenericModalComponent {
  title?: string;
  question?: string;

  confirm?: Function;

  cancel?: Function;

  constructor(private genericModalService: GenericModalService) {}

  dismiss(): void {
      // const dismissBtn = this.buttons.find(b => b.type === 'dismiss');
      // dismissBtn && dismissBtn.action && dismissBtn.action();
    this.genericModalService.dismiss();
  }

  onConfirmClicked() {
    this.confirm && this.confirm();
    this.genericModalService.confirm()
  }

  onCancelClicked() {
    this.cancel && this.cancel();
    this.genericModalService.dismiss()
  }
}
