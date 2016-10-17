<template>
  <demo-page label="Components - List">
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

      <demo-example label="Expansion List">
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
      <demo-example label="Single Line">
        <code-block lang="xml">
&lt;md-list&gt;
  &lt;md-list-item&gt;
    &lt;md-icon&gt;move_to_inbox&lt;/md-icon&gt; &lt;span&gt;Inbox&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;send&lt;/md-icon&gt; &lt;span&gt;Sent Mail&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;delete&lt;/md-icon&gt; &lt;span&gt;Trash&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;error&lt;/md-icon&gt; &lt;span&gt;Spam&lt;/span&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

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
&lt;md-list class=&quot;md-dense&quot;&gt;
  &lt;md-list-item&gt;
    &lt;md-icon&gt;move_to_inbox&lt;/md-icon&gt; &lt;span&gt;Inbox&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;send&lt;/md-icon&gt; &lt;span&gt;Sent Mail&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;delete&lt;/md-icon&gt; &lt;span&gt;Trash&lt;/span&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;error&lt;/md-icon&gt; &lt;span&gt;Spam&lt;/span&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

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
      </demo-example>

      <demo-example label="Double Line">
        <code-block lang="xml">
&lt;md-list class=&quot;md-double-line&quot;&gt;
  &lt;md-list-item&gt;
    &lt;md-icon class=&quot;md-primary&quot;&gt;phone&lt;/md-icon&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;(650) 555-1234&lt;/span&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;sms&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item class=&quot;md-inset&quot;&gt;
    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;(650) 555-1234&lt;/span&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon class=&quot;md-primary&quot;&gt;email&lt;/md-icon&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;aliconnors@example.com&lt;/span&gt;
      &lt;span&gt;Personal&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;sms&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item class=&quot;md-inset&quot;&gt;
    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;ali_connors@example.com&lt;/span&gt;
      &lt;span&gt;Work&lt;/span&gt;
    &lt;/div&gt;
  &lt;/md-list-item&gt;
&lt;/md-list&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-list class=&quot;md-double-line md-dense&quot;&gt;
  &lt;md-list-item&gt;
    &lt;md-icon class=&quot;md-primary&quot;&gt;phone&lt;/md-icon&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;(650) 555-1234&lt;/span&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;sms&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item class=&quot;md-inset&quot;&gt;
    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;(650) 555-1234&lt;/span&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon class=&quot;md-primary&quot;&gt;email&lt;/md-icon&gt;

    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;aliconnors@example.com&lt;/span&gt;
      &lt;span&gt;Personal&lt;/span&gt;
    &lt;/div&gt;

    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
      &lt;md-icon&gt;sms&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item class=&quot;md-inset&quot;&gt;
    &lt;div class=&quot;md-list-text-container&quot;&gt;
      &lt;span&gt;ali_connors@example.com&lt;/span&gt;
      &lt;span&gt;Work&lt;/span&gt;
    &lt;/div&gt;
  &lt;/md-list-item&gt;
&lt;/md-list&gt;
        </code-block>
      </demo-example>

      <demo-example label="Triple Line">
        <code-block lang="xml">
&lt;md-list class=&quot;custom-list md-triple-line&quot;&gt;
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

        <code-block lang="xml">
&lt;md-list class=&quot;custom-list md-triple-line md-dense&quot;&gt;
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

        <code-block lang="scss">
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
        </code-block>
      </demo-example>

      <demo-example label="Expansion List">
        <code-block lang="xml">
