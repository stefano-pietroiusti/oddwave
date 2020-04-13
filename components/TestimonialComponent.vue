<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <!-- <b-col xs="12" sm="12" md="12" lg="2" /> -->
      <b-col xs="12" sm="12" md="12" lg="12" class="px-5 align-items-center text-larger">
        <h2>{{ header }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <!-- <b-col lg="2" /> -->
      <b-col xs="12" sm="12" md="12" lg="12" class="px-5 align-items-center text-larger">
        <blockquote>
          <p>
            <q>{{ blockquote }}</q>
          </p>
          <footer>{{ footer }}</footer>
        </blockquote>
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
      default: ''
    },
    pcontent: {
      type: Object,
      default: {
        blockquote:
          'Our website, SEO and Google Ad campaigns are continually evolving under the guidance of the Odd Wave and as a result, turnover increased from $1 Million in 2015 to  $ 1.5 Million in 2016, to $1.8 Million in 2017, to $2.6 Million in 2018 and to $3 Million 2019. We are extremely satisfied with their service. ',
        footer: 'Mr. Pretorius, Founder, Jumalutech Fencing'
      }
    }
  },
  computed: {
     header: function() {
      return this.pheader || 'Section'
    },
    blockquote: function() {
      return this.pcontent.blockquote || 'Section'
    },
    footer: function() {
      return this.pcontent.footer || 'Section content'
    }
  }
}
</script>
<style scoped lang="scss">
.spanImage {
  padding-left: 25px;
  display: inline-block;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  font-weight: 600;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  color: #00c3ff;
}

h2:before {
  content: '';
  position: absolute;
  width: 30%;
  height: 5px;
  bottom: 0;
  left: 25%;
  border-bottom: 5px solid #00c3ff;
}

.underline {
  content: '';
  position: absolute;
  width: 50%;
  height: 5px;
  bottom: 0;
  left: 25%;
  background-color: black;
}

#aboutus {
  margin-top: 5em;
}

@media screen and (max-width: 992px) {
  #aboutus {
    margin-top: 3em;
  }
}

blockquote {
  margin: 0 auto;
  padding: 1em;
  border-left: 5px solid #999;
}
blockquote:before {
  display: none;
}
blockquote:not(:first-of-type) {
  margin-top: .5em;
}
blockquote p {
  color: #555;
  font-size: 1.2rem;
  // font-family: 'PT Serif', Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
}
blockquote footer {
  margin-top: .5em;
  padding: 0;
  color: #777;
  font-size: 12pt;
  text-align: left;
  font-style: italic;
}
blockquote footer:before {
  content: '— ';
}
blockquote:nth-of-type(even) {
  text-align: right;
  border-left: none;
  border-right: 5px solid #999;
}
blockquote:nth-of-type(even) footer {
  text-align: right;
}
blockquote:nth-of-type(even) footer:before {
  content: '';
}
blockquote:nth-of-type(even) footer:after {
  content: ' —';
}
@element 'blockquote' and (min-width: 300px) {
  blockquote {
    padding: 1em 20% 1em 1em;
  }
  blockquote p {
    font-size: 14pt;
  }
  blockquote:nth-of-type(even) {
    padding: 1em 1em 1em 20%;
  }
}
</style>
