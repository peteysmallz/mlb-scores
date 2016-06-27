import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material'
import sidedrawerComponent from './sidedrawer.component';

let sidedrawerModule = angular.module('sidedrawer', [
  uiRouter,
  ngMaterial
])

.component('sidedrawer', sidedrawerComponent);

export default sidedrawerModule;
