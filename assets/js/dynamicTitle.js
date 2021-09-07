window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";

  document.addEventListener("visibilitychange", function (e) {
    // let isPageActive = !document.hidden;
    // if (!isPageActive) {
      toggle();
    // } else {
    //   document.title = pageTitle;
    // }
  });

  // document.addEventListener("visibilitychange", function (e) {
  //   if (!document.hidden) {
  //     document.title = pageTitle;
  //     favicon.href = "./assets/images/dp_female.png";
  //   }
  // });

  function toggle() {
    if (!document.hidden) {
        document.title = pageTitle;
        favicon.href = "./assets/images/dp_female.png";
    } else {
        document.title = attentionMessage;
        console.log()
        favicon.href = "./assets/images/folded.png";

    }
  }   
};