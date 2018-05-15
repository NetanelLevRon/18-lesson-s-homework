using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            int temp;
            Console.Write("please enter first number: ");
            temp=int.Parse(Console.ReadLine());

            if (temp > -99 && temp < 99)
            {
                double firstNum = temp;
                Console.Write("please enter second number: ");
                temp = int.Parse(Console.ReadLine());
                if (temp > -99 && temp < 99)
                {
                    double secondNum = temp;
                    Console.WriteLine($"the gap between '{firstNum}' to '{secondNum}' is: {Math.Abs(firstNum-secondNum)}.");
                }
                else
                {
                    Console.WriteLine("please enter two char max!!");
                }

            }
            else
            {
                Console.WriteLine("please enter two char max!!");
            }
        }
    }
}
