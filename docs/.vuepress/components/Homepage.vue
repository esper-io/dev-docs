<template>
  <div class="home">
    <div class="homepage__headerbox">
      <h1 class="homepage__heading">Esper Dev Docs</h1>
      <p class="homepage__subheading">Documentation for all the Esper Dev APIs, SDKs, and Tools</p>
      <p>
        <a href="https://esper.io/signup/" class="homepage__button">Get Started</a>
        <a href="/home/" class="homepage__button homepage_button_two">Read the Docs</a>
      </p>
    </div>
    <div class="homepage__links__section">
      <div class="homepage__links__section__item">
        <a  href="/home/pythonsdk.html" class="homepage__a">Esper SDK</a>
        <p>Python library to call the Esper APIs</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="/home/espercli.html" class="homepage__a">Esper CLI</a>
        <p>Command line tool for the Esper APIs</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="https://api.esper.io/" class="homepage__a">Esper API Reference</a>
        <p>API documentation and OpenAPI specificiation</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="/home/emulator.html" class="homepage__a">Esper Virtual Emulator</a>
        <p>Using the Esper Virtual Emulator to test apps on an emulated device</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="/home/devicekit.html" class="homepage__a">Esper Developement Devices</a>
        <p> How to purchase and then target devices running Esper Enhanced Android</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="https://consoledocs.esper.io/" class="homepage__a">Product Documentation</a>
        <p>Using Esper Dev Console</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="https://blog.esper.io" class="homepage__a">Esper Blog</a>
        <p>Find out the latest about Esper on our developer blog</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="https://github.com/esper-io" class="homepage__a">Github</a>
        <p>Get the Esper APIs, SDK, and CLI on GitHub. <a href="https://esper.io/signup/">Sign up</a> for the Esper Dev Trial to get your API key</p>
      </div>
      <div class="homepage__links__section__item">
        <a href="/home/support.html" class="homepage__a">Support</a>
        <p>Find out how to get any support you need for Esper</p>
      </div>
    </div>
    <div class="homepage__footer">Apache 2.0 | Copyright © 2019 Shoonya Enterprises Inc</div>
  </div>
</template>

<style scoped>
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
  font-weight: 600;
  line-height: 1.25;
  color: #7a55a5;
}
.homepage__subheading {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: #6a8bad;
  margin: 1.8rem auto;
}

.homepage__action {
  margin: 1.8rem auto;
}
.homepage__button {
  display: inline-block;
  font-size: 1.2rem;
  /* color: #fff; */
  /* background-color: #7a55a5; */
  padding: 0.5rem 1rem;
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
  border-top: 1px solid #eaecef;
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
}

@media (max-width: 719px) {
  .homepage__links__section__item {
    max-width: 100%;
    padding: 0 2.5rem;
  }
}
.homepage__a {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: #3a5169;
}

.homepage__footer {
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
</style>
