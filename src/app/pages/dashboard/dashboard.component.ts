import { Component, ViewEncapsulation, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BehaviorSubject, switchMap } from "rxjs";

import { CatService } from "../../services/cat.service";
import { SunInfoService } from "../../services/sun-info.service";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";

const isWindowDefined = typeof window !== "undefined";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputNumberModule,
    CalendarModule,
  ],
  providers: [CatService, SunInfoService],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPage {
  fetchCount = 0;
  catFact = inject(CatService).getCatFact(this.fetchCount);
  sunInfoService = inject(SunInfoService);
  latitude: number = isWindowDefined
    ? Number(window?.localStorage?.getItem?.("latitude")) ?? 0
    : 0;
  longitude: number = isWindowDefined
    ? Number(window?.localStorage?.getItem?.("longitude")) ?? 0
    : 0;
  date: string = isWindowDefined
    ? window?.localStorage?.getItem?.("longitude") ?? new Date().toDateString()
    : "";
  sunQuery = new BehaviorSubject({
    lat: this.latitude,
    lng: this.longitude,
    date: this.date,
  });
  sunQuery$ = this.sunQuery.asObservable();
  sunData$ = this.sunQuery$.pipe(
    switchMap((value) => {
      return this.sunInfoService.getSunInfo(value.lat, value.lng, value.date)
        .result$;
    })
  );

  onGetSunInfo() {
    window.localStorage.setItem("latitude", JSON.stringify(this.latitude));
    window.localStorage.setItem("longitude", JSON.stringify(this.longitude));
    window.localStorage.setItem("date", JSON.stringify(this.date));
    this.sunQuery.next({
      lat: this.latitude,
      lng: this.longitude,
      date: this.date,
    });
  }

  refetchCatFact() {
    console.log("refetching cat fact");
    this.fetchCount = this.fetchCount + 1;
    this.catFact.updateOptions({ queryKey: ["fact", this.fetchCount], queryFn: () => {}})
  }
}
