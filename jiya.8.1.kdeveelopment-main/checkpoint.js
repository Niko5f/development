// No cambies los nombres de las funciones.

function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
  print('filtrar el contenido de una lista:')
  
  numeros([1, 5, 2, 9, 6, 4])
  
  print('contenido de la variable `numeros`:', numeros)
  print('cantidad de elementos en la lista `numeros`:', len(numeros))
  
  def extraer_impares(lista):
      impares = []
  
      for n in lista:
          if n % 2 != 0:
              impares.append(n)
  
      return impares
  
  print()
  
  resultado = extraer_impares(numeros)
  
  print('contenido de la variable `resultado`:', resultado)
  print('cantidad de elementos en la lista `resultado`:', len(resultado))
}

function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca:
def_palabra_mas_larga(frase):
    palabras = frase.split()
  
    mas_larga = palabras[0]
  
    for i in range(1, len(palabras)):
        if len(mas_larga) < len(palabras[i]):
            mas_larga = palabras[i]
  
  return mas_larga
  
  frase1 = 'Ayer fui a pasear a una plaza'
  print(palabra_mas_larga(frase1))
  
  frase2 = 'Me gusta mucho javascript'
  print(palabra_mas_larga(frase2))
}

function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:
  var usuarios = [
       {
         nombre: 'toni',
         online: true
       },
       {
         nombre: 'emi',
         online: true
       },
       {
         nombre: 'agus',
         online: false
       }
   ];
   
   function estaOffline(usuarios, nombre) {
        let online = null;

            usuarios.forEach(function (o) {
                if (o.nombre == nombre) {
                    online = !o.online; //Regresas lo contrario a online
                    return false;
                }
            });

            return online;
   }
   
   document.write("El usuario toni esta offLine " + estaOffline(usuarios, "toni"));
   document.write("</br>")
    document.write("El usuario emi esta offLine " + estaOffline(usuarios, "emi"));
    document.write("</br>")
     document.write("El usuario agus esta offLine " + estaOffline(usuarios, "agus"));
}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
let persona2 = ['comer', 'dormir', 'futbol'];
let coincidencias = [];

persona1.forEach(comparar);

function comparar(item) {
  if(persona2.includes(item) && (coincidencias.includes(item) === false)){
  coincidencias.push(item);
  };
}

console.log(coincidencias);
}

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
function buscaDestruye(arr,num){
  return arr.filter(function(el) {
      return el !== num;
  })
}

let arreglo = [1,2,3,4,5,2,3,4];
let numero = 2;

let result = buscaDestruye(arreglo,numero);

console.log(result);
}

function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca:
var vehiculosPropiedades = [];
  for (var i = 0; i < vehiculos.length; i++) {
    //Valid< que no exista el vehiculo en el arreglo para dejar unicos
    if(!vehiculosPropiedades[vehiculos[i]]){
      vehiculosPropiedades.push(vehiculos[i]); //Si no existe lo inserta
     }
  }
  var propiedadValor = {};
  //Recorre los vehiculos distintos
  for (var j = 0; j < vehiculosPropiedades.length; j++) {
    var cantidad = 0;
    for (var i = 0; i < vehiculos.length; i++) {
      //Vuelve a recorrer el array principal para sacar la cantidad de vehuculos que hay
      if(vehiculos[i] === vehiculosPropiedades[j]){
        cantidad++;
      }
    }
    //No regresara un array, sera un objeto, por lo que le generamos una propiedad y la cantidad de Items
    propiedadValor[vehiculosPropiedades[j]] = cantidad;
  }
  return propiedadValor;
}
var suma = sumarElTipo(['auto', 'moto', 'auto']);
console.log(suma);
}

// =======================================================================

function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

          // Tu código aca:
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
      }

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.

        // Tu código aca:
       this.mascotas.push('perro', 'gato');
      }

      getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2

          // Tu código aca:
       return this.mascotas.length;
      }

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.

          // Tu código aca:
      this.libros.push({
        nombre: book,
        autor: autor
      });
      }

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:
 return this.libros.map(item => item.nombre);
  }
}

const emprendedor = Emprendedor [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]

console.log(emprendedor.getNameBooks());
      }

      getFullName() {
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:
     getFullName() {
       this.nombre = "Elon";
       this.apellido = "Musk";
       return `El nombre del emprendedor es ${this.nombre} ${this.apellido}`;
   }
 }
  return Emprendedor;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
  // que recibe una funcion callback , que se ejecuta por cada elemento del array
  // mapear los elementos de ese array segun la funcion callback
  // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  // NO USAR LA FUNCION MAP DE ARRAYS.
  // ej:
  // var numeros = [1, 2, 3, 4];
  // numeros.mapear(function(numero) {
  //   return numero + 1;
  // }) devuelve [2, 3, 4, 5]

  // Tu código aca:
 var newArray = []
  /*
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }
  */
  
  this.forEach(element => newArray.push(callback(element)))
  
  return newArray

} 
  
  
 var arr = [1, 2, 3, 4];
 
 var algo = arr.mapear(function(numero) {
     return numero + 1;
})

console.log(algo)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  sumaTodosImpares,
  buscaDestruye,
  actividadesEnComun,
  estaOffline,
  stringMasLarga,
  sumarElTipo,
  crearClaseEmprendedor,
  mapear
};
