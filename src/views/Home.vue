<template>
    <div class="app-container">
        <app-header />
        <app-menu />
        <div class="app-content">
            <router-view />
        </div>
        <div>
            <el-button @click="$router.push('/login')">去登陆</el-button>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/container/AppHeader'
import AppMenu from '@/components/container/AppMenu'

export default {
    components: {
        'app-header': AppHeader,
        'app-menu': AppMenu
    },
    data () {
        return {}
    },
    created () {},
    methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixins.scss';
</style>
