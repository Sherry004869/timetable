<template>
    <div class="mask">
        <div class="box">
            <slot>

            </slot>
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
    width:  150px;
    height: 200px;
    padding: 40px;
    border-radius: 8px;
    margin-top: 80px;
}
</style>