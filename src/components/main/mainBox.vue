<template>
    <div>
        <header-box title="善 意 达"></header-box>
        <div class="main-box">
            <van-swipe :autoplay="3000" :width="375" :height="160">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img src="images.pic"/>
                </van-swipe-item>
            </van-swipe>
            <div class="icon-box">
                <ul>
                    <li>
                        <img src="../../../public/img/icon-1.png"/>
                        <p>慈善赠药</p>
                    </li>
                    <li><img src="../../../public/img/icon-1.png"/>
                        <p>慈善项目</p>
                    </li>
                    <li><img src="../../../public/img/icon-1.png"/>
                        <p>知识库</p>
                    </li>
                </ul>
                <router-link to="/news">
                    <div class="icon-news">
                        <img src="../../../public/img/icon-4.png"
                             style="width:47px ;height:43px;margin: 14px 10px 0 10px"/>
                        <p style="margin:0 0 0 0; padding-left: 1.3rem;padding-bottom: 1px; font-size: 1.2rem;color: black">
                            热点资讯</p>
                    </div>
                </router-link>
            </div>
            <div class="space"></div>
            <p v-on:click="news">热点资讯</p>
            <P>{{ msgNews }}</P>
            <h2>在这里不会把图片作为数据传值</h2>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import HeaderBox from "../header/headerBox";

    export default {
        name: "mainBox",
        components: {HeaderBox},
        data() {
            return {
                msgNews: '',
                // 此处不明白怎样将图片数据传入组件
                images: [
                    {pic:require("@/assets/img/github.png")},
                    {pic:require("@/assets/img/github.png")},
                    {pic:require("@/assets/img/github.png")},
                    {pic:require("@/assets/img/github.png")},
                ],


            }
        },
        methods: {
            news() {
                let that = this
                this.$http.post("/news").then(function (res) {
                    that.msgNews = res.data.data[0].msg
                });
            },
            //尝试从mockjs传入图片数据
            img() {
                let that = this
                this.$http.post("/pict").then(function (res) {
                    that.images = res.data.data[0].msg
                })
            }

        },

    };
</script>

<style scoped lang="scss">
    .main-box {
        padding-top: 51px;
        padding-bottom: 51px;
        z-index: 0;
    }

    img {
        width: 100%;
        height: 160px;
    }

    .icon-box {
        width: 100%;
        height: 80px;
        background: #fff;
        margin-top: 0.5rem;
        ul li {
            width: 25%;
            height: 7rem;

            /*border: 1px solid;*/
            float: left;
            text-align: center;
            /*line-height: 10rem;*/
        }
        li img {
            width: 50%;
            height: 60%;
            margin: 15px 10px 0 30px;
        }
    }

    li p {
        margin-top: 0;
        padding-left: 16px;
        font-size: 1.2rem;
    }

    .icon-news {
        float: right;
        height: 70px;
        width: 23%;
    }

    .space {
        width: 100%;
        height: 4px;
        margin-top: 0;
        margin-bottom: 0;
        background: #f1f0f0;
    }
</style>
