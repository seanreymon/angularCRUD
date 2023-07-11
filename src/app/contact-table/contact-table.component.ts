import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent {
  @Input() contacts: Contact[] = [];

  viewContact(id: number | undefined) {}
  editContact(id: number | undefined) {}
  deleteContact(id: number | undefined) {}
}
