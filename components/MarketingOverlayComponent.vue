<template>
  <b-container fluid class="bg-secondary">
    <br>
    <br>
    <b-container fluid class="bar bg-primary text-right  border-primary">
      <div class="card bg-primary border-primary">
        <b-jumbotron
          bg-variant="secondary"
          text-variant="primary"
          border-variant="primary"
          class="text-break text-center"
        >
          <template slot="header">
            {{ pheader }}
          </template>
          <template slot="lead">
            <h3>{{ plead }}</h3>
          </template>
          <hr class="my-4 hrprimary">
          <h4>{{ ptext }}</h4>
          <hr class="my-4 hrprimary">
          <b-button variant="info" to="/contact" class="btn-lg">
            Enquire about {{ penquire }}
          </b-button>
        </b-jumbotron>
      </div>
      <div class="bartext bg-primary text-secondary">
        {{ pcontent }}
      </div>
    </b-container>
    <br>
    <br>
  </b-container>
</template>
<script>
export default {
  props: {
    pcontent: {
      type: String,
      default:
        'testing content testing content testing content testing content testing content testing content testing content testing content testing content'
    },
    pheader: {
      type: String,
      default: 'Marketing'
    },
    plead: {
      type: String,
      default:
        'Marketing lead text  lead text  lead text  lead text  lead text  lead text  lead text '
    },
    ptext: {
      type: String,
      default:
        'Marketing text Marketing text Marketing text Marketing text Marketing text Marketing text'
    },
    penquire: {
      type: String,
      default: 'Service'
    }
  }
}
</script>
<style scoped>
.card,
.imageContainerImage {
  z-index: 1;
  -ms-transform: rotate(-10deg); /* IE 9 */
  -webkit-transform: rotate(-10deg); /* Safari prior 9.0 */
  transform: rotate(-10deg); /* Standard syntax */
}

.bar {
  position: relative;
  width: 100%;
  height: 25vw;
  overflow: visible;
  z-index: 1;
}
.card {
  margin-top: 5vw;
  position: relative;
  top: -2vw;
  left: 3vw;
  width: 42vw;
  height: 30vw;
  /* background-color: rgb(144, 216, 29); */
  z-index: 10;
  overflow: visible;
  border-radius: 0.5vw;
  /* -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg); */
}
/* .imageContainerImage {
  position: relative;
  background-attachment:local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
  top: -38vw;
  left: 6vw;
  width: 44vw;
  height: 31vw;
  z-index: 20;
  overflow: visible;
  border-radius: 0.5vw;
} */

.bartext {
  width: 100%;
  height: 20vh;
  font-size: 1.5vw;
  padding: 2vw;
  position: relative;
  width: 40vw;
  height: 20vw;
  top: -30vw;
  left: 50vw;
  color: #fff;
  z-index: 5;
  overflow: visible;
  text-align: left;
  line-height: 3vw;
}
</style>
