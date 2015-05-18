<?php 
    $dsn = "mysql:host=*confidential*;dbname=confidential";
    $user = "confidential";
    $password = "confidential";
        
    try {
        $db = new PDO( $dsn, $user, $password );
    } catch ( PDOException $e ) {
        $error_message = $e->getMessage();
        echo $error_message;
    }
?>