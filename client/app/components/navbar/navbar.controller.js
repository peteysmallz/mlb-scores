class NavbarController {
  constructor($mdSidenav, toggleDrawerService, mobileService){
    this.$mdSidenav = $mdSidenav;
    this.toggleDrawerService = toggleDrawerService;
    this.mobileService = mobileService;
  }

  toggleLeft() {
    this.$mdSidenav('left').toggle();
  } 

  toggleRight() {
    this.$mdSidenav('right').toggle();
  }  

  toggleSideDrawer() {
    this.$mdSidenav('right').toggle();
  }
}

NavbarController.$inject = ['$mdSidenav', 'toggleDrawerService', 'mobileService'];

export default NavbarController;
