/*
* Functions that can be shared by components
* */


// Fix for the problem of back() function taking user to bottom of page. the BrowserRouter did not have an easy solution
// to go to correct element

exports.goBackToElement =function (element) {
    async function goBack() {
       return element
    }
    goBack().then((element)=>{
      let el =  document.getElementById(element);
       el.scrollIntoView();
    });
};