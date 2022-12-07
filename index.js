




// CREATE ITEM
const creatItem = document.querySelector('#create_item')
creatItem.addEventListener('click', () => {
    const placeholder = creatItem.querySelector('p')
    placeholder.setAttribute('activated','true')

})






// CREATE ITEM
const item = (tag,item,checked=false) => {
    const main = document.querySelector('main .container')
    
    const element = {
        item,
        tag,
        checked

    }

    main.innerHTML += `<div class='item'>
                            <div class='container'>
                            <img src='style/image/grab.svg' alt='grab'>
                            <input type='checkbox' class='field' id='checked' value='${element.checked}'>
                            <div class='text'>
                                <input type='text' value='${element.tag}' class='field' id='tag' disabled>
                                <input type='text' value='${element.item}' class='field' id='order' disabled>
                            </div>
                            <button class='btn' id='pencil'></button>
                            <button class='btn' id='trash'></button>
                            </div>
                        </div>`


    return element

}



// Drop
const drop = (placeholder,lista=[]) => {
    const navegation = document.querySelector('#navigation #filters')
    const element = {
        placeholder,
        listar: () => {
            const tagLista = []
            for(tag in lista) {
                tagLista.push(`<li>${lista[tag]}</li>`)
            }

            return tagLista.toString().replace(/,/g, '')

        }
        
    }

    navegation.innerHTML += `<div class='drop_down' id='situation'>
                                <div class='click'></div>
                                <p activated='false'>${element.placeholder}</p>
                                <button class='filter'><img activated='false' src='style/image/arrow_down.svg' alt='arrow'></button>

                                <div options='close'>
                                    <ul>
                                    ${element.listar(lista)}
                                    </ul>
                                </div>
                            </div>` 


    
}

const a = item('vegetais','chuchu')

const b = item('laticinios','leite')

const c = item('bbbbbbbbbbbb','requeijao')

drop('tag',[a.tag,b.tag,c.tag, 'ss', 'aaaa','joaaa'])


// DROPS
const drops = []
document.querySelectorAll('.drop_down').forEach(drop => drops.push(drop))
document.querySelectorAll('.drop_down2').forEach(drop => drops.push(drop))

drops.forEach(drop => {
    
    const areasClick = drop.querySelectorAll('.click')
    let arrown = drop.querySelector('img[activated]')
    const options = drop.querySelector('div[options]')
    const button = drop.querySelector('.filter')
    const placeholder = drop.querySelector('p[activated]')
    const subOptions = options.querySelectorAll('li')
    const areaButton = drop.querySelector('button input')

    areasClick.forEach(areaClick => {
        areaClick.addEventListener('click',() => {

            if(arrown.getAttribute('activated') == 'false') {
                arrown.setAttribute('activated','true')
                options.setAttribute('options', 'open')

            }
            else {
                arrown.setAttribute('activated','false')
                options.setAttribute('options', 'close')

            }
            
            if(drop.getAttribute('class') == 'drop_down2') {
                areaButton.focus()
                placeholder.setAttribute('activated','true')

            }

        })
        

        subOptions.forEach(option => {
            option.addEventListener('click',() => {
                placeholder.setAttribute('activated','true')
                if(drop.getAttribute('class') != 'drop_down2') {
                    button.innerHTML = `${option.textContent}<img activated='true' src='style/image/arrow_down.svg' alt='arrow'>`
                } 
                else {
                    areaButton.value = `${option.textContent}`
                }

                arrown = drop.querySelector('img[activated]')
            })

        })



    })

})