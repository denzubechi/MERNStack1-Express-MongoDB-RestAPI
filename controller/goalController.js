const asyncHandler = require("express-async-handler")

const Goal = require('../models/goalModel')

//@desc Get goals
//@route GET /api/goals
const getGoal = asyncHandler(async (req,res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})
//@desc Set goals
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async  (req,res)=>{
    res.status(200).json({ message: `Set goals`})
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})
//@desc update goals
//@route PUT /api/goals
//access private
const updateGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})
//@desc detele goals
//@route DELETE /api/goals
//access private
const deteteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deteteGoal
}