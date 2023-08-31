import mongoose from 'mongoose';

const msgSchema = mongoose.Schema({
    message: { type: String, required: true},
    creator: { type: String, required: true},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Message = mongoose.model('Message', msgSchema);

export default Message;