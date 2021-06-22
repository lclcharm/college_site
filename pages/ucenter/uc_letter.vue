<template>
  <article class="col-7 fl">
    <div class="u-r-cont">
      <section>
        <div>
          <!-- {{ items }} -->
          <section class="c-infor-tabTitle c-tab-title">

            <a href="javascript: void(0)" title="我的订单" class="current">
              系统消息
            </a>
          </section>
        </div>
        <div class="mt40">
          <section v-if="items.total===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam" >暂时还没有消息可以展示呢！</span>
          </section>
          <div class="u-message-wrap" >
            <section class="q-all-list">
              <ul>

                <li v-for="item in items.items" :key="item.id" style="background:#fff">
                  <!-- <aside class="q-head-pic">
                    <img src="<%=staticImage %>${message.picImg }" alt="">
                  </aside> -->
                  <section class="q-txt-box" style="margin-left:20px;padding-top:20px">

                    <h3 class="hLh30 txtOf">
                      <em class="icon16 q-tw">&nbsp;</em>
                      <a :href="'/message/'+item.id" title="" class="fsize16 c-333 vam">{{ item.title }}</a>
                    </h3>

                    <h3 class="hLh30 txtOf mt5">
                      <em class="icon16 q-hd">&nbsp;</em>

                      <!-- 采纳最佳显示最佳答案内容 -->
                      <span class="fsize12 c-999 vam">
                        <!-- <span v-html="item.content"/> -->
                        <tt class="c-gray f-fM mr5" >{{ item.content }}</tt>

                        <!-- {{ item.content }} -->
                      </span>
                    </h3>
                    <div class="mt15" style="float:right;margin:0">
                      <span class="c-ccc fl vam">时间：{{ (item.gmtCreate).replace('T',' ') }}</span>

                      <div class="clear"/>
                    </div>
                  </section>
                </li>

              </ul>
            </section>
          </div>

          <!-- 公共分页 开始 -->
          <!-- <jsp:include page="/WEB-INF/view/common/front_page.jsp" /> -->
          <!-- 公共分页 结束 -->
          <!-- <form id="searchForm" action="${ctx}/uc/mymessages/list" method="post">
            <input id="pageCurrentPage" type="hidden" name="page.currentPage" value="1" >
          </form> -->
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
      </section>
    </div>
  </article>
</template>
<script>

import messageApi from '~/api/message'
export default {

  async asyncData(page) {
    console.log(page.route)

    const response = await messageApi.getPageList(1, 5)
    const items = response.data.items

    return {
      items

    }
  },

  data() {
    return {
      page: 1, // 当前页
      items: {} // 课程列表
    }
  },
  created() {
    // 课程第一次查询
    // this.fetchData()
  },
  methods: {

    gotoPage(page) {
      messageApi.getPageList(page, 5).then(response => {
        this.items = response.data.items
      })
    },

    allmessage() {
      this.isAll = 0

      this.searchObj.type = 0
      messageApi.getPageList(1, 5).then(response => {
        this.items = response.data.items
      })
    },
    courseMessage() {
      this.isAll = 1

      this.searchObj.type = 1
      messageApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    },

    studyShare() {
      this.isAll = 2

      this.searchObj.type = 2
      messageApi.getPageList(1, 8, this.searchObj).then(response => {
        this.items = response.data.items
      })
    }
  }
}
</script>
