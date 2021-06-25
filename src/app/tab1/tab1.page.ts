import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  value = '霸道总裁爱上我';
  autoFocus = {
    focusValue: true
  };
  focusObj = {
    focusValue: false,
    date: new Date()
  };
  thumbStyle = {
    width: '50px',
    height: '75px'
  };
  divList =[
    {
      img:
        'http://static.zongheng.com/upload/cover/f8/51/f8518a2f387efe16a32862ec166e564a.jpeg',
      title: '熊出没',
      desc: '两头熊和一个人的故事,的武器哦底物浓度都不哦亲我电脑',
      aaa: 'sagaafsaf',
      type: '古代言情',
      price: '9.2'
    },
    {
      img:
        'http://static.zongheng.com/upload/cover/2017/05/1496234539057.JPG',
      title: '熊出没',
      desc: '带我的的奴i二v男女i哦二次2草算法莓味脑',
      aaa: 'sda',
      type: '现代都市',
      price: '5.7'
    },
    {
      img:
        'https://img2.baidu.com/it/u=929018918,3427263550&fm=26&fmt=auto&gp=0.jpg',
      title: '熊出没',
      desc: '发表v的旅人连我都慢慢考虑吗',
      aaa: '24335',
      type: '人鬼情未了',
      price: '9.9'
    },
  ];
  titleList=[
    '推荐','VIP','畅销','男生','女生','儿童','相声','历史','人文','励志',
  ];
  tabList=[
    '最新','排行榜','活动','免费'
  ];
  goodBookList=[
    {
      img:'https://img0.baidu.com/it/u=1256871257,3654759602&fm=26&fmt=auto&gp=0.jpg',
      name:'熊出没'
    },
    {
      img:'https://img2.baidu.com/it/u=2796905337,1911705489&fm=26&fmt=auto&gp=0.jpg',
      name:'喜羊羊'
    },
    {
      img:'http://static.zongheng.com/upload/cover/10/21/1021d7d499e97340473481dc7a5f6c88.jpeg',
      name:'海绵宝宝'
    }
  ];
  hotBook=[
    [
      {
        img:'http://static.zongheng.com/upload/cover/ad/d7/add75e0c8566ae25729aa9ea41b8a8ef.jpeg',
        name:'熊出没',
        span:'一只人和两片熊的故事'
      },
      {
        img:'http://static.zongheng.com/upload/cover/ed/e0/ede0a0d2b8e50a758af626f5c7cdaf7f.jpeg',
        name:'喜羊羊',
        span:'一群羊和两头狼的故事'
      }
    ],
    [
      {
        img:'http://static.zongheng.com/upload/cover/6f/7e/6f7eb1cbe029c7b040fc93fa5e7a0bc5.jpeg',
        name:'熊出没',
        span:'一只人和两片熊的故事'
      },
      {
        img:'http://static.zongheng.com/upload/cover/97/4b/974b0cac9c670474695cba22fb428944.jpeg',
        name:'喜羊羊',
        span:'一群羊和两头狼的故事'
      },
    ],
    [
      {
        img:'http://static.zongheng.com/upload/cover/0e/3b/0e3bdd8b85b6b769910755c296929c3a1617171102669.jpeg',
        name:'熊出没',
        span:'一只人和两片熊的故事'
      },
      {
        img:'http://static.zongheng.com/upload/cover/a3/cb/a3cbc0d24c75286a57e9910b9fbda0f9.jpeg',
        name:'喜羊羊',
        span:'一群羊和两头狼的故事'
      },
    ],
    [
      {
        img:'https://img0.baidu.com/it/u=1256871257,3654759602&fm=26&fmt=auto&gp=0.jpg',
        name:'熊出没',
        span:'一只人和两片熊的故事'
      },
      {
        img:'https://img2.baidu.com/it/u=2796905337,1911705489&fm=26&fmt=auto&gp=0.jpg',
        name:'喜羊羊',
        span:'一群羊和两头狼的故事'
      },
    ]
  ];
  constructor(private _element: ElementRef, private _renderer: Renderer2) {}

  change($event) {
    console.log($event, 'onChange');
  }

  submit(value) {
    console.log(value, 'onSubmit');
  }

  clear(value) {
    console.log(value, 'onClear');
  }

  focus() {
    console.log('onFocus');
  }

  blur() {
    console.log('onBlur');
  }

  onClick() {
    console.log('click');
  }
  cancel() {
    console.log('onCancel');
  }

  handleClick() {
    this.focusObj = {
      focusValue: true,
      date: new Date()
    };
  }

}
