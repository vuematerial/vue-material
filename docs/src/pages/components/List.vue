<template>
  <page-content page-title="Components - List">
    <docs-component>
      <div slot="description">
        <p>Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. They are optimized for reading comprehension while differentiating either between similar data types, or qualities within a single data type.</p>
        <p>The <code>md-list</code> component have some auxiliary classes to align content and display actions. All of them can be any HTML tag:</p>
        <ul>
          <li><code>.md-list-action</code>: Used to display a action on the right side of a list item. Commonly used to display a button with a single action.</li>
          <li><code>.md-list-text-container</code>: Used to align text horizontally with icons and actions. Used in double and triple lines.</li>
          <li><code>.md-divider</code>: Add a horizontal line between list items.</li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-list">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-dense</md-table-cell>
                <md-table-cell>Make the list dense and compact</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-double-line</md-table-cell>
                <md-table-cell>Make list items to support double line</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-triple-line</md-table-cell>
                <md-table-cell>Make list items to support triple line</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-list-item">
          <p>Display a single item inside lists</p>

          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>href</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The link that the item should redirect to.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>target</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The target for opening the href link. Normally used for <code>_blank</code> cases.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the item and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-inset</md-table-cell>
                <md-table-cell>Add an empty space on the left of the table. <br>Useful to show list items without icons aligned with another that have an icon.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-list-expand">
          <p>Create a expansion accordion automatically inside lists</p>
          <p>No options available</p>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Single Line">
          <div slot="demo">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;

              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Double Line">
          <div slot="demo">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;

              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Triple Line">
          <div slot="demo">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;

              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Expansion Lists">
          <div slot="demo">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport&quot;&gt;
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
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .phone-viewport {
    height: 400px;
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
</style>
