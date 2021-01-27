<template>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">{{ this.promise }}</span>
    <input
      type="text"
      class="form-control"
      placeholder="квартиру,машину,мировую славу"
      aria-describedby="addon-wrapping"
      @change = "changeValue"
      
    />
    <button type="button" class="btn btn-info"  @click="toClick" >
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  props: {
    promise: String,
  },
  methods: {
    changeValue() {
      this.$emit("change-value");  
    },
    toClick() {
        this.$emit("to-click");
    }
  },
};
</script>