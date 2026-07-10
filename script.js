const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby3L6MLvKvSLNPPcN0bfY4CPddglIGeg_nTDWGy5Je52h_SSl1sk5_YxKWqzSV9gunb/exec";

document.querySelector("form").addEventListener("submit", async function(e){

e.preventDefault();

const data = {
name: document.getElementById("name").value,
date: document.getElementById("date").value,
amount: document.getElementById("amount").value,
method: document.getElementById("method").value,
location: document.getElementById("location").value
};

try{

const res = await fetch(SCRIPT_URL,{
method:"POST",
body:JSON.stringify(data)
});

const result = await res.text();

if(result=="Success"){
alert("✅ তথ্য সফলভাবে জমা হয়েছে");

document.querySelector("form").reset();

}else{
alert("❌ সমস্যা হয়েছে");
}

}catch(err){

alert("❌ Server Error");
console.log(err);

}

});