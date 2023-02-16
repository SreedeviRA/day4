import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
{
  path:'',component:HomepageComponent
},
{
  path:'Contact',component:ContactComponent
},
{
  path:'signin',component:SigninpageComponent
},
{
path:'signup',component:SignuppageComponent
},
{
path:'single',component:SinglepageComponent
},
{
  path:'Artform',component:ArtformpageComponent
}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
