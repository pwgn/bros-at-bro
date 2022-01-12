<template>
  <div class="counter">
    <v-btn
      depressed
      elevation="2"
      raised
      v-on:click="decrease"
    >-</v-btn>
    <h1>{{ count }}</h1>
    <v-btn
      depressed
      elevation="2"
      raised
      v-on:click="increase"
    >+</v-btn>
  </div>
</template>

<script>
import { db_get_count, db_increase_count, db_decrease_count } from '../services/firebase'

export default {
  name: 'Visitors',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    initCount: function() {
      this.count = db_get_count()
    },
    decrease: function () {
      this.count = db_decrease_count()
    },
    increase: function () {
      this.count = db_increase_count()
    }
  }
}
</script>

<style scoped>
</style>
