import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juliuspage1',
  templateUrl: './juliuspage1.page.html',
  styleUrls: ['./juliuspage1.page.scss'],
})
export class Juliuspage1Page implements OnInit {

  constructor(
    private route: Router
    ) { }

    
  ngOnInit() {
  }

  goToPage2(){
    this.route.navigate(['page2'])
  }

}
