import template from './calendar.html';
import controller from './calendar.controller';
import './calendar.styl';

let calendarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default calendarComponent;
