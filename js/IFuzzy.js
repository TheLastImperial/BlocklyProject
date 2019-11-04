var Fuzzy = {
  easy: {
    crisp_input: [1, 5, 0],
    variables_input: [
      {
        name: "Numero de intentos",
        setsName: ["Bueno", "Medio", "Malo"],
        sets: [
          [0,0,1,2],
          [2,3,3,4],
          [3,5,10,10]
        ]
      },
      {
        name: "Tiempo",
        setsName: ["Rapido", "Normal", "lento"],
        sets: [
          [0,0,15,25],
          [23,25,25,50],
          [40,70,100,100]
        ]
      },
      {
        name: "Ayuda",
        setsName: ["Buena", "Media", "Mala"],
        sets: [
          [0,0,1,1],
          [1,5,5,7],
          [6,8,10,10]
        ]
      }
    ],
    variable_output: {
      name: "Puntacion",
      setsName: ["Mala calificacion", "Calificacion regular", "Buena calificacion"],
      sets: [
        [0,0,2,4],
        [3,5,5,9],
        [9,10,10,10]
      ]
    },
    inferences: [
      [2, 1, 0],
      [2, 1, 0],
      [2, 2, 1]
    ]
  },
  medium: {
    crisp_input: [1, 5, 0],
    variables_input: [
      {
        name: "Numero de intentos",
        setsName: ["Bueno", "Medio", "Malo"],
        sets: [
          [0,0,1,2],
          [2,3,3,4],
          [3,5,10,10]
        ]
      },
      {
        name: "Tiempo",
        setsName: ["Rapido", "Normal", "lento"],
        sets: [
          [0,0,15,70],
          [60,80,100,100],
          [90,110,160,160]
        ]
      },
      {
        name: "Ayuda",
        setsName: ["Buena", "Media", "Mala"],
        sets: [
          [0,0,1,1],
          [1,5,5,7],
          [6,8,10,10]
        ]
      }
    ],
    variable_output: {
      name: "Puntacion",
      setsName: ["Mala calificacion", "Calificacion regular", "Buena calificacion"],
      sets: [
        [0,0,2,4],
        [3,5,5,9],
        [9,10,10,10]
      ]
    },
    inferences: [
      [2, 1, 0],
      [2, 1, 0],
      [2, 2, 1]
    ]
  },
  calculate: function(obj, crisp){
    obj.crisp_input = crisp;
    return new FuzzyLogic().getResult(obj);
  }
}