const express = require("express")
const app = express()
const cors = require("cors")
const port = 3080

const confidgureDb = require("./configure/database")
const router = require("./configure/routes")

confidgureDb()

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})