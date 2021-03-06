<template>
  <div class="text-gray-900">
    <div class="flex flex-col items-center w-4/5 mx-auto text-center">
      <img
        src="/headshot.jpg"
        class="h-48 mt-12 lg:mt-48"
        alt="Daniel Ferguson"
      />
      <h2 class="mt-6 text-3xl font-bold">Hey! I'm Dan 👋</h2>
      <div
        class="flex flex-col items-center gap-0 my-8 text-4xl font-bold sm:flex-row sm:gap-4"
      >
        <h1 class="leading-10">
          I’m a
        </h1>
        <h1
          class="px-2 mt-1 text-white bg-gradient-to-r from-teal-400 to-purple-500"
        >
          social entrepreneur
        </h1>
      </div>
      <p class="text-lg text-center">
        solutions architect and software developer;
        <br class="hidden md:block" />
        seeking to create digitally enabled <br class="sm:hidden" />
        <span
          class="p-1 font-bold text-white bg-gradient-to-r from-pink-500 to-yellow-500"
          >change for good.</span
        >
      </p>

      <a
        href="#contact"
        aria-label="A link to the contact section of the website"
        class="inline-block px-6 py-4 mt-12 text-2xl font-bold text-white transition-shadow duration-75 ease-in-out bg-gray-900 rounded-full hover:shadow-lg"
      >
        Let's Talk! 🤙
      </a>

      <div class="flex my-12 space-x-6 text-xl font-medium lg:my-20">
        <a
          aria-label="A link to the project section of the website"
          href="#projects"
          >Projects</a
        >
        <a
          aria-label="A link to the skills section of the website"
          href="#skills"
          >Skills</a
        >
        <a
          aria-label="A link to the articles section of the website"
          href="#articles"
          >Articles</a
        >
        <!-- <a href="#talks">Talks</a> -->
      </div>
    </div>

    <div class="px-4 mx-auto xl:w-3/5 xl:px-16">
      <div id="projects" class="grid grid-cols-6 gap-4 bg-white">
        <a
          v-for="project in projects"
          :key="project.title"
          :aria-label="project.title"
          target="_blank"
          rel="noopener noreferrer"
          class="col-span-5 col-span-6 transition-shadow duration-75 ease-in-out md:col-span-3 lg:col-span-2 grid-cell hover:shadow-lg"
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
          aria-label="A link to the Helping Group website"
          >helping.group</a
        >,
        <a
          href="https://linkedin.com/in/danferg"
          class="font-bold"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="A link to my LinkedIn profile"
          ><i class="text-blue-700 fab fa-linkedin"></i> LinkedIn</a
        >
        and
        <a
          href="https://github.com/DanielFerguson"
          class="font-bold"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="A link to my Github account"
          ><i class="text-gray-800 fab fa-github"></i> Github</a
        >
      </p>

      <h2 id="skills" class="mt-12 text-2xl font-bold lg:text-4xl lg:mt-20">
        I’m quite a diverse dude.
      </h2>
      <p>
        I like to be across the board, so I have the ability to see the
        <em>whole</em> picture.
      </p>
      <div class="flex flex-col mt-8 md:flex-row">
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

          <h3 class="mt-12 text-lg font-bold">Education</h3>

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

          <div class="grid grid-cols-2 gap-6 mt-6">
            <div v-for="tool in tools" :key="tool.name">
              <i :class="tool.icon" class="mr-2"></i> {{ tool.name }}
            </div>
          </div>

          <h3 class="mt-12 text-lg font-bold">Skills</h3>
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
          aria-label="A link to my LinkedIn profile"
          ><i class="text-blue-700 fab fa-linkedin"></i> LinkedIn</a
        >
      </p>

      <h2 id="articles" class="mt-12 text-2xl font-bold lg:text-4xl lg:mt-20">
        And every now and then I like to write.
      </h2>
      <p>
        It’s a great way to share knowledge, remember how far we've come and
        <br />
        create dialogue on topics that interest me or are near to my heart.
      </p>
      <div class="flex flex-col gap-4 mt-8 md:flex-row">
        <NuxtLink
          :to="firstArticle.path"
          class="w-full transition-shadow duration-75 ease-in-out shadow rounded-xl md:w-1/2 hover:shadow-lg"
          :aria-label="`A link to my article, titled ${firstArticle.title}`"
        >
          <figure class="picture">
            <img
              :data-src="'/images/' + firstArticle.featured_image"
              :alt="firstArticle.featured_image"
              class="object-cover w-full lazyload rounded-t-xl"
              style="max-height: 16rem;"
            />
          </figure>
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ firstArticle.title }}</h3>
            <p class="mt-2" v-html="firstArticle.description"></p>
            <p class="mt-2">
              <em class="text-sm">{{ dateFormat(firstArticle.date) }}</em>
            </p>
          </div>
        </NuxtLink>

        <div class="flex flex-col w-full gap-4 md:w-1/2">
          <NuxtLink
            v-for="article in otherArticles"
            :key="article.title"
            :to="article.path"
            :aria-label="`A link to my article, titled ${firstArticle.title}`"
            class="grid grid-cols-5 transition-shadow duration-75 ease-in-out shadow rounded-xl hover:shadow-lg"
          >
            <figure class="picture">
              <img
                :data-src="'/images/' + article.featured_image"
                :alt="article.featured_image"
                class="object-cover w-full h-full col-span-1 lazyload rounded-l-xl"
              />
            </figure>
            <div class="flex flex-col justify-center col-span-4 p-4">
              <h4 class="font-bold">
                {{ article.title }}
              </h4>
              <em class="mt-1 text-sm">{{ dateFormat(article.date) }}</em>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="this.articles.length >= 6"
            to="/articles"
            aria-label="A link to the articles page"
            class="flex items-center inline-block h-16 px-3 text-lg font-bold text-white transition-shadow duration-75 ease-in-out bg-gray-900 rounded-lg hover:shadow-lg"
            >Read More</NuxtLink
          >
        </div>
      </div>

      <h2 id="contact" class="mt-12 text-2xl font-bold lg:text-4xl lg:mt-20">
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
            rel="noopener noreferrer"
            aria-label="A link to my twitter profile"
            class="flex items-center justify-center inline-block w-16 h-16 bg-blue-200 rounded-full hover:bg-blue-50"
          >
            <twitter />
          </a>
          <a
            href="https://linkedin.com/in/danferg"
            rel="noopener noreferrer"
            aria-label="A link to my LinkedIn profile"
            class="flex items-center justify-center inline-block w-16 h-16 bg-green-200 rounded-full"
          >
            <linkedin />
          </a>
          <a
            href="https://github.com/DanielFerguson"
            rel="noopener noreferrer"
            aria-label="A link to my Github profile"
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
      .sortBy("date")
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

  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Social entrepreneur and serial innovator, seeking to create change for good. Founder of the Helping Group and AIAO."
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://danferg.com/"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "Dan Ferguson - Social entrepreneur seeking to create change for good."
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Social entrepreneur and serial innovator, seeking to create change for good. Founder of the Helping Group and AIAO."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://danferg.com/opengraph-image.png"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "https://danferg.com/twitter-meta-image.png"
      },
      {
        hid: "twitter:domain",
        property: "twitter:domain",
        content: "https://danferg.com/"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://danferg.com/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content:
          "Dan Ferguson - Social entrepreneur seeking to create change for good."
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Social entrepreneur and serial innovator, seeking to create change for good. Founder of the Helping Group and AIAO."
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://danferg.com/twitter-meta-image.png"
      }
    ]
  },

  computed: {
    firstArticle() {
      return this.articles ? this.articles[0] : null;
    },
    otherArticles() {
      return this.articles ? this.articles.slice(1, 5).reverse() : null;
    }
  },

  methods: {
    dateFormat(dateString) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    }
  }
};
</script>

<style scoped>
.grid-cell {
  @apply p-4 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-xl h-auto;
}
</style>
