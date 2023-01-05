const enableEventHandlers = coasters => {

    document.querySelector('#featuresOptions').onchange = e => {

        const { value: property, text: label } = e.target.selectedOptions[0]
        console.log("🚀 ~ file: handlers.js:6 ~ document.querySelector ~ e.target.selectedOptions[0]", property, label,e.target.selectedOptions[0].value, e.target.selectedOptions[0].label)

        const newData = coasters.map(coaster => coaster[property])

        updateChartData('featuresChart', newData, label)
    }
}