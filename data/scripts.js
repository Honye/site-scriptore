// @ts-check

/** @type {Script[]} */
export const widgets = [
  {
    name: 'Weibo',
    version: '2.4.3',
    icon: 'whatshot',
    intro: '微博热搜小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@16c09bee3ce2963ca78f163ebc17801930e28d8a/dist/Weibo.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_1.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_2.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_3.jpg',
    ],
    content: 'Scriptable 微博热搜小组件\n\n- 支持中英双语\n- 可自定义背景、色彩和尺寸等\n\n编辑小组件时填入 `dark` 或 `light` 可固定为深/浅色模式\n\n切换至深（浅）色模式可修改深（浅）色模式下颜色配置\n\n'
  },
  {
    name: 'Photos',
    version: '1.1.0',
    icon: 'photo_library',
    intro: '支持多相册的桌面小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@a18290cf5823e6ab4c5644e9352f79cfe16e25bc/dist/Photos.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1568.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1569.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1570.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Photos_1.png',
    ],
    content: '支持多相册的桌面小组件\n\n新建相册后在桌面编辑组件时输入创建的相册名\n\n设置透明背景后可实现 PNG 透明效果\n\n',
  },
  {
    name: 'Photo',
    version: '1.1.0',
    icon: 'photo_library',
    intro: '图片和中华日历展示小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@06e762b5eee1a46000884142838ce5eec7767557/dist/Photo.js'
    ],
    content: '图片和中华日历展示小组件\n\n添加到桌面前需先在 APP 内运行选择图片\n\n有使用特殊字体“华康勘亭流”，可下载相关字体或者清空字体配置\n\n'
  },
  {
    name: 'GitHub Contributions',
    version: '1.4.0',
    icon: 'apps',
    intro: 'GitHub 贡献网格图小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e46010069ee777eae5a5976d13a5c12452b06927/dist/GitHub%20Contributions.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/GitHub_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/GitHub_2.png',
    ],
    content: 'Scriptable GitHub 贡献网格图小组件\n\n'
  },
  {
    name: 'GitHub Profile',
    version: '1.1.1',
    icon: 'account_circle',
    bgcolor: '#bdbdbd',
    intro: 'GitHub 个人主页小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@aa7cb420b7c8529cbfe365d96834135c1f51d839/dist/GitHub%20Profile.js',
    ],
    content: 'Scriptable GitHub 个人主页信息小组件\n\n'
  },
  {
    name: 'CoinGecko',
    version: '1.2.2',
    icon: 'attach_money',
    intro: '数字货币实时价格小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/CoinGecko.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/CoinGecko_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/CoinGecko_2.png'
    ],
    content: '数字货币实时价格小组件\n\n数据来源于 CoinGecko\n\n'
  },
  {
    name: 'Calendar',
    version: '1.4.5',
    icon: 'calendar_month',
    intro: '和 Apple 日历一样美观的日历，农历显示，可作为打卡日历',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@5f3783951db091f5abf7e027f1d462daa0cac0a8/dist/Calendar.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/calendar.jpeg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@4161187f9f842532d716aeb6958e026a0e6a13a8/docs/assets/calendar_preview_1.jpg',
    ],
    content: '美观的日历小组件\n\n- 支持中英双语\n- 可自定义背景和色彩\n- 编辑组件时可输入系统日历名\n\n- 中号组件可显示事件和自定义是否显示提醒事项\n\n'
  },
  {
    name: 'Countdown',
    version: '1.2.0',
    icon: 'restore',
    intro: '倒数日/纪念日小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@738c030b80ca4ada3ed1a835763109031befabbe/dist/Countdown.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/countdown_1.jpg',
    ],
    content: 'Scriptable 纪念日/倒数日小组件\n\n- 支持中英双语\n- 可高度自定义\n\n',
  },
  {
    name: 'Douban',
    version: '1.1.1',
    icon: 'movie',
    intro: '豆瓣每日电影小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@bffe39298db9cb47705e4bfed32a08bcb8763787/dist/Douban.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Douban_1.png',
    ],
    content: 'Scriptable 豆瓣每日电影卡片小组件\n\n'
  },
  {
    name: 'Xiaohongshu',
    version: '1.0.2',
    icon: '',
    intro: '小红书热榜小组件',
    content: 'Scriptable 小红书热搜榜单小组件\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@c084e5303589bc60ed93dd1e65877880de460379/dist/Xiaohongshu.js',
    ],
    snapshots: [],
  },
  {
    name: 'App 限免优惠',
    version: '1.1.0',
    icon: 'paid',
    intro: 'iOS 每日限免和优惠应用小组件',
    content: 'Scriptable iOS 和 MacOS 每日限免和优惠应用小组件\n\n点击直达应用商店应用详情\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e403141f397f42b0304ad5a68cfb3eb5924b4f59/dist/App%20%E9%99%90%E5%85%8D%E4%BC%98%E6%83%A0.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/AppFree_1.png',
    ]
  },
  {
    name: 'Shortcuts',
    version: '1.2.1',
    icon: 'app_shortcut',
    intro: '日历和桌面快捷方式小组件',
    content: 'Scriptable 日历和桌面快捷方式小组件\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@6e9fe966a478fd8c0aade0b5920fb1b98425a315/dist/Shortcuts.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Shortcuts_1.png',
    ]
  },
  {
    name: '10010',
    version: '1.1.0',
    icon: 'phone_iphone',
    intro: '联通余量信息和自动签到',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/10010.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/10010_small_light.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/10010_small_dark.jpg',
    ],
  },
  {
    name: '湖北联通',
    version: '2.0.0',
    icon: 'phone_iphone',
    intro: '湖北联通余额信息',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@4f44a28c57ea1d0dc3dca51033803905e69c4ebe/dist/%E6%B9%96%E5%8C%97%E8%81%94%E9%80%9A.js'
    ],
    content: `之前的 10010 组件只能显示已使用的流量信息，使用湖北联通显示的是剩余的流量\n\n数据来源于公众号【湖北联通】\n\n原创 UI，修改套用请注明来源`,
  },
  {
    name: 'Matrix',
    version: '0.1.1',
    intro: '任意网格排列图片或快捷方式',
    content: '支持任意网格排列图片或快捷方式的 Scriptable 小组件\n\n配置说明：\n图片和快捷方式配置暂未提供可视化配置，如需修改默认配置可进入代码编辑模式参照注释修改',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@20c1b796f59297515a991adda3f6871bceb09fe7/dist/Matrix.js'
    ],
    dependencies: {
      'utils.module': 'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/utils.module.js',
      'widgets.module': 'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/widgets.module.js',
      'withSettings.module': 'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/withSettings.module.js'
    }
  },
  {
    name: 'Wallhaven',
    version: '1.0.0',
    icon: 'wallpaper',
    intro: 'Wallhaven 壁纸小组件',
    content: 'wallhaven.cc 壁纸小组件。精美高清动漫壁纸，也有其他高质量的图片\n\n- 支持中英双语可视化配置\n- 支持 4 种排列方式\n- 自定义过滤搜索规则\n- 点击可查看和收藏\n\n限制级内容需填写个人账号 API Key\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@master/dist/Wallhaven.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Wallhaven_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Wallhaven_2.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Wallhaven_3.png'
    ]
  },
  {
    name: 'Sinopec',
    version: '1.0.1',
    icon: 'local_gas_station',
    intro: '中国石化油价小组件',
    content: 'Scriptable 中国石化油价小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@ff42a9ce1d4ed4d971ef8c43b00388cd32ed59c4/dist/Sinopec.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Sinopec_1.png',
    ]
  },
  {
    name: '星座屋',
    version: '1.0.0',
    icon: 'hub',
    intro: '星座屋-星座运势小组件',
    content: 'Scriptable 星座屋星座运势小组件\n\n此版数据来源于星座屋\n\n由于不清楚有多少种幸运色，此版边框颜色不会使用幸运色\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@master/dist/%E6%98%9F%E5%BA%A7%E5%B1%8B.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@8e5067e45cb10fcf27873769e2572bc79c0998f9/docs/assets/Astrology_1.png'
    ]
  },
  {
    name: 'Send Photo',
    version: '1.0.0',
    icon: 'co_present',
    intro: '发送图片到朋友桌面组件',
    content: '和朋友互相发送照片到对方桌面小组件上显示\n\n使用教程：https://mp.weixin.qq.com/s/D-NHT7sQNpD7YvKdz2BhkA\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@44d463d25cb17611f39df90c9d0f02a0e6b46041/dist/Send%20Photo.js'
    ]
  },
  {
    name: 'ChatGPT',
    version: '1.1.0',
    icon: 'ac_unit',
    intro: 'AI 生成文本或图像',
    content: '\n\n需要自备 OpenAI API Key\n\nAPI Key 可在 https://platform.openai.com 获取',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@ff9918bab26d470bf89ea11bc3e4288d2461909a/dist/ChatGPT.js'
    ]
  },
  {
    name: 'OpenAI',
    version: '1.0.0',
    icon: 'ac_unit',
    intro: 'OpenAI 账户使用情况',
    content: '\n\nSession Key 需自行从网页 https://platform.openai.com/account/usage 抓取' +
      '\n\n抓取请求 https://api.openai.com/dashboard/billing/credit_grants 的请求头中的 Authorization' +
      '\n\n不要前面的 Bearer',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@ff0746cfeceaa5d7c9c88357dd1fa0883a0b0743/dist/OpenAI.js'
    ]
  },
  {
    name: '掘金',
    version: '1.1.0',
    intro: '掘金文章列表',
    content: '\n\n掘金文章订阅' +
      '\n\n支持指定文章分类',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@742ce0b79b26305a28607fe022fa4bb226f93b8d/dist/Juejin.js'
    ]
  },
  {
    name: 'Olympics',
    version: '1.2.1',
    intro: '2024 巴黎奥运会奖牌榜',
    content: '2024 巴黎奥运会奖牌榜',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@e19489479d76afbf4b331e07cd1db83768a49855/dist/Olympics.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Olympics_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Olympics_2.png',
    ],
  },
  {
    name: 'SGCC',
    version: '1.3.4',
    intro: '网上国网',
    content: '网上国网小组件',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@abbfb2e5ac92d1b53483860c5d44574e59c35c23/dist/SGCC.js'
    ]
  },
  {
    name: 'CLS Telegraph',
    version: '1.2.0',
    icon: 'newspaper',
    intro: '财联社电报小组件 ©imarkr',
    content: '财联社电报小组件 ©imarkr',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@bcc458f761ed1a0313a9c67959dfd0b989ff26c2/dist/CLS%20Telegraph.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/CLS_dark.png'
    ]
  },
  {
    name: '财联社电报',
    version: '1.3.3',
    intro: '财联社电报小组件',
    content: 'Scriptable 财联社电报小组件\n\n由 @Yeetouu 投稿\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@14b7246a1469c549e5767a373e4e2521b8a563f7/dist/%E8%B4%A2%E8%81%94%E7%A4%BE%E7%94%B5%E6%8A%A5.js'
    ]
  },
  {
    name: 'Pet Birthday',
    version: '1.0.1',
    intro: '宠物生日小组件',
    content: '爱宠生日小组件\n\n使用了字体“沐瑶软体”\n\n可以在通讯录中创建一个名为“Pets”的分组，将宠物名字添加进去，设置好生日后即可显示在小组件中\n\n或者在 App 中运行选择宠物图片和配置生日',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Pet%20Birthday.js'
    ]
  }
];

