<template>
  <transition name="fade">
    <div v-if="show">
      <ModalBackground
        @handle-modal-background="$emit('handle-secret-modal')"
      />
      <div class="flex direction-column justify-content-space-between align-items-center noselect modal">
        <p>
          A <span
            class="marked"
          >Secret</span> allows you to delete the created link later on the <a
            href="/manage"
          >Manage</a> page.
        </p>
        <ActionButton
          @handle-action-button="$emit('handle-secret-modal')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import ActionButton from '../../../components/ActionButton';
import ModalBackground from '../../../components/ModalBackground';

export default {
  components: {
    ActionButton,
    ModalBackground,
  },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
