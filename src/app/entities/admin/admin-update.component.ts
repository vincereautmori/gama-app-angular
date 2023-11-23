import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminUpdateComponent {
  admin: any;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.admin = this.route.snapshot.data['admin'];

  }

  ngOnInit() {
    this.admin = this.route.snapshot.data['admin'];

    if (this.admin) {
      this.editForm.get((['id']))?.setValue(this.admin.id)
      this.editForm.get((['username']))?.setValue(this.admin.username)
      this.editForm.get((['firstName']))?.setValue(this.admin.firstName)
      this.editForm.get((['lastName']))?.setValue(this.admin.lastName)
      this.editForm.get((['documentNumber']))?.setValue(this.admin.documentNumber)
      this.editForm.get((['password']))?.setValue(this.admin.password)
      this.editForm.get((['email']))?.setValue(this.admin.email)
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

    const admin = {
      ...this.editForm.value
    } as User

    if (admin && this.admin?.id) {
      this.adminService.update(this.admin.id, admin).subscribe(res => {
        this.router.navigate(['admins'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    } else {
      this.adminService.create(admin).subscribe(res => {
        this.router.navigate(['admins'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    }



  }

  cancel() {
    this.router.navigate(['/admins'])
  }
}
