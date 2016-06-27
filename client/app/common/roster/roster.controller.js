class RosterController {
  constructor(rosterService) {
    this.rosterService = rosterService; 
    this.rowSelection = true;
    this.selected = [];
  }
}

RosterController.$inject = ['rosterService'];

export default RosterController;
