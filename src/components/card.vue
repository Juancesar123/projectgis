<template>
   <section class="section ">
      <h1 class="title  has-text-centered">
       Fitur
      </h1>
      <h2 class="subtitle  has-text-centered">
        Fitur yang kami sediakan sebagai sangat lengkap, untuk para traveler.
        yang mempunyai hobi traveling ke seluruh indonesia
      </h2>
       <div class="columns is-desktop ">
            <div class="column ">
                <div class="card is-primary">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="../assets/imgs/wisata.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            Tersedia informasi mengenai wisata yang Ada di indonesia, wisata
                            yang keren abis di masing-masing daerah di wilayah indonesia.
                            sangat cocok untuk yang hobi traveling
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="../assets/imgs/makanan.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            Tersedia informasi mengenai Kuliner yang Ada di indonesia.
                            makanan khas asli dari masing-masing daerah di indonesia,
                            yang cocok buat para traveler.
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                 <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="../assets/imgs/cuaca.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                           Terdapat informasi cuaca. informasi cuaca ini sangat penting
                           untuk persiapan berwisata, agar berwisata menjadi nyaman dan 
                           aman.
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  name: 'card',
   data (){
    return{
     showNav: false,
     isLoading: false,
     isFullPage: true
    }
  },
  props: {
    msg: String
  },
  beforeMount(){
    this.open()
  },
  mounted: function(){
  },
  methods: {
     open() {
        const loadingComponent = this.$loading.open({
            container: this.isFullPage ? null : this.$refs.element.$el
        })
        setTimeout(() => loadingComponent.close(), 1 * 1000)
     },
   }
}
</script>