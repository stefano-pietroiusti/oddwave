<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container id="contactForm" fluid class="text-black w-100 text-center">
    <b-row>
      <b-col cols="12" xs="12" lg="4">
        <b-form
          v-if="show"
          small
          class="text-black text-left m-3"
          @submit="onSubmit"
          @reset="onReset"
        >
          <b-form-group
            id="input-group-2"
            label-for="input-2"
            label-size="lg"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Name"
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            label-size="lg"
          >
            <b-form-input
              id="input-1"
              v-model="form.emailow"
              type="email"
              placeholder="Email"
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            label-size="lg"
          >
            <b-form-input
              id="input-1"
              v-model="form.call"
              placeholder="Phone number"
              size="lg"
            />
          </b-form-group>
          <b-form-group id="email" label="Email:" label-for="email" label-size="sm">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Email"
              size="sm"
            />
          </b-form-group>
          <!-- <b-form-group
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
          </b-form-group> -->
          <b-form-group
            id="input-group-4"
            label="I need help with:"
            label-size="lg"
            class="mt-5"
          >
            <b-form-checkbox-group
              id="Services-selection"
              v-model="form.service"
              :options="pservices"
              stacked
              variant="outline-black"
              size="lg"
            />
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="I also need:"
            label-for="input-5"
            label-size="lg"
          >
            <b-form-textarea
              id="input-5"
              v-model="form.enquiry"
              placeholder="Other comments..."
              rows="3"
              max-rows="6"
            />
          </b-form-group>
          <!-- <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" /> -->
          <b-button id="submit" type="submit" variant="success" class="text-medium">
            Submit
          </b-button>
          <b-button id="reset" type="reset" variant="danger" class="text-medium">
            Reset
          </b-button>
        </b-form>
      </b-col>
      <b-col class="p-3 pl-5 text-left text-medium text-black">
        <span v-html="company" />
        <br>
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
      company:
        '<b>The Odd Wave Ltd</b>',
      companyemail:
        '<a class="text-black" href="mailto:&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;">&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a>',
      companyphone1:
        '<a href="tel:+642108658172" class="text-black">Jaline &nbsp;+64&nbsp;210&nbsp;8658&nbsp;172</a>',
      companyphone2:
        '<a href="tel:+642108823769" class="text-black">Stef &nbsp;+64&nbsp;210&nbsp;8823&nbsp;769</a>',
      form: {
        email: '',
        emailow: '',
        name: '',
        call: '',
        // location: null,
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
    bannerImagePath () {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    emailUrl () {
      return `mailto:${this.companyemail}`
    },
    gradient () {
      return {
        backgroundImage: `url(${this.bannerImagePath})`,
        height: '100%',
        width: '100%',
        bottom: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
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
        this.$ga.event('form', 'submit', 'error')
        this.showSubmitError()
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
          this.$ga.event('form', 'submit', 'contactServiceError')
          this.showSubmitError()
        } else {
          this.$ga.event('form', 'submit', 'contact')
        }
      } catch (error) {
        this.$ga.event('form', 'submit', 'contactServiceError')
        this.showSubmitError()
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
      this.form.call = ''
      // this.form.location = null
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
#contactFormContainer {
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#contactFormBackground {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
}
#contactForm {
  background: transparent;
  z-index: 10;
  text-transform: uppercase;
}
#email {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}

</style>
