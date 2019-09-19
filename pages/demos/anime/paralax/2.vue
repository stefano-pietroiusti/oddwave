<template>
  <div class="demo">
    <section class="parallax">
      <div class="frontpage_text">
        <h1>Parallax Effect</h1>
        <p>Only HTML and CSS</p>
      </div>
    </section>
    <section id="content">
      <div class="text">
        <p>Lorem ipsum dolor sit amet, sed cras quis, felis nulla proin quisque asperiores officia, ipsum libero praesent aliquet, quis congue eget sem varius. Nibh semper metus pellentesque interdum amet, vel nulla nobis amet porttitor, et sit. Elementum suscipit pellentesque a, odio habitant elit nulla at diam. Ut justo quisque, wisi praesent aliquam, est accumsan laborum ut est, velit tortor laoreet, amet metus.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.parallax {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  font-family: 'Permanent Marker';
  letter-spacing: 0.3em;
  font-size: 1.5em;
  text-align: center;
}

.frontpage_text {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color: #ffffff;
  font-family: 'Nunito Sans';
  width: 500px;
  letter-spacing: 0.1em;
  line-height: 30px;
  text-align: center;
}

#content {
  background-color: #181818;
  box-sizing: border-box;
  height: 100vh;
  background-attachment: scroll;
  background-size: cover;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

::selection {
  background: #ffffff;
}
</style>
