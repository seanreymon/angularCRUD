import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    contact_number: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = param['id'];
      this.contactService.getContactById(id).subscribe((contact: Contact) => {
        this.contact = contact;
      });
    });
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }
}
