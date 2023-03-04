var controls = document.querySelectorAll('.gallery .controls button');
var controlshidden = document.querySelectorAll('.gallery .controls button input');
var imagesGrid = document.querySelectorAll('.images-grid .image');
var imagesGridInpout = document.querySelectorAll('.images-grid .image input');

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function(){
        const value =controlshidden[i].value

        if(value == 'all'){
            imagesGrid.forEach(function(element){
                element.style.width = ''
                element.style.height = ''
                element.style.marginLeft = '4px'
                element.style.marginRight = '4px'
            });
        }else{
            for (let x = 0; x < imagesGridInpout.length; x++) {
                if(imagesGridInpout[x].value == value){
                    imagesGrid[x].style.width = ''
                    imagesGrid[x].style.height = ''
                    imagesGrid[x].style.marginLeft = '4px'
                    imagesGrid[x].style.marginRight = '4px'
                }else{
                    imagesGrid[x].style.width = '0px'
                    imagesGrid[x].style.height = '0px'
                    imagesGrid[x].style.marginLeft = '0px'
                    imagesGrid[x].style.marginRight = '0px'
                }
            }
        }
    })
}