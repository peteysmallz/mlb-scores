import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngTables from 'angular-material-data-table';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Services from './services/services';
import Filters from './filters/filters';

const d3 = require("d3");

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Services.name,
    Filters.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
