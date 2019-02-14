# 影音播放控制 
###### tags: `HTML5` `JavaScript`
>[Video](https://www.w3schools.com/tags/tag_video.asp)
>[Audio](https://www.w3schools.com/tags/tag_audio.asp)
>[多媒體物件](https://www.w3schools.com/tags/ref_av_dom.asp)

---

#### 影音播放的html標籤
```htmlmixed=
1. 使用 <audio> 播放音樂
2. 使用 <video> 播放影片
```
#### audio 標籤
* 支援的格式：mp3, wav, ogg
#### 使用 video 標籤
* 支援的格式：mp4, webm, ogg

---

## 多媒體物件
#### 常用屬性、方法、事件：
* currentTime, duration (目前影音時間,目前影音長度)
* play(), pause() (播放,暫停)
* timeupdate, ended (在影音移動到特定時間時觸發,在影音播放完畢後觸發)

#### 影音重播
將影音時間歸0(currentTime=0)，並且播放
```javascript=
function replay(){
    video.currentTime=0;
    video.play();
}
```