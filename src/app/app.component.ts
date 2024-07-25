import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LateralBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
