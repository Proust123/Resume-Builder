const mongoose = require('mongoose')

const cvSchema = new mongoose.Schema({
    user : {
        type : {
            firstName: String,
            surname: String,
            cityState: String,
            postalCode: Number,
            country: String,
            phone: String,
            email: String,
        }
    },

    experience : {
        type : {
            job : String,
            employer : String,
            start : String,
            end : String,
            city : String,
            country : String,
        }
    },

    education : {
        type : {
            school : String,
            location : String,
            field : String,
            qualification : String,
            start : String,
            graduation : String
        }
    },

    skills : {
        type : [String]
    }, 

    summary : {
        type : [String]
    },

    last : {
        type : {
            languages : String,
            certifications : String,
            hobbies : String,
            projects : String,
            accomplishments : String,
            career : String,
            social : String,
            name : String,
        }
    }
})

module.exports = mongoose.model('cv', cvSchema)

