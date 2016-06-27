import template from './roster.html';
import controller from './roster.controller';
import './roster.styl';

let rosterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rosterComponent;
