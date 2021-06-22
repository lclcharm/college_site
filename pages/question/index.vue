<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-question">
        <div class="fl col-7">
          <section class="mr30 pt10">
            <section class="c-infor-tabTitle c-tab-title">

              <a :class="isAll===0?'current':''" href="#" title="全部问答" @click="allquestion()">全部问答</a>
              <a :class="isAll===1?'current':''" href="#" title="全部问答" @click="courseQuestion()">课程问答</a>
              <a :class="isAll===2?'current':''" href="#" title="全部问答" @click="studyShare()">学习分享</a>
              <!-- <span v-if="isAll===0">
                <a class="current" href="#" title="全部问答" @click="allquestion()">全部问答</a>
              </span>
              <span v-else>
                <a href="#" title="全部问答" @click="allquestion()">全部问答</a>
              </span>
              <span v-if="isAll===1">
                <a class="current" href="#" title="课程问答" @click="courseQuestion()">课程问答</a>
              </span>
              <span v-else>
                <a href="#" title="课程问答" @click="courseQuestion()">课程问答</a>
              </span>
              <span v-if="isAll===2">
                <a class="current" href="#" title="学习分享" @click="studyShare()">学习分享</a>
              </span>
              <span v-else>
                <a href="#" title="学习分享" @click="studyShare()">学习分享</a>
              </span>-->
            </section>
            <div class="js-wrap">
              <section class="fr">
                <span class="c-ccc"> <tt class="c-master f-fM">{{ items.current }}</tt>/<tt class="c-666 f-fM">{{ items.pages }}</tt>
                </span>
              </section>
              <section class="fl">
                <ol class="js-tap clearfix">
                  <li :class="isHot===0?'current bg-orange':''"><a href="javascript:void(0)" title="最新" @click="orderbyGmtCreate()">最新</a></li>
                  <li :class="isHot===1?'current bg-orange':''"><a href="javascript:void(0)" title="热门" @click="orderByClick()">热门</a></li>
                  <li :class="isHot===2?'current bg-orange':''"><a href="javascript:void(0)" title="等待回答" @click="waitAnswer()">等待回答</a></li>

                  <!-- <span v-if="isHot===0">
                    <li class="current bg-orange"><a href="javascript:void(0)" title="最新" @click="orderbyGmtCreate()">最新</a></li>
                  </span>
                  <span v-else>
                    <li><a href="javascript:void(0)" title="最新" @click="orderbyGmtCreate()">最新</a></li>
                  </span>

                  <span v-if="isHot===1">
                    <li class="current bg-orange"><a href="javascript:void(0)" title="热门" @click="orderByClick()">热门</a></li>
                  </span>
                  <span v-else>
                    <li><a href="javascript:void(0)" title="热门" @click="orderByClick()">热门</a></li>
                  </span>
                  <span v-if="isHot===2">
                    <li class="current bg-orange"><a href="javascript:void(0)" title="等待回答" @click="waitAnswer()">等待回答</a></li>
                  </span >
                  <span v-else>
                    <li ><a href="javascript:void(0)" title="等待回答" @click="waitAnswer()">等待回答</a></li>
                  </span> -->

                </ol>
              </section>
            </div>
            <!-- /问题列表 开始 -->
            <div class="q-list">
              <section class="q-all-list">
                <ul>
                  <li v-for="item in items.records" :key="item.id">

                    <aside class="q-head-pic">
                      <img :src="item.cusAvatar" :alt="item.cusName">
                      <p class="hLh30 txtOf">
                        <span class="c-999"> {{ item.cusName }}</span>
                      </p>
                    </aside>

                    <section class="q-txt-box">
                      <a :href="'/question/'+item.id" class="replyBrowseNum" title="">
                        <div class="replyNum">
                          <span class="r-b-num">{{ item.replyCount }}</span>
                          <p class="hLh30">
                            <span class="c-999 f-fA">回答数</span>
                          </p>
                        </div>
                        <div class="browseNum">
                          <span class="r-b-num">{{ item.browseCount }}</span>
                          <p class="hLh30">
                            <span class="c-999 f-fA">浏览数</span>
                          </p>
                        </div>
                      </a>
                      <h3 class="hLh30 txtOf">
                        <em class="icon16 q-tw">&nbsp;</em>
                        <a :href="'/question/'+item.id" :title="item.title" class="fsize16 c-333 vam">{{ item.title }}</a>
                      </h3>
                      <h3 class="hLh30 txtOf mt5">
                        <em class="icon16 q-hd">&nbsp;</em>

                        <!-- 采纳最佳显示最佳答案内容 -->
                        <span v-if="item.questionComment" class="fsize12 c-999 vam">
                          <tt v-if="item.questionComment.best===1" class="c-gray f-fM mr5">[最佳回答]</tt>
                          <tt class="c-gray f-fM mr5">{{ item.questionComment.content }}</tt>
                        </span>
                        <span v-else class="fsize12 c-999 vam">
                          <tt v-if="item.questionComments==null" class="fsize12 c-999 vam">哈~~~ 此问题大家还有苦思冥想中...</tt>
                        </span>
                      </h3>
                      <div class="mt15">
                        <span class="c-ccc fl vam">{{ (item.gmtCreate).replace('T',' ') }}</span>
                        <section class="fl ml20 pt10">

                          <div v-for="tag in item.questionTags" :key="tag.id" class="taglist clearfix" style="float:left">
                            <a title="Premiere" data-id="5" onclick="submitForm('5','questionsTagId')" class="list-tag" href="javascript:;">{{ tag.questionTagName }}</a>
                          </div>
                        </section>
                        <div class="clear"/>
                      </div>
                    </section>
                  </li>

                </ul>
              </section>

              <!-- 公共分页 开始 -->
              <div>
                <div class="paging">

                  <a :class="{undisable: !items.hasPrevious}" href="#" title="首页" @click.prevent="gotoPage(1)">首</a>
                  <a :class="{undisable: !items.hasPrevious}" href="#" title="前一页" @click.prevent="gotoPage(items.current-1)">&lt;</a>
                  <a
                    v-for="page in items.pages"
                    :key="page"
                    :class="{current: items.current == page, undisable: items.current == page}"
                    :title="'第'+page+'页'"
                    href="#"
                    @click.prevent="gotoPage(page)">{{ page }}</a>
                  <a :class="{undisable: !items.hasNext}" href="#" title="后一页" @click.prevent="gotoPage(items.current+1)">&gt;</a>
                  <a :class="{undisable: !items.hasNext}" href="#" title="末页" @click.prevent="gotoPage(items.pages)">末</a>
                  <div class="clear" />
                </div>
              </div>
              <!-- 公共分页 结束 -->
            </div>
            <!-- /问题列表 结束 -->
          </section>
        </div>
        <aside class="fl col-3">
          <div class="mt30 pl10">
            <section class="pt10">
              <a href="javascript:void(0)" title="我要提问" class="comm-btn c-btn-5" @click="toAddQuestions()">我要提问</a>
              <!-- <a href="javascript:void(0)" onclick="toAddQuestions()" title="我要提问" class="comm-btn c-btn-5">我要提问</a> -->
            </section>
            <section class="pt20">
              <div class="taglist clearfix">
                <a onclick="submitForm('0','questionsTagId')" href="javascript:;" class="list-tag " data-id="0" title="JAVA">全部</a>
                <span v-for="tag in tags" :key="tag.id">
                  <a :title="tag.questionTagName" :data-id="tag.id" class="list-tag " href="javascript:;" onclick="submitForm('1','questionsTagId')">{{ tag.questionTagName }}</a>
                </span>
              </div>
            </section>
            <!-- /标签云 -->
            <section class="mt30">
              <section class="c-infor-tabTitle c-tab-title">
                <a href="javascript: void(0)" title="热门问答推荐">热门问答推荐</a>
              </section>
              <div class="q-r-rank-list">
                <ul id="hotQuestions">
                  <li v-for="hot in hots" :key="hot.id">
                    <aside class="q-r-r-num">
                      <div class="replyNum">
                        <span class="r-b-num">{{ hot.replyCount }}</span>
                        <p class="hLh20">
                          <span class="c-999 f-fA">回答数</span>
                        </p>
                      </div>
                    </aside>
                    <h4 class="hLh30 txtOf">
                      <em class="icon16 q-tw">&nbsp;</em>
                      <a :href="'question/'+hot.id" title="" class="fsize14 c-333 ml5">{{ hot.title }}</a>
                    </h4>
                  </li>
                </ul>
              </div>
            </section>
            <!-- /热门问答排行 -->
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /提问题 结束 -->
  </div>
