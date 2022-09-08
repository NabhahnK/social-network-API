const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const responseSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: format
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function format(date) {
    sDate = new Date(date);
    return sDate.getFullYear();
}

module.exports = responseSchema;
