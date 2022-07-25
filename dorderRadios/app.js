var topLeft = '10';
var topRight = '10';
var bottomLeft = '10';
var bottomRight = '10';

$(document).ready(function () {


    ResetConfig();

 
    $('#top-left-border').on("input", function() {
        var inputValue = $(this).val();
        topLeft = inputValue;
        document.getElementById('top-left-value').innerHTML = topLeft;
        document.getElementsByClassName('box')[0].style.borderTopLeftRadius = inputValue + '%';
        document.getElementsByClassName('value')[0].innerHTML = inputValue + '%';
    });
    
 
    $('#top-right-border').on("input", function() {
        var inputValue = $(this).val();
        topRight = inputValue;
        document.getElementById('top-right-value').innerHTML = topRight;
        document.getElementsByClassName('box')[0].style.borderTopRightRadius = inputValue + '%';
        document.getElementsByClassName('value')[1].innerHTML = inputValue + '%';
    });
    
  
    $('#left-bottom-border').on("input", function() {
        var inputValue = $(this).val();
        bottomLeft = inputValue;
        document.getElementById('bottom-left-value').innerHTML = bottomLeft;
        document.getElementsByClassName('box')[0].style.borderBottomLeftRadius = inputValue + '%';
        document.getElementsByClassName('value')[2].innerHTML = inputValue + '%';
    });
    

    $('#right-bottom-border').on("input", function() {
        var inputValue = $(this).val();
        bottomRight = inputValue;
        document.getElementById('bottom-right-value').innerHTML = bottomRight;
        document.getElementsByClassName('box')[0].style.borderBottomRightRadius = inputValue + '%';
        document.getElementsByClassName('value')[3].innerHTML = inputValue + '%';
    });
});


function ResetConfig(){
    
    var allControllers = document.getElementsByTagName('input');
    
  
    for(var i = 0; i < 4 ; i++){
        allControllers[i].value = 10;
    }
}




function CopyToClipboard() {
    var textToCopy = 'border-radius:';
    textToCopy += ' ' + topLeft + '%';
    textToCopy += ' ' + topRight + '%';
    textToCopy += ' ' + bottomLeft + '%';
    textToCopy += ' ' + bottomRight + '%;'; 

    var content = textToCopy;
    var copy = $('<input id="destroy">').val(content).appendTo('body').select();
    document.execCommand('copy');
    $( "#destroy" ).remove();
}
