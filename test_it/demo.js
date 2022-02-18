window.addEventListener('load', function () {
    var parentNode = document.getElementById('grid');
    var content = document.createElement('div'),
        upButton = document.createElement('button'),
        downButton = document.createElement('button'),
        grid = canvasDatagrid({
            parentNode: parentNode,
            data: [
                {col1: 'foo', col2: 0, col3: 'a'},
                {col1: 'bar', col2: 1, col3: 'b'},
                {col1: 'baz', col2: 2, col3: 'c'},
                {col1: 'foo', col2: 0, col3: 'a'},
                {col1: 'bar', col2: 1, col3: 'b'},
                {col1: 'baz', col2: 2, col3: 'c'},
                {col1: 'foo', col2: 0, col3: 'a'},
                {col1: 'bar', col2: 1, col3: 'b'},
                {col1: 'baz', col2: 2, col3: 'c'},
                {col1: 'foo', col2: 0, col3: 'a'},
                {col1: 'bar', col2: 1, col3: 'b'},
                {col1: 'baz', col2: 2, col3: 'c'}
            ]
        });
    grid.style.height = '250px';
    content.appendChild(upButton);
    content.appendChild(downButton);
    upButton.innerHTML = 'Scroll Up';
    downButton.innerHTML = 'Scroll Down';
    upButton.addEventListener('click', function (e) {
        grid.scrollTop -= 10;
        e.stopPropagation();
    });
    downButton.addEventListener('click', function (e) {
        grid.scrollTop += 10;
        e.stopPropagation();
    });
    content.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    grid.addEventListener('contextmenu', function (e) {
        e.items.splice(0, e.items.length);
        e.items.push({
            title: content
        });
    });
});