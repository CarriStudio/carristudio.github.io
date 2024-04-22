// 用到的元素变量
var supportButtons = document.getElementsByClassName('support_us');
var mobileMenuBar = document.getElementById('mobile_menu');
var mediaQuery = window.matchMedia('(min-width: 651px)');

// 添加点击事件监听器
for (var i = 0; i < supportButtons.length; i++) {
    supportButtons[i].addEventListener('click', function() {
        // 在点击按钮时打开链接
        window.open('https://afdian.net/a/CarriStudio', '_blank');
    });
}
// 响应移动端菜单按钮
function toggleMobileMenu() {
    if (mobileMenuBar.style.display === 'none' || !mobileMenuBar.style.display) {
        mobileMenuBar.style.display = 'block';
        mobileMenuBar.classList.toggle('active');
    } else {
        mobileMenuBar.style.display = 'none';
        mobileMenuBar.classList.remove('active');
    }
}
// 优化切换时不会自动隐藏移动端菜单栏的问题
mediaQuery.addEventListener('change', function(mq) {
    if (mq.matches) {
        // 大于650px时执行的操作
        mobileMenuBar.style.display = 'none';
        mobileMenuBar.classList.remove('active');
    }
});