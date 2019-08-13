<template>
  <v-app>
    <v-content>
      <hero-section />
      <work-section :projects="projects" />
      <skills-section :tabs="tabs" />
      <about-me-section :interests="interests" />
      <timeline-section :events="events" />
      <contact-section :links="links" />
    </v-content>
  </v-app>
</template>

<script>
import HeroSection from "./components/TheHeroSection.vue";
import WorkSection from "./components/TheWorkSection.vue";
import SkillsSection from "./components/TheSkillsSection.vue";
import AboutMeSection from "./components/TheAboutMeSection.vue";
import TimelineSection from "./components/TheTimelineSection.vue";
import ContactSection from "./components/TheContactSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    WorkSection,
    SkillsSection,
    AboutMeSection,
    TimelineSection,
    ContactSection
  },
  data: () => ({
    projects: [
      {
        title: "Our Good News",
        img: "icons-ados.jpg"
      },
      {
        title: "Our Memories",
        img: "icons-memories.jpg"
      },
      {
        title: "Stroke Rehabilitation",
        img: "icons-stroke.jpg"
      },
      {
        title: "Pathways",
        img: "icons-pathways.jpg"
      },
      {
        title: "Swin Pharma",
        img: "icons-pharma.jpg"
      },
      {
        title: "Time Card",
        img: "icons-time.jpg"
      },
      {
        title: "A Typist For Me",
        img: "icons-typist.jpg"
      },
      {
        title: "Docket Today",
        img: "icons-docket.jpg"
      }
    ],
    tabs: [
      {
        title: "Languages",
        items: [
          "PHP",
          "Dart",
          "Python",
          "C#",
          "Assembly (RISC-V)",
          "C / C++",
          "Javascript",
          "Java"
        ]
      },
      {
        title: "Frameworks",
        items: [
          "Vue",
          "Laravel",
          "Flutter",
          "Xamarin",
          "Flask",
          ".NET Core",
          ".NET"
        ]
      }
    ],
    interests: [
      "Electrical Engineering,",
      "Disability Specific Products,",
      "Agriculture Automation,",
      "Remote Sensor Monitoring,",
      "Fast Prototyping / 3D Printing,",
      "Cross Platform Development,",
      "Embedded Systems,",
      "API & Service Development,",
      "Internet of Things,",
      "Website Development,",
      "Machine Learning,",
      "Data Science,",
      "Portrait Photography,",
      "Event Photography,",
      "Promotional Material,",
      "Video Editing & VFX,",
      "Arduino,",
      "Raspberry Pi,",
      "Beaglebone,",
      "Network Security,",
      "Game Development,",
      "Road & Gravel Cycling,",
      "Teaching,",
      "Horse Riding & Training,",
      "Travelling"
    ],
    events: [
      {
        title: "Graduated Highschool",
        text:
          "I graduated my VCE studies from Ballarat Grammar, scoring well in Software Development, Systems Engineering & Product Design & Technology.",
        opposite: "2016, Dec",
        icon: "mdi-school"
      },
      {
        title: "Started University",
        text:
          "I started my Bachelor of Computer Science (Prof.) at Swinburne University of Technology, majoring in Software Development and Internet of Things (IoT).",
        opposite: "2017, March - Present",
        icon: "mdi-school"
      },
      {
        title: "Started working at Lawrencia Cycles",
        text:
          "I worked as a Sales Representative and Mechanic at Lawrencia Cycles - fulfilling both my love of bikes and helping customers.",
        opposite: "2017, March - 2018, Nov",
        icon: "mdi-bike"
      },
      {
        title: "Started working at CeRDI",
        text:
          "I'm a Technical Officer at the Center for eResearch and Digital Innovation, working on a number of projects focused on spatial data.",
        opposite: "2019, Feb - Present",
        icon: "mdi-laptop"
      }
    ],
    links: [
      {
        img: "https://img.icons8.com/nolan/64/000000/linkedin.png",
        linkto: "https://au.linkedin.com/in/TheDanielFerguson",
        alt: "LinkedIn"
      },
      {
        img: "https://img.icons8.com/nolan/64/000000/github.png",
        linkto: "https://github.com/DanielFerguson",
        alt: "GitHub"
      },
      {
        img: "https://img.icons8.com/nolan/64/000000/twitter.png",
        linkto: "https://twitter.com/thedannyferg",
        alt: "Twitter"
      }
    ]
  })
};
</script>
