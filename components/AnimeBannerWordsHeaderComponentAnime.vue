<template>
  <b-container
    id="animationBanner"
    fluid
    :class="`${classname} text-secondary text-center`"
    :style="gradient"
  >
    <b-row>
      <b-col class="p-5">
        <h2 class="animHeader">
          {{ pheader }}
        </h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: 'Services'
    },
    pid: {
      type: String,
      default: 'seo-auckland'
    },
    variant: {
      type: String,
      default: 'rwcblue'
    },
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
          url: 'seodigital.jpg',
          height: 100
        }
      }
    },
    pstyle: {
      type: Object,
      default() {
        return { bgStyle: 'parralaxEffect text-primary  text-left p-5 vh-100' }
      }
    }
  },
  computed: {
    classname() {
      if (!this.pid) {
        return 'oddwave'
      }
      return this.pid
    },
    bannerImagePath() {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    gradient() {
      return {
        // backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 100%), url(${this.bannerImagePath})`,
        // backgroundImage: `linear-gradient(45deg, ${this.pbgimage.color1} 0%, ${this.pbgimage.color1} 100%)`,
        // backgroundImage: `url(${this.pbgimage.url})`,
        width: '100%',
        // minHeight: `${this.pbgimage.height}`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase',
        opacity: 0.8
      }
    }
  },
  mounted() {
    let textWrapper = document.querySelector('.animHeader')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    const anims = []
    this.$anime
      .timeline({ loop: true })
      .add({
        targets: '.animHeader .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })
      .add({
        targets: '.animHeader .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      })
  }
}
</script>
<style scoped>
.animHeader {
  position: relative;
  letter-spacing: 0.1em;
}

.animHeader .letter {
  position: relative;
  display: inline-block;
  margin: auto;
  opacity: 0;
}

.oddwave {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
}

.website-design-build-auckland {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbf00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23f2c802' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23e5c305' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23d9bf07' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23ccba09' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23bfb60b' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
}

.seo-auckland {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='500' cy='500' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23dd33bb'/%3E%3Cstop offset='1' stop-color='%23404'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='500' cy='500' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23F70' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23F70' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1000' height='1000'/%3E%3Cg fill='none' stroke='%23F6B' stroke-width='1' stroke-miterlimit='10' stroke-opacity='.3'%3E%3Crect x='12.5' y='12.5' width='975' height='975'/%3E%3Crect x='25' y='25' width='950' height='950'/%3E%3Crect x='37.5' y='37.5' width='925' height='925'/%3E%3Crect x='50' y='50' width='900' height='900'/%3E%3Crect x='62.5' y='62.5' width='875' height='875'/%3E%3Crect x='75' y='75' width='850' height='850'/%3E%3Crect x='87.5' y='87.5' width='825' height='825'/%3E%3Crect x='100' y='100' width='800' height='800'/%3E%3Crect x='112.5' y='112.5' width='775' height='775'/%3E%3Crect x='125' y='125' width='750' height='750'/%3E%3Crect x='137.5' y='137.5' width='725' height='725'/%3E%3Crect x='150' y='150' width='700' height='700'/%3E%3Crect x='162.5' y='162.5' width='675' height='675'/%3E%3Crect x='175' y='175' width='650' height='650'/%3E%3Crect x='187.5' y='187.5' width='625' height='625'/%3E%3Crect x='200' y='200' width='600' height='600'/%3E%3Crect x='212.5' y='212.5' width='575' height='575'/%3E%3Crect x='225' y='225' width='550' height='550'/%3E%3Crect x='237.5' y='237.5' width='525' height='525'/%3E%3Crect x='250' y='250' width='500' height='500'/%3E%3Crect x='262.5' y='262.5' width='475' height='475'/%3E%3Crect x='275' y='275' width='450' height='450'/%3E%3Crect x='287.5' y='287.5' width='425' height='425'/%3E%3Crect x='300' y='300' width='400' height='400'/%3E%3Crect x='312.5' y='312.5' width='375' height='375'/%3E%3Crect x='325' y='325' width='350' height='350'/%3E%3Crect x='337.5' y='337.5' width='325' height='325'/%3E%3Crect x='350' y='350' width='300' height='300'/%3E%3Crect x='362.5' y='362.5' width='275' height='275'/%3E%3Crect x='375' y='375' width='250' height='250'/%3E%3Crect x='387.5' y='387.5' width='225' height='225'/%3E%3Crect x='400' y='400' width='200' height='200'/%3E%3Crect x='412.5' y='412.5' width='175' height='175'/%3E%3Crect x='425' y='425' width='150' height='150'/%3E%3Crect x='437.5' y='437.5' width='125' height='125'/%3E%3Crect x='450' y='450' width='100' height='100'/%3E%3Crect x='462.5' y='462.5' width='75' height='75'/%3E%3Crect x='475' y='475' width='50' height='50'/%3E%3Crect x='487.5' y='487.5' width='25' height='25'/%3E%3C/g%3E%3Crect fill-opacity='.3' fill='url(%23b)' width='1000' height='1000'/%3E %3C/svg%3E");
}

.ppc-auckland {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff0c2' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
}

.creative-photographer-auckland {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='208' height='208' viewBox='0 0 200 200'%3E%3Cdefs%3E %3ClinearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%233bb6e6'/%3E%3Cstop offset='0.5' stop-color='%2342caff'/%3E%3Cstop offset='1' stop-color='%2355cfff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0.5'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='100 100 0 200 100 300 200 200'/%3E%3Cpolygon fill='url(%23b)' points='-100 100 0 230 100 100'/%3E%3Cpolygon fill='url(%23b)' points='100 100 200 230 300 100'/%3E%3Cpolygon fill='url(%23a)' points='0 0 -100 100 0 200 100 100'/%3E%3Cpolygon fill='url(%23a)' points='200 0 100 100 200 200 300 100'/%3E%3Cpolygon fill='url(%23b)' points='0 0 100 130 200 0'/%3E%3Cpolygon fill='url(%23a)' points='100 -100 0 0 100 100 200 0'/%3E%3Cpolygon fill='url(%23b)' points='-100 -100 0 30 100 -100'/%3E%3Cpolygon fill='url(%23b)' points='100 -100 200 30 300 -100'/%3E%3C/svg%3E");
}

.contact {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%2336ccb1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
