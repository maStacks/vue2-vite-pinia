<template>
  <div>
    <input type="text" v-model="post" />  
    <button @click="insertPost(post)">保存</button>
    <button @click="removePost()">删除</button>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { usePostsStore } from "@/store/usePostsStore";
export default {
  data() {
    return { post: "" };
  },
  methods: {
    ...mapActions(usePostsStore, ["insertPost",'removePost']),
  },
};
</script>
