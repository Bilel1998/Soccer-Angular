import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() x:any;

  constructor() { }

  ngOnInit(): void {
  }
  resultColor(a:number,b:number)
  {
    if (a>b)
    {
      return "green";
    }
    if(a<b)
    {
      return "red"
    }
    else return "Blue";
  }
  result(a:number,b:number)
  {
    let T:any;
    if (a>b)
    {
      T.push("green");
      T.push("win");
    }
    else if(a<b)
    {
      T.push("red");
      T.push("lose");
    }
    else {
      T.push("Blue");
      T.push("Draw");
    }
    return T;
  }

}
