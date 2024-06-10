document.addEventListener('DOMContentLoaded', function() {
    let counters = document.querySelectorAll('.count');
    let speed = 800;
    let targets = [100000, 40000, 400]; 

    counters.forEach((counter, index) => {
        let target = targets[index];
        let count = 0;
        let increment = target / speed;

        let updateCount = function() {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target.toLocaleString(); 
            }
        };
        updateCount();
    });
});