<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class DefaultLayout extends Vue {}
</script>
