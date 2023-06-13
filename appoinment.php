<?php

 $server="localhost";
 $user="root";
 $pass="";
 $db="appoint";
 $name=$_POST['name'];
 $email=$_POST['email'];
 $number=$_POST['number'];
 $datetime=$_POST['date'];
 
 $obj=new mysqli($server,$user,$pass,$db);
 $str ="INSERT INTO visitors VALUES('$name','$email','$number','$datetime')";
 $obj->query($str);
 $obj->close();



  echo "<script>alert('Appoinment successfully');</script>";


 
?>
<html>
  <body>
    <a href="dental.php">BACK TO HOME</a>
</body>
</html>