<template>
    <div class="menu">
        <div class="menu-left">
            <template v-for="(info, index) in infolist">
                <h2 :key="index">{{info.title}}</h2>
                </br>
                <ul>
                    <router-link v-for="(item, index) in info.list" :key="index" :to="{path:item.path}" @click.native="addButton(item.title, item.path)" style="text-decoration-line: none">
                        {{item.title}}</br></br>
                    </router-link>
                </ul>
            </template>
        </div>
        <div class="menu-banner">
            <div class="banner welcome" style="float:left;margin-top:40px;margin-left:10px;width:150px;height:30px;border:1px yellow solid">
                <div style="float:left;margin-top:4px;margin-left:4px;"><router-link :to="{path:'welcome'}" style="text-decoration-line: none">首页</router-link></div>
            </div>
            <div v-for="(value, index) in bannerlist" :key="index" class="banner" style="float:left;margin-top:40px;margin-left:10px;width:150px;height:30px;border:1px yellow solid">
                <div style="float:left;margin-top:4px;margin-left:4px;"><router-link :to="{path:value.path}" style="text-decoration-line: none">{{value.title}}</router-link></div>
                <div style="float:right;margin-top:4px;margin-right:4px;cursor:pointer;" @click="delButton(index)">
                    <router-link :to="{path:'welcome'}" style="text-decoration-line: none">X</router-link>
                    </div>
            </div>
        </div>
        <div class="menu-conent">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '这里是左侧的导航栏',
            bannerlist:[],
            infolist: {
                earth:{
                    title: '首页',
                    list:[
                        {
                            title: '',
                            path:'/earth/welcome'
                        }
                    ]
                },
                people:{
                    title: '人类',
                    list:[
                        {
                            title: '人类一号',
                            path: 'people1'
                        },
                        {
                            title: '人类二号',
                            path: 'people2'
                        },
                        {
                            title: '人类三号',
                            path: 'people3'
                        },
                    ]
                },
                animal:{
                    title: '动物',
                    list:[
                        {
                            title: '动物一号',
                            path: 'animal1'
                        },
                        {
                            title: '动物二号',
                            path: 'animal2'
                        },
                        {
                            title: '动物三号',
                            path: 'animal3'
                        },
                    ]
                },
                plant:{
                    title: '植物',
                    list:[
                        {
                            title: '植物一号',
                            path: 'plant1'
                        },
                        {
                            title: '植物二号',
                            path: 'plant2'
                        },
                        {
                            title: '植物三号',
                            path: 'plant3'
                        },
                    ]
                },
            }
        }
    },
    methods:{
        addButton(title, path) {
            //判断是否已经添加过
            for(let value in this.bannerlist) {
                if (path === this.bannerlist[value].path) {
                    return
                }
            }
            //添加到指定位置
            this.bannerlist.push({
                title,
                path
            })
        },
        delButton(index){
            console.log(index)
            this.$delete(this.bannerlist, index)
            //显示首页
        }
    }
}
</script>
<style lang="less" scoped>
.menu {
    // border:1px red solid;
    height:100%;
    width:100%;
    margin:20px;
    overflow:hidden;
}
.menu-left {
    // border:1px red solid;
    height:1000px;
    width:15%;
    margin-left:2%;
    margin-top:20px;
    color:yellow;
    float:left;
}
.menu-banner {
    // border:1px red solid;
    height:100px;
    width:80%;
    margin-top:20px;
    color:yellow;
    float:left;
}
.menu-conent {
    // border:1px red solid;
    height:700px;
    width:80%;
    margin-top:20px;
    color:yellow;
    float:left;
}
a:link {
    color: #00e8ff
}
a:visited {
    color: #00e8ff
}
</style>