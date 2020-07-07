document.addEventListener('DOMContentLoaded', function (event) {
  var sidebar = new StickySidebar('.sidebar', {
    topSpacing: 20,
    bottomSpacing: 20,
    containerSelector: '.main-content',
    innerWrapperSelector: '.sidebar__inner'
  })
})

new Vue({
  el: '#app',
  data: {
    showMore: true,
    projects: [
      {
        title: 'HelpingHomes',
        image: 'assets/hh-map.jpg',
        description:
          'HelpingHomes is a free platform connecting evacuees to their local good samaritans, around Australia.',
        links: [
          {
            name: 'Website',
            url: 'https://helpinghomes.com.au'
          }
        ],
        tags: [
          'HelpingGroup',
          'Web',
          'Spatial',
          'AWS',
          'JS',
          'Vue',
          'Mapbox',
          'Lambda'
        ]
      },
      {
        title: 'SupportThem',
        image: 'assets/supportthem.svg',
        description:
          'SupportThem is a platform where consumers will be able to visually explore rural and regional communities and learn about what makes them so unique.',
        links: [
          {
            name: 'Read More',
            url: 'https://helping.group/initatives.html#support-them'
          },
          {
            name: 'Public Beta',
            url: 'https://supportthem.com.au'
          }
        ],
        tags: [
          'In Progress',
          'HelpingGroup',
          'Serverless',
          'AWS',
          'JS',
          'Vue',
          'Lambda',
          'Auth0',
          'CI/CD',
          'Cloudflare'
        ]
      },
      {
        title: 'OurMove',
        image: 'assets/ourmove.svg',
        description:
          'A central network that enables people to directly care for one another and post what they may need help with themselves.',
        links: [
          {
            name: 'Read More',
            url: 'https://helping.group/initatives.html#ourmove'
          }
        ],
        tags: [
          'Reworking',
          'HelpingGroup',
          'AWS',
          'JS',
          'Vue',
          'PHP',
          'Laravel',
          'Auth0'
        ]
      },
      {
        title: 'Traffic Flow Prediction Model',
        image: 'assets/melbourne.jpg',
        description:
          'Combining machine learning and web apps, the TFPM project was about creating accurate prediction of driving times between points. These predictions were based on VicRoads traffic data, rainfall, day of the week and more.',
        links: [
          {
            name: 'Source',
            url: 'https://github.com/DanielFerguson/TrafficFlowPrediction/'
          }
        ],
        tags: [
          'Machine Learning',
          'Client-side',
          'Tensorflow',
          'TFJS',
          'JS',
          'Python',
          'Mapbox',
          'Vue'
        ]
      },
      {
        title: 'RISCy-Pong',
        image: '',
        description:
          "I recreated the classic game, Pong, for the Raspberry Pi. I wrote the application using Assembly code for the Pi 3's RISC-V instruction set.",
        links: [
          {
            name: 'Source',
            url: 'https://github.com/DanielFerguson/RISCy-Pong'
          }
        ],
        tags: ['ARM', 'RISC-V', 'Assembly', 'Raspberry Pi']
      },
      {
        title: 'Innovative Land Index',
        image: 'assets/ili.jpg',
        description:
          'A proof of concept of how a holistic data-driven approach could be used to make better future planning decisions for land zoning.',
        links: [
          {
            name: 'Website',
            url: 'https://landindex.netlify.app'
          },
          {
            name: 'Source',
            url: 'https://github.com/DanielFerguson/Innovative-Land-Index'
          }
        ],
        tags: ['Hackathon', 'QGIS', 'Spatial', 'Leaflet', 'Research']
      },
      {
        title: 'Stroke Rehabilitation Board',
        image: 'assets/stroke-rehab-board.jpg',
        description:
          'The Balance Board is a system aimed at solving a problem many face, balance impairment, through conditions like strokes and ABI (Acquired Brain Injury), balance impairment has meant that for some, quality of life has dramatically fallen. ',
        links: [
          {
            name: 'Source',
            url: 'https://github.com/DanielFerguson/Stroke-Rehabilitation-Board'
          },
          {
            name: 'Report',
            url:
              'https://github.com/DanielFerguson/Stroke-Rehabilitation-Board/blob/master/Folio.pdf'
          }
        ],
        tags: ['Raspberry Pi', 'Python', 'Matplotlib', 'CAD', 'Health']
      },
      {
        title: 'Hamburger',
        image: 'assets/hamburger.svg',
        description:
          "I wanted to create a simple app that I'd use in my day-to-day life. Nothing revolutionary, but something that helps me finally create a list of awesome recipes that I can reference time and time again.",
        links: [
          {
            name: 'Source',
            url: 'https://github.com/DanielFerguson/Hamburger'
          }
        ],
        tags: ['Flutter', 'Dart', 'Mobile']
      }
    ],
    langs: [
      'Javascript',
      'Vue',
      'Nuxt',
      'Bootstrap',
      'Sass',
      'PHP',
      'Laravel',
      'Python',
      'Tensorflow',
      'Dart',
      'Flutter',
      'CSharp'
    ],
    technologies: [
      'Leaflet',
      'Mapbox',
      'Webpack',
      'Gulp',
      'Apache',
      'Nginx',
      'Postgres',
      'MySQL',
      'Redis',
      'QGIS',
      'Docker'
    ],
    services: ['AWS', 'Azure', 'Github', 'Wordpress'],
    experience: [
      {
        position: 'Director',
        place: {
          name: 'HelpingGroup',
          logo: 'assets/hg-logo.png',
          website: 'https://helping.group/'
        },
        from: 'Jan 2020',
        to: 'Present',
        role:
          'Being the founder and director of the HelpingGroup, my role consists of overseeing the development of our initatives, liasing with department heads and partners, and leading the technical development of the platforms.',
        projects: ['SupportThem', 'OurMove', 'HelpingHomes']
      },
      {
        position: 'Technical Officer',
        place: {
          name: 'Centre for eResearch and Digital Innovation',
          logo:
            'data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAd0AAAA+CAIAAADh+FahAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YWRmN2FlZC03MWUyLTQ1YTEtOTYxZC0xOGJmZjQ3YTc5MTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUVFNjBDRkEwQTQ2MTFFNDgxNEVBRUJBNjZENDZBMjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUVFNjBDRjkwQTQ2MTFFNDgxNEVBRUJBNjZENDZBMjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNTczMjcyNjBDQTAxMUU0ODM1M0IzM0MwNzZGQjdGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNTczMjcyNzBDQTAxMUU0ODM1M0IzM0MwNzZGQjdGOCIvPiA8L3Jk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',
          website: 'https://cerdi.edu.au/'
        },
        from: 'Feb 2019',
        to: 'June 2020',
        role:
          'At CeRDI, I was responsible for a number of projects leading development on new platforms, and  the reworking of legacy projects. My duties also included a number of other responsibilities, including data analysis/parsing, working with clients to create effective solutions for their needs, creating supporting documentation (business-facing and client-facing), and working on redefining the technology stack and data pipelines to bring the organisation into the latest technologies.',
        projects: [
          "Visualising Victoria's Biodiversity",
          'CHIFVC Data Press',
          'Waterbug Blitz',
          'EPA Data Extraction',
          'Ballarat Open Data'
        ]
      }
    ],
    interests: [
      'Social Innovation & Change',
      'Sociology',
      'Website Development',
      'Education Systems',
      'Electrical Engineering',
      'Agriculture Automation',
      'Application Development',
      '3D Printing',
      'Embedded Systems',
      'API & Service Development',
      'Internet of Things & LoRA',
      'Machine Learning',
      'Data Science ',
      'Photography & Video Editing',
      'Archery',
      'Cycling',
      'Rowing',
      'Teaching',
      'Horse Riding',
      'Travelling'
    ],
    talks: [
      {
        title: 'Entrepreneurial Vision & Community',
        subtitle: '',
        description:
          'Why it’s important for federal, state and local governments, and local communities to foster entrepreneurial ecosystems amongst Australian small and medium enterprises (SMEs).',
        date: 'May, 2020',
        image: '/assets/momentum.png'
      },
      {
        title: 'Swinburne Student Leadership Panel',
        subtitle: '',
        description:
          "Discussed how I began my leadership journey, what I've learned through being involved in leadership and how these expereinces have opened up new avenues.",
        date: 'April, 2020',
        image: '/assets/swin-lead.jpg'
      }
    ],
    contacts: [
      {
        name: 'Github',
        url: 'https://github.com/DanielFerguson/'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/danferg/'
      },
      {
        name: 'Email',
        url: 'mailto:dan@helpinggroup.com.au'
      }
    ]
  }
})
