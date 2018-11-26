const AiRole = 'O';
function newArr(arr) {
    arr.forEach(function(item, i, arr) {
        if(item === null) {
            arr[i] = i;
        }
    });
    return arr;
}

function getBestStep(origBoard){

    // human
    let huPlayer = "X";
    // ai
    let aiPlayer = AiRole;

    //keeps count of function calls
    let fc = 0;

// finding the ultimate play on the game that favors the computer
    let bestSpot = minimax(origBoard, aiPlayer);

//loging the results
//     console.log("my board: " + origBoard);
//     console.log("index: " + bestSpot.index);
//     console.log("function calls: " + fc);

// the main minimax function
    function minimax(newBoard, player){
        //add one to function calls
        fc++;

        //available spots
        let availSpots = emptyIndexies(newBoard);

        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (winning(newBoard, huPlayer)){
            return {score:-10};
        }
        else if (winning(newBoard, aiPlayer)){
            return {score:10};
        }
        else if (availSpots.length === 0){
            return {score:0};
        }

// an array to collect all the objects
        let moves = [];

        // loop through available spots
        for (let i = 0; i < availSpots.length; i++){
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
            let move = {};
            move.index = newBoard[availSpots[i]];

            // set the empty spot to the current player
            newBoard[availSpots[i]] = player;

            //if collect the score resulted from calling minimax on the opponent of the current player
            if (player == aiPlayer){
                let result = minimax(newBoard, huPlayer);
                move.score = result.score;
            }
            else{
                let result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }

            //reset the spot to empty
            newBoard[availSpots[i]] = move.index;

            // push the object to the array
            moves.push(move);
        }

// if it is the computer's turn loop over the moves and choose the move with the highest score
        let bestMove;
        if(player === aiPlayer){
            let bestScore = -10000;
            for(let i = 0; i < moves.length; i++){
                if(moves[i].score > bestScore){
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }else{

// else loop over the moves and choose the move with the lowest score
            let bestScore = 10000;
            for(let i = 0; i < moves.length; i++){
                if(moves[i].score < bestScore){
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

// return the chosen move (object) from the array to the higher depth
        return moves[bestMove];
    }

// returns the available spots on the board
    function emptyIndexies(board){
        return  board.filter(s => s != "O" && s != "X");
    }

// winning combinations using the board indexies for instace the first win could be 3 xes in a row
    function winning(board, player){
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        } else {
            return false;
        }

    }

    index = bestSpot.index;
    return bestSpot.index;
}

function addToHistory(arr, aiStep) {
    arr.forEach(function(item, i, arr) {
        if(typeof item === 'number' ) {
            arr[i] = null;
        }
        if(i === aiStep) {
            arr[i] = AiRole;
        }
    });
    return arr;

};

exports.gameProcessor = (req, res) => {

    let arr = req.body.data.squares;
    let origBoard = newArr (arr);
    let aiStep = getBestStep(origBoard);
    let newHistory = addToHistory(arr, aiStep);

     res.json({
         newHistory: newHistory,
         indexAi: aiStep
     });

};




