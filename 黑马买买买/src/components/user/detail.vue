<template>
    <div class="right-auto">
    <div class="bg-wrap" style="min-height: 765px;">
      <div class="sub-tit">
        <a href="javascript:void(0)" class="add">
          <i class="iconfont icon-reply"></i>返回
        </a>
        <ul>
          <li class="selected">
            <a href="javascript:;">查看订单</a>
          </li>
        </ul>
      </div>
      <div class="order-progress">
        <ul>
          <li class="first active">
            <div class="progress">下单</div>
            <div class="info">2017-10-25 21:38:15</div>
          </li>
          <li class>
            <div class="progress">已付款</div>
            <div class="info">2017-10-25 21:38:15</div>
          </li>
          <li class>
            <div class="progress">已经发货</div>
            <div class="info">2017-10-25 21:38:15</div>
          </li>
          <li class="last">
            <div class="progress">已完成</div>
            <div class="info">2017-10-25 21:38:15</div>
          </li>
        </ul>
      </div>
      <div class="form-box accept-box form-box1">
        <dl class="head form-group">
          <dd>
            订单号：BD20171025213815752
            <a href="#/site/goods/payment/12" class="btn-pay">去付款</a>
            <!---->
          </dd>
        </dl>
        <dl class="form-group">
          <dt>订单状态：</dt>
          <dd>待付款</dd>
        </dl>
        <dl class="form-group">
          <dt>快递单号：</dt>
          <dd></dd>
        </dl>
        <dl class="form-group">
          <dt>支付方式：</dt>
          <dd>支付宝</dd>
        </dl>
      </div>
      <div class="table-wrap">
        <table width="100%" border="0" cellspacing="0" cellpadding="5" class="ftable">
          <tbody>
            <tr>
              <th align="left">商品信息</th>
              <th width="60%">名称</th>
              <th width="10%">单价</th>
              <th width="10%">数量</th>
              <th width="10%">金额</th>
            </tr>
            <tr>
              <td width="60">
                <img
                  src="http://157.122.54.189:9095/upload/201504/20/201504200341260763.jpg"
                  class="img"
                />
              </td>
              <td align="left">
                <a target="_blank" href="/goods/show-92.html">Apple iMac MF883CH/A 21.5英寸一体机电脑</a>
              </td>
              <td align="center">
                <s>￥7200</s>
                <p>￥7200</p>
              </td>
              <td align="center">1</td>
              <td align="center">￥7200</td>
            </tr>
            <tr>
              <td colspan="7" align="right">
                <p>
                  商品金额：
                  <b class="red">￥7200</b>&nbsp;&nbsp;+&nbsp;&nbsp;运费：
                  <b class="red">￥20</b>
                </p>
                <p style="font-size: 22px;">
                  应付总金额：
                  <b class="red">￥7220</b>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="form-box accept-box">
        <dl class="head form-group">
          <dd>收货信息</dd>
        </dl>
        <dl class="form-group">
          <dt>顾客姓名：</dt>
          <dd>ivanyb1212</dd>
        </dl>
        <dl class="form-group">
          <dt>送货地址：</dt>
          <dd>江西省,萍乡市,安源区 sdfsdf</dd>
        </dl>
        <dl class="form-group">
          <dt>联系电话：</dt>
          <dd>13987766472</dd>
        </dl>
        <dl class="form-group">
          <dt>电子邮箱：</dt>
          <dd></dd>
        </dl>
        <dl class="form-group">
          <dt>备注留言：</dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>