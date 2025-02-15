import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  providers: [provideNgxMask()]
})
export class ContactsComponent {

  formContact;

  constructor(
    private fb: FormBuilder
  ) {
    this.formContact = this.fb.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)
        ]
      ],
      subject: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100)
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.minLength(11),
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500)
        ]
      ]
    });
  }

  sendForm() {
    alert('The message has been sent!');
    this.formContact.reset();
  }
}
