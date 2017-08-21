import angular from 'angular';
import ocLazyload from 'oclazyload';
import core from './core/coreModule'
import directive from './directives/directiveModule';
import startup from './startup/startupModule';
import login from './login/loginModule';

/*scss*/
import 'bootstrap/dist/css/bootstrap.css';
import './css/questionnaire.css';

let moduleName = 'app.ng';
export let module = angular.module(moduleName, [ocLazyload, directive, core, startup, login]);

export default moduleName;