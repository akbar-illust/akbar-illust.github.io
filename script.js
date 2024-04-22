document.getElementById('sidebarCollapse').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('show');
    document.getElementById('overlay').classList.toggle('show');
    document.body.classList.toggle('sidebar-active');
});

document.getElementById('sidebarClose').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.body.classList.remove('sidebar-active');
});

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.body.classList.remove('sidebar-active');
});