<template>
  <form>
    <div class="form-fields">
        <div class="form-input">
            <input type="text" id="name" />
        </div>
        <div class="form-input">
            <input type="numer" id="numer" />
        </div>
        <div class="form-input full-width">
            <input type="text" id="detail" />
        </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
    .form-fields {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .form-fields .form-input {
        width: 49%;
        margin-bottom: 15px;
    }
    .form-fields .form-input.full-width {
        width: 100%;
    }
    .form-fields .form-input input {
        width: 100%;
        border: 1px solid #ddd;
        outline: none;
        height: 37px;
        padding: 0 10px;
        box-shadow: none;
        background: #fff;
    }
</style>
