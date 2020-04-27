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
              <h1 class="text-center">About</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- Team 4 -->
      <div class="section">
        <div class="container">
          <div class="md-layout" style="padding: 0 30px">
            We are a group of individuals from six different countries around Europe, with EUvsVirus hackathon we suddenly turned into a connected and bound international team, willing to contribute and to be part of the solution in our fight against COVID19.
            We are developers and professionals in the field of strategy, marketing and product development,
            sharing the same purpose to make positive social impact.
            <br />
            <br />Our project Reborn 2020 wants to help businesses to recover from the current crisis, to reborn, a solution that connects businesses to each other, matching demand and solution by providing a map to visualize where these matches are.
            This solution can also allow governments to easily identify where the most affected areas of business are and what type of problems they are facing commonly.
            The application gives powerful and real time tool for evaluation problems in economy, in specific areas, in different sectors.
          </div>
        </div>
      </div>
      <!-- end Team 4 -->
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  name: "Index",
  components: {},
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
      team5: require("@/assets/img/examples/city.jpg")
    };
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
  methods: {
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

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
}

.mb-0 {
  padding-bottom: 0 !important;
}

#morphing-cards {
  padding-top: 70px;
}
</style>
