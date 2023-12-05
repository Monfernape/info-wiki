import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DockModule } from "primeng/dock";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, DockModule],
  template: `
  <style>
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
      background-color: #f0f0f0;
      border-top: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
    <footer>
      &#169; SuperCompany 2023
    </footer>
  `,
})
export class Footer {}
