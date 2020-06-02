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
.checking, .checking:hover, .offline, .offline:hover, .online, .online:hover {
  transition: background-color 250ms ease-in-out;
}
.checking {
  background-color: #898989;
}
.checking:hover {
  background-color: silver;
}
.offline {
  background-color: rgb(146, 43, 43);
}
.offline:hover {
  background-color: rgb(236, 99, 99);
}
.online {
  background-color: rgb(43, 134, 146);
}
.online:hover {
  background-color: rgb(99, 220, 236);
}
</style>
