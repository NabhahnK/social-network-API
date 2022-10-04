const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true.valueOf,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Please fill a valid email address"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        // thoughts: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Thought',
        //     },
        // ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //     },
        // ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `friendCount` that gets and sets the user's full name
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return `${this.friends.length}`;
    })

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;