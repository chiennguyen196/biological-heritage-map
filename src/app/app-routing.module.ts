import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { environment } from '../environments/environment';

const routes: Routes = [
    { path: `${environment.region.prefix}/:id`, component: RegionPageComponent },
    { path: '', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
