 <template>
  <div id="app"> 
    <FormHelper>
        <h2 slot="title">这是title</h2>
        <p  slot="text">这是内容---使用方法   需要接收方使用 "slot"标签接收</p>
        <p  slot>这是内容2---使用方法   需要接收方使用 "slot"标签接收</p>
        <p  slot>这是内容3---使用方法   需要接收方使用 "slot"标签接收</p>
    </FormHelper> 
 </div>
</template>

<script>
import FormHelper from "./components/FormHelper.vue"
export default {
  name: 'App',
  components: { 
    FormHelper
  },
  data(){
    return{
      title:'<h2>content</h2>'
     }
  },  
  methods:{ }
}
</script>

<style >
 /* css 样式嵌套 */
 h1{
   color: blue;
 }
</style>
