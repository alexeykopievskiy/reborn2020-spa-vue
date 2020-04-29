<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Reborn 2020</h1>
              <h3
                class="title"
              >Get and offer help for struggling business during the pandemic and afterwards</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div id="main-panel" class="main main-raised">
      <div class="section section-about-description text-center pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h5
                class="text-center"
              >The economy is going through an unprecedented period of crisis on a global level. All sectors and all types of companies, from entrepreneurs to big corporates, are unfortunately being heavily impacted by the pandemic</h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-xsmall-size-100">
              <info-areas icon-color="info" text-center>
                <h2 slot="title" class="info-title">0</h2>
                <h4 slot="content">Business on platform</h4>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-xsmall-size-100">
              <info-areas icon-color="info" text-center>
                <h2 slot="title" class="info-title">0</h2>
                <h4 slot="content">Job positions in danger</h4>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-xsmall-size-100">
              <info-areas icon-color="success" text-center>
                <h2 slot="title" class="info-title">0</h2>
                <h4 slot="content">Business rescued</h4>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-xsmall-size-100">
              <info-areas icon-color="danger" text-center>
                <h2 slot="title" class="info-title">0</h2>
                <h4 slot="content">Job positions recued</h4>
              </info-areas>
            </div>
          </div>
          <div class="md-layout" style="justify-content: space-between">
            <md-card class="bg-warning md-layout-item md-size-30 md-small-size-100">
              <md-card-content>
                <h3 class="card-description">
                  You are a business and need help?
                  <strong>“Get help”</strong>
                </h3>
              </md-card-content>
            </md-card>
            <md-card class="bg-warning md-layout-item md-size-30 md-small-size-100">
              <md-card-content>
                <h3 class="card-description">
                  You have or want to work on a solution that helps businesses in need?
                  <strong>“Offer help”</strong>
                </h3>
              </md-card-content>
            </md-card>
            <md-card class="bg-warning md-layout-item md-size-30 md-small-size-100">
              <md-card-content>
                <h3 class="card-description">
                  Your business has been rescued by the help offered to you,
                  <strong>“Reborn”</strong> your business and share the stories with others.
                </h3>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout">
            <MapSection />
          </div>
        </div>
      </div>
      <!-- Team 4 -->
      <div
        class="section section-team-4 section-image"
        style="margin-top: 100px"
        :style="sectionTeam(team4)"
      >
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 style="margin-bottom: 100px" class="title">True stories</h2>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card card-avatar :shadow-normal="false" :no-colored-shadow="false">
                <template slot="cardContent">
                  <h4 class="card-title">Luigi Patiano</h4>
                  <h6 class="card-category text-muted">Restaurant owner</h6>
                  <p
                    class="card-description"
                  >My traditional activity has been closed for 2 months, but thanks to this platform I found support to easily translate my physical brand into a digital space and to deliver meals.</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card card-avatar :shadow-normal="false" :no-colored-shadow="false">
                <template slot="cardContent">
                  <h4 class="card-title">Marga Affanes</h4>
                  <h6 class="card-category text-muted">Digital music school</h6>
                  <p
                    class="card-description"
                  >Our business is based 100% online, we did not see a decrease in demand, but we are brand new and we made a lot investments. Thanks to the help of consultancy we learnt how to scale up the business.</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card card-avatar :shadow-normal="false" :no-colored-shadow="false">
                <template slot="cardContent">
                  <h4 class="card-title">Baptiste Toubiass</h4>
                  <h6 class="card-category text-muted">Events speaker</h6>
                  <p
                    class="card-description"
                  >Five conference keynotes and trade shows cancelled within a few days, big revenue generators for the year. Having fast access to capital to overcome the period was my reborn.</p>
                </template>
              </profile-card>
            </div>
          </div>
        </div>
      </div>
      <!-- end Team 4 -->
      <Search />
    </div>
    <div class="gdpr" v-if="showGDPR">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
          <h5
            class="text-center"
          >Our Company is part of the Our Company Group which includes Our Company International and Our Company Direct. This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</h5>
          <h4 class="text-center">If you agree - click "Accept", if not - leave web site</h4>
        </div>
        <div class="md-layout-item" style="display: flex">
          <md-button style="margin: auto"
                class="md-success" @click="setGDPR"
              >Accept</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import MapSection from "./components/MapSection";
import Search from "./components/Search";
import { InfoAreas } from "@/components";
import { ProfileCard } from "@/components";

export default {
  name: "Index",
  components: {
    MapSection,
    InfoAreas,
    ProfileCard,
    Search
  },
  mixins: [Mixins.VerticalNav, Mixins.HeaderImage],
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      team4: require("@/assets/img/bg7.jpg"),
      team5: require("@/assets/img/examples/city.jpg"),
      showGDPR: true
    };
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
    this.showGDPR = !localStorage.gdpr
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
  methods: {
    setGDPR() {
      localStorage.gdpr = true
      this.showGDPR = false
    },
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    sectionTeam(image) {
      return {
        backgroundImage: `url(${image})`
      };
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.vertical-nav-active {
  display: block;
}

@media all and (min-width: 600px) {
  .main-raised {
    margin-left: 50px !important;
    margin-right: 50px !important;
  }
  .md-xsmall-size-100 {
    .info {
      padding: 0;
    }
    &:last-child {
      .info {
        padding-bottom: 30px;
      }
    }
  }
}
.gdpr {
  width: 100%;
  height: 250px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background: #eee;
  padding: 50px;
}
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
  .gdpr {
    height: auto;
  }
}

.mb-0 {
  padding-bottom: 0 !important;
}

#morphing-cards {
  padding-top: 70px;
}
</style>
