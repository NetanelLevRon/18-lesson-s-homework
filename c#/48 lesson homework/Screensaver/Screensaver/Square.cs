using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Screensaver
{
    class Square : Shape
    {

        #region Side Length Prop
        private double sideLength;

        public double SideLength
        {
            get { return sideLength; }
            set { sideLength = (value >= 0) ? value : throw new ArgumentException("The side length must be positive!"); }
        }
        #endregion


        #region FUNCTIONS
        #region ToString
        public override string ToString()
        {
            string baseString= base.ToString();
            return $"\nSquare:\n\nSurfaceArea: {SurfaceArea()}.\nPerimeter: {Perimeter()}.\nSideLength: {SideLength}.\n{baseString}\n\n";
        }
        #endregion

        #region SurfaceArea Calculation
        public override double SurfaceArea()
        {
            double surfaceArea = Math.Pow(SideLength, 2);
            return surfaceArea;
        }
        #endregion

        #region Perimeter Calculation 
        public override double Perimeter()
        {
            double perimeter = SideLength * 4;
            return perimeter;
        }
        #endregion 
        #endregion


        #region Ctor
        public Square():base()
        {
            Console.WriteLine("A square has been created!");
        }
        #endregion
    }
}
