export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624dda255e1d26005fd67b9d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4qg5xcx9',
                  apiId: '0950e563-2659-4ca8-a220-7737edc425e2'
                },
                {
                  buildHookId: '624dda26402b2a007bdfe935',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-puxgnq85',
                  apiId: '6e34fb66-9052-4436-ba2a-a74d99b56701'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meeoowvin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-puxgnq85.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
