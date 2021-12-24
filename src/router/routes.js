const routes = [{
        path: "/",
        component: () =>
            import ("layouts/LayoutNew.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/Index.vue"),
            },
            {
                path: "/drivers",
                component: () =>
                    import ("pages/Drivers.vue"),
            },
            {
                path: "/rule",
                component: () =>
                    import ("pages/Rule.vue"),
            },
            {
                path: "/operators",
                component: () =>
                    import ("pages/Operators.vue"),
            },
            {
                path: "/questions",
                component: () =>
                    import ("pages/Questions.vue"),
            },
            {
                path: "/grafik-driver",
                component: () =>
                    import ("pages/GrafikDriver.vue"),
            },
            {
                path: "/grafik-operator",
                component: () =>
                    import ("pages/GrafikOperator.vue"),
            },
            {
                path: "/video",
                component: () =>
                    import ("pages/Video.vue"),
            },
            {
                path: "/bonus",
                component: () =>
                    import ("pages/Bonus.vue"),
            },
            {
                path: "/price",
                component: () =>
                    import ("pages/Price.vue"),
            },
            {
                path: "/phone",
                component: () =>
                    import ("pages/Phone.vue"),
            },
        ],
    },

    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/Error404.vue"),
    },
];

export default routes;