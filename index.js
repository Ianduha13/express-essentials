import express from "express"
import data from "./data/mock.json" assert { type: "json" }

const app = express()

const PORT = 3008

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.json(data)
})

app.post("/item", (req, res) => {
	console.log(req.body)
	res.send(req.body)
})

// app.get(
// 	"/next",
// 	(req, res, next) => {
// 		console.log("the response will be sent by the next function")
// 		next()
// 	},
// 	(req, res) => {
// 		res.send("i just setup a route with two functions")
// 	}
// )

// app.get("/class/:id", (req, res) => {
// 	const studentId = Number(req.params.id)

// 	const student = data.filter((x) => x.id === studentId)
// 	res.send(student)
// })

// app.get("/redirect", (req, res) => {
// 	res.redirect("https://linkedin.com")
// })

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
