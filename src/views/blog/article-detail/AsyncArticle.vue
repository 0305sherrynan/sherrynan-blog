<template>

  <div class="left-article">
    <v-md-preview-html :html="articleDetails[0].info" preview-class="github-markdown-body"
      ref="preview"></v-md-preview-html>
  </div>
  <div class="right-toc" :class="{isFix:isScollEnough}">
    <div style="border-bottom: 1px solid rgb(228, 230, 235);text-align: center;padding: 10px;"><span style="font-size: 14px;font-weight: 500;line-height: 20px;">目录</span></div>
    <div v-for="anchor in title" :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor)">
      <a style="cursor: pointer" class="sidebar-a">{{ anchor.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticleInfo, getArticleByArticleid } from '@/utils/api/article'
import { tr } from 'element-plus/es/locale';
import { getCurrentInstance, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
/**
 * data
 * articleDetails 获取文章
 * tocTitle 导航的标题
 * router 获取路由
 * re 正则表达式 用于将导航提取
 * preview dom获取
 * nowScrollPos 当前滚动的px
 * isScollEnough 是否开启fix样式
 */

const router = useRouter()
const articleDetails:Array<Article.Article_all> = await getArticleByArticleid(router.currentRoute.value.query.article_id as string).then((res) => {
  return res.data
})
let title = reactive<any>([])
let tocTitlestring = articleDetails[0].title
//去除掉toc
let re = /<p[\s\S]+<\/div><\/p>/g
articleDetails[0].info = articleDetails[0].info.replace(re,'')

let nowScrollPos = ref<number>(0)
const isScollEnough = ref<boolean>(false)
const scrollHandler = ()=>{
  window.addEventListener('scroll',()=>{
    //不要用document.body.scrollTop获取 DTD问题
    nowScrollPos.value = document.documentElement.scrollTop
    
  })
}
watch(nowScrollPos,(newval,oldval)=>{
  isScollEnough.value=true
})
/**
 * 侧边栏
 */


const preview = ref()

/**
 * 当文章挂载后（挂载后才能使用$el） 获取侧边栏
 */
onMounted(async () => {
  //挂载事件
  scrollHandler()
  const { proxy }: any = getCurrentInstance()

  const anchors: Array<any> = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  const titles: any = Array.from(anchors).filter((title: any) => !!title.innerText.trim())
  const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort()
  title = Object.assign(title, titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName),
  })))
})

/**
 * 
 *  method
 * handleAnchorClick 跳转指定位置
 */
const handleAnchorClick = (anchor: any) => {

  const { lineIndex } = anchor;

  const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    });
  }
}
</script>

<style scoped lang="less">
@media (max-width: 800px) {
  .left-article{
    max-width: 450px;
  }
  .right-toc{
    max-width: 150px;
  }
}
.left-article {
  border: 1px solid #ebeef5;
  width: 700px;

  margin-right: 50px;
  border-radius: 8px;
  padding: 20px;
}

.right-toc {
  border: 1px solid #ebeef5;
  width: 300px;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  .sidebar-a{
    color: black;
  }
}
.isFix{
  position: sticky;
  top:30px;

}
</style>