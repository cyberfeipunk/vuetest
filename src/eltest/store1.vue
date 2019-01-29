<template>
  <div>
    <el-button @click="ageAdd">年龄加1</el-button>

    <el-input v-model="name" placeholder="请输入姓名" ></el-input>
    <el-input v-model="age" placeholder="请输入年龄"></el-input>


  </div>

</template>

<script type="text/ecmascript-6">

  export default {

    computed:{
      name:{
        set(newValue){
          this.$store.dispatch('setName',newValue);
        },
        get(){
          return this.$store.getters.name
        }
      },
      age:{
        set(newValue){
          this.$store.dispatch('setAge',newValue);
        },
        get(){
          return this.$store.getters.age
        }
      }
    },
    methods:{
      startHacking(){
        alert("start");
      },
      ageAdd(){
        this.$store.dispatch('setAge',this.$store.getters.age + 1);
      },
      input(){
        // alert(this.age);
        //this.$store.dispatch('setAge',this.age);
        //this.$store.dispatch('setName',this.name);

        this.$store.dispatch('nameAsyn',{name:this.name,age:this.age});
      }

    }
  }
</script>



