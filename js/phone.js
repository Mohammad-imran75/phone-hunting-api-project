const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone =>{
        console.log(phone);
         const PhoneCard = document.createElement('div');
         PhoneCard.classList = `card bg-gray-200 shadow-xl  border-2 border-gray-300 p-10 rounded-lg `
         PhoneCard.innerHTML = `
         <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body ">
            <h2 class="card-title font-bold text-center">${phone.phone_name}</h2>
            <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions justify-end">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-[#0D6EFD]">Show Details</button>
            </div>
        </div>
         `
         phoneContainer.appendChild(PhoneCard);
    })
}

const searchHandlers = () =>{
    console.log('search');
}
loadPhone();