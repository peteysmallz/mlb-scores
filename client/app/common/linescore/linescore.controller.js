class LinescoreController {
  constructor(scoreService){
    this.scoreService = scoreService;
    this.linescore();
  }
  
  // Get Scoreboard Data

  linescore(){

    // const date = new Date();
    
    // const currentMonth = date.getMonth() + 1;

    // this.day = () => {
    //   if ((date.getDate()) <= 9) {
    //     return '0' + date.getDate();
    //   } else {
    //     return date.getDate()
    //   }
    // };

    // this.month = () => {
    //   if ((currentMonth) <= 9) {
    //     return '0' + currentMonth;
    //   } else {
    //     return currentMonth;
    //   }
    // };
    
    // this.year = date.getFullYear();

    this.scoreService.getMasterScoreboard('12', '06', '2016').then(
      (res) => {
        this.games = res.data.data.games.game;
      },    
      (error) => {
        console.log('linescore error: ', error);
      }
    )
  }
}

LinescoreController.$inject = ['scoreService'];

export default LinescoreController;