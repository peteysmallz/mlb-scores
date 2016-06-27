import angular from 'angular';
import uiRouter from 'angular-ui-router';
import linescoreComponent from './linescore.component';

let linescoreModule = angular.module('linescore', [
  uiRouter
])

.component('linescore', linescoreComponent);

export default linescoreModule;
