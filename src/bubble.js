import Chart from "chart.js/auto";
import { getDimensions } from "./api";

(async function () {
  //   const data = await getDimensions();
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
    //   label: [
    //     'Red',
    //     'Green',
    //     'Yellow',
    //     'Grey',
    //     'Blue'
    //   ],
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
        plugins: {
            legend: {
              position: 'left',
            },
            tooltip: {
              enabled: true,
            },
          },
    }
  };

  new Chart(document.getElementById("bubble"), 
    config,
    data
  );
})();
