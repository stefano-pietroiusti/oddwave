<template>
  <b-container fluid class="p-5">
    <b-row>
      <b-col sm="12" md="6" lg="4" xl="3">
        <b-card-group deck class="mb-3">
          <b-card
            bg-variant="transparent"
            border-variant="light"
            header-bg-variant="light"
            header-text-variant="danger"
            text-variant="dark"
            header="AccessabileAccessabileAccessabileAccessabileAccessabile"
            class="text-center align-items-center w-100"
            :img-src="require('~/assets/imgs/features/camera-retro-solid.svg')"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sdsdsd </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
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

.card-deck {
    display: flex;
    flex-direction: column;
}

.card img {
  width: 50px;
  vertical-align: middle;
  align-content: center;
  margin: 10;
    filter:
    invert(0.5)
    sepia(1)
    hue-rotate(200deg)
    saturate(4)
    brightness(1);

}

.card img:hover {
  filter:
    invert(0.5)
    sepia(1)
    hue-rotate(200deg)
    saturate(4)
    brightness(1);
}
.promo-content span {
    font-size: 30px;
    line-height: 40px;
    display: block;
    color: #fff;
}

.promo-item {
    background: #fff;
    display: block;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in;
    -webkit-box-shadow: 0 1px 2px rgba(212, 212, 212, 0.35);
    box-shadow: 0 1px 2px rgba(212, 212, 212, 0.35);
}

.promo-item:hover {
    -webkit-box-shadow: 0 1px 2px rgba(212, 212, 212, 0.55);
    box-shadow: 0 1px 2px rgba(212, 212, 212, 0.55);
    cursor: pointer;
    border-radius: 50px 0 50px 0;
}

.promo-content p {
    margin-bottom: 25px;
}

.promo-content h6 {
    border-bottom: 1px solid rgba(250, 240, 240, 0.5);
        padding-bottom: 25px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

</style>
