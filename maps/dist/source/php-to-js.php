<script charset="UTF-8" type='text/javascript'>
    //this document converts the object in php to an object in javascript, called tickets
    <?php
    
	header("Content-Type: text/html; charset=ISO-8859-1");

    $tickets = json_encode($tickets);
	echo "var tickets = " . $tickets . ";\n";

    //create and fill arrays
    // $IdData = json_encode($IdData);
    // $productData = json_encode($productData);
    // $longitude = json_encode($longitude);
    // $latitude = json_encode($latitude);
    // $brand = json_encode($brand);
    // $model = json_encode($model);
    // $postal_code = json_encode($postal_code);
    // $country = json_encode($country);
    // $city = json_encode($city);

    //push PHP arrays to the html for javascript compatibility
    // echo "var IdData = " . $IdData . ";\n";
    // echo "var productData = " . $productData . ";\n";
    // echo "var longitude = " . $longitude . ";\n";
    // echo "var latitude = " . $latitude . ";\n";
    // echo "var brand = " . $brand . ";\n";
    // echo "var model = " . $model . ";\n";
    // echo "var postal_code = " . $postal_code . ";\n";
    // echo "var country = " . $country . ";\n";
    // echo "var city = " . $city . ";\n";
    ?>
</script>