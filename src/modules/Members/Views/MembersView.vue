<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text class="pb-0">
            <v-text-field
              v-model="firstName"
              label="First Name"
              outlined
              :error-messages="($v.firstName.$dirty && $v.firstName.$invalid) ?
                (!$v.firstName.required ? 'First name is required' :
                !$v.firstName.alpha ? 'First name must be alphabetical' :
                'First name must be less than 20 characters') :
                ''"
              @blur="$v.firstName.$touch()"
              @keydown.space.prevent
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              outlined
              :error-messages="($v.lastName.$dirty && $v.lastName.$invalid) ?
                (!$v.lastName.required ? 'Last Name is required' :
                !$v.lastName.alpha ? 'Last Name must be alphabetical' :
                'Last Name must be less than 20 characters') :
                ''"
              @blur="$v.lastName.$touch()"
              @keydown.space.prevent
            ></v-text-field>
            <v-text-field
              v-model="address"
              label="Address"
              outlined
              :error-messages="($v.address.$dirty && $v.address.$invalid) ?
                (!$v.address.required ? 'Address is required' :
                'Address must be less than 50 characters') :
                ''"
              @blur="$v.address.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="ssn"
              v-mask="'###-##-####'"
              label="SSN"
              outlined
              :error-messages="($v.ssn.$dirty && $v.ssn.$invalid) ?
                (!$v.ssn.required ? 'SSN is required' :
                'SSN invalid format') :
                ''"
              @blur="$v.ssn.$touch()"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="pb-8 d-flex justify-space-around">
            <v-btn
              class="col-3"
              @click="resetFormValues"
            >
              Reset
            </v-btn>
            <v-btn
              color="primary"
              class="col-3"
              :loading="loading"
              :disabled="$v.$invalid"
              @click="createMember"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <Table
          class="fill-height"
          :headers="headers"
          :items="members"
        ></Table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Table from '@/components/Table';
import { $api } from '../Services';
import { required, alpha, maxLength, helpers } from 'vuelidate/lib/validators';

export default {
  name: 'MembersView',
  components: {
    Table
  },
  data() {
    return {
      headers: [
        {
          text: 'First Name',
          value: 'firstName'
        },
        {
          text: 'Last Name',
          value: 'lastName'
        },
        {
          text: 'Address',
          value: 'address'
        },
        {
          text: 'SSN',
          value: 'ssn'
        }
      ],
      members: [],
      firstName: null,
      lastName: null,
      address: null,
      ssn: null,
      loading: false
    };
  },
  validations: {
    firstName: {
      required,
      alpha,
      maxLength: maxLength(20)
    },
    lastName: {
      required,
      alpha,
      maxLength: maxLength(20)
    },
    address: {
      required,
      maxLength: maxLength(50)
    },
    ssn: {
      required,
      ssnFormat: helpers.regex('ssnFormat', /^\d{3}-\d{2}-\d{4}$/)
    }
  },
  mounted() {
    this.fetchMembers();
    this.$inactivityTime(this.fetchMembers);
  },
  methods: {
    async fetchMembers() {
      try {
        const {data} = await $api.find('members');
        this.members = data;
      } catch (error) {
        this.members = [];
        throw error;
      }
    },
    async createMember() {
      this.loading = true;
      try {
        const newMember = {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address.trim(),
          ssn: this.ssn
        };
        await $api.create('members', {}, newMember);
        this.members.push(newMember);
        this.$store.dispatch('commons/openSnackbar', {
          title: 'Saved successfully',
          color: 'success',
        });
      } catch ({message: errorMessage}) {
        this.$store.dispatch('commons/openSnackbar', {
          title: errorMessage.message,
          color: 'error',
        });
      } finally {
        this.loading = false;
      }
    },
    resetFormValues() {
      this.firstName = null;
      this.lastName = null;
      this.address = null;
      this.ssn = null;
      this.$v.$reset();
    }
  },
};
</script>
