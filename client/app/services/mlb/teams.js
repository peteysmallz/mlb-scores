class teamService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://m.mlb.com/lookup/json/named.team_all_season.bam?team_all_season.col_in=name_display_brief&team_all_season.col_in=name_display_full&team_all_season.col_in=team_id&sort_order=name_asc&all_star_sw=%27N%27&league_id=%27103%27&league_id=%27104%27&season=';
  }

  getTeams(year) {
    return this.$http({
      method: 'GET', 
      url: this.url + year
    });
  }
}

teamService.$inject = ['$http'];

export default teamService;
