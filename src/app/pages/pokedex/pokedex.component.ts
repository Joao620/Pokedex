import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"]
})
export class PokedexComponent {
  constructor(private loadingService: LoadingService) {}

}
