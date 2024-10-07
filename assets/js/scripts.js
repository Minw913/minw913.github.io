document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮
    const toggleButton = document.getElementById('dark-mode-toggle');
  
    // 检查 localStorage 中是否保存了用户的偏好设置
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode'); // 如果是黑夜模式，则直接应用
    }
  
    // 点击按钮时切换黑夜模式
    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode'); // 切换 dark-mode 类
  
      // 根据当前模式保存用户偏好到 localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  