class mobileService {
  constructor($window, $document, $rootScope) {
    this.$window = $window;
    this.$document = $document; 
    this.$rootScope = $rootScope;
    this.angular = angular;
    let service = this;

    let resizeMobileCheck = function() {
       angular.element($window).bind('resize', function() {
        if (window.matchMedia('(max-width: 900px)').matches) {
          service.isMobile = true;
          angular.element($document[0].body).addClass('mobile');
          angular.element($document[0].body).removeClass('desktop');
        } else {
          service.isMobile = false;
          angular.element($document[0].body).addClass('desktop');
          angular.element($document[0].body).removeClass('mobile');
        }
        $rootScope.$apply();
      }); 
    }

    this.setIsMobile();
    resizeMobileCheck();
  }

  setIsMobile() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    } 
  }
}

mobileService.$inject = ['$window', '$document', '$rootScope'];

export default mobileService;
