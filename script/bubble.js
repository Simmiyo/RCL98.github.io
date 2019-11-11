var v=['a1','b1','c1','d1','e1','f1','g1','h1','j1','k1','l1','m1','n1','o1','p1','q1','r1','s1','t1','u1'];
var v1=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u'];
var x=[24,32,5,26,29,27,121,51,30,41,2004,342,10,24,33,15,59,76,1,241];
var i=0,j=0,aux,ok=true,abc=true,bca=false,k=1;
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

 function highlight(t,h){
	if(h==0){
		if(i>0)document.getElementById(v1[t-1]).style.backgroundColor="#F5F5F5";
		document.getElementById(v1[t]).style.backgroundColor='yellow';}
	else if(h==1){
		document.getElementById(v1[t]).style.backgroundColor='red';}
	else if(h==2){
		document.getElementById(v1[t]).style.backgroundColor="#F5F5F5";}
	else if(h==3){
		document.getElementById(v1[t]).style.backgroundColor='green';}
}
	 
function Next(){
	if(j==0){
		document.getElementById("0").style.backgroundColor = 'yellow';
		document.getElementById("8").style.backgroundColor = 'lightgreen';
	}
	else if(j==1){
		document.getElementById("0").style.backgroundColor = 'lightgreen';
		document.getElementById("1").style.backgroundColor = 'yellow';
		ok=true;
	}
	else if(j==2 && i<n-k){
		document.getElementById("1").style.backgroundColor = 'lightgreen';
		document.getElementById("3").style.backgroundColor = 'lightgreen';	
		document.getElementById("7").style.backgroundColor = 'lightgreen';		 
        document.getElementById("2").style.backgroundColor = 'yellow';
		highlight(i,0);
		abc=true;
	}
	else if(j==2 && i==n-k){
		document.getElementById("3").style.backgroundColor = 'lightgreen';	
		document.getElementById("2").style.backgroundColor = 'yellow';
        document.getElementById("7").style.backgroundColor = 'lightgreen';	
		highlight(i-1,2);highlight(i,3); abc=false;i=0;j=7;
	}
	else if(j==3 && x[i]>x[i+1] && abc==true){
		document.getElementById("2").style.backgroundColor = 'lightgreen';
		document.getElementById("3").style.backgroundColor = 'yellow';
		bca=true; highlight(i+1,1);
	}
	else if(j==3 && x[i]<=x[i+1] && abc==true){		
		highlight(i+1,1);i+=1;j=1;t1=true;	 
		document.getElementById("2").style.backgroundColor = 'lightgreen';
		document.getElementById("3").style.backgroundColor = 'yellow';
	}		
	else if(j==4 && bca){
		document.getElementById("3").style.backgroundColor = 'lightgreen';	
        document.getElementById("4").style.backgroundColor = 'yellow';
		aux = x[i+1];
	}
	else if(j==5 && bca){
		document.getElementById("4").style.backgroundColor = 'lightgreen';	
        document.getElementById("5").style.backgroundColor = 'yellow';
		x[i+1] = x[i];
	}
	else if(j==6 && bca){
		document.getElementById("5").style.backgroundColor = 'lightgreen';	
		document.getElementById("6").style.backgroundColor = 'yellow';
		x[i] = aux;
	}	
	else if(j==7 && bca){
		document.getElementById("6").style.backgroundColor = 'lightgreen';	
        document.getElementById("7").style.backgroundColor = 'yellow';
		ok=false;bca=false;i+=1;
		j=1;
	}				
	if(j==8 && ok==true){
		document.getElementById("3").style.backgroundColor = 'lightgreen';
		document.getElementById("2").style.backgroundColor = 'lightgreen';
		document.getElementById("8").style.backgroundColor = 'yellow';highlight(0,3);
		document.getElementById("nextBtn").disabled = true;
	    for(l = 0; l < n-1; l++)
			document.getElementById(v1[l]).style.backgroundColor='green';
		document.getElementById("sort").innerHTML = 'Algoritmul e gata!';
	}
    else if(j==8 && !ok){j=-1;k+=1;
	document.getElementById("3").style.backgroundColor = 'lightgreen';
    document.getElementById("2").style.backgroundColor = 'lightgreen';
	document.getElementById("8").style.backgroundColor = 'yellow';}
	j+=1;
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

function Stop() {
	document.getElementById("quickSort").disabled = false;
	document.getElementById("slowSort").disabled = false;
    clearInterval(myVar);
	var sound = document.getElementById("audio");
    sound.play();
}