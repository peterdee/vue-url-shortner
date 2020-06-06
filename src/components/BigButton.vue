<template>
  <button
    class="flex justify-content-center align-items-center margin-top pointer"
    :disabled="isLoading"
    type="submit"
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
  name: 'BigButton',
  props: {
    isLoading: {
      required: true,
      type: Boolean,
    },
    text: {
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
  font-size: 20px;
  height: 66px;
  transition: background-color 250ms ease-in-out;
  width: 100%;
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
</style>
