using System;

namespace ShapeLib
{
    public class Square : Shape , IDrawable
    {
        #region Side Length
        private double sideLength;

        public double SideLength
        {
            get { return sideLength; }
            set { sideLength = value > 0 ? value : 0; }
        }
        #endregion

        #region FUNCTIONS
        #region Get Detales
        public override string GetDetales()
        {
            return $"Square:\n\n{base.GetDetales()}Side Length: {SideLength}\nArea: {GetArea()}\nPerimeter: {GetPerimeter()}\n";
        }
        #endregion

        #region Area & Perimeter
        public override double GetArea() => SideLength * 2;

        public override double GetPerimeter() => SideLength * 4;
        #endregion

        #region Draw
        public void Draw()
        {
            byte length = Convert.ToByte(SideLength);

            Console.WriteLine();

            for (int i = 0; i < length; i++)
            {
                for (int j = 0; j < length; j++)
                {
                    Console.Write("*    ");
                }
                Console.WriteLine("\n");
            }
        }
        #endregion 
        #endregion

        #region Ctor
        public Square() { }
        #endregion

        
    }
}
