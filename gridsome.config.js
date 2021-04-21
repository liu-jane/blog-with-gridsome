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
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        singleTypes: ['general'],
        typeName: ''
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
    Post:[
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    Tag:[
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
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
