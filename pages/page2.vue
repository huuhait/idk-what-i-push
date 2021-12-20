<template>
  <div class="page-test">
    <nuxt-link to="/">
      Page 1
    </nuxt-link>

    {{ user }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import store from "~/controllers"

@Component
export default class Index extends Vue {
  get user() {
    return store.value.user
  }
}
</script>

<style lang="less">
.page-test {
  &-button {
    color: blue;

    &:hover {
      color: yellow;
    }

    &:focus {
      color: yellowgreen;
    }
  }

  p {
    color: red;
  }
}
</style>
