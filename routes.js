const express = require("express")
const { db } = require("./models/intervention")
const intervention = require("./models/intervention")
const router = express.Router()

router.get("/intervention", async (req, res) => {
	const interventions = await intervention.find()
	res.send(interventions)
})

router.patch("/intervention/entree/:code", async (req, res) => {
	try {
        const interventions = await intervention.findOneAndUpdate(req.params.code,{new : true, $set: {heureDebutReel: new Date()}});
        Object.assign(interventions, req.body)
        interventions.save()
        res.send({heureDebutReel: new Date()})
	}
    catch {
		res.status(404)
		res.send({ error: "Update can't works" })
	}
})

router.patch("/intervention/sortie/:code", async (req, res) => {
	try {
        const interventions = await intervention.findOneAndUpdate(req.params.code,{new : true, $set: {heureFinReel: new Date()}});
        Object.assign(interventions, req.body)
        interventions.save()
        res.send({heureFinReel: new Date()})
	}
    catch {
		res.status(404)
		res.send({ error: "Update can't works" })
	}
})

module.exports = router