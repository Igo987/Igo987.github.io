<template>
  <div class="wrapper">
    <p class="list">
      {{ getName }}, вот твой список задач. Осталось выполнить
      {{ this.list.length }}
    </p>
    <button type="button" class="btn btn-info" @click="toogle">
      {{ visiblle ? "Закрыть список" : "Открыть список" }}
    </button>
    <transition name="tracking">
      <div v-if="visiblle" class="flex">
        <transition-group name="flicker">
          <span
            class="item"
            v-for="(item, index) in list"
            ref="value"
            :key="index"
            @click.right.prevent="add(index)"
            @dblclick="removeItem(index)"
            @click.middle="content(index)"
            >{{ item }}</span
          >
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      visiblle: false,
    };
  },
  computed: {
    getName() {
      return this.$store.getters.getFirstName;
    },
  },
  methods: {
    toogle() {
      this.visiblle = !this.visiblle;
    },
    add(index) {
      this.$refs.value[index].classList.toggle("important");
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
    content(index) {
      this.$refs.value[index].textContent = document.querySelector(".flex-nowrap").childNodes[1].value;
    },
  },
};
</script>

<style scoped>
span {
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 80%;
}
.list {
  margin-top: 5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
}
.flex {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}
.item {
  width: 100%;
  border: 1px solid rgb(14, 127, 192);
  border-radius: 5px;
  margin: 2px;
  padding: 2px;
}

.important {
  color: royalblue;
  font-family: fantasy;
  border-color: blueviolet;
}

.tracking-enter-active {
  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.tracking-leave-active {
  -webkit-animation: tracking-out-expand 0.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: tracking-out-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.flicker-leave-active {
  -webkit-animation: flicker-out-1 1s linear both;
  animation: flicker-out-1 1s linear both;
}

.flicker-enter-active {
  -webkit-animation: tracking-in-expand-fwd 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes flicker-out-1 {
  0% {
    opacity: 1;
  }
  13.9% {
    opacity: 1;
  }
  14% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  14.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  15% {
    opacity: 1;
  }
  22.9% {
    opacity: 1;
  }
  23% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  24.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  25% {
    opacity: 1;
  }
  34.9% {
    opacity: 1;
  }
  35% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  39.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  40% {
    opacity: 1;
  }
  42.9% {
    opacity: 1;
  }
  43% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  44.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  54.9% {
    opacity: 1;
  }
  55% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  69.4% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  69.5% {
    opacity: 1;
  }
  69.9% {
    opacity: 1;
  }
  70% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  79.4% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  79.9% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  89.8% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  89.9% {
    opacity: 1;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  90% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flicker-out-1 {
  0% {
    opacity: 1;
  }
  13.9% {
    opacity: 1;
  }
  14% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  14.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  15% {
    opacity: 1;
  }
  22.9% {
    opacity: 1;
  }
  23% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  24.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  25% {
    opacity: 1;
  }
  34.9% {
    opacity: 1;
  }
  35% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  39.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  40% {
    opacity: 1;
  }
  42.9% {
    opacity: 1;
  }
  43% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  44.9% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  54.9% {
    opacity: 1;
  }
  55% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  69.4% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  69.5% {
    opacity: 1;
  }
  69.9% {
    opacity: 1;
  }
  70% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  79.4% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  79.9% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  89.8% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  89.9% {
    opacity: 1;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  90% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes tracking-out-expand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}
@keyframes tracking-out-expand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>