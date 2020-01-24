import { Component, OnInit } from '@angular/core';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-docs-prehistoire',
  templateUrl: './docs-prehistoire.component.html',
  styleUrls: ['./docs-prehistoire.component.scss'],
})
export class DocsPrehistoireComponent implements OnInit {

  constructor(private docsService: DocsService) { }

  object: any[]
  ngOnInit() {
    this.object = this.docsService.objectContent
  }



}
