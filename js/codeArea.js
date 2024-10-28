document.addEventListener('DOMContentLoaded', function () {
  const lightCss = document.getElementById('highlight-css'); // 获取 light 模式的代码高亮样式
  const darkCss = document.getElementById('highlight-css-dark'); // 获取 dark 模式的代码高亮样式
  const colorToggleButton = document.querySelector('#color-toggle-btn'); // 获取主题切换按钮

  // 强制启用 light 模式的代码高亮样式
  function enableLightHighlight() {
    if (lightCss) lightCss.removeAttribute('disabled'); // 启用 light 模式的代码高亮样式
    if (darkCss) darkCss.setAttribute('disabled', ''); // 禁用 dark 模式的代码高亮样式
  }

  // 获取并扩展原始的 applyCustomColorSchemaSettings 函数
  const originalApplyCustomColorSchemaSettings = window.applyCustomColorSchemaSettings;
  window.applyCustomColorSchemaSettings = function (schema) {
    if (originalApplyCustomColorSchemaSettings) { // 若原始函数存在，则执行
      originalApplyCustomColorSchemaSettings(schema); // 执行原始函数
    }
    enableLightHighlight(); // 强制启用 light 模式的代码高亮样式
  };

  // 初始化样式
  window.applyCustomColorSchemaSettings();

  // 监听主题切换按钮的点击事件
  if (colorToggleButton) {
    colorToggleButton.addEventListener('click', () => {
      // 延迟执行以确保主题切换完成
      setTimeout(window.applyCustomColorSchemaSettings, 200);
    });
  }
});
