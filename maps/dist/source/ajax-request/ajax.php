<?php
include 'request.php';
?>

<!DOCTYPE html>
<html>
<head>
   <title>my first ajax call</title>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
   <script type="text/javascript">
      $(document).ready(function(){
         var ticketCount = 2;
         setInterval(function(){
            ticketCount = ticketCount+2;
            $("#tickets").load("load-tickets.php", {
               newTicketCount: ticketCount//,
               //more code
            });
         }, 5000);
      });
   </script>

   <div id='tickets'>
   <?php
      $sql = "SELECT * FROM `tickets` LIMIT 2";
      $result = mysqli_query($conn, $sql);
      if(mysqli_num_rows($result)>0){
         while ($row = mysqli_fetch_assoc($result)){
            echo "<p>";
            echo $row['brand'] . ' ' . $row['model'];
            echo "</p>";
         }
      }else{
         echo "no rows returned";
      }
   ?>
   </div>
</body>
</html>