import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngTables from 'angular-material-data-table';
import rosterComponent from './roster.component';

let rosterModule = angular.module('roster', [
  uiRouter,
  ngMaterial,
  ngTables
])

.component('roster', rosterComponent);

export default rosterModule;
