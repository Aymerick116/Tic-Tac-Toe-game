$(document).ready(function() {
    var currentPlayer = "X";
    var moves = 0;
    var scoreX = 0;
    var scoreO = 0;




    function updateScore() {
        $("#score").text("Player X: " + scoreX + " | Player O: " + scoreO);
    }


    function checkWinner() {
        // Check rows
        for (var i = 0; i < 3; i++) {
            if ($("#board td[data-index='" + (i * 3) + "']").text() === currentPlayer &&
                $("#board td[data-index='" + (i * 3 + 1) + "']").text() === currentPlayer &&
                $("#board td[data-index='" + (i * 3 + 2) + "']").text() === currentPlayer) {
                return true;
            }
        }
    
        // Check columns
        for (var i = 0; i < 3; i++) {
            if ($("#board td[data-index='" + i + "']").text() === currentPlayer &&
                $("#board td[data-index='" + (i + 3) + "']").text() === currentPlayer &&
                $("#board td[data-index='" + (i + 6) + "']").text() === currentPlayer) {
                return true;
            }
        }
    
        // Check diagonals
        if ($("#board td[data-index='0']").text() === currentPlayer &&
            $("#board td[data-index='4']").text() === currentPlayer &&
            $("#board td[data-index='8']").text() === currentPlayer) {
            return true;
        }
    
        if ($("#board td[data-index='2']").text() === currentPlayer &&
            $("#board td[data-index='4']").text() === currentPlayer &&
            $("#board td[data-index='6']").text() === currentPlayer) {
            return true;
        }
    
        return false;
    }
    

    function showMessage(message) {
        $("#message").text(message);

        if (message.includes("wins")) {
            // Show an alert when a player wins
            alert(message);
            // Update the score and reset the board
           
        if (currentPlayer === "X"){
        scoreX++;
        } else {
         scoreO++;
        }
            updateScore();
            //reset board
            resetBoardWithAnimations()
        }
        else{
            alert(message);
            resetBoardWithAnimations()
        }






    }

    // function resetBoard() {
    //     $("#board td").text(""); // Clear the text content of all cells
    //     moves = 0;
    //     currentPlayer = "X";
    // }
    function resetBoardWithAnimations() {
        $("#board td").text("").css({
            "background-color": "#333",
            "color": "#fff"
        }); // Clear the text content and reset styles

        // Add animations for resetting the board
        $("#board td").addClass("reset-animation");

        setTimeout(function() {
            $("#board td").removeClass("reset-animation");
        }, 300);

        moves = 0;
        currentPlayer = "X";
    }








    // function handleClick() {
    //     var cell = $(this);
    //     if (!cell.text()) {
    //         cell.text(currentPlayer);
    //         moves++;

    //         if (checkWinner()) {
    //             showMessage("Player " + currentPlayer + " wins!");
    //         } else if (moves === 9) {
    //             showMessage("It's a draw!");
    //         } else {
    //             currentPlayer = currentPlayer === "X" ? "O" : "X";
    //         }
    //     } else {
    //         showMessage("This cell is already taken. Try again!");
    //     }
    // }

    function handleClick() {
        var cell = $(this);
        if (!cell.text()) {
            cell.text(currentPlayer).css({
                "background-color": "#ffcc00",
                "color": "#222"
            }).addClass("symbol-rotate"); // Add the rotation animation class
            moves++;
    
            if (checkWinner()) {
                showMessage("Player " + currentPlayer + " wins!");
            } else if (moves === 9) {
                showMessage("It's a draw!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        } else {
            showMessage("This cell is already taken. Try again!");
        }
    }
    


    $("#board td").on("click", handleClick);
});
