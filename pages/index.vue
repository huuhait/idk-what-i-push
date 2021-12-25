<template>
  <div class="page-test">
    <form @submit.prevent="onSubmit">
      <Input v-model="email" type="text" label="Email" />
      <br>
      <Input v-model="password" type="password" label="Password" />
      <br>
      <button type="submit">Submit</button>
    </form>

    {{ user }}
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "nuxt-property-decorator"
import controllers from "@/controllers";
import Input from "~/components/Input.vue";

@Component
export default class Index extends Vue {
  @Ref("email-input") readonly EmailInput!: Input;

  email = "";
  password = "";

  get user() {
    return controllers.user
  }

  async onSubmit() {
    await controllers.Login(this.email, this.password);
  }

  // http://learn.huuhait.me/api/v2/identity/session
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
