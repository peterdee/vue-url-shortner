<template>
  <transition name="fade">
    <div v-if="show">
      <div
        class="background"
        @click="$emit('handle-secret-modal')"
      />
      <div class="flex direction-column justify-content-space-between align-items-center modal">
        <p>
          A <span
            class="marked"
          >Secret</span> allows you to delete the created link later on the <a
            href="/manage"
          >Manage</a> page.
        </p>
        <button
          class="margin-top pointer button-close"
          type="button"
          @click="$emit('handle-secret-modal')"
        >
          OK
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SecretModal',
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.background {
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.modal {
  background-color: white;
  border-radius: 15px;
  height: 160px;
  left: calc(50% - 175px);
  padding: 24px;
  position: fixed;
  top: calc(50% - 120px);
  width: 350px;
  z-index: 11;
}
.marked {
  background-color:rgb(225, 225, 225);
  border-radius: 5px;
  padding: 2px 5px;
}
.button-close {
  background-color: rgb(43, 134, 146);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  padding: 8px 0;
  transition: background-color 250ms ease-in-out;
  width: 100px;
}
.button-close:hover {
  background-color: rgb(99, 220, 236);
  transition: background-color 250ms ease-in-out;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
