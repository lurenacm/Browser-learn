
function debounce(callback, wait, immediate){
    // 参数的处理，防止漏传，误传。
    if(typeof callback !=="function") throw new TypeError("func must be an function")
    if(typeof wait == "undefined") wait = 500
    if(typeof wait === "boolean") {
        immediate = wait
        wait = 500
    }
    if(typeof immediate !=="boolean") immediate = false

    // 返回真正执行的函数。和开胃菜一样的思路，需要定时器和标识
    let timer = null
    return function proxy(){
        // 在规定时间内再次点击，那么我们清除上一次的定时器，使用新的定时器。
        // 假设规定时间内被点击了100次，那么前面的99次都是无效的，最后一次才有效果。
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback()
        }, wait)
    }
}

function handel() {
    console.log("ajax sended -- ok")
}

box.onclick = debounce(handel, 500, true)