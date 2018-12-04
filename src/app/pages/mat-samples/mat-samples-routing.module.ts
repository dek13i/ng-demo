import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatAddressFormComponent } from './mat-address-form/mat-address-form.component';
import { MatSamplesComponent } from './mat-samples.component';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatDragDropComponent } from './mat-drag-drop/mat-drag-drop.component';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';

const routes: Routes = [
  {
    path: '',
    component: MatSamplesComponent,
    children: [
      { path: 'address-form', component: MatAddressFormComponent },
      { path: 'dashboard', component: MatDashboardComponent },
      { path: 'drag-drop', component: MatDragDropComponent },
      { path: 'nav', component: MatNavComponent },
      { path: 'table', component: MatTableComponent },
      { path: 'tree', component: MatTreeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatSamplesRoutingModule { }
