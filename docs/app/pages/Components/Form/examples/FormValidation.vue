<template>
  <div>
    <form novalidate class="md-layout-row md-gutter" @submit.prevent="validateUser">
      <md-card class="md-flex-50">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-row md-layout-wrap md-gutter">
            <div class="md-flex md-flex-small-100">
              <md-field :class="getValidationClass('firstName')">
                <label>First Name</label>
                <md-input name="first-name" v-model="firstName" />
                <span class="md-error" v-if="!$v.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-flex md-flex-small-100">
              <md-field :class="getValidationClass('lastName')">
                <label>Last Name</label>
                <md-input name="last-name" v-model="lastName" />
                <span class="md-error" v-if="!$v.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout-row md-gutter md-layout-wrap">
            <div class="md-flex md-flex-small-100">
              <md-field :class="getValidationClass('gender')">
                <label>Gender</label>
                <select v-model="gender">
                  <option></option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>

            <div class="md-flex md-flex-small-100">
              <md-field :class="getValidationClass('age')">
                <label>Age</label>
                <md-input type="number" name="age" v-model="age" />
                <span class="md-error" v-if="!$v.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.age.maxlength">Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label>Email</label>
            <md-input type="email" name="email" v-model="email" />
            <span class="md-error" v-if="!$v.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
      userSaved: false,
      lastUser: null
    }),
    validations: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      }
    },
    methods: {
      getValidationClass (field) {
        if (this.$v[field]) {
          return {
            'md-invalid': this.$v[field].$invalid && this.$v[field].$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.firstName = null
        this.lastName = null
        this.age = null
        this.gender = null
        this.email = null
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.lastUser = `${this.firstName} ${this.lastName}`
          this.userSaved = true
          this.clearForm()
        }
      }
    }
  }
</script>
