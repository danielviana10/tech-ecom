import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import emailjs from 'emailjs-com';
import { NotificationService } from '../notification.service';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [provideNgxMask()],
})
export class ContactsComponent {
  formContact;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.formContact = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  sendForm() {
    if (this.formContact.valid) {
      const formData = this.formContact.value;

      const emailjsServiceId = environment.emailjsServiceId;
      const emailjsTemplateId = environment.emailjsTemplateId;
      const emailjsUserId = environment.emailjsUserId;

      if (!emailjsServiceId || !emailjsTemplateId || !emailjsUserId) {
        console.error('EmailJS environment variables are missing!');
        this.notificationService.notify(
          'The email service is not properly configured.'
        );
        return;
      }

      const templateParams = {
        name: formData.name,
        to_name: 'Tech Ecom',
        subject: formData.subject,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(
          emailjsServiceId,
          emailjsTemplateId,
          templateParams,
          emailjsUserId
        )
        .then(
          (response) => {
            console.log('Email enviado com sucesso:', response);
            this.notificationService.notify('The message has been sent!');
            this.formContact.reset();
          },
          (error) => {
            console.log('Erro ao enviar email:', error);
            this.notificationService.notify(
              'There was an error sending your message. Please try again later.'
            );
          }
        );
    } else {
      this.notificationService.notify(
        'Please fill out all the fields correctly.'
      );
    }
  }
}
