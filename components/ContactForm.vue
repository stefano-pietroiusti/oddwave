<template>
  <div>
    <b-form v-if="show" small @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name" />
      </b-form-group>

      <b-form-group id="input-group-3" label="Location:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.location" :options="locations" required />
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group id="checkboxes-4" v-model="form.service">
          <b-form-checkbox value="photography">
            Photography
          </b-form-checkbox>
          <b-form-checkbox value="seo">
            SEO
          </b-form-checkbox>
          <b-form-checkbox value="website">
            Website
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        location: null,
        service: []
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
  asyncData (context, callback) {
    if (process.client) {
      console.log('contextClient')
    }
    callback(null, {
      emailProvider: {
        service: context.store.contact.state.emailProvider.service,
        username: context.store.contact.state.emailProvider.username,
        password: context.store.contact.state.emailProvider.password
      }
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      // this.$store.dispatch('sendEmail', this.form)
      // this.name = ''
      // this.email = ''
      // this.message = ''
    },
    // sendEmail() {
    //   const emailData = {
    //     email: this.email,
    //     name: this.name,
    //     message: this.message
    //   }
    //   this.$store.dispatch('sendEmail', emailData)
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    // },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.location = null
      this.form.service = []
      // Trick to reset/clear native browser form validation state
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
