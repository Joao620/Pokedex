import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPokemon } from "../models/IPokemon";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private baseUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) {}

  pegarTodosPokemons(pokemonOffset: number): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(
      this.baseUrl + "pokemon?limit=18&offset=" + pokemonOffset
    );
  }

  pegarPokemon(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  pegarPokemonPorNome(nome: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(
      this.baseUrl + `pokemon/${nome.toLowerCase()}`
    );
  }
}
