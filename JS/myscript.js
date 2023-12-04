let years=[2022,2023,2024,2025];
const months=["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
let calenderMap=new Map();
calenderMap.set('Training Calendar - November 2023', 'https://drive.google.com/file/d/1jp9gAOm-Xv7idRAEpUZqN3xRdN7JsGFS/preview');
calenderMap.set('Employee Connect Calendar - November 2023', 'https://drive.google.com/file/d/1ey9fHhNDQM_a0WB0vp9tUKpx04AmJu5L/preview');
let currentYear=new Date().getFullYear();
//document.getElementById("year").textContent=currentYear;
let counter=0;
const currentMonth=new Date().getMonth();
months.forEach(month=>{
    const optionEle=document.createElement("option");
    optionEle.textContent=month.trim().toUpperCase();
    optionEle.value=counter;
    if(currentMonth===counter)
        optionEle.selected=true;
    document.getElementById("monthselection").append(optionEle);
    counter++;
})
years.forEach(year=>{
    const optionEle=document.createElement("option");
    optionEle.textContent=year;
    optionEle.value=year;
    if(currentYear===parseInt(optionEle.value)){
        optionEle.selected=true;}
    document.getElementById("yearselection").append(optionEle);
})
const loadCalender=(event)=>{
    const month=months[document.getElementById("monthselection").value];
    const year=document.getElementById("yearselection").value;
    const department=event.target.innerHTML;
    const mapKey=department.trim()+" Calendar - "+month+" "+year;
    console.log(mapKey);
    const calenderLink=calenderMap.get(mapKey);
    console.log(calenderLink);
    event.target.href=calenderLink;
}