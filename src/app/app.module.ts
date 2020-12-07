import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorldCupComponent } from './world-cup/world-cup.component';
import { ScoreComponent } from './score/score.component';
import { NewsComponent } from './news/news.component';
import { InfoComponent } from './info/info.component';
import { VideosComponent } from './videos/videos.component';
import { BlogComponent } from './blog/blog.component';
import { MatchesComponent } from './matches/matches.component';
import { TableauUtilisateursComponent } from './tableau-utilisateurs/tableau-utilisateurs.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { MatchesAdminComponent } from './matches-admin/matches-admin.component';
import { PlayersAdminComponent } from './players-admin/players-admin.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './add-match/add-match.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { DisplayMatchComponent } from './display-match/display-match.component';
import { SearchComponent } from './search/search.component';
import { StadiumComponent } from './stadium/stadium.component';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    WorldCupComponent,
    ScoreComponent,
    NewsComponent,
    InfoComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    TableauUtilisateursComponent,
    PlayersComponent,
    PlayerComponent,
    UsersAdminComponent,
    MatchesAdminComponent,
    PlayersAdminComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
