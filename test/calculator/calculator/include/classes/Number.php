<?php
	// class Number
	// {
	// 	private $num;
	// 	public function __construct($num)
	// 	{
	// 		$num = 'abc';
	// 		$this->num = $num;
	// 		return $this->num;
	// 	}

	// 	/*function __toString()
	// 	{
	// 		return $this->num;
	// 	}*/

	// 	public function __Get($property)
	//     {
	//     	$property = ucfirst($property);
	//     	if (method_exists($this, "get".$property))
	//     	{

	//     	}
	//     	else
	//     	{
	//     		echo "method $property doesn't exist";
	//     	}
	//     }
	// }
			class Number
			{
		private $value;
		private $length;

	    public function __construct($num)
	    {/*
	    	if(is_numeric($num))
	    	{*/
				$this->value = $num;
	        	// $this->length = strlen((String) $num);
	        	$this->value = $this->value;
	        	/*
	    	}
	    	else
	    	{
	    		throw new exception('$num is not a num');
	    	}    */
	    }

	    public function __Get($property)
	    {
	    	$property = ucfirst($property);
	    	if (method_exists($this, "get".$property))
	    	{

	    	}
	    	else
	    	{
	    		echo "method $property doesn't exist";
	    	}
	    }

	    /*public function __toString()
	    {
	        return $this->value;
	    }*/

	    public function getValue()
	    {
	    	return $this->value;
	    }

	    public function getLength()
	    {
	    	return $this->length;
	    }
	}

	/*$x = new Number(10);
	$x->setValue("ik gebruik de verkeerde haakjes");
	echo $x->getValue();
	echo '<br>'.$x->length;*/
?>