//Her skal du skrive din typescriptkode
let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

if (myElement.hasAttribute("class"))
{
    console.log("element has class attribute")

    if (myElement.getAttribute("class") =="usundt")
    {
        myElement.setAttribute("class", "sundt");
    }
}
let myList: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("usundt");
for (var i=0;i<myList.length;i++)
{

    myList[i].innerHTML="Appelsin";
}
console.log(myList);

let myTag : HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>> document.getElementsByTagName("li");
for (var i=0;i<myTag.length;i++)
{
     myTag[i].innerHTML = "banana"
}

