<template>
  <input
    :class="[
      'styles',
      borderStatus,
    ]"
    :disabled="disabled"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :value="value"
     @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  computed: {
    borderStatus() {
      switch(this.status) {
        case 'active':
          return '';
        case 'error':
          return 'error';
        case 'success':
          return 'success';
        default:
          return '';
      }
    },
  },
  name: 'Input',
  props: {
    disabled: {
      required: true,
      type: Boolean,
    },
    name: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: [Number, String],
    },
  },
}
</script>

<style scoped>
.styles {
  background-color: rgb(240, 240, 240);
  border: none;
  border-bottom: 2px solid rgb(225, 225, 225);
  border-radius: 3px;
  font-size: 20px;
  padding: 20px;
  transition: border-bottom 350ms ease-in-out;
  width: 100%;
}
.styles:focus {
  border-bottom: 2px solid #898989;
  outline: none;
}
.error {
  border-bottom: 2px solid rgb(146, 43, 43);
  transition: border-bottom 350ms ease-in-out;
}
.success {
  border-bottom: 2px solid rgb(43, 134, 146);
  transition: border-bottom 350ms ease-in-out;
}
</style>
