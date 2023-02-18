import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artformpage',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent {
  constructor (private router:Router, private hero: HeroService) {}
  artform= this.hero.giveData(); 

    gotohere(id:any)
    {
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
  

    }

  }
