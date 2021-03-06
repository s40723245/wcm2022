# 這個程式用於 demo 綠色方塊往隨機產生的紅色方塊位置移動
# 此程式並未計算各紅色方塊與綠色方塊的距離, 僅按照隨機排序移動
# 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc
from browser import document as doc
# 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中
from browser import html
# 用於定時執行特定函式
import browser.timer
# 導入亂數模組
from random import random, randint

# 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應
canvas = html.CANVAS(width = 600, height = 600)
# 將 canvas 標註的 id 設為 "canvas"
canvas.id = "canvas"
# 將 document 中 id 為 "brython_div" 的標註 
# 設為與 brython_div 變數對應
brython_div = doc["brython_div"]
# 將 canvas 標註放入 brython_div 所在位置
# 頁面中原本就已經放入 <div id="brython_div"></div> 標註
brython_div <= canvas
# 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應
canvas = doc["canvas"]
# 將 canvas 的 2d 繪圖 context 命名為 ctx
ctx = canvas.getContext("2d")

# 建立一個 dRect() 函式
# s default 為 1, c default 為紅色
def dRect(lux, luy, w, h, s=1, c='#ff0000'):
    ctx.lineWidth = s
    ctx.strokeStyle = c
    ctx.beginPath();
    ctx.rect(lux, luy, w, h)
    ctx.stroke();
    
# 建立畫直線函式
def draw_line(x1, y1, x2, y2, color="#ff0000"):
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.stroke()

# 建立 write Text 函式
def wText(x, y, t, s=14, c='#0000ff'):
    ctx.font = str(s) + "px Arial";
    ctx.fillText(t, x, y)

# 定義畫格線的函式
def grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):
    # 利用迴圈與座標增量繪圖
    # 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1
    for i in range(wnum+1):
        for j in range(hnum+1):
            # 畫上下直線
            yend = starty + h*(hnum)
            xend = startx + w*(wnum)
            x = startx + i*w
            draw_line(x, starty, x, yend, color)
            # 畫左右直線
            y = starty + j*h
            draw_line(startx, y, xend, y, color)
            #wText(w/2-10, y-w/2, str(j))

# 從兩個座標點求中心點座標
def center(lx, ly, rx, ry):
    # lx is x coord of the left up corner
    # rx is the x coord of th right down corner
    x = (lx + rx)/2
    y = (ly + ry)/2
    return x, y
    
# 畫出填色方塊
def draw_rect(gx, gy, gw, gh, color="lime"):
    # gx is the grid coord at x direction
    # gy is the grid coord at y direction
    # gw is the width of the green rect
    # gh is the height of the green rect
    lx = origx + (gx-1)*w
    ly = origy + (gy-1)*h
    rx = origx + gx*w
    ry = origy + gy*h
    cx, cy = center(lx, ly, rx, ry)
    # glx is the x coord of the left corner
    # gly is the y coord of the left corner
    glx = cx - gw/2
    gly = cy - gh/2
    # 利用設定的顏色值畫出 rectangle
    ctx.fillStyle = color
    ctx.fillRect(glx, gly, gw, gh)

# 以白色覆蓋位於 (nowx, nowy) 
# 且比目標方塊長寬各大於 1 pixel的方塊
def wipe():
    draw_rect(nowx, nowy, 30+1, 30+1, color="white")

# 畫出位於 (nowx, nowy) 的綠色方塊
def draw():
    draw_rect(nowx, nowy, 30, 30, color="lime")

# 以隨機方式在格點座標中畫出紅色方塊
def draw_red(x, y):
    draw_rect(x, y, wrect_size, hrect_size, color="red")

# 綠色方塊往紅色方塊位置移動, 抵達目標位置後停止移動
def walk():
    global stepx, stepy
    if nowx > redx:
        stepx = -1
        stepy = 0
    if nowx < redx:
        stepx = 1
        stepy = 0
    if nowy > redy:
        stepx = 0
        stepy = -1
    if nowy < redy:
        stepx = 0
        stepy = 1
    if nowx == redx and nowy == redy:
        stepx = 0
        stepy = 0

# 每隔短暫時間即呼叫執行一次的函式
def game():
    # 因 nowx, nowy, redx, redy 在函式外宣告
    # 且在函式內改變對應值, 因此需宣告為 global
    global nowx, nowy, redx, redy
    # 當綠色方塊移動至紅色方塊座標後, 逐一取出另一個紅色目標座標值
    if nowx == redx and nowy == redy:
        # 利用 pop() 逐一取出 coord 中的座標值 pos
        # coord 取至最後一個數列後, 即跳至 pass
        try:
            pos = coord.pop()
            # 索引 0 為 x 座標, 1 為 y 座標
            redx = pos[0]
            redy = pos[1]
            wText(int((redx-0.5)*w), int((redy-0.5)*h), "O")
        except:
            # 以隨機方產生 5 個座標值
            for i in range(5):
                # wnum 為 width 方向的格子數
                # hnum 為 height 方向的格子數
                x = randint(1, wnum)
                y = randint(1, hnum)
                # 逐一在座標位置畫出紅色方塊
                draw_red(x, y)
                # 將座標值以數列方式放入 coord 數列
                coord.append([x, y])
    walk()
    wipe()
    nowx += stepx
    nowy += stepy
    draw()

# 綠色方塊起點座標與 x 及 y 方向的座標增量
nowx = 1
nowy = 1
stepx = 0
stepy = 0
go = True
# 設定格數
# width 方向格子數
wnum = 15
# height 方向格子數
hnum = 15
# 紅色方塊座標起始座標位於右下角
redx = wnum-1
redy = hnum-1
# 設定線寬
pixel = 1
# 設定 w 寬度
w = int(canvas.width/wnum) - pixel
# 設定 h 高度
h = int(canvas.height/hnum) - pixel
# 設定紅色方塊寬度與高度, 分別設為格子大小的  70%
wrect_size = int(w*0.7)
hrect_size = int(h*0.7)
# 設定繪圖座標點起點位置
origx = 1
origy = 1
# 利用 grid 函式畫出格線
grid(origx, origy, w, h, wnum, hnum, pixel=1, color="black")

# 宣告 coord 為數列
coord = []
# 以隨機方產生 5 個座標值
for i in range(5):
    # wnum 為 width 方向的格子數
    # hnum 為 height 方向的格子數
    x = randint(1, wnum)
    y = randint(1, hnum)
    # 逐一在座標位置畫出紅色方塊
    draw_red(x, y)
    # 將座標值以數列方式放入 coord 數列
    coord.append([x, y])

browser.timer.set_interval(game, 100)