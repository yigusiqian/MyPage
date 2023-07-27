<template>
  <a-layout class="layout">
    <a-layout-sider collapsible breakpoint="xl" :width="LayOutWidth">
      <div class="logo">
        <a-avatar :size="32" shape="square" imageUrl="../src/assets/Logo.png" />
        <a-typography-text code>Power By 忆故思迁</a-typography-text>
      </div>
      <a-menu class="menu" :default-selected-keys="['0_1']">
        <Router-link to="/">
          <a-menu-item key="0_1">
            <IconHome />
            首页
          </a-menu-item>
        </Router-link>
        <Router-link to="/Navigation">
          <a-menu-item key="0_2">
            <IconCalendar />
            导航
          </a-menu-item>
        </Router-link>
        <Router-link to="/Tool">
          <a-menu-item key="0_3">
            <icon-common />
            工具
          </a-menu-item>
        </Router-link>
        <a-sub-menu>
          <template #title>
            <icon-compass />
            友链
          </template>
          <a-sub-menu title="忆故思迁">
            <a-menu-item>Menu 1</a-menu-item>
            <a-menu-item>Menu 2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu title="Others">
            <a-menu-item>Menu 1</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed" />
        <IconCaretLeft v-else />
      </template>
    </a-layout-sider>
    <a-layout class="MainContent">
      <a-layout-header>
        <a-affix>
          <div :style="{
            backgroundImage: 'radial-gradient(var(--color-fill-4) 0.4px, rgba(245, 255, 250, 0.8) 2.4px)',
            backgroundSize: '12px 12px',
            backdropFilter: 'blue 100',
            padding: '14px',
          }" class="glass">
            <el-row>
              <el-col :span="18">
                <el-button type="primary" disabled></el-button>
                <el-button type="success" disabled v-show="PcShow"></el-button>
                <TypeWriter />
              </el-col>
              <el-col :span="4" :offset="2">
                <div class="PcShow" v-show="PcShow">
                  <el-button-group class="HeaderBarRight">
                    <!-- <el-tooltip class="box-item" effect="dark" content="返回顶部" placement="bottom-start">
                    <IconToTop />
                  </el-tooltip> -->
                    <el-button type="primary"></el-button>
                    <el-button type="success"></el-button>
                    <el-button type="warning"></el-button>
                    <el-button type="danger"></el-button>
                  </el-button-group>
                </div>
              </el-col>
            </el-row>
          </div>
        </a-affix>
      </a-layout-header>
      <a-layout style="padding: 0 12px;">
        <a-divider margin="0" />
        <a-layout-content class="content">
          <Router-view />
        </a-layout-content>
        <!-- <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<style src="../src/App.css"/>
<script>
import { defineComponent } from 'vue';
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
  IconCompass,
  IconCommon,
  IconToTop
} from '@arco-design/web-vue/es/icon';
import TypeWriter from './components/TypeWriter.vue';
import { detectDeviceType } from "./utils/detectDeviceType"

export default defineComponent({
  data() {
    return {
      DevType: '',//设备类型
      PcShow: '',//是否在移动设备显示
      LayOutWidth: 180,
    };
  },
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
    IconCompass,
    IconCommon,
    IconToTop,
    TypeWriter
  },
  created() {
    const { DevType, PcShow } = detectDeviceType();
    this.DevType = DevType;
    this.PcShow = PcShow;
    console.log(this.DevType);
  },
  methods: {
    /* detectDeviceType() {
      // 获取用户代理字符串
      const userAgent = navigator.userAgent;

      // 判断设备类型
      if (userAgent.match(/Mobile|Android/i)) {
        this.DevType = 'mobile';
        this.PcShow = false;
        console.log(this.DevType);
      } else if (userAgent.match(/Windows NT/i)) {
        this.DevType = 'pc';
        this.PcShow = true;
        console.log(this.DevType);
      } else {
        this.DevType = 'other';
      }
    }, 
    已被包装成utils*/
  },

});
</script>

