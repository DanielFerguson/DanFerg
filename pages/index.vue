<template>
  <div class="text-gray-900">
    <div class="flex flex-col items-center w-4/5 mx-auto text-center">
      <img
        src="/headshot.jpg"
        class="mt-12 lg:mt-48 h-48"
        alt="Daniel Ferguson"
      />
      <h2 class="text-3xl font-bold mt-6">Hey! I'm Dan 👋</h2>
      <div
        class="text-4xl font-bold my-8 flex flex-col sm:flex-row gap-0 sm:gap-4 items-center"
      >
        <h1 class="leading-10">
          I’m a
        </h1>
        <h1
          class="mt-1 bg-gradient-to-r from-teal-400 to-purple-500 text-white px-2"
        >
          social entrepreneur
        </h1>
      </div>
      <p class="text-center text-lg">
        solutions architect and software developer;
        <br class="hidden md:block" />
        seeking to create digitally enabled <br class="sm:hidden" />
        <span
          class="text-white font-bold bg-gradient-to-r from-pink-500 to-yellow-500 p-1"
          >change for good.</span
        >
      </p>

      <a
        href="#contact"
        class="inline-block px-6 py-4 mt-12 text-2xl font-bold text-white bg-gray-900 rounded-full hover:shadow-lg transition-shadow duration-75 ease-in-out"
      >
        Let's Talk! 🤙
      </a>

      <div class="flex my-12 lg:my-20 space-x-6">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#articles">Articles</a>
        <a href="#talks">Talks</a>
      </div>
    </div>

    <div class="xl:w-3/5 px-4 xl:px-16 mx-auto">
      <div id="projects" class="grid grid-cols-6 gap-4 bg-white">
        <a
          v-for="project in projects"
          :key="project.title"
          target="_blank"
          class="col-span-6 md:col-span-3 lg:col-span-2 grid-cell hover:shadow-lg transition-shadow duration-75 ease-in-out col-span-5"
          :href="project.link"
        >
          <h2 class="text-2xl font-bold leading-10">{{ project.title }}</h2>
          <p class="mt-1">{{ project.description }}</p>
        </a>
      </div>
      <p class="mt-6 text-center">
        See more of my projects at
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

      <h2 id="skills" class="text-2xl lg:text-4xl font-bold mt-12 lg:mt-20">
        I’m quite a diverse dude.
      </h2>
      <p>
        I like to be across the board, so I have the ability to see the
        <em>whole</em> picture.
      </p>
      <div class="flex flex-col md:flex-row mt-8">
        <div class="w-full md:w-1/2">
          <h3 class="text-lg font-bold">Experience</h3>

          <div class="flex flex-col mt-6 space-y-6">
            <div>
              <h4 class="font-medium">Helping Group</h4>
              <p class="mt-2">
                Founder, President <br />
                <em class="text-sm">Jan 2020 - Present</em>
              </p>
            </div>

            <div>
              <h4 class="font-medium">
                Centre for eResearch and Digital Innovation
              </h4>
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
              <h4 class="font-medium">Lawrencia Cycles</h4>
              <p class="mt-2">
                Sales Assistant <br />
                <em class="text-sm">Mar 2017 - Dec 2018</em>
              </p>
            </div>
          </div>

          <h3 class="text-lg font-bold mt-12">Education</h3>

          <div class="flex flex-col mt-6 space-y-6">
            <div>
              <h4 class="font-medium">Swinburne University of Technology</h4>
              <p class="mt-2">
                Bachelor of Computer Science (Software Development) <br />
                <em class="text-sm">Graduating 2021</em>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full mt-12 md:mt-0 md:w-1/2">
          <h3 class="text-lg font-bold">Tools</h3>

          <div class="grid grid-cols-2 mt-6 gap-6">
            <div v-for="tool in tools" :key="tool.name">
              <i :class="tool.icon" class="mr-2"></i> {{ tool.name }}
            </div>
          </div>

          <h3 class="text-lg font-bold mt-12">Skills</h3>
          <div class="flex flex-col mt-6 space-y-6">
            <div v-for="skill in skills" :key="skill.name">
              <i :class="skill.icon" class="mr-2"></i> {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
      <p class="mt-12 md:mt-6">
        Please see more at my
        <a
          class="font-bold"
          href="https://linkedin.com/in/danferg"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-linkedin text-blue-700"></i> LinkedIn</a
        >
      </p>

      <h2 id="articles" class="text-2xl lg:text-4xl font-bold mt-12 lg:mt-20">
        And every now and then I like to write.
      </h2>
      <p>
        It’s a great way to share knowledge, remember how far we've come and
        <br />
        create dialogue on topics that interest me or are near to my heart.
      </p>
      <div class="flex flex-col md:flex-row gap-4 mt-8">
        <NuxtLink
          :to="firstArticle.path"
          class="shadow rounded-xl w-full md:w-1/2 hover:shadow-lg transition-shadow duration-75 ease-in-out"
        >
          <img
            class="w-full object-cover rounded-t-xl"
            style="max-height: 16rem;"
            :src="'/images/' + firstArticle.featured_image"
            :alt="firstArticle.featured_image"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ firstArticle.title }}</h3>
            <p class="mt-2" v-html="firstArticle.description"></p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(firstArticle.date) }}</em>
            </p>
          </div>
        </NuxtLink>

        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <NuxtLink
            v-for="article in otherArticles"
            :key="article.title"
            :to="article.path"
            class="grid grid-cols-5 shadow rounded-xl hover:shadow-lg transition-shadow duration-75 ease-in-out"
          >
            <img
              class="col-span-1 object-cover h-full w-full rounded-l-xl"
              :src="'/images/' + article.featured_image"
              :alt="article.featured_image"
            />
            <div class="col-span-4 p-4 flex flex-col justify-center">
              <h4 class="font-bold">
                {{ article.title }}
              </h4>
              <em class="mt-1 text-sm">{{ dateFormat(article.date) }}</em>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="this.articles.length >= 6"
            to="/articles"
            class="inline-block px-3 text-lg h-16 flex items-center font-bold text-white bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-75 ease-in-out"
            >Read More</NuxtLink
          >
        </div>
      </div>

      <h2 id="contact" class="text-2xl lg:text-4xl font-bold mt-12 lg:mt-20">
        That’s it for me - <br class="md:hidden" />
        now it’s your turn!
      </h2>
      <p>
        If you’ve made it this far, thank-you!. Have you got a killer idea you
        need help realising? Need some digital consultancy?
        <b>I’d love to chat!</b>
        Reach me through…
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
      .sortBy("date", "desc")
      .where({ published: true })
      .only(["title", "description", "date", "featured_image", "path"])
      .fetch();

    return { articles };
  },

  data() {
    return {
      projects: [
        {
          title: "Helping Group",
          description: "Combatting current events with digital solutions.",
          link: "https://helping.group"
        },
        {
          title: "Innovative Land Index",
          description:
            "A data-driven approach to make planning decisions for land zoning. An index based on soil characteristics, rainfall and the distance from the major urban centres of farmland.",
          link: "https://innovative-land-index.vercel.app/"
        },
        {
          title: "ML Traffic Predictor",
          description:
            "A privacy-focused client-side alternative to Google Maps, utilising weather data and traffic flow directional data for a section of East Melbourne.",
          link: "https://traffic-flow-prediction.vercel.app"
        },
        {
          title: "Swin Lead",
          description:
            "A study into the innovation and leadership opportunities and barriers at Swinburne.",
          link: "https://swin-lead.vercel.app/"
        },
        {
          title: "Yoogle",
          description: "A captions-based search engine.",
          link: "https://yoogle.vercel.app/"
        },
        {
          title: "Stroke Rehabilitation Board",
          description:
            "An open source project focused on monitoring the balance recovery of stroke victims.",
          link: "https://github.com/DanielFerguson/Stroke-Rehabilitation-Board"
        }
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
          name: "AWS",
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
    },
    otherArticles() {
      return this.articles ? this.articles.slice(1, 5) : null;
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
  @apply p-4 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-xl h-auto;
}
</style>
