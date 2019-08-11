<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hi! What's your name?</title>

  <?php include 'scripts/dependencies.inc.php'; ?>
</head>

<body>

  <!-- TODO: Hookup CV -->
  <!-- TODO: Finish Skills -->
  <!-- TODO: Make images for projects -->
  <!-- TODO: Double check I have all projects -->
  <!-- TODO: Text Formatting for important parts -->

  <div id="app">
    <v-app>
      <v-content>
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-layout align-center column justify-center>
            <h1 class="display-4 font-weight-thin mb-4">Hi! <img src="https://img.icons8.com/color/96/000000/so-so.png"></h1>
            <h2 class="display-2">I'm Dan Ferg!</h2>
          </v-layout>
        </v-parallax>

        <!-- My Work -->
        <v-container grid-list-lg class="mt-12 px-5">
          <h3 class="display-2 mb-5 text-center font-weight-light">My Work</h3>

          <v-item-group>
            <v-layout wrap>
              <v-flex v-for="(project, index) in projects" :key="index" xs12 sm6 md3>
                <v-item>
                  <v-card class="d-flex align-center" ripple height="200">
                    <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                      <v-card-title class="align-end fill-height">{{ project.title }}</v-card-title>
                    </v-img>
                  </v-card>
                </v-item>
              </v-flex>
            </v-layout>
          </v-item-group>
        </v-container>

        <!-- My Skills -->
        <v-container grid-list-lg class="mt-12 px-5">
          <h3 class="display-2 mb-4 text-center font-weight-light">My Skills</h3>

          <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <v-tab v-for="(item, index) in tabs" :key="index">
              {{ item.title }}
            </v-tab>
          </v-tabs>

          <v-container grid-list-md>
            <v-layout row wrap align-center class="text-center">
              <v-flex v-for="(tab, index) in tabs[tab]" :key="index" xs12 md4>
                <v-item>
                  {{ tab }}
                </v-item>
              </v-flex>
            </v-layout>
          </v-container>
        </v-container>

        <!-- About Me -->
        <v-container grid-list-lg class="mt-12 px-5">
          <h3 class="display-2 mb-4 text-center font-weight-light">About Me</h3>

          <p>I'm a Software Engineer & Designer, working at the Center of eResearch and Digital Innovation.</p>
          <p>When I'm not working, I am studing at Swinburne University of Technology studing a Bachelor of Computer Science (Professional), majoring in Software Development.</p>
          <p>I have been developing solutions since 2011 when my passions for technology and helping people led me to discover Ruby (on Rails) and fed my interest in creating websites, initially a social media website. Since then, I have progressed to languages including C# (.NET, ASP, Xamarin), Web Stack, PHP, Dart Python (various libraries) and Low Level languages such as C and Assembly (RISC-V), amongst others.</p>

          <h4 class="display-1 mb-4 text-center font-weight-light">My Interests</h4>
          <p class="text-center">
            <span v-for="(interest, index) in interests" :key="index">{{ interest }} </span>
          </p>
        </v-container>

        <!-- What I've Been Up To -->
        <v-container grid-list-lg class="mt-12 px-5">
          <h3 class="display-2 mb-4 text-center font-weight-light">What I've Been Up To</h3>

          <v-timeline>
            <v-timeline-item v-for="(event, index) in events" :key="index" :icon="event.icon" fill-dot>
              <span slot="opposite">{{ event.opposite }}</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">{{ event.title }}</v-card-title>
                <v-card-text v-if="event.text">
                  {{ event.text }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>

        <!-- Contact Me -->
        <v-container grid-list-lg class="mt-12 px-5">
          <h3 class="display-2 mb-4 text-center font-weight-light">Contact Me</h3>

          <p class="text-center">
            Got a killer idea? Want to work with me? <br>
            Drop us a line!
          </p>

          <h4 class="display-1 text-center font-weight-light">hi@danferg.com</h4>

          <p class="mt-5 text-center">Or find me elsewhere</p>
          <v-item-group>
            <v-container grid-list-md>
              <v-layout row wrap align-center class="text-center">
                <v-flex v-for="link in links" :key="link.alt" xs12 md4>
                  <v-item>
                    <a :href="link.linkto" target="_blank">
                      <img :src="link.img" :alt="link.alt">
                    </a>
                  </v-item>
                </v-flex>
              </v-layout>
            </v-container>
          </v-item-group>
        </v-container>

      </v-content>
    </v-app>
  </div>

  <script>
    new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data: {
        projects: [{
            title: 'Our Good News',
            img: 'icons-ados.jpg'
          },
          {
            title: 'Our Memories',
            img: 'icons-memories.jpg'
          },
          {
            title: 'Stroke Rehabilitation',
            img: 'icons-stroke.jpg'
          },
          {
            title: 'Pathways',
            img: 'icons-pathways.jpg'
          },
          {
            title: 'Swin Pharma',
            img: 'icons-pharma.jpg'
          },
          {
            title: 'Time Card',
            img: 'icons-time.jpg'
          },
          {
            title: 'A Typist For Me',
            img: 'icons-typist.jpg'
          },
          {
            title: 'Docket Today',
            img: 'icons-docket.jpg'
          },
        ],
        tabs: [{
          title: 'Languages',
          items: [
            'PHP',
            'Dart',
            'Python',
            'C#',
            'Assembly (RISC-V)',
            'C / C++',
            'Javascript',
            'Java'
          ]
        }, {
          title: 'Frameworks',
          items: [
            'Vue',
            'Laravel',
            'Flutter',
            'Xamarin',
            'Flask',
            '.NET Core',
            '.NET',
          ]
        }],
        tab: null,
        events: [{
            title: 'Graduated Highschool',
            text: 'I graduated my VCE studies from Ballarat Grammar, scoring well in Software Development, Systems Engineering & Product Design & Technology.',
            opposite: '2016, Dec',
            icon: 'mdi-school'
          },
          {
            title: 'Started University',
            text: 'I started my Bachelor of Computer Science (Prof.) at Swinburne University of Technology, majoring in Software Development and Internet of Things (IoT).',
            opposite: '2017, March - Present',
            icon: 'mdi-school'
          },
          {
            title: 'Started working at Lawrencia Cycles',
            text: 'I worked as a Sales Representative and Mechanic at Lawrencia Cycles - fulfilling both my love of bikes and helping customers.',
            opposite: '2017, March - 2018, Nov',
            icon: 'mdi-bike'
          },
          {
            title: 'Started working at CeRDI',
            text: 'I\'m a Technical Officer at the Center for eResearch and Digital Innovation, working on a number of projects focused on spatial data.',
            opposite: '2019, Feb - Present',
            icon: 'mdi-laptop'

          }
        ],
        interests: [
          'Electrical Engineering,',
          'Disability Specific Products,',
          'Agriculture Automation,',
          'Remote Sensor Monitoring,',
          'Fast Prototyping / 3D Printing,',
          'Cross Platform Development,',
          'Embedded Systems,',
          'API & Service Development,',
          'Internet of Things,',
          'Website Development,',
          'Machine Learning,',
          'Data Science,',
          'Portrait Photography,',
          'Event Photography,',
          'Promotional Material,',
          'Video Editing & VFX,',
          'Arduino,',
          'Raspberry Pi,',
          'Beaglebone,',
          'Network Security,',
          'Game Development,',
          'Road & Gravel Cycling,',
          'Teaching,',
          'Horse Riding & Training,',
          'Travelling'
        ],
        links: [{
            img: 'https://img.icons8.com/nolan/64/000000/linkedin.png',
            linkto: 'https://au.linkedin.com/in/TheDanielFerguson',
            alt: 'LinkedIn'
          },
          {
            img: 'https://img.icons8.com/nolan/64/000000/github.png',
            linkto: 'https://github.com/DanielFerguson',
            alt: 'GitHub'
          },
          {
            img: 'https://img.icons8.com/nolan/64/000000/twitter.png',
            linkto: 'https://twitter.com/thedannyferg',
            alt: 'Twitter'
          }
        ]
      }
    })
  </script>
</body>

</html>