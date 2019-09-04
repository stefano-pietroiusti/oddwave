<template>
  <div>
    <h1>myInjectedFunction</h1>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$myInjectedFunction('test')
  }
}
</script>
