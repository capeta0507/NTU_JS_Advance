# Google Map API
###### tags: `Google` `Map`
Google Map 是google公司開發出的地圖工具，屬於 Google Developers 裡的產品。初期為免費開放給開發者做為使用及練習。現在部分功能需收費。若是需用在網頁開發上的話可能需要繳些費用。
>[Google Map Api](https://cloud.google.com/maps-platform/)
>[Google Map Simple](https://developers.google.com/maps/documentation/javascript/examples/map-simple)
---
#### 以下是簡易的Google Map範例
一 、Google Cloud Platform 設定
1. 先到[Google Cloud Platform](https://console.cloud.google.com/home)建立專案
2. 選取新建的專案名稱後，點選畫面左方的資料庫
![](https://i.imgur.com/01BbVRJ.png)
3. 搜尋Maps JavaScript API 點選並啟用，這樣就能夠使用google map定位
4. 點選畫面左方憑證，建立憑證後即可完成

---

二、Google Map範例
1. 進入[Google Map Simple](https://developers.google.com/maps/documentation/javascript/examples/map-simple) 並載入程式語言
```javascript=
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 24, lng: 121},//中心位置
        zoom: 8
    });
}
```
```javascript=
<script src="https://maps.googleapis.com/maps/api/js?key={API Key}&callback=initMap"></script>
```
呈現結果如下
![](https://i.imgur.com/hLuHru2.png)
2. 另外可在地圖上標示絕對位置
```javascript=
new google.maps.Marker({
    map:map, //地圖
    position:{lat: 25, lng: 121.55}, //位置
});
```
![](https://i.imgur.com/4gXRdiw.png)

