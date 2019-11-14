 <template>
   <page-container centered>
     <section class="page-container-section" centered>
       <div class="md-header">
         <h2 class="md-headline">Premium Themes</h2>
         <h3>Creative Tim</h3>
         <p>With the examples below built by our partners from
            <a href="https://www.creative-tim.com/?ref=vuematerial.io" target="_blank">Creative Tim</a> you can see how a real world application
            is built, the technology stack behind it and how most
            of the concepts you've learned so far apply in a real
            world application.
         </p>
       </div>

         <md-card>
           <md-card-media>
             <a href="https://www.creative-tim.com/product/vue-material-dashboard?ref=vuematerial.io" target="_blank">
               <img src="https://s3.amazonaws.com/creativetim_bucket/products/81/original/opt_md_vue_thumbnail.jpg?1534938464">
             </a>
           </md-card-media>
           <md-card-content>
             <h3 class="d-flex">Vue Material Dashboard
               <md-badge class="md-square" md-content="Free" />
             </h3>
             Free Vue.js Admin Template
           </md-card-content>
         </md-card>

         <md-card>
           <md-card-media>
             <a href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=vuematerial.io" target="_blank">
               <img src="https://s3.amazonaws.com/creativetim_bucket/products/87/original/opt_mdp_vue_thumbnail.jpg?1534938492">
             </a>
           </md-card-media>
           <md-card-content>
             <h3>Vue Material Dashboard PRO
               <div class="pull-right">
                 $59
               </div>
             </h3>
             Premium Vue.js Admin Template
           </md-card-content>
         </md-card>

         <md-card>
           <md-card-media>
             <a href="https://www.creative-tim.com/product/vue-material-kit?ref=vuematerial.io" target="_blank">
               <img src="https://s3.amazonaws.com/creativetim_bucket/products/97/original/opt_mk_vue_thumbnail.jpg?1538041206">
             </a>
           </md-card-media>
           <md-card-content>
             <h3 class="d-flex">Vue Material Kit
               <md-badge class="md-square" md-content="Free" />
             </h3>
             Free Vue.js UI Kit
           </md-card-content>
         </md-card>

         <md-card>
           <md-card-media>
             <a href="https://www.creative-tim.com/product/vue-material-kit-pro?ref=vuematerial.io" target="_blank">
               <img src="https://s3.amazonaws.com/creativetim_bucket/products/139/original/opt_mkp_vue_thumbnail.jpg?1547651786">
             </a>
           </md-card-media>
           <md-card-content>
             <h3>Vue Material Kit PRO
               <div class="pull-right">
                 $89
               </div>
             </h3>
             Premium Vue.js UI Kit
           </md-card-content>
         </md-card>
    </section>
    <div class="align-center">
       <md-button class="md-button-spaced md-primary md-raised" href="https://www.creative-tim.com/?ref=vuematerial.io" target="_blank">See More Themes from Creative Tim</md-button>
     </div>
   </page-container>

 </template>
 <script>
 </script>
 <style lang="scss" scoped>

 .align-center{
   text-align: center;
   margin: 50px 0;
 }

 .centered{
   text-align: center;
 }

 .md-card{
   width: 360px;
    margin: 25px 40px 0 0px;
    display: inline-block;
    vertical-align: top;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: none;
    .md-card-media img{
      border-radius: 5px;
      box-shadow: 0 2rem 1.5rem -1.5rem rgba(33,37,41,0.15), 0 0 1.5rem 0.5rem rgba(33,37,41,0.05);
      transition: 0.2s;
      &:hover{
        transform: translateY(-0.25rem);
        box-shadow: 0 2.25rem 1.5rem -1.5rem rgba(33,37,41,0.2), 0 0 1.5rem 0.5rem rgba(33,37,41,0.05);
      }
    }
 }

 .md-card-content{
   padding-left: 0;
   text-align: left;
   h3{
      margin: 0;
      &.d-flex{
        display: flex;
      }
   }
 }

 .pull-right{
   float: right;
 }

 .md-badge{
   background: green;
   position: relative;
   margin-left: 5px;
   margin-top: 1px;
 }

 .md-header{
   max-width: 800px;
   text-align: left;
   margin: auto;
 }


 </style>
