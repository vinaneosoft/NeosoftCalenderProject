let years=[2022,2023];
const months=["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
let calenderMap=new Map();
calenderMap.set('Training Calendar November 2023', 'https://drive.google.com/file/d/1jp9gAOm-Xv7idRAEpUZqN3xRdN7JsGFS/preview');
calenderMap.set('HRBP Connect Calendar November 2023', 'https://drive.google.com/file/d/1ey9fHhNDQM_a0WB0vp9tUKpx04AmJu5L/preview');
calenderMap.set('Engagement Calendar November 2023','https://drive.google.com/file/d/1I0_pqOgpV_7ra1JLEYSzOv3ATHTe8k_W/preview')
calenderMap.set('Training Calendar December 2023','https://drive.google.com/file/d/1vjUNhCBGsNpYVidhoBBwLzr6KVbEdT4k/preview');
let currentYear=new Date().getFullYear();
let foundYear=years.find(year=>year==currentYear);
if(foundYear===undefined)
    years.push(currentYear);
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
    if(currentYear===parseInt(optionEle.value))
        optionEle.selected=true;
    document.getElementById("yearselection").append(optionEle);
})
const loadCalender=(event)=>{
    const month=months[document.getElementById("monthselection").value];
    const year=document.getElementById("yearselection").value;
    const department=event.target.innerHTML;
    const mapKey=department.trim()+" Calendar "+month+" "+year;
    console.log(mapKey);
    const calenderLink=calenderMap.get(mapKey);
    if(calenderLink!=undefined){
        event.target.href=calenderLink.trim();
        document.getElementById("error").textContent="";
        document.getElementById("calendar").style.display="block";
    }
    else  {
        const errorMessage="No Calendar found for selected Month and Year";
        document.getElementById("error").textContent=errorMessage;
        document.getElementById("calendar").style.display="none";
    }
}