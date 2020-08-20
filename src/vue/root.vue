<template>
  <div class="text-center">
    <h1 class="display-4">Vue Counter</h1>
    <h1 style="font-weight: bold">{{ count }}</h1>
    <button class="btn btn-success" @click="incrementCounter">Count Up</button>
    <button class="btn btn-warning" @click="decrementCounter">Count Down</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    incrementCounter() {
      this.count += 1;
    },
    decrementCounter() {
      this.count -= 1;
    },
  },
};
</script>