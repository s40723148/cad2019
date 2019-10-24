var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數 \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'CMSiMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python 加上 flask, bs4, lxml, mardown, pelican, flask_cors, leo 等模組所建構的網際內容管理系統. \n flask 模組是一套網際程式框架, CMSiMDE 利用此一框架編寫網際相關的函式, 用來執行動態的內容管理系統. \n bs4 在 CMSiMDE 擔任解析 config/content.htm 超文件檔案的工作, 根據 h1, h2 與 h3 標註, 對 content.htm 進行分頁, 因此使用者可以透過 3 個階次的內容架構進行編輯. \n lxml 模組主要用來將 content.htm 逐一轉換為 content 目錄中的個別檔案, 也就是在 CMSiMDE 動態系統中, 點擊 generate_pages 之後, 呼叫 lxml 模組中的分頁方法, 將動態內容轉為靜態內容. \n markdown 與 pelican 在 CMSiMDE 主要用來產生靜態網誌, 而網誌的設計與編輯則透過 Leo Editor 進行, 此外 CMSiMDE 除了網際內容管理與網誌之外, 還透過 Leo Editor 管理 reveal.js 網際簡報系統. \n flask_cors 模組, 在 CMSiMDE 是為了配合 Dartpad 程式編寫過程, 需要跨網站擷取資料的需求而加入, 在舊版的可攜系統中若無此模組, 執行 CMSiMDE 之前必須透過 \n python -m pip install flask_cors\xa0 \n 安裝', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': '設定識別資料', 'text': '1. 設定使用者名稱及電子郵件 \n git config\xa0 --global user.name\xa0 "username" \n git config\xa0 --global user.email\xa0 "e mail " \n 2. 通過代理主機連接HTTP \n git config\xa0 --global http.proxy \xa0[位址]:連接阜 \n \n', 'tags': '', 'url': '設定識別資料.html'}, {'title': 'Solvespace 編譯', 'text': '編譯步驟: \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n ========================================================== \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n ========================================================== \n 編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt \n list(APPEND ANGLE_DEFINITIONS -DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 改為 : \n # list(APPEND ANGLE_DEFINITIONS #" -DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n ========================================================== \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n ========================================================== \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': '操作練習', 'text': 'a simple plate \n \n three-way connector \n \n Sketch Rotation around an Axis \n \n Assembly \n \n a more Complex Model \n \n Interactive 3D Model in Browser \n \n', 'tags': '', 'url': '操作練習.html'}, {'title': 'Task 1', 'text': '參數式繪圖軟體 Solvespace 編譯、零組件繪圖與應用. \n 利用\xa0 2019Fall可攜套件.7z \xa0學習如何完成\xa0 https://github.com/solvespace/solvespace \xa0原始碼的編譯, 並透過\xa0 http://solvespace.com \xa0學習如何建立\xa0 web_rep2.zip \xa0中所需的行走車. \n 其中必須將所建立的零組件轉入\xa0 V-rep 3.6.1 rev 4.7z \xa0進行運動組立後, 以 Lua 或 Python 進行控制. \n 網際 V-rep 模型控制: \xa0 web_vrep2.zip \xa0( local ) \n app.py \n from flask import Flask, render_template, redirect\nfrom vrep_linefollower import VrepLineFollower\n \nline_follower = VrepLineFollower()\n \napp = Flask(__name__)\n \n@app.route("/")\ndef index():\n  return render_template(\'controls.html\')\n \n@app.route(\'/do/<direction>\')\ndef do(direction):\n  global line_follower\n  line_follower.to_direction(direction)\n  return redirect(\'/\')\n \n \nif __name__ == \'__main__\':\n  app.run(host=\'127.0.0.1\') \n \n vrep_linefollower.py \n import vrep\n \nclass VrepLineFollower:\n  def __init__(self):\n    vrep.simxFinish(-1) # just in case, close all opened connections\n    self.clientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\n \n    self.wheelRadius = 0.027\n    self.linearVelocityLeft  = 0.1\n    self.linearVelocityRight = 0.1\n \n    # vectors [left, right]\n    self.direction_v = {\n     \'up\':    [ 0.01,  0.01],\n     \'down\':  [-0.01, -0.01],\n     \'left\':  [-0.01,  0.01],\n     \'right\': [ 0.01, -0.01]\n    }\n \n    res, self.leftJointDynamic  = vrep.simxGetObjectHandle(self.clientID, "DynamicLeftJoint",  vrep.simx_opmode_oneshot_wait)\n    res, self.rightJointDynamic = vrep.simxGetObjectHandle(self.clientID, "DynamicRightJoint", vrep.simx_opmode_oneshot_wait)\n \n  # direction = \'up\' | \'down\' | \'left\' | \'right\'\n  def to_direction(self, direction):\n    direction_vector = self.direction_v[direction]\n    self.linearVelocityLeft  += direction_vector[0]\n    self.linearVelocityRight += direction_vector[1]\n    self.set_motors()\n \n  # private\n  def set_motors(self):\n    t_left  = self.linearVelocityLeft  / self.wheelRadius\n    t_right = self.linearVelocityRight / self.wheelRadius\n    vrep.simxSetJointTargetVelocity(self.clientID, self.leftJointDynamic,  t_left,  vrep.simx_opmode_oneshot_wait)\n    vrep.simxSetJointTargetVelocity(self.clientID, self.rightJointDynamic, t_right, vrep.simx_opmode_oneshot_wait)\n \n \n', 'tags': '', 'url': 'Task 1.html'}, {'title': '零組件繪製', 'text': '\n', 'tags': '', 'url': '零組件繪製.html'}, {'title': '網際 V-rep 模型控制', 'text': '', 'tags': '', 'url': '網際 V-rep 模型控制.html'}, {'title': '新增啟動與停止按鈕', 'text': '', 'tags': '', 'url': '新增啟動與停止按鈕.html'}]};