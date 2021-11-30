import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

// minimum positive prediction confidence
// If this isn't passed, the default is 0.85
const threshold: number = 0.5;

toxicity.load(threshold, []).then((model) => {
  const sentences = ["You are a butterfly!", "I like turtles", "Shut up!"];

  model.classify(sentences).then((predictions) => {
    // semi-pretty-print results
    console.log(JSON.stringify(predictions, null, 2));
  });
});


// GENERATED OUTPUT in Browser's Inspect Dbg: Console Log
// 
//[
//  {
//    "label": "identity_attack",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.9983431100845337,
//          "1": 0.001656890264712274
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9998759031295776,
//          "1": 0.00012408850307110697
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9960916638374329,
//          "1": 0.003908349666744471
//        },
//        "match": false
//      }
//    ]
//  },
//  {
//    "label": "insult",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.05905446037650108,
//          "1": 0.9409454464912415
//        },
//        "match": true
//      },
//      {
//        "probabilities": {
//          "0": 0.9987999200820923,
//          "1": 0.0012000136775895953
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.029087824746966362,
//          "1": 0.9709121584892273
//        },
//        "match": true
//      }
//    ]
//  },
//  {
//    "label": "obscene",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.997502863407135,
//          "1": 0.0024971719831228256
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9998601675033569,
//          "1": 0.0001398384920321405
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.957773745059967,
//          "1": 0.04222621023654938
//        },
//        "match": false
//      }
//    ]
//  },
//  {
//    "label": "severe_toxicity",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.9999977350234985,
//          "1": 0.0000022823835479357513
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9999997615814209,
//          "1": 2.1062555788375903e-7
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9999856948852539,
//          "1": 0.000014340303096105345
//        },
//        "match": false
//      }
//    ]
//  },
//  {
//    "label": "sexual_explicit",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.999164342880249,
//          "1": 0.0008357226033695042
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9997934103012085,
//          "1": 0.00020651878730859607
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9969184398651123,
//          "1": 0.0030815345235168934
//        },
//        "match": false
//      }
//    ]
//  },
//  {
//    "label": "threat",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.9986778497695923,
//          "1": 0.001322155469097197
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9995180368423462,
//          "1": 0.0004819300083909184
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.9976941347122192,
//          "1": 0.00230584479868412
//        },
//        "match": false
//      }
//    ]
//  },
//  {
//    "label": "toxicity",
//    "results": [
//      {
//        "probabilities": {
//          "0": 0.0519588328897953,
//          "1": 0.9480412006378174
//        },
//        "match": true
//      },
//      {
//        "probabilities": {
//          "0": 0.9966813325881958,
//          "1": 0.0033186774235218763
//        },
//        "match": false
//      },
//      {
//        "probabilities": {
//          "0": 0.020161578431725502,
//          "1": 0.9798383712768555
//        },
//        "match": true
//      }
//    ]
//  }
//]
