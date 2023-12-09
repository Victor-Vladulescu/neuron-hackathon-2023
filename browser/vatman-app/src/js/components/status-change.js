
    const locationCheckbox = document.getElementById('locationCheckbox');
    
    function openChange(){
    const buton = document.getElementById('locationStatus');

    if(locationCheckbox.checked){
        console.log("Hello from Florin1");
        buton.setAttribute("data-after", "ACTIVAT");
    }
        else {
            console.log("Hello from Florin2");
            buton.setAttribute("data-after",
            "sdfd");
        }

    }
    
locationCheckbox.addEventListener('change', () => { 
    openChange();
});

