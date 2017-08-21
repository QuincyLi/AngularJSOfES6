import angular from 'angular';

class routeHelper {
    constructor($location, $rootScope, $urlRouter, routeHelperConfig) {
        this.$urlRouterProvider = routeHelperConfig.config.$urlRouterProvider;
        this.$stateProvider = routeHelperConfig.config.$stateProvider;
        this.$location = $location;
        this.$urlRouter = $urlRouter;
        this.routeHelperConfig = routeHelperConfig;
    }

    configureRoutes(routes) {
        angular.forEach(routes, (routes) => {
            this.$stateProvider.state(routes.state, routes.config);
        });

        this.$urlRouterProvider
            .when('', '/login')
            .when('/', '/login');

        // handle 404s here
        this.$urlRouterProvider.otherwise('404');
    }
}

const factory = ($location, $rootScope, $urlRouter, routeHelperConfig) => new routeHelper($location, $rootScope, $urlRouter, routeHelperConfig);
factory.$inject = ['$location', '$rootScope', '$urlRouter', 'routeHelperConfig'];

export default factory;
