import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';

const routes: Routes = [
    { path: 'vung/{vung_id}', component: RegionPageComponent },
    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
