import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent {
  @Output() contactForm = new EventEmitter<Contact>();
  isCreateMode = true;
  contacts: Contact = {
    name: '',
    email: '',
    contact_number: '',
  };

  contactSubmitForm(contactData: NgForm) {
    const contactForm: Contact = {
      name: contactData.value.name,
      email: contactData.value.email,
      contact_number: contactData.value.contact_number,
    };

    this.contactForm.emit(contactForm);
    console.log(contactData);

    contactData.resetForm();
  }
}
