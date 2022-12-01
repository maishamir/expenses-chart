import expenseData from '../data.json' assert{type: 'json'};
var chart = document.getElementById("expenses")

var days = []
var amount = []

for (let i in expenseData) {
    days.push(expenseData[i].day)
    amount.push(expenseData[i].amount)
}

new Chart('expenses', {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            backgroundColor: 'hsl(10, 79%, 65%)',
            hoverBackgroundColor: "hsl(186, 34%, 60%)",
            data: amount,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                display: false,
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                }
            },
            
        },
        animation: false,
    }
})

