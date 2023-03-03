import express from "express"
import data from "./data/mock.json" assert { type: "json" }

const app = express()

const PORT = 3008

app.get("/", (req, res) => {
	res.json(data)
})

app.get("/class/:id", (req, res) => {
	const studentId = Number(req.params.id)

	const student = data.filter((x) => x.id === studentId)
	res.send(student)
})

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