/** @type {Script[]} */
export const modules = [
  {
    name: 'lunar',
    version: '1.0.0',
    icon: 'event_available',
    intro: '农历转换工具',
    content: 'Scriptable 农历查询和转换模块\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/lunar.module.js',
    ],
  },
  {
    name: 'utils',
    version: '1.2.1',
    icon: 'handyman',
    intro: '工具集',
    content: 'Scriptable 工具集合模块\n\n- 不同设备小组件尺寸和位置信息\n- vw、vh、vmin\n- 脚本更新\- 多语言工具\n - 获取网络图片\n - 日期比较工具 \n- 规范缓存工具\n- 图标换色\n - 等等\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@a3261aea31aa099dcc8bb447e1fb216610d1fb2b/src/utils.module.js',
    ],
  },
  {
    name: 'color',
    version: '1.0.0',
    icon: 'palette',
    intro: '颜色处理工具',
    content: 'Scriptable 颜色处理工具模块\n\n- 十六进制、RGB 和 HSL 颜色互转\n\n- 颜色亮度调整\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/color.module.js',
    ],
  },
  {
    name: 'Bridge',
    version: '1.0.3',
    icon: 'coronavirus',
    intro: 'Scriptable 与 WebView 的通信桥梁',
    content: 'Scriptable 与 WebView 的通信模块\n\n- WebView 调用 Scriptable 方法\n- Scriptable JS 注入 WebView\n- 支持监听事件\n- 支持发送消息\n- 支持调用回调\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@4e1d3560b76088dd3805b92ecf7c19fdaa64307a/src/Bridge.module.js'
    ]
  },
  {
    name: 'withSettings',
    version: '1.7.2',
    icon: 'dashboard',
    intro: '轻松实现可视化配置',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e2151b28ead465d40a15c57ec5a0f75f1d178987/src/withSettings.module.js',
    ],
    content: '轻松便捷实现 Scriptable 小组件可视化配置\n\n切换主题后可修改不同主题的配置\n\n',
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/withSettings_light.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/withSettings_dark.png'
    ]
  },
  {
    name: 'widgets',
    version: '1.0.0',
    icon: 'widgets',
    intro: '常用组件工具集',
    content: 'Scriptable 组件集模块\n\n- 头像组件\n- 网格布局组件\n- 弧形组件\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/widgets.module.js',
    ],
  },
  {
    name: 'Proxy',
    version: '1.0.0',
    icon: 'extension',
    intro: 'API 链式调用无命名烦恼',
    content: 'Scriptable API 增强工具\nAPI 链式调用无命名烦恼\n组件可修改的属性修改配置的方法均可支持链式调用\n若有疑问可在 GitHub 联系我\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/Proxy.module.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Proxy_1.jpg'
    ]
  },
];

