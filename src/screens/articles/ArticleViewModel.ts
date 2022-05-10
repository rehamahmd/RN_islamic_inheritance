export class ArticleViewModel {
    id;
    title;
    imagePath;
    isSaved;
    

    constructor({id, title, imagePath, isSaved}:{id:string, title:string, imagePath:string, isSaved:boolean}) {
      this.id = id;
      this.title = title;
      this.imagePath = imagePath;
      this.isSaved = isSaved;
    }
  }