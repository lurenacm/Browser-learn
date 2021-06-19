let express = require('express')
let app = express()
app.get('/', function(req, res) {
  let {callback} = req.query
  console.log(callback)
  let data = {
    a: 12
  }
  res.send(`callback((${data}))`)
  // res.send(`callback(${JSON.stringify(data)})`)
})
app.listen(3000, () => {
  console.log('ok')
})

