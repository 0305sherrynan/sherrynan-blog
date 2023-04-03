import { requestInstance } from "@/libs/axios";
import {articleApi} from '#/api'
/**
 * getArticleInfo 获取对应用户id的article列表
 * getArticleInfoBySort 获取对应用户在特定标签分类下的文章
 * submitOneArticleInfo 提交单个article到数据库
 * getArticleSortAndNumber 获取sort分类和对应数量
 * getArticleByArticleid 获取article_id的文章
 */
export const  getArticleInfo = ()=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.Article_all>>("zwz/api/article")
}
export const getArticleInfoBySort = (sortName:string)=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.Article_all>>(`zwz/api/article/sort/${sortName}`)
}
export const submitOneArticleInfo = (data:Article.article_Exclude_userid)=>{
    return requestInstance.post<any,articleApi.postRequestResponse<{message:string}>>("zwz/api/article",data)
}
export const getArticleSortAndNumber = ()=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.article_sort>>("zwz/api/article/sort")
}
export const getArticleByArticleid = (article_id:string)=>{
    return requestInstance.get<any,articleApi.getRequestResponse<Article.Article_all>>(`zwz/api/article/${article_id}`)
}
