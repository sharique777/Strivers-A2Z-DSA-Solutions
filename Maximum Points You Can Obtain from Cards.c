#include <stdio.h>

int maxScore(int* cardPoints, int cardPointsSize, int k) {
    int maxPoints = 0;
    int left;
    int sum = 0;

    for (left = 0; left < k; left++) {
        sum += cardPoints[left];
    }

    left--;
    maxPoints = sum;

    for (int right = 0; right < k; right++) {
        sum += cardPoints[cardPointsSize - 1 - right];
        sum -= cardPoints[left];

        if (sum > maxPoints) {
            maxPoints = sum;
        }

        left--;
    }

    return maxPoints;
}

int main() {
    int arr[] = {9, 7, 7, 9, 7, 7, 9};

    printf("%d", maxScore(arr, 7, 7));

    return 0;
}