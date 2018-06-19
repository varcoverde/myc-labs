import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { CmsService, cms_routes } from '../cms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService, private cms: CmsService) { }

  ngOnInit() {
    var content = this.cms.get(cms_routes.home);

    // Config - SEO
    this.seo.generateTags({
      title: content.title, 
      description: content.description 
      //image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      //slug: 'home-page'
    })
  }

}
