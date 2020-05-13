 <template>
  <div id="app">
    <!-- 数据缓存 -->
    <keep-alive>
    <component  :is="Component"></component>
    </keep-alive>
    <!-- <formOne></formOne>--> 
    <!-- <formTwo></formTwo> --> 
    <button @click="Component = 'formOne'">show form-one</button><br>
    <button @click="Component = 'formTwo'">shtwOow form-two</button>



  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
export default {
  name: "App",
  components: {
    formOne: FormOne,
    formTwo: FormTwo
  },
  data() {
    return {
      Component:"formTwo"
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
