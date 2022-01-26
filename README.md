# WALLET WORDS GENERATOR

A 12 words generator for crypto and  other wallets 

### Overview
1. const paragraph : a paragraph of words
2. Const walletWordsArr : split words in paragraph and assign to walletWordsArr
3. Create a function walletWordsChooser(arr) that takes the walletWordsArr array as parameter
    * Declare and empty arr: chosenWalletWords
    * Declare a randomize equals to the length of the arr array
    * Use chosenWalletWords(arr[randomize])
    * While  chosenWalletWords.length < 12
    * map chosenWalletWords to finalWords to filter words ending in unwanted characters
    * Return finalWords.join(“ ”) to bring it all together
4. Call and log walletWordsChooser() with the  walletWordsArr array ie: walletWordsChooser(walletWordsArr)
