<template>
  <b-container fluid class="text-center m-0 p-5">
    <b-row>
      <b-button :variant="variant" :to="blink" class="buttonComponent btn-ripple">
        {{ btext }}
      </b-button>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    btext: {
      type: String,
      default: ''
    },
    blink: {
      type: String,
      default: 'Get Started'
    },
    pstyle: {
      type: Object,
      default () {
        return {
          color: 'info',
          buttonVariant: 'info'
        }
      }
    }
  },
  computed: {
    variant () {
      return this.pstyle.buttonVariant
    }
  }
}

</script>
<style scoped>

.buttonComponent {
  font-size: inherit;
  text-transform: none;
  font-weight: 300;
  line-height: 1.5;
  padding: 5;
}

.btn-ripple {
display: inline-block;
position: relative;
overflow: hidden;
transition: all ease-in-out .2s;
}

.btn-ripple::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  width: 50%;
  background-color: #000;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: all ease-in-out .5s;
  transform: scale(5, 5);
}

.btn-ripple:active::after {
padding: 0;
margin: 0;
opacity: .2;
transition: 0s;
transform: scale(0, 0);
}

</style>
