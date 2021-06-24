import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'


const MaterialComponents = [
  MatTableModule,
  MatPaginatorModule,
];


@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
