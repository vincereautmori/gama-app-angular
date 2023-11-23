import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";
import {CopService} from "../../service/cop.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cop-update',
  templateUrl: './cop-update.component.html',
  styleUrls: ['./cop.component.scss']
})
export class CopUpdateComponent {
  cop: any;

  constructor(private fb: FormBuilder, private copService: CopService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.cop = this.route.snapshot.data['cop'];

  }

  ngOnInit() {
    this.cop = this.route.snapshot.data['cop'];

    if (this.cop) {
      this.editForm.get((['id']))?.setValue(this.cop.id)
      this.editForm.get((['username']))?.setValue(this.cop.username)
      this.editForm.get((['firstName']))?.setValue(this.cop.firstName)
      this.editForm.get((['lastName']))?.setValue(this.cop.lastName)
      this.editForm.get((['documentNumber']))?.setValue(this.cop.documentNumber)
      this.editForm.get((['password']))?.setValue(this.cop.password)
      this.editForm.get((['email']))?.setValue(this.cop.email)
      this.editForm.get((['email']))?.disable()
      this.editForm.get((['username']))?.disable()
      this.editForm.get((['password']))?.disable()
    }
  }

  editForm = this.fb.group({
    id: [{value: null, disabled: true}],
    username: ['', [Validators.required, Validators.maxLength(100)]],
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: [''],
    documentNumber: [''],
    password: [''],
    email: [''],
  });

  @ViewChild('form')
  form?: NgForm;


  create(): void {

    const cop = {
      ...this.editForm.value
    } as User

    if (cop && this.cop?.id) {
      this.copService.update(this.cop.id, cop).subscribe(res => {
        this.router.navigate(['cops'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    } else {
      this.copService.create(cop).subscribe(res => {
        this.router.navigate(['cops'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    }



  }

  cancel() {
    this.router.navigate(['/cops'])
  }
}
