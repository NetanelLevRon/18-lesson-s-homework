using System;

namespace ShapeLib
{
    public class Rectangle : Shape, IDrawable
    {
        #region Width
        private double width;

        public double Width
        {
            get { return width; }
            set { width = value > 0 ? value : 0; } 
        }                                         
        #endregion

        #region Height
        private double height;

        public double Height
        {
            get { return height; }
            set { height = value; }
        }
        #endregion

        #region FUNCTIONS
        #region Get Detales
        public override string GetDetales()
        {
            return $"Rectangle:\n\n{base.GetDetales()}Width: {Width}\nHeight: {Height}\nArea: {GetArea()}\nPerimeter: {GetPerimeter()}\n";
        }
        #endregion

        #region Area & Perimeter
        public override double GetArea() => Width * Height;

        public override double GetPerimeter() => (Width + Height) * 2;
        #endregion

        #region Draw
        public void Draw()
        {
            byte innerHeight = Convert.ToByte(Height);
            byte innerWidth = Convert.ToByte(Width);

            for (int i = 0; i < innerHeight; i++)
            {
                for (int j = 0; j < innerWidth; j++)
                {
                    Console.Write("*    ");
                }
                Console.WriteLine("\n");
            }
        }
        #endregion 
        #endregion

        #region Ctor
        public Rectangle() { } 
        #endregion

    }
}
