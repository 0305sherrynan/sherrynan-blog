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

declare namespace User{
    interface verify_login_user{
        email:string
        password:string
    }

    interface verify_register_user{
        email:string
        nickname:string
        password:string
        user_id:string
    }
    interface get_personal_info{
        nickname:string
        email:string
        password:string
        coverimg:string | null
    }
    interface get_personal_info_detail{
        nickname:string
        email:string
        coverimg:string | null
        gender:string
        signature:string
    }
}

declare namespace Comment {
    interface submitComment{
        id:string
        info:string
        time:string
    }
    interface getParentComent {
        id:string
        info:string
        time:string
        nickname:string
        coverimg:string
    }
}
declare namespace Detail {
    interface getDetailInfo {
        signature:string
        gender:string
    }
    interface modifyInfo {
        signature:string
        gender:string
    }
}