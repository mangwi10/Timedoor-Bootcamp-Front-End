<template>
  <div :class="colStyle">
    <slot></slot>
    <input :placeholder="placeholder" type="text" class="form-control" @input="$emit('input', $event.target.value)"
      :value="value">
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
      ,

    },
    colStyle: {
      type: String,
    },
    value: {
      type: String,
      default: ""
      ,

    },
  }
}
</script>
<style>

</style>
