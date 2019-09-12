<template>
  <b-container fluid class="contactForm text-center bg-primary text-secondary p-3 rounded w-75 h-75 d-inline-block">
    <b-form
      v-if="show"
      small
      class="bg-secondary text-primary p-3 rounded"
      @submit="onSubmit"
      @reset="onReset"
    >
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
      <b-form-group id="input-group-4" label="Services of interest:" class="bg-secondary text-primary mt-5">
        <b-form-checkbox-group
          id="Services-selection"
          v-model="form.service"
          :options="pservices"
          stacked
          buttons
          button-variant="outline-success"
        />
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
/* .my-buttons .active {
  color: #fff !important;
  background-color: #28a745 !important;
  border-color: #28a745 !important;
} */

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
/* .contact-form {

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
} */
</style>
