const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const iconSearch = searchWrapper.querySelector(".icon");

inputBox.onkeyup = (e) =>{
    let userData = e.target.value;
    let emptyArray =[];
    if(userData)
    {
        emptyArray = suggestions.filter((data)=>{
        
           return   data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
             return data = '<li>'+ data + '</li>';
        });
        //console.log(emptyArray);
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        let alList = suggBox.querySelectorAll('li');
        for(let i =0 ; i< alList.length;i++)
        {
            alList[i].setAttribute("onclick","select(this)");
        }
    }
    else{
        searchWrapper.classList.remove('active');
    }
}

function select(element)
{
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove('active');

}
function showSuggestions(list)
{
    let listData;
    if(!list.length)
    {
         userValue = inputBox.value;
         listData = '<li>'+userValue+'</li>';
    }
    else
    {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
iconSearch.onclick = () =>
{
    let inputValue = inputBox.value;
    if(inputValue){
    let linkWord = "https://www.google.com/search?q=".concat( inputValue.split(" ").join('+'));
    //console.log(linkWord);
    location.replace(linkWord);
    }
}

