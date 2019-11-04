var Exercises = [
  {
    toolboxFile: "xmls/toolboxHW.xml",
    startBlocksFile: null,
    toolboxId: "toolboxHW",
    startBlocksId: null,
    question: "Imprime \"Hola mundo\" en consola",
    reply: [
      "Hola mundo"
    ],
    helps: [
      "En la seccion de texto debes utilizar el bloque de \"imprimir\" y despues agregar el texto \"Hola mundo\"",
      "Valida que tu texto es exactamente igual a \"Hola mundo\""
    ],
    preview: [
      "Lo primero que vamos a aprender es el clasico \"Hola Mundo\"",
      "Para esto utilizaremos el comando \"imprimir\" en blockly y agregaremos el texto \"Hola Mundo\""
    ],
    blocks: ["text_print"],
    level: "easy"
  },
  {
    toolboxFile: "xmls/toolboxIf.xml",
    startBlocksFile: null,
    toolboxId: "toolboxIf",
    startBlocksId: null,
    question: "Escribe una condicion verdadera que imprima \"Hola mundo IF\". Usando la condicion \"if\" en Blockly",
    reply: [
      "Hola mundo IF"
    ],
    helps: [
      "No olvides utilizar la condicion \"if\"",
      "Asegurate de escribir exactamente igual texto \"Hola mundo IF\""
    ],
    preview: [
      "Ahora vamos a hablar sobre la condicion \"if\"",
      "La condicion \"if\" nos sirve para ejecutar una parte de codigo siempre y cuando se cumpla cierta condicion que nosotros coloquemos",
      "En Python la condicion booleana \"True\" representa verdadero y \"False\" representa falso"
    ],
    blocks: ["controls_if"],
    level: "easy"
  },
  {
    toolboxFile: "xmls/toolboxFor.xml",
    startBlocksFile: null,
    toolboxId: "toolboxFor",
    startBlocksId: null,
    question: "Escribe un ciclo \"for\" que imprima 5 veces la palabra \"Hola\"",
    reply: [
      "Hola", "Hola", "Hola", "Hola", "Hola"
    ],
    helps: [
      "No olvides utilizar la condicion \"for\"",
      "Asegurate de escribir exactamente igual texto del 1 al 5"
    ],
    preview: [
      "Ahora vamos a hablar sobre los ciclos en especifico el ciclo \"for\"",
      "El ciclo for nos sirve para ejecutar una instruccion cierta cantidad de veces establecida."
    ],
    blocks: ["controls_repeat_ext"],
    level: "easy"
  },
  {
    toolboxFile: "xmls/toolboxVars.xml",
    startBlocksFile: null,
    toolboxId: "toolboxVars",
    startBlocksId: null,
    question: "Escribe una variable String con el texto 'Valor inicial' y cambia su valor por 'Valor final'. Imprime estos dos valores.",
    reply: [
      "Valor inicial", "Valor final"
    ],
    helps: [
      "Asegurate de que los textos sean identicos a los solicitados.",
      "Asegurate de crear una variable para este ejercicio.",
      "Asegurate de cambiar el valor de la misma variable que inicializaste."
    ],
    preview: [
      "Vamos a ver un poco sobre variables",
      "En Python una variable es aquella que utilizamos para guardar valores los cuales utilizamos para realizar ciertas tareas.",
      "Estas variables pueden tomar distintos valores en tiempo de ejecucion."
    ],
    blocks: ["text_print", "variables_set", "variables_get"],
    level: "medium"
  },
  {
    toolboxFile: "xmls/toolboxIfFor.xml",
    startBlocksFile: null,
    toolboxId: "toolboxIfFor",
    startBlocksId: null,
    question: "Escribe un ciclo for del 1 al 10 he imprime todos los numeros que sean divisibles entre 2",
    reply: [
      "2", "4", "6", "8", "10"
    ],
    helps: [
      "No olvides utilizar la condicion \"for\"",
      "No olvides utilizar la condicion \"if\"",
      "Asegurate de solo imprimir los numeros divisibles entre 2"
    ],
    preview: [
      "Ahora vamos a convinar las 2 instrucciones que hemos aprendido",
      "Utilizaremos la intruccion matematica 'modulo' para obtener el reciduo de una division.",
      "Esto se hace utilizando el simbolo de '%'."
    ],
    blocks: ["controls_for", "controls_if", "math_modulo"],
    level: "medium"
  }
]
