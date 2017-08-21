import angular from 'angular';

configRoute.$inject = ['routeHelper'];
export default function configRoute(routeHelper) {
    routeHelper.configureRoutes(getRoutes());
}

const ctrlName = 'startupController';

function getRoutes() {
    return [{
        state: 'startup',
        config: {
            url: '/startup',
            //template: startupHtml,  //normal load
            templateProvider: () => { //lazy load
                return import('./startup.html').then(_ => {
                    return _;
                });
            },
            controller: ctrlName,
            controllerAs: 'vm',
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return import('./startupController').then(_ => {
                        let module = angular.module('startup');
                        $ocLazyLoad.load(module.controller(ctrlName, _.default));
                    });
                }]
            }
        }
    }];
}