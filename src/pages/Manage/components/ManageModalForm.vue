<template>
  <form
    class="margin-top"
    @submit.prevent="$emit('handle-secret-form')"
  >
    <Input
      :disabled="isLoading"
      name="secret"
      placeholder="Secret"
      :status="secretStatus"
      type="text"
      :value="secret"
      @input="handleInput"
    />
    <div class="flex justify-content-space-between">
      <SmallButton
        :isLoading="isLoading"
        isDanger="true"
        text="DELETE"
        type="submit"
        @handle-small-button="$emit('handle-secret-form', $event)"
      />
      <SmallButton
        :isLoading="isLoading"
        text="CANCEL"
        type="button"
        @handle-small-button="$emit('handle-manage-modal')"
      />
    </div>
  </form>
</template>

<script>
import Input from '../../../components/Input';
import SmallButton from '../../../components/SmallButton';

export default {
  components: {
    Input,
    SmallButton,
  },
  name: 'ManageModalForm',
  props: {
    handleInput: {
      required: true,
      type: Function,
    },
    isLoading: {
      required: true,
      type: Boolean,
    },
    secret: {
      required: true,
      type: String,
    },
    secretStatus: {
      required: true,
      type: String,
    },
  },
};
</script>
