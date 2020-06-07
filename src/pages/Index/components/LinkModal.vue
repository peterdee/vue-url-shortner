<template>
  <transition name="fade">
    <div v-if="show">
      <ModalBackground
        @handle-modal-background="closeModal"
      />
      <div class="flex direction-column justify-content-space-between align-items-center modal">
        <div class="flex direction-column width-100">
          <div class="text-center noselect title">
            Created link
          </div>
          <div class="margin-top">
            <textarea
              class="textarea"
              disabled="true"
              :value="link"
            />
          </div>
          <LinkButton
            :text="copiedText"
            @handle-click="copyToClipboard"
          />
        </div>
        <ActionButton
          @handle-action-button="closeModal"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import ActionButton from '../../../components/ActionButton';
import LinkButton from '../../../components/LinkButton';
import ModalBackground from '../../../components/ModalBackground';

export default {
  components: {
    ActionButton,
    LinkButton,
    ModalBackground,
  },
  data() {
    return {
      isCopied: false,
    };
  },
  computed: {
    copiedText() {
      return (this.isCopied && 'Copied ✓') || 'Copy link to the clipboard';
    },
  },
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
     * Handle modal closing
     * @returns {void}
     */
    closeModal() {
      this.isCopied = false;
      return this.$emit('handle-link-modal');
    },
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
      return this.isCopied = true;
    },
  },
};
</script>

<style scoped>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
