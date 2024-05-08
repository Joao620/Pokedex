import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokedexComponent } from "./pokedex.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { SharedModule } from "src/app/shared/shared.module";
import { PokemonService } from "./pokemons/services/pokemon.service";
import { ZeroPrefixPipe } from "./pokemons/pipe/zero-prefix.pipe";
import { LoadingService } from "src/app/shared/services/loading.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PokedexComponent, PokemonsComponent, ZeroPrefixPipe],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [PokemonService, LoadingService]
})
export class PokedexModule {}
