<template>
  <form @submit.prevent="$emit('handle-search-form')">
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="short"
        placeholder="Short URL"
        :status="shortStatus"
        type="text"
        :value="short"
        @input="handleInput"
      />
    </div>
    <BigButton
      :isLoading="isLoading"
      text="SEARCH"
    />
  </form>
</template>

<script>
import BigButton from '../../../components/BigButton';
import Input from '../../../components/Input';

export default {
  components: {
    BigButton,
    Input,
  },
  name: 'ManageForm',
  props: {
    handleInput: {
      required: true,
      type: Function,
    },
    isLoading: {
      required: true,
      type: Boolean,
    },
    short: {
      required: true,
      type: String,
    },
    shortStatus: {
      required: true,
      type: String,
    },
  },
};
</script>
