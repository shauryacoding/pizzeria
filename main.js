menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Veg supreme Pizza",
                   "Pepperoni Pizza",
                   "Hawain Pizza",
                   "Deluxe veggie Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i = 0;i<menu_list_array;i++){
    htmldata=htmldata '<li>' +menu_list_array[i]+ '<li>' 
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu")
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}
