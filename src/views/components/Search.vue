<template>
	<div class="section section-search">
    <div class="container">
      <div class="search-field md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
        <md-field>
          <label>Search</label>
          <md-input v-model="search" @input="() => delayInput(this)"></md-input>
          <div v-if="!companies.length">No results</div>
        </md-field>
      </div>
      <div v-if="companies.length" class="search-result">
        <md-table>
          <md-table-row>
            <md-table-head>Type</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Country</md-table-head>
            <md-table-head>Business type</md-table-head>
            <md-table-head>Issues</md-table-head>
            <md-table-head>Jobs</md-table-head>
            <md-table-head>Problem</md-table-head>
            <md-table-head>Needs</md-table-head>
          </md-table-row>

          <md-table-row v-for="company in companies.slice(offset, offset+limit)" :key="company._id">
            <md-table-cell>{{ company.type }}</md-table-cell>
            <md-table-cell>{{ company.name }}</md-table-cell>
            <md-table-cell>{{ country(company.address) }}</md-table-cell>
            <md-table-cell>{{ company.business_other ? company.business_other : company.business }}</md-table-cell>
            <md-table-cell>{{ company.issues_other ? company.issues_other : company.issues.join(', ') }}</md-table-cell>
            <md-table-cell>{{ company.jobs }}</md-table-cell>
            <md-table-cell>{{ company.problem }}</md-table-cell>
            <md-table-cell>{{ company.needs }}</md-table-cell>
          </md-table-row>
        </md-table>

        <Pagination
        	v-if="companies.length > limit"
			    v-model="page"
			    :per-page="limit"
			    :total="companies.length"
			    class="pagination"
			    >
			  </Pagination>
      </div>
    </div>
  </div>
</template>

<script>
	import debounce from 'lodash/debounce'
	import { API_SERVER } from "@/API_KEY"
	import { Pagination } from '@/components'

	export default {
		name: "Search",

		data() {
    	return {
    		search: null,
    		companies: [],
    		page: 1,    		
    		limit: 10
    	}
    },

    components: {
		  Pagination
		},

		computed: {
			offset() {
				return (this.page - 1) * this.limit
			}
		},

    methods: {
      delayInput: debounce((vm) => {
      	vm.axios.get(`${API_SERVER}:5000/api/v1/findCompany/${vm.search}`).then(result => {
      		vm.companies = result.data
      	})
      }, 350),

      country(address) {
      	return address.split(',').pop()
      }
    },
	}
</script>

<style lang="scss" scoped>
	.pagination {
		justify-content: center;
	}
</style>