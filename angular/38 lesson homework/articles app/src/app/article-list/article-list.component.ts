import { Component, OnInit, DoCheck } from '@angular/core';
import { Article } from '../../shared/models/article.model';
import { ArticleService } from '../../shared/services/articleService.model';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements DoCheck {

  singleArticle:Article;
  
  
  constructor(private mySrevice:ArticleService) {
   }


  ngDoCheck() {
    for(let i=0;i< this.mySrevice.article.length;i++){
      if(this.mySrevice.article[i].article_type.charAt(0)=="0"){
        let temp=this.mySrevice.article[i].article_type;
        temp=temp.substring(1);
        this.mySrevice.article[i].article_type=temp;
        this.singleArticle=this.mySrevice.article[i];
      }
    }
}
}