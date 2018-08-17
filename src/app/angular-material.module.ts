import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const MAT_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
];

@NgModule({
    imports: [...MAT_MODULES],
    exports: [...MAT_MODULES],
})
export class AngularMaterialModule { }
