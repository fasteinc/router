const Route = require('./Route');

module.exports = class RouterClient {
  constructor(project, projects) {
    Object.keys(projects).map(projectName => {
      const isCurrentProject = project.url === projects[projectName].url
      this[projectName] = new Route({
        route: projects[projectName].routes['index'],
        project: projects[projectName],
        isCurrentProject,
      });
      Object.keys(projects[projectName].routes).map(routeName => {
        this[projectName][routeName] = new Route({
          route: projects[projectName].routes[routeName],
          project: projects[projectName],
          isCurrentProject,
        });
      });
    })
    return this
  }
}
