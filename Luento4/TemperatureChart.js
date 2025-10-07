const url =
  "https://api.thingspeak.com/channels/3100744/feeds.json?api_key=MBU1IAGQ5DZ9BEPR&";

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const feeds = data.feeds;

      const temperatures = feeds.map((feed) => ({
        time: new Date(feed.created_at),
        temp: parseFloat(feed.field1),
      }));

      const chartData = [["Aika", "Lämpötila (°C)"]];
      temperatures.forEach((item) => {
        if (!isNaN(item.temp)) {
          chartData.push([item.time, item.temp]);
        }
      });

      const dataTable = google.visualization.arrayToDataTable(chartData);

      const options = {
        title: "Lämpötilat ThingSpeakista",
        curveType: "function",
        legend: { position: "bottom" },
      };

      const chart = new google.visualization.LineChart(
        document.getElementById("output")
      );

      chart.draw(dataTable, options);
    })
    .catch((error) => {
      console.error("Error fetching data", error);
      document.getElementById("output").textContent = "Error loading data";
    });
}
