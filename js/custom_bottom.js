// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('©2014 - 2024 <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f92672;"></i> By aymar.cn');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>');