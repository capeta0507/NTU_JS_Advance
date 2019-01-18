# Facebook 開發者簡介 進階
###### tags: `Facebook` `GitHub`

>[Facebook 開發者文件](https://developers.facebook.com/docs)
>[Facebook JavaScript SDK](https://developers.facebook.com/docs/javascript)
>[Facebook 開發者工具](https://developers.facebook.com/tools)
---
1. Facebook 分享功能：[Dialogs](https://developers.facebook.com/docs/javascript/reference/FB.ui/)
```javascript=
function share(){
    FB.ui({
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
  },function(response){});
}
```
2. 抓取使用者塗鴉牆上的Posts(user_posts)，/{user-id}/feed：此用戶或此用戶個人檔案中其他用戶發佈的貼文動態（包括近況更新）和連結。[feed](https://developers.facebook.com/docs/graph-api/reference/v3.2/user/feed) 結果如下
```javascript=
FB.api('/me/feed', function(response){
    console.log(response);
})
```
![](https://i.imgur.com/KeA3kY0.png)

3. access token 權限鑰匙，當您在網址上輸入https://graph.facebook.com/您的FB的ID時會看到以下的結果
![](https://i.imgur.com/PIOZPeW.png)
由此可見出現error的訊息，這個訊息表示你沒有權限看基本資料，因此需輸入完整的網址名為https://graph.facebook.com/facebook的ID?access_token=權杖，權杖的獲得方式如下：
```javascript=
function statusChangeCallback(response){
    console.log(response);
}
```
登入完成後，response回傳的內容就包含accessToken，也就是權杖鑰匙
![](https://i.imgur.com/fCvPidu.png)
接著到[存取權杖](https://developers.facebook.com/tools/debug/accesstoken/)將複製的accessToken進行偵錯，這個accessToken就能使用了，完整網址的輸入完後就能看到自己FB的name及id
![](https://i.imgur.com/jdu9Ryd.png)
註：accessToken有使用期限。
