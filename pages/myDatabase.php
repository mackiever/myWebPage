<?php 
    $dsn = "mysql:host=sql*********;dbname=******";
    $user = "*******";
    $password = "********";
        
    try {
        $db = new PDO( $dsn, $user, $password );
    } catch ( PDOException $e ) {
        $error_message = $e->getMessage();
        echo $error_message;
    }
?>