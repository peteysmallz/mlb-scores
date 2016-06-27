class playerHittingLogService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://m.mlb.com/lookup/json/named.sport_hitting_game_log_composed.bam?game_type=%27R%27&league_list_id=%27mlb%27&player_id=';
  }
  getPlayerHittingLog(player) {
    return this.$http({
      method: 'GET', 
      url: this.url + player + '&season=2016&sit_code=%271%27&sit_code=%272%27&sit_code=%273%27&sit_code=%274%27&sit_code=%275%27&sit_code=%276%27&sit_code=%277%27&sit_code=%278%27&sit_code=%279%27&sit_code=%2710%27&sit_code=%2711%27&sit_code=%2712%27';
    });
  }
}

playerHittingLogService.$inject = ['$http'];

export default playerHittingLogService;
