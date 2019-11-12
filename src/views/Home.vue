<template>
    <div class="home">
        <div id="cesiumContainer"></div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import * as Cesium from 'cesium'
    import 'cesium/Build/Cesium/Widgets/widgets.css'

    export default {
        name: 'home',
        components: {},
        mounted:function () {
            new Cesium.Viewer('cesiumContainer');
        }
    }
</script>
