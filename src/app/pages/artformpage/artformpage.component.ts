import { Component } from '@angular/core';
import { data } from 'src/assets/data ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artformpage',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent {

  artform = data
ngOninit():void
{
  this.artform = data

}

constructor(private router:Router) {}
    
    gotohere(id:any)
    {
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
  

    }

  }
