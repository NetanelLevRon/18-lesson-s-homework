using System;

namespace Screensaver
{
    class Circle : Shape
    {
        #region Radius Prop
        private double radius;

        public double Radius
        {
            get { return radius; }
            set { radius = (value >= 0) ? value : throw new ArgumentException("The radiuse must be positive!"); }
        }
        #endregion


        #region FUNCTIONS
        #region ToString
        public override string ToString()
        {
            string baseString = base.ToString();
            return $"\nCircle:\n\nSurfaceArea: {SurfaceArea()}.\nPerimeter: {Perimeter()}.\nRadius: {Radius}.\n{baseString}\n\n";
        }
        #endregion

        #region SurfaceArea Calculation
        public override double SurfaceArea()
        {
            double surfaceArea = Math.PI * (Math.Pow(Radius, 2));
            return surfaceArea;
        }
        #endregion

        #region Perimeter Calculation 
        public override double Perimeter() //////////////////////////////////////  <T>
        {
            double perimeter = Math.PI * 2 * Radius;
            return perimeter;
        }
        #endregion 
        #endregion


        #region Ctor
        public Circle():base()
        {
            Console.WriteLine("A circle has been created!");
        }
        #endregion
     
    }
}
