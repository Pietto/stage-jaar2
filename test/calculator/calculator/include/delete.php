<?php
                if($this->operator == '+') 
                {
                    $result = $this->cal1 + $this->cal2;
                }
                else if($this->operator == '-') 
                {
                    $result = $this->cal1 - $this->cal2;
                }
                else if($this->operator == ':') 
                {
                    if($this->cal2 == 0) ?
                    {
                        throw new Exception("Error Processing Request", 1);
                    }
                    else
                    {
                        $result = $this->cal1 / $this->cal2;
                    }
                }
                else if($this->operator == 'x') 
                {
                    $result = $this->cal1 * $this->cal2;
                }
?>

<?php
                switch ($operator)
                {
                    case '+':
                        $result = $this->cal1 + $this->cal2;
                        break;
                    case '-':
                        $result = $this->cal1 - $this->cal2;
                        break;
                    case ':':
                        $result = $this->cal1 / $this->cal2;
                        break;
                    case 'x':
                        $result = $this->cal1 * $this->cal2;
                        break;
                    default:
                        echo 'mistake';
                        break;
                }





?>