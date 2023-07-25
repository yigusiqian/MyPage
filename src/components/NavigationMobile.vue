<template>
    <div class="Navigation">
        <el-col :span="24">
            <el-scrollbar always>
                <el-card id="main-card">
                    <el-row>
                        <a-collapse accordion :default-active-key="['0_1']" style="width: 100%;">
                            <a-collapse-item header="我的常用" key="0_1">
                                <el-row>
                                    <el-col :span="24" v-for="(item, index) in Link1" :key="index">
                                        <a-card style="width: 120%;margin-left: -12%; height: 8vh;">
                                            <div :style="{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }">
                                                <span :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                                                    <a-avatar :style="{ marginRight: '8px', backgroundColor: '#165DFF' }"
                                                        :size="28">
                                                        {{ item.avatar }}
                                                    </a-avatar>
                                                    <a-typography-text>{{ item.text }}</a-typography-text>
                                                </span>
                                                <a-link :href=item.href icon target="_blank" />
                                            </div>
                                        </a-card>
                                    </el-col>
                                </el-row>
                            </a-collapse-item>
                            <a-collapse-item header="正在工作" key="1_1">
                                <a-tabs position="top" trigger="hover" style="width: 120%;margin-left: -15%;">
                                    <a-tab-pane key="1" title="前端">
                                        <link-card :items="Work1" />
                                    </a-tab-pane>
                                    <a-tab-pane key="2" title="全栈">
                                        <link-card :items="Work2" />
                                    </a-tab-pane>
                                    <a-tab-pane key="3" title="后端">
                                        <link-card :items="Work3" />
                                    </a-tab-pane>
                                    <a-tab-pane key="4" title="社区">
                                        <link-card :items="Work3" />
                                    </a-tab-pane>
                                    <a-tab-pane key="5" title="其他方向">
                                        <link-card :items="Work3" />
                                    </a-tab-pane>
                                </a-tabs>
                            </a-collapse-item>
                            <a-collapse-item header="休息一下" key="1_2">
                                <a-tabs position="top" trigger="hover" style="width: 120%;margin-left: -15%;">
                                    <a-tab-pane key="1" title="视听娱乐">
                                        <link-card :items="Relax1" />
                                    </a-tab-pane>
                                    <a-tab-pane key="2" title="新闻资讯">
                                        <link-card :items="Relax2" />
                                    </a-tab-pane>
                                    <a-tab-pane key="3" title="二次元">
                                        <link-card :items="Relax3" />
                                    </a-tab-pane>
                                </a-tabs>
                            </a-collapse-item>
                        </a-collapse>
                    </el-row>
                </el-card>
            </el-scrollbar>
        </el-col>
    </div>
</template>
<style src="../style/navigation.css"/>
<script>
import {
    IconDoubleUp
} from '@arco-design/web-vue/es/icon';
import LinkData from '../data/link.json'
import LinkCard from './LinkCard.vue'
export default {
    data() {
        return {
            Link1: [],
            Work1: [], Work2: [], Work3: [],
            Relax1: [], Relax2: [], Relax3: [],
        }
    },
    created() {
        this.Link1 = LinkData.Link1Data;
        this.Work1 = LinkData.Work1;
        this.Work2 = LinkData.Work2;
        this.Work3 = LinkData.Work3;
        this.Relax1 = LinkData.Relax1;
        this.Relax2 = LinkData.Relax2;
        this.Relax3 = LinkData.Relax3;
        //console.log(this.Link1[0])/* 测试使用 */
    },
    components: {
        IconDoubleUp, LinkCard
    },
}
</script>