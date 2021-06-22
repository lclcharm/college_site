<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 作者介绍 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">讲师介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 作者基本信息 开始 -->
        <!-- <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img :src="teacher.avatar" :alt="teacher.name">
            </section>
            <h3 class="hLh30">
              <span class="fsize24 c-333">{{ teacher.name }}
                &nbsp;
                {{ teacher.level===1?'高级作者':'首席作者' }}
              </span>
            </h3>
            <section class="mt10">
              <span class="t-tag-bg">{{ teacher.intro }}</span>
            </section>
            <section class="t-infor-txt">
              <p class="mt20">{{ teacher.career }}</p>
            </section>
            <div class="clear"/>
          </div>
        </section> -->

        <div class="fl t-infor-menu">
          <section id="t-infor-menu" class="c-tab-title">
            <p>
              <a class="current" name="c-desc" title="讲师详情" href="javascript: void(0)">讲师详情</a>
            </p>
            <!-- <p>
              <a title="讲授课程" name="c-course" href="javascript: void(0)">讲授课程</a>
            </p> -->
          </section>
        </div>
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img :src="teacher.avatar" :alt="teacher.name">
            </section>
            <h3 class="hLh30">
              <span class="fsize24 c-333">{{ teacher.name }}
                &nbsp;
                {{ teacher.level===1?'高级讲师':'首席讲师' }}
              </span>
            </h3>
            <section class="mt10">
              <span class="mt10">{{ teacher.intro }}</span>
            </section>
            <section class="t-infor-txt">
              <p class="t-tag-bg">{{ teacher.career }}</p>
            </section>
            <div class="clear"/>
          </div>
        </section>

        <!-- 作者基本信息 结束 -->
        <div class="clear"/>
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">讲授课程</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- 无数据提示 开始-->
          <section v-if="courseList.length===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->

          <!-- 视频集列表 开始-->
          <article class="comm-course-list">
            <ul class="of">
              <li v-for="course in courseList" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" style="height:150px;width:400px">
                    <div class="cc-mask">
                      <a :href="'/course/'+course.id" title="开始学习" target="_blank" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :href="'/course/'+course.id"
                      :title="course.title"
                      class="course-title fsize18 c-333">{{ course.title }}</a>
                  </h3>
                </div>
              </li>
            </ul>
            <div class="clear"/>
          </article>
          <!-- /视频集列表 结束-->
        </div>
      </section>

      <!-- 讲师评价 -->
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">讲师评价</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- 无数据提示 开始-->
          <section v-if="courseList.length===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->

        </div>
      </section>

      <!-- 文章评论 开始 -->
      <div class="mt30 pr20 mb50 commentHtml">
        <div>
          <!-- <h6 id="i-art-comment" class="c-c-content c-infor-title">
            <span class="commentTitle">讲师评价（{{ total }}条）</span>
          </h6> -->
          <section class="lh-bj-list pr mt20 replyhtml">
            <ul>
              <li class="unBr">
                <aside class="noter-pic">
                  <img width="50" height="50" class="picImg" src="~/assets/photo/customer/avatar-boy.gif">
                </aside>
                <div class="of">
                  <section class="n-reply-wrap">
                    <fieldset>
                      <textarea id="commentContent" v-model="evaluate.content" name="" placeholder="输入您对老师的评价"/>
                    </fieldset>
                    <p class="of mt5 tar pl10 pr10">
                      <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>
                      <a href="#i-art-comment" title="回复" class="lh-reply-btn" @click="addEvaluate()">提交</a>
                    </p>
                  </section>
                </div>
              </li>
            </ul>
          </section>
          <!-- /无数据提示 开始-->
          <section v-if="total===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <section v-if="total>0" class="">

            <section class="question-list lh-bj-list pr">
              <ul class="pr10">
                <li v-for="item in items.items" :key="item.id">
                  <aside class="noter-pic">
                    <img :src="item.avatar" width="50" height="50" class="picImg">
                  </aside>
                  <div class="of">
                    <span class="fl">
                      <font class="fsize12 c-blue">
                        {{ item.nickname }}</font>
                    <font class="fsize12 c-999 ml5">评价:</font></span>
                  </div>
                  <div class="noter-txt mt5">
                    <p>{{ item.content }}</p>
                  </div>
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
    <!-- /作者介绍 结束 -->

  </div>
</template>
<script>
import teacherApi from '~/api/teacher'
// import common from '~/assets/js/common'
export default {
  // 在这个方法被调用的时候，第一个参数被设定为当前页面的 上下文对象，
  async asyncData(page) {
    console.log(page.route)
    const response = await teacherApi.getById(page.route.params.id)

    return {
      teacher: response.data.teacher,
      courseList: response.data.courseList
    }
  },

  data(page) {
    return {
      items: {},
      total: 0,
      evaluate: {}
    }
  },
  created() {
    // 课程第一次查询
    this.fetchData()
  },
  methods: {
    // 1 查询第一页数据
    fetchData() {
      teacherApi.evaluatePage(1, 8, this.teacher.id)
        .then(response => {
          this.items = response.data.items
          this.total = response.data.total
        })
    },
    addEvaluate() {
      this.evaluate.teacherId = this.teacher.id
      teacherApi.addTeacherEvaluate(this.evaluate)
        .then(response => {
          this.$message.success(response.message)
          this.evaluate.content = ''
          this.fetchData()
        })
    },
    // 3 分页切换的方法
    gotoPage(page) {
      teacherApi.evaluatePage(page, 8, this.teacher.id)
        .then(response => {
          this.items = response.data.items
          this.total = response.data.total
        })
    }
  }
}
</script>

<style>
body{
  position: relative;
}
.all-teacher-title .c-tab-title {
    margin-bottom: 20px;
    height: auto
}

.all-teacher-title .c-tab-title a {
    margin: 0 10px
}
.t-infor-wrap {
    border-bottom: none;
    border-top: 1px solid #e2e2e2;
    padding-top: 10px;
    margin-top: -10px
}

#t-infor-menu {
    border: none;
    height: auto
}

#t-infor-menu {
    text-align: left
}

#t-infor-menu p a {
    margin: 20px 0 0 0;
    padding: 0 0 0 10px;
    height: 18px;
    line-height: 18px;
    border: solid #666;
    border-width: 0 0 0 5px;
    display: inline-block
}

.t-infor-menu {
    width: 10%
}

.t-infor-box {
    width: 90%;
    display: block;
}

.t-infor-pic {

    float: left;
    margin: 0 30px 0 0;
    background: #fff;
    border: 1px solid #f0f0f0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, .04);
    overflow: hidden;
    width: 320px;
    height: 320px
}

.t-infor-pic img {
    margin: 20px auto;
    width: 90%;
    height: 90%;
    display: block
}

.t-tag-bg {
    background: #f2f2f2;
    display: inline-block;
    padding: 10px 15px;
    overflow: hidden;
    font-size: 14px;
    color: #888
}

.t-infor-txt {
    margin: 20px 10px 0;
    line-height: 200%;
    font-size: 14px;
    color: #777
}

.t-infor-txt p {
    text-indent: 24px;
    text-align: justify
}

</style>
