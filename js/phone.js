const loadPhone = async(searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones,isShowAll)
}

const displayPhones = (phones,isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ''; 

    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length>12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    

    phones.forEach(phone =>{
        // console.log(phone);
         const PhoneCard = document.createElement('div');
         PhoneCard.classList = `card bg-gray-200 shadow-xl  border-2 border-gray-300 p-10 rounded-lg `
         PhoneCard.innerHTML = `
         <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body ">
            <h2 class="card-title font-bold text-center">${phone.phone_name}</h2>
            <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions justify-center">
            <button onclick=handlerShowDetails('${phone.slug}') class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-[#0D6EFD] ">Show Details</button>
            </div>
        </div>
         `
         phoneContainer.appendChild(PhoneCard);
    })
    toggleLoadingSniper(false);
}

const searchHandlers = (isShowAll) =>{
    toggleLoadingSniper(true);
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    console.log(searchValue);
    loadPhone(searchValue,isShowAll);
}

const toggleLoadingSniper = (isLoading) =>{
    const loadingSniper = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSniper.classList.remove('hidden');
    }else{
        loadingSniper.classList.add('hidden');
    }
}

const handlerShowDetails = async(id) =>{
    console.log('click show detail',id);

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data;
    showPhoneDetails(phone)
    console.log(phone);
}

const showPhoneDetails = (phone) =>{


    const showAllDetails = document.getElementById('phone-details-container');
    showAllDetails.classList.add('space-y-4');
    showAllDetails.innerHTML = `
    <img class="text-center" src="${phone.image}" alt="" />
    <h3 class="font-bold text-3xl">${phone.name}</h3>
    <p class="font-semibold">Storage : ${phone.mainFeatures.storage
    }</p>
    <p class="font-semibold">Display size : ${phone?.display}</p>
    <p class="font-semibold">Chipset : ${phone?.Chipset}</p>
    <p class="font-semibold">
    releaseDate : ${phone?.releaseDate}</p>
    `

    show_modal_details.showModal()
}

const showAllDevice = () =>{
    searchHandlers(true);
}
// loadPhone();