</template>

<script>

import questionApi from '~/api/question'
export default {

  async asyncData(page) {
    console.log(page.route)

    const response = await questionApi.getPageList(1, 8)
    const items = response.data.items

    const questionResponse = await questionApi.getHotlist()

    const tags = questionResponse.data.tags
    const hots = questionResponse.data.hotQuestions

    return {
      items,
      tags,
      hots
    }
  },

  data() {
    return {
      isAll: 0, // 当前
      isHot: 0,
      page: 1, // 当前页
      items: {}, // 课程列表
      searchObj: {
        type: 1
      },

      tags: {},
      hots: {}

    }
  },
  created() {
    // 课程第一次查询
    // this.fetchData()
  },
  methods: {
    // 1 查询第一页数据
    // fetchData() {
    //   questionApi.getPageList(1, 8)
    //     .then(response => {
    //       this.items = response.data.items
    //     })

    //   questionApi.getHotlist()
    //     .then(response => {
    //       this.tags = response.data.tags
    //       this.hots = response.data.hotQuestions
    //     })
    // },

    // 3 分页切换的方法
    gotoPage(page) {
      questionApi.getPageList(page, 8).then(response => {
        this.items = response.data.items
      })
    },

    allquestion() {
      this.isAll = 0

      this.searchObj.type = 0
      questionApi.getPageList(1, 8).then(response => {
        this.items = response.data.items
      })
    },
    courseQuestion() {
      this.isAll = 1

      this.searchObj.type = 1
      questionApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },

    studyShare() {
      this.isAll = 2

      this.searchObj.type = 2
      questionApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },
    orderbyGmtCreate() {
      this.isHot = 0
      this.searchObj.status = ''
      this.searchObj.orderby = 0
      questionApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },
    orderByClick() {
      this.isHot = 1
      this.searchObj.status = ''
      this.searchObj.orderby = 1
      questionApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },

    waitAnswer() {
      this.isHot = 2

      this.searchObj.status = 0
      questionApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },
    toAddQuestions() {
      this.$router.push({ path: '/question/form' })
    }
  }
}
</script>
