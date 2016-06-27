class CalendarController {
  constructor() {
  
    const width = 950,
        height = 166,
        cellSize = 20; // cell size

    const percent = d3.format(".1%"),
        format = d3.time.format("%Y-%m-%dT%H:%M:%S");

    const color = d3.scale.quantize()
        .domain([-.05, .05])
        .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));

    const svg = d3.select("#calendar").selectAll("svg")
        .data([2016])
      .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "RdYlGn")
      .append("g")
        .attr("transform", "translate(" + -258 + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(270," + cellSize * 3.5 + ")rotate(-90)")
        .style("text-anchor", "right")
        .text(function(d) { return d; });

    const rect = svg.selectAll(".day")
        .data(function(d) { return d3.time.days(new Date(2016, 3, 1), new Date(2016, 11, 1)); })
      .enter().append("rect")
        .attr("class", "day")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("x", function(d) { return d3.time.weekOfYear(d) * cellSize; })
        .attr("y", function(d) { return d.getDay() * cellSize; })
        .datum(format);

    rect.append("title")
        .text(function(d) { return d; });

    svg.selectAll(".month")
        .data(function(d) { return d3.time.months(new Date(2016, 3, 1), new Date(2016, 11, 1)); })
      .enter().append("path")
        .attr("class", "month")
        .attr("d", monthPath);

    d3.json("http://m.mlb.com/lookup/json/named.sport_hitting_game_log_composed.bam?game_type=%27R%27&league_list_id=%27mlb%27&player_id=518626&season=2016&sit_code=%271%27&sit_code=%272%27&sit_code=%273%27&sit_code=%274%27&sit_code=%275%27&sit_code=%276%27&sit_code=%277%27&sit_code=%278%27&sit_code=%279%27&sit_code=%2710%27&sit_code=%2711%27&sit_code=%2712%27", function(error, json) {
      if (error) throw error;

      const theData = json.sport_hitting_game_log_composed.sport_hitting_game_log.queryResults.row;
      
      // console.log('starting point data: ', theData);

      // Creating new data structure for calendar

      const data = d3.nest()
        .key(function(d) { return d.game_date; })
        .rollup(function(d) { return ({
            h: Number(d[0].h), 
            ab: Number(d[0].ab),
            hr: Number(d[0].hr),
            avg: Number(d[0].avg),
            bb: Number(d[0].bb),
            so: Number(d[0].so)
          }); 
        })
        .map(theData);

      // console.log('rollup data: ', data);

      rect.filter(function(d) { return d in data; })
          .attr("class", function(d) { return "day " + "q" + data[d].bb + "-11"; })
        .select("title")
          .text(function(d) { return d + " walks: " + data[d].bb; });
    });

    function monthPath(t0) {
      const t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
          d0 = t0.getDay(), w0 = d3.time.weekOfYear(t0),
          d1 = t1.getDay(), w1 = d3.time.weekOfYear(t1);
      return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
          + "H" + w0 * cellSize + "V" + 7 * cellSize
          + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
          + "H" + (w1 + 1) * cellSize + "V" + 0
          + "H" + (w0 + 1) * cellSize + "Z";
    }
  }
}

export default CalendarController;
