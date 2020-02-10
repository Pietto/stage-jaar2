<!DOCTYPE html>
<html>
<head>
	<title>main</title>
</head>
<body>

</body>
</html>


<?php

	$test1 = new Test('abc');
	echo $test1->feedBack();
	$test2 = new testagain('abc');
	echo $test2;

	class Test
	{
		private $value;

		function __construct(testagain $val)
		{
			$a = 'abc';
			$this->value = $a;
			return $this->value;
		}

		public function feedBack()
		{
			$a = 'abc';
			return $a;
		}
	}

	class testagain
	{
		private $parameter;

		function __construct($par)
		{
			$par = 'abc';
			if(is_string($par)==true)
			{
				$par = 'abcT';
				$this->parameter = $par;
				echo $this->parameter;
			}else{
				$par = 'abcF';
				$this->parameter = $par;
				echo $this->parameter;
			}
			// $b = 'abc';
			// return $b;
		}
	
		public function __toString()
		{
			return $this->parameter;
		}
	}

?>