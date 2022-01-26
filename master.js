const paragraph = "Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs The first option the tool allows you to adjust is the number of random words to be generated. You can choose as many or as few as you'd like. You also have the option of choosing words that only begin with a certain letter, only end with a certain letter or only begin and end with certain letters. If you leave these blank, the randomized words that appear will be from the complete list."

//Get all words into array
const walletWordsArr = paragraph.split(" ");

// Create a function walletWordsChooser(arr) that takes the walletWordsArr array as parameter
function walletWordsChooser(arr){

   const chosenWalletWords = [];

   for (i=0;i<12; i++){
     const randomize = Math.floor(Math.random() * arr.length)

     chosenWalletWords.push(walletWordsArr[randomize])
   }

// Remove characters at end of word such as periods, commas , exclamation marks or question marks 
   const finalWords = chosenWalletWords.map(x=>{
        if( x[x.length-1] === "." 
         || x[x.length-1] === ","   
         || x[x.length-1] === "!" 
         || x[x.length-1] === "?" ){
           const tempWord = Array.from(x)
           tempWord.pop();
           return tempWord.join("");
         }else{
              return x
            }
    
   })
    
 //return final.join(" | ");
 return finalWords.join(" ");

}

console.log(`BELOW IS YOUR 12 WORDS WALLET SECRET`)

console.log(walletWordsChooser(walletWordsArr))