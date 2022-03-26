import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class MaterialModule { }
