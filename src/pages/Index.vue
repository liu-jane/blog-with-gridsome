<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <template v-for="post in $page.posts.edges">
            <div class="post-preview" :key="post.node.id">
              <g-link :to="'/post/' + post.node.id">
                <h2 class="post-title">{{post.node.title}}</h2>
                <h3 class="post-subtitle" v-html="post.node.content"> </h3>
              </g-link>
              <p class="post-meta">Posted by <a href="#">Start Bootstrap</a>  on {{post.node.created_at | date('MMM DD, YYYY') }}</p>
              <p>
                <span v-for="tag in post.node.tags" :key="tag.id">
                  <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>&nbsp;&nbsp;
                </span>
              </p>
            </div>
            <hr>
          </template>
          <Pager :info="$page.posts.pageInfo"/>
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>
   
  </Layout>
</template>
<page-query>
    query ($page: Int){
      posts: allStrapiPost (perPage: 5, page: $page) @paginate{
        pageInfo {
          totalPages
          currentPage
        },
        edges{
          node{
            id,
            title,
            content,
            created_at,
            tags{
              id,
              title
            }
          }
        }
      }
    }
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
