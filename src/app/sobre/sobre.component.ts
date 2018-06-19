import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CmsService, cms_routes } from '../cms.service';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private seo: SeoService, private cms: CmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    
    // Obter page parameter
    let page = this.route.snapshot.paramMap.get('page');

    // Obter conteudo da page
    let c = this.cms.get('/sobre/' + page);

    // Config - SEO
    this.seo.generateTags({
      title: page, 
      description: 'Descrição da página Inicial', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'home-page'
    })
  }
}
