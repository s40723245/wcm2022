var tipuesearch = {"pages": [{'title': 'About', 'text': '個人倉儲 \n 個人網誌 \n 分組倉儲 \n 分組網站 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Progress', 'text': '\n', 'tags': '', 'url': 'Progress.html'}, {'title': 'Week1~12', 'text': '設定SSH及建立新倉儲 \n https://youtu.be/2rZgQCrJzkE \n \n \n 架設 Nginx伺服器設定 \n 架設Niginx教學影片 \n 配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n 在 div 外圍加入細黑線標定影片範圍, 且利用 padding 留下 top right buttom left 各 10px 間隔 \n \n   <div class="winkVideoContainerClass"><video width="1008" height="630" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData" muted="true">\n<source src="./../downloads/wink/nginx_setup.mp4" type="video/mp4" /></video>   蓋掉由 Wink Javascript 與 css 所建立的影片控制項目   <div class="winkVideoOverlayClass"></div>\n<div class="winkVideoControlBarClass"><button class="winkVideoControlBarPlayButtonClass"></button> <button class="winkVideoControlBarPauseButtonClass"></button>\n<div class="winkVideoControlBarProgressLeftClass"></div>\n<div class="winkVideoControlBarProgressEmptyMiddleClass"></div>\n<div class="winkVideoControlBarProgressRightClass"></div>\n<div class="winkVideoControlBarProgressFilledMiddleClass"></div>\n<div class="winkVideoControlBarProgressThumbClass"></div>\n</div>\n<div class="winkVideoPlayOverlayClass"></div> \n \n', 'tags': '', 'url': 'Week1~12.html'}, {'title': 'W13', 'text': '\n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  <script src="./../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="./../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n', 'tags': '', 'url': 'W14.html'}, {'title': 'Programming', 'text': '', 'tags': '', 'url': 'Programming.html'}, {'title': 'Brython', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n 5 個紅點方塊 Tetris \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n  <script src="./../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="./../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'tetris\xa0control', 'text': '用老師給的 Tetris程式 去新增及修改物件 \n keycode \n 新增按下X鍵順時針旋轉 \n     def rotate1(self):\n        self.rotation = (self.rotation - 1) % len(self.figures[self.type]) \n     def rotate1(self):\n        old_rotation = self.figure.rotation\n        self.figure.rotate1()\n        if self.intersects():\n            self.figure.rotation = old_rotation \n     # 88 is x key to clockwise rotate\n    if key == 88:\n        game.rotate1() \n 修改按下Z鍵逆時針旋轉 \n     # 90 is z key to anticlockwise rotate\n    if key == 90:\n        game.rotate() \n 修改按下空白鍵讓方塊下降到最底下 \n     # 32 is space key to move block to bottom\n    if key == 32:\n        game.go_space() \n 修改fps方塊下降速度太快的問題，讓玩家有更好的遊戲體驗 \n fps = 60 \n 新增按下c鍵會往下降一格 \n     def go_down(self):\n        self.figure.y += 1\n        if self.intersects():\n            self.figure.y -= 1\n            self.freeze() \n     # 67 is c key to drop -1 on the y-axis\n    if key == 67:\n        game.go_down() \n \n', 'tags': '', 'url': 'tetris\xa0control.html'}, {'title': 'Nginx', 'text': '設定 nginx, 讓其中所伺服的檔案只允許系上電腦下載 \n worker_processes  1;\nevents {\n    worker_connections  1024;\n}\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile        on;\n    keepalive_timeout  65;\n\n    server {\n        listen       [::]:80 ipv6only=off;\n        listen       80;\n        server_name  localhost;\n        \n     \n        #allow 140.130.XX.0/24;\n        allow 2001:288:6004:XX::0/32;\n        deny all;\n\n        #access_log  logs/host.access.log  main;\n        \n\n        location / {\n            root Y:/tmp/wcm2022/;\n        }\n\n        location /tmp/ {\n            root   Y:/;\n        }\n        autoindex on;\n    }\n}\n \n 因為已設定允許系上的網路ip可連上，因此用自己的網路時需要把deny all註解掉，否則只能用系上電腦才能連上nginx伺服器 \n #deny all; \n \n \n', 'tags': '', 'url': 'Nginx.html'}, {'title': 'midterm', 'text': 'w8_project_wink \n 配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'Assignment', 'text': 'Assignment1： https://s40723245.github.io/wcm2022/downloads/Assignment1.pdf \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  <script src="./../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': '\n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Tetris', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  <script src="./../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Tetris.html'}, {'title': 'Project report', 'text': 'https://s40723245.github.io/wcm2022/downloads/Tetris_brython.pdf \n \n', 'tags': '', 'url': 'Project report.html'}, {'title': 'tetris this replace self', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  <script src="./../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'tetris this replace self.html'}, {'title': 'final', 'text': 'final report :\xa0 https://s40723245.github.io/wcm2022/downloads/final_report.pdf \n \n', 'tags': '', 'url': 'final.html'}, {'title': 'w17', 'text': '心得:這學期我學到了如何使用設定ssh金鑰、用nginx架設伺服器、用wink截圖上字幕說明、blog、設置brython環境以及了解tetris程式並新增計分系統及修改功能。我自己本身很喜歡玩俄羅斯方塊，因此對這方面下了比較多的苦功，最後也成功地弄出計分系統及game over文字呈現，頗有成就感。試玩了自己的tetris遊戲程式，一開始fps我設定60，很輕鬆就達到了6分，後面越來越快到了fps=5運氣比較好超過了6分，我調到fps=2，因為更新率太快了顯示不出來，fps=4就真的無法達標了...速度太快。 \n 配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'w17.html'}, {'title': 'Note', 'text': 'Options of function bython() \n pythonpath 搜索導入的模組路徑 \n CMSimfly \xa0網際內容管理網頁的詳細功能 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'git指令', 'text': 'git submodule add \xa0 <repo url><path>  新增子模組到近端倉儲 \n git clone --recurse-submodules\xa0 <repo url><path> \xa0複製子模組到近端倉儲 \n 忘記使用submodule新增子模組 \n git submodule init \n git submodule update \n', 'tags': '', 'url': 'git指令.html'}]};