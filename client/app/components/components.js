import angular from 'angular';
import Home from './home/home';
import Navbar from './navbar/navbar';
import SideDrawer from './sidedrawer/sidedrawer';
import PlayerProfile from './playerprofile/playerprofile';

let componentModule = angular.module('app.components', [
  Home.name,
  Navbar.name,
  SideDrawer.name,
  PlayerProfile.name
]);

export default componentModule;
