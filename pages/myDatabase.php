<?php 
    $dsn = "mysql:host=sql1.njit.edu;dbname=mm525";
    $user = "mm525";
    $password = "cuZlv5b8q";
        
    try {
        $db = new PDO( $dsn, $user, $password );
    } catch ( PDOException $e ) {
        $error_message = $e->getMessage();
        echo $error_message;
    }
?>