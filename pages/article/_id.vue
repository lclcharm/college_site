<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <section class="path-wrap txtOf hLh30">
              <a href="/" title="首页" class="c-999 fsize14">首页</a>
              \
              <a href="/article" title="" class="c-999 fsize14">文章列表</a>
              \ <span class="c-333 fsize14">{{ item.title }}</span>
            </section>
            <article class="article-infor-box pr20">
              <h3 class="hLh30 txtOf">
                <span class="i-art-title">{{ item.npm }}</span>
              </h3>
              <section class="hLh30 txtOf mt5 pb20 mreadnum">
                <div class="fr">
                  <span>
                    <a class="noter-dy vam" title="评论" href="#i-art-comment">
                      <em class="icon18">&nbsp;</em>(<span class="totalResultComment">{{ item.commentNum }}</span>)
                    </a>
                    <tt v-if="isPhraise" title="赞一下" class="noter-zan vam ml5 f-fM" @click="reducePraise(item)">
                      <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ item.praiseCount }}</span>)
                    </tt>

                    <tt v-else title="赞一下" class="noter-zan vam ml5 f-fM" @click="addPraise(item)">
                      <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ item.praiseCount }}</span>)
                    </tt>
                  </span>
                </div>
                <div class="fl pt3"><tt class="c-999 f-fM">
                  <!-- 1小时前发布 -->
                  {{ (item.gmtCreate).replace('T',' ') }}</tt>
                </div>
              </section>
              <div id="art-infor-body" >
                <span v-html="item.content"/>

                <div>
                  <tt class="c-999 f-fM">
                    评论：<span class="totalResultComment">{{ item.commentNum }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    点赞：<span class="addPraise23_3 praiseCount">{{ item.praiseCount }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    阅读：<span class="clickNum">{{ item.clickNum }}</span>
                  </tt>
                </div>
              </div>
              <section id="sharebutton" class="mt20 tac">
                <div class="bdsharebuttonbox clearfix disIb bdshare-button-style0-32" data-bd-bind="1561104766159">
                  <div class="pr disIb fl of">
                    <a href="javascript:void(0)" onclick="addActiclePraise('23',3)" title="" class="zan-icon dz-btn pr"/>
                    <div class="dz-num">
                      <span class="c-red fsize16">+1</span>
                    </div>
                  </div>
                  <!-- <a title="分享到微信" href="#" class="bds_weixin fl" data-cmd="weixin">
                    <em class="share-fir-icon icon30"/>
                  </a>
                  <a title="分享到新浪微博" href="#" class="bds_tsina fl" data-cmd="tsina"/> -->

                </div>

                <script>
                  window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
                </script>
              </section>
            </article>
            <!-- 文章评论 开始 -->
            <div class="mt30 pr20 mb50 commentHtml">
              <div>
                <h6 id="i-art-comment" class="c-c-content c-infor-title">
                  <span class="commentTitle">文章评论（{{ total }}条）</span>
                </h6>
                <section class="lh-bj-list pr mt20 replyhtml">
                  <ul>
                    <li class="unBr">
                      <aside class="noter-pic">
                        <img width="50" height="50" class="picImg" src="~/assets/photo/customer/avatar-boy.gif">
                      </aside>
                      <div class="of">
                        <section class="n-reply-wrap">
                          <fieldset>
                            <textarea id="commentContent" v-model="comment.content" name="" placeholder="输入您要评论的文字"/>
                          </fieldset>
                          <p class="of mt5 tar pl10 pr10">
                            <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>
                            <a href="#i-art-comment" title="回复" class="lh-reply-btn" @click="addComment()">回复</a>
                          </p>
                        </section>
                      </div>
                    </li>
                  </ul>
                </section>
                <!-- {{ items.items }} -->
                <section class="">
                  <section class="question-list lh-bj-list pr">
                    <ul class="pr10">
                      <li v-for="comment in items.items" :key="comment.id">
                        <aside class="noter-pic">
                          <img :src="comment.avatar" width="50" height="50" class="picImg">
                        </aside>
                        <div class="of">
                          <span class="fl">
                            <font class="fsize12 c-blue">
                              {{ comment.nickname }}</font>
                          <font class="fsize12 c-999 ml5">评论：</font></span>
                        </div>
                        <div class="noter-txt mt5">
                          <p>{{ comment.content }}</p>
                        </div>
                        <div class="of mt5">
                          <span class="fr"><font class="fsize12 c-999 ml5">{{ (comment.gmtCreate).replace('T',' ') }}</font></span> <span class="fl"> <a class="noter-dy vam" title="回复" href="javascript: void(0)" onclick="queryCommentReply('3')">
                            <!-- <em class="icon18">&nbsp;</em>(<span class="replyCount3">{{ comment.replyCount }}</span>) -->
                          </a> <tt title="赞一下" class="noter-zan vam ml10" onclick="addPraise('3',4)">
                            <em class="icon18">&nbsp;</em>(<span class="addPraise3_4 praiseCount">{{ comment.praiseCount }}</span>)
                          </tt>
                          </span>
                        </div>
                        <div class="n-reply">
                          <section class="n-reply-wrap">
                            <fieldset>
                              <textarea name="" class="commentReplyMsgContent3" />
                            </fieldset>
                            <p class="of mt5 tar pl10 pr10">
                              <span class="fl"><tt class="c-red commentReplyMsg3"/></span>
                              <a onclick="#" class="lh-reply-btn" title="回复" href="javascript: void(0)">回复</a>
                            </p>
                          </section>
                          <div class="mt10 pl10 pr10 pb10 commentReply3"/>
                        </div> <!-- /回复盒子 -->
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
                </section>

              </div>
            </div>
          </section>
        </div>
        <aside class="fl col-3 articleRecommend">
          <div>
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章排行榜</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <section class="i-article-list r-art-wrap">
              <ul>
                <li v-for="(rank,id) in ranks" :key="(rank.id,id)" class="lt2" >
                  <aside class="orderNum"><span>{{ id+1 }}</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a :href="'/article/'+rank.id" :title="rank.title" class="i-art-title">{{ rank.title }}</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/23.html">
                        <em class="icon18">&nbsp;</em>({{ rank.commentNum }})
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ rank.praiseCount }}</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">{{ rank.gmtCreate }}</tt></span>
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /文章列表 结束 -->
  </div>
