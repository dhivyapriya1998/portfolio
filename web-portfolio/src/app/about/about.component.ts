import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pageTitle: string = '';

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data['title'];
    
  }

}
