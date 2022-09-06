<template>
  <div class="hello">
    <form-valid :min="0" type="number" @login="login"></form-valid>
  </div>
</template>

<script>
// import formValid from '../lib/form_valid/lib/form_valid.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // formValid
  },
  methods: {
    login () {
      confirm('已登录')
    }
  }
}
</script>
<style scoped>
</style>
