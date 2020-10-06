import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'homepage-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formSubmitted = false;

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }


  submit() {
    this.http
      .post('https://formspree.io/jakub.m.wisniowski@gmail.com', {
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        message: this.form.controls.message.value,
      })
      .subscribe((_) => {
        this.formSubmitted = true;
        setTimeout(() => {
          this.formSubmitted = false;
        }, 3000);
      });
  }
}
