import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/news/News'),
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        pageTitle: 'អ្នកប្រើប្រាស់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/news',
                    name: 'news',
                    component: () => import('./views/news/News'),
                    meta: {
                        pageTitle: 'ពត៌មាន',
                        rule: 'editor'
                    }
                },
                {
                    path: '/aoc',
                    name: 'aoc',
                    component: () => import('./views/aoc/AOC'),
                    meta: {
                        pageTitle: 'ថ្នាក់សិក្សា ការិយាល័យ និងមជ្ឈមណ្ឌល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: () => import('./views/setting/Setting'),
                    meta: {
                        pageTitle: 'ការកំណត់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/video',
                    name: 'video',
                    component: () => import('./views/video/Video'),
                    meta: {
                        pageTitle: 'វីដេអូ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/gallery',
                    name: 'gallery',
                    component: () => import('./views/gallery/Gallery'),
                    meta: {
                        pageTitle: 'រូបភាព',
                        rule: 'editor'
                    }
                },
                {
                    path: '/banner',
                    name: 'banner',
                    component: () => import('./views/banner/Banner'),
                    meta: {
                        pageTitle: 'Banner',
                        rule: 'editor'
                    }
                },
                {
                    path: '/international-affair',
                    name: 'international-affair',
                    component: () => import('./views/international-affair/InternationalAffair'),
                    meta: {
                        pageTitle: 'International Affairs',
                        rule: 'editor'
                    }
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router
