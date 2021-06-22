<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-question">
        <div class="fl col-7">
          <section class="mr30 pt10">
            <section class="path-wrap txtOf hLh30">
              <a href="/" title="" class="c-999 fsize14">首页</a>
              \
              <a href="/question/" title="" class="c-999 fsize14">全部问答</a>
              \ <span class="c-333 fsize14">{{ item.title }}</span>
            </section>
            <!-- /问题详情 开始 -->
            <div>
              <section class="q-infor-box">
                <div class="pr">
                  <aside class="q-head-pic">
                    <img :src="item.cusAvatar" alt="">
                    <p class="hLh30 txtOf"/>
                  </aside>
                  <section class="q-txt-box">
                    <aside class="q-share">
                      <span class="fl" title="分享到："><em class="icon14 q-share-icon mt5">&nbsp;</em></span>
                      <div class="fl ml10" style="width: 95px;">
                        <div id="bdshare" class="bdsharebuttonbox bdshare-button-style1-16" data-bd-bind="1561107203843" style="right: -160px;">
                          <a title="分享到新浪微博" href="#" class="bds_tsina" data-cmd="tsina"/>
                          <a title="分享到微信" href="#" class="bds_weixin" data-cmd="weixin"/>
                          <a title="分享到QQ空间" href="#" class="bds_qzone" data-cmd="qzone"/>
                          <a title="分享到腾讯微博" href="#" class="bds_tqq" data-cmd="tqq"/>
                        </div>
                        <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
                      </div>
                      <div class="clear"/>
                    </aside>
                    <h3 class="hLh30 txtOf">
                      <em class="icon16 q-tw">&nbsp;</em> <span class="c-blue fsize14"> {{ item.cusName }}</span>
                      <span v-if="item.type===1" class="c-999 fsize14"> 课程提问</span>
                      <span v-if="item.type===2" class="c-999 fsize14"> 学习分享</span>
                    </h3>
                  </section>
                  <section class="ml50 pl10">
                    <div class="mt20">
                      <h3 class="hLh30 txtOf">
                        <span class="fsize18 c-333 vam">{{ item.title }}</span>
                      </h3>
                    </div>
                    <div class="i-q-txt mt15">

                      <span class="c-999 f-fA">{{ item.content }}</span>

                    </div>
                    <div class="mt20 pr10">
                      <section class="fr">
                        <span> <a href="#i-art-comment" title="评论" class="noter-dy vam">
                          <em class="icon18">&nbsp;</em>(<span id="questionsReplyCount">{{ item.replyCount }}</span>)
                        </a> <tt class="noter-zan vam ml10 f-fM" title="赞一下" onclick="addPraise(9,1,this)">
                          <em class="icon18">&nbsp;</em>(<span>{{ item.praiseCount }}</span>)
                        </tt>
                        </span>
                      </section>
                      <span v-if="item" class="c-ccc fl vam">{{ (item.gmtCreate).replace('T',' ') }}</span>
                      <section class="fl ml20 pt10">
                        <div v-for="tag in item.questionTags" :key="tag.id" class="taglist clearfix" style="float:left">
                          <a :title="tag.questionTagName" data-id="5" onclick="submitForm('5','questionsTagId')" class="list-tag" href="javascript:;">{{ tag.questionTagName }}</a>
                        </div>
                      </section>
                      <div class="clear"/>
                    </div>
                  </section>
                </div>
                <span id="questionsCommentSpan" ><!-- /最佳答案 开始-->
                  <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
                  <div v-for="comment in item.questionCommentVos" v-if="comment.best ===1" :key="comment.id" class="good-anwer-box">
                    <h4 class="g-a-title">
                      <span class="bg-green vam"><em class="icon24 mr5">&nbsp;</em>最佳答案</span>
                    </h4>
                    <section class="good-answer mt10">
                      <section class="question-list lh-bj-list pr">
                        <ul class="pr10">
                          <li>
                            <aside class="noter-pic">
                              <img :src="comment.cusAvatar" alt="" width="50" height="50">
                            </aside>
                            <div class="of hLh20">
                              <span class="fl"> <font class="fsize12 c-blue">{{ comment.cusName }}</font> <font class="fsize12 c-999 ml5">回复：</font></span>
                            </div>
                            <div class="noter-txt mt5">
                              <p>{{ comment.content }}</p>
                            </div>
                            <div class="of mt5">
                              <span class="fr"><font class="fsize12 c-999 ml5">{{ (item.gmtCreate).replace('T',' ') }}</font>
                              </span>
                              <span class="fl">
                                <a href="javascript: void(0)" title="回答" class="noter-dy vam" onclick="getCommentById(this,12)">
                                  <em class="icon18">&nbsp;</em>全部评论(<span>{{ comment.replyCount }}</span>)
                                </a>
                                <tt class="noter-zan vam ml10 f-fM" title="赞一下" onclick="addPraise(12,2,this)">
                                  <em class="icon18">&nbsp;</em>点赞(<span>{{ comment.praiseCount }}</span>)
                                </tt>
                              </span>
                            </div>
                            <div class="n-reply">
                              <section class="n-reply-wrap mt10">
                                <fieldset>
                                  <textarea id="commentContent" name="" placeholder="输入您要评论的文字"/>
                                </fieldset>
                                <p class="of mt5 tar pl10 pr10">
                                  <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>
                                  <a href="javascript:addComment();" title="回复" class="lh-reply-btn">回复</a>
                                </p>
                              </section>
                              <input id="" type="hidden" name="" value="12">
                              <div class="mt10 pl10 pr10">
                                <dl class="n-reply-list">
                                  <!-- 最佳答案的评论在这里 -->
                                </dl>
                              </div>
                            </div> <!-- /回复盒子 -->
                          </li>
                        </ul>
                      </section>
                    </section>
                  </div>
                  <!-- /最佳答案 结束-->
                  <!-- /回答列表 开始 -->
                  <div id="i-art-comment" class="q-i-noter-box">
                    <section class="q-i-reply">
                      <h6 class="c-c-content c-infor-title">
                        <span>问答列表（{{ item.replyCount }}条）</span>
                      </h6>

                      <!-- 输入评论 -->
                      <section class="lh-bj-list pr mt20 replyhtml">
                        <ul>
                          <li class="unBr">
                            <aside class="noter-pic">
                              <img width="50" height="50" class="picImg" src="~/assets/photo/customer/avatar-boy.gif">
                            </aside>
                            <div class="of">
                              <section class="n-reply-wrap">
                                <fieldset>
                                  <textarea id="commentContent" v-model="questionComment.content" name="" placeholder="输入您要评论的文字"/>
                                </fieldset>
                                <p class="of mt5 tar pl10 pr10">
                                  <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>
                                  <a href="javascript: void(0)" title="回复" class="lh-reply-btn" @click="addComment()">回复</a>
                                </p>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <!-- /无数据提示 开始-->
                      <section v-if="(item.status===1&&item.replyCount===0)||item.replyCount===0" class="no-data-wrap">
                        <em class="icon30 no-data-ico">&nbsp;</em> <span class="c-666 fsize14 ml10 vam">还没有人回答，提问者喊你去回答...</span>
                      </section>
                      <!-- /无数据提示 结束-->
                      <section v-if="item.status==0 || item.replyCount>1" class="lh-bj-list pr mt20">
                        <ul>

                          <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
                          <li v-for="comment in item.questionCommentVos" v-if="comment.best !=1" :key="comment.id" class="unBr">
                            <aside class="noter-pic">
                              <img :src="comment.cusAvatar" alt="" width="50" height="50">
                            </aside>
                            <div class="of">
                              <span class="fl">
                                <font class="fsize12 c-blue">
                                  <span>{{ comment.cusName }}</span>

                                </font>
                              <font class="fsize12 c-999 ml5">评论：</font></span>
                            </div>
                            <div class="noter-txt mt5">
                              <p>{{ comment.content }}</p>
                            </div>
                            <div class="of mt5">
                              <span class="fr"><font class="fsize12 c-999 ml5">{{ (comment.gmtCreate).replace('T',' ') }}</font></span>

                              <span class="fl">
                                <a href="javascript: void(0)" title="回答" class="noter-dy vam" onclick="getCommentById(this,12)">
                                  <em class="icon18">&nbsp;</em>评论 (<span>{{ comment.replyCount }}</span>)
                                </a>
                                <tt class="noter-zan vam" title="赞一下" onclick="addPraise(${questionsComment.id },2,this)"><em class="icon18">&nbsp;
                                </em>(<span>{{ comment.praiseCount }}</span>)</tt>
                                <!-- {{ userInfo }}a -->
                                <a v-if="item.cusId==userInfo.id" title="回答" href="javascript: void(0)" class="el-icon-check vam" style="cursor" @click="setBestAnswer(comment)">
                                  <em>&nbsp;</em>采纳回答
                                </a>
                                <!-- {{ comment }} -->
                              </span>
                            </div>
                          </li>

                        </ul>
                      </section>
                    </section>

                    <!--
                       <li v-for="comment in item.questionCommentVos" v-if="comment.best !=1" :key="comment.id" class="unBr">
                            <aside class="noter-pic">
                              <img :src="comment.cusAvatar" alt="" width="50" height="50">
                            </aside>
                      <div class="of">
                      <section class="n-reply-wrap">
                        <fieldset>
                          <textarea placeholder="输入您要回复的文字" name="questionsComment.content" onkeyup="$(this).parent().next().find('tt').html('');"/>
                        </fieldset>
                        <p class="of mt5 tar pl10 pr10">
                          <span class="fl"><tt class="c-red"/></span> <u class="hand mr10 qxBtn c-999" style="display: none;">取消</u>
                          <a class="lh-reply-btn" title="回复" href="javascript: void(0)" onclick="addComment(this)">回复</a>
                        </p>
                      </section>
                    </div>   </li>-->
                  </div>
                </span>
              </section>
            </div>
            <!-- /问题列表 结束 -->
          </section>
        </div>
        <aside class="fl col-3">
          <div class="mt30 pl10">
            <section class="pt10">

              <a href="javascript:void(0)" title="我要提问" class="comm-btn c-btn-5" @click="toAddQuestions()">我要提问</a>
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
                      <a :href="'/question/'+hot.id" title="" class="fsize14 c-333 ml5">{{ hot.title }}</a>
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
import loginApi from '~/api/login'
import cookie from 'js-cookie'
export default {
  async asyncData(page) {
    console.log(page.route)

    const response = await questionApi.getQuestionInfoById(page.route.params.id)
    // const item = response.data.item
    const responseHot = await questionApi.getHotlist()
    return {
      tags: responseHot.data.tags,
      hots: responseHot.data.hotQuestions,
      item: response.data.item
    }
  },
  data() {
    return {
      questionComment: {
        questionId: this.$route.params.id
      },
      // tags: {},
      // hots: {},
      // item: {},
      userInfo: {}
    }
  },
  created() {
    // 课程第一次查询
    // this.fetchData()
    this.getUserInfo()
  },
  methods: {
    // 1 查询第一页数据
    fetchData() {
      // questionApi.getHotlist()
      //   .then(response => {
      //     this.tags = response.data.tags
      //     this.hots = response.data.hotQuestions
      //   })

      questionApi.getQuestionInfoById(this.$route.params.id)
        .then(response => {
          this.item = response.data.item
        })
    },
    setBestAnswer(comment) {
      this.$message.success('進來了')
      questionApi.setBest(comment).then(response => {
        this.$message.success(response.message)
      })
      // location.reload()
      this.fetchData()
    },
    toAddQuestions() {
      this.$router.push({ path: '/question/form' })
    },

    addComment() {
      questionApi.addQuestionComment(this.questionComment)
        .then(response => {
          this.$message.success(response.message)
          this.questionComment.content = ''
          this.fetchData()
        })

      // questionApi.getQuestionInfoById(this.$route.params.id)
      //   .then(response => {
      //     this.item = response.data.item
      //   })
    },
    getUserInfo() {
      // 如果cookie中token不存在，则不显示用户信息

      if (!cookie.get('jwt_token')) {
        return
      }

      // 如果token存在，则根据token解析用户登录信息
      loginApi.getLoginInfo().then(response => {
        // 渲染页面
        this.userInfo = response.data.userInfo
      })
    }

  }
}
</script>
