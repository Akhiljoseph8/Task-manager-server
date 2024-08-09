const tasks=require('../Models/taskModel')

exports.addTask = async (req, res) => {
    const { userId, task, createdTime, updateTime, status } = req.body
    try {
        const newTask = new tasks({
            userId, task, createdTime, updateTime, status
        })
        await newTask.save()
        const t = await tasks.find({ userId: userId })
        res.status(200).json(t)
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}


exports.getTask = async (req, res) => {
    const userId = req.payload
    try {
        const task = await tasks.find({ userId: userId })
        res.status(200).json(task)
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}

exports.updateTask = async (req, res) => {
    const { taskId, task, createdTime, updateTime, status } = req.body
    try {
        const updateData = ({
            task: req.body.task, updateTime: req.body.updateTime, status: req.body.status
        })
        const t = await tasks.findByIdAndUpdate(req.body.taskId, updateData)
        res.status(200).json(t)
    }
    catch (err) {
        res.status(404).json(err)
    }
}

exports.deleteTask = async (req, res) => {
    const id=req.params.id
    try {
        const task = await tasks.findByIdAndDelete({ _id:id })
        res.status(200).json(task)
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}