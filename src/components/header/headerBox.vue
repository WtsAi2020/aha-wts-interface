<template>
    <div class="header-box">
        {{ title }}
        <div class="main-icon">
            <van-icon name="search" color="#00a8f3" size="20px"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerBox",
        props: {
            title: String
        }
    };
</script>

<style scoped lang="scss">
    .header-box {
        position: fixed;
        top: 0;
        left: 0;
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ddd;
        text-align: center;
        line-height: 50px;
        z-index: 100;
        background: #fff;
        font-size: 1.6rem;
    }

    .main-icon {
        float: right;
        margin: 2px 15px 0px 0;
    }

    .font {
        float: left;
        position: fixed;
        margin: 0 0 0 165px;
    }
</style>
