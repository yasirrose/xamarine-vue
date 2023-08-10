<template>
  <div class="toggle-slider" :class="{ 'active': isActive }" @click="toggle">
    <div class="slider"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.toggle-slider {
  width: 45px;
  height: 24px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
}

.active {
  background-color: #3bb873; /* Change to your desired active color */
}

.slider {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 1px;
    transition: transform 0.2s;
    left: 2px;
}

.active .slider {
  transform: translateX(20px);
}
</style>
