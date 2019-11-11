var v=['a1','b1','c1','d1','e1','f1','g1','h1','j1','k1','l1','m1','n1','o1','p1','q1','r1','s1','t1','u1'];
var v1=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u'];
var x=[24,32,5,26,29,27,121,51,30,41,2004,342,10,24,33,15,59,76,1,241];
var i=0,j,aux,min=1000,minPoz,h=0,l;
var p=n=x.length;


function read_table(){
	for(l=0;l<20;l++)
	{
		x[l] = Number(document.getElementById(v[l]).value);
		document.getElementById(v1[l]).innerHTML = x[l];
	}
	var sound = document.getElementById("audio");
	sound.play();
}

function write(){
	for(l=0;l<20;l++)
		document.getElementById(v1[l]).innerHTML = x[l] ;
}

function write_defaults(){
	for(l=0;l<20;l++)
		document.getElementById(v[l]).value = x[l] ;
}

window.onload = write_defaults;

function highlight(t,k){
	if(k==0){
		document.getElementById(v1[t]).style.backgroundColor='yellow';}
	else if(k==1){
		document.getElementById(v1[t]).style.backgroundColor='red';}
	else if(k==2){
		document.getElementById(v1[t]).style.backgroundColor='lightgreen';}
	else if(k==3){
		document.getElementById(v1[t]).style.backgroundColor='green';}
	else if(k==4&&t!=n){
		document.getElementById(v1[t]).style.backgroundColor='#F5F5F5';}
}

function Next(){
	if(h==0 && i<n-1){
		document.getElementById("9").style.backgroundColor = 'lightgreen'; 
		document.getElementById("0").style.backgroundColor = 'yellow';
		highlight(i,0);
	}
    if(h==0 && i==n-1){
		document.getElementById("9").style.backgroundColor = 'lightgreen'; 
		document.getElementById("0").style.backgroundColor = 'yellow';
		document.getElementById("nextBtn").disabled = true;
		document.getElementById("sort").innerHTML = 'Algoritmul e gata!';
		for(l = 0; l < n-1; l++)
			document.getElementById(v1[l]).style.backgroundColor='green';
	}
	else if(h==1){
		document.getElementById("0").style.backgroundColor = 'lightgreen'; 
		document.getElementById("1").style.backgroundColor = 'yellow';
		minPoz=i;
	}
	else if(h==2){
		document.getElementById("1").style.backgroundColor = 'lightgreen'; 
		document.getElementById("2").style.backgroundColor = 'yellow';
		min=x[i];j=i+1;
	}
	if(h==3 && j<n){
		document.getElementById("2").style.backgroundColor = 'lightgreen'; 
		document.getElementById("4").style.backgroundColor = 'lightgreen'; 
		document.getElementById("6").style.backgroundColor = 'lightgreen'; 
		document.getElementById("3").style.backgroundColor = 'yellow';
		highlight(j,1);
	}
    if(h==3 && j==n){
		document.getElementById("4").style.backgroundColor = 'lightgreen'; 
		document.getElementById("2").style.backgroundColor = 'lightgreen'; 
		document.getElementById("6").style.backgroundColor = 'lightgreen'; 
		document.getElementById("3").style.backgroundColor = 'yellow';
		h=6;
	}
	else if(h==4 && min>x[j])
	{
	    document.getElementById("3").style.backgroundColor = 'lightgreen';
		document.getElementById("4").style.backgroundColor = 'yellow';
		highlight(j,2);if(minPoz!=i)highlight(minPoz,4);
	}
	else if(h==4 && min<=x[j])
	{ 
		document.getElementById("3").style.backgroundColor = 'lightgreen';
		document.getElementById("4").style.backgroundColor = 'yellow';
		h=2;highlight(j,4);j+=1;
	}		
	 else if(h==5)
	 {
		document.getElementById("4").style.backgroundColor = 'lightgreen';	
		document.getElementById("5").style.backgroundColor = 'yellow';
		minPoz=j;
	}
	else if(h==6)
	{
		document.getElementById("5").style.backgroundColor = 'lightgreen';	
		document.getElementById("6").style.backgroundColor = 'yellow';
     	min=x[j];h=2;j+=1;
	}
	else if(h==7)
	{
			document.getElementById("3").style.backgroundColor = 'lightgreen';	
		    document.getElementById("7").style.backgroundColor = 'yellow';
			aux=x[i];
			}	
	else if(h==8)
	{
			document.getElementById("7").style.backgroundColor = 'lightgreen';	
            document.getElementById("8").style.backgroundColor = 'yellow';
			x[i]=x[minPoz];
	}
    else if(h==9)
	{
			document.getElementById("8").style.backgroundColor = 'lightgreen';	
            document.getElementById("9").style.backgroundColor = 'yellow';
			x[minPoz]=aux;h=-1;highlight(i,3);highlight(minPoz,4);
			i+=1;if(i==n-1)highlight(i,3);
	}				
	h+=1;
    write();	
}

var myVar;	
		
function QuickSorting(){
	document.getElementById("quickSort").disabled = true;
	document.getElementById("slowSort").disabled = true;
	myVar=setInterval(function () {document.getElementById("nextBtn").click();}, 10);
	var sound = document.getElementById("audio");
	sound.play();
}

function Sorting(){
	document.getElementById("quickSort").disabled = true;
	document.getElementById("slowSort").disabled = true;
	myVar=setInterval(function () {document.getElementById("nextBtn").click();}, 1000);
	var sound = document.getElementById("audio");
	sound.play();
}

function Stop(){
	document.getElementById("quickSort").disabled = false;
	document.getElementById("slowSort").disabled = false;
    clearInterval(myVar);
	var sound = document.getElementById("audio");
	sound.play();
}