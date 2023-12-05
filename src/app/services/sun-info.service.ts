import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { injectQuery } from "@ngneat/query";

@Injectable()
export class SunInfoService {
  #http = inject(HttpClient);
  #query = injectQuery();

  getSunInfo(lat: number, lng: number, date: string) {
    return this.#query({
      queryKey: [lat, lng, date],
      queryFn: () => {
        return this.#http.get<any>(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
        );
      },
    });
  }
}
