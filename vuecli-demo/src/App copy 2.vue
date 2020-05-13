 <template>
  <div id="app">
    <FormHelper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">这是内容---使用方法 需要接收方使用 "slot"标签接收</p>
      <div slot>
        <p>这是内容2---使用方法 需要接收方使用 "slot"标签接收</p>
        <p>这是内容3---使用方法 需要接收方使用 "slot"标签接收</p>
        <p>css 正常是在传递方设置</p>
        <p>data值 只能在传递方设置 标签在那属性在哪</p>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper.vue";
export default {
  name: "App",
  components: {
    FormHelper
  },
  data() {
    return {
      title: "这个是标题"
    };
  },
  methods: {}
};
</script>

<style >
/* css 样式嵌套 */
h1 {
  color: blue;
}
h2 {
  background-color: aquamarine;
}
</style>
