function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector('.title').innerText = title;
    document.querySelector('.name').innerText = cName;
    if(views < 1000) {  
        views = views.toString();
    }
    else if(views < 1000000) {
        views = (views / 1000).toFixed(1) + 'K';
    } else {
        views = (views / 1000000).toFixed(1) + 'M';
    }
    document.querySelector('.view').innerText = views.toLocaleString() + ' views';
    document.querySelector('.monthsold').innerText = monthsOld + ' months ago';
    document.querySelector('.dur').innerText = duration;
  
    // Create and insert thumbnail
    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = "Thumbnail";
    document.querySelector('.thumbs').appendChild(img);
  }
  
  // Call the function with the values you want
  createCard(
    "Ain't noone beating this | Ye nahi dekha toh kuch nahi dekha | WebDev One Shot (Full Stack)", 
    "CodeWithPravar", 
    7270000, 
    2, 
    "1:31:20", 
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
  );
 