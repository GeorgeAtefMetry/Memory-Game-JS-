// First Video
document.querySelector(".control-button span").onclick = function(){

    let yourName  = prompt("Type Your Name ");

    if (yourName == "" || yourName == null ){
        document.querySelector('.name span').innerHTML='unknown';
    }else{
        document.querySelector('.name span').innerHTML= yourName;

    }
    document.querySelector(".control-button").remove();
}
// End First Video

//  Seconde Video We Get Blocks all
let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);

// Make an array with keys
let orderRange = [...Array(blocks.length).keys()];
//  End Seconde Video We Get Blocks all

// console.log(orderRange);
shuffle(orderRange);  // Video 4
// console.log(orderRange);

// Third Video
// Make For Loop For Blocks
blocks.forEach((block,index) => {
    // Put index Number for each div of block
    block.style.order = orderRange[index];
 
    // Add Click Event Video 5
    block.addEventListener('click',function(){
        
    flipBlock(block);
 
    });
});

// Fourth Video ************
// Shuffle Function
function shuffle(array){
    // Setting vars
    let current = array.length,
        temp,
        random;

while(current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current)
     
    // Decrease Length By one 
    current--;

    // Save Current Element in Stash
    temp = array[current];

    // Current Element = Random Element
    array[current] = array[random]

    // Random Element = Get Element in Stash
    array[random] = temp;
    }
    return array;
 }


//  Fifth Video **********
// flip Block Function
function flipBlock(selectedBlock){
    selectedBlock.classList.add('is-flipped');
    
    // Collected  Flipped Cards Video 5
    let allFlippedBlocks = blocks.filter(flipBlock  => flipBlock.classList.contains('is-flipped'));
    //  if Thers Two Selected Blocks
        if(allFlippedBlocks.length === 2){

        // Sixth Video *************** 
        // Stop Clicking Function
            stopClicking();
        // Check Matched Block function
            checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
        }
        
}

// Sixth Video *************** 
// Stop Clicking Function
function stopClicking(){
    // Add Class No clicking on main Container
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        // Remove Class no-clicking
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

// Seventh Video ***********
// Check matched blocks 
function checkMatchedBlocks (firstBlock, secondBlock){
    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

  
                

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        

        
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML)  + 1;

        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped'); 

        }, duration);
    }
}

