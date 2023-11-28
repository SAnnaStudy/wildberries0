window.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById('upOrDown');
    let button2 = document.getElementById('upOrDownGone');
    let buttonAll = document.getElementById('”selectAll”');
    let el = document.getElementsByClassName('main_list_blocks_wrapper_content')[0];
    let el2 = document.getElementsByClassName('main_list_blocks_gone_content')[0];
    let isOpen = 1;
    let isOpen2 = 1;
        var sum1 = document.getElementsByClassName('sum1')[0];
        var sum2 = document.getElementsByClassName('sum2')[0];
        var sum3 = document.getElementsByClassName('sum3')[0];
        var price1 = document.getElementsByClassName('price1')[0];
        var price2 = document.getElementsByClassName('price2')[0];
        var price3 = document.getElementsByClassName('price3')[0];
    
        var changePlus1 = document.getElementsByClassName('changePlus1')[0];
        var changeMin1 = document.getElementsByClassName('changeMin1')[0];
        var changePlus2 = document.getElementsByClassName('changePlus2')[0];
        var changeMin2 = document.getElementsByClassName('changeMin2')[0];
        var changePlus3 = document.getElementsByClassName('changePlus3')[0];
        var changeMin3 = document.getElementsByClassName('changeMin3')[0];
        var oldPrice1 = document.getElementsByClassName('oldPrice1')[0];
        var oldPrice2 = document.getElementsByClassName('oldPrice2')[0];
        var oldPrice3 = document.getElementsByClassName('oldPrice3')[0];
    
        var delete3 = document.getElementsByClassName('delete3')[0];
        var select3 = document.getElementsByClassName('select3')[0];
        var delete1 = document.getElementsByClassName('delete1')[0];
        var select1 = document.getElementsByClassName('select1')[0];
        var delete2 = document.getElementsByClassName('delete2')[0];
        var select2 = document.getElementsByClassName('select2')[0];
        var block2 = document.getElementsByClassName('main_list_blocks_wrapper_content_2')[0];
        var block1 = document.getElementsByClassName('main_list_blocks_wrapper_content_1')[0];
        var block3 = document.getElementsByClassName('main_list_blocks_wrapper_content_3')[0];
    
    let allgoneitems = document.getElementById('allgoneitems');
    let blocks = [block1, block2, block3]
    let butt = document.getElementById('main_final_butt');
    let butt2 = document.getElementById('main_final_butt2');
    let payed = true;

        button.addEventListener('click', function(event) {
            if(isOpen == 1){
                el.className = 'main_list_blocks_wrapper_content hideAll';
                button.className = 'upDown'
                isOpen = 0;
                document.getElementsByClassName('main_list_blocks_gone_parent')[0].style.margin = '0 0 20px 0'
                document.getElementsByClassName('main_list_blocks_wrapper_parent_button')[0].classList = 'main_list_blocks_wrapper_parent_button hide'
                document.getElementsByClassName('main_list_blocks_wrapper_parent_button2')[0].classList = 'main_list_blocks_wrapper_parent_button2'
            }
            else{
                el.className = 'main_list_blocks_wrapper_content';
                button.classList.remove('upDown')
                isOpen = 1;
                document.getElementsByClassName('main_list_blocks_gone_parent')[0].style.margin = '30px 0 20px 0'
                document.getElementsByClassName('main_list_blocks_wrapper_parent_button')[0].classList = 'main_list_blocks_wrapper_parent_button'
                document.getElementsByClassName('main_list_blocks_wrapper_parent_button2')[0].classList = 'main_list_blocks_wrapper_parent_button2 hide'
            }
        });
        buttonAll.addEventListener('click', function(event) {
            checkboxes = document.getElementsByName('foo');
            if(this.checked){
                for(let i=0, n=checkboxes.length;i<n;i++) {
                    if(!blocks[i].classList.contains('hideBlock'))
                    {
                        checkboxes[i].checked = true;
                    }
                }
            }
            else{
                for(let i=0, n=checkboxes.length;i<n;i++) {
                    checkboxes[i].checked = false;
                }
            }
            totalIt()
        })

        button2.addEventListener('click', function(event) {
            if(isOpen2 == 1){
                el2.className = 'main_list_blocks_gone_content hideAll';
                button2.className = 'upDown'
                goneHr
                document.getElementById('goneHr').className = 'hideBlock'
                isOpen2 = 0;
            }
            else{
                el2.className = 'main_list_blocks_gone_content';
                button2.classList.remove('upDown')
                document.getElementById('goneHr').className = ''
                isOpen2 = 1;
            }
        });

    let textNum = document.getElementsByClassName('main_final_price_card_later')[0]
    let wantPay = document.getElementById('”wantPay”');
    let wantPay2 = document.getElementById('”wantPay2”');
    function checkFinalPrice() {
        let totalSumNum = Number(totalSum.innerHTML)
        butt.innerHTML='Оплатить ' + totalSumNum + ' сом'
    }
    function checkFinalPrice2() {
        let totalSumNum = Number(totalSum.innerHTML)
        butt2.innerHTML='Оплатить ' + totalSumNum + ' сом'
    }

    if(wantPay){
        wantPay.addEventListener('click', function() {
            if(payed){
                checkFinalPrice()
                payed = false
                textNum.className = 'main_final_price_card_later hideText'
                document.getElementById('paywhenget').classList.add('hideText')
            }
            else{
                butt.innerHTML='Заказать'
                payed = true
                textNum.className = 'main_final_price_card_later'
                document.getElementById('paywhenget').classList.remove('hideText')
            }
        })
    }
    if(wantPay2){
        wantPay2.addEventListener('click', function() {
            console.log('1')
            if(payed){
                checkFinalPrice2()
                payed = false
                document.getElementById('paywhenget').classList.add('hideText')
                document.getElementById('paynow').classList.add('hideText')
            }
            else{
                butt2.innerHTML='Заказать'
                payed = true
                document.getElementById('paywhenget').classList.remove('hideText')
                document.getElementById('paynow').classList.remove('hideText')
            }
        })
    }

    let howmuch = document.getElementById('howmuch');
    let howmuch_price = document.getElementById('howmuch_price');
    let howmuch_sale = document.getElementById('howmuch_sale');
    function totalIt() {
        let newPrice1 = Number(price1.innerHTML)
        let newPrice2 = Number(price2.innerHTML)
        let newPrice3 = Number(price3.innerHTML)
        let newSum1 = Number(sum1.innerHTML)
        let newSum2 = Number(sum2.innerHTML)
        let newSum3 = Number(sum3.innerHTML)
        let oldPrice11 = Number(oldPrice1.innerHTML)
        let oldPrice12 = Number(oldPrice2.innerHTML)
        let oldPrice13 = Number(oldPrice3.innerHTML)
        let prices = [newPrice1,newPrice2,newPrice3]
        let newSum = [newSum1,newSum2,newSum3]
        let oldPrice = [oldPrice11,oldPrice12,oldPrice13]
        let itemArr = document.getElementsByName("foo");
        let total = 0;
        let totalNewSum = 0;
        let totalOldPrice = 0;
        console.log(prices)
        console.log(itemArr)
        let newallgoneitems = Number(allgoneitems.innerHTML)
        let allposibleprice = 0;
        for (let i = 0; i < itemArr.length; i++) {
            allposibleprice += prices[i]
            if (itemArr[i].checked) {
                total += prices[i]
                totalNewSum += newSum[i]
                totalOldPrice += oldPrice[i]
            }
        }
        totalSum.innerHTML = total
        howmuch.innerHTML = totalNewSum
        howmuch_price.innerHTML = totalOldPrice
        howmuch_sale.innerHTML = totalOldPrice - total
        //document.getElementById('allItemsPrice').innerHTML = allposibleprice
        document.getElementById('allItemsPrice').innerHTML = total
        let allitems = document.getElementById('allItems')
        allitems.innerHTML = totalNewSum + newallgoneitems
        if(!payed){
            checkFinalPrice()
        }
        document.getElementById('floationgCard').innerHTML = allitems.innerHTML
        //document.getElementById('floationgCard2').innerHTML = allitems.innerHTML
    }
    totalIt()

    checkboxes = document.getElementsByName('foo');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            totalIt()
        })
    })
   
   
    let thatHave = document.getElementsByClassName('thatHave')[0]
    let thatHaveText = document.getElementsByClassName('thatHaveText')[0]
   
    let newnum = Number(thatHave.innerHTML)
    changePlus1.addEventListener('click', function(event) {
        let newSum1 = Number(sum1.innerHTML)
        if(newnum != 0){
            sum1.innerHTML = newSum1 + 1
            let newPrice1 = Number(price1.innerHTML)
            price1.innerHTML = newPrice1 + 522
            let oldPrice11 = Number(oldPrice1.innerHTML)
            oldPrice1.innerHTML = oldPrice11 + 1051
            totalIt()
            newnum--
            thatHaveText.innerHTML = 'Осталось '+newnum+ ' шт.'
            if(newnum != 0){
                thatHave.innerHTML = newnum
            } else{
                thatHaveText.innerHTML = 'Больше нет'
            }
        }
    })
    changeMin1.addEventListener('click', function(event) {
        let newSum1 = Number(sum1.innerHTML)
        if(newSum1 > 1 && newSum1){
            sum1.innerHTML = newSum1 - 1
            let newPrice1 = Number(price1.innerHTML)
            price1.innerHTML = newPrice1 - 522
            let oldPrice11 = Number(oldPrice1.innerHTML)
            oldPrice1.innerHTML = oldPrice11 - 1051
            newnum++
            thatHaveText.innerHTML = 'Осталось '+newnum+ ' шт.'
            totalIt()
        }
    })
    changePlus2.addEventListener('click', function(event) {
        let newSum2 = Number(sum2.innerHTML)
        sum2.innerHTML = newSum2 + 1
        let newPrice2 = Number(price2.innerHTML)
        price2.innerHTML = newPrice2 + 10500
        let oldPrice22 = Number(oldPrice2.innerHTML)
        oldPrice2.innerHTML = oldPrice22 + 11500
        totalIt()
    })
    changeMin2.addEventListener('click', function(event) {
        let newSum2 = Number(sum2.innerHTML)
        if(newSum2 > 1){
            sum2.innerHTML = newSum2 - 1
            let newPrice2 = Number(price2.innerHTML)
            price2.innerHTML = newPrice2 - 10500
            let oldPrice22 = Number(oldPrice2.innerHTML)
            oldPrice2.innerHTML = oldPrice22 - 11500
            totalIt()
        }
    })
    changePlus3.addEventListener('click', function(event) {
        let newSum3 = Number(sum3.innerHTML)
        sum3.innerHTML = newSum3 + 1
        let newPrice3 = Number(price3.innerHTML)
        price3.innerHTML = newPrice3 + 247
        let oldPrice33 = Number(oldPrice3.innerHTML)
        oldPrice3.innerHTML = oldPrice33 + 475
        totalIt()
    })
    changeMin3.addEventListener('click', function(event) {
        let newSum3 = Number(sum3.innerHTML)
        if(newSum3 > 1){
            sum3.innerHTML = newSum3 - 1
            let newPrice3 = Number(price3.innerHTML)
            price3.innerHTML = newPrice3 - 247
            let oldPrice33 = Number(oldPrice3.innerHTML)
            oldPrice3.innerHTML = oldPrice33 - 475
            totalIt()
        }
    })
