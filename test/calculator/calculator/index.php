<?php 
	include 'autoload.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Calculator</title>
	<link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>
	<form id='form' method="POST" action="">
		<div id='result-div'>
			<input name='result' id='sum' type="text" readonly value="">
		</div>
		<div id='inline'>
			<div id='numbers-div'>
				<?php
					for($i=1; $i<=9; $i++){
						echo "<input class='numbers' onclick='AddNumber(".$i.")' id='button".$i."' type='button' value='".$i."'>";
					}
				?>
				<input class='numbers' onclick='AddNumber("-")' id='button-empty' type='button' value='-'>
				<input class='numbers' onclick='AddNumber(0)' id='button0' type='button' value='0'>
				<input class='numbers' onclick='AddNumber(".")' id='buttonP' type='button' value='.'>
			</div>
			<div id='factors-div'>
				<?php
					$fraction = array('+','-',':','x');
					for($i=0; $i<4; $i++){
						echo '<input onclick="AddFactor(\''.$fraction[$i].'\')" type="button" name="'.$fraction[$i].'" id="'.$fraction[$i].'" value="'.$fraction[$i].'">';
					}
				?>
			</div>
		</div>
		<div id='send-div'><input type="submit"></div>
		<div id='input-result'>
			<input name='num1Inserted' class='resultInputs' id='input1' type='text' readonly>
			<input name='calInserted' class='resultInputs' id='input2' type='text' readonly>
			<input name='num2Inserted' class='resultInputs' id='input3' type='text' readonly>
		</div>
	</form>

	<div id='result'>
		<p id='resultP'><?php include 'include/results.php' ?></p>
	</div>

	<script type="text/javascript" src='script/script.js'></script>
	<script type="text/javascript" src='script/keys.js'></script>
</body>
</html>