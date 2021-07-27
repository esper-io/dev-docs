<template>
  <div class="home">
    <div class="homepage__headerbox">
      <h1 class="homepage__heading">
        Esper Documentation
      </h1>
      <p class="homepage__subheading">
        Documentation for all the Esper Dev APIs, SDKs, and Tools.
      </p>
      <p>
        <a
          href="https://esper.io/signup/"
          class="homepage__button"
        >Sign up</a>
        <a
          href="/home/"
          class="homepage__button homepage_button_two"
        >Overview</a>
      </p>
    </div>
    <div
      class="homepage__links__section"
      style="margin-top: 5rem;"
    >
      <a
        href="https://api.esper.io/"
        class="homepage__links__section__item"
      >
        <div style="padding-bottom: 1rem">
          <img
            class="no-shadow"
            src="./icons/ApiReferenceIcon.svg"
            alt="api"
          >
        </div>
        <div class="homepage__a">API Reference</div>
        <p>API Documentation and OpenAPI Specification.</p>
      </a>
      <a
        href="/home/espercli.html"
        class="homepage__links__section__item"
      >
        <div style="padding-bottom: 1rem">
          <img
            class="no-shadow"
            src="./icons/EsperCliIcon.svg"
            alt="cli"
          >
        </div>
        <div class="homepage__a">CLI</div>
        <p>Command line tool for the APIs.</p>
      </a>
      <a
        href="/home/pythonsdk.html"
        class="homepage__links__section__item"
      >
        <div style="padding-bottom: 1rem">
          <img
            class="no-shadow"
            src="./icons/EsperSdkIcon.svg"
            alt="sdk"
          >
        </div>
        <div class="homepage__a">SDK</div>
        <p>Python library to call the APIs.</p>
      </a>
    </div>
    <div class="homepage__links__section">
      <a
        href="/home/esperplugin.html"
        class="homepage__links__section__item homepage__links__section__item2"
      >
        <div style="padding-bottom: 1rem">
          <img
            class="no-shadow"
            src="./icons/EsperPluginIcon.svg"
            alt="plugin"
          >
        </div>
        <div class="homepage__a">Tools for Android™ Studio</div>
        <p>Plugin for Android Studio, Virtual Devices, Enhanced Android.</p>
      </a>
      <a
        href="https://console-docs.esper.io"
        class="homepage__links__section__item homepage__links__section__item2"
      >
        <div style="padding-bottom: 1rem">
          <img
            src="./icons/EsperConsoleIcon.svg"
            alt="console"
          >
        </div>
        <div class="homepage__a">Console</div>
        <p>Device Onboarding and Management Platform.</p>
      </a>
      <a
        href="https://blog.esper.io"
        class="homepage__links__section__item homepage__links__section__item2"
      >
        <div style="padding-bottom: 1rem">
          <img
            class="no-shadow"
            src="./icons/EsperBlogIcon.svg"
            alt="blog"
          >
        </div>
        <div class="homepage__a">Blog</div>
        <p>Find out the latest about Esper on our Blog.</p>
      </a>
    </div>
    <div class="homepage__footer">
      Apache 2.0 | © 2021 Esper, Inc.
      <div style="font-size: 0.5em;">
        Android is a trademark of Google LLC
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 1em;
  font-weight: normal;
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
  margin-top: 20vh;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.25;
  color: #7a55a5;
  font-family: 'Nunito Sans', sans-serif;
}
.homepage__subheading {
  max-width: 37rem;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #6a8bad;
  font-family: 'Nunito Sans', sans-serif;
  margin: 1.8rem auto;
  margin-bottom: 3rem;
}

.homepage__action {
  margin: 1.8rem auto;
}
.homepage__button {
  font-weight: normal !important;
  font-family: 'Nunito Sans', sans-serif;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 1rem;
  /* color: #fff; */
  /* background-color: #7a55a5; */
  padding: 0.25rem 3rem;
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
  /* padding: 1.2rem 0;
  margin-top: 2.5rem; */
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
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 82, 204, 0.08);
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0rem 2rem 0rem;
  background-color: #fcfdff82;
  border-radius: 4px;
}

.homepage__links__section__item:hover {
  background-color: #dfe3e68c;
}

.homepage__links__section__item:active {
  background-color: #dfe3e6;
}

.homepage__links__section__item2 {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
  min-height: 15rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0rem 1rem 0rem;
  border-radius: 4px;
}

@media (max-width: 719px) {
  .homepage__links__section__item {
    flex-wrap: wrap;
    max-width: 100%;
    padding: 0 2.5rem;
    border: solid 1px #dfe3e6;
    text-align: center;
    min-height: 13rem;
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
    /* height: 16.5rem; */
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

@media (max-width: 586px) {
  .homepage__links__section__item {
    max-width: 100%;
    border: solid 1px #dfe3e6;
    text-align: center;
    margin-bottom: 2rem;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .homepage__button {
    margin-right: 0rem;
    margin-bottom: 1rem;
    display: block;
  }
}

@media (max-width: 553px) {
  .homepage__links__section__item {
    max-width: 100%;
    border: solid 1px #dfe3e6;
    text-align: center;
    background-color: rgba(250, 250, 250, 0.3);
    padding-top: 1rem;
  }
}

.homepage__a {
  font-size: 1.6rem;
  border-bottom: none;
  padding-bottom: 0;
  color: #3a5169;
  font-family: 'Nunito Sans', sans-serif;
}

.homepage__links__section__item > p {
  font-family: 'Nunito Sans', sans-serif;
  padding: 0rem 1rem;
  min-height: 54px;
}

.homepage__footer {
  padding: 2.5rem;
  text-align: center;
  color: #4e6e8e;
}
</style>

<script>
export default {
  mounted() {
    const params = new URL(document.location).searchParams
    const name = params.get('esper_tenant_name')
    if (name) {
      document.cookie = `esper_tenant_name=${name}`
    }
  },
}
</script>
