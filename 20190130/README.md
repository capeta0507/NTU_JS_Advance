# 網頁動畫製作 網路字型 Web Font
###### tags: `HTML5` `JavaScript` `CSS3`
>[image slider](https://www.jssor.com/demos/image-slider.slider)
>[unsplash](https://unsplash.com/)
>[google fonts](https://fonts.google.com/?selection.family=Noto+Sans+TC)
>[w3school image slide](https://www.w3schools.com/w3css/w3css_slideshow.asp)

---
一、動畫的基本概念
* 動畫就是很多靜態的畫面快速切換
* 切換的速度至少每秒 10 次以上

二、CSS 3 transition
* 使用 transition 可監控一或多個 CSS 可變動屬性，一旦監控的屬性有所變化時，轉換為漸進式變化。
* CSS 為了補足這方面的視覺轉換特效，特別加入 transition 屬性。 一個簡易的動畫效果就是在想要變化的狀態上，加入一個 transition 屬性，而其值為變化需歷時的秒數。
[CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)

三、CSS 3 animation
* 可用 CSS 輕易設計一段完整的動畫
* 用 keyframe 定義動畫流程
* 用 animation 定義 DOM 元件的動畫控制

範例
```css=
.className{
    animation:test 3s;
}

@keyframes test{
    0% {background:red;opacity:0;}
    100% {background:yellow;opacity:1}
 }

```
#### 上述範例可以看到使用@keyframes來定義動畫流程，該區段以3秒的速度將背景色紅色轉變為黃色，並且漸進浮現出來。
四、使用CSS及JavaScript來製作image slide效果
* 參考slider.html
```javascript=
let slides=document.getElementsByClassName("slide");
let index=0;

function next(){
    // 把目前的主圖藏起來
    slides[index].classList.remove("current");
    // 下一張
    index=(index+1)%slides.length;
    // 把新圖秀出來
    slides[index].classList.add("current");
}
```