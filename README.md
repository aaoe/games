<h2 align="left">
  <a href="https://aaoe.github.io/Games/2048">2048-Puzzle</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/rubik">魔方-Rubik</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/snake">贪吃蛇-Snake</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/pacman-canvas">吃豆人-Pacman</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/reversi">黑白棋-Reversi</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/gomoku/">五子棋-Gobang</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/chess">中国象棋-Chinese Chess</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/tetris/index.html?lan=zh">俄罗斯方块-Tetris</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/bigwatermelon">合成大西瓜-Watermelon</a>
</h2>

<h2 align="left">
  <a href="https://aaoe.github.io/Games/die">一个都不能死-Can't die</a>
</h2>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            height: 100%;
            overflow: hidden;
        }
        canvas{
            display: block;
        }

    </style>
</head>
<body>
<canvas id="canvas"></canvas>
</body>
<script>
    var can = document.getElementById("canvas");
    var cxt = can.getContext("2d");//设置绘图环境
    //设置画布宽高
    var w = canvas.width = window.screen.width;
    var h = canvas.height = window.screen.height;
    //绘制文本


    var words = Array(256).join("1").split("");//数组里面的元素用1这个字符串拼接在一块   [a,b] -> a1b
    console.log(words);
    var text = '';
    var x = 0;
    function draw(){
        //绘制一个透明层来覆盖前面的绘制的图片  就会越来越模糊
        cxt.fillStyle = "rgba(0,0,0,0.05)";
        cxt.fillRect(0,0,w,h);
        cxt.fillStyle = color2();
        words.map(function(y,n){// y是元素  n是索引
            console.log(arguments);
            //随机选择一个字母
            text = String.fromCharCode(65+Math.ceil(Math.random()*57));
            console.log(text);
            x = n*10;
            cxt.fillText(text,x,y);
            words[n] = y>(768 + Math.random()*484) ? 0:y+10;
        });
    }

    setInterval(draw,30);

    /*function color4(){
        return "#" + function(color){
                return new Array(7-color.length).join("0") + color
            }((Math.random()*0x1000000 << 0).toString(16))
    }*/
    /*
    //生成随机颜色
    //方法一:rgb
    function color1(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+","+g+","+b+")";
    }*/
    function color2(){
        var colors = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];//0-15
        var color = "";
        for (var i=0;i<6 ;i++ )
        {
            var n = Math.ceil(Math.random()*15);
            color += "" + colors[n]
        }
        return "#" + color;
    }
/*
    function color3(){
        var color = Math.ceil(Math.random()*16777215).toString(16);
        //console.log(color);
        while (color.length<6)
        {
            color += "0" + color
        }
        return "#" + color
    }*/
</script>
</html>