/////////////////// 
    document.getElementsByClassName('delete3')[0].addEventListener('click', function(event) {
        block3.className = 'main_list_blocks_wrapper_content_3 hideBlock';
        select3.checked = false;
        totalIt()
    })
    document.getElementsByClassName('delete3')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('delete3S')[0].className = 'delete3S'
        document.getElementsByClassName('delete3F')[0].className = 'delete3F hideEl'
    })
    document.getElementsByClassName('delete3')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('delete3S')[0].className = 'delete3S hideEl'
        document.getElementsByClassName('delete3F')[0].className = 'delete3F'
    })
    document.getElementsByClassName('delete1')[0].addEventListener('click', function(event) {
        block1.className = 'main_list_blocks_wrapper_content_1 hideBlock';
        select1.checked = false;
        totalIt()
    })
    document.getElementsByClassName('delete1')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('delete1S')[0].className = 'delete1S'
        document.getElementsByClassName('delete1F')[0].className = 'delete1F hideEl'
    })
    document.getElementsByClassName('delete1')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('delete1S')[0].className = 'delete1S hideEl'
        document.getElementsByClassName('delete1F')[0].className = 'delete1F'
    })
    document.getElementsByClassName('delete2')[0].addEventListener('click', function(event) {
        block2.className = 'main_list_blocks_wrapper_content_2 hideBlock';
        select2.checked = false;
        totalIt()
    })
    document.getElementsByClassName('delete2')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('delete2S')[0].className = 'delete2S'
        document.getElementsByClassName('delete2F')[0].className = 'delete2F hideEl'
    })
    document.getElementsByClassName('delete2')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('delete2S')[0].className = 'delete2S hideEl'
        document.getElementsByClassName('delete2F')[0].className = 'delete2F'
    })
