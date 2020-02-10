<?php

if($no1 && $operator && $no2)
{
	echo '<script>console.log("results.php reached")</script>';

	$number1 = new Number($no1);

	$operator = new MyString($operator);

	$number2 = new Number($no2);
	$result = new calculator($number1, $operator, $number2);
	// echo $operator;
	// die();
	echo $result->getLine();
	echo $result->result();

	// echo $number1->getValue();
	// echo $operator->getValue();
	// echo $number2->getValue();

	//echo $result->error();
}
else
{
	echo 'geen inhoud';
}
	
?>