const mongoose = require('mongoose');

const ParticipantSchema = mongoose.Schema({
    Name:String,
    Email:String,
    Mobile:String,
    College:String,
    TransactionId:String
});
const participate = mongoose.model('Participants',ParticipantSchema);

module.exports = {participate}