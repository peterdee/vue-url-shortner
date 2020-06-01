<template>
  <div class="flex justify-content-center align-items-center noselect footer">
    <a
      href="https://github.com/peterdee"
    >Peter Dyumin</a>, {{ new Date().getFullYear() }} | Backend status: <div
      :class="[
        'pointer',
        statusClass,
      ]"
      :title="title"
    />
  </div>
</template>

<script>
import axios from 'axios';

import { BACKEND } from '../config';

export default {
  data() {
    return {
      title: 'Checking',
    };
  },
  computed: {
    statusClass() {
      switch (this.title) {
        case 'Checking':
          return 'checking';
        case 'Offline':
          return 'offline';
        case 'Online':
          return 'online';
        default:
          return 'checking';
      }
    },
  },
  async mounted() {
    try {
      await axios({
        method: 'GET',
        url: BACKEND,
      });
      return this.title = 'Online';
    } catch {
      return this.title = 'Offline';
    }
  },
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  font-size: 12px;
  font-weight: 200;
  height: 40px;
}
.checking, .offline, .online {
  border-radius: 50%;
  height: 10px;
  margin-left: 2px;
  width: 10px;
}
.checking {
  background-color: silver;
}
.offline {
  background-color: #ff5566;
}
.online {
  background-color: #55ff66;
}
</style>
