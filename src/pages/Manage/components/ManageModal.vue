<template>
  <transition name="fade">
    <div v-if="show">
      <ModalBackground
        @handle-modal-background="$emit('handle-manage-modal')"
      />
      <div class="flex direction-column justify-content-space-between align-items-center modal">
        <div class="flex direction-column width-100">
          <div class="text-center noselect title">
            Short URL Link
          </div>
          <div class="margin-top">
            Created: {{ creationDate }}
          </div>
          <div class="margin-top">
            Original URL: {{ url }}
          </div>
          <div class="margin-top">
            Short URL: {{ link }} (ID {{ id }})
          </div>
          <div class="margin-top">
            Clicks: {{ clicks }}
          </div>
        </div>
        <button
          class="margin-top pointer noselect button-close"
          type="button"
          @click="closeModal"
        >
          OK
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalBackground from '../../../components/ModalBackground';

export default {
  components: {
    ModalBackground,
  },
  computed: {
    creationDate() {
      return new Date(this.updated);
    },
  },
  name: 'LinkModal',
  props: {
    clicks: {
      default() {
        return '0';
      },
      required: false,
      type: [Number, String],
    },
    id: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    secret: {
      required: true,
      type: String,
    },
    secretStatus: {
      required: true,
      type: String,
    },
    show: {
      required: true,
      type: Boolean,
    },
    updated: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
  },
  methods: {

  },
};
</script>

<style scoped>
.modal {
  background-color: white;
  border-radius: 15px;
  height: 370px;
  left: calc(50% - 216px);
  padding: 24px;
  position: fixed;
  top: calc(50% - 185px);
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
