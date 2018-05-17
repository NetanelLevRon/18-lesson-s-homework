using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pair_numbers_array
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[8];
            bool flag=false;
            string[] numOfInput = new string[] { "first", "second", "third", "fourth", "fifth","sixth", "seventh", "the last" };




            for (int i = 0; i < 8; i++)
            {
                string temp;
                

                do
                {
                    Console.Write($"Please enter {numOfInput[i]} number: ");
                    temp = Console.ReadLine();


                    for (int j = 0; j < temp.Length; j++)
                    {
                        if (!(temp[j] >= 48 && temp[j] <= 57))
                        {
                            Console.WriteLine("Please enter numeric content only!!");
                            break;
                        }

                        flag = (j == (temp.Length)-1);
                    }
                    

                } while (!flag);

                arr[i] = Convert.ToInt32(temp);
                flag = false;

            }

            Console.WriteLine("\nThe following pairs that their sum is odd are: \n");
            for (int i = 0, j = 1; i < ((arr.Length)-1); i++,j++)
            {
                int firstDig = arr[i];
                int secDig = arr[j];
                if((firstDig + secDig) % 2 == 1)
                {
                    Console.WriteLine($"{firstDig}, {secDig}.");
                }
            }
            Console.WriteLine();
            
        }
    }
}
