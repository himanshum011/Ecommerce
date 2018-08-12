


var k =0;
var total_price = 0;


function myfunction(obj){
var image = obj.parentElement.parentElement.firstChild.nextSibling.getAttribute('src');
var desc = obj.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerText;
var spec = obj.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText;
var price=Number(obj.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText);

addtocart(image,desc,spec,price);
}

function removefromcart(idname,price){
 var child=document.getElementById(idname);
var parent= document.getElementById('kart');
 parent.removeChild(child);
 total_price =total_price - price;

}

function addtocart(image,desc,spec,price){
 
  var id = 'rem_'+k;
  total_price= total_price+ price;
    var imag=image;
	var div=document.createElement('div');
	div.setAttribute('id',id);

	var div1 = document.createElement('img');
	div1.setAttribute('src',image);
	div1.setAttribute('style','width:100%')
	
	var div2 = document.createElement('div');
	div2.innerHTML = '<h2 class="text-center">'+ desc + '</h2>';
	var div3 = document.createElement('div');
	div3.innerHTML = "Price : "+ price ;
	var div4 = document.createElement('div');
	div4.innerHTML = "<p class='text-center' style='border:1px solid black'> Total Price :"+ total_price+ "</p>";


	var div5 = document.createElement('div');
	div5.innerHTML = '<button id='+id + "'"+ 'class="btn btn-danger text-center">Remove</button><br/><br/>';
	div.appendChild(div1);
	div.appendChild(div2);
	div.appendChild(div3); 
	div.appendChild(div4);
	div.appendChild(div5);
	var parent = document.getElementById('kart');
	parent.appendChild(div);
	k++;

	document.getElementById(id).addEventListener('click',function(){
		removefromcart(id,price);
	})


}