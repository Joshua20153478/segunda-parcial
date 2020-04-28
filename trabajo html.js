class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}

class Cuadrado{
    constructor(base){
        this.base=base;
    }
    area(){
        return this.base*this.base;
    }
}
class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

const btnRec=document.getElementById("btnRectangulo");

btnRec.addEventListener('click',()=>{
    let altura=document.getElementById("Altura").value;
    let base=document.getElementById("Base").value;
    base=parseInt(base);
    altura=parseInt(altura);

    let rect1=new Rectangulo (base,altura);

    let divRes=document.getElementById("resultados");


divRes.innerHTML="<p>Rectangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});

const btnTriang=document.getElementById("btnTriangulo");

btnTriang.addEventListener('click',()=>{
    let altura=document.getElementById("Altura").value;
    let base=document.getElementById("Base").value;
    base=parseInt(base);
    altura=parseInt(altura);

    let triang1=new Triangulo (base,altura);

let divRes=document.getElementById("resultados");


divRes.innerHTML="<p>Triangulo con base " + triang1.base + " y altura " + triang1.altura + "</p>";
divRes.innerHTML+="<p>con un area de " + triang1.area() + "</p>";
});

const btnCua=document.getElementById("btnCuadrado");

btnCua.addEventListener('click',()=>{
    let base=document.getElementById("Base").value;
    base=parseInt(base);

    let cuad1=new Cuadrado (base);

    let divRes=document.getElementById("resultados");

divRes.innerHTML="<p>Cuadrado con base " + cuad1.base;
divRes.innerHTML+="<p>con un area de " + cuad1.area() + "</p>";


});

