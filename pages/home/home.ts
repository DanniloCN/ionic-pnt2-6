import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.scss"]
})
export class HomePage {
  personagem = "";
  imagem = "";
  textColor = "primary";
  constructor(public navCtrl: NavController) {}
  clickBob() {
    this.personagem = "Parabéns! É o Bob Esponja :D";
    this.imagem = "https://bit.ly/bob-esponja-image";
    this.textColor = "primary";
  }
  clickPatrick() {
    this.personagem = "Você errou! Não é o Patrick :(";
    this.imagem = "https://bit.ly/patrick-image";
    this.textColor = "danger";
  }
  clickReplay() {
    this.personagem = "Resetando...";
    document.location.reload(true);
    this.textColor = "black";
  }
}
