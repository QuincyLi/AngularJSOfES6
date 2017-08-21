import angular from 'angular';
import configRoute from './configRoute';

export default angular.module('error', ['router']).run(configRoute);