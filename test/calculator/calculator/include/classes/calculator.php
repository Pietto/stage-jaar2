<?php

class calculator
{
    private $cal1;
    private $operator;
    private $cal2;

    function __construct( Number $cal1, MyString $operator, Number $cal)
    {

        try
        {
            
            $this->setCal1($cal1->getValue());
            $this->setOperator($operator->getValue());
            $this->setCal2($cal->getValue());
            
        }
        catch(Exception $ex)
        {
            switch ($ex->getCode())
            {
                case 1:
                    if($this->operator == ':')
                    {
                        $errorMessage = '<b>infinite</b>';
                        echo '<script>'; 
                        echo ('console.log("'.$ex->getMessage().' || code '.$ex->getCode().'");');
                        echo 'setTimeout(function(){document.getElementById(\'resultP\').innerHTML=\'' . $errorMessage . '\'}, 1);';
                        echo '</script>';
                    }
                    break;
                case 2:
                    echo '<script>setTimeout(function(){document.getElementById("resultP").innerHTML=""}, 1000);</script>';             //fix 1000->0 OR 1000->0                      
                    break;
                default:
                    # code...
                    break;
            }
        }
    }

    public function getValue()
    {
        return $this->cal1;
    }

    private function setCal1($cal1)
    {
        $this->cal1 = $cal1;
        switch ($this->cal1) {
            case null or 0:
                throw new Exception("no input", 2);
                break;
            default:
                # code...
                break;
        }
    }

    private function setOperator($factor)
    {
        $this->operator = $factor;
    }

    
    public function __toString()                                        //fix
    {
        return $this->value;
        // </b> 10<script>console.log("public function __toString reached");</script>
    }

    private function setCal2($cal)
    {
        $this->cal2 = $cal;
        switch ($this->cal2)
        {
            case 0:
                throw new Exception('message: cal2 == 0',1);
            break;
        }
    }

    public function getLine()
    {
        $cal1 = $this->clean_item($this->cal1);                                                 //eerder cleanen
        $cal2 = $this->clean_item($this->cal2);
        $callout = $cal1 . ' <b>' . $this->operator . '</b> ' . $cal2 . ' <b>=</b> ' ;
        return $callout;
    }

    public function result()
    {
        switch ($this->operator)
        {
            case '+':
                $result = $this->cal1 + $this->cal2;
                break;
            case '-':
                $result = $this->cal1 - $this->cal2;
                break;
            case ':':
                if($this->cal2 === 0)
                {
                    throw new Exception("Error Processing Request", 1);
                }else
                {
                    $result = $this->cal1 / $this->cal2;
                }
                break;
            case 'x':
                $result = $this->cal1 * $this->cal2;
                break;
            default:
                # code...
                break;
        }
        $result = $this->clean_item($result);
        return $result;
    }

    private function clean_item($returnValue)
    {
        $returnValue = number_format($returnValue, 9, ',', '.');
        $returnValue = rtrim($returnValue, '0');
        $returnValue = rtrim($returnValue, ',');
        $returnValue = ltrim($returnValue, '0');
        return $returnValue;
    }
}

/*class test
{
    public function __toString()
    {
        return 666;
    }
}*/

// class toString
// {
//     private $returnValueTest;
//     function __construct($kaas)
//     {
//         $this->returnValueTest = $kaas;
//     }

//     public function echoKaas()
//     {
//         return $this->returnValueTest;
//     }
// }

// $f = new toString('kaas');
// echo $f; 

// class calculator {
//     private $cal1;
//     private $operator;
//     private $cal2;
//     private $abc;
//     private $error;

//     function __construct($number1, $factor, $number2)
//     {
//         try {
//             $this->cal1 = $this->setCal1($number1);
//             $this->operator = $this->setOperator($factor);
//             $this->cal2 = $this->setCal2($number2);
//         } catch(\Exception $e) {
//             print('<h1>HOI</h1>');
//             print($e->getMessage());
//         }

//     }

//     function setCal1($number1)
//     {
//         $this->cal1 = $number1;
//         $number1 = (int)$number1;
//         if($number1 != 0) {
//             return $this->cal1;
//         }

//         throw new \Exception('Not allowed');         
//     }

//     function setCal2($number2)
//     {
//         try
//         {
//             $this->cal2 = $number2;
//             $number2 = (int)$number2;
//             switch ($number2)
//             {
//                 case 0:
//                     throw new Exception('$this->cal2 == 0', 1);
//                 break;
//                 case ($this->operator == ':' && $this->cal2 == 0):
//                     throw new \Exception('$this->cal2 == 0 && $this->operator == \':\'', 2);
//                     break;
//                 default:
//                     return $this->cal2;
//             }
//         }
//         catch(Exception $ex)
//         {
//             echo '<script>console.log("';
//             echo 'Message: ' .$ex->getMessage(). '  || Number: ' . $ex->getCode();
//             echo '");</script>';
//             switch ($ex->getCode())
//             {
//                 case 1 or 2:
//                     $this->error = $ex->getCode();
//                     break;
//             }
//         }
//     }
    
//     function setOperator($factor)
//     {
//         $this->operator = $factor;
//        /* switch ($factor)
//         {
//             case null:
//                 echo "|not allowed|";
//             break;
//             default:*/
//                 return $this->operator;
//        /*     break;
//         }*/
//     }

//     public function getLine() {
//         switch ($callout) {
//             case '':
//                 $callout = $this->cal1. $this->operator. $this->cal2 . '=' ;
//                 break;
            
//             default:
//                 $callout = $callout;
//                 break;
//         }
//         return $callout;
//     }   

//     public function result() 
//     {
//         try
//         {
//             // $object = new 
//             switch ($this->operator)
//             {
//                 case '+':
//                     $result = $this->cal1 + $this->cal2;
//                     break;
//                 case '-':
//                     $result = $this->cal1 - $this->cal2;
//                     break;
//                 case ':':
//                     $result = $this->cal1 / $this->cal2;
//                     break;
//                 case 'x':
//                     $result = $this->cal1 * $this->cal2;
//                     break;
//             }
//         }

//         catch(Exception $ex)
//         {
//             switch ($this->operator)
//             {
//                 /*case ':':
//                     switch ($this->cal2)
//                     {
//                         case $this->cal2 <= 1:
//                             echo '<script>alert("';
//                             echo 'getal mag niet kleiner dan 1 zijn';
//                             $callout = 'asdf';
//                             echo '");</script>';
//                             break;
//                         default:
//                             $result = $this->cal1 / $this->cal2;
//                             break;
//                     }
//                     break;*/
//             }
//             echo '<script>console.log("';
//             echo 'Message: ' .$ex->getMessage(). '  || Number: ' . $ex->getCode();
//             echo '");</script>';
//         }
//         finally
//         {
//             return number_format($result);              //fix

//             /*return $callout;*/
//         }
//     }
//     public function error()
//     {
//         switch ($this->error)
//         {
//             case 1:
//                 echo '<script>console.log("Cause : no input");</script>';
//                 echo '<script>setTimeout(function(){document.getElementById(\'resultP\').innerHTML=\'\'}, 1);</script>';
//                 break;
//             case 2:
//                 echo '<script>setTimeout(function(){document.getElementById(\'resultP\').innerHTML=\'\'}, 1);</script>';
//                 break;
//             default:
//                 # code...
//                 break;
//         }
//     }
// }

?>