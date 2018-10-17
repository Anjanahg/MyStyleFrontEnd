import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { StatcontainerComponent } from './components/statcontainer/statcontainer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { TopRatedFreelancersComponent } from './components/top-rated-freelancers/top-rated-freelancers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BarRatingModule } from "ngx-bar-rating";



const appRoutes:Routes = [
  {path:'',component:HomeComponent},
   {path:'search',component:SearchComponent},
   {path:'profile/:id',component:ProfileComponent},

     ]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    FooterComponent,
    
    StatcontainerComponent,
    
    HeaderComponent,
    
    SearchComponent,
    
    HomeComponent,
    
    SearchResultComponent,
    
    TopRatedFreelancersComponent,
    
    ProfileComponent,

   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  HttpClientModule,
  FormsModule,
  BarRatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
