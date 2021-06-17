
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


function throttle() {
    
} 
