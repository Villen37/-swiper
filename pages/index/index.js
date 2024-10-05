// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    stageIndex:0,
    stageTabs: ['爱情','事业','财富','健康'],
    stagData:[
      '单身的你，会思考自己真正想要的是什么样的伴侣，以及如何才能找到那个合适的人。不妨多参加一些社交活动，扩大自己的交际圈。已有伴者的你，可以和伴侣一起讨论两人的未来计划。这是一个很好的时机，让你们更加了解彼此的想法和期望，共同规划未来的生活。',
      '充满活力和热情，能够积极应对工作和学习中的各种挑战。这是一个积累知识和提升能力的好时机，你可以主动学习新的技能或深入研究某个领域，为未来的发展打下坚实的基础。',
      '在花钱之前要三思，避免冲动消费。你可能会遇到一些让你心动的商品或投资机会，但要仔细考虑是否真的需要，以及是否值得花费这么多钱。',
      '注意不要熬夜或晚睡。保持充足的睡眠对于你的身体和精神健康都非常重要。你可能会因为工作或其他原因而感到压力较大，但要尽量避免通过熬夜来缓解压力。你可以尝试一些放松的活动，比如冥想、瑜伽或阅读，来帮助你放松身心，提高睡眠质量。'
    ]
    
  },
  clickStage({detail}){
    console.log('swiper发生了变化：',detail)
  },
})
