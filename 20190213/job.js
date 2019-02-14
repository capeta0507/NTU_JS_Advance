// 不能使用 HTML DOM
self.addEventListener("message",function(e){
    let sum=0;
    for(let i=0;i<2000000000;i++){
        sum++;
    }
    self.postMessage(sum);
})