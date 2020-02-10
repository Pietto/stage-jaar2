<?php 
header("Content-Type: text/html; charset=UTF-8");

$conpt1 = '<script>console.log(\'';
$conpt2 = '\');</script>';

$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "tickets_heremaps_trial";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//define the charset to overcome unrecornized symbols
$conn->set_charset("utf8");
//check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
//executes following code when connected succesfully
//query send to the database
$sql = 'SELECT * FROM `tickets` ORDER BY RAND() LIMIT 5';
$result = $conn->query($sql);

//hold a reference of the object
$tickets = [];

if ($result->num_rows > 0)
{
	//pushes returned data into object
    while($row = $result->fetch_assoc())
    {
    	$tickets[] = $row;
    }
}
//executes following code when no rows are returned
else
{
    echo $conpt1 . "0 results" . $conpt2;
}

$conn->close();