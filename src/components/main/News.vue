<template>
    <div>
        <header-box title="热点资讯"></header-box>
        <div class="items" :v-for="(item,key) in list" :key="key">
            {{ item }}
            <h3>老师我这里报错了</h3>
            <h3>itme, key, list, is not defind</h3>
        </div>
    </div>
</template>

<script>
    import HeaderBox from "../header/headerBox";

    export default {
        name: "News",
        components: {HeaderBox},
        data() {
            return {
                list: []
            };
        },
        mounted() {
            let that = this
            this.$http.post("/list").then(function (res) {
                that.list = res.data.data
            })
        }
    };
</script>

<style scoped lang="scss">
    .items {
        width: 100%;
        height: 7rem;
        background: #d3d3d3;
        margin-top: 6rem;
        margin-bottom: 1rem;
        z-index: 0;
    }
</style>
