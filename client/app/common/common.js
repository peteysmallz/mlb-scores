import angular from 'angular';
import User from './user/user';
import Scoreboard from './scoreboard/scoreboard';
import Calendar from './calendar/calendar';
import Linescore from './linescore/linescore';
import Roster from './roster/roster';

let commonModule = angular.module('app.common', [
  User.name,
  Scoreboard.name,
  Calendar.name,
  Linescore.name,
  Roster.name
]);

export default commonModule;
