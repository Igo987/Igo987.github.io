<template>
  <div id="app">
    <name/>
    <pole :promise="promise" 
    @change-value="addToDo" 
    @to-click="toClick"
     />
    <spisok :list="list"
    />
  </div>
</template>

<script>
import spisok from "./components/spisok";
import pole from "./components/pole";
import name from "./components/name";

export default {
  name: "App",
  components: {
    spisok,
    pole,
    name
  },
  data() {
    return {
      list: [],
      promise: "Я хочу",
      item: "",
      length: 2,
    }
  },
  methods: {
    addToDo() {
      this.item = event.target.value;
    },
    toClick() {
      Array.from(this.item).length > this.length
        ? this.list.push(this.item)
        : alert("Введите что-нибудь (ещё)");
       document.querySelector(".flex-nowrap").childNodes[1].value = "";
       document.querySelector(".flex-nowrap").childNodes[1].focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  width: 600px;
}
</style>
