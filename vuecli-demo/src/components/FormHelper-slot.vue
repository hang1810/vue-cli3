 <template>
    <div>
         <h1>this is h1</h1>
         <slot name="title"></slot>
         <slot name="text"></slot>
         <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style scoped>

</style> 