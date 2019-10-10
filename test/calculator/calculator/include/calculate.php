<?php

    class calculator {
        private $cal1;
        private $operator;
        private $cal2;
        private $abc;
        private $error;

        function __construct($number1, $factor, $number2)
        {
            try {
                $this->cal1 = $this->setCal1($number1);
                $this->operator = $this->setOperator($factor);
                $this->cal2 = $this->setCal2($number2);
            } catch(\Exception $e) {
                print('<h1>HOI</h1>');
                print($e->getMessage());
            }

        }

        function setCal1($number1)
        {
            $this->cal1 = $number1;
            $number1 = (int)$number1;
            if($number1 != 0) {
                return $this->cal1;
            }

            throw new \Exception('Not allowed');         
        }

        function setCal2($number2)
        {
            try
            {
                $this->cal2 = $number2;
                $number2 = (int)$number2;
                switch ($number2)
                {
                    case null:
                        throw new Exception('$this->cal2 == null', 1);
                    break;
                    case ($this->operator == ':' && $this->cal2 == 0):
                        throw new Exception('$this->cal2 == 0 AND $this->operator == \':\'', 2);
                        break;
                    default:
                        return $this->cal2;
                }
            }
            catch(Exception $ex)
            {
                echo '<script>console.log("';
                echo 'Message: ' .$ex->getMessage(). '  || Number: ' . $ex->getCode();
                echo '");</script>';
                switch ($ex->getCode())
                {
                    case 1 or 2:
                        $this->error = $ex->getCode();
                        break;
                }
            }
        }
        
        function setOperator($factor)
        {
            $this->operator = $factor;
            switch ($factor)
            {
                case null:
                    echo "|not allowed|";
                break;
                default:
                    return $this->operator;
                break;
            }
        }

        public function getLine() {
            switch ($callout) {
                case '':
                    $callout = $this->cal1. $this->operator. $this->cal2 . '=' ;
                    break;
                
                default:
                    $callout = $callout;
                    break;
            }
            return $callout;
        }   

        public function result() 
        {
            try
            {
                // $object = new 
                switch ($this->operator)
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
                }
            }

            catch(Exception $ex)
            {
                switch ($this->operator)
                {
                    /*case ':':
                        switch ($this->cal2)
                        {
                            case $this->cal2 <= 1:
                                echo '<script>alert("';
                                echo 'getal mag niet kleiner dan 1 zijn';
                                $callout = 'asdf';
                                echo '");</script>';
                                break;
                            default:
                                $result = $this->cal1 / $this->cal2;
                                break;
                        }
                        break;*/
                }
                echo '<script>console.log("';
                echo 'Message: ' .$ex->getMessage(). '  || Number: ' . $ex->getCode();
                echo '");</script>';
            }
            finally
            {
                return $result;
                /*return $callout;*/
            }
        }
        public function error()
        {
            switch ($this->error)
            {
                case 1:
                    echo '<script>console.log("Cause : no input");</script>';
                    echo '<script>setTimeout(function(){document.getElementById(\'resultP\').innerHTML=\'\'}, 1);</script>';
                    break;
                case 2:
                    echo '<script>setTimeout(function(){document.getElementById(\'resultP\').innerHTML=\'\'}, 1);</script>';
                    break;
                default:
                    # code...
                    break;
            }
        }
    }

?>