var express = require('express');
var app=express();
var MongoClient = require('mongoDB').MongoClient;

var url = "mongodb://himanshu:himanshum011@ds219532.mlab.com:19532/productdatabase";

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		parameterLimit : 100000,
		limit : "2mb" ,
		extended : true
	})
	);

app.set('view engine' , 'ejs');

app.get('/dbcheck',function(req,res){

	MongoClient.connect(url,function(err,db){
		if(err) throw err;

		console.log("Database Connected");
	})

	});

app.get('/laptops',function(req,res){

	MongoClient.connect(url,function(err, client){
		if(err) throw err;
		var db = client.db('productdatabase');
		db.collection("products").find({}).toArray(function(err,result){
			if(err) throw err;
		    res.render('laptop',{data:result});	
		    console.log(result);
		    client.close();
		});


	});
	
});

app.get('/mobile',function(req,res){

	MongoClient.connect(url,function(err, client){
		if(err) throw err;
		var db = client.db('productdatabase');
		db.collection("mobiles").find({}).toArray(function(err,result){
			if(err) throw err;
		    res.render('mobile',{data:result});	
		    console.log(result);
		    client.close();
		});


	});
	
});

app.get('/camera',function(req,res){

	MongoClient.connect(url,function(err, client){
		if(err) throw err;
		var db = client.db('productdatabase');
		db.collection("cameras").find({}).toArray(function(err,result){
			if(err) throw err;
		    res.render('camera',{data:result});	
		    console.log(result);
		    client.close();
		});


	});
	
});

app.get('/',function(req,res){
      
      res.render('index');
	});





app.get('/form',function(req,res){
	res.render('form');
	MongoClient.connect(url,function(err, client){
		if(err) throw err;

		app.post("/form",function(req,res){
			var obj = req.body;
			console.log(obj);
       var db = client.db('productdatabase');
		db.collection("products").insertOne(obj,function(err,result){
			if(err) throw err;
		    console.log("success");
		    client.close();
		});

	});


	});
	
});

var server=app.listen(3000);
