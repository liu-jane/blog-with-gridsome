<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{ backgroundImage: `url(${GRIDSOME_API_URL}${$page.post.cover.url})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <span class="meta">Posted by
                <a href="#">佚名</a>
                on {{$page.post.created_at | date('MMM DD, YYYY') }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
  query($id: ID!){
    post(id: $id){
      id,
      title,
      content,
      created_at,
      cover{
        url
      },
      tags{
        id,
        title
      }
    }
  }
</page-query>
<script>
import MarkdownIt from 'markdown-it'
export default {
 name: 'PostPage',
 methods:{
  //  将md文件转换成html字符串
   mdToHtml(text){
     const md = new MarkdownIt()
     return md.render(text)
   }
 }
}
</script>

<style>

</style>