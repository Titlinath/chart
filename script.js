document.addEventListener('DOMContentLoaded', function() {
    // Data for charts and tables (replace with your actual data)
    var roadBlockData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Road Blocks (%)',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [30, 40, 25, 35, 28]
        }]
    };

    var healthImpactData = {
        labels: ['Respiratory', 'Gastrointestinal', 'Skin', 'Vector-borne', 'Waterborne'],
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [30, 20, 15, 10, 10]
        }]
    };

    var humanDiseasesData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Human Diseases (%)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [30, 40, 25, 35, 28]
        }]
    };

    var animalDiseasesData = {
        labels: ['Livestock/Pets', 'Wildlife', 'Aquatic Life', 'Birds', 'Rodents/Insects'],
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [18, 15, 10, 10, 12]
        }]
    };

    var animalImpactData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Animal Impact (%)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [18, 15, 10, 12, 10]
        }]
    };

    // Function to generate tables
    function generateTable(table, data) {
        var tableHead = '<tr><th>State</th><th>Percentage (%)</th></tr>';
        var tableBody = '';

        for (var i = 0; i < data.labels.length; i++) {
            tableBody += '<tr><td>' + data.labels[i] + '</td><td>' + data.datasets[0].data[i] + '</td></tr>';
        }

        table.innerHTML = tableHead + tableBody;
    }

    // Initialize charts and tables
    var ctxRoadBlock = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctxRoadBlock, {
        type: 'bar',
        data: roadBlockData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Road Blocks in Various States (%)'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) { return value + "%" }
                    }
                }]
            }
        }
    });

    generateTable(document.getElementById('roadBlockTable'), roadBlockData);

    var ctxHealthImpact = document.getElementById('doughnutChart').getContext('2d');
    var doughnutChart = new Chart(ctxHealthImpact, {
        type: 'doughnut',
        data: healthImpactData,
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Health Impacts and Percentages (%)'
            }
        }
    });

    generateTable(document.getElementById('healthImpactTable'), healthImpactData);

    var ctxHumanDiseases = document.getElementById('polarAreaChart').getContext('2d');
    var polarAreaChart = new Chart(ctxHumanDiseases, {
        type: 'polarArea',
        data: humanDiseasesData,
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Human Diseases by States (%)'
            }
        }
    });

    generateTable(document.getElementById('humanDiseasesTable'), humanDiseasesData);

    var ctxAnimalDiseases = document.getElementById('bubbleChart').getContext('2d');
    var bubbleChart = new Chart(ctxAnimalDiseases, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Local Animal Diseases',
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [
                    { x: 10, y: 20, r: 5 },
                    { x: 15, y: 10, r: 8 },
                    { x: 7, y: 25, r: 6 },
                    { x: 30, y: 15, r: 7 },
                    { x: 25, y: 18, r: 9 }
                ]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Local Animal Diseases'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    generateTable(document.getElementById('animalDiseasesTable'), animalDiseasesData);

    var ctxAnimalImpact = document.getElementById('scatterChart').getContext('2d');
    var scatterChart = new Chart(ctxAnimalImpact, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Animal Impact (%)',
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 10 },
                    { x: 7, y: 25 },
                    { x: 30, y: 15 },
                    { x: 25, y: 18 }
                    ]
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Animal Impacts by States (%)'
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
    
        generateTable(document.getElementById('animalImpactTable'), animalImpactData);
    });
    
    function generateTable(table, data) {
        var tableHead = '<tr><th>State</th><th>Percentage (%)</th></tr>';
        var tableBody = '';
    
        for (var i = 0; i < data.labels.length; i++) {
            tableBody += '<tr><td>' + data.labels[i] + '</td><td>' + data.datasets[0].data[i] + '</td></tr>';
        }
    
        table.innerHTML = tableHead + tableBody;
    }
    