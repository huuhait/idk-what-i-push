<template>
  <div @click="onClicked">
    We are {{ name }}
    <!-- <Tutorial /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Test extends Vue {
  get name() {
    return "Venom"
  }

  onClicked() {
    console.log("onClicked")
  }
}
</script>
