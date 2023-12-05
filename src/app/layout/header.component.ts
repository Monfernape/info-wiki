import { Component, signal } from "@angular/core";
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
          <p-menu #menu [model]="notifications" [popup]="true">
            <ng-template pTemplate="item" let-item>
              <a
                class="p-menuitem-link flex justify-content-between align-items-center p-3"
              >
                <div>
                  <span> {{ item.label }}</span>
                </div>
                <div>
                  <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{
                    item.shortcut
                  }}</span>
                </div>
              </a>
            </ng-template>
          </p-menu>
          <i (click)="menu.toggle($event)" class="pi pi-bell text-3xl"></i>
          <span
            style="align-items: center; display: flex; cursor: pointer; padding: 0.5rem;"
          >
            <p-avatar
              image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
              styleClass="mr-2"
              size="normal"
              shape="circle"
              (click)="userActionsMenu.toggle($event)"
            ></p-avatar>
            <p-menu #userActionsMenu [model]="userActions" [popup]="true">
            <ng-template pTemplate="item" let-item>
              <a
                class="p-menuitem-link flex justify-content-between align-items-center p-3"
              >
                <div>
                  <span> {{ item.label }}</span>
                </div>
                <div>
                  <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{
                    item.shortcut
                  }}</span>
                </div>
              </a>
            </ng-template>
          </p-menu>
          </span>
        </span>
      </ng-template>
    </p-menubar>

    }
  `,
})
export class Header {
  isLogin: boolean = true;
  username = signal(window?.localStorage?.getItem?.("username") ?? 'User');
  notifications = [
    {
      label: 'Notifications',
      items: [
          {
              label: 'John sent you a message',
              escape: false,
              icon: 'pi pi-refresh',
              iconClass: 'text-xl'
          },
      ]
  }
  ];
  userActions = [
    {
      label: this.username() || '',
      items: [
          {
              label: 'Log out',
              escape: false,
              icon: 'pi pi-refresh',
              iconClass: 'text-xl',
              command: () => {
                this.router.navigate(['/login']);
                this.username.set('');
                window.localStorage.clear()
              }
          },
      ]
  }
  ];
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
        this.username.set(window?.localStorage?.getItem?.("username") ?? '');
        console.log(this.username())
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
