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
          <div class="md-layout">
            Our Company is part of the Our Company Group which includes Our Company International and Our Company Direct. This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.<br><br>
            Topics:<br>
            • What data do we collect?<br>
            • How do we collect your data?<br>
            • How will we use your data?<br>
            • How do we store your data?<br>
            • Marketing<br>
            • What are your data protection rights?<br>
            • What are cookies?<br>
            • How do we use cookies?<br>
            • What types of cookies do we use?<br>
            • How to manage your cookies<br>
            • Privacy policies of other websites<br>
            • Changes to our privacy policy<br>
            • How to contact us<br>
            • How to contact the appropriate authorities<br>
            What data do we collect?<br><br>
            Our Company collects the following data:<br>
            • Personal identification information (Name, email address, phone number, etc.)<br><br>
            How do we collect your data?<br><br>
            You directly provide Our Company with most of the data we collect. We collect data and process data when you:<br>
            • Register online or place an order for any of our products or services.<br>
            • Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.<br>
            • Use or view our website via your browser's cookies.<br><br>
            How will we use your data?<br><br>
            Our Company collects your data so that we can:<br>
            • Process your order, manage your account.<br>
            • Email you with special offers on other products and services we think you might like.<br><br>
            If you agree, Our Company will share your data with our partner companies so that they may offer you their products and services.<br>
            When Our Company processes your order, it may send your data to, and also use the resulting information from, credit reference agencies to prevent fraudulent purchases.<br><br>
            How do we store your data?<br>
            Our Company securely stores your data at [enter the location and describe security precautions taken].<br>
            Our Company will keep your [enter type of data] for [enter time period]. Once this time period has expired, we will delete your data by [enter how you delete users' data].<br>
            Marketing<br>
            If you have agreed to receive marketing, you may always opt out at a later date.<br>
            You have the right at any time to stop Our Company from contacting you for marketing purposes or giving your data to other members of the Our Company Group.<br>
            If you no longer wish to be contacted for marketing purposes, please click here. What are your data protection rights?<br>
            Our Company would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:<br>
            The right to access - You have the right to request Our Company for copies of your personal data. We may charge you a small fee for this service.<br>
            The right to rectification - You have the right to request that Our Company correct any information you believe is inaccurate. You also have the right to request Our Company to complete information you believe is incomplete.<br>
            The right to erasure - You have the right to request that Our Company erase your personal data, under certain conditions.<br>
            The right to restrict processing - You have the right to request that Our Company restrict the processing of your personal data, under certain conditions.<br>
            The right to object to processing - You have the right to object to Our Company's processing of your personal data, under certain conditions.<br>
            The right to data portability - You have the right to request that Our Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.<br>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: Call us at: Or write to us:<br>
            What are cookies?<br>
            Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.<br>
            For further information, visit allaboutcookies.org.<br>
            How do we use cookies?<br>
            Our Company uses cookies in a range of ways to improve your experience on our website, including:<br>
            • Keeping you signed in<br>
            • Understanding how you use our website<br>
            What types of cookies do we use?<br>
            There are a number of different types of cookies, however, our website uses:<br>
            • Functionality - Our Company uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.<br>
            • Advertising - Our Company uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. Our Company sometimes shares some limited aspects of this data with third parties for advertising purposes. We may also share online data collected through cookies with our advertising partners. This means that when you<br>
            visit another website, you may be shown advertising based on your browsing patterns on our website.<br>
            How to manage cookies<br>
            You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.<br>
            Privacy policies of other websites<br>
            The Our Company website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.<br>
            Changes to our privacy policy<br>
            Our Company keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 9 January 2019.<br>
            How to contact us<br>
            If you have any questions about Our Company's privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.<br>
            Email us at: info@reborn2020.co
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
