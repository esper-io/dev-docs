<template>
  <div :class="{ 'has-icon': icon }" class="link-container md:w-1/2">
     <RouterLink
            v-if="isInternal"
            :to="link"
            >
            <div class="link-container_inside-box">
      <div class="link-container_inside-box_inside">
        <img
          class="link-container_inside-box_inside-image"
          :src="icon"
          alt="blog"
        />

        <div class="link-container_inside-box_inside-text">
          <div class="link-container_inside-box_inside-text_title">
            {{ title }}
          </div>
          <div class="link-container_inside-box_inside-text_desc">
            {{ subtitle }}
          </div>
          <div
            class="link-container_inside-box_inside-text_footer"
            >
            {{footer}}
          </div
          >
        </div>
      </div>
    </div>
    </RouterLink>
  </div>
</template>

<style lang="postcss">
.link-container {
  text-decoration: none;;
  width: 50%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
  @media (max-width: 664px) {
    width: 100%;
  }
}

.link-container_inside-box {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  overflow: hidden;
  height: 100%;
  border-radius: 0.25rem;
  border: 0 solid #e2e8f0;
}
.link-container_inside-box_inside {
  height: 100%;
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
}
.link-container_inside-box_inside-image {
  width: 100%;
  object-position: center;
  object-fit: cover;
  max-width: 100%;
}
.link-container_inside-box_inside-text {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.link-container_inside-box_inside-text_title {
  line-height: 1;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}
.link-container_inside-box_inside-text_desc {
  font-size: 0.875rem;
  --text-opacity: 1;
  color: #2d3748;
  font-weight: 400;
  color: rgba(45, 55, 72, var(--text-opacity));
  display: block;
  line-height: 1.25;
}
.link-container_inside-box_inside-text_footer {
  margin-top: 1rem;
  line-height: 1.25;
  display: block;
  opacity: 0.7;
  font-size: 0.875rem;
  font-weight: 400;
}
.link-panel {
  transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    @apply no-underline !important;
    box-shadow: 0 0 36px rgba(74, 124, 246, 0.1);
    transform: translateY(-4px) translateZ(0);
  }

  /* &.has-icon {
    .link-panel-icon {
      @apply block w-6 h-6 absolute;
    }
  } */
}
.flex {
  display: flex;
} 
.flex-wrap {
  flex-wrap: wrap;
} 
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

/* @screen sm {
  .link-panel-wrapper {
    @apply w-1/2 py-0;
  }
}

@screen md {
  .link-panel-wrapper {
    @apply w-1/3 py-0;
  }
} */
</style>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    footer: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    link: {
      type: String,
    },
    repo: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  computed: {
    isNonHttpURI() {
      return isMailto(this.link) || isTel(this.link)
    },

    isBlankTarget() {
      return this.target === '_blank'
    },

    isInternal() {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target() {
      if (this.isNonHttpURI) {
        return null
      }
      return isExternal(this.link) ? '_blank' : ''
    },

    rel() {
      if (this.isNonHttpURI) {
        return null
      }
      return this.isBlankTarget ? 'noopener noreferrer' : ''
    },
  },
}
</script>
