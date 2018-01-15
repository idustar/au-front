import Vue from 'vue'
import Router from 'vue-router'

import notFoundPage from 'PAGES/NotFoundPage'
import home from 'PAGES/Home'
import club from 'PAGES/Club'
import login from 'PAGES/Login'
import register from 'PAGES/Register'
import setting from 'PAGES/Setting'

import admin from 'PAGES/admin/Admin'
import adminIndex from 'PAGES/admin/AdminIndex'
import adminClubs from 'PAGES/admin/AdminClubs'
import adminUsers from 'PAGES/admin/AdminUsers'
import adminTitles from 'PAGES/admin/AdminTitles'
import adminLogs from 'PAGES/admin/AdminLogs'
import adminSites from 'PAGES/admin/AdminSites'
import adminApps from 'PAGES/admin/AdminApps'

import notiBox from 'PAGES/NotiBox'
import notiDetail from 'PAGES/NotiDetail'
import newNoti from 'PAGES/NewNoti'

import budgetPage from 'PAGES/club/BudgetPage'
import indexPage from 'PAGES/club/IndexPage'
import otherPage from 'PAGES/club/OtherPage'
import posterPage from 'PAGES/club/PosterPage'
import settingPage from 'PAGES/club/SettingPage'
import sitePage from 'PAGES/club/SitePage'

import editBudget from 'PAGES/club/EditBudget'
import editSite from 'PAGES/club/EditSite'
import editPoster from 'PAGES/club/EditPoster'
import editOther from 'PAGES/club/EditOther'
import viewApp from 'PAGES/club/ViewApp'
import viewBudget from 'PAGES/club/ViewBudget'
import viewSite from 'PAGES/club/ViewSite'
import viewPoster from 'PAGES/club/ViewPoster'
import viewOther from 'PAGES/club/ViewOther'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register/:code',
    name: 'register',
    component: register
  },
  {
    path: '/',
    name: 'home',
    component: home,
    redirect: {
      name: 'index',
      params: { clubid: 0 }
    },
    children: [{
      path: '/setting',
      name: 'mySetting',
      component: setting
    }, {
      path: '/404',
      component: notFoundPage
    }, {
      path: '/club/:clubid',
      name: 'club',
      component: club,
      redirect: '/club/:clubid/index',
      children: [
        {
          path: '/club/:clubid/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/club/:clubid/budget',
          name: 'budget',
          component: budgetPage
        },
        {
          path: '/club/:clubid/poster',
          name: 'poster',
          component: posterPage
        },
        {
          path: '/club/:clubid/setting',
          name: 'setting',
          component: settingPage
        },
        {
          path: '/club/:clubid/site',
          name: 'site',
          component: sitePage
        },
        {
          path: '/club/:clubid/other',
          name: 'other',
          component: otherPage
        },
        {
          path: '/club/:clubid/app/',
          redirect: '/club/:clubid/app/budget',
          component: viewApp,
          children: [
            {
              path: '/club/:clubid/app/budget',
              name: 'appBudget',
              component: editBudget
            },
            {
              path: '/club/:clubid/app/poster',
              name: 'appPoster',
              component: editPoster
            },
            {
              path: '/club/:clubid/app/site',
              name: 'appSite',
              component: editSite
            },
            {
              path: '/club/:clubid/app/other',
              name: 'appOther',
              component: editOther
            },
            {
              path: '/club/:clubid/app/budget/:appid',
              name: 'viewBudget',
              component: viewBudget
            },
            {
              path: '/club/:clubid/app/poster/:appid',
              name: 'viewPoster',
              component: viewPoster
            },
            {
              path: '/club/:clubid/app/site/:appid',
              name: 'viewSite',
              component: viewSite
            },
            {
              path: '/club/:clubid/app/other/:appid',
              name: 'viewOther',
              component: viewOther
            }
          ]
        }
      ]
    }, {
      path: '/admin',
      component: admin,
      redirect: '/admin/index',
      children: [
        {
          path: '/admin/index',
          name: 'adminIndex',
          component: adminIndex
        },
        {
          path: '/admin/apps',
          name: 'adminApps',
          component: adminApps,
          redirect: '/admin/apps/budget',
          children: [
            {
              path: '/admin/apps/budget',
              name: 'adminAppsBudget',
              component: budgetPage
            },
            {
              path: '/admin/apps/site',
              name: 'adminAppsSite',
              component: sitePage
            },
            {
              path: '/admin/apps/poster',
              name: 'adminAppsPoster',
              component: posterPage
            },
            {
              path: '/admin/apps/other',
              name: 'adminAppsOther',
              component: otherPage
            }
          ]
        },
        {
          path: '/admin/titles',
          name: 'adminTitles',
          component: adminTitles
        },
        {
          path: '/admin/logs',
          name: 'adminLogs',
          component: adminLogs
        },
        {
          path: '/admin/users',
          name: 'adminUsers',
          component: adminUsers
        },
        {
          path: '/admin/clubs',
          name: 'adminClubs',
          component: adminClubs
        },
        {
          path: '/admin/sites',
          name: 'adminSites',
          component: adminSites
        }
      ]
    }, {
      path: '/noti',
      component: notiBox,
      children: [
        {
          path: '/notification/:nid?',
          name: 'noti',
          component: notiDetail
        },
        {
          path: '/send',
          name: 'send',
          component: newNoti
        }
      ]
    }]
  }, {
    path: '*',
    name: '404',
    redirect: '/404'
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
