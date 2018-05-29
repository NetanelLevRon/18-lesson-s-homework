using System;


namespace Screensaver
{
    class Program
    {
        static void Main(string[] args)
        {

            Shape circle = new Circle();
            Shape square = new Square();


            try
            {
                Console.Write("Please enter circle x location: ");
                circle.PlaceOnX = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }
            try
            {
                Console.Write("Please enter circle y location: ");
                circle.PlaceOnY = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }

            Console.Write("Please enter circle color: ");
            circle.Color = Console.ReadLine();

            try
            {
                Console.Write("Please enter circle radius: ");
                (circle as Circle).Radius = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }


            try
            {
                Console.Write("\nPlease enter square x location: ");
                square.PlaceOnX = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }
            try
            {
                Console.Write("Please enter square y location: ");
                square.PlaceOnY = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }

            Console.Write("Please enter square color: ");
            square.Color = Console.ReadLine();
            try
            {
                Console.Write("Please enter square side length: ");
                (square as Square).SideLength = double.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("The input must be numeric!");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }


            Console.WriteLine(circle);
            Console.WriteLine(square);
        }
    }
}
