const express = require('express')
const router = express.Router()

const taskService = require('../BL/task.service')
const tasks = require('../middleware/db_data')

router.get('/', async (req, res) =>{
    try{
        res.send(tasks);
    }
    catch (err){
        res.status(err.code || 400).send(err.message)
    }
})

router.post('/', async (req, res) =>{
    try{
        let {title, description, priority} = req.body
        let task = {
            id: tasks.length + 1,
            title: title,
            description: description,
            completed: false,
            createdAt: Date(),
            priority: priority
        }
        tasks.push(task)
        
    
        res.send(task);

    }
    catch (err){
        res.status(err.code || 400).send(err.message)
    }
})

router.put('/:id', async (req, res) =>{
    try{
        let oneTask = tasks.find(t=> t.id === req.body.id)
        let ind = tasks.indexOf(oneTask)
        oneTask.title = req.body.title
        oneTask.description = req.body.description
        oneTask.priority = req.body.priority
        tasks[ind] = oneTask
        res.send(oneTask)
    }
    catch (err){
        res.status(err.code || 400).send(err.message)
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        tasks = tasks.filter(t=> t.id != req.body.id)
        res.sendStatus(200)
    }
    catch (err){
        res.status(err.code || 400).send(err.message)
    }
})

module.exports = router;