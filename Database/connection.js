const mongoose = require('mongoose')
const connectionString = "mongodb+srv://akhiljoseph:akhiljoseph@cluster0.hoizh.mongodb.net/TASKMANAGER?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionString).then(() => {
    console.log("MongoDB connection Success")
}).catch((err) => {
    console.log("MongoDB connection failed")
    console.log(err)
})
