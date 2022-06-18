<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
        <!-- 过渡动画 -->

        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2">
              <div
                @click="goSearch"
                class="item"
                v-for="(cl, index) in categoryList"
                :key="cl.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-category1Id="cl.categoryId"
                    :data-categoryName="cl.categoryName"
                    >{{ cl.categoryName }}</a
                  >
                  <!-- <router-link to="/search">{{ cl.categoryName }}</router-link> -->
                </h3>
                <!-- 二级、三级分类-->
                <div
                  class="item-list clearfix"
                  @mouseleave="leaveIndex"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in cl.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-category2Id="c2.categoryId"
                          :data-categoryName="c2.categoryName"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{
                        c2.categoryName
                      }}</router-link> -->
                      </dt>
                      <dd>
                        <em
                          v-for="c3 in c2.categoryChild"
                          :key="c3.categoryChild"
                        >
                          <a
                            :data-category3Id="c3.categoryId"
                            :data-categoryName="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <router-link to="/search">{{
                          c3.categoryName
                        }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
//这种引入方式是把lodash全部功能函数引入
// import _ from 'lodash'
//最好的引入方式，按需加载
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1,
      show: true,
    };
  },
  //组件挂载完毕，可以向服务器发请求
  mounted() {
    //通知vuex发请求，获取数据，存储在仓库中
    
    //当组件挂载完毕，让show属性变为false
    //如果不是home路由组件，将typeNav进行隐藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      //对象写法：右侧需要的是一个函数，当使用这个计算属性时，右侧函数会执行一次
      categoryList: (state) => {
        //state其实为大仓库的数据
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    //鼠标进入修改响应式数据currentIndex属性

    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex(index) {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    //进行路由跳转的方法
    goSearch(evevt) {
      //最好的解决方法：事件委派+编程式导航
      //事件委派：是把所有的子节点委派给父节点
      // this.$router.push("/search");
      let Element = evevt.target;
      let { categoryname, category1id, category2id, category3id } =
        Element.dataset;

      //如果标签有categoryName一定是a标签
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        //如果路由跳转的时候带有params参数，也要传递过去
        if(this.$route.params){
          location.params=this.$route.params
          location.query = query;
        this.$router.push(location);
        }
      }
    },
    //当鼠标移入的时候，让商品分类进行展示
    enterShow() {
      this.show = true;
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #41b883;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #41b883;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            height: 27px;
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background: #a4f0ce;
        }
        // .item:hover{
        //     background: #a4f0ce;
        //   }
      }
    }
    //过渡动画样式
    //进入的开始状态
    .sort-enter{
      height: 0px;
    }
    //过渡动画的结束状态
    .sort-enter-to{
      height: 461px;
    }
    //定义动画时间，速率
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>
