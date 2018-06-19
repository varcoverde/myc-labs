import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    
    // Config - SEO
    this.seo.generateTags({
      title: 'Contato', 
      description: 'Descrição da página Inicial', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'home-page'
    })

  }

}
