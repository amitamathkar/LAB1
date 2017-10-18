var ejs = require("ejs");
var mysql = require('./mysql');

function signin(req,res) {
	ejs.renderFile('./views/signin.ejs',function(err, result) {
	   if (!err) {
	            res.end(result);
	   }
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function signup(req,res) {

	ejs.renderFile('./views/signup.ejs',function(err, result) {
	   if (!err) {
	            res.end(result);
	   }
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function afterSignIn(req,res)
{
	var getUser="select * from users where user_name='"+req.param("inputUsername")+"' and password='" + req.param("inputPassword") +"'";
	console.log("Query is:"+getUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				getAllUsers(req,res);
				
			}
			else {    
				
				console.log("Invalid Login");
				
			}
		}  
	},getUser);
}

function getAllUsers(req,res)
{
	var getAllUsers = "select * from users";
	console.log("Query is:"+getAllUsers);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				
				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);
			}
			else {    				
				console.log("No users found in database");
			}
		}  
	},getAllUsers);
}

function insertUser(req,res)
{
	var saveUser="insert into users(first_name,last_name,user_name,password,email_id,date_of_birth) values('"+req.param("inputFirstname")+"','"+req.param("inputLastname")+
				"','"+req.param("inputUsername")+"','" + req.param("inputPassword") +"','"+req.param("inputEmail") +"','"+req.param("inputDOB") +"')";
	console.log("Query is:"+saveUser );
	
	mysql.insertData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("Data inserted successfully");
			ejs.renderFile('./views/signin.ejs',function(err, result) {
		        if (!err) {
		            res.end(result);
		        }
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}  
	},saveUser);
}


exports.signin=signin;
exports.afterSignIn=afterSignIn;
exports.getAllUsers=getAllUsers;
exports.signup=signup;
exports.insertUser=insertUser;