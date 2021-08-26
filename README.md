# Landing Page Project
***
This project is the second project of front-end engineering program at Udacity.
This project contains 1 `html` file, 1 `css` file, 1 `js` file, and some photos in photos folder.
If you want to check this project, clone or download, and copy the path of idex.html, and paste it on google Chrome.


## Lists of contents
***
### HTML

* HTML contains 1 main page
* In title, there is on unordered `li` element which has no lists.

```bash
<div class="nav">
    <ul class="nav-ul"></ul>
</div>
```

* The page has 5 `section`s.(title, about, story, like, connect)


### CSS

* A navagation is fixed on top of the page.

```bash
.navigation {
    width: 100%;
    background-color: #7e7474;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    height: 80px;
    opacity: 0.8;
    position: fixed;
    top: 0px;
    z-index: 1;
}
```

* The `section` which being viewed by scroll or click event will be added CSS class **"highlight"**.

```bash
.highlight {
    background-color:  #ffdd93;
    color: #556052;
}
```

* The sections are displayed by **grid**, and fixed height will be used when **scroll** event occurs.

```bash
.container {
    display: grid;
    grid-template: repeat(5, 950px)/ repeat(5, 1fr);
    overflow: scroll;
}
```

### JavaScript

* After making **fragment** document, 5 `li` elements will be appended to fragment and added class **"nav-li"** by for _loop_.

```bash
for (let i=0; i<5; i++) {

    const newList = document.createElement('li');

    newList.innerText = "SEC " + (i+1);
    
    fragment.appendChild(newList);
    newList.classList.add("nav-li");
}
```

* The `li`s will be appended to the unordered list **"nav-ul"**.

```bash
navUl.appendChild(fragment);
```


* By using `getBoundingClientRect()`, each section's top position will be caculated, and if a certain section's top position is within the range, the section will be highlighted by the class **"highlight"**, and other sections' **"highlight"** class will be _removed_.

```bash
function activeSection() {
    for (const section of sections) {

        const sectionPosition = section.getBoundingClientRect();
        const sectionTop = sectionPosition.top;
        console.log(sectionPosition);

        if (sectionTop > -950 && sectionTop <= 0) {
            document.getElementById(section.id).classList.add("highlight");  
       
        } else {
            document.getElementById(section.id).classList.remove("highlight");

        }
    }
}
```

* When a `li` element on a navigation bar is _clicked_, the screen will scroll to the designated section, and it will be **highlighted**.







