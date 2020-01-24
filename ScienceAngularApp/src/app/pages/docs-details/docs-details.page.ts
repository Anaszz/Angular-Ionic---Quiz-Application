import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-docs-details',
  templateUrl: './docs-details.page.html',
  styleUrls: ['./docs-details.page.scss'],
})
export class DocsDetailsPage implements OnInit {

  docsId = null;
  background: string
  title: string
  subtitle: string
  content: string

  constructor(private activatedRoute: ActivatedRoute, private docsService: DocsService) { }

  ngOnInit() {

    this.docsId = this.activatedRoute.snapshot.paramMap.get('id');

    this.title = this.docsService.docsContent[this.docsId].title
    this.subtitle = this.docsService.docsContent[this.docsId].subtitle
    this.content = this.docsService.docsContent[this.docsId].content
    this.background = this.docsService.docsContent[this.docsId].background


 /**  AUTRE FACON DE FAIRE AVEC UNE FONCTION DANS LES SERVICES 
    const docsId = this.activatedRoute.snapshot.paramMap.get('id'); 

    this.title = this.docsService.docsContent[].title
    this.title = this.docsService.getDocsContentById(+docsId).title
    this.subtitle = this.docsService.getDocsContentById(+docsId).subtitle
    this.content = this.docsService.getDocsContentById(+docsId).content **/
  }

  
}
