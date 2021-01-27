<template>
  <div class="input-group">
    <span class="input-group-text">Имя</span>
    <input
      type="text"
      aria-label="First name"
      class="form-control"
      v-model="firstName"
      @change="getName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
    }
  },
  methods: {
    getName() {
      this.$store.dispatch("changeName", this.firstName);
      document.querySelector('.input-group').childNodes[1].value = "";
    }
    
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 10px;
}
</style>