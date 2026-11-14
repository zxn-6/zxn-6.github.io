# 校园好物 App

《移动产品开发》作业三的移动 Web App，延续作业二“校园二手”Figma 原型。项目使用 React、TypeScript、Vite 和本地浏览器存储，可在电脑浏览器或手机浏览器打开。

## 运行

需要 Node.js 20 或更新版本、pnpm。打开终端进入本目录后执行：

```powershell
pnpm install
pnpm dev
```

终端会显示本机访问地址，通常为 `http://localhost:5173/`。在同一 Wi-Fi 下，也可用手机访问终端显示的局域网地址。建议把电脑浏览器开发者工具切换为 390×890 的手机视口查看原型比例。

生产构建：

```powershell
pnpm build
pnpm preview
```

## 功能

- 首页展示 14 件在售商品，支持分类、校区、搜索、热榜和最新发布排序。
- 商品详情、收藏、联系卖家。
- 发布物品、图片上传、表单校验、草稿自动保存、编辑、下架、重新上架、标记已交换。
- 私聊与通知、商品对应会话、消息发送与本地保存。
- 个人中心的发布清单、状态筛选与收藏清单。

新增十件商品配有独立的本地商品照片；这些照片由 AI 生成，仅用于课程演示。顶部不再显示模拟手机时间和信号栏。主要数据存于当前浏览器的 `localStorage`。这是课程演示版：没有服务器账户、真实身份认证、支付或跨设备消息同步；清除浏览器站点数据会删除本机操作记录。

Figma 原型：[校园二手交互原型](https://www.figma.com/proto/iCDl6t36mKPTBWRxVIXHnY/%E6%A0%A1%E5%9B%AD%E4%BA%8C%E6%89%8B?node-id=7-258&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A258)。

