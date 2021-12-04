"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[5934],{2674:(e,s,n)=>{n.r(s),n.d(s,{default:()=>h});var a=n(6252);const i=(0,a.uE)('<h1 id="create-misskey-instance-with-docker" tabindex="-1"><a class="header-anchor" href="#create-misskey-instance-with-docker" aria-hidden="true">#</a> Create Misskey instance with Docker</h1><p>This guide describes how to install and setup Misskey with Docker.</p><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Requirement</p><ul><li>docker and docker-compose installed</li></ul></div><h2 id="get-the-repository" tabindex="-1"><a class="header-anchor" href="#get-the-repository" aria-hidden="true">#</a> Get the repository</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master git://github.com/misskey-dev/misskey.git\n<span class="token builtin class-name">cd</span> misskey\n<span class="token function">git</span> checkout master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2><p>Copy example configuration files with following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml\n<span class="token function">cp</span> .config/docker_example.env .config/docker.env\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Edit <code>default.yml</code> and <code>docker.env</code> according to the instructions in the files.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>In the <code>default.yml</code>, the hosts that set with <code>localhost</code> from Postgresql/Redis should be set to <code>db</code>/<code>redis</code> respectively.</p></div><p>Edit <code>docker-compose.yml</code> if necessary. (e.g. if you want to change the port).</p><h2 id="build-and-initialize" tabindex="-1"><a class="header-anchor" href="#build-and-initialize" aria-hidden="true">#</a> Build and initialize</h2><p>The following command will build Misskey and initialize the database. This will take some time.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker-compose build\n<span class="token function">sudo</span> docker-compose run --rm web <span class="token function">yarn</span> run init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="launch" tabindex="-1"><a class="header-anchor" href="#launch" aria-hidden="true">#</a> Launch</h2><p>Well done! You can start Misskey with the following command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker-compose up -d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>GLHF✨</p><h2 id="how-to-update-your-misskey-server" tabindex="-1"><a class="header-anchor" href="#how-to-update-your-misskey-server" aria-hidden="true">#</a> How to update your Misskey server</h2>',19),t={class:"custom-container warning"},o=(0,a._)("i",{class:"fas fa-exclamation"},null,-1),c=(0,a.Uk)("When updating, be sure to check the "),l={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("release notes"),d=(0,a.Uk)(" to know in advance the changes and whether or not additional work is required (in most cases, it is not)."),u=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash\n<span class="token function">git</span> checkout master\n<span class="token function">git</span> pull\n<span class="token function">git</span> submodule update --init\n<span class="token function">git</span> stash pop\n<span class="token function">sudo</span> docker-compose build\n<span class="token function">sudo</span> docker-compose stop <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> docker-compose up -d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>It may take some time depending on the contents of the update and the size of the database.</p><h2 id="how-to-execute-cli-command" tabindex="-1"><a class="header-anchor" href="#how-to-execute-cli-command" aria-hidden="true">#</a> How to execute CLI command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker-compose run --rm web node built/tools/mark-admin @example\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),p={},h=(0,n(3744).Z)(p,[["render",function(e,s){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("div",t,[o,(0,a._)("p",null,[c,(0,a._)("a",l,[r,(0,a.Wm)(n)]),d])]),u],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{for(const[n,a]of s)e[n]=a;return e}},1752:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-4cc51a7e",path:"/en/docs/install/docker.html",title:"Create Misskey instance with Docker",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Get the repository",slug:"get-the-repository",children:[]},{level:2,title:"Configure",slug:"configure",children:[]},{level:2,title:"Build and initialize",slug:"build-and-initialize",children:[]},{level:2,title:"Launch",slug:"launch",children:[]},{level:2,title:"How to update your Misskey server",slug:"how-to-update-your-misskey-server",children:[]},{level:2,title:"How to execute CLI command",slug:"how-to-execute-cli-command",children:[]}],filePathRelative:"en/docs/install/docker.md",git:{updatedTime:1638643706e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:3},{name:"GNU/LongYap",email:"long1005@live.com",commits:1}]},relatedPages:[{title:"Create your own Misskey instance",path:"/en/docs/install.html",summary:""}]}}}]);