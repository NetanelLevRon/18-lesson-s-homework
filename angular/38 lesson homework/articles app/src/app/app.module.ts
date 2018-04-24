import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ArticleService } from '../shared/services/articleService.model';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticleInfoComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
