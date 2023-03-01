import express from "express"
import data from "./data/mock.json" assert { type: "json" }

const app = express()

const PORT = 3008

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
	console.log(data)
})
