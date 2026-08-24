//Took 202.14 mins
function longestOnes(arr, k) {
    let maxConsecutiveOnes = 0;
    let consecutiveOnes = 0;
    let flipping = 0;
    let firstOneIndex = -1;

    for (let index = 0; index < arr.length; index++) {
        const number = arr[index];
        if (
            !(
                (number == 1 && index == firstOneIndex) ||
                firstOneIndex == -1 ||
                number == 0
            )
        ) {
            continue;
        }

        firstOneIndex = -1;

        for (
            let currentIndex = index;
            currentIndex < arr.length;
            currentIndex++
        ) {
            const currentNumber = arr[currentIndex];

            if (currentNumber !== 1 && flipping === k) {
                consecutiveOnes = 0;
                flipping = 0;
                break;
            } else if (currentNumber === 0 && flipping < k) {
                flipping++;
                consecutiveOnes++;
            } else if (currentNumber === 1) {
                consecutiveOnes++;

                if (firstOneIndex === -1) {
                    firstOneIndex = currentIndex;
                }
            }

            if (maxConsecutiveOnes < consecutiveOnes) {
                maxConsecutiveOnes = consecutiveOnes;
            }
        }

        consecutiveOnes = 0;
        flipping = 0;
    }

    return maxConsecutiveOnes;
}

longestOnes([0, 0, 0, 1], 4);
