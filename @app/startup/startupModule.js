import angular from 'angular';
import configRoute from './configRoute';

const moduleName = 'startup';
export let module = angular.module(moduleName, []).run(configRoute);

export default moduleName;