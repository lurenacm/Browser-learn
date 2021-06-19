function jsonp(url, callback) {

    let script;
    // 拼接 url
    url = url.includes('?') ? `${url}&${callback}` : `${url}?${callback}`

    script = document.createElement('script')
    script.src = url
    document.body.appendChild(script)

    window[callback] = (data) => {
        console.log(data)
    }
}

jsonp('http://baidu.com?a=1&callback', (data) => {
    console.log(data)
})

