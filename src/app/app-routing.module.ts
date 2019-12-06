import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegionPageWithChildRegionComponent } from './pages/region-page/region-page-with-child-region';

const routes: Routes = [
    { path: `${environment.region.prefix}/:id/:childId`, component: RegionPageWithChildRegionComponent },
    { path: `${environment.region.prefix}/:id`, component: RegionPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
