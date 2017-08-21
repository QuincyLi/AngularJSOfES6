import angular from 'angular';
import uirouter from 'angular-ui-router';
import routeHelperConfig from './routeHelperConfig';
import routeHelper from './routeHelper';


const moduleName = 'app.ng.router';
export let module = angular.module(moduleName, [uirouter])
                        .provider('routeHelperConfig', routeHelperConfig)
                        .factory('routeHelper', routeHelper);

export default moduleName;                      