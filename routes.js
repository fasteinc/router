module.exports = {
  pro: {
    url: 'https://pro.faste.com',
    routes: {
      board: {url: '/board'},
      business: {url: '/business'},
      catalogue: {url: '/catalogue'},
      product: {url: '/product/:product'},
      messenger: {url: '/messenger'},
      collaborator: {url: '/collaborator'},
      company: {url: '/company/:id'},
      organization: {url: '/organization/:id'},
      marketing: {url: '/marketing'},
      member: {url: '/member/:id'},
      members: {url: '/members'},
      waiting: {url: '/waiting'},
      settings: {url: '/settings'},
      editor: { url : '/editor'},
      index:    { url : '/'},
      request:  { url : '/request/:publicId'},
    },
  },

  manager: {
    url: 'https://manager.faste.com',
    routes: {
      index:    { url : '/'},
      tags: { url : '/tags'},
      scenarios: { url : '/scenarios'},
      inputs:  { url : '/inputs'},
    },
  },

  share: {
    url: 'https://share.faste.app',
    routes: {
      index:  { url: '/:publicId'},
      quote:    { url: '/q/:publicId'},
      product:  { url: '/p/:publicId'},
    },
  },

  request: {
    url: 'https://request.faste.app',
    routes: {
      index:  { url: '/:publicId'},
    },
  },

  etl: {
    url: 'https://etl.faste.com',
    routes: {
      index:  { url: '/extract'},
      extract:  { url: '/extract'},
      transform:  { url: '/transform'},
      load:  { url: '/load'},
    },
  },

  legal: {
    url: 'https://legal.faste.com',
    routes: {
      preview:  { url: '/:current'},
      edit:  { url: '/:current/edit'},
      index:  { url: '/'},
    },
  },

  login: {
    url: 'https://login.faste.com',
    routes: {
      index:    {url: '/'},
      login:    {url: '/login'},
      supplier: {url: '/business/supplier'},
      provider:  {url: '/business/provider'},
      password:  {url: '/password'},
      forgot:  {url: '/forgot'},
    },
  },

  landing: {
    url: 'https://landing.faste.com',
    routes: {
      index:    {url: '/'},
      business:    {url: '/business'},
    },
  },
};
