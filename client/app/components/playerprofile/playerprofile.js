import angular from 'angular';
import uiRouter from 'angular-ui-router';
import playerprofileComponent from './playerprofile.component';

let playerprofileModule = angular.module('playerprofile', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('player', {
      url: '/player/:playerId',
      template: '<playerprofile></playerprofile>'
    });
})

.component('playerprofile', playerprofileComponent);

export default playerprofileModule;
