import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { injectQuery } from "@ngneat/query";

@Injectable()
export class CatService {
  #http = inject(HttpClient);
  #query = injectQuery();

  getCatFact(fetchCount = 0) {
    return this.#query({
      queryKey: ["fact", fetchCount] as const,
      queryFn: () => {
        return this.#http.get<CatFact>("https://catfact.ninja/fact");
      },
    });
  }
}

export interface CatFact {
  fact: string;
  length: number;
}
