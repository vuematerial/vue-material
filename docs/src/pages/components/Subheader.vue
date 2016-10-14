<template>
  <demo-page label="Components - Subheader">
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
      <demo-example label="With Lists">
        <code-block lang="xml">
&lt;md-list&gt;
  &lt;md-subheader&gt;Navigation&lt;/md-subheader&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;move_to_inbox&lt;/md-icon&gt; &lt;span&gt;Inbox&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;send&lt;/md-icon&gt; &lt;span&gt;Outbox&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;delete&lt;/md-icon&gt; &lt;span&gt;Trash&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;error&lt;/md-icon&gt; &lt;span&gt;Spam&lt;/span&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-subheader&gt;Contacts&lt;/md-subheader&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/5&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;span&gt;Abbey Christansen&lt;/span&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon class=&quot;md-primary&quot;&gt;chat_bubble&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;span&gt;Alex Nelson&lt;/span&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon class=&quot;md-primary&quot;&gt;chat_bubble&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/6&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;span&gt;Mary Johnson&lt;/span&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;chat_bubble&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;
&lt;/md-list&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-list class=&quot;custom-list md-triple-line&quot;&gt;
  &lt;md-subheader&gt;Today&lt;/md-subheader&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;Ali Connors&lt;/span&gt;
      &lt;span&gt;Brunch this weekend?&lt;/span&gt;
      &lt;p&gt;I&#039;ll be in your neighborhood doing errands...&lt;/p&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon class=&quot;md-primary&quot;&gt;star&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/6&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;me, Scott, Jennifer&lt;/span&gt;
      &lt;span&gt;Summer BBQ&lt;/span&gt;
      &lt;p&gt;Wish I could come, but I&#039;m out of town ...&lt;/p&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;star_border&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/5&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;Sandra Adams&lt;/span&gt;
      &lt;span&gt;Oui oui&lt;/span&gt;
      &lt;p&gt;Do you have Paris recommendations ...&lt;/p&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;star_border&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-avatar&gt;
      &lt;img src=&quot;https://placeimg.com/40/40/people/8&quot; alt=&quot;People&quot;&gt;
    &lt;/md-avatar&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;Trevor Hansen&lt;/span&gt;
      &lt;span&gt;Order confirmation&lt;/span&gt;
      &lt;p&gt;Thank you for your recent order from ...&lt;/p&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;star_border&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;
&lt;/md-list&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>
