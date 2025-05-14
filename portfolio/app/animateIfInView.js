// triggering CSS animations when elements are scrolled into view

// we use the intersection Observer API to determine if objects are within the view
// if so, it adds an in-view class to elements when they come into view - and removes it when they're not in view.

export function setupIntersectionAnimations(){
     // use the intersection observer API
    const observer = new IntersectionObserver(entries => {
        // for each entry, if the entry intersects with the view, then add the in-view class.
        entries.forEach(entry => {
            console.log("Observing: ", entry.target);
            if(entry.isIntersecting){
                console.log("Entry in view: ", entry.target)
                entry.target.classList.add('in-view');
                return;
            }
            // if the entry is not intersecting, then we remove the in-view class.
            entry.target.classList.remove('in-view');
        });
    });

    const elementsToAnimate = document.querySelectorAll('.animate');
    // tell the observer to observer this element.
    console.log("Elements to observer: ", elementsToAnimate);
    elementsToAnimate.forEach((element) => observer.observe(element))
}

// we can use this code by simply adding the animate class to elements we want to animate
// in the HTML, and then configuring the css so that the animation takes place when the elements are in view.


