# HTML5 CSS3 簡介
###### tags: `HTML5` `CSS3`
>[Can I use...](https://caniuse.com/)(相容性)
>[HTML 5 Rocks](http://www.html5rocks.com/en/)
>[Mozilla Developer Network HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
>[FileReader](https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader)
---
課外分享
>[彭彭的人工智慧遊戲間](https://training.pada-x.com/ai/)
>[Beating Line](https://beatingline.com/)
---
#### HTML 5 與 CSS 3 簡介
1. 強化網頁的功能性：輸入、影像、繪圖、音效、儲存、多執行緒、資料處理等等。
2. 強化網頁視覺效果、簡化網頁動畫的製作、適應各種終端裝置的設計

---

#### CSS 3 各種視覺效果
1. opacity 透明度
2. border-radius 圓角設定
3. box-shadow 區塊陰影設定
4. text-shadow 文字陰影設定
#### 基本線性變化
1. 位移 translate(x, y)
2. 縮放 scale(x, y)
3. 旋轉 rotate(angle)
4. 歪斜 skew(x-angle, y-angle)

---

#### Form 簡易驗證
1. required (必填)
2. pattern (input輸入規則)
3. oninvalid (this.setCustomValidity('驗證規定'))(表單驗證事件)
4. oninput (input輸入之後會被觸發)

---

input:valid，若input輸入的內容若符合指定條件，則做出相對應的指示。
##### 範例
```css=
<style>
    .ok{
        color: rgb(0, 47, 255);
        display: none;
    }
    input:valid+ .ok{
        display: inline;
    }
</style>
```
![](https://i.imgur.com/m8EesC7.png)
![](https://i.imgur.com/FtXuKr4.png)
##### 由上述範例得知，當input輸入指定規定後，旁邊的勾勾就會出現，這是一開始將勾勾先隱藏起來，接著在input內輸入指定條件後，透過valid將勾勾顯示出來。