<template>
  <div class="text-gray-900">
    <div class="flex flex-col items-center justify-center w-screen h-screen">
      <img
        src="/headshot.jpg"
        height="250"
        width="250"
        class="mt-12"
        alt="Daniel Ferguson"
      />
      <h2 class="mt-6">Hey! I'm Dan 👋</h2>
      <h1>I’m a social entrepreneur</h1>
      <p class="mt-3 text-center">
        solutions architect and software developer; <br />
        seeking to create digitally enabled, <br />
        scalable <b>change for good</b>.
      </p>
      <a
        href="#contact"
        class="inline-block px-6 py-4 mt-12 text-2xl font-bold text-white bg-gray-900 rounded-full hover:shadow-lg transition-shadow duration-75 ease-in-out"
      >
        Let's Talk! 🤙
      </a>

      <div class="flex mt-12 space-x-6">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#articles">Articles</a>
        <a href="#talks">Talks</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

    <div class="xl:w-4/5 2xl:w-3/5 px-16 mx-auto mt-24">
      <!-- Projects -->
      <div id="projects" class="grid grid-cols-5 gap-8 bg-white">
        <nuxt-link
          v-for="(project, index) in projects"
          :key="project.title"
          class="grid-cell hover:shadow-lg transition-shadow duration-75 ease-in-out"
          :class="gridList[index]"
          :to="project.path"
        >
          <h2 class="leading-10">{{ project.title }}</h2>
          <p class="mt-2">{{ project.description }}</p>
        </nuxt-link>
      </div>
      <p class="mt-6 text-center">
        See more on
        <a
          href="https://helping.group"
          class="font-bold"
          target="_blank"
          rel="noopener noreferrer"
          >helping.group</a
        >,
        <a
          href="https://linkedin.com/in/danferg"
          class="font-bold"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-linkedin text-blue-700"></i> LinkedIn</a
        >
        and
        <a
          href="https://github.com/DanielFerguson"
          class="font-bold"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-github text-gray-800"></i> Github</a
        >
      </p>

      <!-- Resume -->
      <h2 id="skills" class="mt-24">I’m quite a diverse dude.</h2>
      <p>
        I like to be across the board, so I have the ability to see the
        <em>whole</em>
        picture
      </p>
      <div class="flex mt-8">
        <!-- Experience / Education -->
        <div class="w-1/2">
          <h3>Experience</h3>

          <div class="flex flex-col mt-6 space-y-6">
            <div>
              <h4>Helping Group</h4>
              <p class="mt-2">
                Founder, President <br />
                <em class="text-sm">Jan 2020 - Present</em>
              </p>
            </div>

            <div>
              <h4>Centre for eResearch and Digital Innovation</h4>
              <p class="mt-2">
                Migrations Officer <br />
                <em class="text-sm">Jan 2021 - Present</em>
              </p>
              <p class="mt-2">
                Technical Officer <br />
                <em class="text-sm">Feb 2019 - Dec 2020</em>
              </p>
            </div>

            <div>
              <h4>Lawrencia Cycles</h4>
              <p class="mt-2">
                Sales Assistant <br />
                <em class="text-sm">Mar 2017 - Dec 2018</em>
              </p>
            </div>
          </div>

          <h3 class="mt-12">Education</h3>

          <div class="flex flex-col mt-6 space-y-6">
            <div>
              <h4>Swinburne University of Technology</h4>
              <p class="mt-2">
                Bachelor of Computer Science (Software Development) <br />
                <em class="text-sm">Graduating 2021</em>
              </p>
            </div>
          </div>
        </div>

        <!-- Skills / Tools -->
        <div class="w-1/2">
          <h3>Tools</h3>

          <div class="grid grid-cols-2 mt-6 gap-6">
            <div v-for="tool in tools" :key="tool.name">
              <i :class="tool.icon" class="mr-2"></i> {{ tool.name }}
            </div>
          </div>

          <h3 class="mt-12">Skills</h3>
          <div class="flex flex-col mt-6 space-y-6">
            <div v-for="skill in skills" :key="skill.name">
              <i :class="skill.icon" class="mr-2"></i> {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
      <p class="mt-6">
        Please see more at my
        <a
          class="font-bold"
          href="https://linkedin.com/in/danferg"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-linkedin text-blue-700"></i> LinkedIn</a
        >
      </p>

      <!-- Articles -->
      <h2 id="articles" class="mt-24">
        And every now and then I write about what I’m up too.
      </h2>
      <p>
        It’s another great way to share knowledge, and for me to remember where
        I’ve been and what I’ve done.
      </p>
      <div class="grid grid-cols-2 gap-8 mt-8">
        <nuxt-link
          v-for="(article, index) in articles"
          :key="index"
          :to="article.path"
          :class="
            index == 0 ? 'row-span-5 col-span-1' : 'grid grid-cols-4 gap-4'
          "
        >
          <img
            class="w-full object-cover rounded-xl"
            :class="index == 0 ? '' : 'col-span-1 h-16'"
            style="max-height: 16rem;"
            :src="'/images/' + article.featured_image"
            :alt="article.featured_image"
          />
          <div v-if="index == 0" class="mt-4">
            <h3>{{ article.title }}</h3>
            <p class="mt-2">{{ article.description }} <br /></p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(article.createdAt) }}</em>
            </p>
          </div>
          <h4 v-else class="col-span-3 flex items-center h-16">
            {{ article.title }}
          </h4>
        </nuxt-link>
        <nuxt-link
          to="/articles"
          class="inline-block px-3 text-lg h-16 flex items-center font-bold text-white bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-75 ease-in-out"
          >Read More</nuxt-link
        >
      </div>

      <!-- Contact -->
      <h2 id="contact" class="mt-24">That’s it for me - now it’s your turn!</h2>
      <p>
        If you’ve made it this far, thanks! I’d love to chat! Reach me through…
      </p>
      <div class="flex flex-col items-center justify-center my-16">
        <div class="mt-6 text-5xl">👋 🤙</div>
        <a href="mailto:dan@helpinggroup.com.au" class="mt-3 text-xl font-bold"
          >dan@helpinggroup.com.au</a
        >
        <div class="flex mt-6 mb-12 space-x-6 align-center">
          <a
            href="https://twitter.com/thedannyferg"
            class="flex items-center justify-center inline-block w-16 h-16 bg-blue-200 rounded-full hover:bg-blue-50"
          >
            <twitter />
          </a>
          <a
            href="https://linkedin.com/in/danferg"
            class="flex items-center justify-center inline-block w-16 h-16 bg-green-200 rounded-full"
          >
            <linkedin />
          </a>
          <a
            href="https://github.com/DanielFerguson"
            class="flex items-center justify-center inline-block w-16 h-16 bg-orange-200 rounded-full"
          >
            <github />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "description", "createdAt", "featured_image"])
      .fetch();

    const projects = await $content("projects")
      .sortBy("priority", "asc")
      .only(["title", "description", "priority"])
      .fetch();

    return { articles, projects };
  },

  data() {
    return {
      articles: [],
      projects: [],
      gridList: [
        "col-span-2",
        "col-span-3",
        "col-span-3",
        "col-span-2",
        "col-span-2",
        "col-span-3"
      ],
      skills: [
        {
          name: "Software Development",
          icon: "fal fa-computer-classic"
        },
        {
          name: "Solutions Architecture",
          icon: "fal fa-layer-group"
        },
        {
          name: "Entrepreneurship",
          icon: "fal fa-lightbulb-on"
        },
        {
          name: "Cloud Architecture",
          icon: "fal fa-clouds"
        },
        {
          name: "Leadership",
          icon: "fal fa-users"
        },
        {
          name: "Agile Project Management",
          icon: "fal fa-draw-circle"
        }
      ],
      tools: [
        {
          name: "Laravel",
          icon: "fab fa-laravel"
        },
        {
          name: "Vue",
          icon: "fab fa-vuejs"
        },
        {
          name: "Mapbox / Leaflet",
          icon: "fal fa-map-marked-alt"
        },
        {
          name: "Tensorflow",
          icon: "fal fa-robot"
        },
        {
          name: "Amazon Web Services",
          icon: "fab fa-aws"
        },
        {
          name: "Flutter",
          icon: "fal fa-feather-alt"
        },
        {
          name: "Docker",
          icon: "fab fa-docker"
        },
        {
          name: "ASP.Net Core",
          icon: "fal fa-server"
        }
      ]
    };
  },

  computed: {
    firstArticle() {
      return this.articles ? this.articles[0] : null;
    }
  },

  methods: {
    dateFormat(dateString) {
      const date = new Date(dateString);

      return `${days[date.getDay()]} ${date.getDate()}, ${
        months[date.getMonth()]
      } ${date.getUTCFullYear()}`;
    }
  }
};
</script>

<style scoped>
.grid-cell {
  @apply p-8 bg-blue-100 rounded-xl h-48;
}
</style>
