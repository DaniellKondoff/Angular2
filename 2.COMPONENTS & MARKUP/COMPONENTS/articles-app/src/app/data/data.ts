import { data } from './seed'
import { Article } from '../model/article';

export class ArticleData {
    getData () : Article[] {
        let articles :Article[] = []
        
        for (let i=0; i < data.length; i++){
            articles[i] = new Article(
                data[i].title,
                data[i].description,
                data[i].author,
                data[i].imageUrl
            );
        }
        return articles;
    }
}