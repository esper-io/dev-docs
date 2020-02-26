<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-top 8rem
  padding-bottom 5rem
  display block
  width fit-content
  margin auto
  margin-bottom 2rem
  @media (max-width: 719px)
    padding-top: 5rem
    padding-left: 1rem
    padding-bottom 3rem
    padding-right: 1rem
  .content__default
    background #fff
    padding-bottom 5rem
    border-radius: 5px;
    // box-shadow 0 7px 14px 0 rgba(60,66,87, 0.12), 0 3px 6px 0 rgba(0,0,0, 0.12);

</style>
