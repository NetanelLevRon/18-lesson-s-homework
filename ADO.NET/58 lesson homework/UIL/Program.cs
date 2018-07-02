using BLL;
using System;

namespace UIL
{
    class Program
    {
        static void Main(string[] args)
        {
            ProductLogic.print += (p => Console.WriteLine(p));

            ProductLogic.SearchProductByEvent();
        }
    }
}
