google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var arq = data["AQP"]["2016-2"]['students'].length + data["AQP"]["2017-1"]['students'].length
    var mexico = data["CDMX"]["2017-1"]['students'].length + data["CDMX"]["2017-2"]['students'].length
    var lima = data["LIM"]["2016-2"]['students'].length + data["LIM"]["2017-1"]['students'].length + data["LIM"]["2017-2"]['students'].length
    var chile = data["SCL"]["2016-2"]['students'].length + data["SCL"]["2017-1"]['students'].length + data["SCL"]["2017-2"]['students'].length

    var date = google.visualization.arrayToDataTable([
        ["Element", "Alumnas", { role: "style" }],
        ['Arequipa', arq, "blue"],
        ['Mexico', mexico, "blue"],
        ['Lima', lima, "blue"],
        ['Chile', chile, "blue"],
    ]);
    var view = new google.visualization.DataView(date);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Cantidad total de Estudiantes por Sede",
        width: 370,
        height: 300,
        bar: { groupWidth: "80%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);

}
