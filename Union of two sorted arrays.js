let nums1 = [3, 4, 6, 7, 9, 9];
let nums2 = [1, 5, 7, 8, 8];

function Unionoftwosortedarrays(nums1, nums2) {
    let output = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < nums1.length || index2 < nums2.length) {
        if (nums1[index1] == nums2[index2]) {
            if (output[output.length - 1] !== nums2[index2]) {
                output.push(nums2[index2]);
            }

            index2++;
            index1++;
        } else if (
            nums1[index1] > nums2[index2] ||
            nums1[index1] === undefined
        ) {
            if (output[output.length - 1] !== nums2[index2]) {
                output.push(nums2[index2]);
            }

            index2++;
        } else {
            if (output[output.length - 1] !== nums1[index1]) {
                output.push(nums1[index1]);
            }

            index1++;
        }
    }

    return output;
}

console.log(Unionoftwosortedarrays(nums1, nums2));


 