const Todo = require("../model/todo")
exports.getTodo = async (req, res) => {
    try {
        const data = await Todo.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, messsge: error.messsge })
    }
}

exports.postTodo = async (req, res) => {
    try {
        const data = await Todo.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, messsge: error.messsge })
    }
}

exports.putTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, messsge: error.messsge })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, messsge: error.messsge })
    }
}