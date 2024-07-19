document.addEventListener('DOMContentLoaded', function() {
    function setHighlightCSS(schema) {
        var lightCss = document.getElementById('highlight-css');
        var darkCss = document.getElementById('highlight-css-dark');
        
        // 无论是白天还是黑夜模式，都启用 lightCss 样式
        if (lightCss) {
            lightCss.removeAttribute('disabled');
        }
        if (darkCss) {
            darkCss.setAttribute('disabled', '');
        }
    }

    // 获取原始的 applyCustomColorSchemaSettings 函数
    var originalApplyCustomColorSchemaSettings = window.applyCustomColorSchemaSettings;

    // 重写 applyCustomColorSchemaSettings 函数
    window.applyCustomColorSchemaSettings = function(schema) {
        // 调用原始的函数逻辑
        if (originalApplyCustomColorSchemaSettings) {
            originalApplyCustomColorSchemaSettings(schema);
        }
        // 强制使用 light 模式的代码高亮样式
        setHighlightCSS('light');
    };

    // 手动调用 applyCustomColorSchemaSettings 方法来确保样式被应用
    applyCustomColorSchemaSettings();

    // 监听主题切换按钮的点击事件
    var colorToggleButton = document.querySelector('#color-toggle-btn');
    if (colorToggleButton) {
        colorToggleButton.addEventListener('click', function() {
            setTimeout(function() {
                applyCustomColorSchemaSettings();
            }, 200); // 延迟执行以确保主题切换完成
        });
    }
});
