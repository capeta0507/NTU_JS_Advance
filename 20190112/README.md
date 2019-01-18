# Facebook 開發者簡介
###### tags: `Facebook` `GitHub`
Facebook 擁有最龐大的社交資料以及最活躍的社群網絡，無償提供給開發者利用。要整合Facebook服務的方法，使用 [Social Plugin](https://developers.facebook.com/docs/plugins/) 社交外掛：按讚、分享、留言等等功能。
>[Facebook 開發者中心](https://developers.facebook.com/)
>[Facebook Login](https://developers.facebook.com/docs/facebook-login/v2.0)
>[權限參考資料 - Facebook 登入](https://developers.facebook.com/docs/facebook-login/permissions)
---
1. 在Facebook 開發者中心新增(要先登入)，於設定區設定應用程式網域(可用github網址)
![](https://i.imgur.com/x4KC8iA.png)
在產品區新增Facebook 登入設定
2. 載入 Facebook JavaScript SDK
```javascript=
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.2&appId=239202716972045&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
```
3. 載入完成後，呼叫 window.fbAsyncInit 函式
```javascript=
window.fbAsyncInit = function() {
    // 初始化 Facebook SDK 套件
    FB.init({
        appId      : '239202716972045',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });
    // 偵測使用者的登入狀態
    FB.getLoginStatus(function(response) {
        console.log(response);
        statusChangeCallback(response);
    });

};
```
4. 登入狀態改變時，做出對應的處理
```javascript=
function statusChangeCallback(response) {
    if (response.status === 'connected') { //使用者已登入
      testAPI(); //抓取使用者的資料
    } else { //使用者未登入，鼓勵使用者登入
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
```

```javascript=
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
}
```