&lt;md-list&gt;
  &lt;md-list-item&gt;
    &lt;md-icon&gt;whatshot&lt;/md-icon&gt;
    &lt;span&gt;News&lt;/span&gt;

    &lt;md-list-expand&gt;
      &lt;md-list&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;World&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Americas&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Europe&lt;/md-list-item&gt;
      &lt;/md-list&gt;
    &lt;/md-list-expand&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;videogame_asset&lt;/md-icon&gt;
    &lt;span&gt;Games&lt;/span&gt;

    &lt;md-list-expand&gt;
      &lt;md-list&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Console&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;PC&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Phone&lt;/md-list-item&gt;
      &lt;/md-list&gt;
    &lt;/md-list-expand&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;video_library&lt;/md-icon&gt;
    &lt;span&gt;Video&lt;/span&gt;

    &lt;md-list-expand&gt;
      &lt;md-list&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Humor&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Music&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;Movies&lt;/md-list-item&gt;
        &lt;md-list-item class=&quot;md-inset&quot;&gt;TV Shows&lt;/md-list-item&gt;
      &lt;/md-list&gt;
    &lt;/md-list-expand&gt;
  &lt;/md-list-item&gt;

  &lt;md-list-item&gt;
    &lt;md-icon&gt;shopping_basket&lt;/md-icon&gt;
    &lt;span&gt;Shop&lt;/span&gt;
  &lt;/md-list-item&gt;
&lt;/md-list&gt;
        </code-block>
      </demo-example>

      <demo-example label="Complete Example">
        <code-block lang="xml">
