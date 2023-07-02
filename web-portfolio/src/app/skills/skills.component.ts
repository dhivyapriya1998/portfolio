import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any = [
    {
      name: 'Styling',
      score: '85',
      color:"orange"
    },
    {
      name: 'Javascript',
      score: '85',
      color:"orange"
    },
    {
      name: 'Angular',
      score: '90',
      color:"violet"
    },
    {
      name: 'React',
      score: '75',
      color:"green"
    },
    {
      name: 'NodeJs',
      score: '65',
      color:"white"
    },
    {
      name: 'Django',
      score: '50',
      color:"lightgreen"
    }
  ]

}
