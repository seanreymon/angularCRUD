import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent {
  @Input() contacts: Contact[] = [];

  constructor(private router: Router, private contactService: ContactService) {}

  viewContact(id: number | undefined) {
    this.router.navigate(['contact', id]);
  }
  editContact(id: number | undefined) {
    this.contactService.contactIdChange.next(id);
    this.contactService.editModeChange.next(true);
  }
  deleteContact(id: number | undefined) {
    this.contactService.deleteContact(id).subscribe();
    this.contactService.getAllContacts().subscribe((response: Contact[]) => {
      this.contacts = response;
    });
  }
}