//////////////////
    document.getElementsByClassName('like')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('likeS')[0].className = 'likeS'
        document.getElementsByClassName('likeF')[0].className = 'likeF hideEl'
    })
    document.getElementsByClassName('like')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('likeS')[0].className = 'likeS hideEl'
        document.getElementsByClassName('likeF')[0].className = 'likeF'
    })
    document.getElementsByClassName('like2')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('like2S')[0].className = 'like2S'
        document.getElementsByClassName('like2F')[0].className = 'like2F hideEl'
    })
    document.getElementsByClassName('like2')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('like2S')[0].className = 'like2S hideEl'
        document.getElementsByClassName('like2F')[0].className = 'like2F'
    })
    document.getElementsByClassName('like3')[0].addEventListener('mouseover', function(event) {
        document.getElementsByClassName('like3S')[0].className = 'like3S'
        document.getElementsByClassName('like3F')[0].className = 'like3F hideEl'
    })
    document.getElementsByClassName('like3')[0].addEventListener('mouseout', function(event) {
        document.getElementsByClassName('like3S')[0].className = 'like3S hideEl'
        document.getElementsByClassName('like3F')[0].className = 'like3F'
    })
///////////////////////
    document.getElementById('like33').addEventListener('mouseover', function(event) {
        document.getElementById('like33S').className = ''
        document.getElementById('like33F').className = 'hideEl'
    })
    document.getElementById('like33').addEventListener('mouseout', function(event) {
        document.getElementById('like33F').className = ''
        document.getElementById('like33S').className = 'hideEl'
    })
    document.getElementById('like22').addEventListener('mouseover', function(event) {
        document.getElementById('like22S').className = ''
        document.getElementById('like22F').className = 'hideEl'
    })
    document.getElementById('like22').addEventListener('mouseout', function(event) {
        document.getElementById('like22F').className = ''
        document.getElementById('like22S').className = 'hideEl'
    })
    document.getElementById('like11').addEventListener('mouseover', function(event) {
        document.getElementById('like11S').className = ''
        document.getElementById('like11F').className = 'hideEl'
    })
    document.getElementById('like11').addEventListener('mouseout', function(event) {
        document.getElementById('like11F').className = ''
        document.getElementById('like11S').className = 'hideEl'
    })
