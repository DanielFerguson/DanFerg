<?php
include('./secret.php');

if (isset($_REQUEST['request'])) {
    $request = $_REQUEST['request'];
    
    switch ($request) {
        case 'get_speeds':
            // Hourly Speeds
            if ($_REQUEST['timespan'] == 'hourly') {
                $connection = "host=". DB_HOST . " port=" . DB_PORT . " dbname=" . DB_DBNM . " user=" . DB_USER . " password=" . DB_PASS;
    
                $db = pg_connect($connection);
                
                if (!$db) {
                    die('Error: Could not connect to the database.');
                }
    
                $sql = 'SELECT * FROM speeds_total_hourly';
    
                $ret = pg_query($db, $sql);
                $result = pg_fetch_all($ret);
    
                $json_object = json_encode($result);
    
                echo($json_object);
            }
            break;

        case 'get_current_speed':
            $connection = "host=". DB_HOST . " port=" . DB_PORT . " dbname=" . DB_DBNM . " user=" . DB_USER . " password=" . DB_PASS;
            $db = pg_connect($connection) or die('Error: Could not connect to the database.');
            
            $sql_current_speed = 'SELECT (download / 1000000) as download_speed, (upload / 1000000) as upload_speed, time FROM speed_test ORDER BY time DESC LIMIT 1';
            $current_speed_return = pg_query($db, $sql_current_speed);
            $current_speed_result = pg_fetch_all($current_speed_return);
            $current_speed_object = json_encode($current_speed_result);

            echo($current_speed_object);
            break;
        
        case 'example':
            echo('Yay, you reached it!');
            break;

        default:
            echo('Error!');
            break;
    }
}

?>