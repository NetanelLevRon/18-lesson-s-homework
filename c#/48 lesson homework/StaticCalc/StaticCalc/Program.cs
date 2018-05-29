using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaticCalc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calc.GetSub(5, 3): " + Calc.GetSub(5, 3));
            Console.WriteLine("Calc.GetSub(5, 3, 7): " + Calc.GetSub(5, 3, 7));
            Console.WriteLine("Calc.GetSub(5.2, 3.3): " + Calc.GetSub(5.2, 3.3));
            Console.WriteLine();
        }
    }
}
