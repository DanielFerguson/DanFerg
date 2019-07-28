<?php
include('./secret.php');

if (isset($_REQUEST['request'])) {
    $request = $_REQUEST['request'];
    
    switch ($request) {
        case 'get_speeds_hourly':
            if ($_REQUEST['timespan'] == 'hourly') {
                $connection = "host=". DB_HOST . " port=" . DB_PORT . " dbname=" . DB_DBNM . " user=" . DB_USER . " password=" . DB_PASS;
    
                $db = pg_connect($connection);
                
                if (!$db) {
                    die('Error: Could not connect to the database.');
                }
    
                $sql  = 'SELECT * FROM speeds_total_hourly';
    
                $ret = pg_query($db, $sql);
                $result = pg_fetch_all($ret);
    
                $json_object = json_encode($result);
    
                echo($json_object);
            }

            break;
        
        case 'example':
            echo('Yay, you reached it!');
            break;

        default:
            echo('Error!');
            break;
    }
}

function getData() {
    $connection = "host=". DB_HOST . " port=" . DB_PORT . " dbname=" . DB_DBNM . " user=" . DB_USER . " password=" . DB_PASS;

    $db = pg_connect($connection);
    
    if (!$db) {
        die('Error: Could not connect to the database.');
    }

    $sql = "SELECT * FROM speed_test";

    $ret = pg_query($db, $sql);
    $result = pg_fetch_all($ret);

    $json_object = json_encode($result);

    return $json_object;
}

?>