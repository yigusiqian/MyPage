<template>
    <div class="clock" style="overflow: hidden;">
        <a-avatar shape="square" :style="{ backgroundColor: '#7BC0FC' }">
            <IconClockCircle />
        </a-avatar>
        <p style="margin-top: 3px;">{{ currentDate }}-{{ time }}</p>
    </div>
</template>
  
<script>
import {
    IconClockCircle,
} from '@arco-design/web-vue/es/icon';
export default {
    data() {
        return {
            time: '',
            currentDate: ''
        }
    },
    methods: {
        updateTime() {
            const date = new Date()
            this.time = date.toLocaleTimeString()
        },
        getCurrentDate() {
            const date = new Date();
            this.currentDate = date.toLocaleDateString();
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
        this.getCurrentDate();
        setInterval(this.getCurrentDate, 1000)
    },
    components: {
        IconClockCircle,
    },
}
</script>
