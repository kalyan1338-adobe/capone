export function handleAccordionNavigation(panel, tab, forceOpen = false) {
  const accordionTabs = panel?.querySelectorAll(':scope > fieldset');
  accordionTabs.forEach((otherTab) => {
    if (otherTab !== tab) {
      otherTab.classList.add('accordion-collapse');
    }
  });
  if (forceOpen) {
    tab.classList.remove('accordion-collapse');
  } else {
    tab.classList.toggle('accordion-collapse');
  }
}

export default function decorate(panel) {
  panel.classList.add('accordion');
  const accordionTabs = panel?.querySelectorAll(':scope > fieldset');
  accordionTabs?.forEach((tab, index) => {
    tab.dataset.index = index;
    const legend = tab.querySelector(':scope > legend');
    legend?.classList.add('accordion-legend');
    if (index !== 0) tab.classList.toggle('accordion-collapse'); // collapse all but the first tab on load
    legend?.addEventListener('click', () => {
      handleAccordionNavigation(panel, tab);
    });
  });
  return panel;
}


/*async function fetch_api(){
  const apiurl="https://free.mockerapi.com/mock/b676471e-bdb4-4b8a-8e7c-bf9f405e3b91";
  const res=await fetch(apiurl,{method:"GET"});
  if(res.ok){
    const data=await res.json();
    const offers = data?.responseString?.OfferDemogDetails || [];
    const firstOffer = offers[0];
    const loanAmount = firstOffer.offerAmount;
    const tenure = firstOffer.tenure;
    const interest = firstOffer.rateOfInterest;
    const mobile = firstOffer.customerMobileNo;
    const dob = firstOffer.dateOfBirth;
    const fname = firstOffer.customerFirstName;
    const mname = firstOffer.customerMiddleName;
    const lname = firstOffer.customerLastName;
    const fullname = fname + " " + mname + " " + lname;
    const address1 = firstOffer.customerAddress1;
    const address2 = firstOffer.customerAddress2;
    const address3 = firstOffer.customerAddress3;
    const state = firstOffer.customerState;
    const city = firstOffer.customerCity;
    const zipcode = firstOffer.zipCode;
    const address = address1 + "," + address2 + "," + address3 + "," + city + "," + state + "-" + zipcode;
    const loanfld = document.getElementsByName("loan_amount")[0];
    const tenurefld = document.getElementsByName("tenure")[0];
    const intfld = document.getElementsByName("interest")[0];
    const mobfld = document.getElementsByName("mobile_number")[0];
    const dobfld = document.getElementsByName("dob")[0];
    const fullnamefld = document.getElementsByName("full-name")[0];
    const addfld = document.getElementsByName("current-address")[0];
    loanfld.value=loanAmount;
    tenurefld.value=tenure;
    intfld.value=interest;
    mobfld.value=mobile;
    dobfld.value=dob;
    fullnamefld.value=fullname;
    addfld.value=address;
  }
}
fetch_api();*/

