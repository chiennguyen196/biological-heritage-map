import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MAT_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
];

@NgModule({
    imports: [...MAT_MODULES],
    exports: [...MAT_MODULES],
})
export class AngularMaterialModule { }
