import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardGameComponent } from './board-game/board-game.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "game", component: BoardGameComponent},
    {path: "**", redirectTo: "home", pathMatch: "full"}
];
