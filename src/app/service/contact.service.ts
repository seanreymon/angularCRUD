import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  createContact(contactData: Contact) {
    return this.http.post(this.url, {
      name: contactData.name,
      email: contactData.email,
      contact_number: contactData.contact_number,
    });
  }
}
