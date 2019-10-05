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
              v-model="form.emailow"
              type="email"
              required
              placeholder="Enter email"
              size="lg"
            />
          </b-form-group>
          <b-form-group id="email" label="Email:" label-for="email" label-size="sm">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              size="sm"
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
          <!-- <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" /> -->
          <b-button id="submit" type="submit" variant="success">
            Submit
          </b-button>
          <b-button id="reset" type="reset" variant="danger">
            Reset
          </b-button>
        </b-form>
      </b-col>
      <b-col class="p-3 text-left">
        <!-- <h6>{{ getBase }}</h6> -->
        <span v-html="companyphone1" />
        <br>
        <span v-html="companyphone2" />
        <br>
        <span v-html="companyemail" />
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
          url: 'seodigital.jpg'
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
        '<a class="fa-contact" href="mailto:&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;"><i class="fa fa-envelope fa-contact">&nbsp;</i>&nbsp;&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a>',
      companyphone1:
        '<a href="tel:+642108658172" class="fa-contact"><i class="fa fa-phone fa-contact">&nbsp;</i>&nbsp;+64&nbsp;210&nbsp;8658&nbsp;172</a>',
      companyphone2:
        '<a href="tel:+642108823769" class="fa-contact"><i class="fa fa-phone fa-contact">&nbsp;</i>&nbsp;+64&nbsp;210&nbsp;8823&nbsp;769</a>',
      form: {
        email: '',
        emailow: '',
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
      title: 'Submit Failed',
      message: 'Please try again or call us directly',
      type: 'error'
    },
    showRecaptchaError: {
      title: 'Robot Failed',
      message: 'Please try again or call us directly',
      type: 'error'
    },
    showRecaptchaSuccess: {
      title: "Glad you're human",
      message: 'Please go ahead and submit',
      type: 'success'
    },
    showSubmit: {
      title: 'Enquiry submitted',
      message:
        'We have received your message and look forward to chatting with you soon.',
      type: 'success'
    },
    showReset: {
      title: 'Form reset',
      message: '',
      type: 'error'
    }
  },
  async mounted () {
    // await this.$recaptcha.init()
  },
  methods: {
    onSubmit (evt) {
      try {
        evt.preventDefault()
        const isHuman = this.form.email.length === 0
        // const recaptchaToken = await this.$recaptcha.getResponse()
        // const recaptchaToken = 'theoddwave'
        if (isHuman) {
          this.submitForm(isHuman)
        }
        this.clearForm()
        this.showSubmit()
      } catch (error) {
        console.log(error)
      }
    },
    // async onError (error) {
    //   console.log(error)
    //   this.showRecaptchaError()
    //   await this.$recaptcha.init()
    // },
    // onSuccess (token) {},
    // onExpired () {
    //   this.showRecaptchaError()
    // },
    async submitForm (isHuman) {
      try {
        const response = await this.$axios.$post(this.getBase, {
          data: { ...this.form, isHuman }
        })
        if (response.statusCode !== 200) {
          this.showSubmitError()
        }
      } catch (error) {
        this.showSubmitError()
        console.log(error)
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.clearForm()
      this.showReset()
      // await this.$recaptcha.init()
    },
    clearForm () {
      this.form.email = ''
      this.form.emailow = ''
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
  text-transform: uppercase;
}
#email{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
}
</style>
