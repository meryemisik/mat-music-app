<!-- Please remove this file from your project -->
<template>
  <div class="music-app">
    <a-row>
      <a-col :span="4" class="music-app-sidebar">
        <ul>
          <li><HomeOutlined />Home</li>
          <li class="active"><AppstoreOutlined class="active" />Browse</li>
          <li><FileImageOutlined />Album</li>
          <li><UserOutlined />Artist</li>
          <li><VideoCameraOutlined />Videos</li>
        </ul>
        <h4>Mymusic</h4>
        <ul>
          <li><ClockCircleOutlined />Recently Played</li>
          <li><FileOutlined />Local Files</li>
        </ul>
        <h4>Playlist</h4>
        <ul>
          <li>General PLaylist</li>
          <li>Ease up beates</li>
          <li>Pop songs</li>
          <li>Mood swings</li>
        </ul>
      </a-col>
      <a-col :span="20" class="music-app-content">
        <div class="music-app-content-header">
          <a-col :span="21" class="left">
            <div class="search-input">
              <div class="components-input-demo-presuffix">
                <a-input placeholder="Search"> </a-input>
              </div>
            </div>
            <div class="user">
              <span class="user-profile"
                ><img src="../assets/img/userProfile.png"
              /></span>
              <span class="user-name">Meryem IŞIK</span>
              <span class="user-settings"
                >

                <a-dropdown>
                  <a class="ant-dropdown-link" @click.prevent>
                    <CaretDownOutlined />
                    <DownOutlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="0">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.alipay.com/"
                        >
                          1st menu item
                        </a>
                      </a-menu-item>
                      <a-menu-item key="1">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.taobao.com/"
                        >
                          2nd menu item
                        </a>
                      </a-menu-item>
                      <a-menu-divider />
                     
                    </a-menu>
                  </template>
                </a-dropdown>
              </span>
            </div></a-col
          >
          <a-col :span="3" class="right">
            <div class="">
              <BellOutlined />
              <SettingOutlined />
            </div>
          </a-col>
        </div>
        <div class="music-app-content-top">
          <div>
            <h2>Top Artist</h2>
          </div>
          <div>
            <a-button @click="prevSlideImg" :disabled="prevSlideButtonDisable"
              ><left-outlined /></a-button
            ><a-button @click="nextSlideImg" :disabled="nextSlideButtonDisable"
              ><right-outlined
            /></a-button>
          </div>
        </div>
        <div class="music-app-content-top-artist d-flex">
          <div
            v-for="i in filterSlideList"
            :key="i"
            class="music-app-content-top-artist-item"
          >
            <div v-if="i.class == 'active'">
              <div class="loading-img" v-html="i.img"></div>

              <div class="music-app-content-top-artist-title">
                {{ i.title }}
              </div>
              <div class="music-app-content-top-artist-content">
                {{ i.content }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <a-row class="mb-5">
            <a-col :span="12" class="music-now-playing">
              <h2>Now Playing</h2>
              <div class="player">
                <img src="../assets/img/musicNowPlaying.jpg" />
                <h4>Music Title</h4>
                <p>Example Content</p>
                <div class="range-input">
                  <input
                    class="slider"
                    type="range"
                    id="vol"
                    name="vol"
                    min="0"
                    max="50"
                  />
                  <div class="music-times">
                    <span>2:10</span>
                    <span>-03:56</span>
                  </div>
                  <div class="music-settings">
                    <swap-outlined />
                    <backward-outlined />
                    <a-button><pause-outlined class="pause-icon" /></a-button>
                    <forward-outlined />
                    <retweet-outlined />
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="12" class="music-mostly-played">
              <h2>Mostly Played</h2>
              <div class="thin-scrollbar">
                <div
                  class="music-mostly-played-item"
                  v-for="i in mostPlayed"
                  :key="i"
                >
                  <a-row>
                    <a-col :span="8" class="music-mostly-played-item-left"
                      ><span class="index">{{ i.key }}</span>
                      <div v-html="i.img"></div>
                      <caret-right-outlined /> {{ i.title }}</a-col
                    >
                  </a-row>
                  <span class="music-mostly-played-item-left-content">{{
                    i.content
                  }}</span>
                  <span class="music-mostly-played-item-left-time">4:31</span>
                  <span><UserOutlined /></span>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  HomeOutlined,
  AppstoreOutlined,
  FileImageOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined,
  FileOutlined,
  CaretDownOutlined,
  BellOutlined,
  SettingOutlined,
  LeftOutlined,
  RightOutlined,
  SwapOutlined,
  BackwardOutlined,
  ForwardOutlined,
  RetweetOutlined,
  PauseOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "HelloWorld",
  components: {
    HomeOutlined,
    AppstoreOutlined,
    FileImageOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ClockCircleOutlined,
    FileOutlined,
    CaretDownOutlined,
    BellOutlined,
    SettingOutlined,
    LeftOutlined,
    RightOutlined,
    SwapOutlined,
    BackwardOutlined,
    ForwardOutlined,
    RetweetOutlined,
    PauseOutlined,
    CaretRightOutlined,
  },
  data() {
    return {
      nextSlideButtonDisable: false,
      prevSlideButtonDisable: false,
      filterSlideList: [],
      slideStartValue: 0,
      slides: [
        {
          img: "<img src=https://picsum.photos/id/242/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/243/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/244/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/256/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/250/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/251/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/252/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/253/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/254/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          img: "<img src=https://picsum.photos/id/255/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
      ],

      mostPlayed: [
        {
          key: "01",
          img: "<img src=https://picsum.photos/id/242/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "02",
          img: "<img src=https://picsum.photos/id/243/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "03",
          img: "<img src=https://picsum.photos/id/244/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "04",
          img: "<img src=https://picsum.photos/id/256/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "05",
          img: "<img src=https://picsum.photos/id/250/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "06",
          img: "<img src=https://picsum.photos/id/251/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "07",
          img: "<img src=https://picsum.photos/id/252/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "08",
          img: "<img src=https://picsum.photos/id/253/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "00",
          img: "<img src=https://picsum.photos/id/254/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
        {
          key: "10",
          img: "<img src=https://picsum.photos/id/255/500/500>",
          title: "Example Title",
          content: "Example Content",
        },
      ],
    };
  },
  created() {
    this.viewSlideItems(this.slideStartValue, 4);
  },
  methods: {
    prevSlideImg() {
      this.slideStartValue -= 1;
      this.viewSlideItems(this.slideStartValue, 4);
    },
    nextSlideImg() {
      this.slideStartValue += 1;
      this.viewSlideItems(this.slideStartValue, 4);
    },
    viewSlideItems(start, piece) {
      this.filterSlideList = [];
      for (var i = start; i < start + piece; i++) {
        this.filterSlideList.push({ ...this.slides[i], class: "active" });
      }
      this.nextSlideButtonDisable = false;
      if (start + piece == this.slides.length) {
        this.nextSlideButtonDisable = true;
      }
      this.prevSlideButtonDisable = false;
      if (start == 0) {
        this.prevSlideButtonDisable = true;
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/musicPages";
@import "../assets/scss/reset";
</style>
