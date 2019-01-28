# Canvas 向量繪圖
###### tags: `HTML5` `JavaScript`
>[w3school](https://www.w3schools.com/tags/ref_canvas.asp)

---

使用canvas繪圖的目的，是了製作更複雜的畫面效果，比 HTML DOM 更好的繪圖效能，建立 canvas 標籤，呼叫 getContext(“2d”) 取得 context 物件，
使用 context 物件進行各種繪圖功能。
#### 矩形處理
1. 填滿：fillRect(x, y, width, height)
2. 描邊：strokeRect(x, y, width, height)
3. 清除：clearRect(x, y, width, height)
* (x, y, width, height)分別為(座標x,座標y,矩形的寬,矩形的高
#### 文字的處理
1. 填滿：fillText(text, x, y, maxWidth)
2. 描邊：strokeText(text, x, y, maxWidth)
* (text, x, y, maxWidth)分別為(字型,座標x,座標y,字體大小)
#### 畫筆與字型
1. 填滿用畫筆：fillStyle(顏色)
2. 描邊用畫筆：strokeStyle(顏色)
3. 字型與大小：font
#### 圖片的處理
1. drawImage(img, dx, dy, dw, dh)
2. drawImage(img, sx, sy, sw, sh,dx, dy, dw, dh)
![](https://i.imgur.com/zeO9LPH.png)
#### 定義形狀
1. 移動目標位置：moveTo(x, y)
2. 定義直線：lineTo(x, y)
3. 定義圓弧：
* arc(x, y, radius, startAngle, endAngle, ccw)
* arcTo(x1, y1, x2, y2, radius)
4. 定義矩形：rect(x, y, width, height)
5. 二次曲線：quadraticCurveTo(cpx, cpy, x, y)
* [貝茲曲線](https://www.w3schools.com/tags/canvas_beziercurveto.asp)
#### 線性變化
1. 移動原點：translate(x, y)
2. 縮放：scale(x, y)
3. 旋轉：rotate(angle)
4. 任意變化：transform(a, b, c, d, e, f)
