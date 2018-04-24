import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/services/articleService.model';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {


  constructor(private mySrevice:ArticleService) { }

articleClickFunk(name:string):void{
  for (let i=0;i< this.mySrevice.article.length;i++){
    if(this.mySrevice.article[i].article_type==name){
      this.mySrevice.article[i].article_type="0"+this.mySrevice.article[i].article_type;
    }
  }
}

  ngOnInit() {
    
  }

  

}
