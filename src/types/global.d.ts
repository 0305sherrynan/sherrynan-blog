declare namespace Daily{
    interface Daily_all {
        description:string,
        submittime:string,
        user_id:string
    }
    type Daily_Exclude_id = Pick<Daily_all,'description' | 'submittime'> 
}


declare namespace Article{
    interface Article_all {
        article_id:string
        title: string
        description: string
        time: string
        cover:string
        info: string
        sort: string
        user_id:string
    }
    type article_Exclude_userid = Pick<Article_all,'description' | 'time' | 'info'| 'sort'| 'cover'| 'title' | 'article_id'> 
    interface article_sort  {
        sortName: string
        sortCount:number
    }
}
declare function  returnArticle_all():articleApi.getRequestResponse<Article.Article_all>