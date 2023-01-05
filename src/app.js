// import { getAquisitionsByYear } from './api'
Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


const printCharts = () => {

    // fetchCoastersData('https://coasters-api.herokuapp.com', 'https://coasters-api.herokuapp.com/country/Spain')
    //     .then(([allCoasters, nationalCoasters]) => {
    //         renderModelsChart(allCoasters)
    //         renderFeaturesChart(nationalCoasters)
    //         renderYearsChart(allCoasters)
    //         enableEventHandlers(nationalCoasters)
    //     })
    renderModelsChart(models)
    renderFeaturesChart(models)
    renderYearsChart(models)
    enableEventHandlers(models)
    // simpleChart(models)

}



const renderModelsChart = coasters => {

    // const uniqueModels = [...new Set(coasters.map(coaster => coaster.model))]

    const data = {
        // labels: uniqueModels,
        labels: coasters.map(coast=>coast.model),
        datasets: [{
            // data: uniqueModels.map(currentModel => coasters.filter(coaster => coaster.model === currentModel).length),
            data: coasters.map(coast=>coast.length),
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    const options = {
        plugins: {
            // ç Legend position
            legend: { position: 'left' }
        }
    }

    // ç canvas id, type of chart, data, options
    new Chart('modelsChart', { type: 'doughnut', data, options })
}




const renderFeaturesChart = coasters => {

    const data = {
        labels: coasters.map(coast=>coast.name),
        datasets: [{
            label: 'Altura (m)',
            data: coasters.map(coaster => coaster.height),
            borderColor: getDataColors()[0],
            backgroundColor: getDataColors(20)[0]
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        },
        // ç Scale "r" for this chart type
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }

    new Chart('featuresChart', { type: 'radar', data, options })
}




const renderYearsChart = coasters => {

    const years = ['1998-1999', '2000-2001', '2002-2003', '2004-2005', '2006-2007', '2008-2009', '2010-2011']

    const data = {
        labels: years,
        datasets: [{
            data: getCoastersByYear(coasters, years),
            tension: .5,
            borderColor: getDataColors()[1],
            backgroundColor: getDataColors(20)[1],
            // ç Required for this chart to have bck color
            fill: true,
            // ç Point border
            pointBorderWidth: 5
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        }
    }

    new Chart('yearsChart', { type: 'line', data, options })
}



const simpleChart = async coasters =>{
    const data = {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      labels: coasters.map(coast=> coast.name),
      datasets: [
        {
          label: "# of Votes",
          data: coasters.map(coast=> coast.name),
          borderWidth: 1,
          borderColor: getDataColors()[1],
          backgroundColor: getDataColors(20),
        },
      ],

    };

    // const data = await getAquisitionsByYear();

    const options = {
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    
    new Chart('simple-chart', {type:'bar', data, options})

}






printCharts()