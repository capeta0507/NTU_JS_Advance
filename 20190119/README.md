# Facebook 簡易的會員系統
###### tags: `Facebook` `GitHub` `Firebase`
>[Firebase 會員登入系統](https://firebase.google.com/docs/auth/web/start?authuser=0)
>[Firebase FB登入](https://firebase.google.com/docs/auth/web/facebook-login?authuser=0)

---

#### 一、今天的上課內容是使用firebase做一個用facebook帳號登入的會員系統，首先得先開通某些條件。
1. 在Firebase建立一個專案(或是沿用之前建立的專案)
2. 在Firebase專案 進入[Authentication]點選登入方式，再登入供應商選擇facebook，輸入應用程式ID及應用程式金鑰!並啟用。[](https://i.imgur.com/eeEkqDv.png)![](https://i.imgur.com/12lpy8j.png)完成設定後，將下方 OAuth 新增到 Facebook 應用程式設定中(網域授權)。![](https://i.imgur.com/uGv6Ejc.png)

3. 在Google Cloud Platform 找出自己要使用的專案，啟用Identity Toolkit API功能(在API 程式庫搜尋)
#### 二、完成以上設定後，接著就可以引用程式碼了。
1. 登入程式碼(簡易FB帳號登入)
```javascript=
firebase.auth().signInWithPopup(provider).then(function(result) {

}).catch(function(error) {

});
```
2. 當使用者的登入狀態變化的時候，執行我們提供的函式
```javascript=
let currentUser = null; //使用者登入狀態
firebase.auth().onAuthStateChanged(function (user) {
    if (user) { //使用者已登入
        currentUser = user;
    } else { //使用者已經登出
        currentUser = user;
    }
});
```
3. 確認可以登入後，接著來做聊天是常用的訊息傳遞，將輸入的訊息傳到firebase資料庫
```javascript=
let id = currentUser.uid;
let name = currentUser.displayName;
let content = document.getElementById("content").value;
// 加入資料庫
let ref = firebase.database().ref("/messages"); //firebase 集合
ref.push({
    id: id, name: name, content: content, time: Date.now()
});
```
4. 讀取資料
```javascript=
let ref = firebase.database().ref("/messages");
ref.once("value", function (snapshots) {
    let data = [];
    snapshots.forEach(function (snapshot) {
        let message = snapshot.val();
        message.key = snapshot.key;
        data.push(message);
    });
});
```
5. 刪除(讀取key值)
```javascript=
function del(key) {
    let ref = db.ref("/messages/" + key);
    ref.remove(function (error) {
        if (error) {
            alert(error);
        } else {
            alert("Removed");
        }
    })
}
```
[測試網址](https://capeta0507.github.io/training/board.html)