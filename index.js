
document.addEventListener("DOMContentLoaded", function(){
    var elements = document.querySelectorAll(".dip");

    for(var i = 0; i<elements.length; i++){
        elements[i].addEventListener("click", function(event){
            var buttonHtml = this.innerText.trim();
            switch(buttonHtml){
                case "features":
                    alert("You are being navigated to features press ok to proceed");
                    break;
                case "contact":
                    alert("You are being navigated to contact press ok to proceed");
                    break;
                case "FAQ":
                    alert("You are being navigated to faqs press ok to proceed");
                    break;
                case "About":
                    alert("You are being navigated to about us press ok to proceed");
                    break;
                default:
                    console.log("No matching case found");
            }

        });
    }
});
// document.addEventListener("DOMContentLoaded", function() {
//     var elements = document.querySelectorAll(".dip");
//     var n = elements.length;
//     console.log("Number of elements with class 'dip':", n);

//     for (var i = 0; i < n; i++) {
//         elements[i].addEventListener("click", function(event) {
//             console.log("Button clicked!");
//             var buttonHtml = this.innerText.trim();
//             console.log("Button HTML:", buttonHtml);
//             switch(buttonHtml){
//                 case "features":
//                     alert("You are being navigated to features press ok to proceed");
//                     break;
//                 case "contact":
//                     alert("You are being navigated to contact press ok to proceed");
//                     break;
//                 case "FAQ":
//                     alert("You are being navigated to faqs press ok to proceed");
//                     break;
//                 case "About":
//                     alert("You are being navigated to about us press ok to proceed");
//                     break;
//                 default:
//                     console.log("No matching case found");
//             }
//         });
//     }
// });