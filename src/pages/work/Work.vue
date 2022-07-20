<template>
  <section class="flex flex-col items-center w-full">
    <div class="w-full px-8 mt-16 lg:w-[45%]">
      <Heading text="Previous projects" />
      <BodyText class="mb-16">
        <p>
          The past year I have done two internships, two months at
          <TextLink
            aria-label="Link to Stretch"
            url="https://www.stretch.se/"
            text="Stretch"
          />
          and 5 months at
          <TextLink
            aria-label="Link to Workbuster"
            url="https://workbuster.com/"
            text="Workbuster."
          />
        </p>
        <p class="my-2">
          Since they both build proprietary software, I can't show you the apps
          and features I've built during my internships. But here are some
          recent personal projects.
        </p>
      </BodyText>
    </div>
    <div class="pb-16 bg-violet-50 lg:w-2/3">
      <WorkItem
        image-src-url="../../../assets/lerverket-screenshot.jpg"
        image-alt-text="Lerverket screenshot"
        image-link-url="https://lerverket.netlify.app/"
      >
        <BodyText>
          <p>
            Website and cms for company Lerverket. Built with React.js,
            Typescript, Strapi and GraphQL.
          </p>
          <p class="my-2">
            The backend is hosted on Heroku's hobby tier - this means that the
            Heroku server goes into sleep mode when it is not used. The site can
            be slow as the server 'wakes up'. Just refresh the browser and it
            should be fast again.
          </p>
          <TextLink
            aria-label="Go to Lerverket"
            url="https://lerverket.netlify.app/"
            text="Live Demo"
            class="block m-auto w-fit"
          />
          <TextLink
            aria-label="Go to Github repository"
            url="https://github.com/LouLapins/lerverket-frontend"
            text="Github"
          />
        </BodyText>
      </WorkItem>
      <WorkItem
        image-src-url="../../../assets/weather-app.jpg"
        image-alt-text="Weather App screenshot"
        image-link-url="ttps://github.com/LouLapins/weather-app-node-react"
      >
        <BodyText>
          <p>
            Weather app serving data from
            <TextLink
              aria-label="SMHI API Docs"
              url="https://opendata.smhi.se/apidocs/metfcst/index.html"
              text="SMHI"
            />, a 10 day forecast for Stockholm Royal Palace. Built with React,
            Node.js and Typescript.
          </p>
          <p class="my-2">
            I got this assignment recently as a coding test, as part of a job
            application process.
          </p>
          <TextLink
            aria-label="Go to Github repository"
            url="https://github.com/LouLapins/weather-app-node-react"
            text="Github"
          />
        </BodyText>
      </WorkItem>
    </div>
  </section>
</template>
<script setup>
import TextLink from "../../components/TextLink.vue";
import BodyText from "../../components/BodyText.vue";
import Heading from "../../components/typography/Heading.vue";
import WorkItem from "./components/WorkItem.vue";
</script>
<style></style>
