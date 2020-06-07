<template>
  <button
    :class="[
      'flex justify-content-center align-items-center margin-top pointer',
      danger,
    ]"
    :disabled="isLoading"
    :type="type"
    @click="$emit('handle-small-button')"
  >
    <span v-if="isLoading">
      <img
        src="../assets/loader-small.svg"
        alt="Loading"
      />
    </span>
    <span v-else>
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  computed: {
    danger() {
      return (this.isDanger && 'danger') || '';
    }
  }, 
  name: 'SmallButton',
  props: {
    isDanger: {
      default() {
        return false;
      },
      required: false,
      type: Boolean,
    },
    isLoading: {
      required: true,
      type: Boolean,
    },
    text: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
button {
  background-color: rgb(43, 134, 146);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  height: 48px;
  transition: background-color 250ms ease-in-out;
  min-width: 180px;
}
button:hover {
  background-color: rgb(99, 220, 236);
  transition: background-color 250ms ease-in-out;
}
button:disabled, button:disabled:hover {
  background-color: silver;
  cursor: default;
  transition: background-color 250ms ease-in-out;
}
.danger {
  background-color: rgb(146, 43, 43);
}
.danger:hover {
  background-color: rgb(236, 99, 99);
  transition: background-color 250ms ease-in-out;
}
</style>
