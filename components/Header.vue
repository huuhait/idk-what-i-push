<template>
  <div>
    Header
    <nuxt-link to="/">Page 1</nuxt-link>
    <nuxt-link to="/page2">Page 2</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Header extends Vue {
}
</script>
