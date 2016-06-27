class ScoreboardController {
  constructor(rosterService, scoreService){
    this.rosterService = rosterService;
    this.scoreService = scoreService;
    this.scoreboard();
  }
  
  // Get Scoreboard Data

  scoreboard(){

    const date = new Date();
    
    const currentMonth = date.getMonth() + 1;

    this.day = () => {
      if ((date.getDate()) <= 9) {
        return '0' + date.getDate();
      } else {
        return date.getDate()
      }
    };

    this.month = () => {
      if ((currentMonth) <= 9) {
        return '0' + currentMonth;
      } else {
        return currentMonth;
      }
    };
    
    this.year = date.getFullYear();

    this.scoreService.getMasterScoreboard(this.day(), this.month(), this.year).then(
      (res) => {

        this.games = res.data.data.games.game;

        // May need to edit this, it doesn't cover every status

        this.upcomingGames = _.filter(this.games, (o) => { return o.status.status === 'Preview' || o.status.status === 'Pre-Game' || o.status.status === 'Warmup' });
        this.liveGames = _.filter(this.games, (o) => { return o.status.status === 'In Progress' });
        this.finishedGames = _.filter(this.games, (o) => { return o.status.status === 'Final' });
      },    
      (error) => {
        console.log('error: ', error);
      }
    )
  }

  // Get Roster Data

  // getRoster(id) {
  //   this.rosterService.getRoster(id).then(
  //     (res) => {
  //       this.roster = res.data.stats_sortable_player.queryResults.row;
  //       console.log(this.roster);
  //     },    
  //     (error) => {
  //       console.log('error: ', error);
  //     }
  //   )
  // }
}

ScoreboardController.$inject = ['rosterService', 'scoreService'];

export default ScoreboardController;