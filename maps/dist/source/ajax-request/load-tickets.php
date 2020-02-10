<?php
include 'request.php';


$conpt1 = '<script>console.log(\'';
$conpt2 = '\');</script>';

$sql = "SELECT * FROM `tickets` ORDER BY RAND() LIMIT 25";
$result = mysqli_query($conn, $sql);

$tickets = [];


if ($result->num_rows > 0)
{
   //pushes product id's into array
   while($row = $result->fetch_assoc())
   {
     $tickets[] = $row;
   }
   echo json_encode($tickets);
}
//executes following code when no rows are returned
else
{
   echo $conpt1 . "0 results" . $conpt2;
}

$conn->close();
?>