// 弹幕定时器
var timers = [];
// 新建一个弹幕
function createScreenbullet(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = Math.floor((Math.random() + 1) * 16) + "px";
    var left = $(".all").width() + "px";
    var top = Math.floor(Math.random() * 400) + "px";
    top = parseInt(top) > 352 ? "352px" : top;
    jqueryDom.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top
    });
    $(".all").append(jqueryDom);
    return jqueryDom;
}
var danmus=new Array()
danmus[0]="666666";
danmus[1]="世界500强";
danmus[2]="维珍天使集团";
danmus[3]="六维一体";
danmus[4]="32-62平米精装公寓";
danmus[5]="酒店返租型LOFT公寓";
danmus[6]="双地铁口+高铁出入口";
danmus[7]="超100万方的高档住宅社区提供消费支持";
danmus[8]="北面紧靠砂子塘小学";
danmus[9]="临近市中心医院";
danmus[10]="国际体育中心";
danmus[11]="长沙国际会展中心";
danmus[12]="立体交通网络";
danmus[13]="高铁新城最热门板块";
danmus[14]="高铁枢纽与会展中心形成'双引擎'";
danmus[15]="城际空间站";
danmus[16]="打call，双击666";
// 为弹幕添加定时任务
function addInterval(jqueryDom) {
    var left = jqueryDom.offset().left - $(".all").offset().left;
    var timer = setInterval(function () {
        left--;
        jqueryDom.css("left", left + "px");
        if (jqueryDom.offset().left + jqueryDom.width() < $(".all").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower)) + lower;
}
function hello(){ 
addInterval(createScreenbullet(danmus[random(0,16)]));
} 
//重复执行某个方法 
var t1 = window.setInterval(hello,2000); 
//去掉定时器的方法 
//window.clearInterval(t1); 
