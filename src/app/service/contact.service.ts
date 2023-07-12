import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public editModeChange = new Subject<boolean>();
  public contactIdChange = new Subject<number | undefined>();

  url = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  getContactById(id: number | undefined) {
    return this.http.get<Contact>(this.url + '/' + id);
  }

  createContact(contactData: Contact) {
    return this.http.post(this.url, {
      name: contactData.name,
      email: contactData.email,
      contact_number: contactData.contact_number,
    });
  }

  updateContact(id: number | undefined, contactData: Contact) {
    return this.http.put(this.url + '/' + id, contactData);
  }

  deleteContact(id: number | undefined) {
    return this.http.delete(this.url + '/' + id);
  }
}
