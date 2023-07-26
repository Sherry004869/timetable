<template>
    <div class="mask">
        <div class="box">
            此处展示课程具体信息和其他功能
        </div>
    </div>
</template>
<script>
export default{
    name:'Pop'
}
</script>
<style>
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.6);
    cursor: pointer;
}
.box{
    background: white;
    margin: 0 auto;
    margin-top: 160px;
    width:100px;
    height: 150px;
    padding: 40px;
    border-radius: 8px;
}
</style>