<template>
    <div>
        <loader></loader>
        <section class="section warna">
            <h1 class="title  has-text-centered">Cari Tempat Kuliner</h1>
            <b-field>
                <b-autocomplete
                    rounded
                    v-model="name"
                    :data="filteredDataArray"
                    placeholder="e.g. Jakarta"
                    icon="magnify"
                    @select="option => selected = option">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
            </b-field>
        </section>
        <section class="section">
                <div id="mymap"></div>
        </section>
    </div>
</template>

<script>
import L from 'leaflet'
import loader from '../components/loader.vue'
export default {
    name: 'app',
    components:{ loader },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            data: [
                'Jakarta',
                'Sumatra Selatan',
                'Jawa Barat',
                'Jawa Tengah',
                'Jawa Timur',
                'Jawa Barat',
            ],
            name: '',
            selected: null
        }
    },
    mounted() {
        this.initMap();
    },
    computed: {
        filteredDataArray() {
            return this.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    },
    methods: {
        initMap() {
            var mymap = L.map('mymap').setView([36, 116], 4);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mymap);
        }
    },
}
</script>

<style lang="scss" scoped>
.warna{
    background-color: hsl(171, 100%, 41%);
    margin-top:10px;
    color:white;
}
#mymap {
    width: 100%;
    height: 600px;
    display: block;
    z-index:0; 
}
</style>
