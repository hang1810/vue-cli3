 <template>
  <div>
     <form-helper>
       <div slot="form-header">
         <h3>Form Two -Log in</h3>
         <p>随便写点东西</p>
       </div>
       <div slot="form-fields">
         <input type="text" placeholder="username" required/>
         <input type="password" placeholder="password" required/>
       </div>
       <div slot="form-controls">
         <button v-on:click="handleSubmit">登录</button>
       </div>
     </form-helper>
  </div>
</template>

<script>
import formHelper from "./FormHelper.vue";
export default {
  name: "App",
  components: {
     "form-helper":formHelper
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleSubmit(){
      alert("thanks for submitting form two ");
    }
  }
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
