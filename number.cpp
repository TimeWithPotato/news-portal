#include <bits/stdc++.h>
using namespace std;

int main() {
    int number[5] = {5, 3, 2, 1, 4};

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5 ; j++) { // Corrected inner loop condition
            if (number[j] > number[j + 1]) { // Compare adjacent elements
                int num = number[j];
                number[j] = number[j + 1];
                number[j + 1] = num;
            }
        }
    }

    for (int i = 0; i < 5; i++) {
        cout << number[i] << " ";
    }

    return 0;
}
