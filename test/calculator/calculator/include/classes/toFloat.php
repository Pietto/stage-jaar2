<?php

class toFloat			//name -> number toFloat == functie
{
	private $number1;
	function __construct()
	{
		echo '<script>console.log("\"__construct\" in \"class toFloat\" has been reached");</script>';
		// $test = $this->test($test);
		return $this->number1;
	}

	public function test($argument)
	{
		if(!is_numeric($argument))
		{
			echo "<script>console.log(\"\$argument ($argument) is not numeric\");</script>";
		}
		else
		{

			$this->number1 = $argument;
			return $this->number1;
		}
	}
}

?>