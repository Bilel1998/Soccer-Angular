import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let players = [
      { id: 1, nom: "Ronaldo",equipe:'JUVE', description: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM (European Portuguese:  born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.", dateNaissance: '5/2/1985', image: "assets/images/Ronaldo.jpg" },
      { id: 2, nom: "Messi",equipe:'FCB', description: "Lionel Andrés Messi[note 1] (Spanish pronunciation:  (About this soundlisten);[A] born 24 June 1987) is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team.", dateNaissance: '24/6/1987', image: "assets/images/Messi.jpg" },
      { id: 3, nom: "Neymar",equipe:'PSG', description: "Neymar da Silva Santos Júnior (Brazilian Portuguese):known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. He is widely considered as one of the best players in the world", dateNaissance: '5/2/1992', image: "assets/images/Neymar.jpg" },
      { id: 4, nom: "Lewandowski",equipe:'FCB', description: "Robert Lewandowski (Polish pronunciation: born 21 August 1988) is a Polish professional footballer who plays as a striker for Bundesliga club Bayern Munich and is the captain of the Poland national team.", dateNaissance: '21/8/1988', image: "assets/images/Lewandowski.jpg" },
      { id: 5, nom: "Mbappe",equipe:'PSG', description: "Kylian Mbappé Lottin (French pronunciation:  born 20 December 1998) is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team.", dateNaissance: '20/12/1998', image: "assets/images/Mbappe.jpg" },
      { id: 6, nom: "Haland",equipe:'DORTMUND', description: "Erling Braut Haaland (né Håland, born 21 July 2000) is a Norwegian professional footballer who plays as a striker for German Bundesliga club Borussia Dortmund and the Norway national team. ", dateNaissance: '21/7/2000', image: "assets/images/Haland.jpg" },
      { id: 7, nom: "Sane",equipe:'FCB', description: "Leroy Aziz Sané () born 11 January 1996) is a German professional footballer who plays as a winger for Bundesliga club Bayern Munich and the German national team.", dateNaissance: '11/1/1996', image: "assets/images/Sane.jpg" },
      { id: 8, nom: "Sterling",equipe:'MAN CITY', description: "Raheem Shaquille Sterling (born 8 December 1994) is a professional footballer who plays as a winger and attacking midfielder for Premier League club Manchester City and the England national team.", dateNaissance: '8/12/1994', image: "assets/images/Sterling.jpg" }
    ];
    let matches = [
      { id: 1, teamOne: "RM", teamTwo: "FCB", scoreOne: 3, scoreTwo: 1 },
      { id: 2, teamOne: "RM", teamTwo: "FCB", scoreOne: 5, scoreTwo: 1 },
      { id: 3, teamOne: "RM", teamTwo: "FCB", scoreOne: 11, scoreTwo: 1 }];

    return { players, matches };

  }
}