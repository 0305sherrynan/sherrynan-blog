import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './design/index.less'
import router from './router'
import  './router/guard'
import './store/index'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// main.js
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';





import Prism from 'prismjs';
// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
  config: {
    toc: {
      includeLevel: [2,3],
    },
  },
});

createApp(App)
.use(ElementPlus)
.use(Antd)
.use(router)
.use(VueMarkdownEditor)
.use(VMdPreviewHtml)
.mount('#app')