/** @type {Script[]} */
export const others = [
  {
    name: 'Installer',
    version: '1.1.0',
    icon: 'system_update',
    intro: '通过分享、剪贴板和局域网链接快速安装脚本',
    content: '通过分享、剪贴板和局域网链接快速安装脚本',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Installer.js',
    ],
  },
  {
    name: 'Clean Files',
    version: '1.0.1',
    icon: 'folder_open',
    intro: '文件管理，可用于清理缓存文件和脚本文件缓存调试',
    content: 'Scriptable 专用文件管理，可用于清理缓存文件和脚本文件缓存调试',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Clean%20Files.js',
    ],
  },
  {
    name: 'Clean Files 2',
    version: '2.3.1',
    icon: 'folder_open',
    intro: 'Clean Files 的升级版',
    content: 'Scriptable 专用文件管理\n\n支持文本、图片、视频预览和分享\n\n可用于清理长时间使用的缓存文件和开发调试\n\n可分享文件和导入替换文件\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@c716a6a06fb7fd45b3b228f518f5a5b1ed78f5cc/dist/Clean%20Files%202.js',
    ],
  },
  {
    name: 'SF Symbols',
    version: '1.0.1',
    icon: 'keyboard_command_key',
    intro: 'SF Symbols 图标浏览查找',
    content: 'Scriptable SF Symbols 图标浏览查找',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@eb0ffa7c25b2d297e4de7b960fb376d551d959a2/dist/SF%20Symbols.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/SF-Symbols_1.png'
    ]
  },
  {
    name: 'Widget Sizes',
    version: '1.0.1',
    icon: 'splitscreen_portrait',
    intro: '桌面小组件尺寸和位置计算',
    content: 'Scriptable 桌面小组件尺寸和位置计算',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@7d634d67dfdd699f67ed7d117a264395f157eb26/dist/Widget%20Sizes.js'
    ]
  },
  {
    name: 'Image Uploader',
    version: '1.0.0',
    intro: '上传图片到图床',
    content: '\n\n上传图片到 SM.MS 图床' +
      '\n\n支持查看历史上传记录' +
      '\n\n可能需要科学上网',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@master/dist/Image%20Uploader.js'
    ]
  },
  {
    name: 'Scriptore',
    version: '1.0.2',
    icon: 'token',
    intro: 'Scriptable 脚本仓库',
    content: 'Scriptable 脚本仓库',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@d3b482a7e034c9bdf7f2fb082219912f2a618eeb/dist/Scriptore.js',
    ],
  },
];

/** @type {Script[]} */
export const deprecated = [
  {
    name: 'Astrology',
    version: '1.2.3',
    icon: 'hub',
    intro: '星座运势',
    content: '边框颜色默认显示运势幸运色，用户可以自定义\n\n修改边框颜色后可以通过重置恢复为幸运色\n\n支持通过修改文字大小调整整体内容大小\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@e8babcfcd16040cc317528a7721f68a5f6f5595c/dist/Astrology.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@8e5067e45cb10fcf27873769e2572bc79c0998f9/docs/assets/Astrology_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Astrology_2.png'
    ],
  },
];

/**
 * @typedef {object} Script
 * @property {string} name
 * @property {string} version 版本。如：1.0.0
 * @property {string} intro 简述
 * @property {string[]} files 文件可下载链接。入口文件放在首位
 * @property {Record<string, string>} [dependencies] 依赖
 * @property {string[]} [snapshots] 预览图链接
 * @property {string} [content] 详细说明
 * @property {string} [icon] Material Icon
 * @property {string} [bgcolor] 背景色
 * @property {string} [background] 背景
 */