/////////////////////
    document.getElementById('delete22_a').addEventListener('mouseover', function(event) {
        document.getElementById('delete22_2').className = ''
        document.getElementById('delete22').className = 'hideEl'
    })
    document.getElementById('delete22_a').addEventListener('mouseout', function(event) {
        document.getElementById('delete22').className = ''
        document.getElementById('delete22_2').className = 'hideEl'
    })
    document.getElementById('delete33_a').addEventListener('mouseover', function(event) {
        document.getElementById('delete33_2').className = ''
        document.getElementById('delete33').className = 'hideEl'
    })
    document.getElementById('delete33_a').addEventListener('mouseout', function(event) {
        document.getElementById('delete33').className = ''
        document.getElementById('delete33_2').className = 'hideEl'
    })
    document.getElementById('delete11_a').addEventListener('mouseover', function(event) {
        document.getElementById('delete11_2').className = ''
        document.getElementById('delete11').className = 'hideEl'
    })
    document.getElementById('delete11_a').addEventListener('mouseout', function(event) {
        document.getElementById('delete11').className = ''
        document.getElementById('delete11_2').className = 'hideEl'
    })
    document.getElementById('delete11_2').addEventListener('click', function(event) {
        document.getElementsByClassName('main_list_blocks_gone_content_1')[0].className = 'main_list_blocks_gone_content_1 hideBlock';
        allgoneitems.innerHTML--
        totalIt()
    })
    document.getElementById('delete22_2').addEventListener('click', function(event) {
        document.getElementsByClassName('main_list_blocks_gone_content_2')[0].className = 'main_list_blocks_gone_content_2 hideBlock';
        allgoneitems.innerHTML--
        totalIt()
    })
    document.getElementById('delete33_2').addEventListener('click', function(event) {
        document.getElementsByClassName('main_list_blocks_gone_content_3')[0].className = 'main_list_blocks_gone_content_3 hideBlock';
        allgoneitems.innerHTML--
        totalIt()
    })

