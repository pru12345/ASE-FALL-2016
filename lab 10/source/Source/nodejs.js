
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var cors = require('cors');
var app = express();
var result={'body': []};
var url = 'mongodb://user:user@ds051873.mlab.com:51873/sample';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {  res.write("Connecting to Database Failed");
            res.end();  }
        insertDocument(db, req.body, function() {
            res.write("Successfully Registered");
            res.end();       });    });
    var insertDocument = function(db, data, callback) {
        db.collection('name').insertOne( data, function(err, result) {
            if(err)           {
                res.write("Registration Failed");
                res.end();           }
            console.log("Registration Successful");

            callback();        });    };})
app.post('/get-data',function (req,res) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findUser(db, function() {
            db.close();        });    });
    var findUser = function(db, callback) {
        var cursor =db.collection('name').find();
        cursor.toArray(function(err, doc) {
            assert.equal(err, null);
                j=doc;
                //JSON.stringify(j);
                doc1=j;
            res.contentType('application/json');
            res.write(JSON.stringify(j));
            res.end();        });    };})
app.post('/update',function (req,res) {
    MongoClient.connect(url, function(err, db) {
        if(err)        {
            res.write("Connecting to Database Failed");
            res.end();        }
        updateDocument(db, req.body, function() {
            res.write("Successfully Registered");
            res.end();        });    });
    var id=req.body.id2;
    var item={fname:req.body.fn,lname:req.body.ln,email:req.body.ml};
    var updateDocument = function(db, data, callback) {
        db.collection('name').updateOne({"fname":id},{$set:item}, function(err, result) {
            if(err)            {
                res.write("Registration Failed");
                res.end();            }
            console.log("Updated Record");
            callback();        });    };})
app.post('/delete', function(req, res) {
    var id = req.body.id1;
    MongoClient.connect(url, function(err, db) {
        if(err)        {
            res.write("Registration Failed");
            res.end();        }
        db.collection('name').deleteOne({"fname": id}, function(err, result) {
            res.write("Successfully Deleted");
            res.end();
            console.log('Item deleted');        });});});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Application Running at http://%s:%s", host, port) })
