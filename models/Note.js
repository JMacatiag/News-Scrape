var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var NoteSchema=new Schema({
    articleId: {
        type: Schema.Types.ObjectId
    },
    body: {
        type: String
    }
});

var Note=mongoose.model('note', NoteSchema);

module.exports=Note;
