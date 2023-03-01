import express from "express"
import data from "./data/mock.json" assert { type: "json" }

const app = express()

const PORT = 3008

app.get("/", (req, res) => {
	res.json(data)
})

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
