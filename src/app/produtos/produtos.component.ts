import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    
    // Config - SEO
    this.seo.generateTags({
      title: 'Produtos', 
      description: 'Descrição da página Inicial', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'home-page'
    })

  }

}
