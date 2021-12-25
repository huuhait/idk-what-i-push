<template>
  <div class="my-input">
    <label>
      {{ label }}
    </label>
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class Input extends Vue {
  @Prop() readonly value!: string;
  @Prop() readonly label!: string;
  @Prop() readonly placeholder!: string;
  @Prop() readonly type!: string;

  onInput($event: any) {
    this.$emit("input", $event.target.value)
  }
}
</script>

<style lang="less">
.my-input {
  //
}
</style>
