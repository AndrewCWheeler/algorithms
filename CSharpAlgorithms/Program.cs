using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace CSharpAlgorithms
{
  class Program
  {
    // Print 1-255
    public static void PrintNumbers()
    {
      for(int i = 1; i <= 255; i++)
      {
        Console.WriteLine(i);
      }
    }

    // Print odd numbers between 1-255
    public static void PrintOdds()
    {
      for (int i = 1; i<=255; i++)
      {
        if (i % 2 != 0){
          Console.WriteLine(i);
        }
      }
    }
    // Print all number from 0 to 255, printing also the sum as you go.
    // Example output: 
    // New number: 0 Sum: 0
    // New Number: 1 Sum: 1
    // New Number: 2 Sum: 3
    public static void PrintSum()
    {
      int sum = 0;
      for (int i = 0; i<=255; i++)
      {
        sum += i;
        Console.WriteLine($"New number: {i}" + " " + $"Sum: {sum}");
      }
    }

    // Iterating through an Array
    // Write a function that would iterate through each item of the given integer array and print each value to the console.
    public static void LoopArray(int[] numbers)
    {
      for (int i = 0; i < numbers.Length; i++)
      {
        Console.WriteLine(numbers[i]);
      }
    }

    // Find Max
    // Write a function that takes an integer array and prints and returns the maximum value in the array. 
    // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), copy
    // or even a mix of positive numbers, negative numbers and zero.
    public static int FindMax(int[] numbers)
    {
      int max = int.MinValue;
      for (int i = 0; i < numbers.Length; i++)
      {
        if(numbers[i] > max)
        {
          max = numbers[i];
        }
      }
      return max;
    }

    // Get Average
    // Write a function that takes an integer array and prints the AVERAGE of the values in the array.copy
    // For example, with an array [2, 10, 3], your program should write 5 to the console.
    public static void GetAverage(int[] numbers)
    {
      int len = numbers.Length;
      int sum = 0;
      int avg; 
      for (int i = 0; i < len; i++){
        sum += numbers[i];
      }
      avg = sum / len;
      Console.WriteLine(avg);
    }

    // Array with Odd Numbers
    // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
    // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
    public static int[] OddArray()
    {
      List<int> odds = new List<int>();
      for (int i = 1; i <= 255; i++)
      {
        if (i % 2 != 0)
        {
          odds.Add(i);
        }
      }
      int count = odds.Count;
      int[] result = new int[count];
      result = odds.ToArray();
      return result;

    }
    // Prints intersection of arr1[0..m-1] and arr2[0..n-1]
    public static void printIntersection(int[] arr1, int[] arr2)
    {
        // Console.WriteLine(arr1.ToList());
        List<int> result = new List<int>();
        HashSet<int> hs = new HashSet<int>();
        int count = 0;
        for (int i = 0; i < arr1.Length; i++)
        {
            hs.Add(arr1[i]);
        }
        
        for (int i = 0; i < arr2.Length; i++)
        {
            if (hs.Contains(arr2[i]))
            {
              result.Add(arr2[i]);
              count++;
            }
        }
        // Console.WriteLine(count);
        // Console.Write("{");
        // foreach(int i in result)
        // {
        //   Console.Write(" {0}", i);
        // }
        // Console.WriteLine(" }");
        Console.Write("{");
        for(int i = 0; i < result.Count; i++)
        {
          if(i == result.Count - 1)
          {
          Console.Write(" {0}", result[i]);
          } 
          else 
          {
            Console.Write(" {0},", result[i]);
          }
        }
        Console.WriteLine(" }");
    }

    public static void printIntersectionOfSorted(int[] arr1, int[] arr2, int m, int n)
    {
      List<int> result = new List<int>();

      int i = 0, j = 0;
      
      while(i < m && j < n)
      {
        if (arr1[i] < arr2[j])
          i++;
        else if (arr2[j] < arr1[i])
          j++;
        else {
          result.Add(arr2[j++]);
          i++;
        }
      }
      Console.Write("{");
      foreach (int item in result)
      {
        Console.Write(" {0},", item);
      }
      Console.WriteLine(" }");
    }

    static void Reverse(string str)
    {
      char[] chars = str.ToCharArray();
      for (int i = 0, j = str.Length - 1; i < j; i++, j--)
      {
        char c = chars[i];
        chars[i] = chars[j];
        chars[j] = c;
      }
      string result = new string(chars);
      Console.WriteLine(result);
    }

    static void RemoveDuplicates(string str)
    {
      string result = string.Empty;
      var unique = new HashSet<char>(str);
      foreach (char c in unique)
      {
        result += c;
      }
      Console.WriteLine(result);
    }

    static void RotateArray(int[] arr, int k, int l)
    {
      for (int i = 0; i < k; i++)
      {
        RotateByOne(arr, l);
      }

      for (int j = 0; j < l; j++)
      {
        Console.Write(arr[j] + " ");
      }
    }
    static void RotateByOne(int[] arr, int l)
    {
      int temp = arr[0];
      for(int i = 0; i < l - 1; i++)
      {
        arr[i] = arr[i + 1];
        
      }
      arr[l - 1] = temp;
    }

    static string Compress(String str)
    {
      if(str == null || str.Length <= 1)
      {
        return str;
      }
      StringBuilder result = new StringBuilder();
      char[] charr = str.ToCharArray();
      char prev = charr[0];
      int count = 1;
      for (int i = 1; i < charr.Length; i++)
      {
        if (charr[i] == prev)
        {
          count++;
        } else 
        {
          AddToResult(result, prev, count);
          prev = charr[i];
          count = 1;
        }
      }
      AddToResult(result, prev, count);
      return result.ToString();
    }

    static void AddToResult(StringBuilder str, char ch, int count)
    {
      if (count == 1){
        str.Append(ch);
      } else 
      {
        str.Append(count);
        str.Append(ch);
      }
    }

    static void Main(string[] args)
    {
      int[] array1 = {2, 3, 4, 5, 6, 7, 8};
      int[] array2 = {5, 6, 7, 8, 9};
      int m = array1.Length;
      int n = array2.Length;

      var intersection = array1.Intersect(array2);
      
      printIntersection(array1, array2);
      printIntersectionOfSorted(array1, array2, m, n);
      string testing = "testing";
      Reverse(testing);
      string test = "ttesssttgoozzi";
      RemoveDuplicates(test);
      RotateArray(array2, 3, 5);
      string sample = "aabbbcabcc";
      string compressed = Compress(sample);
      Console.WriteLine(compressed.ToString());
      // PrintNumbers();
      // PrintOdds();
      // PrintSum();
      // int[] array3 = new int[] {4,3,4,56,7};
      // int[] array4 = new int[] {-9, -10, 12, -15, 20};
      // LoopArray(array3);
      // int maximum;
      // maximum = FindMax(array4);
      // Console.WriteLine(maximum);
      // GetAverage(array3);
      // int[] odds = OddArray();
      // Console.Write(string.Join(", ", odds));
    }
  }
}
