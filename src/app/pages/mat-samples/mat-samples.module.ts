import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSamplesRoutingModule } from './mat-samples-routing.module';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { MatDragDropComponent } from './mat-drag-drop/mat-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSamplesComponent } from './mat-samples.component';
import { MatAddressFormComponent } from './mat-address-form/mat-address-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatNavComponent, MatTableComponent, MatDashboardComponent, MatTreeComponent, MatDragDropComponent, MatSamplesComponent, MatAddressFormComponent],
  imports: [
    CommonModule,
    MatSamplesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class MatSamplesModule { }
