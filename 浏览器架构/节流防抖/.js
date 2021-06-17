// function handel() {
//     console.log("ajax sended -- ok")
// }

// box.onclick = debounce(handel, 500, true)

// function debounce(callback, wait, immediate) {
//     if (typeof callback !== "function") throw new TypeError("func must be an function")
//     if (typeof wait == "undefined") wait = 500
//     if (typeof wait === "boolean") {
//         immediate = wait
//         wait = 500
//     }
//     if (typeof immediate !== "boolean") immediate = false

//     let timer = null
//     return function proxy(...params) {
//         let self = this
//         let now = immediate && !timer;
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             timer = null
//             !immediate ? callback.call(self, ...params) : null
//         }, wait)
//         now ? callback.call(self, ...params) : null
//     }
// }

window.onscroll = throttle(handel, 500)

function handel(event, ...params) {
    console.log('ok')
    console.log(event, ...params)
}

// function throttle(callback, wait) {
//     if(typeof callback !== "function") throw new TypeError("func must be a function")
//     if(typeof wait =="undefined") wait = 500

//     let timer = null
//     let  previous = 0   // 用于记录上一次的时间
//     return function proxy(event, ...params){
//         let self = this
//         let now = new Date()

//         setTimeout(() => {
//             callback.call(self, ...params)
//         }, wait);
//     }
// } 


function throttle(func, timeout) {
    let flag = false
    return function (...args) {
        let self = this
        if (flag) return
        flag = true
        setTimeout(() => {
            flag = false
            func.call(self, ...args)
        }, timeout);
    }
}


function throttle(fn, interval) {
    let flag = true;
    return function (...args) {
        let context = this;
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(context, args);
            flag = true;
        }, interval);
    };
};


window.onscroll = throttle(handel, 500)


// function 

function debounce(func, timeout){
    let timer = null
    return function(...args) {
        let self = this
        clearTimeout(timer)
        timer = setTimeout(() => {
           func.call(self, ...args) 
        }, timeout);
    }    
}

