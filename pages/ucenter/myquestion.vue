<template>
  <article class="col-7 fl">
    <div class="u-r-cont">
      <section>
        <div>
          <span class="fr"><a href="/question/form" title="" class="comm-btn c-btn-6" style="font-size: 16px; height: 22px; line-height: 22px; padding: 0 20px;">去提问</a></span>
          <section class="c-infor-tabTitle c-tab-title cnew-tab-title">
            <!-- <a href="javascript: void(0)" title="Wo的问答" style="cursor: default;">Wo的问答</a> -->
            <a href="javascript: void(0)" title="Wo的提问" class="current">Wo的提问</a>
            <!-- <a href="/ucenter/myanswer" title="Wo的回答">Wo的回答</a> -->
          </section>
        </div>
        <div class="mt40">

          <!-- /无数据提示 开始-->
          <section v-if="!items" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em> <span class="c-666 fsize14 ml10 vam">亲，您还没有提过问题，快去提问吧！</span>
          </section>
          <!-- /无数据提示 结束-->

          <div class="u-question-wrap" >
            <section class="q-all-list">
              <ul>

                <li v-for="item in items.records" :key="item.id" style="background:#fff">
                  <!-- <aside class="q-head-pic">
                    <img src="<%=staticImage %>${question.picImg }" alt="">
                  </aside> -->
                  <section class="q-txt-box" style="margin-left:20px;padding-top:20px">
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
                      <a :href="'/question/'+item.id" title="" class="fsize16 c-333 vam">{{ item.title }}</a>
                    </h3>
                    <!--
                    <h3 class="hLh30 txtOf mt5">
                      <em class="icon16 q-hd">&nbsp;</em>

                      <span v-if="!questionComments" class="fsize12 c-999 vam">哈~~~ 此问题大家还有苦思冥想中...</span>

                      有回答时显示最新一条的回答内容

                      <c:if test="${not empty question.questionsCommentList }">
                        <c:if test="${question.status==0 }">
                          <span class="fsize12 c-999 vam"> <tt class="c-ccc f-fM mr5">[最新回答]</tt>
                            <c:forEach items="${question.questionsCommentList }" var="questionsComment">
                              <c:out value="${questionsComment.content }"/>
                            </c:forEach>
                          </span>

                        </c:if>

                      {{ item.questionCommentVos }}
                      <span v-if="item.status===1" class="fsize12 c-999 vam"> <tt class="c-green f-fM mr5">[最佳回答]</tt>
                        <span v-for="questionComment in item.questionCommentVos" :key="questionComment.id">{{ questionComment.content }}</span>
                      </span>

                    </h3>
                    -->
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
                      <span class="c-ccc fl vam">时间：{{ (item.gmtCreate).replace('T',' ') }}</span>
                      <section class="fl ml20 pt10">
                        <div class="taglist clearfix" style="float:left">

                          <a v-for="tag in item.questionTags" :key="tag.id" :title="tag.questionTagName" class="list-tag" href="${ctx}/questions/list?questions.questionsTagId=${questionsTag.questionsTagId }">{{ tag.questionTagName }}</a>

                        </div>
                      </section>
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
          <!-- <form id="searchForm" action="${ctx}/uc/myquestions/list" method="post">
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
      <!-- /Wo的消息 -->
    </div>
  </article>
</template>

<script>
import questionApi from '~/api/question'

export default {

  data() {
    return {
      page: 1, // 当前页
      items: {}

    }
  },
  created() {
    this.getQuestionByMember()
  },
  methods: {
    getQuestionByMember() {
      questionApi.getQuestionByMember(1, 8).then(response => {
        this.items = response.data.items
      })
    },
    // 3 分页切换的方法
    gotoPage(page) {
      questionApi.getQuestionByMember(page, 8).then(response => {
        this.items = response.data.items
      })
    }
  }
}

</script>

