const express = require("express")
const { db } = require("./models/intervention")
const intervention = require("./models/intervention")
const router = express.Router()

router.get("/intervention", async (req, res) => {
	const interventions = await intervention.find()
	res.send(interventions)
})

router.patch("/intervention/:code", async (req, res) => {
	try {
        const interventions = await intervention.findOneAndUpdate(req.params.code,{new : true});
        Object.assign(interventions, req.body)
        interventions.save()
        res.send({heureDebutReel: new Date(), heureFinReel: new Date()})
	}
    catch {
		res.status(404)
		res.send({ error: "Update can't works" })
	}
})

module.exports = router