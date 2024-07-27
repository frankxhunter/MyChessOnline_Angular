import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lateral-bar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './lateral-bar.component.html',
  styleUrl: './lateral-bar.component.css'
})
export class LateralBarComponent {

  lateral_bar_open = false;

  openlateralBar() {
    if (this.checkSizeScreen(1200)){
      this.lateral_bar_open = true;
    }
  }
  closelateralBar() {
    if (this.checkSizeScreen(1200)){
      this.lateral_bar_open = false;
    }
  }
  checkSizeScreen(width: number){
    return window.innerWidth < width;
  }

}
