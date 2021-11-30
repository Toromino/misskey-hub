"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[3863],{974:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const r=(0,i(6252).uE)('<h1 id="プラグインapiリファレンス" tabindex="-1"><a class="header-anchor" href="#プラグインapiリファレンス" aria-hidden="true">#</a> プラグインAPIリファレンス</h1><h2 id="mk-dialog-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-dialog-title-text-type" aria-hidden="true">#</a> Mk:dialog(title text type)</h2><p>ダイアログを表示します。typeには以下の値が設定できます。<br> info success warn error question<br> 省略すると info になります。</p><h2 id="mk-confirm-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-confirm-title-text-type" aria-hidden="true">#</a> Mk:confirm(title text type)</h2><p>確認ダイアログを表示します。typeには以下の値が設定できます。<br> info success warn error question<br> 省略すると question になります。<br> ユーザーが&quot;OK&quot;を選択した場合は true を、&quot;キャンセル&quot;を選択した場合は false が返ります。</p><h2 id="mk-api-endpoint-params" tabindex="-1"><a class="header-anchor" href="#mk-api-endpoint-params" aria-hidden="true">#</a> Mk:api(endpoint params)</h2><p>Misskey APIにリクエストします。第一引数にエンドポイント名、第二引数にパラメータオブジェクトを渡します。</p><h2 id="mk-save-key-value" tabindex="-1"><a class="header-anchor" href="#mk-save-key-value" aria-hidden="true">#</a> Mk:save(key value)</h2><p>任意の値に任意の名前を付けて永続化します。永続化した値は、AiScriptコンテキストが終了しても残り、Mk:loadで読み取ることができます。</p><h2 id="mk-load-key" tabindex="-1"><a class="header-anchor" href="#mk-load-key" aria-hidden="true">#</a> Mk:load(key)</h2><p>Mk:saveで永続化した指定の名前の値を読み取ります。</p><h2 id="plugin-register-post-form-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-post-form-action-title-fn" aria-hidden="true">#</a> Plugin:register_post_form_action(title fn)</h2><p>投稿フォームにアクションを追加します。第一引数にアクション名、第二引数にアクションが選択された際のコールバック関数を渡します。<br> コールバック関数には、第一引数に投稿フォームオブジェクトが渡されます。</p><h2 id="plugin-register-note-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-action-title-fn" aria-hidden="true">#</a> Plugin:register_note_action(title fn)</h2><p>ノートメニューに項目を追加します。第一引数に項目名、第二引数に項目が選択された際のコールバック関数を渡します。<br> コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。</p><h2 id="plugin-register-user-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-user-action-title-fn" aria-hidden="true">#</a> Plugin:register_user_action(title fn)</h2><p>ユーザーメニューに項目を追加します。第一引数に項目名、第二引数に項目が選択された際のコールバック関数を渡します。<br> コールバック関数には、第一引数に対象のユーザーオブジェクトが渡されます。</p><h2 id="plugin-register-note-view-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-view-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_view_interruptor(fn)</h2><p>UIに表示されるノート情報を書き換えます。<br> コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。<br> コールバック関数の返り値でノートが書き換えられます。</p><h2 id="plugin-register-note-post-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-post-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_post_interruptor(fn)</h2><p>ノート投稿時にノート情報を書き換えます。<br> コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。<br> コールバック関数の返り値でノートが書き換えられます。</p><h2 id="plugin-open-url-url" tabindex="-1"><a class="header-anchor" href="#plugin-open-url-url" aria-hidden="true">#</a> Plugin:open_url(url)</h2><p>第一引数に渡されたURLをブラウザの新しいタブで開きます。</p><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a> Plugin:config</h2><p>プラグインの設定が格納されるオブジェクト。プラグイン定義のconfigで設定したキーで値が入ります。</p>',25),n={},a=(0,i(3744).Z)(n,[["render",function(e,t){return r}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}},3911:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-61d3962e",path:"/docs/advanced/plugin-api-reference.html",title:"プラグインAPIリファレンス",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"Mk:dialog(title text type)",slug:"mk-dialog-title-text-type",children:[]},{level:2,title:"Mk:confirm(title text type)",slug:"mk-confirm-title-text-type",children:[]},{level:2,title:"Mk:api(endpoint params)",slug:"mk-api-endpoint-params",children:[]},{level:2,title:"Mk:save(key value)",slug:"mk-save-key-value",children:[]},{level:2,title:"Mk:load(key)",slug:"mk-load-key",children:[]},{level:2,title:"Plugin:register_post_form_action(title fn)",slug:"plugin-register-post-form-action-title-fn",children:[]},{level:2,title:"Plugin:register_note_action(title fn)",slug:"plugin-register-note-action-title-fn",children:[]},{level:2,title:"Plugin:register_user_action(title fn)",slug:"plugin-register-user-action-title-fn",children:[]},{level:2,title:"Plugin:register_note_view_interruptor(fn)",slug:"plugin-register-note-view-interruptor-fn",children:[]},{level:2,title:"Plugin:register_note_post_interruptor(fn)",slug:"plugin-register-note-post-interruptor-fn",children:[]},{level:2,title:"Plugin:open_url(url)",slug:"plugin-open-url-url",children:[]},{level:2,title:"Plugin:config",slug:"plugin-config",children:[]}],filePathRelative:"docs/advanced/plugin-api-reference.md",git:{updatedTime:1636085138e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:1}]},relatedPages:[{title:"プラグインの作成",path:"/docs/advanced/create-plugin.html",summary:""}]}}}]);