<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>

    <?php include './server/scripts/dependencies.inc.php'; ?>
</head>
<body>
    <!-- TODO: 
            - Favicon 
    -->

    <div class="container">
        <div class="row">
            <div class="card col-6 offset-3 mt-5">
                <div class="card-body">
                    <h5>Speed Test</h5>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>    
            </div>
        </div>
    </div>


    <script>
        var data = null;
        
        var ctx = document.getElementById('myChart').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [20, 21, 22, 23],
                datasets: {
                    data: [3, 2, 4, 2]
                }
            },
        });

        axios.get('./server/api.php', {
                params: {
                    request: 'get_speeds',
                    timespan: 'hourly'
                }
            })
            .then(function (response) {
                data = response.data;
                console.log(data);
            })
    </script>
</body>
</html>