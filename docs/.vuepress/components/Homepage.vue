<template>
  <div class="home">
    <div class="homepage__headerbox">
      <h1 class="homepage__heading">Esper Docs</h1>
      <p class="homepage__subheading">Documentation for all the Esper Dev APIs, SDKs, and Tools</p>
      <p>
        <a href="https://esper.io/signup/" class="homepage__button" style="margin-right: 1rem">Sign up</a>
        <a href="/home/" class="homepage__button homepage_button_two">Overview</a>
      </p>
    </div>
    <div class="homepage__links__section">
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/ApiReferenceIcon.svg" alt='api'/></div>
        <a  href="https://api.esper.io/" class="homepage__a">Esper API Reference</a>
        <p>API documentation and OpenAPI specificiation</p>
      </div>
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/EsperCliIcon.svg" alt='cli'/></div>
        <a href="/home/espercli.html" class="homepage__a">Esper CLI</a>
        <p>Command line tool for the Esper APIs</p>
      </div>
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/EsperSdkIcon.svg" alt='sdk'/></div>
        <a href="/home/pythonsdk.html" class="homepage__a">Esper SDK</a>
        <p>Python library to call the Esper APIs</p>
      </div>
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/EsperPluginIcon.svg" alt='plugin'/></div>
        <a href="/home/emulator.html" class="homepage__a">Esper Plugin for Android Studio</a>
        <p>Plugin extending Android Studio with Esper Tools</p>
      </div>
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/EsperConsoleIcon.svg" alt='console'/></div>
        <a href="https://consoledocs.esper.io/" class="homepage__a">Esper Console</a>
        <p>Using the Esper Console: Esper Dev & Esper Manage</p>
      </div>
      <div class="homepage__links__section__item">
        <div style="padding-bottom: 1rem"><img src="./icons/EsperBlogIcon.svg" alt='blog'/></div>
        <a href="https://blog.esper.io" class="homepage__a">Esper Blog</a>
        <p>Find out the latest about Esper on our Blog</p>
      </div>
    </div>
    <div class="homepage__footer">Apache 2.0 | Copyright © 2019 Shoonya Enterprises Inc</div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
@font-face {
    font-family: "BlenderPro";
    src: url('./fonts/BlenderPro-Medium.eot');
    src: local('‚ò∫'), url('./fonts/BlenderPro-Medium.woff2') format('woff2'), url('./fonts/BlenderPro-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.home {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
}
.homepage__headerbox {
  text-align: center;
}
.homepage__heading {
  margin: 1.8rem auto;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.25;
  color: #7a55a5;
  font-family: 'BlenderPro';
}
.homepage__subheading {
  max-width: 37rem;
  font-size: 1.4rem;
  line-height: 1.3;
  color: #6a8bad;
  font-family: 'Nunito Sans', sans-serif;
  margin: 1.8rem auto;
}

.homepage__action {
  margin: 1.8rem auto;
}
.homepage__button {
  font-family: 'BlenderPro';
  display: inline-block;
  font-size: 1.2rem;
  /* color: #fff; */
  /* background-color: #7a55a5; */
  padding: 0rem 2rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  color: #7a55a5;
  box-sizing: border-box;
  border: 1px solid #6e4d95;
}

.homepage__button:hover {
  background-color: #8765af;
  color: #fff;
}

.homepage__button:active {
  background-color: #573c76;
  color: #fff;
}

.homepage_button_two {
  border: 1px solid #6e4d95;
  background-color: #7a55a5;
  color: #fff;
}
.homepage__links__section {
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

.homepage__links__section__item {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
  border: solid 1px #dfe3e6;
  text-align: center;
  height: 14rem;
  margin-bottom: 2rem;
  padding: 1rem 0rem;
  background-color: rgba(250, 250, 250, 0.3);
  padding-bottom: 2rem;
  border-radius: 4px;
}

@media (max-width: 719px) {
  .homepage__links__section__item {
    flex-wrap: wrap;
    max-width: 100%;
    padding: 0 2.5rem;
    border: solid 1px #dfe3e6;
    text-align: center;
    height: 13rem;
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 1rem;
  }
}

@media (max-width: 664px) {
  .homepage__links__section__item {
    max-width: 100%;
    padding: 0 2.5rem;
    border: solid 1px #dfe3e6;
    text-align: center;
    height: 16.5rem;
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

@media (max-width: 586px) {
  .homepage__links__section__item {
    max-width: 100%;
    padding: 0 2.5rem;
    border: solid 1px #dfe3e6;
    text-align: center;
    height: 19rem;
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

@media (max-width: 553px) {
  .homepage__links__section__item {
    max-width: 100%;
    padding: 0 2.5rem;
    border: solid 1px #dfe3e6;
    text-align: center;
    height: 12rem;
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
  }
}

.homepage__a {
  font-size: 1.6rem;
  border-bottom: none;
  padding-bottom: 0;
  color: #3a5169;
  font-family: 'BlenderPro';
}

.homepage__links__section__item > p {
  font-family: 'Nunito Sans', sans-serif;
  padding: 0rem 1rem;
}

.homepage__footer {
  padding: 2.5rem;
  text-align: center;
  color: #4e6e8e;
}
</style>
