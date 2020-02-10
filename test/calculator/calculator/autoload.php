<?php

include 'include/request.php';

spl_autoload_register('AutoLoader');
	function AutoLoader($classname)
{
	$classPath = 'include/classes/';
	$classExtension = '.php';
	$fullClassPath = $classPath . $classname . $classExtension;

	if(!file_exists($fullClassPath))
	{
		return false;
	}
	else
	{
	include_once $fullClassPath;
	}

}