import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { CapitalizeFirstLetterPipe } from "./pipes/capitalize-first-letter.pipe";
import { CarregamentoComponent } from './components/carregamento/carregamento.component';
import { CustomNumberPipe } from './pipes/custom-number.pipe';

@NgModule({
  declarations: [HeaderComponent, CapitalizeFirstLetterPipe, CarregamentoComponent, CustomNumberPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, CapitalizeFirstLetterPipe, CarregamentoComponent, CustomNumberPipe]
})
export class SharedModule {}
