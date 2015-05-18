<?php 
    include ( 'myDatabase.php' );
    
    if ( !isset( $_GET[ 'school_id' ] ) ) {
        $sch_id = 1;
    } else {
        $sch_id = $_GET[ 'school_id' ];
    }

    /*--------------DISPLAY TABLE'S SCHOOL NAME------*/
    $display_query = "SELECT *
                     FROM myschools
                     WHERE school_id = '$sch_id'";
                     
    $display_name = $db->query( $display_query );
    $display_name = $display_name->fetch();
    
    /*--------GET SCHOOLS BY NAME-----------*/
    $school_query = "SELECT *
                     FROM myschools";
                     
    $school_result = $db->query( $school_query );
    
    /*----------GET COURSES ACCORDING TO SCHOOL ID---------*/
    $query = "SELECT className, year
              FROM myclasses
              WHERE school_id = '$sch_id'
              ORDER BY year";
              
    $courses_result = $db->query( $query );
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>classes.php</title>
        <meta charset="utf-8" />
        <link type="text/css" rel="stylesheet" href="../designCSS/classes.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <nav>
            <ul class="navList">
                <li><a href="../index.html">Home</a></li>
                <li><a href="US.html">Living in the U.S.</a></li>
                <li><a href="computerScience.html">Computer Science as a career</a></li>
                <li><a href="">Classes</a></li>
            </ul>
        </nav>
        <ul class="school-names">
        <?php foreach( $school_result as $row ) : ?>
            <li><a href="?school_id=<?php echo $row[ 'school_id' ]; ?>"><?php echo $row[ 'school_name' ]; ?></a></li>
        <?php endforeach; ?>
        </ul>
        
        <h1 class="current-school"><?php echo $display_name[ 'school_name' ]; ?></h1>
        
        <table class="table-content">
            <tr class="column-names">
                <th>COURSE</th>
                <th>YEAR</th>
            <tr/>
            <?php foreach( $courses_result as $courses_row ): ?>
            <tr>
                <td class="class-names"><?php echo $courses_row[ 'className' ]; ?></td>
                <td class="year"><?php echo $courses_row[ 'year' ]; ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
    </body>
</html>