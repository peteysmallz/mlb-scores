class rosterService {
  constructor($http) {
    this.$http = $http;
  
    this.getHitter = function(teamId) {
      return this.$http({
        method: 'GET', 
        url: 'http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2016&sort_order=%27desc%27&sort_column=%27ab%27&stat_type=hitting&page_type=SortablePlayer&team_id=' + teamId + '&game_type=%27R%27&player_pool=ALL&season_type=ANY&sport_code=%27mlb%27&results=1000&recSP=1&recPP=50'
      })
      .then((res) => {
        this.hitters = res.data.stats_sortable_player.queryResults.row;
      })
    }
    this.getPitcher = function(teamId) {
      return this.$http({
        method: 'GET', 
        url: 'http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2016&sort_order=%27desc%27&sort_column=%27w%27&stat_type=pitching&page_type=SortablePlayer&team_id=' + teamId + '&game_type=%27R%27&player_pool=ALL&season_type=ANY&sport_code=%27mlb%27&results=1000&recSP=1&recPP=50'
      })
      .then((res) => {
        this.pitchers = res.data.stats_sortable_player.queryResults.row;
      })
    }
  }
}

rosterService.$inject = ['$http'];

export default rosterService;
