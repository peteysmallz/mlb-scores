import template from './linescore.html';
import controller from './linescore.controller';
import './linescore.styl';

let linescoreComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default linescoreComponent;
