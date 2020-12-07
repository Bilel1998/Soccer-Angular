import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl='api/players'
  constructor(private htttpClient:HttpClient) { }

  getAllPlayers()
  {
    return this.htttpClient.get(this.playerUrl)
  }
  deletePlayer(id:number)
  {
    return this.htttpClient.delete(`${this.playerUrl}/${id}`);
  }
  addPlayerService(player:any,image:File) {
    let formData = new FormData();
    formData.append('name', player.nom);
    
    formData.append('poste', player.equipe);
    formData.append('description', player.dateNaissance);
    formData.append('image', image);
    return this.htttpClient.post(`${this.playerUrl}/api/addPlayer`, formData);
  }
}
