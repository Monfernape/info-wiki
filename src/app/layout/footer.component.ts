import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { DockModule } from "primeng/dock";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, DockModule],
  template: `
    <footer>
      &#169; SuperCompany 2023
    </footer>
  `,
})
export class Footer {}
