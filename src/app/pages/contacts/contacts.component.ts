import { Component } from "@angular/core";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-contacts",
  standalone: true,
  styleUrl: "./contacts.component.css",
  imports: [CardModule],
  template: `
    <p-card
      header="Company: Super Company"
      [style]="{ width: '25rem', margin: '1em', 'margin-bottom': '2em' }"
    >
      <p>
        Address: Hawaii, USA
      </p>
    </p-card>
  `,
})
export class ContactsPage {}
