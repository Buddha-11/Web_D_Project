const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    title: {
        type: String ,
        required: true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    timings:{
        type:String,
        required:true
    }
},{timestamps:true});
// looks for plural of Blog
const Event = mongoose.model('Event',eventSchema);
module.exports = Event;