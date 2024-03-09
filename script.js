//this section for tab sidebar section
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//this section fro slide tab inside body
document.addEventListener("DOMContentLoaded", function() {
    // Programmatically click the default tab to open it
    var defaultTab = document.getElementById("defaultTabOpen");
    if (defaultTab) defaultTab.click();
  });
  
  function openTabs(evt, tabName) {
    const currentTab = document.getElementById(tabName);
    const tabs = Array.from(document.getElementsByClassName("tabContent"));
    const currentIndex = tabs.findIndex(tab => tab.id === tabName);
  
    tabs.forEach((tab, index) => {
      // Clear previous classes
      tab.classList.remove('off-screen', 'slide-left', 'slide-right');
  
      // Calculate distance
      const distance = index - currentIndex;
  
      // Determine the transform value and set opacity
      let transformValue;
      let opacityValue = 1; // Default opacity
      if (distance < 0) {
        // Slide to the left for previous tabs
        transformValue = distance * 90;
        tab.style.transform = `translateX(${transformValue}%)`;
      } else if (distance > 0) {
        // Slide to the right for next tabs
        transformValue = distance * 90;
        tab.style.transform = `translateX(${transformValue}%)`;
      } else {
        // Center the current tab
        tab.style.transform = 'translateX(0%)';
      }
  
      // Adjust opacity based on transform value
      if (transformValue === 90 || transformValue === -90) {
        opacityValue = 0.5;
      }
  
      tab.style.opacity = opacityValue;
    });
  
    // Update the 'active' class for the clicked tab button
    let tabButtons = document.getElementsByClassName("tabLinks");
    for (let button of tabButtons) {
      button.classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
  }
  


//this section is for footer tab on mobile section
document.addEventListener('DOMContentLoaded', function() {
    // Select all tab toggles and tab contents
    const tabToggles = document.querySelectorAll('.tab-toggle');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Function to close all tabs except for the one passed as a parameter
    function closeAllTabs(exceptContent = null) {
      tabContents.forEach(function(content) {
        if (content !== exceptContent) {
          content.classList.add('hidden');
          content.style.maxHeight = 0; // Also reset the max-height if you are using the sliding effect
        }
      });
      tabToggles.forEach(function(toggle) {
        if (toggle.nextElementSibling !== exceptContent) {
          toggle.querySelector('.icon-chevron-down').classList.remove('up');
        }
      });
    }
  
    // Iterate over each tab toggle
    tabToggles.forEach(function(toggle) {
      // Listen for a click event on each tab toggle
      toggle.addEventListener('click', function() {
        // The icon is a child of the toggle element
        const icon = toggle.querySelector('.icon-chevron-down');
        // This next sibling element will be the tab content associated with this toggle
        const tabContent = toggle.nextElementSibling;
  
        // Check if the tabContent is already open
        if (tabContent.classList.contains('hidden')) {
          // If it is hidden, open it and close all other tabs
          closeAllTabs(tabContent);
          tabContent.classList.remove('hidden');
          tabContent.style.maxHeight = tabContent.scrollHeight + "px"; // Set max-height for sliding effect
          icon.classList.add('up');
        } else {
          // If it is not hidden, simply close it
          tabContent.classList.add('hidden');
          tabContent.style.maxHeight = 0; // Reset max-height for sliding effect
          icon.classList.remove('up');
        }
      });
    });
    
  });
  
  //this code is for language dropdown
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

document.addEventListener('DOMContentLoaded', function () {
  // Use querySelectorAll to get all menu items and convert NodeList to Array
  const menuItems = Array.from(document.querySelectorAll('[data-menu-item]'));

  // Iterate over each menu item
  menuItems.forEach((menuItem) => {
    // Use the data attribute to find the corresponding megamenu
    const megaMenuId = menuItem.getAttribute('data-menu-item');
    const megaMenu = document.querySelector(`[data-megamenu="${megaMenuId}"]`);

    let isHoveringOverMenu = false;
    let isHoveringOverMegaMenu = false;

    // Shows the megamenu associated with the current menu item
    const showMegaMenu = () => megaMenu.style.display = 'block';
    // Hides the megamenu associated with the current menu item
    const hideMegaMenu = () => {
      // Only hide if not hovering over either the menu or the megamenu
      if (!isHoveringOverMenu && !isHoveringOverMegaMenu) {
        megaMenu.style.display = 'none';
      }
    };

    menuItem.addEventListener('mouseenter', function () {
      isHoveringOverMenu = true;
      showMegaMenu();
    });

    menuItem.addEventListener('mouseleave', function () {
      isHoveringOverMenu = false;
      // Delay hiding to check if the user has moved to the megamenu
      setTimeout(hideMegaMenu, 100);
    });

    megaMenu.addEventListener('mouseenter', function () {
      isHoveringOverMegaMenu = true;
    });

    megaMenu.addEventListener('mouseleave', function () {
      isHoveringOverMegaMenu = false;
      hideMegaMenu();
    });
  });
});


document.querySelector('[data-nav-v2-burger]').addEventListener('click', function() {
  this.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.nav-v2-burger');
  var navItems = document.querySelector('.navitems');

  burger.addEventListener('click', function() {
    // This toggles the 'navitems-visible' class on the '.navitems'
    navItems.classList.toggle('navitems-visible');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav-v2-burger');
  const menuItems = document.querySelectorAll('.menu-item');

  burger.addEventListener('click', function() {
    // Remove existing animations
    menuItems.forEach(item => {
      item.style.animation = 'none';
    });

    setTimeout(() => {
      menuItems.forEach((item, index) => {
        // Trigger reflow in between removing and adding the animation
        item.offsetHeight;

        // Re-add the animation with a delay based on the index
        item.style.animation = '';
        item.style.animationName = 'slideInWithBounce';
        item.style.animationDuration = '0.4s';
        item.style.animationFillMode = 'both';
        item.style.animationTimingFunction = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
        item.style.animationDelay = `${index * 0.03 + 0.05}s`; // staggered animation delay
      });
    }, 50); // small timeout to ensure the animations are cleared
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all menu items
  var toggleItems = document.querySelectorAll('[data-toggle]');

  toggleItems.forEach(function (toggleItem) {
    toggleItem.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor click behavior

      var target = this.getAttribute('data-toggle'); // Get the data-toggle value

      // Find the corresponding megamenu
      var targetMenu = document.querySelector(`[data-target="${target}"]`);

      // If the clicked megamenu is already showing, hide it. Otherwise, show it.
      if (targetMenu.classList.contains('show')) {
        targetMenu.classList.remove('show');
        targetMenu.classList.add('hidden');
      } else {
        // Hide any other open megamenus first
        document.querySelectorAll('[data-target]').forEach(function (menu) {
          menu.classList.remove('show');
          menu.classList.add('hidden');
        });

        // Show the clicked megamenu
        targetMenu.classList.remove('hidden');
        targetMenu.classList.add('show');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar-mbile');
  
  window.addEventListener('scroll', function() {
    // Check if page is scrolled more than 50 pixels
    if(window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });
});
