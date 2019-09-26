<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container id="contactForm" fluid class="bg-light text-primary w-100 text-left">
    <b-row>
      <b-col cols="12" lg="6">
        <b-form
          v-if="show"
          small
          class="text-primary bg-light text-left m-3"
          @submit="onSubmit"
          @reset="onReset"
        >
          <b-form-group id="input-group-2" label="My name is:" label-for="input-2" label-size="lg">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="You may contact me on:"
            label-for="input-1"
            label-size="lg"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="I am based here:"
            label-for="input-3"
            label-size="lg"
          >
            <b-form-select
              id="input-3"
              v-model="form.location"
              :options="locations"
              required
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="I require help with the following:"
            label-size="lg"
            class="bg-light text-primary mt-5"
          >
            <b-form-checkbox-group
              id="Services-selection"
              v-model="form.service"
              :options="pservices"
              stacked
              buttons
              button-variant="outline-success"
              size="lg"
            />
          </b-form-group>
          <b-form-group id="input-group-5" label="I also need:" label-for="input-5" label-size="lg">
            <b-form-textarea
              id="input-5"
              v-model="form.enquiry"
              placeholder="Enquiry..."
              rows="3"
              max-rows="6"
            />
          </b-form-group>

          <b-button type="submit" variant="success">
            Submit
          </b-button>
          <b-button type="reset" variant="danger">
            Reset
          </b-button>
        </b-form>
      </b-col>
      <b-col class="mt-0 pl-4 text-left pl-2">
        <h4>The Odd Wave team direct:</h4>
        <!-- <h6>{{ getBase }}</h6> -->
        <h4 v-html="companyphone1" />
        <h4 v-html="companyphone2" />
        <h4 v-html="companyemail" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// const path = require('path')
const R = require('ramda')

export default {
  props: {
    pservices: {
      type: Array,
      default () {
        return [{ value: 'SEO', text: 'SEO', selected: true }]
      }
    },
    pbgimage: {
      type: Object,
      default () {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
          url: '/imgs/seodigital.jpg'
        }
      }
    },
    pstyle: {
      type: Object,
      default () {
        return { bgStyle: 'parralaxNormal text-primary text-left p-5  vh-100' }
      }
    }
  },
  data () {
    return {
      companyemail:
        '<a href="mailto:&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;">e: &#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a>',
      companyphone1: '<a href="tel:+64 210 8658 172">m: +64 210 8658 172</a>',
      companyphone2: '<a href="tel:+64 210 8823 769">m: +64 210 8823 769</a>',
      form: {
        email: '',
        name: '',
        location: null,
        service: [],
        enquiry: ''
      },
      locations: [
        { text: 'Select One', value: null },
        'New Zealand',
        'Australia',
        'Other - international'
      ],
      show: true
    }
  },
  computed: {
    gradient () {
      return {
        backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 0) 100%), url(${this.pbgimage.url})`,
        height: '100%',
        width: '100%',
        bottom: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase'
      }
    },
    getBase () {
      // path.join
      const url =
        !R.isEmpty(this.$router.options.base) &&
        this.$router.options.base !== '/'
          ? `${process.env.baseUrl}${this.$router.options.base.toLowerCase()}${
            process.env.contactUrl
          }`
          : `${process.env.baseUrl}${process.env.contactUrl}`
      return url
    }
  },
  notifications: {
    showSubmitError: {
      // You can have any name you want instead of 'showLoginError'
      title: 'Submit Failed',
      message: 'Failed to submit',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    },
    showSubmit: {
      // You can have any name you want instead of 'showLoginError'
      title: 'Enquiry submitted',
      message: 'Form submitted',
      type: 'success' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.submitForm()
    },
    async submitForm () {
      console.log(this.getBase)
      console.log({ data: this.form })
      const response = await this.$axios.$post(
        // absolute url of new forms processor
        // `${process.env.baseUrl}/api/contact`,
        this.getBase,
        { data: this.form }
      )
      if (response.statusCode === 200) {
        this.clearForm()
        this.showSubmit()
      } else {
        this.showSubmitError()
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.clearForm()
      this.showSubmit()
    },
    clearForm () {
      this.form.email = ''
      this.form.name = ''
      this.form.location = null
      this.form.service = []
      this.form.enquiry = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scoped>
#contactForm {
  text-transform: unset;
}
</style>
