const express = require("express")
const router = express.Router()
const { getGoal,setGoal, updateGoal, deteteGoal } = require("../controller/goalController")

router.route('/').get(getGoal).post(setGoal)

router.route('/:id').delete(deteteGoal).put(updateGoal)


module.exports = router