document.onkeyup = function(key)
{
	for(i=0; i<10; i++)
	{
		if(key.which == [i+96])
		{
			AddNumber(i);
		}else if(key.which == [i+48])
		{
			AddNumber(i);
		}
	}
	if(key.which == 106)
	{
		AddFactor('x');
	}else if(key.which == 107)
	{
		AddFactor('+');
	}else if(key.which == 109)
	{
		AddFactor('-');
	}else if(key.which == 111)
	{
		AddFactor(':');
	}else if(key.which == 189)
	{
		AddNumber('-');
	}else if(key.which == 188 || key.which == 190)
	{
		AddNumber('.');
	}else if(key.which == 13)
	{
		document.getElementById("form").submit();
	}else if(key.which == 8)
	{
		scrap();
	}
}