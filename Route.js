const NextRouter = require('next/router').default;
const path = require('path');
const qs = require('qs');

module.exports = class Route {
  constructor({project, route, isCurrentProject}) {
    this.isCurrentProject = isCurrentProject;
    this.project = project;
    this.route = route;
    this.pattern = /:([A-z]+)/g
    this.current = {
      url: this.resolve(project.url + route.url),
      params: null,
      query: null,
    }
    return this
  }

  static env(url) {
    if (process.env.PIPELINE !== 'production' && /.faste.[app|com]/.test(url)) {
      return !process.env.PIPELINE || process.env.PIPELINE === 'development'
        ?  url.replace('https', 'http').replace('.faste', '-development.faste')
        :  url.replace('.faste', '-' + process.env.PIPELINE + '.faste');
    }
    return url;
  }

  resolve(url) {
    const urlResolved = Route.env(url)
    return this.isCurrentProject
    ? urlResolved.replace(this.project.url, '')
    : urlResolved
  }

  params(params) {

    const urlParams = this.current.url.match(this.pattern);

    if (urlParams) {
      urlParams.forEach(param => {
        this.current.url = this.current.url.replace(param, params[param.substring(1)])
      })
    }

    return this
  }

  query(query) {
    const queryString = qs.stringify(query);

    this.current.url = queryString !== ""
      ? this.current.url + '?' + queryString
      : this.current.url

    return this
  }

  navigate(options={}) {
    NextRouter.push(
      this.current.url,
      this.current.url,
      options,
    );
  }

  replace() {
    NextRouter.replace(
      this.current.url,
      this.current.url,
    );
  }

  open() {
    window.open(this.current.url, '_blank')
  }

  url() {
    return this.current.url
  }

  prefetch() {
    return this
  }
}
