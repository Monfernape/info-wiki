import { Component } from "@angular/core";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-contacts",
  standalone: true,
  imports: [CardModule],
  template: `
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1em;
      }
    </style>
    <div class="container">
      <p-card
        header="Company: Super Company"
        [style]="{ width: '25rem', margin: '1em', 'margin-bottom': '2em' }"
      >
        <p>Address: Hawaii, USA</p>
      </p-card>
    </div>
  `,
})
export class ContactsPage {}
