// initial method definition found here https://attacomsian.com/blog/javascript-detect-mobile-device
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    // return "tablet";
    console.log("Tablet detected, redirecting");
    window.location.href = "./mobile/index.html";
    return;
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    // return "mobile";
    console.log("Mobile phone detected, redirecting");
    window.location.href = "./mobile/index.html";
    return;
  }
  // return "desktop";
  // stay here, it's a desktop computer, most likely
  console.log("No redirect necessary, detected a desktop");
};

deviceType();
