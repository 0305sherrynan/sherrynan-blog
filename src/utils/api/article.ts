import { requestInstance } from "@/libs/axios";
import {articleApi} from '#/api'
/**
 * getArticleInfo 获取对应用户id的article列表
 * submitOneArticleInfo 提交单个article到数据库
 * getArticleSortAndNumber 获取sort分类和对应数量
 */
export const  getArticleInfo = ()=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.Article_all>>("zwz/api/article",{params:{user_id:'26421983'}})
}

export const submitOneArticleInfo = (data:Article.article_Exclude_userid)=>{
    return requestInstance.post<any,articleApi.postRequestResponse<{message:string}>>("zwz/api/article",Object.assign(data,{user_id:'26421983'}))
}

export const getArticleSortAndNumber = ()=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.article_sort>>("zwz/api/article/sort",{params:{user_id:'26421983'}})
}
export const getArticleByArticleid = (article_id:string)=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.Article_all>>(`zwz/api/article/${article_id}`)
}