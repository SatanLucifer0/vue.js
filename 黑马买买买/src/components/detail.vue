<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box"></div>
              <div class="goods-spec">
                
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <el-input-number v-model="num" :min="1" :max="goodsinfo.stock_quantity"></el-input-number>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <el-tabs type="border-card">
              <el-tab-pane label="商品介绍">
                <div v-html="goodsinfo.content"></div>
              </el-tab-pane>
              <!-- <div v-html="goodsinfo.content" class="my-detail"> </div> -->
              <el-tab-pane label="商品评论">
                <div>
                  <div class="comment-box">
                    <div id="commentForm" name="commentForm" class="form-box">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="conn-box">
                        <div class="editor">
                          <textarea
                            id="txtContent"
                            name="txtContent"
                            sucmsg=" "
                            data-type="*10-1000"
                            nullmsg="请填写评论内容！"
                            v-model.trim="comtmassage"
                          ></textarea>
                          <span class="Validform_checktip"></span>
                        </div>
                        <div class="subcon">
                          <input
                            id="btnSubmit"
                            name="submit"
                            type="submit"
                            value="提交评论"
                            class="submit"
                            @click="addComment"
                          />
                          <span class="Validform_checktip"></span>
                        </div>
                      </div>
                    </div>
                    <ul id="commentList" class="list-box">
                      <!-- v-if的值为true使就添加所在的标签 -->
                      <p v-if="commentlist.length==0"       
                        style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                      >暂无评论，快来抢沙发吧！</p>
                      <li v-for="com in commentlist" :key="com.id">
                        <div class="avatar-box">
                          <i class="iconfont icon-user-full"></i>
                        </div>
                        <div class="inner-box">
                          <div class="info">
                            <span>{{com.user_name}}</span>
                            <span>{{com.add_time | formatTime('YYYY-MM-DD HH:mm:ss')}}</span>
                          </div>
                          <p>{{com.content}}</p>
                        </div>
                      </li>
                    </ul>
                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                       <el-pagination
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageIndex"
                       :page-sizes="[50,100,150,200,250,300]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
                       </el-pagination>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="good in hotgoodslist" :key="good.id" @click.prevent="toDetail(good)">
                    <div class="img-box">
                      <a href="#/site/goodsinfo/90" class>
                        <img :src="good.img_url" />
                      </a>
                    </div>
                    <div class="txt-box">
                      <a href="#/site/goodsinfo/90" class>{{good.title}}</a>
                      <span>{{good.add_time | formatTime("YYYY年MM月DD")}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      // 商品详情的一些参数
      hotgoodslist: [],
      goodsinfo: [],
      imglist: [],
      num: 1,
      activeName: "first",

      // 商品评论的参数
      commentlist: [],
      pageIndex:1,
      pageSize:10,
      total:0,

      // 提交评论的数据参数
      comtmassage:'',

    };
  },
  created() {
    this.getDetail()
    this.getComment()
  },
  // 当我点击右边商品推荐时,改变的仅仅只是商品的id,,所以detail页面在并没有数据更新,,并不会主动渲染
  // 在评论页时,点击右边商品是评论也没有更新,,,,,
  watch:{
    '$route.params.id'(){
      this.getDetail()
      this.getComment()
    }
  },
  methods:{
    // 点击推荐的商品,就跳转到 detail 页面,,,在这个页面里再去求情数据渲染
    toDetail(good){
      this.$router.push('/detail/'+good.id)
    },



    // 提交评论
    addComment(){
      let id = this.$route.params.id;
      
      this.$axios.post(`site/validate/comment/post/goods/${id}`,{
        commenttxt:this.comtmassage
      }).then(res=>{
        // 判断非空
        if(this.comtmassage==''){
          this.$message.warning('请输入内容')
          return
        }
        console.log(res);
        if(res.data.status==0){
          // 评论成功,用UI组件里的信息提示来提示
        //   this.$message({
        //   message: '评论成功',
        // });
        this.$message.success('提交成功');
        this.comtmassage='';
        this.getComment()
        }else{
          this.$message.warning('提交失败')
        }
      })
    },

    // 获取评论的方法
    getComment(){
    let id = this.$route.params.id;
    this.$axios
      .get(`site/comment/getbypage/goods/${id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
      .then(res => {
        console.log(res);
        this.commentlist = res.data.message; 
        this.total=res.data.totalcount;
      });
    },

    // 获取商品详情的请求方法
    getDetail(){
      let id = this.$route.params.id;
      this.$axios.get(`site/goods/getgoodsinfo/${id}`).then(res => {
      // console.log(res);
      this.hotgoodslist = res.data.message.hotgoodslist;
      this.goodsinfo = res.data.message.goodsinfo;
      this.imglist = res.data.message.imglist;
    });
    },

    handleSizeChange(pageSize){
      console.log(pageSize);
      
      // 页码容量改变时把参数从新赋值
      this.pageSize=pageSize;
      // 把页码定到第一页
      this.pageIndex=1;
      // 发送请求重新渲染数据
       this.getComment()

    },
    handleCurrentChange(page){
      // 点击某一页时候
       this.pageIndex=page;
       this.getComment()
    },
  }
};
</script>

<style>
.my-detail {
  float: left;
}
.list-box .comlist {
  line-height: 50px;
}
</style>>