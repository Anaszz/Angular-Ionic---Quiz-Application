import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-item',
  templateUrl: './docs-item.component.html',
  styleUrls: ['./docs-item.component.scss'],
})
export class DocsItemComponent implements OnInit {

  @Input() background: string
  @Input() subtitle: string
  @Input() title: string
  @Input() content: string
  @Input() id: number

  constructor() { }

  ngOnInit() {}

}
