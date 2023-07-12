import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  @Output() contactForm = new EventEmitter<Contact>();

  contactIdOnEdit: number | undefined;
  isEditMode = false;
  contact: Contact = {
    name: '',
    email: '',
    contact_number: '',
  };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.editModeChange.asObservable().subscribe((editMode) => {
      this.isEditMode = editMode;
    });
    this.contactService.contactIdChange
      .asObservable()
      .subscribe((contactEditId) => {
        this.contactIdOnEdit = contactEditId;
        this.contactEdit(this.contactIdOnEdit);
      });
  }

  contactEdit(id: number | undefined) {
    this.contactService.getContactById(id).subscribe((contactInfo) => {
      this.contact.name = contactInfo.name;
      this.contact.email = contactInfo.email;
      this.contact.contact_number = contactInfo.contact_number;
    });
  }

  contactSubmitForm(contactFormData: NgForm) {
    const contactForm: Contact = {
      name: contactFormData.value.name,
      email: contactFormData.value.email,
      contact_number: contactFormData.value.contact_number,
    };
    if (!this.isEditMode) {
      this.contactForm.emit(contactForm);
    } else {
      this.contactService
        .updateContact(this.contactIdOnEdit, contactForm)
        .subscribe(
          (res) => {
            if (res) {
              this.contactService.editModeChange.next(true);
              this.contactService.editModeChange.next(false);
            }
          },
          (error) => {
            alert('Update unsuccessful. Contact already deleted.');
            this.isEditMode = false;
          }
        );
    }
    contactFormData.resetForm();
  }

  onCancel() {
    this.contact.name = '';
    this.contact.email = '';
    this.contact.contact_number = '';
    this.isEditMode = false;
  }
}
