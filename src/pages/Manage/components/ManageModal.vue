<template>
  <transition name="fade">
    <div v-if="show">
      <ModalBackground
        @handle-modal-background="$emit('handle-manage-modal')"
      />
      <div class="flex direction-column justify-content-space-between align-items-center modal">
        <div class="flex direction-column width-100">
          <div class="text-center noselect title">
            Manage Link
          </div>
          <div class="margin-top">
            Created on {{ creationDate }}
          </div>
          <div class="margin-top">
            Clicks: {{ clicks }}
          </div>
          <div class="margin-top">
            Original URL:
          </div>
          <div class="slight-margin-top">
            <Textarea
              :disabled="true"
              :value="url"
            />
          </div>
          <div class="margin-top">
            Short URL:
          </div>
          <div class="slight-margin-top">
            <Textarea
              :disabled="true"
              :value="link"
            />
          </div>
          <div class="margin-top">
            Provide a Secret to delete the link:
          </div>
          <ManageModalForm
            :handleInput="handleInput"
            :isLoading="isLoading"
            :secret="secret"
            :secretStatus="secretStatus"
            @handle-secret-form="$emit('handle-secret-form')"
            @handle-manage-modal="$emit('handle-manage-modal')"
          />
          <ErrorMessage
            :isLoading="isLoading"
            :message="error"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ErrorMessage from '../../../components/ErrorMessage';
import ManageModalForm from './ManageModalForm';
import ModalBackground from '../../../components/ModalBackground';
import Textarea from '../../../components/Textarea';

import months from '../../../utilities/months-list';

export default {
  components: {
    ErrorMessage,
    ManageModalForm,
    ModalBackground,
    Textarea,
  },
  computed: {
    creationDate() {
      const date = new Date(Number(this.updated));
      const hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
      const mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${month} ${day}, ${year}, at ${hh}:${mm}`;
    },
  },
  name: 'ManageModal',
  props: {
    clicks: {
      default() {
        return '0';
      },
      required: false,
      type: [Number, String],
    },
    error: {
      default() {
        return '';
      },
      required: false,
      type: String,
    },
    handleInput: {
      required: true,
      type: Function,
    },
    id: {
      required: true,
      type: String,
    },
    isLoading: {
      required: true,
      type: Boolean,
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
};
</script>

<style scoped>
.modal {
  background-color: white;
  border-radius: 15px;
  left: calc(50% - 216px);
  min-height: 650px;
  padding: 24px;
  position: fixed;
  top: calc(50% - 325px);
  width: 432px;
  z-index: 11;
}
.title {
  font-size: 24px;
  font-weight: 200;
  color:rgb(43, 134, 146);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
