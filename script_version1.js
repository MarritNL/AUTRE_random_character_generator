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
    if (yourRandomHairColour <= 70) {
        return 'hair colour: darkbrown/ black';
    } if (yourRandomHairColour > 70 && yourRandomHairColour <= 81) {
        return 'hair colour: brown;'
    } if (yourRandomHairColour > 81 && yourRandomHairColour <= 84) {
        return 'blonde';
    } if (yourRandomHairColour > 84 && yourRandomHairColour <=86){
        return 'hair colour: red';
    } else {
        return 'hair colour: grey'
    }
  };
  console.log (hairColour ());

  // back end
    // eye colour

    const getRandomHairColour = function (lowestNumber, highestNumber) {  
        const randomHairColour = Math.floor(Math.random() * (highestNumber - lowestNumber+1) + lowestNumber);
        return randomHairColour;
      };
     
    const randomHairColour = getRandomHairColour(1,100);
    
      console.log (randomHairColour);
      let yourRandomHairColour = parseInt(randomHairColour);
      console.log (yourRandomHairColour);
    
      let hairColour = function () {
        if (yourRandomHairColour <= 70) {
            return 'hair colour: darkbrown/ black';
        } if (yourRandomHairColour > 70 && yourRandomHairColour <= 81) {
            return 'hair colour: brown;'
        } if (yourRandomHairColour > 81 && yourRandomHairColour <= 84) {
            return 'blonde';
        } if (yourRandomHairColour > 84 && yourRandomHairColour <=86){
            return 'hair colour: red';
        } else {
            return 'hair colour: grey'
        }
      };
      console.log (hairColour ());

  // front-end - output