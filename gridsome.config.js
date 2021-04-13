// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
      }
    }
  ],
  templates: {
    Blog:[
      {
        path: '/blog/:id',
        component: './src/templates/Blog.vue'
      } 
    ],
    StrapiPost:[
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    Test: [
      {
        path: '/test/:id',
        component: './src/templates/Test.vue'
      }
    ]
  }
}
