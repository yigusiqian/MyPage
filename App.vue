<template>
  <a-layout class="layout">
    <a-layout-sider collapsible breakpoint="xl">
      <div class="logo">
        <a-avatar :size="32" shape="square" imageUrl="../src/assets/SiteIcon.jpg" />
        <a-typography-text code>Power By 忆故思迁</a-typography-text>
      </div>
      <a-menu class="menu">
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
        <Router-link to="/Seach">
          <a-menu-item key="0_3">
            <icon-common />
            搜索
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
                <el-button type="success" disabled></el-button>
                <TypeWriter />
              </el-col>
              <el-col :span="4" :offset="2">
                <el-button-group class="HeaderBarRight">
                  <!-- <el-tooltip class="box-item" effect="dark" content="返回顶部" placement="bottom-start">
                    <IconToTop />
                  </el-tooltip> -->
                  <el-button type="primary"></el-button>
                  <el-button type="success"></el-button>
                  <el-button type="warning"></el-button>
                  <el-button type="danger"></el-button>
                </el-button-group>
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

export default defineComponent({
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
  methods: {

  }
});
</script>
<style src="../src/App.css"/>
