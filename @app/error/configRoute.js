export default function configRoute(routeHelper) {
    routeHelper.configureRoutes(getRoutes());

    function getRoutes() {
        return [{
            state: '404',
            config: {
                url: '/404',
                templateUrl: 'app/error/404.html',
            }
        }];
    }
}