using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaticCalc
{
    static class Calc
    {
        public static int GetSub(int x, int y)
        {
            return x + y;
        }

        public static int GetSub(int x, int y, int z)
        {
            return x + y + z;
        }

        public static double GetSub(double x,double y)
        {
            return x + y;
        }

        static Calc()
        {
            Console.WriteLine("This is the first use on this calculator!! {0}.\n ", DateTime.Now);
        }
    }
}
