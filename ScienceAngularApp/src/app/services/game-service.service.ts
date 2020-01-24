import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }


  questionsChapter1 = [
		{
      "questionText": "Quelle est la période la plus ancienne de l'ère de la Préhistoire ? ",
			"answers": [
				{"answer": "Paléolithique", "correct": true, "selected": false},
				{"answer": "Mésolithique", "correct": false, "selected": false},
				{"answer": "Néolithique", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Quel est le mode de nutrition adopté par les hommes Paléolithiques ?",
			"answers": [
				{"answer": "Chasse-cuillète", "correct": true, "selected": false},
				{"answer": "Agriculture", "correct": false, "selected": false},
				{"answer": "Elevage", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Les hommes paléolithiques pêchaient",
			"answers": [
				{"answer": "Vrai", "correct": true, "selected": false},
				{"answer": "Faux", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Quand a été découvert le feu ?",
      "selected": false,
			"answers": [
				{"answer": "-2.5 millions A.C.", "correct": true, "selected": false},
				{"answer": "-300 000 AV.", "correct": false, "selected": false},
				{"answer": "-5 millions A.C.", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Les hommes paléolithiques étaient sensibles à l'art ",
      "selected": false,
			"answers": [
				{"answer": "Vrai", "correct": true, "selected": false},
				{"answer": "Faux", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "LALALALA LA LA AAAALALALALALALALA LA LALALALA LA LAAAAAAAAA",
      "selected": false,
			"answers": [
				{"answer": "Conan", "correct": true, "selected": false},
				{"answer": "Shrek", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		}

  ]
  
  questionsChapter2 = [
		{
      "questionText": "C'est quoi l'hélico",
      "selected": false,
			"answers": [
				{"answer": "Helicopter", "correct": true, "selected": false},
				{"answer": "Plane", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Quel est le plus gros gars sur",
      "selected": false,
			"answers": [
				{"answer": "Fouad", "correct": false, "selected": false},
				{"answer": "Conan", "correct": false, "selected": false},
				{"answer": "Safare", "correct": true, "selected": false}
			]
		},
		{
      "questionText": "LALALALA LA LA AAAALALALALALALALA LA LALALALA LA LAAAAAAAAA",
      "selected": false,
			"answers": [
				{"answer": "Conan", "correct": true, "selected": false},
				{"answer": "Shrek", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		}

	]
}
