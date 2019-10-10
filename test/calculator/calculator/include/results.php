<?php

	$result = new calculator($no1, $operator, $no2);
	echo $result->getLine();
	echo $result->result();

	echo $result->error();

?>