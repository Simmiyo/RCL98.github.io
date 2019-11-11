var v=['a1','b1','c1','d1','e1','f1','g1','h1','j1','k1','l1','m1','n1','o1','p1','q1','r1','s1','t1','u1'];
var v1=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u'];
var x=[24,32,5,26,29,27,121,51,30,41,2004,342,10,24,33,15,59,76,1,241];
var i=1,j,aux,h=0,l,temp,p;
var n=x.length;
p=n/2+1;

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
	else if(k==3){
		document.getElementById(v1[t]).style.backgroundColor='white';}
}

function Next(){
	if(h==0 && p>1){
		document.getElementById("1").style.backgroundColor = 'lightgreen'; 
		document.getElementById("0").style.backgroundColor = 'yellow';
		p-=1;i=p;
	}
    else if(h==0 && p==1){
		document.getElementById("1").style.backgroundColor = 'lightgreen'; 
		document.getElementById("0").style.backgroundColor = 'yellow';
		document.getElementById("nextBtn").disabled = true;
		document.getElementById("sort").innerHTML = 'Algoritmul e gata!';
		for(l = 0; l < n; l++)
			document.getElementById(v1[l]).style.backgroundColor='green';
	}
	else if(h==1 && i<n){
		document.getElementById("0").style.backgroundColor = 'lightgreen'; 
		document.getElementById("5").style.backgroundColor = 'lightgreen'; 
		document.getElementById("1").style.backgroundColor = 'yellow';
	}
	else if(h==1 && i>=n){
		document.getElementById("0").style.backgroundColor = 'lightgreen'; 
		document.getElementById("5").style.backgroundColor = 'lightgreen'; 
		document.getElementById("1").style.backgroundColor = 'yellow';
	    h=-1;
	}
	else if(h==2){
		document.getElementById("1").style.backgroundColor = 'lightgreen'; 
		document.getElementById("2").style.backgroundColor = 'yellow';
		temp=x[i];j=i;
	}
	else if(h==3 && j>=p){
	    document.getElementById("2").style.backgroundColor = 'lightgreen';
		document.getElementById("4").style.backgroundColor = 'lightgreen';
		document.getElementById("3").style.backgroundColor = 'yellow';
		highlight(j,0);
		highlight(j-p,1);
		if(j+p<n) highlight(j+p,3);
		if(x[j-p]<temp) h=4;
	}		
	else if(h==3 && j<p){
	    document.getElementById("2").style.backgroundColor = 'lightgreen';
		document.getElementById("4").style.backgroundColor = 'lightgreen';
		document.getElementById("3").style.backgroundColor = 'yellow';
		//highlight(j,3);
		h=4;
	}
	else if(h==4){ 
		document.getElementById("3").style.backgroundColor = 'lightgreen';
		document.getElementById("4").style.backgroundColor = 'yellow';
		x[j]=x[j-p];
		//highlight(j-p,3);
		j=j-p;h=2;
	}	
    else if(h==5){ 
		document.getElementById("3").style.backgroundColor = 'lightgreen';
		document.getElementById("5").style.backgroundColor = 'yellow';
		x[j]=temp;
		if(j-p>=0) highlight(j-p,3);
		if(j+p<n) highlight(j+p,3);
		highlight(j,3);
		h=0;i+=1;
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