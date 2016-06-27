import template from './scoreboard.html';
import controller from './scoreboard.controller';
import './scoreboard.styl';

let scoreboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default scoreboardComponent;
