export const categories=['教材教辅','数码电子','生活用品','美妆个护','运动装备','更多'] as const
export type Category=typeof categories[number]
export type Status='在售'|'已交换'|'草稿'|'已下架'
export type Product={id:string;title:string;category:Category;price:number;originalPrice:number;condition:string;campus:string;description:string;image:string;seller:string;avatar:string;likes:number;status:Status;mine:boolean;createdAt:string;exchange?:string}
export const seed:Product[]=[
 {id:'math',title:'高等数学 同济第七版',category:'教材教辅',price:25,originalPrice:78,condition:'9成新',campus:'大学城',description:'少量铅笔笔记，无缺页，可图书馆面交。上下册配套，适合大一新生。',image:'/images/math-book.jpg',seller:'xx',avatar:'/images/avatar-b.jpg',likes:12,status:'在售',mine:true,createdAt:'2026-10-10T09:00:00.000Z',exchange:'英语四级词汇书'},
 {id:'headphones',title:'Sony WH-CH520',category:'数码电子',price:120,originalPrice:299,condition:'9成新',campus:'大学城',description:'耳机功能正常，续航良好，外观有轻微使用痕迹。附充电线，可当面试用。',image:'/images/headphones.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:28,status:'在售',mine:false,createdAt:'2026-10-09T09:00:00.000Z'},
 {id:'band',title:'小米手环8',category:'数码电子',price:90,originalPrice:199,condition:'9成新',campus:'大学城',description:'屏幕与表带状态良好，所有功能正常，附原装充电线。',image:'/images/smart-band.jpg',seller:'xx',avatar:'/images/avatar-b.jpg',likes:16,status:'在售',mine:true,createdAt:'2026-10-08T09:00:00.000Z'},
 {id:'bike',title:'折叠自行车',category:'运动装备',price:260,originalPrice:599,condition:'8成新',campus:'大学城',description:'可折叠，骑行和刹车正常。适合校园代步，建议现场试骑。',image:'/images/bicycle.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:21,status:'在售',mine:false,createdAt:'2026-10-07T09:00:00.000Z'},
 {id:'vocab',title:'英语四级词汇书',category:'教材教辅',price:15,originalPrice:39,condition:'8成新',campus:'大学城',description:'适合四级备考，已交换，保留展示记录。',image:'/images/vocab-book.jpg',seller:'xx',avatar:'/images/avatar-b.jpg',likes:8,status:'已交换',mine:true,createdAt:'2026-10-06T09:00:00.000Z'},
 {id:'lamp',title:'折叠台灯',category:'生活用品',price:60,originalPrice:129,condition:'9成新',campus:'大学城',description:'桌面折叠台灯，亮度可调，正在编辑草稿。',image:'/images/desk-lamp.jpg',seller:'xx',avatar:'/images/avatar-b.jpg',likes:3,status:'草稿',mine:true,createdAt:'2026-10-05T09:00:00.000Z'},
 {id:'backpack',title:'黑色双肩书包',category:'生活用品',price:38,originalPrice:119,condition:'8成新',campus:'大学城',description:'容量充足，拉链和肩带完好，适合日常上课背书。可在教学楼附近面交。',image:'/images/backpack.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:14,status:'在售',mine:false,createdAt:'2026-10-11T09:00:00.000Z'},
 {id:'laptop',title:'银色轻薄笔记本电脑',category:'数码电子',price:1680,originalPrice:3999,condition:'8成新',campus:'大学城',description:'日常学习办公使用，键盘和屏幕正常，可当面开机检查。',image:'/images/laptop.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:25,status:'在售',mine:false,createdAt:'2026-10-12T09:00:00.000Z'},
 {id:'keyboard',title:'白色机械键盘',category:'数码电子',price:85,originalPrice:229,condition:'9成新',campus:'大学城',description:'按键功能正常，外观整洁，附连接线，适合宿舍电脑使用。',image:'/images/keyboard.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:11,status:'在售',mine:false,createdAt:'2026-10-13T09:00:00.000Z'},
 {id:'calculator',title:'科学计算器',category:'教材教辅',price:28,originalPrice:79,condition:'8成新',campus:'大学城',description:'常用计算功能正常，适合理工科课程练习，已更换电池。',image:'/images/calculator.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:9,status:'在售',mine:false,createdAt:'2026-10-14T09:00:00.000Z'},
 {id:'tote',title:'米白色帆布包',category:'生活用品',price:18,originalPrice:49,condition:'9成新',campus:'大学城',description:'轻便帆布包，可装课本和日常用品，已清洗干净。',image:'/images/tote.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:17,status:'在售',mine:false,createdAt:'2026-10-15T09:00:00.000Z'},
 {id:'thermos',title:'不锈钢保温水杯',category:'生活用品',price:22,originalPrice:89,condition:'8成新',campus:'大学城',description:'保温功能正常，杯盖密封良好，已清洁消毒。',image:'/images/thermos.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:8,status:'在售',mine:false,createdAt:'2026-10-16T09:00:00.000Z'},
 {id:'ukulele',title:'木色尤克里里',category:'生活用品',price:75,originalPrice:199,condition:'9成新',campus:'大学城',description:'琴弦和琴身状态良好，适合初学者，可当面试弹。',image:'/images/ukulele.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:19,status:'在售',mine:false,createdAt:'2026-10-17T09:00:00.000Z'},
 {id:'badminton',title:'双人羽毛球拍',category:'运动装备',price:46,originalPrice:138,condition:'8成新',campus:'大学城',description:'两支球拍加一个羽毛球，拍线完好，适合校园休闲运动。',image:'/images/badminton.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:16,status:'在售',mine:false,createdAt:'2026-10-18T09:00:00.000Z'},
 {id:'yoga',title:'蓝色瑜伽垫',category:'运动装备',price:30,originalPrice:99,condition:'9成新',campus:'大学城',description:'附收纳绑带，表面平整，已清洁，适合宿舍拉伸和训练。',image:'/images/yoga.jpg',seller:'林同学',avatar:'/images/seller-lin.jpg',likes:12,status:'在售',mine:false,createdAt:'2026-10-19T09:00:00.000Z'},
 {id:'fan',title:'桌面小风扇',category:'生活用品',price:35,originalPrice:109,condition:'9成新',campus:'大学城',description:'桌面小风扇，风速可调，运行正常，适合宿舍书桌。',image:'/images/fan.jpg',seller:'赵同学',avatar:'/images/seller-zhao.jpg',likes:10,status:'在售',mine:false,createdAt:'2026-10-20T09:00:00.000Z'}
]
export type ChatMessage={id:string;threadId:string;from:'me'|'other';text:string;time:string}
export const initialMessages:ChatMessage[]=[
 {id:'m1',threadId:'lin',from:'me',text:'你好，请问这套教材还在吗？',time:'14:10'},
 {id:'m2',threadId:'lin',from:'other',text:'还在的，只有少量铅笔笔记。',time:'14:12'},
 {id:'m3',threadId:'lin',from:'me',text:'可以25元吗？今天可以面交。',time:'14:15'},
 {id:'m4',threadId:'lin',from:'other',text:'可以，今天18:00图书馆见。',time:'14:20'},
 {id:'m5',threadId:'lin',from:'me',text:'好的，地点：图书馆门口，我会提前10分钟到~',time:'14:22'},
 {id:'m6',threadId:'zhao',from:'other',text:'我想换这本英语四级词汇书~',time:'昨天 20:18'}
]
export const contacts={lin:{name:'林同学',sub:'软件学院 · 大三',avatar:'/images/seller-lin.jpg',productId:'math'},zhao:{name:'赵同学',sub:'经济学院 · 大二',avatar:'/images/seller-zhao.jpg',productId:'vocab'}} as const
export const yuan=(n:number)=>`¥${Number(n).toFixed(0)}`

