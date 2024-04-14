export interface IArticle{
    title: string;
    content:IArticleContent[];
}

export interface IArticleContent{
    subTitle?: string;
    subContent?: string;
    subContentList?: string[];
}