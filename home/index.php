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
        <div class="row mt-5">
            <div class="col-12">
                <h1 style="display: inline;">{{ message }} </h1> <img src="https://img.icons8.com/dusk/64/000000/home.png" style="height: 3rem; padding-bottom: 1rem;"> 
            </div>
        </div>

        <!-- Statistics -->
        <div class="row mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Evening Speeds</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Overall Average</h6>

                        <div class="card-text" v-if="avg_speeds_evening">
                            <h1 style="display: inline;">{{ avg_speeds_evening }}</h1>
                            <small>mbps</small>
                        </div>
                        
                        <!-- TODO -->
                        <div class="card-text" v-else>
                            <h1>--</h1>
                            <small>to be completed</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Current Speed</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Live Speeds</h6>

                        <div class="card-text" v-if="current_speeds">
                            <h1>{{ parseFloat(current_speeds.download_speed).toFixed(2) }}</h1>
                            <small>mbps</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">This Week</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Daily Average</h6>
                        
                        <div class="card-text" v-if="avg_speeds_this_week">
                            <h1 style="display: inline;">{{ avg_speeds_this_week }}</h1>
                            <small>mbps</small>
                        </div>

                        <!-- TODO -->
                        <div class="card-text" v-else>
                            <h1>--</h1>
                            <small>to be completed</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- Visualisation -->
        <div class="row mt-5">
            <div class="card col-12">
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
                            request: 'get_speeds',
                            timespan: 'hourly'
                        }
                    })
                    .then(response => {
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
                message: 'Welcome',
                avg_speeds_evening: null,
                current_speeds: null,
                avg_speeds_this_week: null
            },
            mounted () {
                // Get Current Speeds
                axios
                    .get('./server/api.php', {
                        params: {
                            request: 'get_current_speed'
                        }
                    })
                    .then(response => {
                        console.log(response.data[0])
                        this.current_speeds = response.data[0]
                    })
                    .catch(error => console.log(error))
            }
        })
    </script>
</body>
</html>