</template>

<script>
import articleApi from '~/api/article'
import commentApi from '~/api/comment'
export default {

// import common from '~/assets/js/common'
  // 在这个方法被调用的时候，第一个参数被设定为当前页面的 上下文对象，
  async asyncData(page) {
    console.log(page.route)
    const searchObj = {}
    searchObj.type = 1
    searchObj.parentId = 0

    const response = await articleApi.getArticleById(page.route.params.id)
    const item = response.data.item

    searchObj.targetId = item.id

    // const commentResponse = await commentApi.getComment(searchObj)
    // const comments = commentResponse.data.comments

    // const commentResponse = await commentApi.getPageList(1, 6, searchObj)
    // const items = commentResponse.data.items
    // const total = commentResponse.data.total
    const rankResponse = await articleApi.getRanklist()

    const ranks = rankResponse.data.ranks
    return {
      item, // 文章实体
      searchObj,
      // comments,
      ranks
      // items,
      // total
    }
  },

  data(page) {
    return {
      ranks: {},
      comment: {
        type: 1,
        parentId: 0
        // targetId: this.item.id
      },
      type: 0,
      items: {},
      total: 0,
      isPhraise: false

    }
  },
  created() {
    // 课程第一次查询
    this.fetchData()
  },
  methods: {
    // 1 查询第一页数据
    fetchData() {
      commentApi.getPageList(1, 6, this.searchObj)
        .then(response => {
          this.items = response.data.items
          this.total = response.data.total
        })
    },
    getArticleInfo() {
      articleApi.getArticleById(this.$route.params.id).then(response => {
        this.item = response.data.item
      })
    },
    addPraise(article) {
      articleApi.addPraise(article).then(response => {
        this.isPhraise = true
        this.getArticleInfo()
      })

      // this.$router.go(0)
      // this.$message.success('nihao' + this.type)
      // if (this.item.clickNum % 2 === 0) {
      // articleApi.addPraise(article)
      // this.$router.go(0)
      // } else {
      //   articleApi.reducePraise(article)
      //   this.$router.go(0)
      // }
    },
    reducePraise(article) {
      articleApi.reducePraise(article).then(response => {
        this.isPhraise = false
        this.getArticleInfo()
      })
    },

    addComment() {
      this.comment.targetId = this.item.id
      commentApi.saveComments(this.comment).then(response => {
        this.comment.content = ''
        this.fetchData()
      })
      // articleApi.addCommentCount(this.item.id)
      // this.$router.go(0)
    },
    gotoPage(page) {
      commentApi.getPageList(page, 6, this.searchObj)
        .then(response => {
          this.items = response.data.items
          this.total = response.data.total
          // this.fetchData()
        })
    }
  }
}
</script>
