import { Component ,OnInit } from '@angular/core';
import { PlayerDTO } from '../models/player.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }  from '@angular/Router'
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  player1 : PlayerDTO = {
    name: ""
  }; 

  player2 : PlayerDTO = {
    name: ""
  }; 

  
  values: any;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public router: Router) {
    this.formGroup1 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],      
    });
    this.formGroup2 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],      
    });
  
  }

  ngOnInit() {
    
  }

  

  setPlayer1() {
    this.setPlayer(this.formGroup1.value, '1')    
  }

  setPlayer2() {
    this.setPlayer(this.formGroup2.value, '2')
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
    let pl1 = this.player1.name
    let pl2 = this.player2.name
    this.player1.name=''
    this.player2.name=''
    this.router.navigate(['/match',{jogador1: pl1, jogador2: pl2}])
  }

}
