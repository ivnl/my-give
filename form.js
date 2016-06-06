console.log("js loaded");

function validateForm() {
    var category = document.getElementById('tags').value.toLowerCase();

    if (category == "cancer") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "health") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "education") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "animals") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "cultural") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "community") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "space") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "science") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "catastrophe" || category == "natural disaster") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "environmental") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "religion") window.open("cancer.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    else if (category == "university") window.open("boysgirlsclub.html", '_self', 'resizable,location,menubar,toolbar,scrollbars,status');
    return false;
}
