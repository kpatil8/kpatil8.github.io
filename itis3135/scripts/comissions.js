const commissionData = {
    rough: {
        price: 30,
        image: '../images/commisionrough.png'
    },
    lineart: {
        price: 50,
        image: '../images/commisionline.png'
    },
    flatcolor: {
        price: 60,
        image: '../images/commisionflatcolor.png'
    },
    fullrender: {
        price: 80,
        image: '../images/commisionfullyrendered.png'
    },
    chibi: {
        price: 20,
        image: '../images/commisionchibi.png'
    }
};


function updatePrice() {
    const commissionType = document.getElementById('commission-type').value;
    const isFullBody = document.getElementById('full-body-checkbox').checked;

    let price = commissionData[commissionType].price;
    if (isFullBody && commissionType !== 'chibi') {
        price *= 2; 
    }

    document.getElementById('price').textContent = `$${price}`;
    document.getElementById('example-image').src = commissionData[commissionType].image;
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('commission-type').addEventListener('change', updatePrice);
    document.getElementById('full-body-checkbox').addEventListener('change', updatePrice);

    
    updatePrice();
});
