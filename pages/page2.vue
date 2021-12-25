<template>
  <div class="page-test">
    {{ user }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import controllers from "~/controllers"

@Component({
  layout: 'no-header-layout'
})
export default class Index extends Vue {
  get user() {
    return controllers.user
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
