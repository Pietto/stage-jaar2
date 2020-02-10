<?php

$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "tickets_heremaps_trial";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$conn->set_charset("utf8");