using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Screensaver
{
    abstract class Shape
    {
        #region PROPERTIES
        #region Place On X Axis
        private double placeOnX;

        public double PlaceOnX
        {
            get { return placeOnX; }
            set { placeOnX = value; }
        }
        #endregion

        #region Place On Y Axis
        private double placeOnY;

        public double PlaceOnY
        {
            get { return placeOnY; }
            set { placeOnY = value; }
        }
        #endregion

        #region Color
        private string color;

        public string Color
        {
            get { return color; }
            set { color = value; }
        }
        #endregion

          #endregion


        #region FUNCTIONS
        #region ToString
        public override string ToString() => $"Place On X Axis: {PlaceOnX}.\nPlace On Y Axis: {PlaceOnY}.\nColor: {Color}.\n";
        #endregion

        #region SurfaceArea Calculation
        public abstract double SurfaceArea();
        #endregion

        #region Perimeter Calculation
        public abstract double Perimeter();
        #endregion
        #endregion


        #region Ctor
        public Shape(){ }
        #endregion
    }
}
