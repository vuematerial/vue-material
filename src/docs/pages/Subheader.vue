<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="With Lists">
        <div class="phone-viewport">
          <md-list>
            <md-subheader>Navigation</md-subheader>

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

            <md-subheader>Contacts</md-subheader>

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
          <md-list class="custom-list md-triple-line">
            <md-subheader>Today</md-subheader>

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
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Subheader';
    }
  };
</script>
