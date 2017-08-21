import requestInterceptor from './httpRequestInterceptor';

configure.$inject = ['$httpProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', 'routeHelperConfigProvider'];
export default function configure($httpProvider, $urlRouterProvider, $stateProvider, $locationProvider, routeHelperConfigProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    let config = {
        urlRouterProvider: $urlRouterProvider,
        stateProvider: $stateProvider,
        title: 'Demo'
    }

    routeHelperConfigProvider.setConfig(config);

    $httpProvider.interceptors.push(requestInterceptor);

}
