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
    <div id="app" class="container">
        <div class="row">
            <div class="card col-12  mt-5">
                <div class="card-body">
                    <h4>{{ message }} </h4> <img src="https://img.icons8.com/dusk/64/000000/home.png" style="height: 30px; margin-bottom: .5rem;"> 
                </div>            
            </div>
            <div class="card col-12 mt-5">
                <div class="card-body">
                    <line-chart></line-chart>
                </div>    
            </div>
        </div>
    </div>


    <script>
        Vue.component('line-chart', {
            extends: VueChartJs.Line,
            data () {
                return {
                    speed_tests: null,
                    labels: [],
                    data_array: [],
                }
            },
            mounted () {
                axios
                    .get('./server/api.php', {
                        params: {
                            request: 'get_speeds_hourly',
                            timespan: 'hourly'
                        }
                    })
                    .then(response => {
                        console.log(response.data)

                        response.data.forEach(element => {
                            this.labels.push(element.hour + "hr, " + element.day + "/" + element.month)
                            this.data_array.push(parseFloat(element.download))
                        });

                        this.speed_tests = response.data;
                    })
                    .then(() => {
                        // Render Chart
                        this.renderChart(
                            {
                                labels: this.labels,
                                datasets: [
                                    {
                                        label: 'Speed Tests',
                                        backgroundColor: '#f87979',
                                        data: this.data_array
                                    }
                                ]
                            }, 
                            {
                                responsive: true, 
                                maintainAspectRatio: false
                            }
                        )
                    })
                
                
            }
        })
    
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Welcome'
            }
        })
    </script>
</body>
</html>
