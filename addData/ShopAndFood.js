const shopDB = require("../schemas/shop")
const foodDB = require('../schemas/food')

// foodDB.create({
//     foodList:[
//         {
//             foodname:'红烧肉',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/0.jpg'
//         },
//         {
//             foodname:'干豆角腊肉',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/1.jpg'
//         },
//         {
//             foodname:'虎皮蛋烧肉楠',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/2.jpg'
//         },
//         {
//             foodname:'长沙小炒肉',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/3.jpg'
//         },
//         {
//             foodname:'鱼香肉丝',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/4.jpg'
//         },
//         {
//             foodname:'葱油贡笋',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/5.jpg'
//         },
//         {
//             foodname:'湘西下饭菜',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/6.jpg'
//         },
//         {
//             foodname:'小黄瓜',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/7.jpg'
//         },
//         {
//             foodname:'藤椒鱼',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/8.jpg'
//         },
//         {
//             foodname:'粉皮焖鸡',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/9.jpg'
//         },
//         {
//             foodname:'酸菜小炒鸡',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/100.jpg'
//         },
//         {
//             foodname:'玉米粒',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/110.jpg'
//         },
//         {
//             foodname:'干锅双菌',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/120.jpg'
//         },
//     ]
// }).then(res=>{
//     let foodID = res._id
//     shopDB.create({
//         name:'老街锅贴-私房菜',
//         score:'4.8分',
//         price:'人均￥20',
//         sales:'月售1000',
//         time:'30分钟',
//         distance:'1.1km',
//         message:'美团专送',
//         pic:'/image/01.png',
//         foodList:foodID,
//         label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
//         list:["老街招牌","老街特色","必点菜","老街主食"]
//     })
// })


// foodDB.create({
//     foodList:[
//         {
//             foodname:'烤羊排',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/20.jpg'
//         },
//         {
//             foodname:'火爆方便面',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/21.jpg'
//         },
//         {
//             foodname:'火鸡面',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/22.jpg'
//         },
//         {
//             foodname:'炒饭',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/23.jpg'
//         },
//         {
//             foodname:'炒面',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/24.jpg'
//         },
//         {
//             foodname:'烤羊腰子',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/25.jpg'
//         },
//         {
//             foodname:'酒鬼花生',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/26.jpg'
//         },
//         {
//             foodname:'烤青虾',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/27.jpg'
//         },
//         {
//             foodname:'烤青椒',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/28.jpg'
//         },
//         {
//             foodname:'烤花菜',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/29.jpg'
//         },
//         {
//             foodname:'杂粮炖排骨',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/30.jpg'
//         },
//         {
//             foodname:'铁板黑椒牛柳',
//             price:'18',
//             sales:'31',
//             comment:'',
//             other:'1人份',
//             foodimg:'/image/31.jpg'
//         },
       
//     ]
// }).then(res=>{
//     let foodID = res._id
//     shopDB.create({
//         name:'野马烧烤（烧烤-龙虾）',
//         score:'4.8分',
//         price:'人均￥20',
//         sales:'月售1000',
//         time:'30分钟',
//         distance:'1.1km',
//         message:'美团专送',
//         pic:'/image/02.png',
//         foodList:foodID,
//         label:["烧烤","龙虾"],
//         list:["推荐","折扣","招牌","烤串"],
        
//     })
// })

// shopDB.create({
//     name:'华莱士全鸡汉堡',
//     score:'4.8分',
//     price:'人均￥20',
//     sales:'月售1000',
//     time:'30分钟',
//     distance:'1.1km',
//     message:'美团专送',
//     pic:'/image/01.png'
// })

foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/01.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/02.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/03.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/04.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/05.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/06.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/07.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/08.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/09.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/10.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/11.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/12.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/13.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
foodDB.create({
    foodList:[
        {
            foodname:'红烧肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/0.jpg'
        },
        {
            foodname:'干豆角腊肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/1.jpg'
        },
        {
            foodname:'虎皮蛋烧肉楠',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/2.jpg'
        },
        {
            foodname:'长沙小炒肉',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/3.jpg'
        },
        {
            foodname:'鱼香肉丝',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/4.jpg'
        },
        {
            foodname:'葱油贡笋',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/5.jpg'
        },
        {
            foodname:'湘西下饭菜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/6.jpg'
        },
        {
            foodname:'小黄瓜',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/7.jpg'
        },
        {
            foodname:'藤椒鱼',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/8.jpg'
        },
        {
            foodname:'粉皮焖鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/9.jpg'
        },
        {
            foodname:'酸菜小炒鸡',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/100.jpg'
        },
        {
            foodname:'玉米粒',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/110.jpg'
        },
        {
            foodname:'干锅双菌',
            price:'18',
            sales:'31',
            comment:'',
            other:'1人份',
            foodimg:'/image/120.jpg'
        },
    ]
}).then(res=>{
    let foodID = res._id
    shopDB.create({
        name:'老街锅贴-私房菜',
        score:'4.8分',
        price:'人均￥20',
        sales:'月售1000',
        time:'30分钟',
        distance:'1.1km',
        message:'美团专送',
        pic:'/image/14.jpg',
        foodList:foodID,
        label:["私房菜","红烧肉","腊肉","牛腩","小炒肉","鱼香肉丝"],
        list:["老街招牌","老街特色","必点菜","老街主食"]
    })
})
