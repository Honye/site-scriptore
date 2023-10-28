// @ts-check

/** @type {Script[]} */
export const widgets = [
  {
    name: 'Weibo',
    version: '2.3.0',
    icon: 'whatshot',
    intro: '微博热搜',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@1bbe3ea71a929fe70fd2b3c131b20ec48c8b4677/dist/Weibo.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_1.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_2.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Weibo_3.jpg',
    ],
    content: '微博热搜小组件\n\n- 支持中英双语\n- 可自定义背景、色彩和尺寸等\n\n编辑小组件时填入 `dark` 或 `light` 可固定为深/浅色模式\n\n'
  },
  {
    name: 'Photos',
    version: '1.1.0',
    icon: 'photo_library',
    intro: '支持多相册的桌面组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@a18290cf5823e6ab4c5644e9352f79cfe16e25bc/dist/Photos.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1568.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1569.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1570.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Photos_1.png',
    ],
    content: '新建相册后在桌面编辑组件时输入创建的相册名\n\n设置透明背景后可实现 PNG 透明效果\n\n',
  },
  {
    name: 'GitHub Contributions',
    version: '1.4.0',
    intro: 'GitHub 贡献网格图',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e46010069ee777eae5a5976d13a5c12452b06927/dist/GitHub%20Contributions.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/GitHub_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/GitHub_2.png',
    ],
  },
  {
    name: 'CoinGecko',
    version: '1.2.2',
    icon: 'attach_money',
    intro: '数字货币实时价格',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/CoinGecko.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/CoinGecko_1.png',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/CoinGecko_2.png'
    ]
  },
  {
    name: 'Calendar',
    version: '1.4.4',
    icon: 'calendar_month',
    intro: '和 Apple 日历一样美观的日历，农历显示，可作为打卡日历',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@da86b9d54022c215c98ef9db0af2a1c11d294ecd/dist/Calendar.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/calendar.jpeg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@4161187f9f842532d716aeb6958e026a0e6a13a8/docs/assets/calendar_preview_1.jpg',
    ],
    content: '美观的日历组件\n\n- 支持中英双语\n- 可自定义背景和色彩\n- 编辑组件时可输入系统日历名\n\n- 中号组件可显示事件和自定义是否显示提醒事项\n\n'
  },
  {
    name: 'Countdown',
    version: '1.2.0',
    icon: 'restore',
    intro: '倒数日/纪念日',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@738c030b80ca4ada3ed1a835763109031befabbe/dist/Countdown.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/countdown_1.jpg',
    ],
    content: '纪念日/倒数日\n\n- 支持中英双语\n- 可高度自定义\n\n',
  },
  {
    name: 'Douban',
    version: '1.0.1',
    icon: 'movie',
    intro: '豆瓣每日电影',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@f4dfbd5e28cdbbfb4efcf67e392a958ed156507d/dist/Douban.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/Douban_1.png',
    ],
  },
  {
    name: 'App 限免优惠',
    version: '1.1.0',
    icon: 'paid',
    intro: 'iOS 每日限免和优惠应用',
    content: 'iOS 和 MacOS 每日限免和优惠应用\n\n点击直达应用商店应用详情\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e403141f397f42b0304ad5a68cfb3eb5924b4f59/dist/App%20%E9%99%90%E5%85%8D%E4%BC%98%E6%83%A0.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/AppFree_1.png',
    ]
  },
  {
    name: 'Shortcuts',
    version: '1.1.0',
    icon: 'app_shortcut',
    intro: '日历和快捷方式',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Shortcuts.js',
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
    version: '1.3.0',
    icon: 'phone_iphone',
    intro: '湖北联通余额信息',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@c56f59130e33a42d98626bb7a832e81d502a8de5/dist/%E6%B9%96%E5%8C%97%E8%81%94%E9%80%9A.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/10010_small_light.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/10010_small_dark.jpg',
    ],
    content: `之前的 10010 组件只能显示已使用的流量信息，使用湖北联通显示的是剩余的流量\n\n数据来源于公众号【湖北联通】`,
  },
  {
    name: 'Matrix',
    version: '0.1.1',
    intro: '任意网格排列图片或快捷方式',
    content: '配置说明：\n图片和快捷方式配置暂未提供可视化配置，如需修改默认配置可进入代码编辑模式参照注释修改',
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
    intro: 'Wallhaven 壁纸',
    content: 'wallhaven.cc 壁纸。精美高清动漫壁纸，也有其他高质量的图片\n\n- 支持中英双语可视化配置\n- 支持 4 种排列方式\n- 自定义过滤搜索规则\n- 点击可查看和收藏\n\n限制级内容需填写个人账号 API Key\n\n',
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
    ]
  },
  {
    name: '星座屋',
    version: '1.0.0',
    icon: 'hub',
    intro: '星座屋-星座运势',
    content: '此版数据来源于星座屋\n\n由于不清楚有多少种幸运色，此版边框颜色不会使用幸运色\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@master/dist/%E6%98%9F%E5%BA%A7%E5%B1%8B.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@8e5067e45cb10fcf27873769e2572bc79c0998f9/docs/assets/Astrology_1.png'
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
    name: '掘金',
    version: '1.1.0',
    intro: '掘金文章列表',
    content: '\n\n掘金文章订阅' +
      '\n\n支持指定文章分类',
    files: [
      'https://cdn.jsdelivr.net/gh/honye/scriptable-scripts@742ce0b79b26305a28607fe022fa4bb226f93b8d/dist/Juejin.js'
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
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/lunar.module.js',
    ],
  },
  {
    name: 'utils',
    version: '1.0.0',
    icon: 'handyman',
    intro: '工具集',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/utils.module.js',
    ],
  },
  {
    name: 'color',
    version: '1.0.0',
    icon: 'palette',
    intro: '颜色处理工具',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/color.module.js',
    ],
  },
  {
    name: 'Bridge',
    version: '1.0.2',
    icon: 'coronavirus',
    intro: 'Scriptable 与 WebView 的通信桥梁',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/Bridge.module.js'
    ]
  },
  {
    name: 'withSettings',
    version: '1.5.2',
    icon: 'dashboard',
    intro: '轻松实现可视化配置',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@ef8a9792b048d130381ed7555df9f9713f19cb39/src/withSettings.module.js',
    ],
  },
  {
    name: 'widgets',
    version: '1.0.0',
    icon: 'widgets',
    intro: '常用组件工具集',
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
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Installer.js',
    ],
  },
  {
    name: 'Clean Files',
    version: '1.0.1',
    icon: 'folder_open',
    intro: '文件管理，可用于清理缓存文件和脚本文件缓存调试',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Clean%20Files.js',
    ],
  },
  {
    name: 'Clean Files 2',
    version: '2.1.1',
    icon: 'folder_open',
    intro: 'Clean Files 的升级版',
    content: 'Scriptable 专用文件管理\n\n可用于清理长时间使用的缓存文件和开发调试\n\n可分享文件和导入替换文件\n\n',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@2e038bf228a4dd82c6a8fe1eaedaea8b203caed6/dist/Clean%20Files%202.js',
    ],
  },
  {
    name: 'SF Symbols',
    version: '1.0.1',
    icon: 'keyboard_command_key',
    intro: 'SF Symbols 图标浏览查找',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@eb0ffa7c25b2d297e4de7b960fb376d551d959a2/dist/SF%20Symbols.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/SF-Symbols_1.png'
    ]
  },
  {
    name: 'Scriptore',
    version: '1.0.1',
    icon: 'token',
    intro: 'Scriptable 脚本仓库',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@5717d9fd31b1b8adeeaed29bfbea0e8bd1867529/dist/Scriptore.js',
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
 * @property {string} [background] 背景
 */