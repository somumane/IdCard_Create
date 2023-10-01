const Name=document.querySelector('.name')
const mobile=document.querySelector('.Mobile')
const email=document.querySelector('.Email')
const image=document.querySelector('.image')
const branch=document.querySelector('.Branch')
const college=document.querySelector('.CollegeName')
const adress=document.querySelector('.Adress')
const button=document.querySelector('.submit')

// User after adding  values
const userclg=document.querySelector('.clg')
const username=document.querySelector('.username')
const userbranch=document.querySelector('.userbranch')
const usermobile=document.querySelector('.usermobile')
const useremail=document.querySelector('.useremail')
const useradress=document.querySelector('.useradress')

function Validate(){
if(Name.value==""){
    alert("Name is Required")
}
else if(college.value==""){
    alert("College Name is Required")
}
else if(branch.value==""){
    alert("Branch is Required")
}
else if(mobile.value=="" && mobile.value<10){
    alert("write valide mobile number")
}
else if(email.value==""){
    alert("Email is Required")
}
else if(adress.value==""){
    alert("Adress is Required")
}
else if(image.value==''){
    alert("Image is Required")
}


}

// logic after clicking button
button.addEventListener('click',()=>{
    username.innerHTML=Name.value
    userclg.innerHTML=college.value
    userbranch.innerHTML=branch.value
    usermobile.innerHTML=mobile.value
    useremail.innerHTML=email.value
    useradress.innerHTML=adress.value
    //converting imageurl and adding insaide src
    file=image.files[0]
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
       document.querySelector('.image2').src=reader.result
   })
   reader.readAsDataURL(file)
    })

// adding downlod pdf button
let downloadbutton=document.querySelector('.downloadbutton')
 downloadbutton.addEventListener('click',()=>{
        let download=document.querySelector('.card')
        html2pdf().from(download).save()
    })



