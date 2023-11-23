import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserUpdateComponent {
  user: any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.user = this.route.snapshot.data['user'];

  }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];

    if (this.user) {
      this.editForm.get((['id']))?.setValue(this.user.id)
      this.editForm.get((['username']))?.setValue(this.user.username)
      this.editForm.get((['firstName']))?.setValue(this.user.firstName)
      this.editForm.get((['lastName']))?.setValue(this.user.lastName)
      this.editForm.get((['documentNumber']))?.setValue(this.user.documentNumber)
      this.editForm.get((['password']))?.setValue(this.user.password)
      this.editForm.get((['email']))?.setValue(this.user.email)
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

    const user = {
      ...this.editForm.value
    } as User

    if (user && this.user?.id) {
      this.userService.update(this.user.id, user).subscribe(res => {
        this.router.navigate(['users'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    } else {
      this.userService.create(user).subscribe(res => {
        this.router.navigate(['users'])

      }, () => {
        this.toastr.error("Dados invalidos para cadastro", "Erro de validação")
      })
    }



  }

  cancel() {
    this.router.navigate(['/users'])
  }
}
