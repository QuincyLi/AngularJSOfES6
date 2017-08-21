import angular from 'angular';

configRoute.$inject = ['routeHelper'];
export default function configRoute(routeHelper) {
    routeHelper.configureRoutes(getRoutes());
}

const ctrlName = 'loginController';

function getRoutes() {
    return [{
        state: 'login',
        config: {
            url: '/login',
            templateProvider: () => {
                return import('./login.html').then(_ => {
                    return _;
                });
            },
            controller: ctrlName,
            controllerAs: 'vm',
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return import('./loginController').then(_ => {
                        let module = angular.module('login');
                        $ocLazyLoad.load(module.controller(ctrlName, _.default));
                    });
                }]
            }
        }
    }];
}