import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RouterModule, Router } from "@angular/router";
import { CardModule } from "primeng/card";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    CardModule,
    FormsModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginPage {
  username: string = "";
  constructor(public router: Router) {}

  onLogin() {
    window.localStorage.setItem("username", this.username);
    this.router.navigate(["dashboard"]);
  }
}
