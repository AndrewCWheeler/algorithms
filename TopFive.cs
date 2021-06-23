using System;
using System.Linq;
using System.Collections.Generic;

// Question 1:
// Find the common elements for the given arrays array1[]={2,3,4,5,6,7,8} array2[]={5,6,7,8,9} output should be: {5,6,7,8}

// Question 2 
// Could you please write a program for below problem int a[] = {2,3,4,5,6} two sorted arrays and only integers int b[] = {4,5,6,7} ouput: {4,5,6}

// Question3 
// Could you please write a program for reverse string without using any predefined key words string str="testing"

// Question4: 
// Could you please remove duplicate charters of the given string string str="testingkkkder"

// Question5: 
// Could you please write a program for reverse string without using predefined keywords string str="reverse"

namespace CommonElement
{
    class MainClass
    {
        public static void Main (string[] args)
        {
            int[] array1 = new int[]{2, 3, 4, 5, 6, 7, 8};
            int[] array2 = new int[]{5, 6, 7, 8, 9};

            var intersection = array1.Intersect(array2);
            // List<int> result = new List<int>();
            foreach (int value in intersection)
            {
              Console.WriteLine(value);
            }
            
            // HashSet<int> hs = new HashSet<int> ();
            // ToHashSet(array1);
            // int commonElement = FindCommonInt(array2, set);
            // if (commonElement != -1)
            // {
            //     Console.WriteLine (commonElement);
            // } 
            // else 
            // {
            //     Console.WriteLine ("No Common Element");
            // }
        }
    }
}
