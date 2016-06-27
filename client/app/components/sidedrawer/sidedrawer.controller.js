class SidedrawerController {
  constructor($mdComponentRegistry, toggleDrawerService, mobileService){
    this.$mdComponentRegistry = $mdComponentRegistry;
    this.toggleDrawerService = toggleDrawerService;
    this.mobileService = mobileService;
    this.toggleRight();
  }

  // FIXME: this is to open the mobile menu - on load - this needs to be disabled when opened in mobile

  toggleRight() {
    if (!this.mobileService.isMobile) {
      this.$mdComponentRegistry.when('right').then(function(it) {
        it.open();
      });
    }

  } 
}

SidedrawerController.$inject = ['$mdComponentRegistry', 'toggleDrawerService', 'mobileService'];

export default SidedrawerController;
