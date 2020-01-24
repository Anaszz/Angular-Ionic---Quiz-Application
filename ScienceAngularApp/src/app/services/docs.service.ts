import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor() { }

  docsContent = [
    {
     id:0,
     background: 'drstone2.png',
     subtitle: "L'age de pierre",
     title: 'LA PREHISTOIRE',
     content: 'dzaoidzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajfzajfpfzapifzapijfzapapfzpaifzpifzappihfzapifzpih zadojdzizaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaapjazdjiaidjijzadijzadpijzdaijpdziajpidzaipjzdaijpdzaipjdazpijipjzdaipjzdpijazdiijdzadddddddddddddddddddddddddddddddddddddddddddddddddddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
    },
    {
     id:1,
     background: 'spice3.jpg',
     subtitle: "L'age d'or de la chevalerie",
     title: 'LE MOYEN AGE',
     content: 'zadddddddddddddddddd'
    }
  ]

  
  objectContent = [
    {
     id:0,
     name: 'Baton',
     description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
     img: 'baton.png',
    },
    {
      id:1,
      name: 'Pierre',
      description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
      img: 'pierre.png',
    },
    {
      id:2,
      name: 'Corde',
      description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
      img: 'corde.png'
    }
  ]





//fonction alternative pour docs-details.page.ts qui permet de faire correspondre un id à celui de docsContent et d'afficher en conséquence le contenu de cet id 
  getDocsContentById(id: Number){
    const docsContent = this.docsContent.find( //le find va chercher l'Objet dans cet array où l'ID est = à l'ID passé comme argument et va retourner ce docsContent
      (docsContentObject) => {
        return docsContentObject.id === id;
      }
    );
    return docsContent;
  }
}
