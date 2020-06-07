<template>
  <div class="flex justify-content-center align-items-center noselect margin-top error">
    <transition name="slide-fade">
      <div
        v-if="!isLoading && message"
        class="flex justify-content-center align-items-center text-center message"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    isLoading: {
      required: true,
      type: Boolean,
    },
    message: {
      default() {
        return '';
      },
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.error {
  height: 70px;
}
.message {
  background-color: rgb(146, 43, 43);
  border-radius: 3px;
  color: white;
  font-size: 20px;
  font-weight: 200;
  height: 64px;
  transition: background-color 250ms ease-in-out;
  width: 100%;
}
.message:hover {
  background-color: rgb(236, 99, 99);
  transition: background-color 250ms ease-in-out;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
