import { Component, OnInit } from "@angular/core";
import { IPokemon } from "./models/IPokemon";
import { PokemonService } from "./services/pokemon.service";
import { LoadingService } from "src/app/shared/services/loading.service";
import { Subscription } from "rxjs";
import { FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.scss"]
})
export class PokemonsComponent implements OnInit {
  pokemonOffset: number = 0;
  paginaAtual: number = 1;
  listaPokemon: IPokemon[] = [];
  isLoading: boolean = false;
  isLoadingSubscription!: Subscription;
  nomePokemon: FormControl<string> = new FormControl();
  pokemonEscolhido!: IPokemon;
  teste: string = '';

  constructor(
    private pokemonService: PokemonService,
    private loadingService: LoadingService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.chamarPokemons();
    this.isLoadingSubscription = this.loadingService.isLoading.subscribe((response: boolean) => {
      this.isLoading = response;
    });
  }

  filtrar() {
    this.paginaAtual = 1;
    this.pokemonOffset = 0;
    const nomePokemon = this.nomePokemon.value;
    if (nomePokemon) {
      this.pokemonService.pegarPokemonPorNome(nomePokemon).subscribe((response: IPokemon) => {
        this.loadingService.ativarCarregamento();
        this.limparPokemons();
        this.listaPokemon.push(response);
      }, () => {
        this.toastrService.error("Não existe um pokémon com o nome: " + nomePokemon + ".", "ERRO")
      }, () => {
        this.loadingService.desativarCarregamento();
      });
    }
  }

  removerFiltro() {
    this.nomePokemon.setValue('');
    this.limparPokemons();
    this.paginaAtual = 1;
    this.pokemonOffset = 0;
    this.chamarPokemons();
  }

  chamarPokemons() {
    this.limparPokemons();
    this.loadingService.ativarCarregamento();
    this.pokemonService
      .pegarTodosPokemons(this.pokemonOffset)
      .subscribe((response: any) => {
        for (let pokemon of response.results) {
          this.pokemonService
            .pegarPokemon(pokemon.url)
            .subscribe((pokemonCompleto: IPokemon) => {
              this.listaPokemon.push(pokemonCompleto);
              this.listaPokemon.sort((a, b) => a.id - b.id);
            });
        }
      }, (error) => {
        console.log(error)
      }, () => {
        this.loadingService.desativarCarregamento();
      });
  }

  limparPokemons() {
    this.listaPokemon = [];
  }

  avancarPagina(pagina: number) {
    this.pokemonOffset = (pagina - 1) * 18;
    this.paginaAtual = pagina;
    this.limparPokemons();
    this.chamarPokemons();
  }

  escolherPokemon(pokemon: IPokemon) {
    this.pokemonEscolhido = pokemon;
  }
}
