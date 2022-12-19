// @ts-check

/** @type {Script[]} */
export const widgets = [
  {
    name: 'Weibo',
    version: '2.1.4',
    icon: 'whatshot',
    intro: '微博热搜',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Weibo.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/weibo_medium_light.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/weibo_medium_dark.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/weibo_ui.jpeg',
    ],
  },
  {
    name: 'Photos',
    version: '1.0.0',
    icon: 'photo_library',
    intro: '支持多相册的桌面组件',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Photos.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1568.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1569.PNG',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/IMG_1570.PNG',
    ],
  },
  {
    name: 'GitHub Contributions',
    version: '1.3.2',
    intro: 'GitHub 贡献网格图',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/GitHub%20Contributions.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/github_small_light.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/github_medium_dark.jpg',
    ],
  },
  {
    name: 'CoinGecko',
    version: '1.2.2',
    icon: 'attach_money',
    intro: '加密货币实时价格',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/CoinGecko.js'
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/coingecko.JPG'
    ]
  },
  {
    name: 'Calendar',
    version: '1.1.2',
    icon: 'calendar_month',
    intro: '和 Apple 日历一样美观的日历，农历显示，可作为打卡日历',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Calendar.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/calendar.jpeg',
    ],
  },
  {
    name: 'Countdown',
    version: '1.0.1',
    icon: 'restore',
    intro: '倒数日',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Countdown.js',
    ],
  },
  {
    name: 'Douban',
    version: '1.0.0',
    icon: 'movie',
    intro: '豆瓣每日电影',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Douban.js',
    ],
    snapshots: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/douban_small.jpg',
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/docs/assets/douban_medium.jpg',
    ],
  },
  {
    name: 'App 限免优惠',
    version: '1.1.0',
    icon: 'paid',
    intro: 'iOS 每日限免和优惠应用',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@e403141f397f42b0304ad5a68cfb3eb5924b4f59/dist/App%20%E9%99%90%E5%85%8D%E4%BC%98%E6%83%A0.js'
    ],
  },
  {
    name: 'Shortcuts',
    version: '1.1.0',
    icon: 'app_shortcut',
    intro: '日历和快捷方式',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Shortcuts.js',
    ],
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
    name: 'withSettings',
    version: '1.2.0',
    icon: 'dashboard',
    intro: '轻松实现可视化配置',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/src/withSettings.module.js',
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
    version: '2.0.2',
    icon: 'folder_open',
    intro: 'Clean Files 的升级版',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@master/dist/Clean%20Files%202.js',
    ],
  },
  {
    name: 'Scriptore',
    version: '0.1.1',
    icon: 'token',
    intro: 'Scriptable 脚本仓库',
    files: [
      'https://cdn.jsdelivr.net/gh/Honye/scriptable-scripts@b00865325cd9e5abdf005f3d073b2e9662d6b286/dist/Scriptore.js',
    ],
  },
];

/**
 * @typedef {object} Script
 * @property {string} name
 * @property {string} version 版本。如：1.0.0
 * @property {string} intro 简述
 * @property {string[]} files 文件可下载链接。入口文件放在首位
 * @property {string[]} [snapshots] 预览图链接
 * @property {string} [content] 详细说明
 * @property {string} [icon] Material Icon
 * @property {string} [background] 背景
 */