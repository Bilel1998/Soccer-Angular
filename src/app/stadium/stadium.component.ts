import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StadiumServiceService } from '../stadium-service.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
@Input() s:any;
@Output() newStadiums: EventEmitter<any> =   new EventEmitter();

  constructor(private stadiumService:StadiumServiceService) { }

  ngOnInit() {
  }

  deleteStadium(id:any){
    this.stadiumService.deleteStadium(id).subscribe(
      () => {
        console.log('Stadium deleted');
        this.stadiumService.getAllStadiums().subscribe(
          data => {
            this.newStadiums.emit(data.stadiums);
          }
        )
      }
    )
    // this.newStadiums.emit();
  }

}
