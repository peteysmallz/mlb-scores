import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter,
    ngMaterial
  ])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
