import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250
  @Input() article: Article;
  @Input() articleDesc: string;
  showReadMoreBtn: boolean = true
  showHideBtn: boolean = false
  imageIsShown: boolean = false;
  articleDescLen: number
  imageButtonTitle: string = "Show Image"
  descToShow: string
  constructor() { 
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  ngOnInit() {
  }

  readMore() :void {
    this.articleDescLen = this.symbols;
    if(this.articleDescLen >= this.articleDesc.length){
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }else{
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc() :void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  toggleImage():void{
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }
}
