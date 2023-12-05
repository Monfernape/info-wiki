import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd, RouterModule } from "@angular/router";

import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from "primeng/inputtext";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { MenuItem } from "primeng/api";
import { isWindowDefined } from "../utils";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    OverlayPanelModule,
    RouterModule,
    MenuModule,
  ],
  styleUrl: "./layout.component.css",
  template: `
    @if (!isLogin) {
    <p-menubar [model]="menuItems">
      <ng-template pTemplate="end">
        <span style="align-items: center; display: inline-flex;gap:10px">
          <span
            style="align-items: center; display: flex; cursor: pointer; padding: 0.5rem;"
          >
            <p-avatar
              image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
              styleClass="mr-2"
              size="normal"
              shape="circle"
            ></p-avatar>
            {{ username}}
          </span>
          <i class="pi pi-bell text-3xl"></i>
          <input
            type="text"
            pInputText
            placeholder="Search"
            #searchInput
            style="display: none"
            class="w-full"
          />
          <i
            class="pi pi-search text-3xl"
            #searchIcon
            (click)="showSearchInput(searchInput, searchIcon)"
          ></i>
        </span>
      </ng-template>
    </p-menubar>

    }
  `,
})
export class Header {
  isLogin: boolean = true;
  username = isWindowDefined ? window?.localStorage?.getItem?.("username") : "";
  menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      routerLink: "/dashboard",
    },
    {
      label: "Contacts",
      routerLink: "/contacts",
    },
  ];
  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = event.urlAfterRedirects === "/login";
      }
    });
  }

  showSearchInput(input: HTMLInputElement, icon: HTMLElement) {
    input.style.display = "block";
    icon.style.display = "none";
    setTimeout(() => {
      input.style.display = "none";
      icon.style.display = "block";
    }, 3000);
  }
}
