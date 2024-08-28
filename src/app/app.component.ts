import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, NavBarComponent, HomePageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'fake-store';
}