&lt;div class=&quot;complete-example&quot;&gt;
  &lt;md-whiteframe md-elevation=&quot;3&quot;&gt;
    &lt;md-toolbar class=&quot;md-large&quot; v-md-theme=&quot;&#039;light-blue&#039;&quot;&gt;
      &lt;div class=&quot;md-toolbar-container&quot;&gt;
        &lt;md-button class=&quot;md-icon-button&quot; @click=&quot;toggleSidenav&quot;&gt;
          &lt;md-icon&gt;menu&lt;/md-icon&gt;
        &lt;/md-button&gt;

        &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;

        &lt;md-button class=&quot;md-icon-button&quot;&gt;
          &lt;md-icon&gt;search&lt;/md-icon&gt;
        &lt;/md-button&gt;

        &lt;md-button class=&quot;md-icon-button&quot;&gt;
          &lt;md-icon&gt;view_module&lt;/md-icon&gt;
        &lt;/md-button&gt;
      &lt;/div&gt;

      &lt;div class=&quot;md-toolbar-container&quot;&gt;
        &lt;h2 class=&quot;md-title&quot;&gt;My Files&lt;/h2&gt;

        &lt;md-button class=&quot;md-fab md-mini&quot;&gt;
          &lt;md-icon&gt;add&lt;/md-icon&gt;
        &lt;/md-button&gt;
      &lt;/div&gt;
    &lt;/md-toolbar&gt;
  &lt;/md-whiteframe&gt;

  &lt;md-list class=&quot;md-double-line&quot;&gt;
    &lt;md-subheader class=&quot;md-inset&quot;&gt;Folders&lt;/md-subheader&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
        &lt;md-icon&gt;folder&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Photos&lt;/span&gt;
        &lt;p&gt;Jan 9, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
        &lt;md-icon&gt;folder&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Recipes&lt;/span&gt;
        &lt;p&gt;Jan 17, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
        &lt;md-icon&gt;folder&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Work&lt;/span&gt;
        &lt;p&gt;Jan 28, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;

      &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
    &lt;/md-list-item&gt;

    &lt;md-subheader class=&quot;md-inset&quot;&gt;Files&lt;/md-subheader&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar v-md-theme=&quot;&#039;blue&#039;&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
        &lt;md-icon&gt;insert_drive_file&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Vacation Itinerary&lt;/span&gt;
        &lt;p&gt;Jan 20, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar v-md-theme=&quot;&#039;orange&#039;&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
        &lt;md-icon&gt;collections&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Kitchen Remodel&lt;/span&gt;
        &lt;p&gt;Jan 10, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar v-md-theme=&quot;&#039;green&#039;&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
        &lt;md-icon&gt;view_list&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Grocery Shop&lt;/span&gt;
        &lt;p&gt;Jan 10, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;

    &lt;md-list-item&gt;
      &lt;md-avatar v-md-theme=&quot;&#039;orange&#039;&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
        &lt;md-icon&gt;collections&lt;/md-icon&gt;
      &lt;/md-avatar&gt;

      &lt;div class=&quot;md-list-text-container&quot;&gt;
        &lt;span&gt;Weekend Pictures&lt;/span&gt;
        &lt;p&gt;Jan 10, 2014&lt;/p&gt;
      &lt;/div&gt;

      &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
        &lt;md-icon&gt;info&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/md-list-item&gt;
  &lt;/md-list&gt;

  &lt;md-sidenav class=&quot;md-left&quot; ref=&quot;sidebar&quot;&gt;
    &lt;md-toolbar class=&quot;md-account-header&quot; v-md-theme=&quot;&#039;blue&#039;&quot;&gt;
      &lt;md-list class=&quot;md-transparent&quot;&gt;
        &lt;md-list-item class=&quot;md-avatar-list&quot;&gt;
          &lt;md-avatar class=&quot;md-large&quot;&gt;
            &lt;img src=&quot;https://placeimg.com/64/64/people/8&quot; alt=&quot;People&quot;&gt;
          &lt;/md-avatar&gt;

          &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;

          &lt;md-avatar&gt;
            &lt;img src=&quot;https://placeimg.com/40/40/people/3&quot; alt=&quot;People&quot;&gt;
          &lt;/md-avatar&gt;

          &lt;md-avatar&gt;
            &lt;img src=&quot;https://placeimg.com/40/40/people/4&quot; alt=&quot;People&quot;&gt;
          &lt;/md-avatar&gt;
        &lt;/md-list-item&gt;

        &lt;md-list-item&gt;
          &lt;div class=&quot;md-list-text-container&quot;&gt;
            &lt;span&gt;John Doe&lt;/span&gt;
            &lt;span&gt;johndoe@email.com&lt;/span&gt;
          &lt;/div&gt;

          &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
            &lt;md-icon&gt;arrow_drop_down&lt;/md-icon&gt;
          &lt;/md-button&gt;
        &lt;/md-list-item&gt;
      &lt;/md-list&gt;
    &lt;/md-toolbar&gt;

    &lt;md-list v-md-theme=&quot;&#039;blue&#039;&quot;&gt;
      &lt;md-list-item @click=&quot;toggleSidenav&quot; class=&quot;md-primary&quot;&gt;
        &lt;md-icon&gt;insert_drive_file&lt;/md-icon&gt; &lt;span&gt;My files&lt;/span&gt;
      &lt;/md-list-item&gt;

      &lt;md-list-item @click=&quot;toggleSidenav&quot;&gt;
        &lt;md-icon&gt;people&lt;/md-icon&gt; &lt;span&gt;Shared with me&lt;/span&gt;
      &lt;/md-list-item&gt;

      &lt;md-list-item @click=&quot;toggleSidenav&quot;&gt;
        &lt;md-icon&gt;access_time&lt;/md-icon&gt; &lt;span&gt;Recent&lt;/span&gt;
      &lt;/md-list-item&gt;

      &lt;md-list-item @click=&quot;toggleSidenav&quot;&gt;
        &lt;md-icon&gt;start&lt;/md-icon&gt; &lt;span&gt;Starred&lt;/span&gt;
      &lt;/md-list-item&gt;

      &lt;md-list-item @click=&quot;toggleSidenav&quot;&gt;
        &lt;md-icon&gt;delete&lt;/md-icon&gt; &lt;span&gt;Trash&lt;/span&gt;
      &lt;/md-list-item&gt;
    &lt;/md-list&gt;
  &lt;/md-sidenav&gt;
&lt;/div&gt;
        </code-block>

        <code-block lang="scss">
.complete-example {
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
        </code-block>

        <code-block lang="javascript">
export default {
  methods: {
    toggleSidenav() {
      this.$refs.sidebar.toggle();
    }
  }
};
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss">
  @import '../../../../src/core/stylesheets/variables.scss';

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
    methods: {
      toggleSidenav() {
        this.$refs.sidebar.toggle();
      }
    }
  };
</script>
