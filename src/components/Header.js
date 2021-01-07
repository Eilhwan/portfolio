import React, { useEffect } from 'react'

export default function Header() {

    function typing(){ 
        let title = document.getElementById("title");
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            title.append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else{ 
            clearInterval(tyInt); //끝나면 반복종료 
        } 
    }  
    let pp = "Eilhwan's Portfolio";
    let typingBool = false; 
    let typingIdx=0; 
    let typingTxt = pp;

    typingTxt=typingTxt.split("");

    if(typingBool==false){
       typingBool=true;  
       var tyInt = setInterval(typing,500);
    }

    
    return (
        <nav className="flex bg-black h-20 container-sm">
            <div className="flex-1">
                <div className="text-center p-10">
                    <a className="items-center tracking-wide no-underline hover:no-underline font-bold text-green-800 text-5xl" id="title"href="/">
                        
                    </a>
                </div>
            </div>
        </nav>
    )
}
