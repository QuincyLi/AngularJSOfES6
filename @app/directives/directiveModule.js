import angular from 'angular';
import customModal from './customModal';

const moduleName = 'app.ng.directives';

export let module =  angular.module(moduleName, [])
    .directive('customModal', () => new customModal());

export default moduleName;