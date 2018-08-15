import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
    MatToolbarModule,
    MatButtonModule
]

@NgModule({
    imports: [...MAT_MODULES],
    exports: [...MAT_MODULES],
})
export class AngularMaterialModule { }