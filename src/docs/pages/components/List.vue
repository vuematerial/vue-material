<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="Single Line">
        <div class="phone-viewport">
          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon> <span>Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon> <span>Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon> <span>Spam</span>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <span>Abbey Christansen</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
              </md-avatar>

              <span>Alex Nelson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/6" alt="People">
              </md-avatar>

              <span>Mary Johnson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon>chat_bubble</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </div>

        <div class="phone-viewport">
          <md-list class="md-dense">
            <md-list-item>
              <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon> <span>Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon> <span>Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon> <span>Spam</span>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <span>Abbey Christansen</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
              </md-avatar>

              <span>Alex Nelson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/6" alt="People">
              </md-avatar>

              <span>Mary Johnson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon>chat_bubble</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </div>
      </demo-example>

      <demo-example label="Double Line">
        <div class="phone-viewport">
          <md-list class="md-double-line">
            <md-list-item>
              <md-icon class="md-primary">phone</md-icon>

              <div class="md-list-text-container">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-text-container">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-icon class="md-primary">email</md-icon>

              <div class="md-list-text-container">
                <span>aliconnors@example.com</span>
                <span>Personal</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-text-container">
                <span>ali_connors@example.com</span>
                <span>Work</span>
              </div>
            </md-list-item>
          </md-list>
        </div>

        <div class="phone-viewport">
          <md-list class="md-double-line md-dense">
            <md-list-item>
              <md-icon class="md-primary">phone</md-icon>

              <div class="md-list-text-container">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-text-container">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-icon class="md-primary">email</md-icon>

              <div class="md-list-text-container">
                <span>aliconnors@example.com</span>
                <span>Personal</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-text-container">
                <span>ali_connors@example.com</span>
                <span>Work</span>
              </div>
            </md-list-item>
          </md-list>
        </div>
      </demo-example>

      <demo-example label="Triple Line">
        <div class="phone-viewport">
          <md-list class="custom-list md-triple-line">
            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Ali Connors</span>
                <span>Brunch this weekend?</span>
                <p>I'll be in your neighborhood doing errands...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">star</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/6" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>me, Scott, Jennifer</span>
                <span>Summer BBQ</span>
                <p>Wish I could come, but I'm out of town ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Sandra Adams</span>
                <span>Oui oui</span>
                <p>Do you have Paris recommendations ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/8" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Trevor Hansen</span>
                <span>Order confirmation</span>
                <p>Thank you for your recent order from ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>
          </md-list>
        </div>

        <div class="phone-viewport">
          <md-list class="custom-list md-triple-line md-dense">
            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Ali Connors</span>
                <span>Brunch this weekend?</span>
                <p>I'll be in your neighborhood doing errands...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">star</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/6" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>me, Scott, Jennifer</span>
                <span>Summer BBQ</span>
                <p>Wish I could come, but I'm out of town ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Sandra Adams</span>
                <span>Oui oui</span>
                <p>Do you have Paris recommendations ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/8" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>Trevor Hansen</span>
                <span>Order confirmation</span>
                <p>Thank you for your recent order from ...</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>
          </md-list>
        </div>
      </demo-example>

      <demo-example label="Controls">
        <div class="phone-viewport">
          <md-list>
            <md-list-item>
              <md-icon>whatshot</md-icon>
              <span>News</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Americas</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>videogame_asset</md-icon>
              <span>Games</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">Console</md-list-item>
                  <md-list-item class="md-inset">PC</md-list-item>
                  <md-list-item class="md-inset">Phone</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>video_library</md-icon>
              <span>Video</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">Humor</md-list-item>
                  <md-list-item class="md-inset">Music</md-list-item>
                  <md-list-item class="md-inset">Movies</md-list-item>
                  <md-list-item class="md-inset">TV Shows</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>shopping_basket</md-icon>
              <span>Shop</span>
            </md-list-item>
          </md-list>
        </div>
      </demo-example>

      <demo-example label="Complete Example">
        <div class="phone-viewport complete-example">
          <md-whiteframe md-elevation="3">
            <md-toolbar class="md-large" v-md-theme="'light-blue'">
              <div class="md-toolbar-container">
                <md-button class="md-icon-button" @click="toggleSidenav">
                  <md-icon>menu</md-icon>
                </md-button>

                <span style="flex: 1"></span>

                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>view_module</md-icon>
                </md-button>
              </div>

              <div class="md-toolbar-container">
                <h2 class="md-title">My Files</h2>

                <md-button class="md-fab md-mini">
                  <md-icon>add</md-icon>
                </md-button>
              </div>
            </md-toolbar>
          </md-whiteframe>

          <md-list class="md-double-line">
            <md-subheader class="md-inset">Folders</md-subheader>

            <md-list-item>
              <md-avatar class="md-avatar-icon">
                <md-icon>folder</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Photos</span>
                <p>Jan 9, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar class="md-avatar-icon">
                <md-icon>folder</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Recipes</span>
                <p>Jan 17, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar class="md-avatar-icon">
                <md-icon>folder</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Work</span>
                <p>Jan 28, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-subheader class="md-inset">Files</md-subheader>

            <md-list-item>
              <md-avatar v-md-theme="'blue'" class="md-avatar-icon md-primary">
                <md-icon>insert_drive_file</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Vacation Itinerary</span>
                <p>Jan 20, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar v-md-theme="'orange'" class="md-avatar-icon md-primary">
                <md-icon>collections</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Kitchen Remodel</span>
                <p>Jan 10, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar v-md-theme="'green'" class="md-avatar-icon md-primary">
                <md-icon>view_list</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Grocery Shop</span>
                <p>Jan 10, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-avatar v-md-theme="'orange'" class="md-avatar-icon md-primary">
                <md-icon>collections</md-icon>
              </md-avatar>

              <div class="md-list-text-container">
                <span>Weekend Pictures</span>
                <p>Jan 10, 2014</p>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>info</md-icon>
              </md-button>
            </md-list-item>
          </md-list>

          <md-sidenav class="md-left" ref="sidebar">
            <md-toolbar class="md-account-header" v-md-theme="'blue'">
              <md-list class="md-transparent">
                <md-list-item class="md-avatar-list">
                  <md-avatar class="md-large">
                    <img src="https://placeimg.com/64/64/people/8" alt="People">
                  </md-avatar>

                  <span style="flex: 1"></span>

                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/3" alt="People">
                  </md-avatar>

                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/4" alt="People">
                  </md-avatar>
                </md-list-item>

                <md-list-item>
                  <div class="md-list-text-container">
                    <span>John Doe</span>
                    <span>johndoe@email.com</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>arrow_drop_down</md-icon>
                  </md-button>
                </md-list-item>
              </md-list>
            </md-toolbar>

            <md-list v-md-theme="'blue'">
              <md-list-item @click="toggleSidenav" class="md-primary">
                <md-icon>insert_drive_file</md-icon> <span>My files</span>
              </md-list-item>

              <md-list-item @click="toggleSidenav">
                <md-icon>people</md-icon> <span>Shared with me</span>
              </md-list-item>

              <md-list-item @click="toggleSidenav">
                <md-icon>access_time</md-icon> <span>Recent</span>
              </md-list-item>

              <md-list-item @click="toggleSidenav">
                <md-icon>start</md-icon> <span>Starred</span>
              </md-list-item>

              <md-list-item @click="toggleSidenav">
                <md-icon>delete</md-icon> <span>Trash</span>
              </md-list-item>
            </md-list>
          </md-sidenav>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss">
  @import '../../../core/stylesheets/variables.scss';

  .phone-viewport {
    width: 360px;
    height: 540px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid rgba(#000, .12);
  }

  .custom-list {
    .md-list-action {
      position: absolute;
      top: 8px;
      right: 16px;
      pointer-events: auto;
      z-index: 2;
    }

    .md-icon {
      color: rgba(#000, .26);
    }
  }

  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

    .md-fab {
      margin: 0;
      position: absolute;
      bottom: -20px;
      left: 16px;
      box-shadow: $material-shadow-5dp;
    }

    .md-toolbar {
      .md-icon {
        color: #014e70;
      }
    }

    .md-title {
      color: #fff;
    }

    .md-list {
      overflow: auto;
    }

    .md-list-action .md-icon {
      color: rgba(#000, .26);
    }

    .md-avatar-icon .md-icon {
      color: #fff !important;
    }

    .md-sidenav .md-list-text-container > :nth-child(2) {
      color: rgba(#fff, .54);
    }

    .md-account-header {
      .md-list-item:hover .md-button:hover {
        background-color: inherit;
      }

      .md-avatar-list .md-list-item-container:hover {
        background: none !important;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        sidenavVisible: false
      };
    },
    methods: {
      toggleSidenav() {
        this.$refs.sidebar.toggle();
      }
    },
    mounted() {
      this.$root.pageTitle = 'Components - List';
    }
  };
</script>
