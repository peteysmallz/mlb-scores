class scoreService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://gd2.mlb.com/components/game/mlb/';
  }

  getMasterScoreboard(day, month, year) {
    return this.$http({
      method: 'GET', 
      url: this.url + 'year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json' 
    });
  }

  getMiniScoreboard(day, month, year) {
    return this.$http({
      method: 'GET', 
      url: this.url + 'year_' + year + '/month_' + month + '/day_' + day + '/miniscoreboard.json' 
    });
  }

  getBoxscore(day, month, year, ateam, hteam) {
    return this.$http({
      method: 'GET', 
      url: this.url + 'year_' + year + '/month_' + month + '/day_' + day + '/gid_' + year + '_' + month + '_' + day + '_' + ateam + 'mlb_' + hteam + 'mlb_1/boxscore.json' 
    });
  }

  getLinescore(day, month, year, ateam, hteam) {
    return this.$http({
      method: 'GET', 
      url: this.url + 'year_' + year + '/month_' + month + '/day_' + day + '/gid_' + year + '_' + month + '_' + day + '_' + ateam + 'mlb_' + hteam + 'mlb_1/linescore.json' 
    });
  }

  getGameEvents(day, month, year, ateam, hteam) {
    return this.$http({
      method: 'GET', 
      url: this.url + 'year_' + year + '/month_' + month + '/day_' + day + '/gid_' + year + '_' + month + '_' + day + '_' + ateam + 'mlb_' + hteam + 'mlb_1/game_events.json' 
    });
  }

}

scoreService.$inject = ['$http'];

export default scoreService;