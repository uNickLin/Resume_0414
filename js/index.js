$(document).ready(function(){
  
  // #aboutme hover effect
  $('#aboutme').mouseenter(function(){
    $(this).siblings('#achievement, #skills').css('color', '#EEEFEA').find('.title_hr').css('opacity', '.3');
    $('#achievement').find('img').css('opacity', '.3');
    $('#skills').find('.progressbar').css('border', 'solid 3px #EEEFEA').find('.bar').css('opacity', '.3');
    $('#skills').find('img').css('opacity', '.3');
  });
  
  $('#aboutme').mouseleave(function(){
    $(this).siblings('#achievement, #skills').css('color', 'black').find('.title_hr').css('opacity', '1');
    $('#achievement').find('img').css('opacity', '1');
    $('#skills').find('.progressbar').css('border', 'solid 3px #EEEFEA').find('.bar').css('opacity', '1');
    $('#skills').find('img').css('opacity', '1');
  });
  
  //#achievement hover effect
  $('#achievement').mouseenter(function(){
    $(this).siblings('#aboutme, #skills').css('color', '#EEEFEA').find('.title_hr').css('opacity', '.3');
    $('#aboutme').find('i').css('opacity', '.3');
    $('#skills').find('.progressbar').css('border', 'solid 3px #EEEFEA').find('.bar').css('opacity', '.3');
    $('#skills').find('img').css('opacity', '.3');
  });
  
  $('#achievement').mouseleave(function(){
    $(this).siblings('#aboutme, #skills').css('color', 'black').find('.title_hr').css('opacity', '1');
    $('#aboutme').find('i').css('opacity', '1');
    $('#skills').find('.progressbar').css('border', 'solid 3px #EEEFEA').find('.bar').css('opacity', '1');
    $('#skills').find('img').css('opacity', '1');
  });
  
    // #skills hover effect
  $('#skills').mouseenter(function(){
    $(this).siblings('#aboutme, #achievement').css('color', '#EEEFEA').find('.title_hr').css('opacity', '.3');
    $('#achievement').find('img').css('opacity', '.3');
    $('#aboutme').find('i').css('opacity', '.3');
  });
  
  $('#skills').mouseleave(function(){
    $(this).siblings('#aboutme, #achievement').css('color', 'black').find('.title_hr').css('opacity', '1');
    $('#achievement').find('img').css('opacity', '1');
    $('#aboutme').find('i').css('opacity', '1');
  });
  
  
// Vue.js > v-for

  var vm = new Vue({
    el: '#exp',
    data: {
      college: {
        name: '元智大學',
        major: '工業工程與管理學系',
        course: '人因工程學程'
      },
      company: {
        name: '頎邦科技',
        dep: '凸塊產品部',
        title: 'Layout工程師'
      }
    }
  })
  
});