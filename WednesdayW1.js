/*The function must move all capital letters to the front of a word, lowercase letters thereafter 
and lastly, numbers to the back. It should return a string with the reordered word.*/
function reorder (str){
    let upperCase = "";
    let lowerCase = "";
    let numbers ="";
    
    for (let i in str){
      if(((str[i])*0)==0){
        numbers=numbers+str[i]                      //check if digit
      }
      else if ((str[i]).toUpperCase() == str[i]){   //check if uppercase
        upperCase=upperCase + str[i];
      }
      else if ((str[i]).toLowerCase()== str[i]){     //check if lowercase
        lowerCase= lowerCase+str[i];
      }
    }
   return upperCase+lowerCase+numbers;
  }
  