import angular from 'angular';
import toNumber from './toNumber.filter.js';
import reverse from './reverse.filter.js';

export default angular
    .module('app.filters', [])
    .filter({toNumber, reverse});