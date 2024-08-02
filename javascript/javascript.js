var sub1,sub2,sub3,sub4,sub5,sub6,sub7,sub8;
function cal(){
    var m1=document.getElementById("m1").value;
    var m2=document.getElementById("m2").value;
    var m3=document.getElementById("m3").value;
    var m4=document.getElementById("m4").value;
    var m5=document.getElementById("m5").value;
    var m6=document.getElementById("m6").value;
    var m7=document.getElementById("m7").value;
    var m8=document.getElementById("m8").value;

    var p1=document.getElementById("p1").value;
    var p2=document.getElementById("p2").value;
    var p3=document.getElementById("p3").value;
    var p4=document.getElementById("p4").value;
    var p5=document.getElementById("p5").value;
    var p6=document.getElementById("p6").value;
    var p7=document.getElementById("p7").value;
    var p8=document.getElementById("p8").value;

    
    sub1=Number(m1)+Number(p1);
    sub2=Number(m2)+Number(p2);
    sub3=Number(m3)+Number(p3);
    sub4=Number(m4)+Number(p4);
    sub5=Number(m5)+Number(p5);
    sub6=Number(m6)+Number(p6);
    sub7=Number(m7)+Number(p7);
    sub8=Number(m8)+Number(p8);

    var total=sub1+sub2+sub3+sub4+sub5+sub6+sub7+sub8;

    document.getElementById("s1-total").innerText=sub1;
    document.getElementById("s2-total").innerText=sub2;
    document.getElementById("s3-total").innerText=sub3;
    document.getElementById("s4-total").innerText=sub4;
    document.getElementById("s5-total").innerText=sub5;
    document.getElementById("s6-total").innerText=sub6;
    document.getElementById("s7-total").innerText=sub7;
    document.getElementById("s8-total").innerText=sub8;

    document.getElementById("total").innerText=total;

    var per=total/8;
    document.getElementById("percentage").innerHTML=per+"%";

    if(per>90){
        document.getElementById("grade").innerHTML="A+";
    }
    else if(per>80 && per<=90){
        document.getElementById("grade").innerHTML="A";
    }
    else if(per>70 && per<=80){
        document.getElementById("grade").innerHTML="B+";
    }
    else if(per>60 && per<=70){
        document.getElementById("grade").innerHTML="B";
    }
    else if(per>50 && per<=60){
        document.getElementById("grade").innerHTML="C";
    }


    if((sub1>50) && (sub2>50) && (sub3>50) && (sub4>50) && (sub5>50) && (sub6>50) && (sub7>50) && (sub8>50)){
        document.getElementById("result").innerHTML="PASS";
    }

    else{
        document.getElementById("result").innerHTML="FAIL";
        document.getElementById("grade").innerHTML="RA";
    }
}

