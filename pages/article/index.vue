<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <!-- /无数据提示 开始-->
            <!-- /无数据提示 结束-->
            <article v-if=" items.size > 0" class="i-article-list">
              <!-- /文章列表 开始-->
              <ul>
                <li v-for="item in items.items" :key="item.id">
                  <aside class="i-article-pic">
                    <img :src="item.imageUrl" :alt="item.title">
                  </aside>
                  <h3 class="hLh30 txtOf">
                    <a :href="'article/'+item.id" :title="item.title" class="i-art-title">{{ item.title }}</a>
                  </h3>
                  <section class="i-q-txt mt5 i-q-txt2">
                    <p>
                      <span class="c-999 f-fA">{{ item.title }}</span>
                    </p>
                  </section>
                  <section class="hLh30 txtOf mt5 pr10 a-list-extrainfo">
                    <span class="fr"><tt class="c-999 f-fM" pattern="yyyy-MM-dd HH:mm" >{{ (item.gmtCreate).replace('T',' ') }}</tt></span>
                    <div class="fl">
                      <span> <a class="noter-dy vam" title="回答" href="#">
                        <em class="icon18">&nbsp;</em>(<span>{{ item.commentNum }}</span>)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ item.praiseCount }}</span>)
                      </tt>
                      </span>
                    </div>
                  </section>
                </li>
              </ul>
              <!-- /文章列表 结束-->
            </article>

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

        <!-- 好文推荐 -->
        <aside class="fl col-3 articleRecommend">
          <div>
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">热门文章</span>
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
                    <span class="fl"><tt class="c-999 f-fM">{{ (rank.gmtCreate).replace('T',' ') }}</tt></span>
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
export default {

  async asyncData(page) {
    console.log(page.route)

    const response = await articleApi.getPageList(1, 8)
    const items = response.data.items

    const ArticleResponse = await articleApi.getRanklist()

    const ranks = ArticleResponse.data.ranks

    return {
      items,
      ranks
    }
  },

  data() {
    return {
      page: 1, // 当前页
      items: {}, // 课程列表

      ranks: {}
    }
  },
  // created() {
  //   // 课程第一次查询
  //   this.fetchData()
  // },
  methods: {
    // 1 查询第一页数据
    // fetchData() {
    //   articleApi.getPageList(1, 8)
    //     .then(response => {
    //       this.items = response.data.items
    //     })

    //   articleApi.getRanklist()
    //     .then(response => {
    //       this.ranks = response.data.ranks
    //     })
    // },

    // 3 分页切换的方法
    gotoPage(page) {
      articleApi.getPageList(page, 8).then(response => {
        this.items = response.data.items
      })
    }
  }
}
</script>
