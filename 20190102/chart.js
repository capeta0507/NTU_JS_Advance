// 找出程式的進入點
// 載入 Google Chart Corechart Package
google.charts.load('current', {'packages':['corechart']});
// 載入完成後，呼叫 drawChart 函式
google.charts.setOnLoadCallback(init);
function init(){
    drawLineChart();
    drawPieChart();
}

function drawLineChart(){
    /*
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);
    */
    var data = new google.visualization.DataTable();

    data.addColumn("string","Year"); //addColumn(資料型態，文字標籤)
    data.addColumn("number","Sales");
    data.addColumn({type:'string', role:'annotation'}); 
    data.addColumn("number","Expenses");
    data.addColumn({type:'string', role:'annotation'}); 
    data.addRow(["2004",1000,null,400,null]);
    data.addRow(["2005",1170,null,460,null]);
    data.addRow(["2006",560,'危機',1120,'轉機']);
    data.addRow(["2007",1030,null,500,null]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors:['orange','green'],
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart'));

    chart.draw(data, options);
}

function drawPieChart() {
    // 準備資料
    // 1.直接把陣列轉換成 DataTable 物件
    /*
    var data = google.visualization.arrayToDataTable([
        ['瀏覽器', '市占率'],
        ['Chrome',     70],
        ['Safari',      15],
        ['Fire Fox',  8],
        ['IE', 7]
    ]);
    */
    // 2.仔細地慢慢地準備
    // 2.1建立一個空的 DataTable 物件
    var data = new google.visualization.DataTable();
    // 2.2根據圖表的需求，定義欄位
    data.addColumn("string","瀏覽器"); //addColumn(資料型態，文字標籤)
    data.addColumn("number","市占率");
    // addColumn(物件)
    data.addColumn({type:"string",role:"tooltip"});
    data.addRow(["Chrome",70,"Google"]);
    data.addRow(["Safari",15,"Apple"]);
    data.addRow(["Fire Fox",8,null]);
    data.addRow(["IE",7,null]);
    // 圖表細節設定
    var options = {
        title: 'Browser',
        is3D: true,
        backgroundColor:"#CCEEFF",
        colors:['#5599FF','green','aqua','pink'],
    };
    // 建立 PieChart 物件
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    // 畫出來
    chart.draw(data, options);
}