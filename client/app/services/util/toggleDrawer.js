class toggleDrawerService {
  constructor($mdComponentRegistry) {
    this.$mdComponentRegistry = $mdComponentRegistry;
    this.isActive = true;
  }

  toggleDrawer() {
    this.isActive = !this.isActive;
  }
}

toggleDrawerService.$inject = ['$mdComponentRegistry'];

export default toggleDrawerService;
