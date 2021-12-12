import Chart from "chart.js/auto"

let cryptoChart
export let yAxisD = { display: true }
export let paddingChart = {right : 120}
export const chart = (data, tickPriceData) => {
    if (cryptoChart) cryptoChart.destroy();
    let dataLabel = []
    let referenceLine = []
    for (let i = 0; i < data.length; i++) {
        dataLabel.push(i)
        referenceLine.push(tickPriceData)
    }
    let dataMin = Math.min(...data) - (Math.max(...data) / 1000)
    if (dataMin < 0) dataMin = 0
    const dataMax = Math.max(...data) + (Math.max(...data) / 1000)
    cryptoChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        options: {
            
            animation: false,
            pointBorderWidth: 0,
            pointRadius: 0,
            hoverBorderWidth: 0,
            hoverRadius: 0,
            layout:{
                padding: {
                    right: paddingChart.right,
                }
            },
            scales: {
                xAxis: {
                    display: false,
                },
                yAxis: {
                    display: yAxisD.display,
                    min: dataMin
                    ,
                    max: dataMax
                    ,
                    grid: {
                        drawBorder: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        fontSize: 15,
                        fontColor: 'lightgrey',
                        maxTicksLimit: 5,
                        padding: 25,
                    },
                },
                yAxis1: {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    min: dataMin
                    ,
                    max: dataMax
                    ,
                    grid: {
                        drawBorder: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        fontSize: 15,
                        fontColor: 'red',
                        maxTicksLimit: 1,
                        padding: 25,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    display: false,
                    enabled: false,
                    mode: 'single',
                },
            }
        },
        data: {
            labels: dataLabel,
            datasets: [{
                tooltip: false,
                data: data,
                label: "crytpo",
                borderColor: "#6d8700",
                fill: false,
                yAxisID: 'yAxis',
            }, {
                tooltip: false,
                data: referenceLine,
                label: "crytpo2",
                borderColor: "#54001a",
                fill: false,
                yAxisID: 'yAxis1',
            }]
        },
    });
}
export const chartUpdate = (newData, dynamicCurrentPrice) => {
    if (cryptoChart.data) {

        //cryptoChart.destroy();
        chart(newData, dynamicCurrentPrice)
    }
}
export const chartDestroy = () => {
    cryptoChart.destroy();
}