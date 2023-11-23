import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ViolationService} from "../../service/violation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Violation} from "../model/violation.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-violation-update',
  templateUrl: './violation-update.component.html',
  styleUrls: ['./violation.component.scss']
})
export class ViolationUpdateComponent {
  violation: any;

  constructor(private fb: FormBuilder, private violationService: ViolationService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.violation = this.route.snapshot.data['violation'];

  }

  ngOnInit() {
    this.violation = this.route.snapshot.data['violation'];

    if (this.violation) {
      this.editForm.get((['id']))?.setValue(this.violation.id)
      this.editForm.get((['code']))?.setValue(this.violation.code)
      this.editForm.get((['name']))?.setValue(this.violation.name)
    }
  }

  editForm = this.fb.group({
    id: [{value: null, disabled: true}],
    code: ['', [Validators.required, Validators.maxLength(100)]],
    name: ['', [Validators.required, Validators.maxLength(100)]]
  });

  @ViewChild('form')
  form?: NgForm;


  create(): void {

    const violation = {
      ...this.editForm.value
    } as Violation

    if (violation && this.violation?.id) {
      this.violationService.update(this.violation.id, violation).subscribe(res => {
        this.router.navigate(['violations'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    } else {
      this.violationService.create(violation).subscribe(res => {
        this.router.navigate(['violations'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    }



  }

  cancel() {
    this.router.navigate(['/violations'])
  }
}
