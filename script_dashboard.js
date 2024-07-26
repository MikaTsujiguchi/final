document.addEventListener('DOMContentLoaded', function () {
    var options1 = {
        series: [{
            name: 'シリーズ1',
            data: [80, 50, 30, 40, 100, 20],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: 'レーダーチャート1'
        },
        xaxis: {
            categories: ['カテゴリー1', 'カテゴリー2', 'カテゴリー3', 'カテゴリー4', 'カテゴリー5', 'カテゴリー6']
        }
    };

    var options2 = {
        series: [{
            name: 'シリーズ2',
            data: [60, 70, 40, 90, 80, 30],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: 'レーダーチャート2'
        },
        xaxis: {
            categories: ['カテゴリー1', 'カテゴリー2', 'カテゴリー3', 'カテゴリー4', 'カテゴリー5', 'カテゴリー6']
        }
    };

    var options3 = {
        series: [{
            name: 'シリーズ3',
            data: [90, 40, 70, 80, 60, 50],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: 'レーダーチャート3'
        },
        xaxis: {
            categories: ['カテゴリー1', 'カテゴリー2', 'カテゴリー3', 'カテゴリー4', 'カテゴリー5', 'カテゴリー6']
        }
    };

    var options4 = {
        series: [{
            name: 'シリーズ4',
            data: [70, 60, 50, 90, 40, 80],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: 'レーダーチャート4'
        },
        xaxis: {
            categories: ['カテゴリー1', 'カテゴリー2', 'カテゴリー3', 'カテゴリー4', 'カテゴリー5', 'カテゴリー6']
        }
    };

    var optionsLineChart = {
        series: [{
            name: '体重推移',
            data: [60, 62, 64, 63, 65, 66, 68, 67, 69, 70]
        }],
        chart: {
            height: 300,
            type: 'line',
        },
        title: {
            text: '体重推移'
        },
        xaxis: {
            categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
        }
    };

        var optionsFatPercentage = {
            series: [{
                name: '体脂肪率',
                data: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13]
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            title: {
                text: '体脂肪率の変化'
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
            }
        };
    
        var optionsMuscleMass = {
            series: [{
                name: '筋肉量',
                data: [30, 32, 31, 33, 34, 35, 36, 37, 38, 39]
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            title: {
                text: '筋肉量の変化'
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
            }
        };
    

    var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
    var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
    var lineChart = new ApexCharts(document.querySelector("#lineChart"), optionsLineChart);
    var fatPercentageChart = new ApexCharts(document.querySelector("#fatPercentageChart"), optionsFatPercentage);
        var muscleMassChart = new ApexCharts(document.querySelector("#muscleMassChart"), optionsMuscleMass);

    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    lineChart.render();
    fatPercentageChart.render();
    muscleMassChart.render();
    
})