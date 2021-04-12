import { Component, OnInit } from '@angular/core';
import { PlayerDTO } from '../models/player.dto';
import { Router, ActivatedRoute }  from '@angular/router'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  player1 : PlayerDTO = {
    name: "",
    score: 0
  }; 

  player2 : PlayerDTO = {
    name: "",
    score: 0
  }; 

  final = false;

  vencedor: PlayerDTO = {
    name: ""
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController) { 

    this.player1.name = this.route.snapshot.paramMap.get('jogador1');
    this.player2.name = this.route.snapshot.paramMap.get('jogador2');
  }

  ngOnInit() {
    
  }

  increaseJ1(){
    let aux = this.player1.score
    aux += 1
    if(aux == 10 && this.player2.score < 10){
      if(this.player2.score == 0){
        this.finalMatch(this.player1);
      }
      else{
        this.player1.score = aux
        this.virarCampo()
        return null
      }

    }
    if(aux >= 20 && (Math.abs(aux - this.player2.score) > 1)){
      this.player1.score = aux
      this.finalMatch(this.player1)
    }
    else{
      this.player1.score = aux
    }    
  }
  increaseJ2(){
    let aux = this.player2.score
    aux += 1
    if(aux == 10 && this.player1.score < 10){
      if(this.player1.score == 0){
        this.finalMatch(this.player2);
      }
      else{
        this.player2.score = aux
        this.virarCampo()
        return null
      }
    }
    if(aux >= 20 && (Math.abs(aux - this.player1.score) > 1)){
      this.player2.score = aux
      this.finalMatch(this.player2)
    }
    
    else{
      this.player2.score = aux
    }    
  }

  decreaseJ1(){
    let aux = this.player1.score
    aux -= 1
    if(aux < 0){}
    else{
      this.player1.score = aux
    }
  }

  decreaseJ2(){
    let aux = this.player2.score
    aux -= 1
    if(aux < 0){}
    else{
      this.player2.score = aux
    }
  }

  virarCampo(){
    
    this.virarCampoAlert()
    let aux: PlayerDTO = {
      name: this.player1.name,
      score: this.player1.score
    }

    this.player1.name = this.player2.name
    this.player1.score = this.player2.score
    this.player2.name = aux.name
    this.player2.score = aux.score
  }

  finalMatch(obj: PlayerDTO){
    this.final = true
    this.vencedor.name = obj.name
  }

  async virarCampoAlert() {
    const alert = await this.alertController.create({
      header: 'Campo virado!',
      message: 'Avise aos jogadores.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

  home(){
    
    this.router.navigate(['/home',{command: true}])
  }

  

}
