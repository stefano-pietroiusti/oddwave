<template>
  <!-- <footer class="footer m-0"> -->
  <b-container fluid class="m-0 text-center footer">
    <b-row>
      <b-col xs="12" md="12" class="social">
        <!-- <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />-->
        <a href="#" class="fa fa-facebook" />
        <a href="#" class="fa fa-twitter" />
        <a href="#" class="fa fa-google" />
        <a href="#" class="fa fa-linkedin" />
        <a href="#" class="fa fa-youtube" />
        <a href="#" class="fa fa-instagram" />
        <a href="#" class="fa fa-pinterest" />
        <a href="#" class="fa fa-snapchat-ghost" />
        <a href="#" class="fa fa-skype" />
        <a href="#" class="fa fa-android" />
        <a href="#" class="fa fa-dribbble" />
        <a href="#" class="fa fa-vimeo" />
        <a href="#" class="fa fa-tumblr" />
        <a href="#" class="fa fa-vine" />
        <a href="#" class="fa fa-foursquare" />
        <a href="#" class="fa fa-stumbleupon" />
        <a href="#" class="fa fa-flickr" />
        <a href="#" class="fa fa-yahoo" />
        <a href="#" class="fa fa-reddit" />
        <a href="#" class="fa fa-rss" />
      </b-col>
      <b-col xs="12" md="12" class="copyright">
        <span>{{ copyright }}</span>
      </b-col>
    </b-row>
  </b-container>

  <!-- <div class="row">
      <div class="col-4 text-left  align-middle">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'servicestack' }"
          class="fa-1x primary"
        />THE ODD WAVE
      </div>
      <div class="col-4 fa-1x  text-center  align-top">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
      </div>
      <div class="col-4 small text-right  align-middle">
        <span>{{ copyright }}</span>
      </div>
  </div>-->
  <!-- </footer> -->
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: '© 2019 Copyright The Odd Wave',
      email: 'info@theoddwave.co.nz',
      phone: '+642108823769',
      poweredBy: 'powered by modern web technologies'
    }
  }
}
</script>
<style scoped>
.footer {
  /* background:rgba(255,255,255,.5); */
  bottom: 0;
  position: fixed;
  height: 30vh;
  /* height: 20vh; */
}

.social {
   /* background-color: var(--primary); */
  color: var(--white);
  /* background: rgba(255,255,255,.5); */
  font-weight: 10;
  /* font-size: 4vmin; */
  padding-top:1.5vh;
}

.copyright {
  background-color: var(--gray);
  color: var(--white);
  font-weight: 10;
  font-size: 1.6vmin;
  height: 30vh;
  padding-top:2.5vh;
  vertical-align: middle;
}

/* .fa {
  padding: 20px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  text-decoration: none;
  border-radius: 50%;
  opacity: 1;
} */

.fa {
  padding: 1.5vmin;
  font-size: 4vmin;
  width: 9vmin;
  text-align: center;
  text-decoration: none;
  margin: 1vmin .5vmin;;
  text-decoration: none;
  border-radius: 50%;
  opacity: 0.6;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa-pinterest {
  background: #cb2027;
  color: white;
}

.fa-snapchat-ghost {
  background: #fffc00;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.fa-skype {
  background: #00aff0;
  color: white;
}

.fa-android {
  background: #a4c639;
  color: white;
}

.fa-dribbble {
  background: #ea4c89;
  color: white;
}

.fa-vimeo {
  background: #45bbff;
  color: white;
}

.fa-tumblr {
  background: #2c4762;
  color: white;
}

.fa-vine {
  background: #00b489;
  color: white;
}

.fa-foursquare {
  background: #45bbff;
  color: white;
}

.fa-stumbleupon {
  background: #eb4924;
  color: white;
}

.fa-flickr {
  background: #f40083;
  color: white;
}

.fa-yahoo {
  background: #430297;
  color: white;
}

.fa-soundcloud {
  background: #ff5500;
  color: white;
}

.fa-reddit {
  background: #ff5700;
  color: white;
}

.fa-rss {
  background: #ff6600;
  color: white;
}
</style>
