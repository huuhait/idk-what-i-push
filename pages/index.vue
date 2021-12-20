<template>
  <div class="page-test">
    <nuxt-link to="/page2">
      Page 2
    </nuxt-link>

    {{ user }}
    <button @click="ChangeDataUser">Change</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import store from "@/controllers";

@Component
export default class Index extends Vue {
  get user() {
    return store.value.user
  }

  ChangeDataUser() {
    store.value.user = {
      state: "xxx",
      first_name: "John",
      last_name: "Wick"
    }
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
