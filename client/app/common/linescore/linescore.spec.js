import LinescoreModule from './linescore'
import LinescoreController from './linescore.controller';
import LinescoreComponent from './linescore.component';
import LinescoreTemplate from './linescore.html';

describe('Linescore', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LinescoreModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LinescoreController();
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
      expect(LinescoreTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LinescoreComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LinescoreTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LinescoreController);
      });
  });
});
