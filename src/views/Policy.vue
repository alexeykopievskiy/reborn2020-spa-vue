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
              <h1 class="text-center">Policy</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- Team 4 -->
      <div class="section">
        <div class="container">
          <div class="md-layout">text</div>
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
