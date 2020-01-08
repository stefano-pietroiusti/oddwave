<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-center m-0 mb-5 text-center">
    <!-- <b-row>
      <b-col cols="12" class="p-5">
        <h2 class="sectionHeader">
          {{ header }}
        </h2>
      </b-col>
    </b-row>-->
    <b-row no-gutters>
      <div v-for="(item, i) in team" :key="i" class="col flip-container text-center my-4">
        <div class="flipper pb-5">
          <div class="text-center text-white rounded-circle front">
            <a :href="`${item.sameAs[0]}`" :title="item.name" class="text-white text-small profileLink">
              <img :src="`${ item.image }`" :alt="item.name" class="teamImg rounded-circle">
              <div class="img-overlay-bottom text-small text-center p-3">

                <b>{{ item.name }}</b>
                <br>
                {{ item.jobTitle }}
              </div>
            </a>
          </div>

          <div
            class="lax text-center text-white rounded-circle back"
            data-lax-rotate-y_large="(vh*1.2) 90, (vh) 90, (vh*0.9) 180, (vh*0.8) 360, (vh*0.2) 360, (vh*0.1) 180, 0 90, (-100) 90"
            data-lax-rotate-y_small="(vh*1.2) 90, (vh) 90, (vh*0.6) 360, (vh*0.1) 360"
            data-lax-anchor="self"
          >
            <!-- data-lax-rotate-y="(vh*1.2) 90, (vh) 90, (vh*0.9) 180, (vh*0.8) 360, (vh*0.2) 360, (vh*0.1) 180, 0 90, (-100) 90" -->
            <a :href="`${item.sameAs[0]}`" :title="item.name" class="text-white text-small profileLink">
              <div class="img-overlay-bottom text-small text-center p-5 w-100 h-100">
                {{ item.description }}<br>Read more &#43;
              </div>
            </a>
          </div>
        </div>
        </a>
      </div>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: 'Team'
    },
    pteam: {
      type: Array,
      default() {
        return [
          {
            name: 'Jaline Van Dyk',
            sameAs: ['https://www.linkedin.com/in/jaline-pietroiusti-ab354b56'],
            jobTitle: 'Owner and Director of Digital Marketing',
            description:
              '15+ years experience in business management and online marketing.',
            image: '/imgs/stefano-pietroiusti.jpg'
          },
          {
            name: 'Stefano Pietroiusti',
            sameAs: ['https://www.linkedin.com/in/scpietro/'],
            jobTitle: 'IT Director',
            description:
              '20+ years experience in delivering cloud, web and database solutions.',
            image: '/imgs/stefano-pietroiusti.jpg'
          }
        ]
      }
    }
  },
  computed: {
    header: function() {
      return this.pheader || 'Team'
    },
    team: function() {
      return this.pteam || [{}]
    }
  }
}
</script>
<style scoped>

.img-overlay-bottom {
    position: absolute;
    bottom: 10px;
    right:0;
    left:0;
     background-color: rgba(0, 0, 0, 0.4); /*dim the background*/
}

.img-overlay-bottom {
    position: absolute;
    bottom: 10px;
    right:0;
    left:0;
     background-color: rgba(0, 0, 0, 0.4); /*dim the background*/
}

.teamImg {
  width: 100%;
  width: 100%;
}

.front, .back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
    left: 0;
    overflow:hidden;
  backface-visibility: hidden;
}

.flip-container, .flip-container .back, .flip-container .front {
      /* display: flex;
    flex-direction: column; */
    max-width: 300px;
    max-height: 300px;
    min-height: 300px;
    min-width: 300px;
    margin: 0 auto;
}

/* .back {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
} */
.back {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
}

/* .flip-container:hover .back {
    transform: rotateY(0deg);

} */
</style>
