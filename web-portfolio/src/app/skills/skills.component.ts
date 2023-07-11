import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  pageTitle: string = "";

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data['title'];
  }

  skills: any = [
    {
      name: 'Styling',
      score: '85',
      color: "orange"
    },
    {
      name: 'Javascript',
      score: '85',
      color: "#ff4484"
    },
    {
      name: 'Angular',
      score: '90',
      color: "violet"
    },
    {
      name: 'React',
      score: '75',
      color: "green"
    },
    {
      name: 'NodeJs',
      score: '65',
      color: "#edd10b"
    },
    {
      name: 'Django',
      score: '50',
      color: "#16d5e8"
    }
  ]

}
