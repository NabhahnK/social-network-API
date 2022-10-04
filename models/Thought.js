const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
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
        // reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
// postSchema
//     .virtual('reactionsCount')
//     // Getter
//     .get(function () {
//         return this.reactions.length;
//     });

function format(date) {
    sDate = new Date(date);
    return sDate.getFullYear();
}

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
