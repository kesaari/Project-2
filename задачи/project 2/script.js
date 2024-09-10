const input = document.querySelector(".input");
const datalist = document.querySelector('datalist');
let reposStorage = {};


const debounce = (fn, delay) => {
    let timer;
    return function() {
      const fnCall = () => { fn.apply(this, arguments) } 
      clearTimeout(timer);
      timer = setTimeout(fnCall, delay);
    };
  };


input.addEventListener('keyup', debounce(searchRepos.bind(this), 500));
input.addEventListener('keydown', (event) => {
    if(event.keyCode === 46 || event.keyCode === 8) {
        datalist.innerHTML = ' ';
        Object.keys(reposStorage).forEach(key => delete reposStorage[key])
    }
});

async function searchRepos() {
    if(input.value) {
    return await fetch(`https://api.github.com/search/repositories?q=${input.value}&per_page=5`)
    .then(res => {
        if (res.ok) {
            res.json().then(res => {
                res.items.forEach(repos => {
                    createSuggest(repos.name)
                    reposStorage = Object.assign(repos);
                    getActive()
                });
                });
            }
        })
    } else {
        datalist.innerHTML = ' ';
    }
}

function createSuggest(name) {
let options = document.createElement('option');
options.textContent = `${name}`;
datalist.append(options);
}
