var cheerio = require("cheerio");
var request = require("request");
var Note = require("../models/Note.js");
var Article = require("../models/Article.js");
var Save = require("../models/Save");

module.exports=function(ap0){
    app.get('/scrape', function(req,res){
        request('https://www.nytimes.com/', function (error, response, html){
            var $=cheerio.load(html);
            $('article.tory').each(function(i, element){
                var result={};
                result.title=$(element).children('h2').text();
                result.summery=$(element).children('p.summary').text();
                result.url=$(element).children('h2').children('a').attr('href');
                if(result.title&&result.url){
                    ver entry=new Article(result);
                    Article.update(
                        {url: result.url},
                        result,
                        {upsert:true},
                        function(error, doc){
                            if(error){
                                console.log(error);
                            }
                        }
                    );
                }
                

            });
            res.json({'code':'success'});
        });
    });

    app.get('/articles', function(req,res){
        Article.find({}, function(error, doc){
            if (error) {
                console.log(error);
            }
            else {
                res.send(doc);
            }
        });
    });

    app.get('/artcles/id', function(req,res){
        Articles.find({'_id': req.params.id}).populate('note').exec(function(error,doc){
            if (error){
                console.log(error)
            }
            else {
                res.join(data);
            }
        });
    });

    app.get('/saved/all', function(req,res){
        Save.find({}).populate('note').exec(function(error, data){
            if (error){
                console.log(error);
                res.join({'code':'error'});
            }
            else {
                res.json(data);
            }
        });
    });

    app.post('/save', function(req,res){
        var result={};
        result.id=res.body._id;
        result.title=req.body.title;
        result.summary=req.body.summary;
        result.url=req.body.link;
        var entry=new Save(result);
        entry.save(function(error, data){
            if (error){
                console.log(error);
                res.json(error);
            }
            else {
                res.json(data);
            }
        });
    });


    app.delete('/delete', function(req,res){
        ver result={};
        result._id=req.body._id;
        Save.findOneAndRemove({'_id':req.body._id}, function(error, data){
            if(error){
                console.log(error);
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    });

    app.get('/notes/:id', function(req,res){
        if(req.params.id){
            Note.find({'article_id': req.params.id}).exec(function(error,data){
                if(error){
                    console.log(error);
                }
                else{
                    res.send(data);
                }
            });
        }
    });

    app.post('/notes', function(req,res){
        if(req.body){
            var newNote=new Note(req.body);
            newNote.save(function(error, data){
                if(error){
                    console.log(error);
                }
                else{
                    res.json(data);
                }
            });
        }
        else{
            res.send('error');
        }
    });

    app.get('/notepopulate',function(req, res){
        Note.find({'_id':req.params.id}, function(error, data){
            if(error){
                console.log(error);
            }
            else{
                res.send(data);
            }
        });
    });

    app.delete{'/deletenote', function(req, res){
        var result={};
        result._id=req.body._id;
        Note.findOneAndRemove({'_id': req.body._id}, function(error, data){
            if(error){
                console.log(error);
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    }};
}