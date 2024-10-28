const leftSideInventoryContainer = document.querySelectorAll('.inventory_page_left');

let button = document.createElement('button');
    button.textContent = 'Price on other stores';
    button.className = 'customButton';

let linkContainer = document.createElement('div');
    linkContainer.className = 'linkContainer';
    linkContainer.style.display = 'none';

let link1 = document.createElement('a');
    link1.href = `https://skin.land/pt/market/csgo/?query=`;
    link1.textContent = 'Skin.land';
    link1.target = '_blank';

leftSideInventoryContainer.forEach(item => {
  item.addEventListener('click', () => {
    const inventoryItems = document.querySelector('.inventory_page_right');
    const innerDivs = inventoryItems.querySelectorAll('div'); 

    const itemWithZIndexOne = Array.from(innerDivs).find(item => {
        return getComputedStyle(item).zIndex == 1;
    });

    const innerItemName = itemWithZIndexOne.querySelector('.item_desc_content.app730.context2 .item_desc_description .hover_item_name');
    const buttonExist = itemWithZIndexOne.querySelector('.customButton');

    if(buttonExist){
        link1.href = `https://skin.land/pt/market/csgo/?query=${innerItemName.textContent}`;
    }else{
        link1.href = `https://skin.land/pt/market/csgo/?query=${innerItemName.textContent}`;
        linkContainer.appendChild(link1);
        itemWithZIndexOne.appendChild(button);
        itemWithZIndexOne.appendChild(linkContainer);
    }    
  });


  button.addEventListener('click', () => {
    if (linkContainer.style.display === 'none') {
        linkContainer.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
    }      
});
});
