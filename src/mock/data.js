export const list = {
      Msg: 'ok',
      Code: 0,
      Data: {
        Admin: { name: 'testAdmin' },
        Menu: [
          {
            name: '控制中心',
            icon: 'dashboard',
            path: 'dashboard',
          },
          {
            name: '高级',
            icon: 'team',
            path: 'admin',
            children: [
              {
                name: '角色',
                path: 'role',
              },
              {
                name: '人员角色',
                path: 'admin-role',
              },
              {
                name: '菜单',
                path: 'menu',
              },
            ],
          },
          {
            name: '用户',
            icon: 'user',
            path: 'client',
            children: [
              {
                name: '账号',
                path: 'account',
              },
            ],
          },
          {
            name: '预约参观',
            icon: 'flag',
            path: 'visit',
            children: [
              {
                name: '预约记录',
                path: 'visit-record',
              },
            ],
          },
          {
            name: '项目授权',
            icon: 'api',
            path: 'accredit',
            children: [
              {
                name: '项目分配',
                path: 'allot',
              },
            ],
          },
          {
            name: '项目',
            icon: 'appstore',
            path: 'project',
          },
          {
            name: '官网',
            icon: 'global',
            path: 'office',
            children: [
              {
                name: '首页配置',
                path: 'home',
                children: [
                  {
                    name: '轮播图',
                    path: 'swiper',
                  },
                  {
                    name: '推荐位',
                    path: 'recommend',
                  },
                  {
                    name: '合作企业logo',
                    path: 'logo',
                  },
                ],
              },
              {
                name: '公司介绍',
                path: 'intro',
                children: [
                  {
                    name: '大事件',
                    path: 'news',
                  },
                  {
                    name: '解决方案',
                    path: 'solution',
                  },
                  {
                    name: '核心产品',
                    path: 'core',
                  },
                  {
                    name: '战略合作',
                    path: 'cooperation',
                  },
                ],
              },
              {
                name: '关于我们',
                path: 'about',
                children: [
                  {
                    name: 'banner图',
                    path: 'banner',
                  },
                  {
                    name: '联系方式',
                    path: 'contact',
                  },
                  {
                    name: '团队管理',
                    path: 'team',
                  },
                  {
                    name: '工作机会',
                    path: 'offer',
                  },
                ],
              },
              {
                name: '项目设置',
                path: 'project',
                children: [
                  {
                    name: '项目授权',
                    path: 'ProPage',
                  },
                  {
                    name: '项目配置',
                    path: 'proConf',
                  },
                  {
                    name: '项目配置应用场景',
                    path: 'proConfCentre',
                  },
                  {
                    name: '预约参观',
                    path: 'order-visit',
                  },
                ],
              },
              {
                name: 'SEO设置',
                path: 'seo',
              },
            ],
          },
        ],
      },
    };

  