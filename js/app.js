document.addEventListener("DOMContentLoaded" ,function(){
    //-------------------function to create li items inside ul----------------------
    let newLi;
    let i;
    function addLi(){
        var ul = document.getElementById('list');
        for(var i = 1; i <= 4; i++){
            // create li element
            newLi = document.createElement('li');
            // set class attribute 
            newLi.setAttribute("class", "");
            // set id attribute
            newLi.setAttribute("id", "btn" + i);
            // create a element 
            var anchor = document.createElement('a');
            // set href attribute and its value
            anchor.setAttribute('href', '#' + i);
            // create the text content
            var newContent = document.createTextNode("Section" + i);
            // put the text content inside the li
            newLi.appendChild(newContent);
            // put the li element inside a elelment
            anchor.appendChild(newLi)
            // put a element inside ul 
            ul.appendChild(anchor);
        }
        // return the final result and this is what we need
        return ul;
    }
    // call the function to run
    addLi();

    //----------------------change the color of the nav while scroll------------------
    var theNav = document.getElementById('navBar');
    // set the prevScroll to use it in the scroll event
    var prevScroll = window.pageYOffset;
    window.onscroll = function(){
        if(document.documentElement.scrollTop >= 500){
            theNav.classList.add("scroll");
        }else{
            theNav.classList.remove("scroll");
        }
    }

    //-------------------hide nav bar when scroll-----------------------------------
    window.addEventListener("scroll", function(){
        // determine the current scroll to know if the user scroll the page or not
        var curScroll = window.pageYOffset || document.documentElement.scrollTop;  
        if(prevScroll > curScroll){
            // if there is a scroll make it visible
            document.getElementById('navBar').style.top = '0';
        }else{
            // if there is no scroll make it hidden
            document.getElementById('navBar').style.top = '-70px';
        }
        // set the new value from the point i stopped in
        prevScroll = curScroll;
    })

    //-----------------------scroll to top button---------------------------
    window.addEventListener("scroll", function(){
        // if i scroll the window more than 100px from the top the button will be visible 
        if ( window.pageYOffset < 100){
            topButton.classList.remove('show');
        }else{
            // else it will be hidden because i am in the header
            topButton.classList.add('show');
        }
    })

    //--------------------click on top button-----------------------------------
    let topButton = document.getElementById("btn");
    topButton.onclick = function(){
        // scroll to top when click 
        document.documentElement.scrollTop = 0;
    }

    //----------------add an active static to nav bar items when a section is in the viewport-------------
    window.addEventListener("scroll", function(){
        // if i on the section1 viewport the button will be on active mode 
        if((document.getElementById('1').getBoundingClientRect().top < 100) && (document.getElementById('2').getBoundingClientRect().top > 100)){
            document.getElementById('btn1').classList.add('active');
        }else{
            document.getElementById('btn1').classList.remove('active');
        }
    });

    window.addEventListener("scroll", function(){
        // if i on the section2 viewport the button will be on active mode 
        if((document.getElementById('2').getBoundingClientRect().top < 100) && (document.getElementById('3').getBoundingClientRect().top > 100)){
            document.getElementById('btn2').classList.add('active');
        }else{
            document.getElementById('btn2').classList.remove('active');
        }
    });
    window.addEventListener("scroll", function(){
        // if i on the section3 viewport the button will be on active mode 
        if((document.getElementById('3').getBoundingClientRect().top < 100) && (document.getElementById('4').getBoundingClientRect().top > 200)){
            document.getElementById('btn3').classList.add('active');
        }else{
            document.getElementById('btn3').classList.remove('active');
        }
    });
    window.addEventListener("scroll", function(){
        // if i on the section4 viewport the button will be on active mode 
        if(document.getElementById('4').getBoundingClientRect().top < 200){
            document.getElementById('btn4').classList.add('active');
        }else{
            document.getElementById('btn4').classList.remove('active');
        }
    });


});
