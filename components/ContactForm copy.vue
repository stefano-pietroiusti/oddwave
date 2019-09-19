<template>
  <b-container id="contactForm" fluid :style="gradient" :class="pstyle.bgStyle">
    <b-form v-if="show" small class="text-primary text-left text-lowercase w-50 " @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="My name is:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name" />
      </b-form-group>
      <b-form-group id="input-group-1" label="you may contact me on:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>
      <b-form-group id="input-group-3" label="i am based here:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.location" :options="locations" required />
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="I require help with the following:"
        class="bg-secondary text-primary mt-5"
      >
        <b-form-checkbox-group
          id="Services-selection"
          v-model="form.service"
          :options="pservices"
          stacked
          buttons
          button-variant="outline-success"
        />
      </b-form-group>
      <b-form-group id="input-group-5" label="I also need:" label-for="input-5">
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
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </b-container>
</template>

<script>
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
        return { bgStyle: 'parralaxNormal text-primary bg-primary  text-left p-5  vh-100' }
      }
    }
  },
  data () {
    return {
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
        // backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.2) 100%), url(${this.pbgimage.url})`,
        backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.2) 100%)`,
        height: '100%',
        width: '100%',
        top: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase'
      }
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
      const response = await this.$axios.$post(
        `${process.env.baseUrl}/api/contact`,
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
</style>
