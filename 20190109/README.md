# Google Map API 進階指令
###### tags: `Google` `Map`
Google Map 是google公司開發出的地圖工具，屬於 Google Developers 裡的產品。初期為免費開放給開發者做為使用及練習。現在部分功能需收費。若是需用在網頁開發上的話可能需要繳些費用。
>[Google Map Api](https://cloud.google.com/maps-platform/)
>[Google Map Simple](https://developers.google.com/maps/documentation/javascript/examples/map-simple)
---
在上禮拜的課程裡有學習道Google Map 的基本引用，接下來要描述的是部分較常用的功能介紹。
1. 在地圖上劃一個資訊視窗
```javascript=
new google.maps.InfoWindow({
    content:"Hello <u>Map</u>",
    map:map,
    position:{lat:23, lng:121},
})
```
2. 在地圖物件上做click的事件處理，position為您點擊的經緯位置
```javascript=
map.addListener("click",function(e){
    new google.maps.Marker({
        // 在使用者點擊的位置產生一個標示
        map:map,
        position:e.latLng
    });
})
```
3. Geocoding(地址查詢服務)，利用 google.maps.Geocoder 將【地址】轉換成【經緯度】，以便程式使用，首先要到Google Cloud Platform啟用[Geocoding API]才能使用，address為地址
```javascript=
let geocoder = new google.maps.Geocoder();
geocoder.geocode({
    address:"台北市羅斯福路四段一號"
},function(results,status){
    let position = results[0].geometry.location;
    new google.maps.Marker({
        map:map,
        position:position
    });
    map.setCenter(position);
});
```
4. overcall 地址查詢服務(練習)
5. 路徑規畫服務，利用 google.maps.DirectionsService，可提供兩個地理座標間的路徑規畫服務
```javascript=
let server = new google.maps.DirectionsService();
server.route({
    origin:"台灣大學", //起點
    destination:"市政府捷運站", //終點
    travelMode:google.maps.TravelMode.TRANSIT //路線
},function(result){
    // console.log(result);
    new google.maps.DirectionsRenderer({
        map:map,
        directions:result
    })
})
```