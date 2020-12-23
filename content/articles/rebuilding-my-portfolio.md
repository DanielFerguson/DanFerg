---
title: Welcome, to Website v3!
description: Well, let’s start of with the obvious question…
featured_image: fallon-michael-VUWDlBXGogg-unsplash.jpg
published: true
date: 12/23/2020
---

Well, let’s start of with the obvious question…

# Why? 🤷‍♂️

Well, the last one was a little outdated, and lacked imagination.

<img class="h-64 w-full object-cover rounded-xl shadow" src="/images/website-v2.png" />
<em class="text-sm">The front page of the previous website</em>

And was built for a different purpose. When I was building version 2 of my website, I wanted to expand my experience with web technologies.

Up until then, I had really only used Laravel in terms of frameworks, and I was starting to become more curious of the world of **Javascript**, **NPM** and **Headless** technologies. I also wanted to use something other than Webpack, as I already had experience with it with Laravel Mix, which is why I chose to use **Gulp**. Also leaning more into the world of frontend development, I wanted a reason to use **SASS**, and this was a perfect excuse.

# What are the goals?

I started by creating a simple itemised list of what I wanted to achieve, use and do with version 3 of the website.

1. Use a headless framework and allows for static-site generation,
2. Learn and use [Tailwind CSS](https://tailwindcss.com) as a happy medium between writing all of the CSS myself and using something unimaginative like Bootstrap.
3. Display a succinct version of my portfolio on the website with engaging icons,
4. Achieve the ‘green-screen’ on Google’s [web.dev](https://web.dev) platform.
5. Have the ability to write and host a blog, and
6. Design the website to look a more… modern, complete feel.

# Process 🪜

## Design 🎨

First off, let me just get it out in the open; I am not a designer… Not that it was a mystery to anyone! 😂 So my first point of call is to usually go and find inspiration and create mood boards within Adobe XD of designs and colours that I like. Dribbble is usually my go-to for this.

Once I start to create a theme of what I want, I then start to flesh out what will be the first iteration of the design.

<img class="w-full object-cover rounded-xl shadow" src="/images/website-v3-iteration.png" />
<em class="text-sm">A snippet of the original Adobe XD design</em>

Then it’s just a process of rinse, wash and repeat until I have something that looks like an attractive website, and in this case, something that I feel proud enough to put my name on it; quite literally.

## Development 🔨

Once I’ve settled on something, I then move onto developing the website in a mobile-first way. This stems back to how I was taught; fluid grids and Dreamweaver, anyone?

This was a bit of a unique experience, as I spent a long time experimenting with different ways of laying out the content, reading the Tailwind documentation and watching screencasts to learn new tips, tricks and conventions. [This specific screencast](https://v1.tailwindcss.com/course/) was a fantastic resource.

After a bit of tinkering and testing, I started to learn how to do more than just put lego-link pieces together, but actually build something that looked exactly like my design. This was an incredibly freeing moment, as I started to feel more and more comfortable straying away from designing components that looked like Bootstrap and Vuetify, as I knew that I would be able to build them.

After a number of iterations of design, I moved onto writing my first test article and implemented the logic to enable dynamic routes for the static site generation feature of Nuxt. I wish I had done this sooner, as this was exceptionally easy. The [@content](https://content.nuxtjs.org/) module allows for mongodb-like queries on the /content folder structure. Coupled with the [@content](https://content.nuxtjs.org/) module and [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin), it’s as simple as passing the article down to the Nuxt-content component prop and bam, it formats it like a champ. Like it? It formatted what you’re reading right now.

# Where we are today!

First off, I want to state that I am over the moon with how the website turned out. I’m also very happy that I did this exercise, as even though I may not have accomplished every goal I originally set out to accomplish, I had a fun time attempting it. And, this (obviously) isn’t the end. I won’t stop until I (spoilers) get the sought-after web.dev wall of green.

## Tailwind CSS

The main hurdle that I overcame through this project was learning more about CSS, and how to turn what I design in Adobe XD into something that’s accessible on the web. This was made so much easier through the use of [Adam Wathan](twitter.com/adamwathan/)’s CSS framework, [Tailwind CSS](https://tailwindcss.com).

I felt so much more free to design what I wanted, rather than to conform to the strict design guides and styles that frameworks like Vuetify and Bootstrap make you do. While those frameworks are fantastic for quick prototyping, or if you just want to make sure your sites have top-notch consistency between them with minimal effort, Tailwind empowers developers to go beyond the predefined.

## Nuxt & Nuxt Content

The ability to create layouts, import and utilise components easily, have excellent support for SEO and static-site rendering, not to mention the plethora of plugins that it affords you has been an absolute dream to work with.

Coupled with Nuxt’s [@content](https://content.nuxtjs.org/) plugin, and all of the functionality packaged within, creating a markdown-based blog has never been easier. One of the most standout features for me is the ability to add a YAML ‘front matter’, which is a set of YAML formatted variables that can be used for titles, descriptions, published flags, featured images, and more. That’s be really handy, as I have a number of ideas that I’ve penned down in files that I don’t want published yet, however, I’d like to be in version control. In this case, you can have you cake and eat it, too! I just set it to fetch the articles with the ‘published’ flag to true and away we go!

It’s now my go-to framework for creating Vue-based static websites. I’ve loved it so much that we recently redeveloped the [Helping Group](https://helping.group) website to use Nuxt for these very reasons.

## Hosting

[Vercel](https://vercel.com). Enough said?

I’ve recently switched to using Vercel over Netlify, purely as I found the experience of working with Nuxt on Vercel slightly better than that of Netlify. I can’t really tell much of a difference between the services, at least in the minimal capacity for what I use it for.

Honestly, whatever works for you, stick with it. 👍

# Finally, the scores… (🥇?)

<img class="w-full object-cover rounded-xl shadow" src="/images/website-v2-scores.png" />
<em class="text-sm">The web.dev scores of the previous website</em>

<img class="w-full object-cover rounded-xl shadow" src="/images/website-v3-scores.png" />
<em class="text-sm">The web.dev scores of the current website</em>

Unfortunately, we didn’t beat the previous website’s scores (more like 🥈). That’s alright, room to improve! However, as I said at the start of the article, I am over the moon with how this project has turned out. Definitely went for a little longer than I would have hoped, but what should have I expected coming into the end of the year?

I look forward to the next interactions of the website. I’ll be working on increasing the web.dev scores to at least be all in the green, if not be scores of 100 across the board.

## Forget that nonsense, go for gold! (🥇!)

<img class="w-full object-cover rounded-xl shadow" src="/images/website-v3-upgrades.png" />
<em class="text-sm">The web.dev scores of the latest upgrades to the website</em>

I couldn't go to sleep knowing that I could do better; and did I ever! After doing some reading on both what Google gives SEO kudos to, and generally good practise for things like accessibility with aria, etc. I cracked the 100% mark!

For those who haven't ever had this achievement (don't worry, neither had I until now), the Lighthouse testing window panel starts to fire off fireworks in celebration of being a good web citizen! Woo for lazyloading and awesome compression!
