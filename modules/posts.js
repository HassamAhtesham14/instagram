var mongoose =require("mongoose");
mongoose.connect('mongodb+srv://test:pass@cluster0.j9jrp.mongodb.net/posts?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var postsSchema = new mongoose.Schema({
    description: String,
    user_name: String,
    post_image: String
});
var postModel = mongoose.model('Posts', postsSchema);
module.exports=postModel;