<template>
  <div id="contact-form" class="container-fluid contact-form">
    <b-form v-if="show" small @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
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

      <b-form-group id="input-group-4" label="Services of interest:">
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

      <b-form-group id="input-group-5" label="Enquiry:" label-for="input-5">
        <b-form-textarea
          id="input-5"
          v-model="form.enquiry"
          placeholder="Enquiry..."
          rows="3"
          max-rows="6"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
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
  // asyncData (context, callback) {
  //   if (process.client) {
  //     console.log('contextClient')
  //   }
  //   callback(null, {
  //     emailProvider: {
  //       service: context.store.contact.state.emailProvider.service,
  //       username: context.store.contact.state.emailProvider.username,
  //       password: context.store.contact.state.emailProvider.password
  //     }
  //   })
  // },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      // this.submitForm()
      this.fetchSomething()
      // this.submitForm()
      // const response = this.$axios.$post('/api/contact', { data: this.form })
      // this.$store.dispatch('sendEmail', this.form)
      this.name = ''
      this.email = ''
      this.message = ''
    },
    async fetchSomething () {
      alert(JSON.stringify(this.form))
      const response = await this.$axios.$post(
        'http://localhost:3000/api/contact',
        { data: this.form }
      )
      alert(JSON.stringify(response))
      this.enquiry = JSON.stringify(response)

      // this.ip = ip
    },
    async submitForm () {
      alert(JSON.stringify(this.form))
      const response = await this.$axios.$post(
        'http://localhost:3000/api/contact',
        { data: this.form }
      )
      alert(JSON.stringify(response))
    },

    // async submitForm() {
    //   this.submitting = true
    //   this.$ga.event('submit', 'form', this.$i18n.locale)
    //   this.error = false
    //   try {
    //     await this.$axios.$post('contact', {
    //       name: this.name,
    //       email: this.email,
    //       msg: this.msg
    //     })
    //     this.submitting = false
    //     this.isSubmitted = true
    //     await new Promise((resolve) => setTimeout(resolve, 2500))
    //     this.$emit('close')
    //   } catch (e) {
    //     this.submitting = false
    //     this.error = true
    //     // eslint-disable-next-line no-console
    //     console.error(e)
    //   }
    // },
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
/* https://www.w3schools.com/css/css3_gradients.asp
#grad {
  background-image: linear-gradient(to right, red , yellow);
}
#grad1 {
  background-image: linear-gradient(-90deg, red, yellow);
}

#grad2 {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
#grad3 {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
#grad4 {
  background-image: radial-gradient(circle, red, yellow, green);
}
#grad5 {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
*/
.contact-form {
  background: #f1f1f1;
  font-family: 'Roboto', sans-serif, 16px;
  /* font-family: 16px; */
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type='email'],
.contact-form input[type='text'],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: 'Roboto', sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #da552f;
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}

.contact-form input[type='email'],
.contact-form input[type='text'],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>
