function plateformsFinder(){
    let cat = document.getElementById("category").value;
    let type = document.getElementById("type").value;
    let media = document.getElementById("media");

    let link= "" ;
     if(cat ==="YouTube" && type ==="Free"){
       link =  `<p><a href="https://youtube.com/@gaonkachhorahardik?si=2iADmFGyS_zhHNtr" target="_blank">Click here 👉 <b>YouTube</b></a></p>`;
     } else if(cat ==="YouTube" && type ==="Paid"){
       link =  `<p>Paid version of <b>YouTube</b> is not available, please select type free.😊
                </p>Thanks from <b>Prashant Sharma</b>.<p>`;
        
       
       
    }else if(cat ==="Instagram" && type ==="Free"){
       link = `<p><a href="https://www.instagram.com/prashantsharma034?igsh=MXh3Y2Zwd3VoZ244Nw==" target="_blank">Click here 👉<b>Instagram</b></a></p>` ;
    }else if(cat ==="Instagram" && type ==="Paid"){
       link = `<p>Paid version of <b>Instagram</b> is not available, please select type free.😊
                </p>Thanks from <b>Prashant Sharma</b>.<p>`;
        
         
       
       
    }else if(cat ==="Facebook" && type ==="Free"){
       link = `<p><a href="https://www.facebook.com/share/1MQJ71rSGb/" target="_blank">Click here 👉<b>Facebook</b></a></p>`;
    }else if(cat ==="Facebook" && type ==="Paid"){
       link = `<p>Paid version of <b>Facebook</b> is not available, please select type free.😊
                </p>Thanks from <b>Prashant Sharma</b>.<p>`;
        
       
       
    }else if(cat ==="Threads" && type ==="Free"){
       link = `<p><a href="https://www.threads.com/@prashantsharma034" target="_blank">Click here 👉<b>Threads</b></a></p>`;
    }else if(cat ==="Threads" && type ==="Paid"){
       link = `<p>Paid version of <b>Threads</b> is not available, please select type free.😊
                </p>Thanks from <b>Prashant Sharma</b>.<p>`;
        
        
       
       
    }else if(cat ==="YouTube 2nd" && type ==="Free"){
       link = `<p><a href="" target="_blank">Click here 👉<b>YouTube 2nd</b></a></p>`;
    }else if(cat ==="YouTube 2nd" && type ==="Paid"){
       link = `<p>Paid version of <b>YouTube 2nd</b> is not available, please select type free.😊
                </p>Thanks from <b>Prashant Sharma</b>.<p>`;
          
   
    }else{
       link = `<p>Please select a valid <b>Category</b> & <b>Type</b>.😊</p>`;
    }
    
   media.innerHTML = link;
}