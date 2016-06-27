import template from './playerprofile.html';
import controller from './playerprofile.controller';
import './playerprofile.styl';

let playerprofileComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default playerprofileComponent;
