import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Header } from "./header.component";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./footer.component";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [CommonModule, Header, RouterOutlet, Footer],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class Layout {}
