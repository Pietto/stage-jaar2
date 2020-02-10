var result = document.getElementById('sum');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var resultP = document.getElementById('resultP');

var usedfraction = false;
var numericvalue = false;
var fFirst = false;
var dotUsed = [false,false];

function AddNumber(number){
	fFirst = true;
	if(number == '.')
	{
		if(dotUsed[0] == false)
		{
			dotUsed[0] = true;
			dotUsed[1] = true;
		}else
		{
			alert('u mag maar één (1) punt (.) gebruiken');
			number = '';
		}
	}
	if(number == '-')
	{
		if(dotUsed[1] == false)
		{
			dotUsed[1] = true;
		}else
		{
			alert('u mag maar één (1) min-teken (-) gebruiken');
			number = '';
		}
	}
	if(usedfraction == false)
	{
		var lastresult = result.value;
		result.value = lastresult+number;
		input1.value = lastresult+number;
	}
	else if(usedfraction == true)
	{
		var lastresult = result.value;
		if(numericvalue == false)
		{
			lastresult = lastresult.replace(/[0-9.]/g,"");
			lastresult = lastresult.replace('+','');
			lastresult = lastresult.replace('-','');
			lastresult = lastresult.replace('-','');
			lastresult = lastresult.replace(':','');
			lastresult = lastresult.replace('x','');
		}
		result.value = lastresult+number;
		input3.value = lastresult+number;
		numericvalue = true;
	}
	else
	{
		alert('something went wrong')
	}
}

function AddFactor(fraction)
{
	if(fFirst == false && resultP.innerHTML != null)
	{
		var secondResult = getSecondResult(resultP.innerHTML);
		var lastresult = secondResult;
		input1.value = lastresult;
		input2.value = fraction;
		usedfraction = true;
	}
	else if(usedfraction == true)
	{
		var lastresult = result.value;
		lastresult = lastresult.replace('+','');
		lastresult = lastresult.replace('-','');
		lastresult = lastresult.replace(':','');
		lastresult = lastresult.replace('x','');
		result.value = lastresult+fraction;
		input2.value = fraction;
	}
	else
	{
		var lastresult = result.value;
		result.value = lastresult+fraction;
		input2.value = fraction;
		usedfraction = true
		dotUsed = [false,false];
	}
}

function getSecondResult(line)
{
    return line.split('=')[1];
}

/*//check for PHP error message
var phpError = document.getElementsByTagName('table')[0];
if(phpError != '' || phpError != null){
	//hides PHP error message
	phpError.style.display= 'none';
}*/