import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './add-match/add-match.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayMatchComponent } from './display-match/display-match.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { TableauUtilisateursComponent } from './tableau-utilisateurs/tableau-utilisateurs.component';

const routes: Routes = [
  //localhost:4200 : URL de base
  { path: '', component: HomeComponent },
  //localhost:4200/contact : afficher contact
  { path: 'contact', component: ContactComponent },
   //localhost:4200/contact : afficher contact
  {path: 'service', component: ServiceComponent },
  { path: 'matches', component: MatchesComponent },
{path:'addMatch',component: AddMatchComponent},
{path:'addPlayer',component: AddPlayerComponent},
{path:'editMatch/:id',component: EditMatchComponent},
{path:'displayMatch/:id',component: DisplayMatchComponent},

{path:'addStadium',component: AddStadiumComponent},

  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'admin',component: TableauUtilisateursComponent},
  {path:'players',component: PlayersComponent},
  {path:'**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
