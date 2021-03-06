/**
 * xzqiang
 * Created by admin on 2017/5/10.
 */
const express = require('express');
const router = express.Router();

//customer visit list
router.get('/customerVisit/list',function (req, res) {
  res.json({
    success: true,
    customerList:[
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      },
      {
        year:"06",
        month:'30',
        detailTime:'12:30',
        'visit_type':'日常拜访',
        company:'阿拉伯石油有限公司'
      }
    ]
  });
});

//潜在业务机会列表
router.get('/business/list',function (req, res) {
  res.json({ success: true,
    businessOppoList:[
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      },
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      },
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      },
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      },
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      },
      {
        year:"2014年",
        month:'6月1日',
        company:'金陵饭店',
        description:'金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。金陵饭店因业务规模扩大，资金短缺，希望通过股权融资的方式获取资金。',
        opportunity:'IPO',
        people:'张三',
        phone:'17625980901',
        comment:'马上给钱，争取拿下'
      }
    ]
  });
});

router.post('/customer/test',function (req, res) {
  console.log(req.body);
  res.json({a:1})
});

router.get('/customer/list',function (req, res) {
  res.json({
    success: true,
    businessCustomerList:[
      {
        company:"三一重工a",
        type:"上市公司a",
        name:"张三a",
        province:"湖南省a",
        city:"长沙市a",
        level1:"机械行业a",
        level2:"机械制造a"

      },
      {
        company:"三一重工b",
        type:"上市公司b",
        name:"张三b",
        province:"湖南省b",
        city:"长沙市b",
        level1:"机械行业b",
        level2:"机械制造b"

      },
      {
        company:"三一重工c",
        type:"上市公司c",
        name:"张三c",
        province:"湖南省c",
        city:"长沙市c",
        level1:"机械行业c",
        level2:"机械制造c"

      },
      {
        company:"三一重工d",
        type:"上市公司d",
        name:"张三d",
        province:"湖南省d",
        city:"长沙市d",
        level1:"机械行业d",
        level2:"机械制造d",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
      {
        company:"三一重工e",
        type:"上市公司e",
        name:"张三e",
        province:"湖南省e",
        city:"长沙市e",
        level1:"机械行业e",
        level2:"机械制造e",
      },
    ]
  })
});

module.exports = router;