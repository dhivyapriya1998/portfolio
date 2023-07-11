import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent{
  pageTitle: string = "";

  constructor(private activatedRoute :ActivatedRoute){
    this.pageTitle = this.activatedRoute.snapshot.data['title'];
  }

 

}