////////////////////// 
    let changePrice = document.getElementsByClassName('changePrice')
    for (let i = 0; i < changePrice.length; i++) {
        changePrice[i].addEventListener("click", event => {
            document.getElementsByClassName('popup_pay')[0].className = 'popup_pay'
            document.getElementsByClassName('popup_pay_content')[0].className = 'popup_pay_content'
        });
    }

    document.getElementById('closePayChoice').addEventListener('click', function(event) {
        document.getElementsByClassName('popup_pay')[0].className = 'popup_pay closedPopUp'
        document.getElementsByClassName('popup_pay_content')[0].className = 'popup_pay_content closedPopUp'
    })

    const cardsInfo = [
        {img:"img/mir (1).svg", number: '1234 56•• •••• 1234'},
        {img:"img/visa.svg", number: '1234 56•• •••• 1234'},
        {img:"img/mastercard.svg", number: '1234 56•• •••• 1234'},
        {img:"img/maestro.svg", number: '1234 56•• •••• 1234'}
    ]
    document.getElementById('choosePay').addEventListener('click', function(event) {
        let card=document.getElementsByName('card');
        for (let i=0;i<card.length; i++) {
                if (card[i].checked) {
                    document.getElementById('choosenPayFinalCard').innerHTML = cardsInfo[i].number
                    document.getElementById('choosenPayCard').innerHTML = cardsInfo[i].number
                    document.getElementById('choosenPayFinalImg').src = cardsInfo[i].img
                    document.getElementById('choosenPayImg').src = cardsInfo[i].img
                }
        }
        document.getElementsByClassName('popup_pay')[0].className = 'popup_pay closedPopUp'
        document.getElementsByClassName('popup_pay_content')[0].className = 'popup_pay_content closedPopUp'
    })

    let changeDelivery = document.getElementsByClassName('changeDelivery')
    for (let i = 0; i < changeDelivery.length; i++) {
        changeDelivery[i].addEventListener("click", event => {
            document.getElementsByClassName('popup_delivery')[0].className = 'popup_delivery'
            document.getElementsByClassName('popup_delivery_content')[0].className = 'popup_delivery_content'
        });
    }

    let toThePoint = document.getElementById("toThePoint")
    let withHuman = document.getElementById("withHuman")
    toThePoint.addEventListener('click', function(event) {
        toThePoint.classList.toggle('clickedButt')
        withHuman.classList.toggle('clickedButt')
    })
    withHuman.addEventListener('click', function(event) {
        withHuman.classList.toggle('clickedButt')
        toThePoint.classList.toggle('clickedButt')
    })

    const adressesDelInfo = [
        {nameP:'Бишкек, улица Табышалиева, 57',rating:''},
        {nameP: 'Бишкек, улица Жукеева-Пудовкина, 77/1',rating:'4.9'},
        {nameP:'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',rating:'4.99'}
    ]
    const adressesYoursInfo = [
        'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
        'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/2',
        'г. Бишкек, улица Табышалиева, д. 57'
    ]
    document.getElementById('closeDelChoice').addEventListener('click', function(event) {
        document.getElementsByClassName('popup_delivery')[0].className = 'popup_delivery closedPopUp'
        document.getElementsByClassName('popup_delivery_content')[0].className = 'popup_delivery_content closedPopUp'
    })
    document.getElementById('chooseDel').addEventListener('click', function(event) {
        if(toThePoint.className == 'clickedButt'){
            let adress=document.getElementsByName('adress');
            for (let i=0;i<adress.length; i++) {
                if (adress[i].checked) {
                    document.getElementById('wheretodeliver').innerHTML = adressesDelInfo[i].nameP
                    document.getElementById('whereToDelShort').innerHTML = adressesDelInfo[i].nameP
                    document.getElementById('definitionOfDel').innerHTML = 'Доставка в пункт выдачи'
                    document.getElementById('definitionOfDelShort').innerHTML = 'Пункт выдачи'
                    document.getElementById('ratingOfPoint').innerHTML = adressesDelInfo[i].rating
                    document.getElementsByClassName('rating_div')[0].className = 'rating_div'
                }
            }
        }
        else{
            let adressYour=document.getElementsByName('adressYour');
            for (let i=0;i<adressYour.length; i++) {
                if (adressYour[i].checked) {
                    document.getElementById('wheretodeliver').innerHTML = adressesYoursInfo[i]
                    document.getElementById('whereToDelShort').innerHTML = adressesYoursInfo[i]
                    document.getElementById('definitionOfDel').innerHTML = 'Доставка курьером'
                    document.getElementById('definitionOfDelShort').innerHTML = 'Адрес доставки'
                    document.getElementById('ratingOfPoint').innerHTML = ''
                    document.getElementsByClassName('rating_div')[0].className = 'rating_div hideBlock'
                }
            }
        }
        document.getElementsByClassName('popup_delivery')[0].className = 'popup_delivery closedPopUp'
        document.getElementsByClassName('popup_delivery_content')[0].className = 'popup_delivery_content closedPopUp'
    })

    document.getElementById('toThePoint').addEventListener('click', function(event) {
        document.getElementsByClassName('delivery_your_block')[0].className = 'delivery_your_block hideBlock'
        document.getElementsByClassName('delivery_block')[0].className = 'delivery_block'
    })

    document.getElementById('withHuman').addEventListener('click', function(event) {
        document.getElementsByClassName('delivery_your_block')[0].className = 'delivery_your_block'
        document.getElementsByClassName('delivery_block')[0].className = 'delivery_block hideBlock'
    })

    let firstname = document.getElementById('firstname')
    let secondname = document.getElementById('secondname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let inn = document.getElementById('inn')
    let finalCheck = false
    let FEr = true
    let SEr = true
    let PEr = true
    let EEr = true
    let IEr = true
        firstname.addEventListener('focus', function(event) {
            document.getElementById('cont1').className = 'input-container focused'
        });
        firstname.addEventListener('blur', function(){
            let inputValue = firstname.value;
            if ( inputValue == "" ) {
                document.getElementById('cont1').className = 'input-container';  
            } 
        }) 
        function checkNameInput(){
            if(firstname.value.length == '' || firstname.value.length == ' '){
                document.getElementById('firstname_error').innerHTML = "Укажите имя";
                document.getElementById('firstname_error').style.color = '#F55123'
                document.getElementById('realPlaceHolderF').style.color = '#F55123'
                firstname.style.color = '#F55123'
                firstname.style.borderBottom = '1px solid #F55123'
                FEr = false
            }
            else{
                document.getElementById('firstname_error').innerHTML = "";
                document.getElementById('firstname_error').style.color = '#9797AF'
                document.getElementById('realPlaceHolderF').style.color = 'black'
                firstname.style.color = '#9797AF'
                firstname.style.borderBottom = '1px solid rgba(0, 0, 0, 0.20)'
                FEr = true
            }
        }
        firstname.addEventListener('keyup', function(event) {
            if(!FEr){
                checkNameInput()
            }
        })
        //2
        secondname.addEventListener('focus', function(event) {
            document.getElementById('cont2').className = 'input-container focused'
        });
        secondname.addEventListener('blur', function(){
            let inputValue = secondname.value;
            if ( inputValue == "" ) {
                document.getElementById('cont2').className = 'input-container';  
            } 
        }) 
        function checkSurnameInput(){
            if(secondname.value.length == '' || secondname.value.length == ' '){
                document.getElementById('secondname_error').innerHTML = "Введите фамилию";
                document.getElementById('secondname_error').style.color = '#F55123'
                document.getElementById('realPlaceHolderS').style.color = '#F55123'
                secondname.style.color = '#F55123'
                secondname.style.borderBottom = '1px solid #F55123'
                SEr = false
            }
            else{
                document.getElementById('secondname_error').innerHTML = "";
                document.getElementById('secondname_error').style.color = '#9797AF'
                document.getElementById('realPlaceHolderS').style.color = '#9797AF'
                secondname.style.color = 'black'
                secondname.style.borderBottom = '1px solid rgba(0, 0, 0, 0.20)'
                SEr = true
            }
        }
        secondname.addEventListener('keyup', function(event) {
            if(!SEr){
                checkSurnameInput()
            }
        })
        //3
        phone.addEventListener('focus', function(event) {
            document.getElementById('cont3').className = 'input-container focused'
        });
        phone.addEventListener('blur', function(){
            let inputValue = phone.value;
            if ( inputValue == "" ) {
                document.getElementById('cont3').className = 'input-container';  
            } 
        }) 
        function checkPhoneInput(){
            if(finalCheck){
                if(phone.value.length == 0){
                    document.getElementById('phone_error').innerHTML = "Укажите номер телефона";
                    document.getElementById('phone_error').style.color = '#F55123'
                    document.getElementById('realPlaceHolderP').style.color = '#F55123'
                    phone.style.color = '#F55123'
                    phone.style.borderBottom = '1px solid #F55123'
                    PEr = false
                }
            }
           else if( phone.value.length != 0 && /^\d+$/.test(phone.value)){
                document.getElementById('phone_error').innerHTML = "Формат: +9 999 999 99 99";
                document.getElementById('phone_error').style.color = '#F55123'
                document.getElementById('realPlaceHolderP').style.color = '#F55123'
                phone.style.color = '#F55123'
                phone.style.borderBottom = '1px solid #F55123'
                PEr = false
            }
            else{
                document.getElementById('phone_error').innerHTML = "";
                document.getElementById('phone_error').style.color = '#9797AF'
                document.getElementById('realPlaceHolderP').style.color = '#9797AF'
                phone.style.color = 'black'
                phone.style.borderBottom = '1px solid rgba(0, 0, 0, 0.20)'
                PEr = true
            }
        }
        phone.addEventListener('blur', function(event) {
            let x = phone.value.match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
            phone.value = '+7 ' + x[1] + ' ' + x[2] + ' ' + x[3] + ' ' + x[4];
            checkPhoneInput()
        })
        phone.addEventListener('keyup', function(event) {
            if(!PEr){
                checkPhoneInput()
            }
        })
        //4
        email.addEventListener('focus', function(event) {
            document.getElementById('cont4').className = 'input-container focused'
        });
        email.addEventListener('blur', function(){
            let inputValue = email.value;
            if ( inputValue == "" ) {
                document.getElementById('cont4').className = 'input-container';  
            } 
        }) 
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        function checkEmailInput(){
            if( email.value.length != 0 && reg.test(email.value)!=true){
                document.getElementById('email_error').innerHTML = "Проверьте адрес электронной почты";
                document.getElementById('email_error').style.color = '#F55123'
                document.getElementById('realPlaceHolderE').style.color = '#F55123'
                email.style.color = '#F55123'
                email.style.borderBottom = '1px solid #F55123'
                EEr = false
            }
            else{
                document.getElementById('email_error').innerHTML = "";
                document.getElementById('email_error').style.color = '#9797AF'
                document.getElementById('realPlaceHolderE').style.color = '#9797AF'
                email.style.color = 'black'
                email.style.borderBottom = '1px solid rgba(0, 0, 0, 0.20)'
                EEr = true
            }
            if(finalCheck){
                if(email.value.length == 0){
                    document.getElementById('email_error').innerHTML = "Укажите электронную почту";
                    document.getElementById('email_error').style.color = '#F55123'
                    document.getElementById('realPlaceHolderE').style.color = '#F55123'
                    email.style.color = '#F55123'
                    email.style.borderBottom = '1px solid #F55123'
                    EEr = false
                }
            }
        }
        email.addEventListener('blur', function(event) {
            checkEmailInput()
        })
        email.addEventListener('keyup', function(event) {
            if(!EEr){
                checkEmailInput()
            }
        })
        //5
        inn.addEventListener('focus', function(event) {
            document.getElementById('cont5').className = 'input-container focused'
        });
        inn.addEventListener('blur', function(){
            let inputValue = inn.value;
            if ( inputValue == "" ) {
                document.getElementById('cont5').className = 'input-container';  
            } 
        }) 
        function checkInnInput(){
            let valueI = inn.value
            if(finalCheck){
                if(valueI.length == 0){
                    document.getElementById('inn_error').innerHTML = "Укажите ИНН";
                    document.getElementById('inn_error').style.color = '#F55123'
                    document.getElementById('realPlaceHolderIn').style.color = '#F55123'
                    inn.style.color = '#F55123'
                    inn.style.borderBottom = '1px solid #F55123'
                    IEr = false
                }
            }
            else if( valueI.length != 0 && valueI.length < 14){
                document.getElementById('inn_error').innerHTML = "Проверьте ИНН";
                document.getElementById('inn_error').style.color = '#F55123'
                document.getElementById('realPlaceHolderIn').style.color = '#F55123'
                inn.style.color = '#F55123'
                inn.style.borderBottom = '1px solid #F55123'
                IEr = false
            }
            else{
                document.getElementById('inn_error').innerHTML = "Для таможенного оформления";
                document.getElementById('inn_error').style.color = 'black'
                document.getElementById('realPlaceHolderIn').style.color = '#9797AF'
                inn.style.color = 'black'
                inn.style.borderBottom = '1px solid rgba(0, 0, 0, 0.20)'
                IEr = true
            }
        }
        document.getElementById('inn').addEventListener('blur', function(event) {
            let valueI = inn.value
            console.log(valueI.length)
            if(valueI.length == 0){
                document.getElementById('realPlaceHolderIn').innerHTML = "ИНН";
            }
            checkInnInput()
        })
        inn.addEventListener('focus', function(event) {
            document.getElementById('realPlaceHolderIn').innerHTML = "ИНН для таможни";
        })
        inn.addEventListener('keyup', function(event) {
            if(!IEr){
                checkInnInput()
            }
        })

        function finalCheckAll(){
            finalCheck=true
            checkNameInput()
            checkSurnameInput()
            checkPhoneInput()
            checkEmailInput()
            checkInnInput()
            finalCheck=false
        }
        document.getElementById('main_final_butt').addEventListener('click', function(event) {
            finalCheckAll()
            if(FEr&&SEr&&PEr&&EEr&&IER){

            }
            else{
                window.scrollTo({
                top: 1500,  // это координат где должен быть экран
                behavior: 'smooth'  //Это анимация
                })
            }
        }) 
        document.getElementById('main_final_butt2').addEventListener('click', function(event) {
            finalCheckAll()
            if(FEr&&SEr&&PEr&&EEr&&IER){

            }
            else{
                window.scrollTo({
                top: 1500,  // это координат где должен быть экран
                behavior: 'smooth'  //Это анимация
                })
            }
        }) 
        
        oldPrice1.addEventListener('mouseover', function(event) {
            document.getElementById('tool1').style.display = 'flex';
        })
        oldPrice1.addEventListener('mouseout', function(event) {
            document.getElementById('tool1').style.display = 'none';
        })
        oldPrice2.addEventListener('mouseover', function(event) {
            document.getElementById('tool2').style.display = 'flex';
        })
        oldPrice2.addEventListener('mouseout', function(event) {
            document.getElementById('tool2').style.display = 'none';
        })
        oldPrice3.addEventListener('mouseover', function(event) {
            document.getElementById('tool3').style.display = 'flex';
        })
        oldPrice3.addEventListener('mouseout', function(event) {
            document.getElementById('tool3').style.display = 'none';
        })

        document.getElementById('wild').addEventListener('mouseover', function(event) {
            document.getElementById('wildTooltip').style.display = 'flex';
        })
        document.getElementById('wild').addEventListener('mouseout', function(event) {
            document.getElementById('wildTooltip').style.display = 'none';
        })
        document.getElementById('mega').addEventListener('mouseover', function(event) {
            document.getElementById('megatooltip').style.display = 'flex';
        })
        document.getElementById('mega').addEventListener('mouseout', function(event) {
            document.getElementById('megatooltip').style.display = 'none';
        })
        document.getElementById('wild2').addEventListener('mouseover', function(event) {
            document.getElementById('wildtooltip2').style.display = 'flex';
        })
        document.getElementById('wild2').addEventListener('mouseout', function(event) {
            document.getElementById('wildtooltip2').style.display = 'none';
        })

        document.getElementById('final_tool').addEventListener('mouseover', function(event) {
            document.getElementById('finaltooltip').style.display = 'flex';
        })
        document.getElementById('final_tool').addEventListener('mouseout', function(event) {
            document.getElementById('finaltooltip').style.display = 'none';
        })
        document.getElementById('final_tool_free').addEventListener('mouseover', function(event) {
            document.getElementById('freetooltip').style.display = 'flex';
        })
        document.getElementById('final_tool_free').addEventListener('mouseout', function(event) {
            document.getElementById('freetooltip').style.display = 'none';
        })
/////////////////
        //1
        document.getElementById('delivery_block_card_1_2').addEventListener('click', function(event) {
            if(adressesDelInfo.length!=1){
                console.log(adressesDelInfo.length)
                adressesDelInfo.splice(0,1)
                document.getElementById('delivery_block_card1').style.display ="none"
                let cards=document.getElementsByName('adress');
                console.log(cards)
                for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }
            }
        }) 
        document.getElementById('throw1').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_1_2').className = 'throw'
            document.getElementById('delivery_block_card_1_1').className = 'throw hideEl'
        })
        document.getElementById('throw1').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_1_1').className = 'throw'
            document.getElementById('delivery_block_card_1_2').className = 'throw hideEl'
        })
        //2
        document.getElementById('delivery_block_card_2_2').addEventListener('click', function(event) {
            if(adressesDelInfo.length!=1){
                console.log(adressesDelInfo.length)
                adressesDelInfo.splice(1,1)
                document.getElementById('delivery_block_card2').style.display ="none"
                let cards=document.getElementsByName('adress');
                for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }
            }
        }) 
        document.getElementById('throw2').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_2_2').className = 'throw'
            document.getElementById('delivery_block_card_2_1').className = 'throw hideEl'
        })
        document.getElementById('throw2').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_2_1').className = 'throw'
            document.getElementById('delivery_block_card_2_2').className = 'throw hideEl'
        })
        //3
        document.getElementById('delivery_block_card_3_2').addEventListener('click', function(event) {
            if(adressesDelInfo.length!=1){
                console.log(adressesDelInfo.length)
                adressesDelInfo.splice(2,1)
                let cards=document.getElementsByName('adress');
                for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }
            }
        }) 
        document.getElementById('throw3').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_3_2').className = 'throw'
            document.getElementById('delivery_block_card_3_1').className = 'throw hideEl'
        })
        document.getElementById('throw3').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_3_1').className = 'throw'
            document.getElementById('delivery_block_card_3_2').className = 'throw hideEl'
        })
        //1 1
        document.getElementById('delivery_block_card_y_1_2').addEventListener('click', function(event) {
            if(adressesYoursInfo.length!=1){
                adressesYoursInfo.splice(0,1)
                document.getElementById('delivery_block_card_y_1').style.display ="none"
                let cards=document.getElementsByName('adressYour');
                for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }
            }
        }) 
        document.getElementById('throwYour1').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_y_1_2').className = 'throw'
            document.getElementById('delivery_block_card_y_1_1').className = 'throw hideEl'
        })
        document.getElementById('throwYour1').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_y_1_1').className = 'throw'
            document.getElementById('delivery_block_card_y_1_2').className = 'throw hideEl'
        })
         //2 2
         document.getElementById('delivery_block_card_y_2_2').addEventListener('click', function(event) {
           
                document.getElementById('delivery_block_card_y_2').style.display ="none"
                let cards=document.getElementsByName('adressYour');
             /*   for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }*/
            
        }) 
        document.getElementById('throwYour2').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_y_2_2').className = 'throw'
            document.getElementById('delivery_block_card_y_2_1').className = 'throw hideEl'
        })
        document.getElementById('throwYour2').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_y_2_1').className = 'throw'
            document.getElementById('delivery_block_card_y_2_2').className = 'throw hideEl'
        })
         //3 3
         document.getElementById('delivery_block_card_y_3_2').addEventListener('click', function(event) {
            
                document.getElementById('delivery_block_card_y_3').style.display ="none"
                let cards=document.getElementsByName('adressYour');
                console.log(cards)
             /*   for (let i=0;i<cards.length; i++) {
                    cards[i].checked = true
                }*/
          
        }) 
        document.getElementById('throwYour3').addEventListener('mouseover', function(event) {
            document.getElementById('delivery_block_card_y_3_2').className = 'throw'
            document.getElementById('delivery_block_card_y_3_1').className = 'throw hideEl'
        })
        document.getElementById('throwYour3').addEventListener('mouseout', function(event) {
            document.getElementById('delivery_block_card_y_3_1').className = 'throw'
            document.getElementById('delivery_block_card_y_3_2').className = 'throw hideEl'
        })

      /*  function checkminis(){
            let ifthereis = document.getElementsByClassName('nubmer16')
            let isall = 3
            for(let i =0;i < ifthereis.length;i++){
                if(ifthereis[i].classList.contains('hideEl')){
                    isall--
                    console.log(isall)
                }
            }
            if (isall==0){
                document.getElementsByClassName('main_imgs')[0].classList.add('hideEl')
            }
           
        }*/
        select1.addEventListener('change', function(event) {
            if(select1.checked == true){
                document.getElementById('select1Mini').classList.remove('hideEl')
            }
            else{
                document.getElementById('select1Mini').classList.add('hideEl')
            }
        })
        select2.addEventListener('change', function(event) {
            if(select2.checked == true){
                document.getElementById('select2Mini').classList.remove('hideEl')
            }
            else{
                document.getElementById('select2Mini').classList.add('hideEl')
            }
        })/*
        select3.addEventListener('change', function(event) {
            if(select3.checked == true){
                document.getElementById('select3Mini').classList.remove('hideEl')
            }
            else{
                document.getElementById('select3Mini').classList.add('hideEl')
            }
        })
*/
    /*
    4 адаптив
    5 выложить
    8 подключить стили: шрифт и цвет радио кнопок
    10 исправить валидацию телефона
    */

})
