function handleCategoryChange() {
    try{
    const selectedCategory = document.getElementById("search").value;
    console.log(selectedCategory);
    return selectedCategory;
    }
    catch{
    return "festive";
    }
}
function changehtml(){ 
    let category=handleCategoryChange();
    if (category=='title2'){
        window.location.replace('fiction.html');}
    else if (category=='title1'){
        window.location.replace('festive.html');}
    else if (category=='title3'){
            window.location.replace('nonfiction.html');}
    else if (category=='title4'){
            window.location.replace('history.html');}
    else if (category=='title5'){
            window.location.replace('horror.html');}
    else if (category=='all'){
            window.location.replace('All.html');}    
}