import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-prehistoire',
  templateUrl: './game-prehistoire.page.html',
  styleUrls: ['./game-prehistoire.page.scss'],
})
export class GamePrehistoirePage implements OnInit {


  counter= 9
  score: number = 0;
  id = 0
  questions: any
  life = 3
  //bool qui active les anim CSS des buttons
  isActive = [false,false,false]
  isActive2 = false
  response: any

  solutionTitle: string
  solutionText: string
  solutionDiv: boolean
  

  CheckButton = true
  disabledButton: boolean

  constructor(private router: Router, private gameServiceService: GameServiceService) {}




  ngOnInit() {
    this.questions = this.gameServiceService.questionsChapter1
    //this.randomizeQuestions()
    this.randomizeAnswers()
    this.disabledButton = true
  }


  check(){
      //-1 pdv 
      //message d'erreur
      if(this.id < this.questions.length - 1){
        if(this.response.correct){
          this.score = this.score + 20;
          this.trueResponse()
          console.log('tu as gagné' + this.life)
      }
       else{
         this.life--
         this.falseResponse()
         console.log('tu as perdu' + this.life)
       }
      }
    
     this.isActive2 = !this.isActive2
     this.CheckButton = false
  }

  
  validated(){

    if(this.id >= this.questions.length - 1){
      this.life = 3
      this.id = 0
      this.score = 0 
      this.counter = 9
      this.disabledButton = true
      this.router.navigateByUrl('/results')
    }
    else{
      this.id++
      this.randomizeAnswers()  
      this.isActive = [false,false,false]
      this.CheckButton = true
      this.disabledButton = !this.disabledButton
    }
    this.win()
    this.dead()
}

randomizeAnswers()
   {
    for (let i = this.questions[this.id].answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.questions[this.id].answers[i];
        this.questions[this.id].answers[i] = this.questions[this.id].answers[j];
        this.questions[this.id].answers[j] = temp;
    }

}


activeButton(index: number){
//active le CSS du bouton
  this.isActive = [false,false,false]
  this.isActive[index] = !this.isActive[index]

  //récup la valeur
   this.response = this.questions[this.id].answers[index]
  console.log(this.response.correct)
    this.disabledButton = false
  
}

falseResponse(){
  this.solutionDiv = false
  this.solutionTitle = "Correct solution:"
  for(let i = this.questions[this.id].answers.length - 1; i >= 0; i--){
    if(this.questions[this.id].answers[i].correct)
        this.solutionText = this.questions[this.id].answers[i].answer
        console.log(this.solutionText)
  }
}

trueResponse(){
  this.solutionDiv = true
  this.solutionTitle = "You are correct"
  this.solutionText = ""
}

progress(){
  let progress = this.score + '%'
  return progress
}

dead(){
 if(this.life === 0)
 this.router.navigateByUrl('/results')
}

win(){
  if(this.score === 100)
  this.router.navigateByUrl('/results')
 }

}
