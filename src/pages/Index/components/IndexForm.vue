<template>
  <form @submit.prevent="$emit('handle-form')">
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="url"
        placeholder="URL"
        :status="URLStatus"
        type="text"
        :value="url"
        @input="handleInput"
      />
    </div>
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="secret"
        placeholder="Secret"
        :status="secretStatus"
        type="text"
        :value="secret"
        @input="handleInput"
      />
    </div>
    <LinkButton
      text="Why do I need to provide a Secret?"
      @handle-click="$emit('handle-secret-modal')"
    />
    <BigButton
      :isLoading="isLoading"
      text="CREATE"
    />
  </form>
</template>

<script>
import BigButton from '../../../components/BigButton';
import Input from '../../../components/Input';
import LinkButton from '../../../components/LinkButton';

export default {
  components: {
    BigButton,
    Input,
    LinkButton,
  },
  name: 'IndexForm',
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
    url: {
      required: true,
      type: String,
    },
    URLStatus: {
      required: true,
      type: String,
    },
  },
};
</script>
