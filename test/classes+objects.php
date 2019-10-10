<!DOCTYPE html>
<html>
<head>
	<title>classes/objects</title>
</head>
<body>
	<?php
	class person
	{
		public $firstname;
		public $lastname;
		public $age;

		public function __construct($firstname, $lastname, $age)
		{
			$this->firstname = $firstname;
			$this->lastname = $lastname;
			$this->age = $age;
		}

		public function greet()
		{
			return 'hello, my name is ' . $this->firstname . ' ' . $this->lastname . ' and i am ' . $this->age . ' years old.';
		}
	}

	$me = new person('Pieterjan','van Dijk','12');

	echo $me->greet();

	?>
</body>
</body>
</html>