<template>
  <section>
    <h1 class="md-title">Lists</h1>

    <div>
      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Normal - Single Line</h2>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon> <span>Outbox</span>
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

      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Dense - Single Line</h2>
        </md-toolbar>

        <md-list class="md-dense">
          <md-list-item>
            <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon> <span>Outbox</span>
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
    </div>

    <div v-md-theme="'indigo'">
      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Normal - Double Line</h2>
        </md-toolbar>

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

      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Dense - Double Line</h2>
        </md-toolbar>

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
    </div>

    <div class="custom-list" v-md-theme="'orange'">
      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Normal - Triple Line</h2>
        </md-toolbar>

        <md-list class="md-triple-line">
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

      <div class="cell-phone scrollable">
        <md-toolbar>
          <h2 class="md-title">Dense - Triple Line</h2>
        </md-toolbar>

        <md-list class="md-triple-line md-dense">
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
    </div>
  </section>
</template>

<style lang="scss">
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
</style>
