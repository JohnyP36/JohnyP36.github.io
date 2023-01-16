const imageUrl = 'images\/Handy Sites\/3934278fabcf6e59fe16f80948176f48.jpg';
  function bgImgLoaded() {
    if (!globals.headerBgImgLoaded) {
      globals.headerBgImgLoaded = new Date().getTime();
    } else {
      globals.headerBgImgLoaded();
    }
  }
  if (imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    img.onload = bgImgLoaded;
    globals.headerBgImgExists = true;
  } else {
    globals.headerBgImgExists = false;
  }