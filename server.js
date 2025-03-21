const express = require("express")
const path = require("node:path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(3000, () => {
  console.log("App available at http://localhost:3000")
})

module.exports = app
