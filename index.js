const helloWorld = document.getElementById('hello-world');
const button = document.getElementById('btn');


button.addEventListener('click', function() {
    console.log('test button')
    helloWorld.textContent = `Hello World!`
})