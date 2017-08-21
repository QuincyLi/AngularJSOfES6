import angular from 'angular';
import uirouter from 'angular-ui-router';
import configure from './configure';
import appRouter from '../components/router/routerModule';
import dataService from './dataService';

const moduleName = 'core';

export let module = angular.module(moduleName, [uirouter, appRouter])
                           .config(configure)
                           .factory('dataService', dataService);

export default moduleName;