<template>
  <div id="map" style="width: 100%; margin-top: 70px">
    <div class="md-layout">
      <div
        class="md-layout-item md-small-size-100"
        style="height: 1100px; margin-bottom: 40px"
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
            v-for="(marker) in markersHelp"
            :key="marker[0].lat"
            :icon="iconRed"
            :lat-lng="marker[0]"
            :draggable="false"
            @click="getCompanyInfo(marker[1])"
          >
            <l-popup>
              <md-card-header class="md-card-header-info text-center">
                <h4 class="card-title">Need help</h4>
              </md-card-header>
              <md-card-content v-if="loadInfo">
                <strong>Name:</strong>
                <span>{{loadInfo.name || '---'}}</span>
                <br />
                <strong>Address:</strong>
                <span>{{loadInfo.address || '---'}}</span>
                <br />
                <strong>Business:</strong>
                <span>{{loadInfo.business || loadInfo.business_other || '---'}}</span>
                <br />
                <strong>Issues:</strong>
                <span>{{loadInfo.issues || loadInfo.issues_other || '---'}}</span>
                <br />
                <strong>Problem:</strong>
                <span>{{loadInfo.problem || '---'}}</span>
                <br />
                <strong>Needs:</strong>
                <span>{{loadInfo.needs || '---'}}</span>
                <br />
                <strong>Number of jobs:</strong>
                <span>{{loadInfo.jobs || '---'}}</span>
                <br />
                <strong>Social:</strong>
                <span>{{loadInfo.social || '---'}}</span>
              </md-card-content>
            </l-popup>
          </l-marker>
          <div class="lol">
            <l-marker
              v-for="(marker) in markersOffer"
              :key="marker[0].lat"
              :icon="iconGreen"
              :lat-lng="marker[0]"
              :draggable="false"
              @click="getCompanyInfo(marker[1])"
            >
              <l-popup>
                <md-card-header class="md-card-header-info text-center">
                  <h4 class="card-title">Offering help</h4>
                </md-card-header>
                <md-card-content>
                  <strong>Name:</strong>
                  <span>{{loadInfo.name || '---'}}</span>
                  <br />
                  <strong>Address:</strong>
                  <span>{{loadInfo.address || '---'}}</span>
                  <br />
                  <strong>Business:</strong>
                  <span>{{loadInfo.business || loadInfo.business_other || '---'}}</span>
                  <br />
                  <strong>Issues:</strong>
                  <span>{{loadInfo.issues || loadInfo.issues_other || '---'}}</span>
                  <br />
                  <strong>Help:</strong>
                  <span>{{loadInfo.help || loadInfo.help_other || '---'}}</span>
                  <br />
                  <strong>Social:</strong>
                  <span>{{loadInfo.social || '---'}}</span>
                </md-card-content>
              </l-popup>
            </l-marker>
          </div>
          <l-marker
            :lat-lng="current_coords"
            :draggable="true"
            :icon="iconBlue"
            @update:latLng="updateMarker"
            v-if="current_coords"
          ></l-marker>
        </l-map>
      </div>
      <div v-show="showGetHelp" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <form @submit.prevent="submitGetHelp">
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
                <md-select v-model="business" name="business">
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
                <md-textarea v-model="needs" />
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
              <md-button
                @click="showGetHelp = false; removeMarker(); resizeMap()"
                class="md-danger"
              >Cancel</md-button>
              <md-button type="submit" class="md-warning">Submit</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </div>
      <div v-show="showOfferHelp" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <form @submit.prevent="submitOfferHelp">
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
                <md-select v-model="business_help" name="business">
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
                <md-select v-model="business" name="business">
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
                <md-select v-model="help" multiple>
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
              <md-button
                @click="showOfferHelp = false; removeMarker(); resizeMap()"
                class="md-danger"
              >Cancel</md-button>
              <md-button type="submit" class="md-warning">Submit</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </div>
      <div v-show="showReborn" class="md-layout-item md-size-40 md-small-size-100 ml-auto">
        <md-card class="md-card-contact">
          <form @submit.prevent="submitStory">
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
              <md-button
                @click="showReborn = false; removeMarker(); resizeMap()"
                class="md-danger"
              >Cancel</md-button>
              <md-button type="submit" class="md-warning">Submit</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </div>
    </div>
    <div class="button-layout md-layout" style="margin: 150px auto 0; justify-content: center">
      <div class="md-layout-item md-size-30 md-xsmall-size-100">
        <v-popover offset="4" placement="top">
          <md-button :disabled="showReborn || showOfferHelp" class="md-danger md-lg">Get Help</md-button>

          <template slot="popover">
            <h3 class="popover-header">Please add your business on the map</h3>
            <div class="popover-body">Just click on map</div>
          </template>
        </v-popover>
      </div>
      <div class="md-layout-item md-size-30 md-xsmall-size-100">
        <md-button
          v-scroll-to="'#map'"
          @click="showOfferHelp = true; showGetHelp = false"
          class="md-info md-lg"
          :disabled="showGetHelp || showReborn"
        >Offer Help</md-button>
      </div>
      <div class="md-layout-item md-size-30 md-xsmall-size-100">
        <md-button
          class="md-success md-lg"
          :disabled="showGetHelp || showOfferHelp"
          @click="showReborn = true; showOfferHelp = false; showGetHelp = false; removeMarker(); resizeMap()"
        >Reborn</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { API_SERVER } from "@/API_KEY";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 7,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markers: [],
      markersHelp: [],
      markersOffer: [],
      showGetHelp: false,
      showOfferHelp: false,
      email: null,
      phone: null,
      help: null,
      jobs: null,
      problem: null,
      needs: null,
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
      story: null,
      iconGreen: icon({
        iconUrl: require("@/assets/img/green.svg"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      iconRed: icon({
        iconUrl: require("@/assets/img/red.svg"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      iconBlue: icon({
        iconUrl: require("@/assets/img/blue.svg"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      loadInfo: {},
      isLoaded: false
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
      this.showReborn = false;
      if (!this.showGetHelp && !this.showOfferHelp) {
        this.center = event.latlng;
        //this.markers.push(event.latlng);
        this.current_coords = event.latlng;
        this.$refs.map.mapObject.invalidateSize();
        this.showGetHelp = true;
        this.showOfferHelp = false;
        this.getAddressByCoords(event.latlng);
      }

      if (!this.showGetHelp && this.showOfferHelp) {
        this.center = event.latlng;
        //this.markers.push(event.latlng);
        this.current_coords = event.latlng;
        this.$refs.map.mapObject.invalidateSize();
        this.showGetHelp = false;
        this.showOfferHelp = true;
        this.getAddressByCoords(event.latlng);
      }
    },
    async getCompanyInfo(id) {
      this.isLoaded = false;
      try {
        let response = await this.axios.get(
          `${API_SERVER}:5000/api/v1/company/${id}`
        );
        //let response = await this.axios.get('https://reborn2020.co:5000/api/v1/company/5ea4d5c5b57c0364b6e5f6e1')
        this.loadInfo = response.data;
      } catch (e) {
      } finally {
        this.isLoaded = true;
      }
    },
    removeMarker() {
      this.center = this.currentCenter;
      this.current_coords = null;
      this.markers.pop();
      this.$refs.map.mapObject.invalidateSize();
      this.address = null;
    },
    async searchByAddress() {},
    async submitGetHelp(e) {
      let data = {
        type: "needHelp",
        name: this.name,
        address: this.address,
        coords: this.current_coords,
        business: this.business,
        business_other: this.business_other,
        issues: this.issues,
        issues_other: this.issues_other,
        jobs: this.jobs,
        problem: this.problem,
        needs: this.needs,
        social: this.social,
        email: this.email,
        phone: this.phone
      };

      try {
        let response = await this.axios.post(
          `${API_SERVER}:5000/api/v1/company`,
          data
        );
        //let response = await this.axios.get('https://reborn2020.co:5000/api/v1/company/5ea4d5c5b57c0364b6e5f6e1')
      } catch (e) {
      } finally {
        this.current_coords = null;
        this.getMarkers();
      }

      //this.markers.push(this.current_coords);
      this.current_coords = null;
      this.resizeMap();
      this.showGetHelp = false;
    },
    resizeMap() {
      this.center = this.currentCenter;
      this.$refs.map.mapObject.invalidateSize();
    },
    async submitOfferHelp(e) {
      let data = {
        type: "offerHelp",
        name: this.name,
        address: this.address,
        coords: this.current_coords,
        business_help: this.business_help,
        business_help_other: this.business_help_other,
        business: this.business,
        business_other: this.business_other,
        issues: this.issues,
        issues_other: this.issues_other,
        help: this.help,
        help_other: this.help_other,
        social: this.social,
        email: this.email,
        phone: this.phone
      };

      try {
        let response = await this.axios.post(
          `${API_SERVER}:5000/api/v1/company`,
          data
        );
        //let response = await this.axios.get('https://reborn2020.co:5000/api/v1/company/5ea4d5c5b57c0364b6e5f6e1')
      } catch (e) {
      } finally {
        this.current_coords = null;
        this.getMarkers();
        this.resizeMap();
        this.showOfferHelp = false;
      }
    },
    async submitStory(e) {
      let data = {
        type: "story",
        name: this.name,
        company_name: this.company_name,
        story: this.story,
        email: this.email,
        phone: this.phone
      };

      try {
        let response = await this.axios.post(
          `${API_SERVER}:5000/api/v1/company`,
          data
        );
        //let response = await this.axios.get('https://reborn2020.co:5000/api/v1/company/5ea4d5c5b57c0364b6e5f6e1')
      } catch (e) {
      } finally {
      }
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
    },
    async getMarkers() {
      try {
        let response = await this.axios.get(
          `${API_SERVER}:5000/api/v1/getAllMarkers`
        );
        //let response = await this.axios.get('https://reborn2020.co:5000/api/v1/company/5ea4d5c5b57c0364b6e5f6e1')
        this.markers = response.data;
      } catch (e) {
      } finally {
      }

      this.markersHelp = [];
      this.markersOffer = [];

      let helpMarkers = this.markers.map(item => {
        if (item[2] == "needHelp") {
          this.markersHelp.push(item);
        }
      });

      let offerMarkers = this.markers.map(item => {
        if (item[2] == "offerHelp") {
          this.markersOffer.push(item);
        }
      });
    }
  },
  mounted() {
    this.getMarkers();
  }
};
</script>

<style lang="scss">
.button-layout {
  button {
    margin-bottom: 20px;
  }
}
.leaflet-popup-content {
  min-width: 250px;
}
</style>