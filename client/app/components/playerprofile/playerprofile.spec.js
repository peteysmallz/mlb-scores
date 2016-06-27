import PlayerprofileModule from './playerprofile'
import PlayerprofileController from './playerprofile.controller';
import PlayerprofileComponent from './playerprofile.component';
import PlayerprofileTemplate from './playerprofile.html';

describe('Playerprofile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PlayerprofileModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PlayerprofileController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PlayerprofileTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PlayerprofileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PlayerprofileTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PlayerprofileController);
      });
  });
});
