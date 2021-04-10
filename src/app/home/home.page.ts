import { Component } from '@angular/core';
import { PlayerDTO } from '../models/player.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  player1 : PlayerDTO = {
    name: "",
    score: 0
  }; 

  player2 : PlayerDTO = {
    name: "",
    score: 0
  }; 

  values: any;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {
    this.formGroup1 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],      
    });
    this.formGroup2 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],      
    });
  
  }


  setPlayer1() {
    this.setPlayer(this.formGroup1.value, '1')
    console.log(this.player1)
    
  }

  setPlayer2() {
    this.setPlayer(this.formGroup2.value, '2')
    console.log(this.player2)
  }

  setPlayer(obj : PlayerDTO, id : any){
    if(id == '1'){
      this.player1 = obj
    }
    else{
      this.player2 = obj
    }
  }

  start(){
    console.log(`Jogador 1: ${this.player1.name} VS Jogador 2: ${this.player2.name}` )
  }

}
