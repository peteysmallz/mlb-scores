import template from './sidedrawer.html';
import controller from './sidedrawer.controller';
import './sidedrawer.styl';

let sidedrawerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default sidedrawerComponent;
