import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { HtmlViewerComponent } from './components/html-viewer/html-viewer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { SearchFormComponent } from './components/search-dialog/search-form/search-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeafletMapComponent,
    HomePageComponent,
    RegionPageComponent,
    HtmlViewerComponent,
    NotFoundComponent,
    SearchDialogComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [SearchDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
