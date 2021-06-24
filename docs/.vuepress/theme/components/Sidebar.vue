<template>
  <aside class="sidebar">
    <NavLinks />
    <slot name="top" />
    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
    <ul class="support">
      <li class="support-title">
        Support
      </li>
      <li>
        <a href="/home/faq.html">FAQ</a>
      </li>
      <li>
        <a href="/home/support.html">Contact</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.support
    border-top: 1px solid #97979714;
    margin-right: -2rem !important;
    font-family: "Nunito Sans", sans-serif
    padding: 0.35rem 1rem 0.35rem 1.25rem !important
    font-weight: 500 !important
    font-size: 1em
    color: #151828 !important
    li
      a
        font-size: 1em
        font-weight: normal !important;
        margin-top: 0.9rem;
    .support-title
      font-weight: bold
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1em
      line-height 1.7
      font-weight 600 !important
    & > li:not(:first-child)
      margin-top .65rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
