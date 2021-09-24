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

        public static void Main(string[] args)
        {
            PrintNums(255);
            PrintOdds(255);
            PrintNumsAndSum(255);
        }
    }
}