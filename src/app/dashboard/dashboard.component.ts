import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  contactsFromDashboard: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.runGetAllContacts();
    this.contactService.editModeChange.asObservable().subscribe((response) => {
      if (response) {
        this.runGetAllContacts();
      }
    });
  }
  runGetAllContacts() {
    this.contactService.getAllContacts().subscribe((contactResponse) => {
      this.contactsFromDashboard = contactResponse.slice();
    });
  }

  contactSubmitForm(contactData: Contact) {
    this.contactService.createContact(contactData).subscribe((response) => {
      if (response) {
        this.runGetAllContacts();
      }
    });
  }
}
