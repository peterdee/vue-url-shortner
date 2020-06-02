<template>
  <transition name="fade">
    <div v-if="show">
      <div class="background" />
      <div class="flex direction-column justify-content-space-between align-items-center modal">
        <div class="flex direction-column width-100">
          <div class="text-center title">
            Created link
          </div>
          <div class="margin-top">
            <textarea
              class="textarea"
              disabled="true"
              :value="link"
            />
          </div>
          <div class="slight-margin-top align-self-center">
            <button
              class="button-copy pointer"
              type="button"
              @click="copyToClipboard"
            >
              Copy link to the clipboard
            </button>
          </div>
        </div>
        <button
          class="margin-top pointer button-close"
          type="button"
          @click="$emit('handle-link-modal')"
        >
          OK
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LinkModal',
  props: {
    id: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    show: {
      required: true,
      type: Boolean,
    },
    url: {
      required: true,
      type: String,
    },
  },
  methods: {
    /**
     * Copy the link to the clipboard
     * @returns {void}
     */
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.link;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
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
  height: 270px;
  left: calc(50% - 216px);
  padding: 24px;
  position: fixed;
  top: calc(50% - 135px);
  width: 432px;
  z-index: 11;
}
.title {
  font-size: 24px;
  font-weight: 200;
  color:rgb(43, 134, 146);
}
.textarea {
  background-color: rgb(240, 240, 240);
  border: none;
  border-radius: 3px;
  color: black;
  font-size: 16px;
  height: 80px;
  padding: 16px;
  resize: none;
  width: 100%;
}
.button-copy {
  background-color: transparent;
  border: none;
  color:rgb(43, 134, 146);
  font-size: 12px;
  font-weight: 200;
}
.button-copy:hover {
  text-decoration: underline;
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
