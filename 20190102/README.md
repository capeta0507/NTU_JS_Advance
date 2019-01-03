# Google Charts
###### tags: `Google` `Chart`

Google Chart 是google公司開發出的圖表工具，屬於 Google Developers 裡的產品。他能將所有資料用圖表化的方式呈現。是一個相當好用的免費套件。
>[Google Chart](https://google-developers.appspot.com/chart/)
>[我的練習(GitHub)](https://github.com/capeta0507/NTU_JS_Advance/tree/master/20190102)
---
```javascript=
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
```
#### 以下是圓餅圖範例
1. 載入 Google Chart Corechart Package
```javascript=
google.charts.load('current', {'packages':['corechart']});
```
2. 準備資料(在函式內)，直接把陣列轉換成 DataTable 物件
```javascript=
var data = google.visualization.arrayToDataTable([
    ['瀏覽器', '市占率'],
    ['Chrome',     70],
    ['Safari',     15],
    ['Fire Fox',    8],
    ['IE',          7]
]);
```
3. 圖表細節設定
```javascript=
var options = {
    title: 'Browser',
    is3D: true,
    backgroundColor:"gray",
    colors:['orange','green'],
};
```
4. 建立 PieChart 物件
```javascript=
var chart = new google.visualization.PieChart(document.getElementById('piechart'));
```
5. 畫出來
```javascript=
chart.draw(data, options);
```
6. 載入完成後，呼叫 drawChart 函式
```javascript=
google.charts.setOnLoadCallback(drawChart);
```
#### 第二種做法
1. 建立一個空的 DataTable 物件
```javascript=
var data = new google.visualization.DataTable();
```
2. 根據圖表的需求，使用addColumn定義欄位，接著用addRow來定義圖表內容
```javascript=
data.addColumn("string","瀏覽器"); //addColumn(資料型態，文字標籤)
data.addColumn("number","市占率");

data.addRow(["Chrome", 70]);
data.addRow(["Safari", 15]);
data.addRow(["Fire Fox",8]);
data.addRow(["IE",      7]);
```