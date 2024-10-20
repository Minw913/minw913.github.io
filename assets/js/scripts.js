document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
  
    // 检查 localStorage 中是否有用户的偏好设置
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      toggleButton.checked = true; // 如果黑夜模式已开启，复选框应该被勾选
    }
  
    // 监听按钮的点击事件
    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode'); // 切换 dark-mode 类
  
      // 保存用户的偏好设置到 localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  

$(document).ready(function() {
  let isPaused = false;

  $('#carouselPauseButton').click(function() {
    const carouselIcon = $('#carouselIcon');

    if (isPaused) {
      $('#researchCarousel').carousel('cycle');
      carouselIcon.removeClass('fa-play').addClass('fa-pause');
    } else {
      $('#researchCarousel').carousel('pause');
      carouselIcon.removeClass('fa-pause').addClass('fa-play');
    }
    isPaused = !isPaused;
  });
});
