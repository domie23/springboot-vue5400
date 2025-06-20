import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import huojiang from '@/views/modules/huojiang/list'
    import laoshi from '@/views/modules/laoshi/list'
    import pingshen from '@/views/modules/pingshen/list'
    import pingshenFenpei from '@/views/modules/pingshenFenpei/list'
    import pingshenPingfen from '@/views/modules/pingshenPingfen/list'
    import saishi from '@/views/modules/saishi/list'
    import saishiTijiao from '@/views/modules/saishiTijiao/list'
    import saishiYuyue from '@/views/modules/saishiYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhuanjia from '@/views/modules/zhuanjia/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHuojiang from '@/views/modules/dictionaryHuojiang/list'
    import dictionarySaishi from '@/views/modules/dictionarySaishi/list'
    import dictionarySaishiTijiaoYesno from '@/views/modules/dictionarySaishiTijiaoYesno/list'
    import dictionarySaishiYuyueYesno from '@/views/modules/dictionarySaishiYuyueYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import pingshentijiao from '@/views/modules/pingshen/add-or-update'
    import fenpei from '@/views/modules/pingshenFenpei/add-or-update'
    import dafen from '@/views/modules/pingshenPingfen/add-or-update'




//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuojiang',
        name: '获奖类型',
        component: dictionaryHuojiang
    }
    ,{
        path: '/dictionarySaishi',
        name: '赛事类型',
        component: dictionarySaishi
    }
    ,{
        path: '/dictionarySaishiTijiaoYesno',
        name: '提交状态',
        component: dictionarySaishiTijiaoYesno
    }
    ,{
        path: '/dictionarySaishiYuyueYesno',
        name: '报名状态',
        component: dictionarySaishiYuyueYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '竞赛公告',
        component: gonggao
      }
    ,{
        path: '/huojiang',
        name: '获奖',
        component: huojiang
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/pingshen',
        name: '评审',
        component: pingshen
      }
        ,{
            path: '/pingshentijiao',
            name: '提交评审',
            component: pingshentijiao
        },{
            path: '/fenpei',
            name: '分配',
            component: fenpei
        },
        {
            path: '/dafen',
            name: '打分',
            component: dafen
        }
    ,{
        path: '/pingshenFenpei',
        name: '评审分配',
        component: pingshenFenpei
      }
    ,{
        path: '/pingshenPingfen',
        name: '评审打分',
        component: pingshenPingfen
      }
    ,{
        path: '/saishi',
        name: '赛事',
        component: saishi
      }
    ,{
        path: '/saishiTijiao',
        name: '赛事提交',
        component: saishiTijiao
      }
    ,{
        path: '/saishiYuyue',
        name: '赛事报名',
        component: saishiYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhuanjia',
        name: '专家',
        component: zhuanjia
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
