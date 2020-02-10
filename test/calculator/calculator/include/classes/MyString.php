<?php
	
	class MyString
	{
		private $value;
		private $length;

	    public function __construct($str)
	    {
	    	if(is_string($str))
	    	{
				$this->value = $str;
	        	$this->length = strlen($str);
	    	}
	    	else
	    	{
	    		throw new exception("$str is not a string");
	    	}    
	    }

	    public function __Get($property)
	    {
	    	$function = 'get'.ucfirst($property);
	    	if (method_exists($this,$function))
	    	{
	    		return $this->$function();
	    	}
	    	else
	    	{
	    		echo "method $property doesn't exist";
	    	}
	    }

	    // public function __toString()
	    // {
	    //     return $this->value;
	    // }

	    public function rtrim($mask)
	    {
	    	return rtrim($this->value, $mask);
	    }

	    public function getValue()
	    {
	    	return $this->value;
	    }

	    public function ltrim($mask)
	    {
	    	return ltrim($this->value, $mask);
	    }

	    public function getLength()
	    {
	    	return $this->length;
	    }

	    public function setValue($str)
	    {
	    	$this->__construct($str);
	    }
	}

	// $x = new String("ik gebruik de verkeerde haakjes");
	// echo $x->value;
?>