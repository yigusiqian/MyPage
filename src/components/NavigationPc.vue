<template>
    <div class="Navigation">
        <el-col :span="24">
            <el-scrollbar always>
                <el-card id="main-card">
                    <el-row>
                        <el-col :span="22" :offset="1">
                            <a-card hoverable>
                                <a-collapse :default-active-key="['1']" accordion>
                                    <a-collapse-item header="我的常用" key="1">
                                        <el-row>
                                            <el-col :span="12" v-for="(item, index) in Link1" :key="index">
                                                <a-card>
                                                    <div :style="{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                    }">
                                                        <span
                                                            :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                                                            <a-avatar
                                                                :style="{ marginRight: '8px', backgroundColor: '#165DFF' }"
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
                                    <a-collapse-item header="我的常用" :key="2">
                                        <el-row>
                                            <el-col :span="12" v-for="(item, index) in Link1" :key="index">
                                                <a-card>
                                                    <div :style="{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                    }">
                                                        <span
                                                            :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                                                            <a-avatar
                                                                :style="{ marginRight: '8px', backgroundColor: '#165DFF' }"
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
                                </a-collapse>
                            </a-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10" :offset="1" id="Navcard2">
                            <a-card hoverable>
                                正在工作
                                <a-divider margin="1" />
                                <a-tabs position="left" trigger="hover">
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
                            </a-card>
                        </el-col>
                        <el-col :span="10" :offset="2" id="Navcard3">
                            <a-card hoverable>
                                休息一下
                                <a-divider margin="1" />
                                <a-tabs position="left" trigger="hover">
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
                            </a-card>
                        </el-col>
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