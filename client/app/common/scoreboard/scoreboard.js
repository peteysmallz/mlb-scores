import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import scoreboardComponent from './scoreboard.component';

let scoreboardModule = angular.module('scoreboard', [
  uiRouter,
  ngMaterial
])

.config(() => {
  "ngInject";
})

.component('scoreboard', scoreboardComponent);

export default scoreboardModule;
