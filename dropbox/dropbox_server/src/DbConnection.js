var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	/*var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'Pass@1234',
	    database : 'dropbox',
	    port	 : 3306
	});
	return connection;*/

	 var connection = mysql.createPool({
	//details
	connectionLimit : 100,
	host : 'localhost',
	user : 'root',
	password : 'Pass@1234',
	database : 'dropbox',
	port	 : 3306	
});
	 return connection;
}


function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	/*connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();*/
//var connection=getConnection();
	 connection.getConnection(function(error,temp_connection){
		if(!!error)
		{
			temp_connection.release();
			console.log("ERROR: " + err.message);
		}
		else
		{
			console.log('Connected');

			temp_connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
		}

	});
}	

function insertData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	/*var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();*/
var connection=getConnection();
		connection.getConnection(function(error,temp_connection){
		if(!!error)
		{
			temp_connection.release();
			console.log("ERROR: " + err.message);
		}
		else
		{
			console.log('Connected');

			temp_connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
		}

	});
}	

function insertFile(callback,sqlQuery){
	
	/*console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();*/
var connection=getConnection();
		connection.getConnection(function(error,temp_connection){
		if(!!error)
		{
			temp_connection.release();
			console.log("ERROR: " + err.message);
		}
		else
		{
			console.log('Connected');

			temp_connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
		}

	});
}

exports.fetchData=fetchData;
exports.insertData=insertData;
exports.insertFile=insertFile;
