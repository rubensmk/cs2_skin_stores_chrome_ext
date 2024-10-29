const leftSideInventoryContainer = document.querySelectorAll('.inventory_page_left');

const allStores = [
    {
        "id": 1,
        "href": "https://skin.land/pt/market/csgo/?query=",
        "store_name":"Skin.land",
    }
]

let button = document.createElement('button');
    button.textContent = 'Price on other stores';
    button.className = 'customButton';

let linkContainer = document.createElement('div');
    linkContainer.className = 'linkContainer';
    linkContainer.style.display = 'none';

const isPageRightVisible = document.querySelector('.inventory_page_right');
let firstLoad = true;

if(isPageRightVisible && firstLoad){
    const innerDivs = isPageRightVisible.querySelectorAll('.inventory_iteminfo'); 
    const itemWithZIndexOne = innerDivs[innerDivs.length - 1]
    const itemTitle1 = document.querySelector('#iteminfo1_item_name');
   
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'childList') {
            if (itemTitle1.textContent.length > 0) {
                linkContainer.innerHTML = '';

                allStores.forEach(store => {
                    let link = document.createElement('a');
                        link.href = `${store.href}${itemTitle1.textContent}`;
                        link.textContent = `${store.store_name}`;
                        link.target = '_blank';
                        link.className = 'storeLink';
                        link.id = store.id;
            
                        linkContainer.appendChild(link);
                });

                firstLoad = false;
            }

            itemWithZIndexOne.appendChild(button);
            itemWithZIndexOne.appendChild(linkContainer);

        }});
      });
    observer.observe(itemTitle1, { childList: true, subtree: true }); 
}

leftSideInventoryContainer.forEach(item => {
  item.addEventListener('click', () => {
    const inventoryItems = document.querySelector('.inventory_page_right');
    const innerDivs = inventoryItems.querySelectorAll('div'); 

    const itemWithZIndexOne = Array.from(innerDivs).find(item => {
        return getComputedStyle(item).zIndex == 1;
    });

    const innerItemName = itemWithZIndexOne.querySelector('.item_desc_content.app730.context2 .item_desc_description .hover_item_name');
    const buttonExist = document.querySelector('.customButton');
    const allLinks = document.querySelectorAll('.storeLink');

    if(buttonExist){
        allLinks.forEach(link => {
            allStores.forEach(store => {
                if(link.id == store.id){
                    link.href = ``;
                    link.href = `${store.href}${innerItemName.textContent}`;
                }
            });   
        });
    } 

    itemWithZIndexOne.appendChild(button);
    itemWithZIndexOne.appendChild(linkContainer);
  });
});


button.addEventListener('click', () => {
    if (linkContainer.style.display === 'none') {
        linkContainer.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
    }      
});
