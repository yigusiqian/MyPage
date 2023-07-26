<template>
    <!-- 这里是时光胶囊 -->
    <a-space size="small" direction="vertical">
        <text size="large">时光胶囊(每5分钟刷新)</text>
        <el-text>当前日期：{{ currentDate }}</el-text>
        <el-text>距离新年还有 {{ daysToNewYear }} 天</el-text>
        <el-text>当前年份：{{ currentYear }}/当前月份：{{ currentMonth }}/当日日期：{{ currentDay }}</el-text>
        <el-text>当日星期：{{ currentWeekday }}</el-text>
        <el-text>距离周六还有：{{ daysToSaturday }}天</el-text>
    </a-space>
</template>
  
<script>
export default {
    data() {
        return {
            currentDate: null,
            currentYear: null,
            currentMonth: null,
            currentDay: null,
            currentWeekday: null,
            daysToNewYear: null,
            daysToSaturday: null,
        };
    },
    mounted() {
        this.getCurrentDate();
        this.calculateDaysToNewYear();
        this.calculateDaysToSaturday();

        // 每5分钟刷新时光胶囊
        setInterval(() => {
            this.getCurrentDate();
            this.calculateDaysToNewYear();
            this.calculateDaysToSaturday();
        }, 5 * 60 * 1000); // 5分钟 = 5 * 60秒 * 1000毫秒
    },
    methods: {
        getCurrentDate() {
            const date = new Date();
            this.currentDate = date.toLocaleDateString();
            this.currentYear = date.getFullYear();
            this.currentMonth = date.getMonth() + 1;
            this.currentDay = date.getDate();
            this.currentWeekday = date.toLocaleDateString('zh-CN', { weekday: 'long' });
        },
        calculateDaysToNewYear() {//距离下一年新年还有多久
            const date = new Date();//创建日期对象
            const currentYear = date.getFullYear();
            const newYear = new Date(currentYear + 1, 0, 1); // 下一年的1月1日
            const timeDiff = newYear.getTime() - date.getTime();
            const daysToNewYear = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 将毫秒转换为天数
            this.daysToNewYear = daysToNewYear;
        },
        calculateDaysToSaturday() {//距离下一个星期六还有多久？
            const date = new Date();//创建日期对象
            const currentWeekday = date.getDay();
            const daysToAdd = currentWeekday <= 6 ? 6 - currentWeekday : 6; // 计算距离下一个周六的天数
            const nextSaturday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysToAdd);
            const timeDiff = nextSaturday.getTime() - date.getTime();
            const daysToSaturday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 将毫秒转换为天数
            this.daysToSaturday = daysToSaturday;
        },
    },
};
</script>
  