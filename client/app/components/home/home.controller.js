class HomeController {
  constructor(scoreService, $stateParams, mobileService, $scope){
    this.$stateParams = $stateParams;
    this.$scope = $scope;
    this.scoreService = scoreService;
    this.mobileService = mobileService;
  }
}

HomeController.$inject = ['scoreService', '$stateParams', 'mobileService', '$scope'];

export default HomeController;