using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpConsole
{
    public class Program
    {
        // 1. Print 1-255
        public static void PrintNums(int x)
        {
            for (int i = 1; i <= x; i++)
            {
                Console.WriteLine(i);
            }
        }
        // 2. Print odd numbers between 1-255
        public static void PrintOdds(int x)
        {
            for(int i = 1; i <= x; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        // 3. Print all numbers from 0 to 255, printing also the sum as you go.
            // Example output: 
            // New number: 0 Sum: 0
            // New Number: 1 Sum: 1
            // New Number: 2 Sum: 3
        public static void PrintNumsAndSum(int x)
        {
            int sum = 0;
            for (int i = 0; i <= x; i++)
            {
                sum += i;
                Console.WriteLine("New number: {0} Sum: {1}", i, sum);
            }
        }

        // Iterating through an Array
        // Write a function that would iterate through each item of the given integer array and print each value to the console.
        public static void PrintArray(int[] arr)
        {
            Console.Write("{ ");
            for (int i = 0; i < arr.Length; i++)
            {
                if (i == arr.Length - 1)
                {
                    Console.Write("{0}", arr[i]);
                }
                else
                {
                    Console.Write("{0}, ", arr[i]);
                }
            }
            Console.WriteLine(" }");
        }
        // Find Max
        // Write a function that takes an integer array and prints and returns the maximum value in the array. 
        // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), copy
        // or even a mix of positive numbers, negative numbers and zero.

        public static int FindMax(int [] arr)
        {
            int MaxVal = arr[0];
            for (int i = 0; i < arr.Length; i++) 
            { 
                if (arr[i] > MaxVal)
                {
                    MaxVal = arr[i];
                }
            }
            Console.WriteLine(MaxVal);
            return MaxVal;
        }

        // Get Average
        // Write a function that takes an integer array and prints the AVERAGE of the values in the array.copy
        // For example, with an array [2, 10, 3], your program should write 5 to the console.

        public static void GetAverage(int[] arr)
        {
            int Avg = 0;
            int Sum = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                Sum += arr[i];
            }
            Avg = Sum / arr.Length;
            Console.WriteLine(Avg);
        }

        public static void Main(string[] args)
        {
            int[] NumArray = new int[] {3, 6, 9, 12, -9, 9, 15};
            PrintNums(255);
            PrintOdds(255);
            PrintNumsAndSum(255);
            PrintArray(NumArray);
            FindMax(NumArray);
            GetAverage(NumArray);
            
        }
    }
}