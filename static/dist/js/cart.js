var updateBtn = document.getElementsByClassName("update-cart")

for (i = 0; i < updateBtn.length; i++){
    updateBtn[i].addEventListener('click', function(){
        var customer = $(this).closest('div').find('.customer').val()
        var service = $(this).closest('div').find('.service').val()
        var width = $(this).closest('div').find('.width').val()
        var height = $(this).closest('div').find('.height').val()
        var unit = $(this).closest('div').find('.unit').val()
        var quantity = $(this).closest('div').find('.quantity').val()

        //console.log('width:',width)
        //console.log('height:',height)
        //console.log('unit', unit)
        var serviceId = service
        var action    = this.dataset.action

        console.log(serviceId,action)
        console.log('username',username)
        if(username === 'AnonymousUser'){
            console.log('Please you are not login')
        }else{
           updateUserCart(serviceId,action,customer,width,height,unit,quantity)
        }

    })
}

function updateUserCart(serviceId,action,customer,width,height,unit,quantity){
    var url = 'http://127.0.0.1:8000/updateCart/'
       fetch(url, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'serviceId':serviceId,'action':action,'customer':customer,'width':width,'height':height,'unit':unit,'quantity':quantity})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        location.reload()
       //console.log('data:',data)
    })
}