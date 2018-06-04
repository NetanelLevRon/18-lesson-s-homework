using System;
using ShapeLib;

namespace Shapes
{
    class Program
    {
        static void Main(string[] args)
        {
            Shape square = new Square
            {
                Color = "blue",
                SideLength = 5.1,
                XAxisPosition = 5.2,
                YAxisPosition=-3.5
            };
            Shape rectangle = new Rectangle
            {
                Color="red",
                Width=8.82,
                Height=12.5,
                XAxisPosition=-9,
                YAxisPosition=-7.9
            };


            Console.WriteLine(square.GetDetales());
            (square as Square).Draw();

            Console.WriteLine(rectangle.GetDetales());
            (rectangle as Rectangle).Draw();

        }
    }
}
