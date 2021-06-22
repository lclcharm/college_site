<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-question">
        <div class="fl col-7">
          <section class="mr30">
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">提问题</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <!-- /提问题 开始 -->
            <div class="q-c-list">
              <dl>
                <dt>
                  <span class="c-999 fsize14">分类：</span>
                </dt>
                <dd class="of">
                  <section class="q-sort-wrap">

                    <span :class="type==1?'current':''" @click="changeType(1)">
                      课程问答
                    </span>
                    <span :class="type==2?'current':''" @click="changeType(2)">
                      学习分享
                    </span>

                  </section>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="c-999 fsize14">标题：</span>
                </dt>
                <dd class="pr">
                  <label class=""><input v-model="questionVo.title" type="text" name="questions.title" placeholder="问题标题不少于16个字" onkeyup="checkTitleLength(this)" value=""></label>
                  <aside class="q-c-jy"/>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="c-999 fsize14">内容：</span>
                </dt>
                <dd class="pr">
                  <textarea v-model="questionVo.content" name="questions.content" placeholder="简洁，明了，能引起思考和讨论的知识性的内容。" onkeyup="checkQuestionContent(this)"/>
                  <aside class="q-c-jy"/>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="c-999 fsize14">标签：</span>
                </dt>
                <dd class="pr" >
                  <div id="tags-content" class="tags-content">
                    <span v-if="i==0" id="label-default" class="f-fA">请选择标签，最多选3个标签哦</span>

                    <span v-for="questionTag in questionVo.questionTags" v-else id="label-default" :key="questionTag.id" class="f-fA">
                      <span :value="questionTag.questionTagName" @onclick="removeMytags(questionTag)">
                      <a href="#" class="list-tag" @click="removeMytags()">{{ questionTag.questionTagName }}</a></span>
                    </span>
                  </div>
                  <aside class="q-c-jy"/>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="c-999 fsize14">&nbsp;</span>
                </dt>
                <dd>
                  <div id="js-tags" class="taglist clearfix">
                    <span>
                      <input id="questionsTag" v-model="questionVo.questionTags" type="hidden" name="questionsTag" value="">
                    </span>
                    <span v-for="tag in tags" :key="tag.id">
                      <a :title="tag.questionTagName" :data-id="tag.id" class="list-tag" href="javascript:;" @click="chooseTags(tag)">{{ tag.questionTagName }}</a>

                    </span>

                  </div>
                  <!-- /标签集 -->
                </dd>
              </dl>
              <!-- <dl>
                <dt>
                  <span class="c-999 fsize14">&nbsp;</span>
                </dt>
                <dd class="pr">
                  <label class=""><input type="text" style="width: 80px;" name="randomCode" placeholder="输入验证码" value="" onkeyup="$(this).parent().next().next().html(&quot;<img width=\&quot;16\&quot; height=\&quot;16\&quot; alt=\&quot;正确\&quot; src=\&quot;${ctx }/static/inxweb/img/d-icon.png\&quot;>&quot;)"></label>
                  <div class="v-code-pic">
                    <img src="${ctx}/ran/random" alt="验证码，点击图片更换" onclick="this.src='${ctx}/ran/random?random='+Math.random();" width="80" height="34" class="vam">
                    <span class="c-999">看不清</span>
                    <a href="javascript:void(0)" onclick="$(this).prev().prev().click();" title="" class="c-green"> 换一换 </a>
                  </div>
                  <aside class="q-c-jy"/>
                </dd>
              </dl> -->
              <dl>
                <dt>
                  <span class="c-999 fsize14">&nbsp;</span>
                </dt>
                <dd>
                  <section class="pt10">
                    <a href="javascript:void(0)" title="" class="comm-btn c-btn-4 bg-orange" @click="addQuestions()">提 问</a>
                  </section>
                </dd>
              </dl>
            </div>
            <!-- /提问题 结束 -->
          </section>
        </div>
        <aside class="fl col-3">
          <div class="mt30 pl10">
            <section class="q-tip-pic col-3">
              <img src="~/assets/photo/question/tipQe.png" width="100%" alt="亲，您要提问吧？">
            </section>
            <h5 class="pt10">
              <span class="fsize18 c-333 vam">亲，您要提问吧？<br>
                <br>要知道这些哦！
              </span>
            </h5>
            <div class="clear"/>
            <dl class="mt20">
              <dt>
                <h6>
                  <strong class="fsize14 c-666">一、需要了解的事情：</strong>
                </h6>
              </dt>
              <dd class="pl10">
                <p class="c-999 mt10">1、您是想来吐槽的吧，没事，随便发吧。有人会跟你一起吐槽的。</p>
                <p class="c-999 mt10">2、您是来解决问题？请先搜索是否已经有同类问题吧。这样您就省心少打字。</p>
                <p class="c-999 mt10">3、没找到是么？就在发问题时精确描述你的问题，不要写与问题无关的内容哟。</p>
                <p class="c-999 mt10">4、因酷问答更热衷于解达您想要的答案。能引起思考和讨论的知识性问题；</p>
              </dd>
            </dl>
            <dl class="mt20">
              <dt>
                <h6>
                  <strong class="fsize14 c-666">二、要注意的事情：</strong>
                </h6>
              </dt>
              <dd class="pl10">
                <p class="c-999 mt10">1、禁止发布求职、交易、推广、广告类与问答无关信息将一律清理。</p>
                <p class="c-999 mt10">2、尽可能详细描述您的问题，如标题与内容不符，或与问答无关的信息将被关闭。</p>
                <p class="c-999 mt10">3、问答刷屏用户一律冻结帐号。</p>
              </dd>
            </dl>
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

  data() {
    return {
      type: 1,
      i: 0,
      questiontag: {},
      questionVo: {
        type: this.type,
        questionTags: []
      },
      tags: {}

    }
  },
  created() {
    // 课程第一次查询
    this.fetchData()
  },
  methods: {
    // 1 查询第一页数据
    fetchData() {
      questionApi.getAllTags()
        .then(response => {
          this.tags = response.data.tags
        })
    },
    // 提问类型
    changeType(type) {
      this.type = type
      this.questionVo.type = this.type
    },
    addQuestions() {
      this.questionVo.questionTags.push(this.questiontag)
      questionApi.addQuestions(this.questionVo).then(response => {
        this.$router.push({ path: '/question' })
      })
    },

    chooseTags(tag) {
      if (this.i < 3) {
        this.questionVo.questionTags.push(tag)
        this.i++
      } else {
        this.i = 0
        this.questionVo.questionTags = []
      }
    },
    removeMytags() {
      this.questionVo.questionTags = []
      this.i = 0
    }

  }
}
</script>
<style >
.q-sort-wrap span a.current:hover tt ,.h-l-nav li.current a{ color: #e7542b;}

.q-sort-wrap span a:hover{text-decoration: none;}
.q-sort-wrap span.current{background: #B2E0DF;text-decoration: none;}
/* .q-sort-wrap span .current {background: #000000;cursor: default;} */
</style>
