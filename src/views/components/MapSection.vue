<template>
  <div id="map" style="width: 100%; margin-top: 70px">
    <div class="md-layout" style="height: 1100px;">
      <div
        class="md-layout-item"
        style="height: 100%"
        :class="(showGetHelp || showOfferHelp || showReborn)?'md-size-60':'md-size-100'"
      >
        <l-map
          ref="map"
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 100%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
          @click="addMarker"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker
            v-for="(marker,index) in markers"
            :key="index"
            :lat-lng="marker"
            :draggable="true"
            @update:latLng="updateMarker"
          ></l-marker>
        </l-map>
      </div>
      <div v-show="showGetHelp" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <md-card-header class="md-card-header-info text-center">
            <h4 class="card-title">Send your story</h4>
          </md-card-header>
          <md-card-content>
            <md-field>
              <label>Name of company or entrepreneur</label>
              <md-input v-model="name" />
            </md-field>
            <md-field>
              <label>Address</label>
              <md-input v-model="address" />
            </md-field>
            <md-field>
              <label for="business">Business</label>
              <md-select id="business" v-model="business" name="business">
                <md-option value="shop">Shop</md-option>
                <md-option value="factory">Factory</md-option>
                <md-option value="transport">Transport</md-option>
                <md-option value="logistic">Logistic</md-option>
                <md-option value="service">Service</md-option>
                <md-option value="infrastructure">Infrastructure</md-option>
                <md-option value="hotel">Hotel</md-option>
                <md-option value="restaurant">Restaurant</md-option>
                <md-option value="sport">Sport</md-option>
                <md-option value="events">Events</md-option>
                <md-option value="culture">Culture</md-option>
                <md-option value="leisure">Leisure</md-option>
                <md-option value="social">Social</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of business</label>
              <md-input v-model="business_other" />
            </md-field>
            <md-field>
              <label for="issues">Issues</label>
              <md-select id="issues" v-model="issues" name="issues" multiple>
                <md-option value="quarantine measures">Quarantine measures</md-option>
                <md-option value="afterquarantine measures">Afterquarantine measures</md-option>
                <md-option value="lost clients">Lost clients</md-option>
                <md-option value="zero demand">Zero demand</md-option>
                <md-option value="already bankrupt">Already bankrupt</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of issues</label>
              <md-input v-model="issues_other" />
            </md-field>
            <md-field>
              <label>Number of jobs in company</label>
              <md-input v-model="jobs" />
            </md-field>
            <md-field>
              <label>What happened with your business</label>
              <md-textarea v-model="problem" />
            </md-field>
            <md-field>
              <label>What help do you need</label>
              <md-textarea v-model="help" />
            </md-field>
            <md-field>
              <label>Your social networks</label>
              <md-textarea v-model="social" />
            </md-field>
            <md-field>
              <label>Your email</label>
              <md-input v-model="email" />
            </md-field>
            <md-field>
              <label>Your phone</label>
              <md-input v-model="phone" />
            </md-field>
          </md-card-content>
          <md-card-actions class="d-flex justify-content-between">
            <md-button @click="showGetHelp = false; removeMarker()" class="md-danger">Cancel</md-button>
            <md-button class="md-warning">Send Message</md-button>
          </md-card-actions>
        </md-card>
      </div>
      <div v-show="showOfferHelp" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <md-card-header class="md-card-header-success text-center">
            <h4 class="card-title">Propose your help</h4>
          </md-card-header>
          <md-card-content>
            <md-field>
              <label>Name of company or entrepreneur</label>
              <md-input v-model="name" />
            </md-field>
            <md-field>
              <label>Address</label>
              <md-input v-model="address" @keyup.enter.native="searchByAddress" />
            </md-field>
            <md-field>
              <label for="business">Your type of business</label>
              <md-select id="business" v-model="business_help" name="business">
                <md-option value="entrepreneur">Entrepreneur</md-option>
                <md-option value="coach">Coach</md-option>
                <md-option value="bank">Bank</md-option>
                <md-option value="service">Service</md-option>
                <md-option value="owner of a public building">Owner of a public building</md-option>
                <md-option value="goverment">Goverment</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of business</label>
              <md-input v-model="business_help_other" />
            </md-field>
            <md-field>
              <label for="business">Business</label>
              <md-select id="business" v-model="business" name="business">
                <md-option value="shop">Shop</md-option>
                <md-option value="factory">Factory</md-option>
                <md-option value="transport">Transport</md-option>
                <md-option value="logistic">Logistic</md-option>
                <md-option value="service">Service</md-option>
                <md-option value="infrastructure">Infrastructure</md-option>
                <md-option value="hotel">Hotel</md-option>
                <md-option value="restaurant">Restaurant</md-option>
                <md-option value="sport">Sport</md-option>
                <md-option value="events">Events</md-option>
                <md-option value="culture">Culture</md-option>
                <md-option value="leisure">Leisure</md-option>
                <md-option value="social">Social</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of business</label>
              <md-input v-model="business_other" />
            </md-field>
            <md-field>
              <label for="issues">Issues</label>
              <md-select id="issues" v-model="issues" name="issues" multiple>
                <md-option value="quarantine measures">Quarantine measures</md-option>
                <md-option value="afterquarantine measures">Afterquarantine measures</md-option>
                <md-option value="lost clients">Lost clients</md-option>
                <md-option value="zero demand">Zero demand</md-option>
                <md-option value="already bankrupt">Already bankrupt</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of issues</label>
              <md-input v-model="issues_other" />
            </md-field>
            <md-field>
              <label for="help">Type of help</label>
              <md-select id="help" v-model="help" name="help" multiple>
                <md-option value="mentor">Mentor</md-option>
                <md-option value="to issue a credit">To issue a credit</md-option>
                <md-option value="give new clients">Give new clients</md-option>
                <md-option value="to become a client">To become a client</md-option>
                <md-option value="to buy services">To buy services</md-option>
                <md-option value="to hire discharged stuff">To hire discharged stuff</md-option>
                <md-option value="government support">Government support</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Or type other type of issues</label>
              <md-input v-model="help_other" />
            </md-field> 
            <md-field>
              <label>Your social networks</label>
              <md-textarea v-model="social" />
            </md-field>
            <md-field>
              <label>Your email</label>
              <md-input v-model="email" />
            </md-field>
            <md-field>
              <label>Your phone</label>
              <md-input v-model="phone" />
            </md-field>
          </md-card-content>
          <md-card-actions class="d-flex justify-content-between">
            <md-button @click="showOfferHelp = false; removeMarker()" class="md-danger">Cancel</md-button>
            <md-button class="md-warning">Send Message</md-button>
          </md-card-actions>
        </md-card>
      </div>
      <div v-show="showReborn" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <md-card-header class="md-card-header-primary text-center">
            <h4 class="card-title">Your story</h4>
          </md-card-header>
          <md-card-content>
            <md-field>
              <label>Your name</label>
              <md-input v-model="name" />
            </md-field>
            <md-field>
              <label>Company name</label>
              <md-input v-model="company_name" />
            </md-field> 
            <md-field>
              <label>Your story</label>
              <md-textarea v-model="story" />
            </md-field>
            <md-field>
              <label>Your email</label>
              <md-input v-model="email" />
            </md-field>
            <md-field>
              <label>Your phone</label>
              <md-input v-model="phone" />
            </md-field>
          </md-card-content>
          <md-card-actions class="d-flex justify-content-between">
            <md-button @click="showReborn = false; removeMarker()" class="md-danger">Cancel</md-button>
            <md-button class="md-warning">Send Message</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
    <div class="button-layout md-layout" style="margin: 100px auto 0; justify-content: center">
      <div class="md-layout-item md-size-30">
        <v-popover offset="4" placement="top">
          <md-button class="md-danger md-lg">Get Help</md-button>

          <template slot="popover">
            <h3 class="popover-header">Please add your business on the map</h3>
            <div class="popover-body">Just click on map</div>
          </template>
        </v-popover>
      </div>
      <div class="md-layout-item md-size-30">
        <md-button v-scroll-to="'#map'" @click="showOfferHelp = true; showGetHelp = false" class="md-info md-lg">Offer Help</md-button>
      </div>
      <div class="md-layout-item md-size-30">
        <md-button class="md-success md-lg" @click="showReborn = true; showOfferHelp = false; showGetHelp = false">Reborn</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markers: [],
      showGetHelp: false,
      showOfferHelp: false,
      email: null,
      phone: null,
      jobs: null,
      problem: null,
      help: null,
      social: null,
      issues: null,
      issues_other: null,
      business: null,
      business_other: null,
      address: null,
      name: null,
      business_help_other: null,
      business_help: null,
      help_other: null,
      current_coords: null,
      showReborn: false,
      company_name: null,
      story: null
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    addMarker(event) {
      if (!this.showGetHelp) {
        this.center = event.latlng;
        this.markers.push(event.latlng);
        this.current_coords = event.latlng;
        this.$refs.map.mapObject.invalidateSize();
        this.showGetHelp = true;
        this.showOfferHelp = false;
        console.log(this.$refs.map.mapObject);
        this.getAddressByCoords(event.latlng);
      }
    },
    removeMarker() {
      this.center = this.currentCenter;
      this.current_coords = null;
      this.markers = this.markers.splice(-1, 1);
      this.$refs.map.mapObject.invalidateSize();
      this.address = null;
    },
    async searchByAddress() {
      console.log('eeee')
    },
    async getAddressByCoords(coords) {
      try {
        let response = await this.axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
        );
        this.address = response.data.display_name;
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    updateMarker(coords) {
      this.getAddressByCoords(coords);
      this.current_coords = coords;
      this.center = this.currentCenter;
    }
  }
};
</script>
