import angular from 'angular';
import playerService from './mlb/players';
import rosterService from './mlb/rosters';
import scoreService from './mlb/score';
import teamService from './mlb/teams';
import toggleDrawerService from './util/toggleDrawer';
import mobileService from './util/mobile';

export default angular
  .module('app.services', [])
  .service({
    playerService,
    rosterService,
    scoreService,
    teamService,
    toggleDrawerService,
    mobileService
  });