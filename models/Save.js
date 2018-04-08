var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var SaveSchema=new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    url: {
        tye: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
});

var Save=mongoose.model('Save', SaveSchema);

module.exports=Save;