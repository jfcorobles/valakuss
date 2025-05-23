import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/components/header/header.component";
import { MainComponent } from "./shared/components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'valakuss';
}
