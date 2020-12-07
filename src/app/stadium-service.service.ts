import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumServiceService {
  stadiumUrl='http://localhost:3000'
  constructor(private htttpClient:HttpClient) { }
  addStadiumService(stadium:any){
    console.log("Service",stadium);
    return this.htttpClient.post(`${this.stadiumUrl}/addStadium`,stadium);
  }
  getAllStadiums()
  {
    return this.htttpClient.get<{stadiums:any}>(`${this.stadiumUrl}/allStadiums`)
    

  }
  deleteStadium(id:string){
    return this.htttpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }
}
