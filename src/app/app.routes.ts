import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "game", component: BoardGameComponent},
    {path: "signup", component: SignUpComponent},
    {path: "login", component: LogInComponent},
    {path: "**", redirectTo: "", pathMatch: "full"}
];
