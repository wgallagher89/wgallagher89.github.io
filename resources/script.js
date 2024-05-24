let btn = document.getElementById('light-dark');

function toggleLightDark() {
    if (document.body.style.backgroundColor !== 'darkgray') {
        document.body.style.backgroundColor = 'darkgray';
        document.body.style.color = 'white';
        const nodeList = document.querySelectorAll('a');
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = 'white';
            nodeList[i].style.setProperty('--a-color','dodgerblue');
        }
        document.querySelector('li').style.color = 'white';
        document.getElementById('header').style.backgroundColor = 'darkgray';
        document.getElementById('header').style.color = 'white';
        document.getElementById('h1').style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        const nodeList = document.querySelectorAll('a');
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = 'black';
            nodeList[i].style.setProperty('--a-color','dodgerblue');
        }
        document.querySelector('li').style.color = 'black';
        document.getElementById('header').style.backgroundColor = 'white';
        document.getElementById('header').style.color = 'white';
        document.getElementById('h1').style.color = 'black';
    }
};

btn.addEventListener('click', toggleLightDark);