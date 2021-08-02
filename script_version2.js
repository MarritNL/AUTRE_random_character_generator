//front end - invoer

// back end
    // hair colour
const getRandomHairColour = function (lowestNumber, highestNumber) {  
    const randomHairColour = Math.floor(Math.random() * (highestNumber - lowestNumber+1) + lowestNumber);
    return randomHairColour;
  };
 
const randomHairColour = getRandomHairColour(1,100);

  console.log (randomHairColour);
  let yourRandomHairColour = parseInt(randomHairColour);
  console.log (yourRandomHairColour);

  let hairColour = function () {
    if (yourRandomHairColour <= 3) {
        return 'hair colour: bright/ neon coloured'; // 3%
    } if (yourRandomHairColour > 3 && yourRandomHairColour <=70) {
        return 'hair colour: darkbrown/ black'; // 67 %
    } if (yourRandomHairColour > 70 && yourRandomHairColour <= 81) {
        return 'hair colour: brown;' // 11%
    } if (yourRandomHairColour > 81 && yourRandomHairColour <= 84) {
        return 'hair colour: blonde'; // 3%
    } if (yourRandomHairColour > 84 && yourRandomHairColour <=86){
        return 'hair colour: red'; //2 %
    } else {
        return 'hair colour: grey'
    }
  };
  console.log (hairColour ());

  // back end
    // eye colour

    const getRandomEyeColour = function (lowestNumber, highestNumber) {  
        const randomEyeColour = Math.floor(Math.random() * (highestNumber - lowestNumber+1) + lowestNumber);
        return randomEyeColour;
      };
     
    const randomEyeColour = getRandomEyeColour(1,100);
    
      console.log (randomEyeColour);
      let yourRandomEyeColour = parseInt(randomEyeColour);
      console.log (yourRandomEyeColour);
    
      let eyeColour = function () {
        if (yourRandomEyeColour <= 74) {
            return 'eye colour: brown'; //74%
        } if (yourRandomHairColour > 74 && yourRandomHairColour <= 84) {
            return 'eye colour: blue;' //10%
        } if (yourRandomHairColour > 84 && yourRandomHairColour <= 89) {
            return 'eye colour: hazel'; //5%
        } if (yourRandomHairColour > 89 && yourRandomHairColour <= 94){
            return 'eye colour: amber'; //5%
        } if (yourRandomHairColour > 94 && yourRandomHairColour <=97){
            return 'eye colour: grey'; //3%
        } if (yourRandomHairColour > 97 && yourRandomHairColour <=99){
            return 'eye colour: green'; //2%
        } else {
            return 'eye colour: red/ violet/ heterochromia'
        }
      };
      console.log (eyeColour ());

  // front-end - output