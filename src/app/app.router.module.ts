import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NopageComponent } from './nopage/nopage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'nopage', component: NopageComponent },
  { path: '**', redirectTo: 'nopage' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
