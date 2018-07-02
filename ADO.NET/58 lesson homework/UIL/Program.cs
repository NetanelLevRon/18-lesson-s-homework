using BLL;
using System;

namespace UIL
{
    class Program
    {
        static void Main(string[] args)
        {
            ProductLogic product = new ProductLogic();
            Console.WriteLine(product.SearchProductByEvent());
        }
    }
}
