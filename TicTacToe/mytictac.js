clicked=()=>{

    const player1 = document.getElementById('p1').value;
    const player2 = document.getElementById('p2').value;
    // console.log(player1 + " " + player2)
    // console.log(p1);
    // console.log(p2);

    let p1Score =0;
    let p2Score =0; 

    let form = document.getElementsByClassName('form')[0];
    let board = document.getElementById('board');
    let scoreboard = document.getElementsByClassName('score')[0];
    let score1 = document.getElementById('s1');
    let score2 = document.getElementById('s2');

    score1.innerText=`${player1} Score: ${p1Score}`;
    score2.innerText=`${player2} Score: ${p2Score}`;

    scoreboard.style.display='flex';
    form.style.display="none";
    board.style.display="flex";
    board.style.minHeight='70vh';

    // const cell1 = document.getElementsByClassName('cell')[0];
    const cell = document.querySelectorAll('.cell');
    let result=0;

// document.getElementById('p1').value = 'hi saddy';








// console.log("player1 " + player1 +" player2 "+ player2)





// console.log(form);


let count =0;
let X=[[0,0,0],[0,0,0],[0,0,0]];
let Y=[[0,0,0],[0,0,0],[0,0,0]];

// X[0][1]=-1;

// X.forEach((i)=>{
//     console.log(i);
// })

let g=0;
cell.forEach((i)=>{
    
    // let data = i.getAttribute('data-cell');
    // if(data=="")
    // {
    //     // i.style.backgroundColor="red";
    //     // i.removeAttribute('data-cell');
    //     i.setAttribute('data-cell','x');
    //     data = i.getAttribute('data-cell');
    //     console.log(data);
    // }
    // console.log(i);
    // console.log(data);
    // console.log(i);
    // i.innerHTML=data;
    // i.addEventListener('click',(i)=>{    // giving error

        i.addEventListener('click',()=>{
            // console.log(i);
            let data = i.getAttribute('data-cell');
            
                if(g==0)
                {
                    if(data=="-1")
                    {
                        // i.style.backgroundColor="red";
                        // i.style.backgroundColor="red";
                        // i.removeAttribute('data-cell');
                        i.setAttribute('data-cell','x');
                        let x = i.getAttribute('data-coX');
                        let y = i.getAttribute('data-coY');
                        i.innerHTML="X";
                        // console.log(x + "," +y);
                        X[x][y]='X';
                        g=1;
                        count++;
                    }
                    else if(data='x')
                    {
                        window.alert("0's turn")
                    }
                    else if(data='y')
                    {
                        window.alert("x's turn")
                    }
                    // count++;
                    win();
                    // g=1;
        
                }
        
                else{
                    if(data=="-1")
                    {
                        // i.style.backgroundColor="yellow";
                        // i.style.backgroundColor="red";
                        // i.removeAttribute('data-cell');
                        i.setAttribute('data-cell','y');
                        // i.setAttribute('data-cell','x');
                        let x = i.getAttribute('data-coX');
                        let y = i.getAttribute('data-coY');
                        // console.log(x + "," +y);
                        i.innerHTML="O";
                        Y[x][y]='Y';
                        g=0;
                        count++;
                    }
                    else if(data='x')
                    {
                        window.alert("0's turn")
                    }
                    else if(data='y')
                    {
                        window.alert("x's turn")
                    }
                    // count++;
                    win();
        
                    // g=0;
                }
            
            
            
            if(count>8)
            {
                // X.forEach((i)=>{
                //     // console.log(i);
                // })
                // Y.forEach((i)=>{
                //     // console.log(i);
                // })
                setTimeout(() => {
                    window.alert('Game have been Drawed between '+player1+" and "+player2)
                }, 400);
                reset();
            }
    
        })

})

// console.log(cell);


// console.log(cell1);



win=()=>{
    if((X[0][0]=='X' && X[0][1]=='X' && X[0][2]=='X') || 
        (X[1][0]=='X' && X[1][1]=='X' && X[1][2]=='X') ||
        (X[2][0]=='X' && X[2][1]=='X' && X[2][2]=='X') ||
        (X[0][0]=='X' && X[1][1]=='X' && X[2][2]=='X') ||
        (X[2][0]=='X' && X[1][1]=='X' && X[0][2]=='X') ||
        (X[0][0]=='X' && X[1][0]=='X' && X[2][0]=='X') ||
        (X[0][1]=='X' && X[1][1]=='X' && X[2][1]=='X') ||
        (X[0][2]=='X' && X[1][2]=='X' && X[2][2]=='X') )
    {
        setTimeout(() => {
            window.alert(player1 + ' wins the game');
        }, 100);
        reset();
        result=0;   
        p1Score++;
        console.log('player1 score ' + p1Score);
        console.log('player2 score ' + p2Score);

        score1.innerText=`${player1} Score: ${p1Score}`;
        score2.innerText=`${player2} Score: ${p2Score}`;
    }
    else if((Y[0][0]=='Y' && Y[0][1]=='Y' && Y[0][2]=='Y') || 
    (Y[1][0]=='Y' && Y[1][1]=='Y' && Y[1][2]=='Y') ||
    (Y[2][0]=='Y' && Y[2][1]=='Y' && Y[2][2]=='Y') ||
    (Y[0][0]=='Y' && Y[1][1]=='Y' && Y[2][2]=='Y') ||
    (Y[2][0]=='Y' && Y[1][1]=='Y' && Y[0][2]=='Y') ||
    (Y[0][0]=='Y' && Y[1][0]=='Y' && Y[2][0]=='Y') ||
    (Y[0][1]=='Y' && Y[1][1]=='Y' && Y[2][1]=='Y') ||
    (Y[0][2]=='Y' && Y[1][2]=='Y' && Y[2][2]=='Y') )
    {
        setTimeout(() => {
            window.alert(player2+' wins the game');
        }, 100);
        reset();
        result=0;
        p2Score++;
        console.log('player1 score ' + p1Score);
        console.log('player2 score ' + p2Score);
        g=1;
        score1.innerText=`${player1} Score: ${p1Score}`;
        score2.innerText=`${player2} Score: ${p2Score}`;
    }

}





reset=()=>{
    setTimeout(() => {
        
        cell.forEach((i)=>{
            i.removeAttribute('data-cell');
            i.setAttribute('data-cell','-1');
            // console.log(i)
            i.innerHTML="";
            i.style.backgroundColor="";
            
        })
    }, 1000);
    // console.log('count '+count);
    count=0;
    result=0;
    g=0;
    // console.log('count '+count);
     X=[[0,0,0],[0,0,0],[0,0,0]];
     Y=[[0,0,0],[0,0,0],[0,0,0]];
}

resetScore=()=>{
    p1Score=0;
    p2Score=0;
    count=0;
    result=0;
    X=[[0,0,0],[0,0,0],[0,0,0]];
    Y=[[0,0,0],[0,0,0],[0,0,0]];
    g=0;
}

// if(result==1)
// {
//     reset();
// }

}