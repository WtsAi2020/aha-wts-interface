var Mock = require('mockjs')        //引入下载的mockjs依赖包


const newsData = function () {
    let newsData = [
        {
            code: '1',       //请求是否成功 1:成功 0:失败
            msg: '获取资讯成功!'     //提示信息
        }
    ]
    return {
        data: newsData  //返回假数据
    }
}

const dataNews = function () {
    let dataOne = [
        {
            msg:'第一条资讯'
        },
        {
            msg:'第二条资讯'
        },
        {
            msg:'第三条资讯'
        },
        {
            msg:'第四条资讯'
        },
        {
            msg:'第五条资讯'
        },
        {
            msg:'第六条资讯'
        },
        {
            msg:'第七条资讯'
        },
    ]
    return{
        data:dataOne
    }
}

const imgData = function () {
    let imgData = [
        {
            msg: '../../../public/img/github.png'
        }
    ]
    return {
        data: imgData
    }
}

Mock.mock('/news', /post|get/i, newsData);//当post或get请求到/login路由时Mock会拦截请求并返回上面的数据
Mock.mock('/pict', /post|get/i, imgData);
Mock.mock('/list', /posr|get/i, dataNews);